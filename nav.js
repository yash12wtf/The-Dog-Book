document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const headerNav = document.querySelector('.header-nav');

  if (hamburgerMenu && headerNav) {
    hamburgerMenu.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent click from bubbling up to document
      hamburgerMenu.classList.toggle('active');
      headerNav.classList.toggle('active');
    });
  }

  // Optional: Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (headerNav && headerNav.classList.contains('active')) {
      if (!headerNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        hamburgerMenu.classList.remove('active');
        headerNav.classList.remove('active');
      }
    }
  });
});
