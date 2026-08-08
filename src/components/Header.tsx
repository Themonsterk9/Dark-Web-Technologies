import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/technology', label: 'Technology' },
    { to: '/articles', label: 'Articles' },
    { to: '/tutorials', label: 'Tutorials' },
    { to: '/build-log', label: 'Build Log' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Dark Web Technologies Home">
          <Logo />
          <span className="brand-name">Dark Web Technologies</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <span className="hamburger" />
        </button>
      </div>
      {/* Mobile drawer */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
