import React from 'react';
import { motion } from 'framer-motion';
import './DesignPhilosophy.css';

const DesignPhilosophy = () => {
  return (
    <section id="philosophy">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">Design Philosophy</h2>
        </motion.div>

        <motion.div
          className="philosophy-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p>
            I believe great products come from deeply understanding real workflows and respecting constraints —
            not from isolated screens. The work I enjoy most starts with messy, ambiguous problems and turns them into
            opinionated, legible systems that teams can actually operate.
          </p>
          <p>
            My bias is toward designing flows that ship and can be measured. That means framing problems clearly,
            choosing the smallest version that can validate a hypothesis, and making sure engineering has everything
            they need to move fast without guesswork.
          </p>
          <p>
            When AI is involved, I try to make the system&apos;s capabilities and limits visible to users. Good AI UX
            gives people leverage without pretending the system is magic — it explains what&apos;s happening, what
            might fail, and how to recover when it does.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;

