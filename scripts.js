// Typewriter effect
var typed = new Typed(".typewriter",
    {
        strings: [
            " ",
            "Full Stack Developer",
            "Computer Scientist",
            "Student"
        ],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    }
);

// Mobile menu toggle functionality
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

// Close menu when clicking on a navigation link
document.querySelectorAll('.navbar a').forEach(navLink => {
    navLink.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// Close menu when scrolling
window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
});

// Add active class to navigation links based on section
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Improve card flipping for all devices
document.querySelectorAll('.skill-card').forEach(card => {
    // Check if it's a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        // For touch devices
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    } else {
        // For non-touch devices, keep the hover functionality
        // No need to add event listeners as CSS handles it
    }
});

// Better touch detection
function isTouchDevice() {
    return (('ontouchstart' in window) || 
            (navigator.maxTouchPoints > 0) || 
            (navigator.msMaxTouchPoints > 0));
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    if (isTouchDevice()) {
        // Disable hover effects for touch devices
        document.documentElement.classList.add('touch-device');
        
        // Add click event for touch devices
        skillCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // Get currently flipped cards and reset them (except this one)
                skillCards.forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('flipped')) {
                        otherCard.classList.remove('flipped');
                    }
                });
                
                // Toggle this card
                this.classList.toggle('flipped');
                
                // Prevent event bubbling
                e.stopPropagation();
            });
        });
        
        // Add a global click handler to close cards when clicking elsewhere
        document.addEventListener('click', function() {
            skillCards.forEach(card => {
                if (card.classList.contains('flipped')) {
                    card.classList.remove('flipped');
                }
            });
        });
    }
});