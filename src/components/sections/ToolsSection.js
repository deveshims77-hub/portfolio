import React from 'react';
import { motion } from 'framer-motion';
import './ToolsSection.css';

const TOOLS = [
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
  'Bolt'
];

const ToolsSection = () => {
  return (
    <section id="tools">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">Tools I Use</h2>
          <p className="tools-subtitle">
            A mix of product design, prototyping, shipping and collaboration tools I use day‑to‑day.
          </p>
        </motion.div>

        <motion.div
          className="tools-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {TOOLS.map((tool) => (
            <div key={tool} className="tool-pill">
              {tool}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;

