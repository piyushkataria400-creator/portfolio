import React from 'react';
import { ArrowRight, BarChart3, Building2, CheckCircle2, Factory, LineChart, ShieldCheck, Target } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">Piyush Kataria.</div>
          <nav className="nav-links">
            <a href="#services" className="nav-link">Services</a>
            <a href="#industries" className="nav-link">Industries</a>
            <a href="#guarantee" className="nav-link">Guarantee</a>
            <a href="#contact" className="nav-link btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Book a Strategy Call</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="animate-fade-in-up">
              <span className="guarantee-badge">Performance Marketing Consultant</span>
              <h1 className="hero-title">Generate Qualified Enquiries, Not Just Impressions.</h1>
              <p className="hero-subtitle">
                I help construction companies, HVAC businesses, manufacturers, and dental clinics generate highly qualified business enquiries through Meta Ads, Google Ads, and conversion-focused systems.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Book a Strategy Call <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                </a>
                <a href="#results" className="btn btn-secondary">
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Services Section */}
        <section id="services" className="section">
          <div className="container">
            <div className="text-center animate-fade-in-up delay-100">
              <h2 className="section-title">Performance Marketing Services</h2>
              <p className="text-secondary" style={{ maxWidth: '700px', margin: '0 auto 1.5rem' }}>
                Personally delivered and optimised. No outsourcing. No hand-offs. End-to-end strategy tailored to your sales process.
              </p>
            </div>
            
            <div className="grid">
              <div className="card animate-fade-in-up delay-200">
                <Target className="card-icon" size={32} />
                <h3 className="card-title">Meta Ads Management</h3>
                <p className="text-secondary">Full-funnel Facebook and Instagram advertising strategy, campaign build, creative direction, and continuous optimisation focused on qualified cost per lead.</p>
              </div>
              
              <div className="card animate-fade-in-up delay-300">
                <LineChart className="card-icon" size={32} />
                <h3 className="card-title">Google Ads Management</h3>
                <p className="text-secondary">Search, Display, and Performance Max campaigns designed to capture high-intent buyers actively searching for your services. Structured for qualified traffic.</p>
              </div>
              
              <div className="card animate-fade-in-up delay-100">
                <BarChart3 className="card-icon" size={32} />
                <h3 className="card-title">Landing Page Systems</h3>
                <p className="text-secondary">Conversion-optimised landing pages and lead funnels built specifically for your campaigns to qualify visitors before they submit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="section" style={{ backgroundColor: 'var(--card-bg)' }}>
          <div className="container">
            <div className="text-center animate-fade-in-up">
              <h2 className="section-title">Industries I Serve</h2>
              <p className="text-secondary" style={{ maxWidth: '700px', margin: '0 auto 1.5rem' }}>
                Deep expertise in specific sectors. I've invested in understanding the commercial realities of your world.
              </p>
            </div>
            
            <div className="grid">
              <div className="card" style={{ backgroundColor: 'var(--bg-color)' }}>
                <Building2 className="card-icon" size={32} />
                <h3 className="card-title">Construction & HVAC</h3>
                <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} className="text-accent"/> Commercial contractors</li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} className="text-accent"/> HVAC installation</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} className="text-accent"/> Specialist trades</li>
                </ul>
              </div>
              
              <div className="card" style={{ backgroundColor: 'var(--bg-color)' }}>
                <Factory className="card-icon" size={32} />
                <h3 className="card-title">Manufacturing</h3>
                <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} className="text-accent"/> Engineering firms</li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} className="text-accent"/> Equipment suppliers</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} className="text-accent"/> Industrial B2B</li>
                </ul>
              </div>
              
              <div className="card" style={{ backgroundColor: 'var(--bg-color)' }}>
                <Target className="card-icon" size={32} />
                <h3 className="card-title">Dental & Healthcare</h3>
                <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} className="text-accent"/> Dental implant campaigns</li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} className="text-accent"/> Invisalign & cosmetics</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} className="text-accent"/> Private clinics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section id="guarantee" className="section guarantee-section">
          <div className="container">
            <div className="guarantee-content text-center animate-fade-in-up">
              <ShieldCheck className="card-icon" size={48} style={{ margin: '0 auto 1.5rem' }} />
              <h2 className="section-title">Qualified Enquiry Guarantee</h2>
              <p className="text-secondary" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                My singular focus is generating enquiries that have genuine interest in your product or service. This is the commitment I make to eligible clients.
              </p>
              <p className="text-secondary" style={{ marginBottom: '2rem' }}>
                If I am unable to generate a minimum agreed number of qualified enquiries within the campaign period, I will continue optimising and working on the account at no additional management fee until the agreed target is achieved.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">Piyush Kataria.</div>
          <p className="text-secondary">© 2026 Piyush Kataria. All rights reserved. Independent Performance Marketing Consultant.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
