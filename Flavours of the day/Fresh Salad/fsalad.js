document.addEventListener('DOMContentLoaded', function () {
    const recipeCardsContainer = document.getElementById('recipe-cards');
    const recipeModal = document.getElementById('recipe-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const recipeName = document.getElementById('recipe-name');
    const recipeIngredients = document.getElementById('recipe-ingredients');
    const recipeInstructions = document.getElementById('recipe-instructions');

    const recipes = [
        {
            name: "Carrot, Radish & Peanut Salad",
            image: "Carrot, Radish & Peanut Salad with Lemon Recipe.jpg",
            ingredients: "Carrots, radishes, peanuts, lemon juice, cilantro, salt, pepper",
            instructions: "Shred carrots and radishes. Chop peanuts and cilantro. Whisk together lemon juice, salt, and pepper for the dressing. Combine all ingredients and toss with the dressing."
        },
        {
            name: "Chickpea Salad",
            image: "Chickpea Salad.jpg",
            ingredients: "Chickpeas, cucumber, tomato, onion, parsley, lemon juice, olive oil, salt, pepper",
            instructions: "Combine chickpeas, chopped cucumber, tomato, onion, and parsley. Whisk together lemon juice, olive oil, salt, and pepper for the dressing. Toss the salad with the dressing."
        },
        {
            name: "Indian Street Food Chaat Salad",
            image: "Indian Street Food Chaat Salad.jpg",
            ingredients: "Potatoes, chickpeas, sev, chutneys (tamarind, mint-coriander), yogurt, chaat masala, onions, tomatoes",
            instructions: "Boil and chop potatoes. Combine with chickpeas, sev, chutneys, yogurt, chaat masala, chopped onions, and tomatoes. Mix well and serve."
        },
        {
            name: "Sprouts Salad",
            image: "Sprouts Salad.jpg",
            ingredients: "Sprouts (moong, chana, etc.), onion, tomato, cucumber, lemon juice, chaat masala, salt, pepper",
            instructions: "Combine sprouts with chopped onion, tomato, and cucumber. Mix lemon juice, chaat masala, salt, and pepper for the dressing. Toss the salad with the dressing."
        },
        {
            name: "Moong Salad",
            image: "Sprouted Moong Salad (Mung Bean).jpg",
            ingredients: "Moong dal, cucumber, tomato, onion, green chili, lemon juice, salt, pepper",
            instructions: "Soak moong dal overnight. Combine with chopped cucumber, tomato, onion, and green chili. Dress with lemon juice, salt, and pepper."
        },
        {
            name: "Mixed Veg Salad",
            image: "Vegan Mixed Veg Raita with Tomato, Cucumber, Onion, and Mint — Plantbasedredhead.jpg",
            ingredients: "Your choice of vegetables (carrots, cucumbers, tomatoes, bell peppers, etc.), lettuce, dressing of your choice",
            instructions: "Chop all vegetables and lettuce. Toss with your favorite dressing."
        },
        {
            name: "Beetroot Salad",
            image: "Beetroot Salad With Coconut And Peanuts.jpg",
            ingredients: "Beetroot, carrots, apples, walnuts, lemon juice, olive oil, salt, pepper",
            instructions: "Roast or boil beetroot and carrots. Chop them along with apples and walnuts. Whisk together lemon juice, olive oil, salt, and pepper for the dressing. Combine all ingredients and toss with the dressing."
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