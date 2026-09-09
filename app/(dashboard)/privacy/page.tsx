import React from 'react';

export default function Privacy() {
  return (
    <main className="mx-auto max-w-[72ch] px-6 py-16 text-graphite-500">
      <h1 className="mb-10 text-graphite-900">Privacy Policy</h1>
      <section className="mb-6">
        <h2 className="mb-2 text-h4 text-graphite-900">1. Introduction</h2>
        <p>
          Persistent Software ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you use our website www.persistentsoftware.com (the "Site").
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-h4 text-graphite-900">2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Personal Information (e.g., name, email address) when you contact us or sign up.</li>
          <li>Usage Data (e.g., browser type, pages visited, time spent).</li>
          <li>Cookies and tracking technologies for analytics and site functionality.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-h4 text-graphite-900">3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Provide, maintain, and improve our services.</li>
          <li>Respond to your inquiries or support requests.</li>
          <li>Analyze usage patterns to improve user experience.</li>
          <li>Send you service-related updates or newsletters (if you opt in).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-h4 text-graphite-900">4. Sharing of Information</h2>
        <p>
          We do not sell or rent your personal information. We may share data with trusted third-party service providers for the purpose of hosting, analytics, and communication - only to the extent necessary for them to perform their services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-h4 text-graphite-900">5. Your Choices</h2>
        <p>
          You may choose to disable cookies through your browser settings. You may also contact us to access, update, or delete your personal information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-h4 text-graphite-900">6. Security</h2>
        <p>
          We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-h4 text-graphite-900">7. Third-Party Links</h2>
        <p>
          Our Site may contain links to other websites. We are not responsible for the privacy practices or content of those sites.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-h4 text-graphite-900">8. Children's Privacy</h2>
        <p>
          Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-h4 text-graphite-900">9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-h4 text-graphite-900">10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:contact@persistentsoftware.com" className="text-signal-700 underline underline-offset-4 hover:text-signal-600">
            contact@persistentsoftware.com
          </a>.
        </p>
      </section>
    </main>
  );
}

