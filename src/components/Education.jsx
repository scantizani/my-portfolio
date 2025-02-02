import React from 'react';

export default function Education() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Education</h1>
      <div style={styles.card}>
        <ul style={styles.list}>
          <li><strong>Software Engineering (in Progress)</strong> - Centennial College, Canada (2025)</li>
          <li><strong>Business Foundation</strong> - Centennial College, Canada (2024)</li>
          <li><strong>MBA in Cyber Security</strong> - FIAP, Brazil (2021)</li>
          <li><strong>Bachelor in System Analysis</strong> - Universidade Cidade de São Paulo (2011)</li>
        </ul>
      </div>
    </div>
  );
}

// Estilos inline para organizar o layout
const styles = {
  container: {
    padding: '50px',
    textAlign: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4', 
  },
  header: {
    fontSize: '2.5em',
    color: '#1e1e1e',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '600px',
    margin: 'auto',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    fontSize: '1.2em',
    textAlign: 'left',
  }
};
