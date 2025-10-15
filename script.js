// --------------------
// Form submission and Data Saving
// --------------------
const dogForm = document.getElementById('dogForm');
const dogImageInput = document.getElementById('dogImage');
const cameraButton = document.getElementById('cameraButton');
const captureButton = document.getElementById('captureButton');
const cameraFeed = document.getElementById('cameraFeed');
const clearButton = document.querySelector('.clear-btn');

// Save data to localStorage and redirect to result page
function saveAndRedirect(dogName, dogAge, dogBreed, dataUrl) {
  const dogData = {
    name: dogName,
    age: dogAge, // stored in total months
    breed: dogBreed,
    image: dataUrl
  };
  localStorage.setItem('dogData', JSON.stringify(dogData));
  window.location.href = 'result.html';
}

// --------------------
// Form Submit Handler
// --------------------
dogForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const dogName = document.getElementById('Name').value.trim();
  const dogAgeYears = parseInt(document.getElementById('AgeYears').value) || 0;
  const dogAgeMonths = parseInt(document.getElementById('AgeMonths').value) || 0;
  const dogAge = (dogAgeYears * 12) + dogAgeMonths;
  const dogBreed = document.getElementById('dogBreed').value;
  let dataUrl = '';

  // Basic validation
  if (!dogName) {
    alert('Please enter your dog’s name.');
    return;
  }
  if (!dogBreed || dogBreed === 'Select Breed') {
    alert('Please select a valid dog breed.');
    return;
  }

  if (dogImageInput.files && dogImageInput.files[0]) {
    // Uploaded image
    const reader = new FileReader();
    reader.onload = function (event) {
      dataUrl = event.target.result;
      saveAndRedirect(dogName, dogAge, dogBreed, dataUrl);
    };
    reader.readAsDataURL(dogImageInput.files[0]);
  } else if (cameraFeed.srcObject) {
    // Captured from camera
    const video = cameraFeed;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    dataUrl = canvas.toDataURL('image/png');
    saveAndRedirect(dogName, dogAge, dogBreed, dataUrl);
  } else {
    // No image (will use Unsplash placeholder)
    saveAndRedirect(dogName, dogAge, dogBreed, dataUrl);
  }
});

// --------------------
// Camera Functionality
// --------------------
cameraButton.addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    cameraFeed.srcObject = stream;
    cameraFeed.style.display = 'block';
    captureButton.style.display = 'block';
    cameraButton.style.display = 'none';
    dogImageInput.disabled = true; // Disable upload while camera is active
  } catch (err) {
    console.error('Error accessing camera:', err);
    alert('Could not access the camera. Please upload a file instead.');
    // Re-enable file input if permission denied
    dogImageInput.disabled = false;
    cameraFeed.style.display = 'none';
    captureButton.style.display = 'none';
    cameraButton.style.display = 'block';
  }
});

captureButton.addEventListener('click', () => {
  const dogName = document.getElementById('Name').value.trim();
  const dogBreed = document.getElementById('dogBreed').value;

  if (dogName === '' || !dogBreed || dogBreed === 'Select Breed') {
    alert('Please fill in Dog Name and select a Breed before capturing!');
    return;
  }

  const dogAgeYears = parseInt(document.getElementById('AgeYears').value) || 0;
  const dogAgeMonths = parseInt(document.getElementById('AgeMonths').value) || 0;
  const dogAge = (dogAgeYears * 12) + dogAgeMonths;

  const video = cameraFeed;
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  const dataUrl = canvas.toDataURL('image/png');

  // Save and redirect
  saveAndRedirect(dogName, dogAge, dogBreed, dataUrl);

  // Stop camera stream and reset UI
  const stream = cameraFeed.srcObject;
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
  }
  cameraFeed.pause();
  cameraFeed.srcObject = null;
  cameraFeed.removeAttribute('src');
  cameraFeed.style.display = 'none';
  captureButton.style.display = 'none';
  cameraButton.style.display = 'block';
  dogImageInput.disabled = false;
});

// --------------------
// Image Input Change
// --------------------
dogImageInput.addEventListener('change', () => {
  if (dogImageInput.files && dogImageInput.files[0]) {
    if (cameraFeed.srcObject) {
      const stream = cameraFeed.srcObject;
      stream.getTracks().forEach(track => track.stop());
      cameraFeed.srcObject = null;
    }
    cameraFeed.style.display = 'none';
    captureButton.style.display = 'none';
    cameraButton.style.display = 'block';
  }
});

// --------------------
// Clear Button
// --------------------
clearButton.addEventListener('click', function () {
  if (confirm('Are you sure you want to clear the form?')) {
    dogForm.reset();
  }
});

// --------------------
// FAQ Accordion
// --------------------
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    const answer = question.nextElementSibling;
    const triangle = question.querySelector('.triangle');

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      triangle.classList.remove('active');
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      triangle.classList.add('active');
    }
  });
});