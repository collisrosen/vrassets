// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover effect for buttons: add a glow effect on hover
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.boxShadow = "0 0 15px rgba(255, 99, 71, 0.8)";
    });

    button.addEventListener('mouseleave', () => {
        button.style.boxShadow = "none";
    });
});
