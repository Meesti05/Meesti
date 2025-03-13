document.addEventListener('DOMContentLoaded', function() {
    // Navigation Link Animation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#d32f2f';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '#333';
        });
    });

    // CTA Button Click Event
    document.getElementById('exploreRecipes').addEventListener('click', function() {
        // Replace with the actual URL of your recipes page
        window.location.href = 'recipes.html';
    });

    // Text Animation (Fade In and Slide Up)
    const animateTexts = document.querySelectorAll('.animate-text');
    const animateFeatures = document.querySelectorAll('.animate-feature');
    const animateSectionTitle = document.querySelectorAll('.section-title');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animateTexts.forEach(text => {
        text.style.opacity = '0';
        text.style.transform = 'translateY(50px)';
        observer.observe(text);
    });

    animateFeatures.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(50px)';
        observer.observe(feature);
    });

    animateSectionTitle.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(50px)';
        observer.observe(title);
    });

    // Feature Item Hover Animation (Icon Scale)
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        const icon = item.querySelector('i');
        item.addEventListener('mouseover', function() {
            icon.style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseout', function() {
            icon.style.transform = 'scale(1)';
        });
    });
});