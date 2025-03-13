document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const videos = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;
    const itemWidth = videos[0].offsetWidth + 20; // Include margin

    function updateCarousel() {
        carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;

        // Apply 3D rotation effect
        videos.forEach((item, index) => {
            const distance = Math.abs(index - currentIndex);
            const rotation = distance * 30; // Adjust rotation angle as needed
            const scale = 1 - distance * 0.1; // Adjust scale as needed

            item.style.transform = `perspective(800px) rotateY(${distance > 0 ? (index > currentIndex ? -rotation : rotation) : 0}deg) scale(${scale})`;
            item.style.transition = 'transform 0.5s ease-in-out';
        });
    }

    nextButton.addEventListener("click", () => {
        if (currentIndex < videos.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = videos.length - 1;
        }
        updateCarousel();
    });

    updateCarousel();
}); 
/*----------------------------------------------------------------------*/
/* Chef Section JavaScript (ADD THIS TO YOUR EXISTING JS)   */
/*----------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const chefCards = document.querySelectorAll('.chef-card');

    chefCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                y: -5,
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
            });
            gsap.to(card.querySelector('.chef-image img'), {
                duration: 0.3,
                scale: 1.05,
            });
            gsap.to(card.querySelector('.chef-bio'), {
                duration: 0.3,
                opacity: 1,
                visibility: 'visible',
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                y: 0,
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            });
            gsap.to(card.querySelector('.chef-image img'), {
                duration: 0.3,
                scale: 1,
            });
            gsap.to(card.querySelector('.chef-bio'), {
                duration: 0.3,
                opacity: 0,
                visibility: 'hidden',
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", function () {
            const link = card.getAttribute("data-link");
            if (link) {
                window.location.href = link; // Redirect to the assigned page
            }
        });
    });
});