import React, { useEffect, useRef, useContext } from 'react';
import Typed from 'typed.js';
import { ThemeContext } from '../contexts/ThemeContext';
import './Home.css';
import profilePic from '../assets/pp.jpg'; // You'll need to place your image in the assets folder

const Home = () => {
    const typewriterRef = useRef(null);
    const { darkMode } = useContext(ThemeContext);

    useEffect(() => {
        const typed = new Typed(typewriterRef.current, {
            strings: [
                " ",
                "Full Stack Developer",
                "Computer Scientist",
                "Student"
            ],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className={`home ${darkMode ? 'dark-mode' : ''}`} id="home">
            <div className="home-circle1"></div>
            <div className="home-circle2"></div>

            <div className="home-content">
                <h3 className="animate-fadeIn">Welcome to my Website!</h3>
                <h1 className="animate-fadeIn animate-delay-100">
                    My name is <span className="color-primary">Mir Sulaiman Sultan</span>
                </h1>
                <h3 className="text-ani animate-fadeIn animate-delay-200">
                    I'm a <span ref={typewriterRef} className="typewriter"></span>
                </h3>
                <p className="animate-fadeIn animate-delay-300">
                    studying Computation and Cognitive Neuroscience at Wilfrid Laurier University
                </p>

                <div className="button-centering animate-fadeIn animate-delay-400">
                    <div className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/mirssultan"
                            target="_blank"
                            rel="noreferrer"
                            className="animate-scaleIn animate-delay-100"
                        >
                            <i className="bx bxl-linkedin-square"></i>
                        </a>
                        <a
                            href="https://github.com/SulaimanS11"
                            target="_blank"
                            rel="noreferrer"
                            className="animate-scaleIn animate-delay-200"
                        >
                            <i className="bx bxl-github"></i>
                        </a>
                    </div>

                    <a
                        href="/resume.pdf"
                        className="button animate-scaleIn animate-delay-300"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className='bx bx-download'></i> Download my Resume
                    </a>
                </div>
            </div>

            <div className="home-img animate-slideInRight">
                <img src={profilePic} alt="Mir Sulaiman Sultan's profile" />
            </div>
        </section>
    );
};

export default Home;