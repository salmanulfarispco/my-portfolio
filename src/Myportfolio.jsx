import "./Portfolio.css";
import { useState } from "react";

function MyPortfolio() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <a href="#home" className="logo">Portfolio</a>

                {/* Hamburger Menu */}
                <div
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Navigation Links */}
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li className="active"><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#enquiry">Enquiry</a></li>
                </ul>
            </nav>

            {/* Home Section */}
            <section className="home" id="home">
                <div className="home-info">
                    <h1>Salmanul Faris P C O</h1>
                    <h2>I'm a Web Developer</h2>
                    <p>
                        I am a passionate Web Developer with a strong focus on creating responsive,
                        user-friendly, and modern websites. I enjoy turning ideas into real digital
                        experiences using clean code and creative design. My goal is to build web
                        solutions that are not only functional but also visually appealing and easy to use.
                    </p>

                    <div className="btn-sci">
                        <a href="/Salmanulfaris.pdf" className="btn">Download CV</a>
                        <div className="sci">
                            <a href="#"><i className="bx bxl-github"></i></a>
                            <a href="#"><i className="bx bxl-linkedin"></i></a>
                            <a href="#"><i className="bx bxl-twitter"></i></a>
                            <a href="#"><i className="bx bxl-youtube"></i></a>
                        </div>
                    </div>
                </div>

                {/* Home Image */}
                <div className="home-img">
                    <div className="img-box">
                        <div className="img-item">
                            <img src="salmanport.png" alt="My Profile" />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about" id="about">
                <h2>About Me</h2>
                <p>
                    I am a passionate <strong>Full Stack Web Developer and Web Designer</strong> with over a year of
                    consistent practice and project-building experience. My expertise lies in creating clean, responsive,
                    and user-friendly web applications using modern technologies like <strong>HTML, CSS, JavaScript, React.js,
                        and the MERN stack (MongoDB, Express, React, Node.js)</strong>.
                    Over the past year, I’ve worked on several projects including an <strong>online fashion store,
                        doctor appointment booking system, food recipe website, and interactive to-do list</strong>.
                    These projects helped me strengthen my skills in both <strong>UI/UX design</strong> and <strong>full-stack development</strong>.
                </p>
            </section>

            {/* Services Section */}
            <section className="services" id="services">
                <h2>My Services</h2>
                <div className="service-cards">
                    <div className="service-card">
                        <h3> <i class='bx bx-code-alt'></i>Web Development</h3>
                        <p>
                            I build functional and scalable websites using HTML, CSS, JavaScript,
                            React, and the MERN stack. From user management to database integration,
                            I ensure smooth performance and security.
                        </p>
                    </div>
                    <div className="service-card">
                        <h3> <i class='bx bx-paint'></i>
                            Web Designing</h3>
                        <p>
                            I design modern, user-friendly interfaces using creative tools and
                            frameworks. My focus is on responsive layouts, clean UI, and
                            engaging digital experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects" id="projects">
                <h2>My Projects</h2>

                <div className="project-item">
                    <img src="doctor.png" alt="Doctor Appointment Booking System" />
                    <h3>Doctor Appointment Booking System</h3>
                    <p>
                        A full-stack web application with user management, database integration,
                        and features for booking and managing doctor appointments.
                    </p>
                </div>

                <div className="project-item">
                    <img src="screenshot.png" alt="Clothing Website" />
                    <h3>Clothing Website</h3>
                    <p>
                        Built with HTML, CSS, and React.js featuring kids, women's, and men's wear
                        collections with a responsive and modern shopping interface.
                    </p>
                </div>

                <div className="project-item">
                    <img src="maxresdefault (1).png" alt="Food Recipe Website" />
                    <h3>Food Recipe Website</h3>
                    <p>
                        Created using HTML, CSS, Bootstrap, and JavaScript. Users can browse recipes,
                        view step-by-step cooking instructions, and explore cuisines easily.
                    </p>
                </div>

                <div className="project-item">
                    <img src="todo.png" alt="To Do List" />
                    <h3>To Do List</h3>
                    <p>
                        A simple task management app built with HTML and CSS to keep track of
                        daily activities and improve productivity.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact" id="contact">
                <h2>Get in Touch</h2>
                <div className="contact-info">
                    <div><i className="bx bx-envelope"></i> salmanulfaris3377@gmail.com</div>
                    <div><i className="bx bx-map"></i> Doha, Qatar</div>
                    <div><i className="bx bx-phone"></i> +974 3030 6588</div>
                </div>
            </section>

            {/* Enquiry Section */}
            <section className="enquiry" id="enquiry">
                <h2>Enquiry</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <input type="text" placeholder="Subject" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">
                        <i className="bx bx-send"></i> Send Message
                    </button>

                </form>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href="#enquiry">Enquiry</a>
                </div>
                <div className="footer-contact">
                    <p><i className="bx bx-envelope"></i> salmanulfaris3377@gmail.com</p>
                    <p><i className="bx bx-phone"></i> +974 3030 6588</p>
                    <p><i className="bx bx-map"></i> Doha, Qatar</p>
                </div>
                <p>@salmanulfaris. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default MyPortfolio;
