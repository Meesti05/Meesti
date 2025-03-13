document.addEventListener('DOMContentLoaded', function () {
    const recipeCardsContainer = document.getElementById('recipe-cards');
    const recipeModal = document.getElementById('recipe-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const recipeName = document.getElementById('recipe-name');
    const recipeIngredients = document.getElementById('recipe-ingredients');
    const recipeInstructions = document.getElementById('recipe-instructions');

    const recipes = [
        {
            name: "Baingan Bharta",
            image: "images/Baigan Bharta.jpg",
            ingredients: "Eggplant, onions, tomatoes, garlic, ginger, green chilies, spices",
            instructions: "Roast eggplant, peel and mash it. Sauté onions, tomatoes, garlic, and spices. Mix in mashed eggplant and cook well. Serve with roti."
        },
        {
            name: "Paneer Butter Masala",
            image: "images/Paneer Makhani (Paneer Butter Masala).jpg",
            ingredients: "Paneer, tomatoes, butter, cream, cashews, garlic, spices",
            instructions: "Blend tomatoes and cashews into a smooth puree. Cook with butter, spices, and cream. Add paneer cubes and simmer. Serve with naan."
        },
        {
            name: "Vegetable Pulao",
            image: "images/Veg Pulao - Vegetable Pulav.jpg",
            ingredients: "Basmati rice, mixed vegetables, whole spices, onions, ginger, garlic",
            instructions: "Sauté whole spices, onions, and garlic. Add vegetables and rice. Pour water, cover, and cook until fluffy. Serve hot."
        },
        {
            name: "Dal Tadka",
            image: "images/Moong Dal Tadka.jpg",
            ingredients: "Lentils, onions, tomatoes, garlic, cumin, ghee, spices",
            instructions: "Boil lentils until soft. Sauté onions, tomatoes, and garlic in ghee. Add to lentils and mix well. Serve with rice."
        },
        {
            name: "Aloo Gobi",
            image: "images/aloo gobi.jpg",
            ingredients: "Potatoes, cauliflower, tomatoes, green chilies, spices",
            instructions: "Sauté potatoes and cauliflower with spices. Add tomatoes and cook until tender. Serve with chapati."
        },
        {
            name: "Palak Paneer",
            image: "images/soulfulandhealthy.jpg",
            ingredients: "Spinach, paneer, onions, tomatoes, garlic, ginger, spices",
            instructions: "Blanch and blend spinach. Sauté onions, tomatoes, and spices. Add spinach puree and paneer cubes. Simmer and serve with rice."
        },
        {
            name: "Stuffed Paratha with Curd",
            image: "images/Aloo Paratha Recipe.jpg",
            ingredients: "Whole wheat flour, potatoes/paneer, green chilies, spices, curd",
            instructions: "Knead dough, prepare stuffing, and roll out parathas. Cook on a tawa until golden. Serve hot with curd."
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
