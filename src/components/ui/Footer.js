import React from 'react';
import './Footer.css';
import { content } from '../../content';

const Footer = () => {
  const links = content.footer.links || [];

  return (
    <footer>
      <div className="container footer-inner">
        <p>{content.footer.text}</p>
        {links.length > 0 && (
          <nav className="footer-links" aria-label="Footer social links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </footer>
  );
};

export default Footer;
