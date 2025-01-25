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


    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
    });
});