// --------------------
// Dog Info Result Script
// --------------------

console.log('result.js is running');

// --------------------
// Load dog data from localStorage
// --------------------
const dogData = JSON.parse(localStorage.getItem('dogData'));

const breedBackgrounds = {
  "Labrador Retriever": "labrador.png",
  "German Shepherd": "german.png",
  "Golden Retriever": "golden retriever.png",
  "Poodle": "poodle.png",
  "Bulldog": "bulldg.png",
  "Pomeranian": "pomeranian.png",
  "Beagle": "beagle.png",
  "Dachshund": "dachshund.png",
  "Rottweiler": "rottweiler.png",
  "Doberman Pinscher": "doberman.png",
  "Boxer": "boxer.png",
  "Indian Spitz": "indian spitz.png",
  "Shih Tzu": "shih tzu.png",
  "Cocker Spaniel": "cocker spaniel.png",
  "Pug": "pug.png",
};

// --------------------
// Ensure Data is Loaded
// --------------------
window.addEventListener('DOMContentLoaded', () => {
  if (dogData && typeof dogBreedData !== 'undefined') {
    console.log('dogData:', dogData);
    console.log('dogBreedData:', dogBreedData);

    // Display Name and Breed
    document.getElementById('dogNameDisplay').textContent = dogData.name || "Unknown Name";
    document.getElementById('dogBreedDisplay').textContent = dogData.breed || "Unknown Breed";

    // Display Image (or fallback)
    const dogPhoto = document.getElementById('dogPhoto');
    if (dogData.image) {
      dogPhoto.src = dogData.image;
    } else {
      dogPhoto.src = `https://source.unsplash.com/400x300/?${dogData.breed || 'dog'}`;
    }

    // Set Background Based on Breed
    const bgElement = document.getElementById('background-slideshow');
    const customBackground = breedBackgrounds[dogData.breed];
    if (customBackground) {
      bgElement.style.backgroundImage = `url('${customBackground}')`;
    } else {
      bgElement.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${dogData.breed || 'dog'}')`;
    }

    // Determine Age Group (dogData.age in months)
    let ageGroup;
    if (dogData.age <= 12) {
      ageGroup = 'puppy';
    } else if (dogData.age <= 84) {
      ageGroup = 'adult';
    } else {
      ageGroup = 'senior';
    }

    // Get Breed Info
    const breedInfo = dogBreedData[dogData.breed];
    if (breedInfo) {
      const ageGroupInfo = breedInfo[ageGroup];
      if (ageGroupInfo) {
        document.getElementById('overview').innerHTML = ageGroupInfo.overview || '';
        document.getElementById('physicalTraits').innerHTML = ageGroupInfo.physicalTraits || '';
        document.getElementById('diet').innerHTML = ageGroupInfo.diet || '';
        document.getElementById('training').innerHTML = ageGroupInfo.training || '';
        document.getElementById('grooming').innerHTML = ageGroupInfo.grooming || '';
        document.getElementById('healthTips').innerHTML = ageGroupInfo.healthTips || '';

        // Populate Lists
        const lists = [
          { id: 'phobiasList', data: ageGroupInfo.phobias },
          { id: 'allergiesList', data: ageGroupInfo.allergies },
          { id: 'foodList', data: ageGroupInfo.food },
          { id: 'medicinesList', data: ageGroupInfo.medicines }
        ];

        lists.forEach(({ id, data }) => {
          const listElement = document.getElementById(id);
          listElement.innerHTML = '';
          if (data && Array.isArray(data)) {
            data.forEach(item => {
              const li = document.createElement('li');
              li.textContent = item;
              listElement.appendChild(li);
            });
          }
        });
      }

      // Life Span (shared for all ages)
      document.getElementById('lifeSpan').textContent = breedInfo.lifeSpan || 'N/A';
    }
  } else {
    console.warn('dogData not found or dogBreedData missing.');

    // Fallback for demo/testing
    document.getElementById('dogNameDisplay').textContent = "Sample Dog (No Data)";
    document.getElementById('dogBreedDisplay').textContent = "Labrador Retriever";
    document.getElementById('dogPhoto').src = 'https://source.unsplash.com/400x300/?dog';
    const bgElement = document.getElementById('background-slideshow');
    bgElement.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?dog')`;
  }

  // --------------------
  // DNA Test Button
  // --------------------
  const dnaBtn = document.getElementById('dnaTestBtn');
  if (dnaBtn) {
    dnaBtn.addEventListener('click', () => {
      window.open('https://www.embarkvet.com/dog-dna-test/', '_blank');
    });
  }
});