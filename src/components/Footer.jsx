import React from 'react';
import '../assets/footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <footer className="footer-content text-white d-flex flex-column justify-content-center align-items-center">
        <div className="icon-container d-flex justify-content-center align-items-center py-3">
          <a href="https://github.com/nahusenayElias" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://fi.linkedin.com/in/elias-nahusenay-hagos" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="mailto:eliasars@yahoo.com" className="text-white mx-3">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </div>
        <div className="copyright-container">
          <p className="mb-0">&copy; 2024 Elias Hagos. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
