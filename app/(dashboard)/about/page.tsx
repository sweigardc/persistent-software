import React from 'react';

export default function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Persistent Software</h1>
      <p style={styles.paragraph}>
        Persistent Software specializes in software development consulting for startups. We focus on rapid application prototyping using powerful templates and AI code generation.
      </p>
      <p style={styles.paragraph}>
        Our solutions are built using cutting-edge tools like <a style={styles.link} href="https://vercel.com/" target='_blank'>Vercel</a> and <a style={styles.link} href="https://copilot.microsoft.com/" target='_blank'>Microsoft Copilot</a> for AI-powered code generation. Our tech stack includes Next.js, PostgreSQL, and Stripe, ensuring robust and scalable applications.
      </p>
      <p style={styles.paragraph}>
        We follow the SLC development strategy: <a style={styles.link} href="https://longform.asmartbear.com/slc/" target='_blank'>Simple, Lovable, Complete</a>. This approach ensures that every product we build is intuitive, delightful to use, and fully functional.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center' as const,
  },
  paragraph: {
    fontSize: '1rem',
    marginBottom: '15px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },  
};

