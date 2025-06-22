function adoptPet() {
    alert("Thank you for your interest in adopting! Our team will contact you soon.");
}

const pets = [
  {
    img: "img/dog.jpg",
    alt: "Cute Dog",
    name: "Charlie - Golden Retriever"
  },
  {
    img: "img/cat.webp",
    alt: "Cute Cat",
    name: "Milo - British Shorthair"
  },
  {
    img: "img/jumbotron.jpg", 
    alt: "Lovely Pet",
    name: "Max - Labrador Puppy"
  }
];

// Function to display all pets dynamically
function displayAllPets() {
  const allPetsContainer = document.getElementById("all-pets-container");
  if (!allPetsContainer) {
    console.error("Error: 'all-pets-container' not found in the HTML.");
    return;
  }

  allPetsContainer.innerHTML = '';

  pets.forEach(pet => {
    const petDiv = document.createElement('div');
    petDiv.classList.add('pet'); 

    petDiv.innerHTML = `
      <img src="${pet.img}" alt="${pet.alt}">
      <p>${pet.name}</p>
      <button onclick="adoptPet()">Adopt Now</button>
    `;
    allPetsContainer.appendChild(petDiv);
  });
}

// Call the function to display all pets when the page loads
window.onload = displayAllPets;

