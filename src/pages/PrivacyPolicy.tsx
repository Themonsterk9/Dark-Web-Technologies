import React from 'react';
import Meta from '../seo/Meta';
import Breadcrumbs from '../seo/Breadcrumbs';
import './LegalPage.css';

const PrivacyPolicy: React.FC = () => (
  <>
    <Meta
      title="Privacy Policy – Dark Web Technologies"
      description="Privacy Policy for the Dark Web Technologies website. Learn how we handle your data when you visit our site."
    />
    <Breadcrumbs />
    <main className="legal-page container" id="privacy-policy-page">
      <header className="legal-header">
        <h1>Privacy Policy</h1>
        <p className="legal-date">Last updated: 9 August 2026</p>
      </header>

      <section className="legal-section" aria-labelledby="pp-intro">
        <h2 id="pp-intro">Introduction</h2>
        <p>
          This Privacy Policy describes how the Dark Web Technologies website
          (hereinafter "the Site", "we", "us", or "our") handles information when
          you visit.
        </p>
        <p>
          We are committed to being transparent about our data practices. This policy is written
          to accurately reflect what the Site actually does — not what a generic template claims.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="pp-data-collected">
        <h2 id="pp-data-collected">Information We Collect</h2>

        <h3>Information You Provide Voluntarily</h3>
        <p>
          If you contact us by email, we receive the information contained in your email,
          including your email address and any details you choose to include. We use this
          solely to respond to your enquiry. We do not store email correspondence in any
          database or CRM system.
        </p>

        <h3>Information Collected Automatically</h3>
        <p>
          This Site is a static, client‑side web application. It does not operate a
          server‑side database and does not log your IP address or browsing behaviour on
          our infrastructure.
        </p>
        <p>
          However, the Site is hosted on Vercel. Vercel may collect standard web server logs
          (including IP addresses and request metadata) as part of their hosting infrastructure.
          Please refer to{' '}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel's Privacy Policy
          </a>{' '}
          for details.
        </p>

        <h3>Cookies and Local Storage</h3>
        <p>
          This Site does not set any first-party cookies. We do not use tracking cookies,
          session cookies, or any persistent browser storage to identify or track you.
        </p>
        <p>
          We do not currently use analytics services, advertising networks, or any third‑party
          tracking scripts. If this changes in the future, this policy will be updated before
          any such service is implemented.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="pp-third-party">
        <h2 id="pp-third-party">Third-Party Services</h2>
        <p>This Site loads fonts from Google Fonts. Google may collect request data (such as
          IP address and browser information) when your browser fetches font files. Please refer
          to{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google's Privacy Policy
          </a>{' '}
          for details.
        </p>
        <p>
          No other third-party tracking, analytics, or advertising services are currently
          integrated with this Site.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="pp-use">
        <h2 id="pp-use">How We Use Information</h2>
        <p>Information we receive (such as email correspondence) is used only to:</p>
        <ul>
          <li>Respond to your enquiry.</li>
          <li>Understand the subject matter of your message.</li>
        </ul>
        <p>
          We do not sell, rent, or share your personal information with third parties for
          marketing purposes.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="pp-links">
        <h2 id="pp-links">External Links</h2>
        <p>
          This Site may contain links to external websites. We are not responsible for the
          privacy practices of those sites and encourage you to review their privacy policies
          before providing any personal information.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="pp-children">
        <h2 id="pp-children">Children</h2>
        <p>
          This Site is not directed at children under the age of 13. We do not knowingly
          collect personal information from children.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="pp-changes">
        <h2 id="pp-changes">Changes to This Policy</h2>
        <p>
          We may update this policy to reflect changes to the Site's functionality or legal
          requirements. The "Last updated" date at the top of this page will reflect any
          changes. Continued use of the Site after changes are published constitutes
          acceptance of the revised policy.
        </p>
      </section>

      <section className="legal-section" aria-labelledby="pp-contact">
        <h2 id="pp-contact">Contact</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:kgsdhakar8107@gmail.com">kgsdhakar8107@gmail.com</a>.
        </p>
      </section>
    </main>
  </>
);

export default PrivacyPolicy;
