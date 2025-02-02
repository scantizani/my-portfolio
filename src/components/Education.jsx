import React from 'react';

export default function Education() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>My Education</h1>
      <div style={styles.educationList}>
        <div style={styles.educationItem}>
          <h2>Centennial College</h2>
          <p><strong>Program:</strong> Software Engineering</p>
          <p><strong>Year:</strong> 2023 - Present</p>
        </div>
        <div style={styles.educationItem}>
          <h2>Previous University</h2>
          <p><strong>Degree:</strong> Cybersecurity Analyst</p>
          <p><strong>Year:</strong> 2015 - 2019</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'center',
    color: 'white'
  },
  header: {
    fontSize: '2.5em',
    marginBottom: '20px'
  },
  educationList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  educationItem: {
    backgroundColor: '#1e1e1e',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
    textAlign: 'center'
  }
};
