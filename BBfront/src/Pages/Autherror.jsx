import React from 'react';

const Autherror = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Please Login to Continue</h2>
        <p style={styles.message}>
          Access to this page is restricted. Please login with your credentials to continue.
        </p>
        {/* You can add login form or link to your login page here */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f4f4f4',
  },
  card: {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    color: '#333',
    marginBottom: '10px',
  },
  message: {
    color: '#666',
  },
};

export default Autherror;
