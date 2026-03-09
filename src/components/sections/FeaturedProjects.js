import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './FeaturedProjects.css';
import { content } from '../../content';

const FeaturedProjects = () => {
  const { projects } = content;
  const navigate = useNavigate();

  if (!projects.featured || projects.featured.length === 0) return null;

  return (
    <section id="featured-work">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">{projects.featuredTitle || 'Featured Work'}</h2>
        </motion.div>

        <div className="featured-grid">
          {projects.featured.map((project, index) => (
            <motion.article
              key={project.id}
              className="featured-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => navigate(`/work/${project.slug}`)}
            >
              {project.image && (
                <div className="featured-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <div className="featured-content">
                <div className="featured-tags">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.impactSummary && <p className="featured-impact">{project.impactSummary}</p>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

