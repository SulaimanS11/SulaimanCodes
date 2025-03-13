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
        // {
        //     title: "AI-Powered Study Assistant",
        //     description: "A machine learning application that helps students optimize their study schedules based on cognitive science principles.",
        //     image: "/api/placeholder/600/400", // Replace with your actual image path
        //     technologies: ["Python", "TensorFlow", "Flask", "React"],
        //     category: ["machine-learning", "web-app"],
        //     demoLink: "https://study-assistant-demo.com",
        //     codeLink: "https://github.com/SulaimanS11/study-assistant"
        // },
        // {
        //     title: "Quantum Algorithm Simulator",
        //     description: "A visualization tool for understanding and simulating basic quantum computing algorithms.",
        //     image: "/api/placeholder/600/400", // Replace with your actual image path
        //     technologies: ["JavaScript", "D3.js", "React", "Node.js"],
        //     category: ["web-app", "visualization"],
        //     demoLink: "https://quantum-sim.demo.com",
        //     codeLink: "https://github.com/SulaimanS11/quantum-sim"
        // },
        // {
        //     title: "Neural Network From Scratch",
        //     description: "Implementation of a neural network framework without using any machine learning libraries, for educational purposes.",
        //     image: "/api/placeholder/600/400", // Replace with your actual image path
        //     technologies: ["Python", "NumPy", "Matplotlib"],
        //     category: ["machine-learning", "data-science"],
        //     codeLink: "https://github.com/SulaimanS11/neural-net-scratch"
        // },
        // {
        //     title: "Portfolio Website",
        //     description: "This responsive portfolio website built with React and modern web technologies.",
        //     image: "/api/placeholder/600/400", // Replace with your actual image path
        //     technologies: ["React", "CSS3", "JavaScript"],
        //     category: ["web-app", "frontend"],
        //     codeLink: "https://github.com/SulaimanS11/portfolio"
        // },
        // {
        //     title: "Brain Activity Visualizer",
        //     description: "A tool for visualizing EEG data and brain activity patterns using WebGL and 3D rendering.",
        //     image: "/api/placeholder/600/400",
        //     technologies: ["Three.js", "WebGL", "JavaScript", "Python"],
        //     category: ["visualization", "data-science", "neuroscience"],
        //     demoLink: "https://brain-viz-demo.com",
        //     codeLink: "https://github.com/SulaimanS11/brain-viz"
        // },
        // {
        //     title: "Automated Circuit Designer",
        //     description: "An application that uses genetic algorithms to optimize electronic circuit layouts.",
        //     image: "/api/placeholder/600/400",
        //     technologies: ["Java", "JGAP", "JavaFX"],
        //     category: ["machine-learning", "electronics"],
        //     codeLink: "https://github.com/SulaimanS11/circuit-designer"
        // }
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