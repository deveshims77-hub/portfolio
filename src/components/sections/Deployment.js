import React from 'react';
import { motion } from 'framer-motion';
import './Deployment.css';

const steps = [
  {
    title: '1. Push code to GitHub',
    description: 'Create a GitHub repository for the portfolio, commit changes regularly, and keep main protected for stable deployments.'
  },
  {
    title: '2. Connect repo to Vercel',
    description: 'Import the GitHub repo into Vercel, select the main branch, and use the default React build configuration.'
  },
  {
    title: '3. Ship and iterate',
    description: 'Every push to main automatically triggers a new deployment. Use preview branches for experiments before merging.'
  }
];

const Deployment = () => {
  return (
    <section id="deployment">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">Deployment</h2>
        </motion.div>

        <motion.div
          className="deployment-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {steps.map((step) => (
            <div key={step.title} className="deployment-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Deployment;

