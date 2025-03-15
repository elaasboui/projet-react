import React, { useState } from 'react';

const ColorBox = ({ initialColor }) => {
  const [color, setColor] = useState(initialColor);

  const handleClick = () => {
    // Génère toujours une couleur hexadécimale sur 6 caractères
    const randomColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setColor(randomColor);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
  };

  const boxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: color,
    borderRadius: '8px',
    transition: 'background-color 0.5s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const buttonStyle = {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#3182ce',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle} />
      <button
        style={buttonStyle}
        onClick={handleClick}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#225ea8')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3182ce')}
      >
        Change Color
      </button>
    </div>
  );
};

export default ColorBox;
