import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="theme-toggle" onClick={toggleTheme}>
            <i className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`}></i>
        </div>
    );
};

export default ThemeToggle;