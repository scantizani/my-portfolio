import React from "react";

const resumePDF = "/assets/Silvana-Rondina-Resume.pdf"; // Caminho direto sem import

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <img src="/images/silvana.jpg" alt="Silvana Rondina" className="profile-photo"/>
      <p>
        I am a Cyber Security Analyst with over ten years of experience, specializing in risk assessment, compliance, and security frameworks like NIST, ITIL, and ISO 27001.
      </p>
      <p>
        Currently, I am studying Software Engineering at Centennial College to expand my knowledge in cybersecurity and software development.
      </p>

      {/* Standardized Button */}
      <a href={resumePDF} download className="standard-btn">
        Download Resume
      </a>
    </div>
  );
};

export default About;
