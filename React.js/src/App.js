import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <Header />
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <ThemeToggle />
            </div>
        </ThemeProvider>
    );
}

export default App;