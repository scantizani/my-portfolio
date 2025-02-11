<<<<<<< HEAD
import React from 'react';
import { FaCode, FaShieldAlt, FaLaptopCode, FaBug, FaCloud, FaTools } from "react-icons/fa"; // Importação correta

const services = [
  {
    title: 'Cybersecurity Consulting',
    description: 'Providing risk assessment, security architecture, and compliance solutions.',
    icon: <FaShieldAlt size={50} color="#4CAF50" />
  },
  {
    title: 'Web Development',
    description: 'Building modern, responsive, and secure web applications.',
    icon: <FaCode size={50} color="#4CAF50" />
  },
  {
    title: 'Penetration Testing',
    description: 'Identifying and mitigating security vulnerabilities in systems.',
    icon: <FaBug size={50} color="#4CAF50" />
  },
  {
    title: 'Cloud Security',
    description: 'Implementing security best practices for cloud-based applications.',
    icon: <FaCloud size={50} color="#4CAF50" />
  },
  {
    title: 'Incident Response',
    description: 'Helping organizations quickly detect and respond to cyber threats.',
    icon: <FaTools size={50} color="#4CAF50" />
  }
];

export default function Services() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>My Services</h1>
      <div style={styles.grid}>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            {service.icon}
            <h2 style={styles.title}>{service.title}</h2>
            <p style={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    maxWidth: '1000px',
    margin: 'auto',
    textAlign: 'center'
  },
  header: {
    fontSize: '2.5em',
    marginBottom: '20px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
    textAlign: 'center',
    color: '#fff'
  },
  title: {
    fontSize: '1.5em',
    margin: '10px 0'
  },
  description: {
    fontSize: '1em'
  }
};
=======
import React from "react";
import { FaShieldAlt, FaCode, FaCloud, FaLock } from "react-icons/fa"; // Ícones

const Services = () => {
  return (
    <div className="services-container">
      <h1>My Services</h1>

      <div className="service-card">
        <FaShieldAlt className="service-icon" />
        <div className="service-text">
          <h2>Cyber Security Consulting</h2>
          <p>Helping businesses strengthen their security posture.</p>
        </div>
      </div>

      <div className="service-card">
        <FaCode className="service-icon" />
        <div className="service-text">
          <h2>Software Development</h2>
          <p>Building secure and efficient applications.</p>
        </div>
      </div>

      <div className="service-card">
        <FaCloud className="service-icon" />
        <div className="service-text">
          <h2>Cloud Security</h2>
          <p>Implementing security best practices for cloud environments.</p>
        </div>
      </div>

      <div className="service-card">
        <FaLock className="service-icon" />
        <div className="service-text">
          <h2>Penetration Testing</h2>
          <p>Identifying and mitigating vulnerabilities in IT systems.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
>>>>>>> 216f5ee (Updated portfolio: improved styling, added responsiveness, fixed layout, and updated images)
