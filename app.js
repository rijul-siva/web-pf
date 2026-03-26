// Interactivity for the portfolio
console.log("Welcome to the Lion Phase.");

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Intersection Observer for Scroll Animations (Fade-in up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    // Grab all major elements to animate on scroll
    const fadeElements = document.querySelectorAll('.bento-item, .skill-category, .project-card, .footer-content, .section-title');
    
    fadeElements.forEach(el => {
        el.classList.add('fade-in-element');
        observer.observe(el);
    });


    // 2. Subtle Parallax / Depth Effect on Hero Section
    const heroSection = document.querySelector('.hero-section');
    const layer1 = document.querySelector('.hero-decoration'); // "UBERMENSCH" background text
    const layer2 = document.querySelector('.hero-content'); // Main text

    if(heroSection && layer1 && layer2) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;

            // Deep background text moves in opposite direction slowly
            layer1.style.transform = `translate(calc(-50% + ${x * -50}px), calc(-50% + ${y * -50}px))`;
            
            // Foreground text moves slightly with mouse
            layer2.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        });

        // Reset on mouse leave
        heroSection.addEventListener('mouseleave', () => {
            layer1.style.transform = `translate(-50%, -50%)`;
            layer2.style.transform = `translate(0px, 0px)`;
        });
    }
});
