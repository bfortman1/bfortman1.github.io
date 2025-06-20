import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <section className="hero" style={{ padding: 0, overflow: 'hidden', marginBottom: '2rem' }}>
        {/* Replace hero-banner.png with your actual hero image in /public/images/ */}
        <img
          src="/images/hero-banner.jpg"
          alt="Ampersand-Interactive Hero"
          className="hero-image"
          style={{ width: '100%', maxHeight: 380, objectFit: 'cover', borderRadius: '12px 12px 0 0', display: 'block' }}
        />
        <div style={{ padding: '3rem 2rem 2rem 2rem', background: 'linear-gradient(90deg, #0a183d 60%, #3fa9f5 100%)', color: '#fff', borderRadius: '0 0 12px 12px' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '0.5rem', color: '#fff', textShadow: '0 2px 8px rgba(10,24,61,0.18)' }}>Ampersand-Interactive</h1>
        <Link to="/products" className="button-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>See Our Products</Link>
        </div>
      </section>
      <section>
        <h2>Ampersand-Interactive</h2>
        <p>Transforming complexity into simplicity.</p>
      </section>
    </div>
  );
}
