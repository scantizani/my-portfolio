import React from "react";
import "../style.css"; // Certifique-se de importar o CSS

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      <div className="project-card">
        <img src="/images/Cyber.jpg" alt="Cyber Security Audit" className="project-image" />
        <div className="project-info">
          <h2>Cyber Security Audit</h2>
          <p>Audited the security system of a global company.</p>
          <p><strong>Result:</strong> Reduced critical vulnerabilities by 40% and improved security policies.</p>
        </div>
      </div>

      <div className="project-card">
        <img src="/images/reactPortfolio.jpg" alt="React Portfolio Website" className="project-image" />
        <div className="project-info">
          <h2>React Portfolio Website</h2>
          <p>Developed my personal portfolio using React and Vite.</p>
          <p><strong>Result:</strong> Created a fully responsive and interactive website.</p>
        </div>
      </div>

      <div className="project-card">
        <img src="/images/ecommerce.jpg" alt="E-commerce Security Enhancement" className="project-image" />
        <div className="project-info">
          <h2>E-commerce Security Enhancement</h2>
          <p>Implemented security measures for an online store.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
