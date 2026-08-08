import React from 'react';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import './LegalPage.css';

const Terms: React.FC = () => (
  <>
    <Meta
      title="Terms of Service – Dark Web Technologies"
      description="Terms of Service for the Dark Web Technologies website. Please read these terms before using the site."
    />
    <Breadcrumbs />
    <main className="legal-page container" id="terms-page">
      <header className="legal-header">
        <h1>Terms of Service</h1>
        <p className="legal-date">Last updated: 9 August 2026</p>
      </header>

      <section className="legal-section" aria-labelledby="tos-acceptance">
        <h2 id="tos-acceptance">Acceptance of Terms</h2>
        <p>
          By accessing and using the Dark Web Technologies website (the "Site"), you agree
          to be bound by these Terms of Service. If you do not agree, please do not use the
          Site.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="tos-use">
        <h2 id="tos-use">Permitted Use</h2>
        <p>You may use this Site for lawful purposes only. You agree not to:</p>
        <ul>
          <li>Use the Site in any way that violates applicable laws or regulations.</li>
          <li>Attempt to gain unauthorised access to any part of the Site or its infrastructure.</li>
          <li>
            Scrape, crawl, or index the Site's content in ways that place excessive load on
            our hosting infrastructure.
          </li>
          <li>
            Misrepresent the source or affiliation of any content published on this Site.
          </li>
        </ul>
      </section>

      <section className="legal-section" aria-labelledby="tos-ip">
        <h2 id="tos-ip">Intellectual Property</h2>
        <p>
          All content on this Site — including text, code samples, articles, tutorials, build
          logs, graphics, and branding — is the property of Dark Web Technologies unless
          otherwise stated. You may not reproduce, distribute, or create derivative works from
          this content without prior written permission.
        </p>
        <p>
          Code examples published for educational purposes (such as in tutorials or articles)
          may be used in your own projects subject to attribution. If a specific licence
          applies to a given code sample, it will be stated alongside that sample.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="tos-projects">
        <h2 id="tos-projects">Project Information</h2>
        <p>
          Information about our projects — Aether AI, Gringotts Wizarding Bank, Voyager Chat,
          and Project Blackout — is provided for informational and portfolio purposes. Project
          status, features, and availability are subject to change without notice.
        </p>
        <p>
          <strong>Gringotts Wizarding Bank</strong> is a banking simulation for portfolio and
          educational purposes only. It is not a real financial institution and does not
          provide real banking, payment, or financial services of any kind.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="tos-accuracy">
        <h2 id="tos-accuracy">Content Accuracy</h2>
        <p>
          We endeavour to keep information on this Site accurate and up to date. However, we
          make no warranties or representations regarding the completeness, accuracy, or
          reliability of any content. Technical information — including articles and tutorials
          — reflects our understanding at the time of writing and may become outdated.
        </p>
        <p>
          You are responsible for independently verifying any technical or other information
          before relying on it.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="tos-links">
        <h2 id="tos-links">External Links</h2>
        <p>
          This Site may contain links to third-party websites. We are not responsible for the
          content, privacy practices, or accuracy of any external sites. The inclusion of a
          link does not constitute endorsement.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="tos-liability">
        <h2 id="tos-liability">Limitation of Liability</h2>
        <p>
          This Site is provided "as is" without warranties of any kind, express or implied.
          To the fullest extent permitted by applicable law, Dark Web Technologies shall not
          be liable for any direct, indirect, incidental, or consequential damages arising
          from your use of, or inability to use, this Site or its content.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="tos-changes">
        <h2 id="tos-changes">Changes to These Terms</h2>
        <p>
          We may update these Terms of Service at any time. The "Last updated" date at the
          top of this page reflects the most recent revision. Continued use of the Site after
          changes are published constitutes acceptance of the revised terms.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="tos-contact">
        <h2 id="tos-contact">Contact</h2>
        <p>
          If you have questions about these Terms of Service, please contact us at{' '}
          <a href="mailto:kgsdhakar8107@gmail.com">kgsdhakar8107@gmail.com</a>.
        </p>
      </section>
    </main>
  </>
);

export default Terms;
