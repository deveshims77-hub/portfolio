import React from 'react';
import { motion } from 'framer-motion';
import './ImpactStats.css';

const IMPACT_CARDS = [
  {
    label: 'Capture Attempts',
    metric: '1.66 → 1.1',
    role: 'Assisted shooting flow',
    badge: '↓ 34% retries'
  },
  {
    label: 'Shoot Conversions',
    metric: '+35%',
    role: 'Offline shooting experience',
    badge: 'More successful shoots'
  },
  {
    label: 'Manual QC Time',
    metric: '36.4s → &lt; 10s',
    role: 'Quality check redesign',
    badge: 'Faster operations'
  },
  {
    label: 'Funnel Conversion',
    metric: '1.14% → 4.12%',
    role: 'Editing Playground',
    badge: '4× conversion lift'
  },
  {
    label: 'Experience',
    metric: '3+ years',
    role: 'Product design across B2B & consumer',
    badge: 'End-to-end ownership'
  }
];

const ImpactStats = () => {
  return (
    <section id="impact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">Impact Metrics</h2>
          <p className="impact-subtitle">
            A few numbers from recent work that show how design decisions translated into product and business outcomes.
          </p>
        </motion.div>

        <div className="impact-grid">
          {IMPACT_CARDS.map((card, index) => (
            <motion.article
              key={card.label}
              className="impact-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="impact-label">{card.label}</p>
              <p className="impact-metric">{card.metric}</p>
              <p className="impact-role">{card.role}</p>
              <span className="impact-badge">{card.badge}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;

