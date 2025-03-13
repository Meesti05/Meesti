document.addEventListener('DOMContentLoaded', function () {
    const recipeCardsContainer = document.getElementById('recipe-cards');
    const recipeModal = document.getElementById('recipe-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const recipeName = document.getElementById('recipe-name');
    const recipeIngredients = document.getElementById('recipe-ingredients');
    const recipeInstructions = document.getElementById('recipe-instructions');
    const recipeVideo = document.getElementById('recipe-video');

    const recipes = [
        {
            name: "Aloo Puri",
            image: "images/aloo puri.jpg",
            video: "videos/aloo puri.mp4",
            ingredients: "Boiled potatoes, wheat flour, semolina, spices (cumin, coriander, chili), salt, oil for frying",
            instructions: "Begin by mashing boiled potatoes and mixing them with wheat flour, semolina, and spices. Add salt to taste. Knead the mixture into a smooth dough, adding water as needed. Divide the dough into small balls and roll them out into small puris. Heat oil in a deep pan and gently slide in the puris. Fry until golden brown and puffed up. Serve hot with potato curry or chutney."
        },
        {
            name: "Oats Chilla",
            image: "images/Oats chilla recipe - Raks Kitchen.jpg",
            video: "videos/chilla.mp4",
            ingredients: "Oats flour, semolina, yogurt, chopped vegetables (onion, tomato, carrots), green chilies, ginger, spices (cumin, turmeric), salt, oil",
            instructions: "Mix oats flour and semolina with yogurt, adding water to form a smooth batter. Add chopped vegetables, green chilies, ginger, and spices. Season with salt. Let the batter rest for 10 minutes. Heat a non-stick pan and pour a ladleful of batter. Spread it evenly to form a chilla. Cook on both sides until golden brown. Serve hot with chutney or sauce."
        },
        {
            name: "Dal Paratha",
            image: "images/dal paratha.jpg",
            video: "videos/Dal Paratha.mp4",
            ingredients: "Cooked dal (lentil), wheat flour, spices (cumin, coriander, garam masala), chopped onions, green chilies, ginger, salt, oil",
            instructions: "Mash cooked dal and mix with chopped onions, green chilies, ginger, and spices. Add salt to taste. Knead wheat flour into a soft dough. Divide the dough into balls and roll them out. Place a spoonful of dal mixture in the center, seal the edges, and roll out again into a paratha. Cook on a hot griddle with oil until golden brown on both sides. Serve hot with yogurt or pickle."
        },
        {
            name: "Rava Idli",
            image: "images/Instant Rawa Idli Recipe.jpg",
            video: "videos/rava idli.mp4",
            ingredients: "Semolina (rava), yogurt, water, baking soda, mustard seeds, urad dal, curry leaves, oil, salt",
            instructions: "Roast semolina until lightly golden. Mix with yogurt and water to form a batter. Add salt and baking soda. In a separate pan, prepare a tempering with mustard seeds, urad dal, and curry leaves. Add this to the batter. Pour the batter into greased idli molds and steam for 10-12 minutes. Serve hot with coconut chutney and sambar."
        },
        {
            name: "Rava Dosa",
            image: "images/rava dosa.jpg",
            video: "videos/rawa dosa.mp4",
            ingredients: "Semolina (rava), rice flour, all-purpose flour, chopped onions, green chilies, ginger, cumin seeds, curry leaves, water, salt, oil",
            instructions: "Mix semolina, rice flour, and all-purpose flour with water to form a thin batter. Add chopped onions, green chilies, ginger, cumin seeds, curry leaves, and salt. Let the batter rest for 15 minutes. Heat a non-stick pan and pour a ladleful of batter from a height to form a thin dosa. Cook until golden brown and crispy. Serve hot with chutney."
        },
        {
            name: "Thepla",
            image: "images/thepla.jpg",
            video: "videos/thepla.mp4",
            ingredients: "Wheat flour, gram flour, fenugreek leaves (methi), yogurt, spices (turmeric, chili, coriander), ginger-garlic paste, salt, oil",
            instructions: "Chop fenugreek leaves finely. Mix wheat flour, gram flour, fenugreek leaves, yogurt, spices, ginger-garlic paste, and salt. Knead into a smooth dough, adding water as needed. Divide the dough into small balls and roll them out into theplas. Cook on a hot griddle with oil until golden brown on both sides. Serve hot with yogurt or pickle."
        },
        {
            name: "Upma",
            image: "images/Semolina Upma.jpg",
            video: "videos/upma.mp4",
            ingredients: "Semolina (rava), mustard seeds, urad dal, chana dal, curry leaves, chopped onions, green chilies, ginger, vegetables (carrots, peas), water, oil, salt",
            instructions: "Roast semolina until lightly golden. In a pan, prepare a tempering with mustard seeds, urad dal, chana dal, and curry leaves. Add chopped onions, green chilies, and ginger. Sauté until onions are translucent. Add vegetables and cook until tender. Add water and salt, and bring to a boil. Gradually add the roasted semolina, stirring continuously to avoid lumps. Cook until the upma thickens and is well-cooked. Serve hot."
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
        recipeVideo.src = recipe.video;
        recipeModal.style.display = 'block';
        recipeVideo.load();
        recipeVideo.play();
    }

    function closeModal() {
        recipeModal.style.display = 'none';
        recipeVideo.pause();
        recipeVideo.currentTime = 0;
    }

    closeModalBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === recipeModal) {
            closeModal();
        }
    });

    createRecipeCards();
});