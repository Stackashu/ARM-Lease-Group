import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UserFeedback from './pages/UserFeedback';
import DummyPage from './pages/DummyPage';

import ListYourRequirement from './pages/ListYourRequirement';
import MarketTrends from './pages/MarketTrends';
import Layout from './components/Layout';
import CorporateLeasing from './pages/CorporateLeasing';
import RetailServices from './pages/RetailServices';
import InvestmentAdvisory from './pages/InvestmentAdvisory';
import InteriorManagement from './pages/InteriorManagement';
import OurClients from './pages/OurClients';
import AboutUs from './pages/AboutUs';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/feedback" element={<UserFeedback />} />

          {/* Services */}
          <Route path="/services/corporate-leasing" element={<CorporateLeasing />} />
          <Route path="/services/retail" element={<RetailServices />} />
          <Route path="/services/advisory" element={<InvestmentAdvisory />} />
          <Route path="/services/interior" element={<InteriorManagement />} />

          {/* Insights */}
          <Route path="/insights/clients" element={<OurClients />} />
          <Route path="/insights/trends" element={<MarketTrends />} />

          {/* Properties & Company */}
          <Route path="/properties/list" element={<ListYourRequirement />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/case-study" element={<DummyPage title="Case Study" />} />
          <Route path="/careers" element={<DummyPage title="Our Careers" />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
