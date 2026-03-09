import React from 'react';
import { motion } from 'framer-motion';
import './DesignProcess.css';

const STEPS = [
  { step: '01', title: 'Research', description: 'Understand user workflows, constraints, and business goals through interviews, data and shadowing.' },
  { step: '02', title: 'Define', description: 'Frame the problem, align on success metrics, and prioritise which user journeys matter most.' },
  { step: '03', title: 'Explore', description: 'Generate multiple directions, from low‑fidelity flows to interaction patterns and information architectures.' },
  { step: '04', title: 'Prototype', description: 'Build interactive prototypes that bring flows to life and allow realistic stakeholder and user walkthroughs.' },
  { step: '05', title: 'Test', description: 'Run usability tests, pilots and A/B experiments to validate assumptions and uncover failure modes early.' },
  { step: '06', title: 'Ship', description: 'Work closely with engineering to ship, measure impact, and iterate based on real usage.' }
];

const DesignProcess = () => {
  return (
    <section id="process">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">My Design Process</h2>
        </motion.div>

        <div className="process-grid">
          {STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              className="process-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="process-step">{item.step}</span>
              <h3 className="process-title">{item.title}</h3>
              <p className="process-description">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;

