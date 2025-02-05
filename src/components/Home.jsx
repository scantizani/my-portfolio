import React from "react";
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaLinkedin } from "react-icons/fa";
import profilePhoto from "../assets/silvana.jpg";

export default function Home() {
  return (
    <div className="home-container">
      {/* Main content section with profile photo and introduction */}
      <div className="home-content">
        /*<img src={profilePhoto} alt="Silvana Rondina" className="profile-photo" />
        <div className="home-text">
          <h1>Welcome to My Portfolio</h1>
          <p>
            I am a Cyber Security Analyst and Software Engineering student at Centennial College.
            Passionate about technology, programming, and security, I specialize in risk management
            and secure software development.
          </p>
        </div>
      </div>

      {/* Technology stack section */}
      <div className="tech-stack">
        <h2>Tech Stack & Skills</h2>
        <p>Technologies and programming languages I am proficient in:</p>
        <div className="icons">
          <FaReact size={50} color="#61DAFB" className="tech-icon" title="React" />
          <FaNodeJs size={50} color="#8CC84B" className="tech-icon" title="Node.js" />
          <FaPython size={50} color="#3776AB" className="tech-icon" title="Python" />
          <FaJava size={50} color="#007396" className="tech-icon" title="Java" />
          <FaDatabase size={50} color="#facc15" className="tech-icon" title="SQL & Databases" />
        </div>
      </div>

      {/* LinkedIn profile section */}
      <div className="linkedin-section">
        <h2>Connect with Me</h2>
        <p>Find me on LinkedIn for professional networking:</p>
        <a
          href="https://www.linkedin.com/in/silvana-rondina-cyber-security/" target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <FaLinkedin size={50} color="#0077B5" className="tech-icon" title="LinkedIn" />
        </a>
      </div>
    </div>
  );
}
