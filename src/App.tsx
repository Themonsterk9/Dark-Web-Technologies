import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Technology from './pages/Technology';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import BuildLogList from './pages/BuildLogList';
import BuildLogDetail from './pages/BuildLogDetail';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Tutorials from './pages/Tutorials';
import TutorialDetail from './pages/TutorialDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import Footer from './components/Footer';
import Background from './components/Background';
import { organization, website } from './seo/siteInfo';
import StructuredData from './seo/StructuredData';

const App: React.FC = () => (
  <Router>
    <div className="app-container">
      <Background />
      <Navbar />
      {/* Site-wide Organization + WebSite structured data */}
      <StructuredData organization={organization} website={website} />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/build-log" element={<BuildLogList />} />
          <Route path="/build-log/:slug" element={<BuildLogDetail />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/tutorials/:slug" element={<TutorialDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
