import React from "react";
import { FaShieldAlt, FaCode, FaCloud, FaLock } from "react-icons/fa"; // Importando ícones

const Services = () => {
  return (
    <div className="services-container">
      <h1>My Services</h1>

      <div className="service-card">
        <FaShieldAlt className="service-icon" />
        <h2>Cyber Security Consulting</h2>
        <p>Helping businesses strengthen their security posture.</p>
      </div>

      <div className="service-card">
        <FaCode className="service-icon" />
        <h2>Software Development</h2>
        <p>Building secure and efficient applications.</p>
      </div>

      <div className="service-card">
        <FaCloud className="service-icon" />
        <h2>Cloud Security</h2>
        <p>Implementing security best practices for cloud environments.</p>
      </div>

      <div className="service-card">
        <FaLock className="service-icon" />
        <h2>Penetration Testing</h2>
        <p>Identifying and mitigating vulnerabilities in IT systems.</p>
      </div>
    </div>
  );
};

export default Services;
