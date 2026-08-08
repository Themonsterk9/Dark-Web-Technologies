import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import './LegalPage.css';

const About: React.FC = () => (
  <>
    <Meta
      title="About – Dark Web Technologies"
      description="Dark Web Technologies is a software and technology company building AI products, web applications, communication tools, and games."
    />
    <Breadcrumbs />
    <main className="legal-page container" id="about-page">
      <header className="legal-header">
        <h1>About Dark Web Technologies</h1>
      </header>

      <section className="legal-section" aria-labelledby="about-overview">
        <h2 id="about-overview">Who We Are</h2>
        <p>
          Dark Web Technologies is a software and technology organisation building cutting‑edge
          software, artificial intelligence products, web applications, communication tools, and
          games. Our work spans multiple domains — from machine learning and natural language
          processing to financial simulations and real‑time communication.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="about-projects">
        <h2 id="about-projects">Our Projects</h2>
        <p>We are actively building the following projects:</p>
        <ul className="project-list">
          <li>
            <strong>Aether AI</strong> — An artificial intelligence product. Currently live.
          </li>
          <li>
            <strong>Gringotts Wizarding Bank</strong> — A banking simulation application
            inspired by fictional lore. This is a portfolio and educational demonstration
            project and not a real banking or financial service. Currently live.
          </li>
          <li>
            <strong>Voyager Chat</strong> — A real‑time communication application. Currently
            in development.
          </li>
          <li>
            <strong>Project Blackout</strong> — An upcoming project. Details to be announced.
          </li>
        </ul>
        <p>
          <Link to="/projects">View the full projects page →</Link>
        </p>
      </section>

      <section className="legal-section" aria-labelledby="about-site">
        <h2 id="about-site">This Website</h2>
        <p>
          This website — Dark Web Technologies — is our primary technology and portfolio
          platform. It showcases our projects, publishes technical articles and tutorials,
          and documents our development progress through a build log.
        </p>
        <p>
          All content is manually authored and published through a code‑based workflow.
          There are no user accounts, no CMS, and no third‑party publishing systems.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="about-contact">
        <h2 id="about-contact">Contact</h2>
        <p>
          You can reach us via our <Link to="/contact">contact page</Link>.
        </p>
      </section>
    </main>
  </>
);

export default About;
