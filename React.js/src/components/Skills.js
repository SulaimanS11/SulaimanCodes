import React, { useState } from 'react';
import './Skills.css';

const SkillCard = ({ icon, title, skills, details }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div
            className={`skill-card ${flipped ? 'flipped' : ''}`}
            onClick={handleFlip}
        >
            <div className="card-front" style={{ background: icon.bgColor }}>
                <i className={`bx ${icon.class}`}></i>
                <h3>{title}</h3>
                <div className="skill-pills">
                    {skills.map((skill, index) => (
                        <span key={index} className="pill">{skill}</span>
                    ))}
                </div>
            </div>
            <div className="card-back">
                <h4>{details.title}</h4>
                <ul>
                    {details.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Skills = () => {
    const skillsData = [
        {
            icon: { class: 'bx-code-block', bgColor: '#e3fafc' },
            title: 'Core Languages',
            skills: ['Python', 'Java', 'JavaScript', 'SQL', 'C/C++'],
            details: {
                title: 'Project Implementation',
                items: [
                    'Built predictive models with Python',
                    'Spring Boot apps with Java',
                    'React frontends with JavaScript',
                    'SQL database design'
                ]
            }
        },
        {
            icon: { class: 'bx-layer', bgColor: '#fff4e6' },
            title: 'Full Stack Tech',
            skills: ['React.js', 'Flask', 'Spring Boot', 'Node.js', 'AWS'],
            details: {
                title: 'Project Highlights',
                items: [
                    'Resume portal with Spring Security',
                    'Flask REST APIs for inventory system',
                    'AWS Elastic Beanstalk deployments',
                    'React.js portfolio implementation'
                ]
            }
        },
        {
            icon: { class: 'bx-cloud', bgColor: '#ffe6e6' },
            title: 'DevOps & Tools',
            skills: ['Docker', 'Kubernetes', 'Git', 'Vercel', 'MySQL'],
            details: {
                title: 'Implementation Examples',
                items: [
                    'CI/CD with GitHub Actions',
                    'Containerized ML models',
                    'Cloud deployment pipelines',
                    'Version control management'
                ]
            }
        }
    ];

    return (
        <section className="skills" id="skills">
            <h2 className="heading">Technical <span className="color-primary">Proficiencies</span></h2>
            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <SkillCard
                        key={index}
                        icon={skill.icon}
                        title={skill.title}
                        skills={skill.skills}
                        details={skill.details}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;