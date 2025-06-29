import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './main.css';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function RedirectHandler() {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);
  return null;
}

function App() {
  return (
    <Router>
      <RedirectHandler />
      <nav>
        <div style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '0.04em' }}>
          Ampersand-Interactive
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
