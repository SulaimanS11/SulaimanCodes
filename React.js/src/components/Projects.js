import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
    const [showDetails, setShowDetails] = useState(false);
    const { darkMode } = useContext(ThemeContext);

    return (
        <div
            className={`project-card animate-fadeIn animate-delay-${index % 5 + 1}00 ${darkMode ? 'dark-mode' : ''}`}
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
        >
            <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className={`project-overlay ${showDetails ? 'active' : ''}`}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                        {project.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                    <div className="project-links">
                        {project.demoLink && (
                            <a href={project.demoLink} target="_blank" rel="noreferrer" className="project-btn">
                                <i className='bx bx-link-external'></i> Live Demo
                            </a>
                        )}
                        {project.codeLink && (
                            <a href={project.codeLink} target="_blank" rel="noreferrer" className="project-btn">
                                <i className='bx bxl-github'></i> View Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const FilterButton = ({ name, active, onClick }) => {
    return (
        <button
            className={`filter-btn ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            {name}
        </button>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4);
    const { darkMode } = useContext(ThemeContext);
    
    const projectsData = [
        {
            title: "BioBuddyAI",
            description: "AI-powered biology learning assistant that helps students understand complex biological concepts through interactive conversations and personalized explanations.",
            image: "/imgs/biobuddyai.png",
            technologies: ["Python", "Flask", "OpenAI API", "HTML5", "CSS3", "JavaScript"],
            category: ["machine-learning", "web-app"],
            codeLink: "https://github.com/SulaimanS11/BioBuddyAI"
        },
        {
            title: "Predictive Analysis Inventory Tracker",
            description: "Machine learning system that predicts inventory stock-outs and automates reordering through Flask-based API integration.",
            image: "/imgs/sales_pait.png",
            technologies: ["Python", "Flask", "Scikit-Learn", "Pandas", "MySQL", "Docker"],
            category: ["machine-learning", "web-app"],
            codeLink: "https://github.com/SulaimanS11/Predictive-Analysis-Inventory-Tracker"
        },
        {
            title: "Java Resume Builder",
            description: "Full-stack web application built with Spring Boot that allows users to create, customize, and manage professional resumes with secure authentication.",
            image: "/imgs/resume-builder.png",
            technologies: ["Java", "Spring Boot", "MySQL", "HTML5", "CSS3", "JavaScript"],
            category: ["web-app", "full-stack"],
            codeLink: "https://github.com/SulaimanS11/JPA-ResumeApplication"
        },
        {
            title: "Computer Vision Face Tracker",
            description: "Real-time face detection and tracking system using OpenCV and machine learning algorithms for accurate facial recognition and movement tracking.",
            image: "/imgs/face-tracker.png",
            technologies: ["Python", "OpenCV", "TensorFlow", "NumPy", "Matplotlib"],
            category: ["machine-learning", "computer-vision"],
            codeLink: "https://github.com/SulaimanS11/FaceRecognition1"
        },
        {
            title: "Personal Portfolio Website",
            description: "Comprehensive digital resume featuring responsive design, dark mode support, and interactive elements. Includes contact form with Node.js backend and automated deployment pipelines.",
            image: "/imgs/portfolio-website.png",
            technologies: ["JavaScript", "HTML5", "CSS3", "React.js", "Node.js", "GitHub Actions", "Vercel"],
            category: ["web-app", "frontend", "full-stack"],
            codeLink: "https://github.com/SulaimanS11/SulaimanCodes"
        },
        {
            title: "Danger Scanner",
            description: "AI-powered safety application that uses Python and Gemini API to identify dangerous animals in real-time and alert users to potential threats in their environment.",
            image: "/imgs/danger-scanner.png",
            technologies: ["Python", "Gemini API", "Computer Vision", "AI", "Real-time Processing"],
            category: ["machine-learning", "ai", "safety"],
            codeLink: "https://github.com/SulaimanS11/BB_pi"
        }
    ];

    // Filter categories extracted from projects
    const categories = ['all', ...new Set(projectsData.flatMap(project => project.category))];

    // Filter projects based on selected category
    useEffect(() => {
        if (filter === 'all') {
            setFilteredProjects(projectsData);
        } else {
            setFilteredProjects(
                projectsData.filter(project => project.category.includes(filter))
            );
        }
    }, [filter]);

    const loadMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + 3, filteredProjects.length));
    };

    return (
        <section className={`projects ${darkMode ? 'dark-mode' : ''}`} id="projects">
            <h2 className="heading">My <span className="color-primary">Projects</span></h2>

            <div className="filter-container animate-fadeIn">
                {categories.map((category, index) => (
                    <FilterButton
                        key={category}
                        name={category.split('-').join(' ')}
                        active={filter === category}
                        onClick={() => {
                            setFilter(category);
                            setVisibleCount(4); // Reset visible count when changing filter
                        }}
                    />
                ))}
            </div>

            <div className="projects-container">
                {filteredProjects.slice(0, visibleCount).map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>

            {visibleCount < filteredProjects.length && (
                <div className="load-more-container">
                    <button className="load-more-btn" onClick={loadMore}>
                        Load More <i className='bx bx-chevron-down'></i>
                    </button>
                </div>
            )}
        </section>
    );
};

export default Projects;