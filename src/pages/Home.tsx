import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Button from '../components/Button';
import Card from '../components/Card';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import { projects } from '../projects/projectsData';

const Home: React.FC = () => (
  <>
    <Meta
      title="Dark Web Technologies – Home"
      description="Explore cutting-edge AI, security, and digital software projects at Dark Web Technologies."
    />
    <Breadcrumbs />
    <div className="home">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            DARK WEB
            <br />
            TECHNOLOGIES
          </h1>
          <p className="hero-subtitle">
            We build cutting-edge software, AI products, applications, and games.
          </p>
          <div className="hero-cta">
            <Button primary as={Link} to="/projects">
              Our Projects
            </Button>
            <Button as={Link} to="/technology">
              Technology Stack
            </Button>
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="section preview-section">
        <h2>Featured Projects</h2>
        <div className="card-grid">
          {projects.map((p) => (
            <Card
              key={p.slug}
              title={p.name}
              status={p.status}
              link={`/projects/${p.slug}`}
            />
          ))}
        </div>
      </section>

      {/* Technology preview */}
      <section className="section preview-section">
        <h2>Technology Stack</h2>
        <p>Our projects leverage modern AI, web, mobile, database, and backend technologies.</p>
        <p>
          <Link to="/technology">Explore the full technology stack →</Link>
        </p>
      </section>

      {/* Articles preview */}
      <section className="section preview-section">
        <h2>Technical Articles</h2>
        <p>In-depth technical write-ups and engineering analyses from our editorial team.</p>
        <p>
          <Link to="/articles">Browse technical articles →</Link>
        </p>
      </section>

      {/* Tutorials preview */}
      <section className="section preview-section">
        <h2>Code Tutorials</h2>
        <p>Hands-on, step-by-step programming guides covering AI, web engineering, and security.</p>
        <p>
          <Link to="/tutorials">View code tutorials →</Link>
        </p>
      </section>

      {/* Development Journal preview */}
      <section className="section preview-section">
        <h2>Development Journal</h2>
        <p>Chronological build logs documenting our actual project engineering progress.</p>
        <p>
          <Link to="/build-log">Read the development journal →</Link>
        </p>
      </section>

      {/* About preview */}
      <section className="section preview-section">
        <h2>About Us</h2>
        <p>Learn more about Dark Web Technologies, our mission, and our projects.</p>
        <p>
          <Link to="/about">About Dark Web Technologies →</Link>
        </p>
      </section>
    </div>
  </>
);

export default Home;
