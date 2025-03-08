import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './Contact.css';

const Contact = () => {
    const { darkMode } = useContext(ThemeContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would typically send the form data to a backend
        // For demo purposes, we'll just simulate a successful submission
        setFormStatus({
            submitted: true,
            success: true,
            message: 'Thank you for your message! I will get back to you soon.'
        });

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        // In a real implementation, you would send the form data to your backend
        console.log('Form submitted:', formData);
    };

    return (
        <section className={`contact ${darkMode ? 'dark-mode' : ''}`} id="contact">
            <h2 className="heading">Contact <span className="color-primary">Me</span></h2>

            <div className="contact-container">
                <div className="contact-info">
                    <h3>Get In Touch</h3>
                    <p>
                        Feel free to reach out to me for job opportunities,
                        collaboration on projects, or just to say hello!
                    </p>

                    <div className="info-item">
                        <i className='bx bx-phone'></i>
                        <div>
                            <h4>Call Me</h4>
                            <p>647-787-8909</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <i className='bx bx-envelope'></i>
                        <div>
                            <h4>Email</h4>
                            <p>sulaaxkb@sulaiman.codes</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <i className='bx bx-map'></i>
                        <div>
                            <h4>Location</h4>
                            <p>Waterloo, Ontario</p>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/mirssultan/" target="_blank" rel="noreferrer">
                            <i className='bx bxl-linkedin-square'></i>
                        </a>
                        <a href="https://github.com/SulaimanS11" target="_blank" rel="noreferrer">
                            <i className='bx bxl-github'></i>
                        </a>
                        <a href="https://sulaiman.codes" target="_blank" rel="noreferrer">
                            <i className='bx bx-globe'></i>
                        </a>
                    </div>
                </div>

                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            <i className='bx bx-send'></i> Send Message
                        </button>
                    </form>

                    {formStatus.submitted && (
                        <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                            {formStatus.message}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;