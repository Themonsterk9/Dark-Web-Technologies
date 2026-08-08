import React from 'react';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import './LegalPage.css';

const Contact: React.FC = () => (
  <>
    <Meta
      title="Contact – Dark Web Technologies"
      description="Contact Dark Web Technologies. Reach out by email for enquiries about our projects or this website."
    />
    <Breadcrumbs />
    <main className="legal-page container" id="contact-page">
      <header className="legal-header">
        <h1>Contact Us</h1>
      </header>

      <section className="legal-section" aria-labelledby="contact-email">
        <h2 id="contact-email">Get in Touch</h2>
        <p>
          For enquiries about Dark Web Technologies, our projects, or this website, please
          email us at:
        </p>
        <p className="contact-email">
          <a href="mailto:kgsdhakar8107@gmail.com" aria-label="Email Dark Web Technologies">
            kgsdhakar8107@gmail.com
          </a>
        </p>
        <p>
          We aim to respond to all legitimate enquiries. Response times may vary.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="contact-scope">
        <h2 id="contact-scope">What to Include</h2>
        <p>When contacting us, please include:</p>
        <ul>
          <li>A clear subject line describing your enquiry.</li>
          <li>Details of the specific project or page your enquiry relates to, if applicable.</li>
          <li>Your contact information so we can reply.</li>
        </ul>
      </section>

      <section className="legal-section" aria-labelledby="contact-note">
        <h2 id="contact-note">Please Note</h2>
        <p>
          This contact method is for legitimate correspondence only. We do not accept
          unsolicited commercial or marketing messages.
        </p>
        <p>
          Gringotts Wizarding Bank is a portfolio and educational banking simulation, not a
          real financial service. Please do not contact us regarding banking transactions,
          account access, or financial matters.
        </p>
      </section>
    </main>
  </>
);

export default Contact;
