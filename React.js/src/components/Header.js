import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const { darkMode } = useContext(ThemeContext);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Add background when scrolled down
            setScrolled(window.scrollY > 50);

            // Update active section
            const sections = document.querySelectorAll('section');
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            setActiveSection(current);
            closeMenu();
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark-mode' : ''}`}>
            <a href="#home" className="logo animate-fadeIn">
                <span className="color-primary">Mir</span> Sulaiman Sultan
            </a>

            <i
                className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}
                id="menu-icon"
                onClick={toggleMenu}
            ></i>

            <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                {navLinks.map((link, index) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={`
              ${activeSection === link.id ? 'active' : ''} 
              animate-fadeIn animate-delay-${index + 1}00
            `}
                        onClick={closeMenu}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header;