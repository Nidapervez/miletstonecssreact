import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer as React.CSSProperties}>
      <p>&copy; 2024 NidaPervez. All Rights Reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center', // 'center' is valid for React inline styles
    padding: '20px',
    backgroundColor: '#FB374D',
    color: 'white',
  },
};

export default Footer;
