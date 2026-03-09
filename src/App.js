import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';

import Navigation from './components/ui/Navigation';
import MobileHeader from './components/ui/MobileHeader';
import Footer from './components/ui/Footer';
import ThemeToggle from './components/ui/ThemeToggle';
import ContrastToggle from './components/ui/ContrastToggle';
import CustomCursor from './components/ui/CustomCursor';
import ResumeModal from './components/ui/ResumeModal';

import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Hobbies from './components/sections/Hobbies';
import Contact from './components/sections/Contact';
import ProjectDetail from './components/sections/ProjectDetail';
import InstantMediaDetail from './components/sections/InstantMediaDetail';
import InventoryListingDetail from './components/sections/InventoryListingDetail';

import { content } from './content';

const HomePage = ({ onResumeClick }) => (
  <div className="App">
    <Helmet>
      <title>Devesh Gupta | Product Designer</title>
      <meta
        name="description"
        content="Product Designer with 3+ years of experience designing AI-powered, scalable workflows that improve efficiency and conversion."
      />
    </Helmet>
    <CustomCursor />
    <MobileHeader navigationItems={content.navigation} onResumeClick={onResumeClick} />
    <ThemeToggle />
    <ContrastToggle />
    <Navigation onResumeClick={onResumeClick} />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Hobbies />
    <Contact />
    <Footer />
  </div>
);

const ProjectDetailPage = () => (
  <div className="App">
    <Helmet>
      <title>Case Study | Work Detail</title>
      <meta
        name="description"
        content="Deep dive into a selected product design case study from Devesh Gupta."
      />
    </Helmet>
    <CustomCursor />
    <ThemeToggle />
    <ContrastToggle />
    <ProjectDetail />
  </div>
);

const InstantMediaDetailPage = () => (
  <div className="App">
    <Helmet>
      <title>Instant Media – Case Study</title>
      <meta
        name="description"
        content="Instant Media – reducing time-to-live in automotive retail by enabling same-day listings with representative imagery."
      />
    </Helmet>
    <CustomCursor />
    <ThemeToggle />
    <ContrastToggle />
    <InstantMediaDetail />
  </div>
);

const InventoryListingDetailPage = () => (
  <div className="App">
    <Helmet>
      <title>Inventory Listing &amp; VDP – Case Study</title>
      <meta
        name="description"
        content="Inventory Listing & VDP – turning a media grid into an inventory intelligence dashboard with actionable metrics."
      />
    </Helmet>
    <CustomCursor />
    <ThemeToggle />
    <ContrastToggle />
    <InventoryListingDetail />
  </div>
);

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage onResumeClick={() => setResumeOpen(true)} />} />
          <Route path="/work/instant-media" element={<InstantMediaDetailPage />} />
          <Route path="/work/inventory-listing-vdp" element={<InventoryListingDetailPage />} />
          <Route path="/work/:slug" element={<ProjectDetailPage />} />
        </Routes>
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
