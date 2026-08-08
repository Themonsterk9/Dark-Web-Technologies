import React from 'react';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import './LegalPage.css';

const Disclaimer: React.FC = () => (
  <>
    <Meta
      title="Disclaimer – Dark Web Technologies"
      description="Disclaimer for the Dark Web Technologies website. Information about the nature of our projects and the educational purpose of our content."
    />
    <Breadcrumbs />
    <main className="legal-page container" id="disclaimer-page">
      <header className="legal-header">
        <h1>Disclaimer</h1>
        <p className="legal-date">Last updated: 9 August 2026</p>
      </header>

      <section className="legal-section" aria-labelledby="disc-general">
        <h2 id="disc-general">General</h2>
        <p>
          The information on this website is provided for general informational and educational
          purposes. While we make every effort to keep information accurate and up to date, we
          make no warranties or representations of any kind — express or implied — about the
          completeness, accuracy, reliability, suitability, or availability of any content on
          this Site.
        </p>
        <p>
          Your use of any information or material on this Site is entirely at your own risk.
          We shall not be liable for any loss or damage, including indirect or consequential
          loss, arising from the use of this Site.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="disc-educational">
        <h2 id="disc-educational">Educational and Technical Content</h2>
        <p>
          Articles, tutorials, and build logs published on this Site are educational and
          informational in nature. They reflect the author's understanding at the time of
          writing. Technology evolves rapidly; code examples, techniques, and tools described
          may become outdated.
        </p>
        <p>
          You are responsible for independently verifying any technical information before
          applying it in production environments or critical systems. Dark Web Technologies
          accepts no responsibility for errors, omissions, or the consequences of applying
          information from this Site.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="disc-projects">
        <h2 id="disc-projects">Project Demonstrations</h2>
        <p>
          Projects described on this Site — including Aether AI, Voyager Chat, and Project
          Blackout — are software products built and maintained by Dark Web Technologies.
          Information about features, availability, and status is for informational purposes
          and is subject to change.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="disc-gringotts">
        <h2 id="disc-gringotts">Gringotts Wizarding Bank — Important Notice</h2>
        <p>
          <strong>Gringotts Wizarding Bank is a portfolio project and educational banking
          simulation. It is not a real bank, financial institution, payment provider,
          or financial service of any kind.</strong>
        </p>
        <p>
          Specifically:
        </p>
        <ul>
          <li>Gringotts Wizarding Bank does not hold, process, or transfer real money.</li>
          <li>It does not provide real accounts, real balances, or real financial transactions.</li>
          <li>It is not regulated by any financial authority.</li>
          <li>It is not affiliated with Warner Bros., the Harry Potter franchise, or any rights holder.</li>
          <li>
            It is a software demonstration project built for portfolio and educational purposes,
            inspired by fictional source material.
          </li>
        </ul>
        <p>
          Do not use Gringotts Wizarding Bank for any real financial purpose. Do not contact
          us regarding real banking transactions, real account access, or real financial advice.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="disc-links">
        <h2 id="disc-links">External Links</h2>
        <p>
          This Site may contain links to third-party websites. These links are provided for
          convenience and informational purposes only. We do not endorse, control, or take
          responsibility for the content, privacy policies, or practices of any external sites.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="disc-contact">
        <h2 id="disc-contact">Contact</h2>
        <p>
          If you have questions about this Disclaimer, please contact us at{' '}
          <a href="mailto:kgsdhakar8107@gmail.com">kgsdhakar8107@gmail.com</a>.
        </p>
      </section>
    </main>
  </>
);

export default Disclaimer;
