import React from "react";
import centennial from "../assets/centennial.png";
import fiap from "../assets/fiap.png";
import cruzeirodosul from "../assets/cruzeirodosul.png";

export default function Education() {
  return (
    <div>
      <h1>Education</h1>

      <div className="education-card">
        <img src={centennial} alt="Centennial College" className="education-logo" />
        <div className="education-info">
          <h2>Centennial College</h2>
          <p><strong>Software Engineering (In Progress)</strong></p>
          <p>Toronto, Canada – 2024</p>
        </div>
      </div>

      <div className="education-card">
        <img src={fiap} alt="FIAP" className="education-logo" />
        <div className="education-info">
          <h2>FIAP</h2>
          <p><strong>MBA in Cyber Security</strong></p>
          <p>Brazil – 2021</p>
        </div>
      </div>

      <div className="education-card">
        <img src={cruzeirodosul} alt="Universidade Cidade de São Paulo" className="education-logo" />
        <div className="education-info">
          <h2>Universidade Cidade de São Paulo</h2>
          <p><strong>Bachelor in System Analysis</strong></p>
          <p>Brazil</p>
        </div>
      </div>
    </div>
  );
}
