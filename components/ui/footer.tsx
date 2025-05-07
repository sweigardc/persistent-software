import React from 'react';

const Footer: React.FC = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© {new Date().getFullYear()} Persistent Software. All rights reserved.</p>
        <nav style={styles.nav}>
          <a href="/about" style={styles.link}>About Us</a>
          <a href="/terms" style={styles.link}>Terms of Service</a>
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
          <a href="mailto:contact@persistentsoftware.com" style={styles.link}>Contact Us</a>
        </nav>
      </div>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f8f9fa',
    padding: '20px 0',
    borderTop: '1px solid #e9ecef',
    textAlign: 'center' as const,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px',
  },
  text: {
    margin: '0',
    fontSize: '14px',
    color: '#6c757d',
  },
  nav: {
    marginTop: '10px',
  },
  link: {
    margin: '0 10px',
    fontSize: '14px',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export { Footer } ;