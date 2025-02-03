import React from "react";

const Education = () => {
  return (
    <div className="education-container">
      <h1>Education</h1>

      <div className="education-card">
        <img src="/images/centennial.png" alt="Centennial College" className="education-logo" />
        <div className="education-info">
          <h2>Centennial College</h2>
          <p><strong>Software Engineering (In Progress)</strong></p>
          <p>Toronto, Canada - 2025</p>
        </div>
      </div>

      <div className="education-card">
        <img src="/images/fiap.jpeg" alt="FIAP" className="education-logo" />
        <div className="education-info">
          <h2>FIAP</h2>
          <p><strong>MBA in Cyber Security</strong></p>
          <p>Brazil - 2021</p>
        </div>
      </div>

      <div className="education-card">
        <img src="/images/unicsul.jpeg" alt="Universidade Cidade de São Paulo" className="education-logo" />
        <div className="education-info">
          <h2>Universidade Cidade de São Paulo</h2>
          <p><strong>Bachelor in System Analysis</strong></p>
          <p>Brazil - 2010</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
