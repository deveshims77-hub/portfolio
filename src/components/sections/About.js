import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { content } from '../../content';

const TOOL_PILLS = [
  'Figma',
  'Framer',
  'ProtoPie',
  'Webflow',
  'HTML',
  'CSS',
  'Cursor',
  'Vercel',
  'Lottiefiles',
  'Jira',
  'Trello',
  'Adobe XD',
  'Adobe Illustrator',
  'Lovable',
  'Bolt',
];

const About = () => {
  const { about } = content;

  return (
    <section id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">{about.sectionTitle}</h2>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        {/* Tools Marquee */}
        <motion.div
          className="tools-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="tools-title">Tools & Technologies</h3>
          <p className="tools-subtitle">
            A mix of product design, prototyping, shipping and collaboration tools I use day‑to‑day.
          </p>
          <div className="tools-grid">
            {TOOL_PILLS.map((tool) => (
              <div key={tool} className="tool-pill">
                {tool}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
