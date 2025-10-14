document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const closeBtns = document.querySelectorAll('.close-btn');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const userInfo = document.getElementById('user-info');
  const usernameDisplay = document.getElementById('username-display');
  const logoutBtn = document.getElementById('logoutBtn');
  const authButtons = document.querySelector('.auth-buttons');

  // --- MODAL HANDLING ---
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      loginModal.style.display = 'block';
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener('click', () => {
      signupModal.style.display = 'block';
    });
  }

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (loginModal) loginModal.style.display = 'none';
      if (signupModal) signupModal.style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
    if (e.target === signupModal) {
      signupModal.style.display = 'none';
    }
  });

  // --- USER "DATABASE" (localStorage) ---
  const getUsers = () => {
    return JSON.parse(localStorage.getItem('dogBookUsers')) || [];
  };

  const saveUsers = (users) => {
    localStorage.setItem('dogBookUsers', JSON.stringify(users));
  };

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('dogBookCurrentUser'));
  };

  const setCurrentUser = (user) => {
    localStorage.setItem('dogBookCurrentUser', JSON.stringify(user));
  };

  const logoutUser = () => {
    localStorage.removeItem('dogBookCurrentUser');
    updateUI();
  };

  // --- SIGNUP ---
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;

      const users = getUsers();
      const userExists = users.find(user => user.email === email);

      if (userExists) {
        alert('User with this email already exists.');
        return;
      }

      const newUser = { name, email, password };
      users.push(newUser);
      saveUsers(users);
      setCurrentUser(newUser);
      signupModal.style.display = 'none';
      updateUI();
    });
  }

  // --- LOGIN ---
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      const users = getUsers();
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        setCurrentUser(user);
        loginModal.style.display = 'none';
        updateUI();
      } else {
        alert('Invalid email or password.');
      }
    });
  }

  // --- LOGOUT ---
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      logoutUser();
    });
  }

  // --- UI UPDATE ---
  const updateUI = () => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      if(loginBtn) loginBtn.style.display = 'none';
      if(signupBtn) signupBtn.style.display = 'none';
      if(userInfo) userInfo.style.display = 'block';
      if(usernameDisplay) usernameDisplay.textContent = `Welcome, ${currentUser.name}`;
    } else {
      if(loginBtn) loginBtn.style.display = 'block';
      if(signupBtn) signupBtn.style.display = 'block';
      if(userInfo) userInfo.style.display = 'none';
      if(usernameDisplay) usernameDisplay.textContent = '';
    }
  };

  // Initial UI update on page load
  updateUI();
});
