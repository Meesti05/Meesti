document.addEventListener('DOMContentLoaded', function () {
    const recipeCardsContainer = document.getElementById('recipe-cards');
    const recipeModal = document.getElementById('recipe-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const recipeName = document.getElementById('recipe-name');
    const recipeIngredients = document.getElementById('recipe-ingredients');
    const recipeInstructions = document.getElementById('recipe-instructions');

    const recipes = [
        {
            name: "Dhokla",
            image: "images/dhokla.jpg",
            ingredients: "Gram flour, yogurt, turmeric, mustard seeds, green chilies, curry leaves",
            instructions: "Mix gram flour with yogurt and let it ferment. Steam until fluffy, then temper with mustard seeds and green chilies. Serve with chutney."
        },
        {
            name: "Ghugni",
            image: "images/ghugni.jpg",
            ingredients: "Yellow or white peas, onions, tomatoes, green chilies, cumin, garam masala",
            instructions: "Soak and cook peas. Sauté onions, tomatoes, and spices. Mix with peas and simmer until thick. Serve hot."
        },
        {
            name: "Patra",
            image: "images/patra.jpg",
            ingredients: "Colocasia leaves, gram flour, tamarind, jaggery, spices",
            instructions: "Spread gram flour paste on leaves, roll tightly, steam, and slice. Shallow fry and serve with chutney."
        },
        {
            name: "Faraa",
            image: "images/pitha.jpg",
            ingredients: "Rice flour, water, green chilies, cumin seeds, coriander, salt",
            instructions: "Knead rice flour into a dough, shape into dumplings, steam, and temper with cumin and chilies. Serve hot."
        },
        {
            name: "Churumuri",
            image: "images/churmuri.jpg",
            ingredients: "Puffed rice, onions, tomatoes, green chilies, coconut, coriander, lemon juice",
            instructions: "Mix all ingredients in a bowl. Serve fresh and crunchy."
        },
        {
            name: "Bonda",
            image: "images/bonda.jpg",
            ingredients: "Potatoes, gram flour, mustard seeds, curry leaves, green chilies, spices",
            instructions: "Mash potatoes, mix with spices, shape into balls, coat with gram flour batter, and deep-fry. Serve with chutney."
        },
        {
            name: "Thekua",
            image: "images/Thekua.jpg",
            ingredients: "Wheat flour, jaggery, ghee, fennel seeds, coconut",
            instructions: "Mix ingredients into a dough, shape into small discs, and deep-fry until golden brown."
        }
    ];

    function createRecipeCards() {
        recipes.forEach(recipe => {
            const card = document.createElement('div');
            card.classList.add('recipe-card');
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe-card-content">
                    <h3>${recipe.name}</h3>
                </div>
            `;
            card.addEventListener('click', () => showRecipeModal(recipe));
            recipeCardsContainer.appendChild(card);
        });
    }

    function showRecipeModal(recipe) {
        recipeName.textContent = recipe.name;
        recipeIngredients.textContent = recipe.ingredients;
        recipeInstructions.textContent = recipe.instructions;
        recipeModal.style.display = 'block';
    }

    closeModalBtn.addEventListener('click', () => {
        recipeModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === recipeModal) {
            recipeModal.style.display = 'none';
        }
    });

    createRecipeCards();
});
