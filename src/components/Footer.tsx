import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div className="brand-section">
        <Link to="/" className="brand" aria-label="Dark Web Technologies Home">
          <Logo />
          <span className="brand-name">Dark Web Technologies</span>
        </Link>
      </div>
      <nav className="footer-nav" aria-label="Footer navigation">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/tutorials">Tutorials</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <nav className="legal-nav" aria-label="Legal navigation">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
        <Link to="/disclaimer">Disclaimer</Link>
      </nav>
      <div className="copyright">© 2026 Dark Web Technologies</div>
    </div>
  </footer>
);

export default Footer;
