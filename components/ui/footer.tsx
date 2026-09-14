import React from 'react';

const links = [
  { label: 'Mobile', href: '/mobile' },
  { label: 'Migrations', href: '/migrations' },
  { label: 'AI Search', href: '/ai-search' },
  { label: 'About', href: '/about' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-ink">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-5 px-6 py-8 font-mono text-xs font-medium leading-none tracking-[0.08em] text-graphite-400">
        <span>© {new Date().getFullYear()} PERSISTENT SOFTWARE</span>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-graphite-300 transition-colors duration-[120ms] hover:text-graphite-0"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
          <a
            href="mailto:contact@persistentsoftware.com"
            className="text-signal-300 transition-colors duration-[120ms] hover:text-signal-200"
          >
            CONTACT@PERSISTENTSOFTWARE.COM
          </a>
        </nav>
      </div>
    </footer>
  );
};

export { Footer };
