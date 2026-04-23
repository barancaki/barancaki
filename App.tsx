import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LinkedinLeadGen from './pages/LinkedinLeadGen';
import GoogleMapsScraper from './pages/GoogleMapsScraper';
import RayaAI from './pages/RayaAI';
import DataInstructionTool from './pages/DataInstructionTool';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';
import PortfolioShaderBackground from './components/PortfolioShaderBackground';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-slate-50 dark:bg-void min-h-screen transition-colors duration-500 relative overflow-x-hidden font-sans selection:bg-neon/30 selection:text-neon">
        <PortfolioShaderBackground />
        <ScrollToTop />
        <Navbar />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/linkedin-lead-gen" element={<LinkedinLeadGen />} />
            <Route path="/google-maps-scraper" element={<GoogleMapsScraper />} />
            <Route path="/raya-ai" element={<RayaAI />} />
            <Route path="/data-instruction-tool" element={<DataInstructionTool />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
