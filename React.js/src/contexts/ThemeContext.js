import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check if user has a saved preference
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme) {
            setDarkMode(JSON.parse(savedTheme));
        } else {
            // Check if user prefers dark mode by system preference
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(prefersDarkMode);
        }
    }, []);

    useEffect(() => {
        // Update document body class when theme changes
        if (darkMode) {
            document.body.classList.add('dark-mode');
            document.documentElement.style.setProperty('--Primary-Col', '#06d6a0');
        } else {
            document.body.classList.remove('dark-mode');
            document.documentElement.style.setProperty('--Primary-Col', 'turquoise');
        }

        // Save preference to localStorage
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};