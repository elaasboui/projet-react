import React from 'react';

function Footer() {
  const footerStyle = {
    background: 'linear-gradient(90deg, #1a1a1a, #000)', // Fond dégradé
    color: 'white',
    padding: '2rem',
    textAlign: 'center',
    marginTop: '2rem',
    borderTop: '1px solid #333',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.5)',
  };

  const socialLinksContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem', // Espace uniforme entre les liens
    marginTop: '1rem',
  };

  const socialLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    transition: 'color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 Mon Site. Tous droits réservés.</p>
      <div style={socialLinksContainerStyle}>
        <a
          href="#"
          style={socialLinkStyle}
          onMouseEnter={(e) => {
            e.target.style.color = '#3182ce';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'white';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Facebook
        </a>
        <a
          href="#"
          style={socialLinkStyle}
          onMouseEnter={(e) => {
            e.target.style.color = '#3182ce';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'white';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Twitter
        </a>
        <a
          href="#"
          style={socialLinkStyle}
          onMouseEnter={(e) => {
            e.target.style.color = '#3182ce';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'white';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;
