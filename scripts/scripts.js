// Lista de perros (puedes agregar más perros o hacer que esto provenga de un archivo JSON)
const pets = [
    { name: "Perro 1", image: "src/image/perro1.jpg", description: "Descripción del perro 1" },
    { name: "Perro 2", image: "src/image/perro2.jpg", description: "Descripción del perro 2" },
    { name: "Perro 3", image: "src/image/perro3.jpg", description: "Descripción del perro 3" },
    { name: "Perro 4", image: "src/image/perro4.jpg", description: "Descripción del perro 4" }
];

// Obtener el contenedor donde se mostrarán las imágenes
const petsGallery = document.getElementById("petsGallery");

// Función para mostrar las imágenes de los perros
function displayPets() {
    pets.forEach(pet => {
        // Crear un elemento div para cada perro
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");

        // Crear contenido dentro de la tarjeta del perro
        petCard.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}" class="pet-image">
            <h3>${pet.name}</h3>
            <p>${pet.description}</p>
            <button onclick="addToFavorites('${pet.name}')">Add to Favorites</button>
        `;

        // Añadir la tarjeta del perro al contenedor
        petsGallery.appendChild(petCard);
    });
}

// Llamar a la función para mostrar las mascotas
displayPets();

// Función para agregar a favoritos (se guarda en LocalStorage)
function addToFavorites(petName) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const pet = pets.find(p => p.name === petName);
    if (pet && !favorites.some(f => f.name === petName)) {
        favorites.push(pet);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${petName} added to favorites!`);
    }
}
