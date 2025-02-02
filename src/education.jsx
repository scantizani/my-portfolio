import React from 'react';

export default function Education() { // Nome atualizado com letra maiúscula
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Education</h1>
      <ul style={styles.list}>
        <li><strong>Software Engineering (in Progress)</strong> - Centennial College, Canada (2025)</li>
        <li><strong>Business Foundation</strong> - Centennial College, Canada (2024)</li>
        <li><strong>MBA in Cyber Security</strong> - FIAP, Brazil (2021)</li>
        <li><strong>Bachelor in System Analysis</strong> - Universidade Cidade de São Paulo (2011)</li>
      </ul>
    </div>
  );
}

// Adicionando estilos inline para melhor visualização
const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: '#1e1e1e',
    color: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '20px'
  },
  list: {
    textAlign: 'left',
    fontSize: '1.2em',
    lineHeight: '1.6',
    listStyleType: 'none',
    padding: '0'
  }
};
