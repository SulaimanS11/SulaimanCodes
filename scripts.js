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

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    // Click-to-flip functionality for all devices
    skillCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // First, unflip any other cards
            skillCards.forEach(otherCard => {
                if (otherCard !== card && otherCard.classList.contains('flipped')) {
                    otherCard.classList.remove('flipped');
                }
            });
            
            // Toggle the clicked card
            this.classList.toggle('flipped');
            
            // Prevent event bubbling
            e.stopPropagation();
        });
    });
    
    // Add a click handler to the document to close all cards when clicking elsewhere
    document.addEventListener('click', function() {
        skillCards.forEach(card => {
            if (card.classList.contains('flipped')) {
                card.classList.remove('flipped');
            }
        });
    });
});