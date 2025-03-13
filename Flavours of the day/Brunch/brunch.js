document.addEventListener('DOMContentLoaded', function () {
    const recipeCardsContainer = document.getElementById('recipe-cards');
    const recipeModal = document.getElementById('recipe-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const recipeName = document.getElementById('recipe-name');
    const recipeIngredients = document.getElementById('recipe-ingredients');
    const recipeInstructions = document.getElementById('recipe-instructions');

    const recipes = [
        {
            name: "Aloo Tikki Chaat",
            image: "images/Delhi-Style Crispy Aloo Tikki Chaat.jpg",
            ingredients: "Potatoes, bread crumbs, spices, yogurt, tamarind chutney, green chutney, sev, onions, chaat masala",
            instructions: "Boil and mash potatoes, mix with spices and bread crumbs, shape into tikkis and shallow fry. Top with yogurt, chutneys, sev, onions, and chaat masala before serving."
        },
        {
            name: "Rava Kesari",
            image: "images/Rava Kesari.jpg",
            ingredients: "Semolina (rava), sugar, ghee, saffron, cardamom, nuts, water",
            instructions: "Roast rava in ghee until golden. Boil water, add saffron and cardamom. Stir in rava and cook. Add sugar, mix well, and cook until the mixture thickens. Garnish with nuts."
        },
        {
            name: "Makki ki Roti with Sarson ka Saag",
            image: "images/makki roti.jpg",
            ingredients: "Cornmeal flour, mustard greens, spinach, bathua, ginger, garlic, green chilies, butter, spices",
            instructions: "Knead cornmeal dough, roll and cook rotis on a griddle. Cook greens with garlic, ginger, and spices, then blend to a smooth consistency. Serve hot with butter."
        },
        {
            name: "Vegetable Sandwich",
            image: "images/Creamy Vegetable Sandwich.jpg",
            ingredients: "Bread, butter, cucumber, tomato, onion, green chutney, cheese (optional), salt, pepper",
            instructions: "Spread butter and green chutney on bread slices. Layer with sliced vegetables, season with salt and pepper, and grill if desired."
        },
        {
            name: "Dahi Vada",
            image: "images/dahi vada.jpg",
            ingredients: "Urad dal, yogurt, tamarind chutney, green chutney, cumin powder, chaat masala, pomegranate seeds",
            instructions: "Soak and grind urad dal, shape into dumplings, and deep-fry. Soak in water, squeeze out excess, and place in yogurt. Top with chutneys and spices before serving."
        },
        {
            name: "Pesarattu",
            image: "images/Pesarattu.jpg",
            ingredients: "Green moong dal, ginger, green chilies, rice, onions, cumin seeds",
            instructions: "Soak and blend moong dal with rice, ginger, and chilies to make a batter. Pour on a hot griddle, spread thinly, and cook until crisp. Serve with chutney."
        },
        {
            name: "Sabudana Khichdi",
            image: "images/Sabudana Khichdi.jpg",
            ingredients: "Tapioca pearls (sabudana), peanuts, potatoes, green chilies, cumin seeds, curry leaves, lemon juice",
            instructions: "Soak sabudana, drain excess water. Cook with cumin seeds, diced potatoes, peanuts, and green chilies. Stir well and finish with lemon juice."
        },
        {
            name: "Besan Chilla",
            image: "images/besan chilla.jpg",
            ingredients: "Gram flour (besan), water, green chilies, onions, tomatoes, coriander, spices",
            instructions: "Mix besan with water and spices to form a batter. Add chopped onions, tomatoes, and chilies. Cook on a griddle until golden brown. Serve with chutney."
        },
        {
            name: "Misal Pav",
            image: "images/misalpav.jpg",
            ingredients: "Sprouted moth beans, onions, tomatoes, goda masala, farsan, pav",
            instructions: "Cook sprouts with onions, tomatoes, and spices. Serve topped with farsan and chopped onions, accompanied by pav."
        },
        {
            name: "Kanda Poha",
            image: "images/poha.jpg",
            ingredients: "Flattened rice (poha), onions, mustard seeds, green chilies, turmeric, peanuts, curry leaves",
            instructions: "Soak poha lightly. Sauté mustard seeds, onions, and green chilies. Add poha, mix with turmeric, and cook until warm. Garnish with coriander and lemon."
        },
        {
            name: "Paneer Bhurji with Toast",
            image: "images/Amritsari Paneer Bhurji.jpg",
            ingredients: "Paneer (cottage cheese), onions, tomatoes, green chilies, turmeric, cumin, butter, bread",
            instructions: "Crush paneer and sauté with onions, tomatoes, chilies, and spices. Serve hot with toasted bread."
        },
        {
            name: "Batata Vada",
            image: "images/Mumbai Special Vada Pav.jpg",
            ingredients: "Potatoes, gram flour, green chilies, mustard seeds, curry leaves, garlic, oil",
            instructions: "Boil and mash potatoes, mix with spices. Coat with gram flour batter and deep-fry until golden. Serve with chutney."
        },
        {
            name: "Moong Dal Chilla",
            image: "images/moong dal chilla.jpg",
            ingredients: "Moong dal, green chilies, ginger, onions, coriander, salt",
            instructions: "Soak moong dal, grind with ginger and chilies to make a batter. Cook on a griddle until golden brown. Serve with chutney."
        },
        {
            name: "Palak Poori with Aloo Sabzi",
            image: "images/palak puri.jpg",
            ingredients: "Whole wheat flour, spinach, potatoes, cumin, green chilies, oil, spices",
            instructions: "Blend spinach and mix with flour to make a dough. Roll into pooris and deep-fry. Serve with spiced potato curry."
        },
        {
            name: "Vegetable Frankie (Kathi Roll)",
            image: "images/Kathi roll.jpg",
            ingredients: "Wheat flour, potatoes, capsicum, onions, spices, cheese (optional), green chutney",
            instructions: "Cook vegetables with spices, place on a soft paratha, roll tightly, and serve with chutney."
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
