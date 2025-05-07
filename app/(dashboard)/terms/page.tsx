import React from 'react';

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the website www.persistentsoftware.com (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Changes to Terms</h2>
        <p>
          Persistent Software reserves the right to modify or update these Terms at any time without prior notice. Your continued use of the Site after any changes constitutes your acceptance of the new Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Use of the Site</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>You agree to use the Site only for lawful purposes.</li>
          <li>You must not misuse the Site by introducing viruses or other malicious code.</li>
          <li>You may not attempt to gain unauthorized access to the Site or its related systems.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
        <p>
          All content on the Site, including text, graphics, logos, and software, is the property of Persistent Software or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Privacy</h2>
        <p>
          Your use of the Site is also governed by our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Disclaimers</h2>
        <p>
          The Site is provided on an "as is" and "as available" basis. Persistent Software makes no warranties, express or implied, regarding the Site’s reliability, accuracy, or availability.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Persistent Software shall not be liable for any indirect, incidental, or consequential damages arising out of or related to your use of the Site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of the State of [Insert Jurisdiction], without regard to its conflict of law principles.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at{' '}
          <a href="mailto:contact@persistentsoftware.com" className="text-blue-600 underline">
            contact@persistentsoftware.com
          </a>.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center' as const,
  },
  paragraph: {
    fontSize: '1rem',
    marginBottom: '15px',
  },
};

