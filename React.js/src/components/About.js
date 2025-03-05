import React from 'react';
import './About.css';
import profilePic from '../assets/pp.jpg'; // Same image as in Home

const About = () => {
    return (
        <section className="about" id="about">
            <h2 className="heading">About <span className="color-primary">Me</span></h2>

            <div className="about-container">
                <div className="about-content">
                    <h3>I'm Mir Sulaiman Sultan</h3>
                    <span className="sub-heading">Computer Science & Psychology Student</span>

                    <p>
                        I'm fascinated by the intersection of software, AI, hardware, and neuroscience.
                        Currently studying Computation & Cognitive Neuroscience at Wilfrid Laurier University,
                        I blend technical computer science skills with psychological insights into how our minds work.
                    </p>

                    <div className="highlight-box">
                        <h4>My Vision</h4>
                        <p>
                            Driven by the fusion of AI and quantum computing, I plan to pursue an M.Sc. in
                            Artificial Intelligence followed by a Ph.D. in Quantum Computing. I'm passionate about
                            developing technologies that bridge the gap between computational systems and human cognition.
                        </p>
                    </div>

                    <div className="goals-container">
                        <div className="goal-card">
                            <h4>Academic Goals</h4>
                            <ul>
                                <li>Complete Honours B.Sc. (April 2026)</li>
                                <li>Master's in Artificial Intelligence</li>
                                <li>Ph.D. in Quantum Computing</li>
                            </ul>
                        </div>

                        <div className="goal-card">
                            <h4>Professional Goals</h4>
                            <ul>
                                <li>Research in computational neuroscience</li>
                                <li>Develop AI systems that mimic cognitive processes</li>
                                <li>Build quantum-enhanced machine learning models</li>
                            </ul>
                        </div>
                    </div>

                    <h4 className="passions-heading">Passions & Interests</h4>
                    <div className="passion-tags">
                        <span className="passion-tag"><i className='bx bx-brain'></i>AI & Quantum Computing</span>
                        <span className="passion-tag"><i className='bx bx-game'></i>Game Development</span>
                        <span className="passion-tag"><i className='bx bx-robot'></i>Robotics</span>
                        <span className="passion-tag"><i className='bx bx-chip'></i>Circuit Design</span>
                        <span className="passion-tag"><i className='bx bx-mountain'></i>Hiking</span>
                        <span className="passion-tag"><i className='bx bx-landscape'></i>Mountain Climbing</span>
                        <span className="passion-tag"><i className='bx bx-up-arrow-circle'></i>Rock Climbing</span>
                        <span className="passion-tag"><i className='bx bx-boxing'></i>Boxing</span>
                        <span className="passion-tag"><i className='bx bx-dumbbell'></i>Fitness</span>
                    </div>
                </div>

                <div className="about-img">
                    <div className="about-img-frame">
                        <div className="about-img-layer"></div>
                        <img src={profilePic} alt="Mir Sulaiman Sultan" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
