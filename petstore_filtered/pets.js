// pets.js

function adoptPet() {
    alert("Thank you for your interest in adopting! Our team will contact you soon.");
}

// Define the pets specifically for the 'All Pets' page
const allAvailablePets = [
  {
    img: "img/jumbotron.jpg", 
    alt: "Max - Labrador Puppy",
    name: "Max - Labrador Puppy"
  },
  {
    img: "img/birds/bird01.jpg", 
    alt: "Luna - Parrot",
    name: "Luna - Parrot"
  },
  {
    img: "img/birds/bird02.jpg", 
    alt: "Blue - Parrot",
    name: "Blue - Parrot"
  },
  {
    img: "img/cats/cat01.jpg", 
    alt: "Whiskers - Siamese",
    name: "Whiskers - Siamese"
  },
  {
    img: "img/cats/cat02.jpg", 
    alt: "Whiskers - Siamese",
    name: "Whiskers - Siamese"
  },
  {
    img: "img/cats/cat03.jpg", 
    alt: "Whiskers - Siamese",
    name: "Whiskers - Siamese"
  },
  {
    img: "img/dogs/dog01.jpg", // Assuming you have more dog images
    alt: "Buddy - Beagle",
    name: "Buddy - Beagle"
  },
  {
    img: "img/dogs/dog02.jpg", // Assuming you have more dog images
    alt: "Buddy - Beagle",
    name: "Buddy - Beagle"
  },
  {
    img: "img/dogs/dog03.jpg", // Assuming you have more dog images
    alt: "Buddy - Beagle",
    name: "Buddy - Beagle"
  },
  {
    img: "img/capybaras/capybara01.jpg", // Assuming you have capybara images
    alt: "Capy - Capybara",
    name: "Capy - Capybara"
  }
  // Add more pets here as needed for your "All Pets" section
];

// Function to display all pets dynamically on the 'pets.html' page
function displayAllAvailablePets() {
  const allPetsContainer = document.getElementById("pet-list-container"); // Matches ID in pets.html
  if (!allPetsContainer) {
    console.error("Error: 'pet-list-container' not found in the HTML.");
    return;
  }

  allPetsContainer.innerHTML = ''; // Clear any existing content

  allAvailablePets.forEach(pet => {
    const petDiv = document.createElement('div');
    petDiv.classList.add('pet'); // Apply existing 'pet' styling (from style.css)

    petDiv.innerHTML = `
      <img src="${pet.img}" alt="${pet.alt}">
      <p>${pet.name}</p>
      <button onclick="adoptPet()">Adopt Now</button>
    `;
    allPetsContainer.appendChild(petDiv);
  });
}

// Call the function to display all pets when the page loads
window.onload = displayAllAvailablePets;