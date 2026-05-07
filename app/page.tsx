'use client'
import React, { useState } from 'react'
import { ConsultingCards, TrainingCards, ProjectCards } from '@/app/components/Modal'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#444441' }}>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
          .mobile-menu { display: ${menuOpen ? 'flex' : 'none'} !important; }
          .hero-grid { grid-template-columns: 1fr !important; padding: 7rem 1.5rem 4rem !important; }
          .hero-svg { display: none !important; }
          .hero-h1 { font-size: 2.8rem !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; padding: 2rem 1.5rem !important; gap: 1.5rem !important; }
          .section-pad { padding: 4rem 1.5rem !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .two-col-rev { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .four-col { grid-template-columns: 1fr 1fr !important; }
          .footer-inner { flex-direction: column !important; align-items: flex-start !important; gap: 1.5rem !important; }
          .footer-links { flex-wrap: wrap !important; gap: 1rem !important; }
          .nav-pad { padding: 0.75rem 1.5rem !important; }
          .training-sticky { position: static !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav-pad" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0.75rem 4rem', borderBottom: '0.5px solid rgba(229,227,223,0.6)',
        position: 'fixed', top: 0, left: 0, right: 0,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)', zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', fontSize: '1.4rem', letterSpacing: '0.08em' }}>
          <span style={{ fontWeight: 300, color: '#888780' }}>sude</span>
          <span style={{ fontWeight: 700, color: '#1d9e75' }}>NEXUS</span>
        </div>

        <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {[['Consulting', '#consulting'], ['Training', '#training'], ['Projects', '#projects'], ['Digital', '/digital'], ['About', '#about'], ['Contact', '#contact']].map(([label, href]) => (
            <li key={label}>
              <a href={href} style={{ fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888780', textDecoration: 'none' }}>{label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta" style={{
          fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: '#1d9e75', border: '1.5px solid #1d9e75',
          padding: '0.6rem 1.5rem', textDecoration: 'none', borderRadius: '2px'
        }}>Get in Touch</a>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', flexDirection: 'column', gap: '5px', background: 'none',
          border: 'none', cursor: 'pointer', padding: '4px'
        }}>
          <span style={{ width: '24px', height: '2px', background: menuOpen ? '#1d9e75' : '#444441', display: 'block', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ width: '24px', height: '2px', background: '#444441', display: menuOpen ? 'none' : 'block' }} />
          <span style={{ width: '24px', height: '2px', background: menuOpen ? '#1d9e75' : '#444441', display: 'block', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu" style={{
        display: 'none', flexDirection: 'column',
        position: 'fixed', top: '57px', left: 0, right: 0,
        background: 'white', zIndex: 99, padding: '1.5rem',
        borderBottom: '1px solid #e5e3df', gap: '1.25rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
      }}>
        {[['Consulting', '#consulting'], ['Training', '#training'], ['Projects', '#projects'], ['Digital', '/digital'], ['About', '#about'], ['Contact', '#contact']].map(([label, href]) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)} style={{
            fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#444441', textDecoration: 'none',
            paddingBottom: '1rem', borderBottom: '0.5px solid #e5e3df'
          }}>{label}</a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)} style={{
          background: '#1d9e75', color: 'white', padding: '0.85rem',
          fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px',
          textAlign: 'center', display: 'block'
        }}>Get in Touch</a>
      </div>

      {/* HERO */}
      <section className="hero-grid" style={{
        padding: '10rem 4rem 7rem', background: 'white',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'
      }}>
        <div>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '2rem' }}>
            Consulting · Training · Projects
          </p>
          <h1 className="hero-h1" style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1.1, color: '#2c2c2a', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            From strategy
          </h1>
          <h1 className="hero-h1" style={{ fontSize: '4rem', fontWeight: 300, lineHeight: 1.1, color: '#2c2c2a', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            to <span style={{ color: '#1d9e75', fontWeight: 700 }}>implementation.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '1.1rem', fontWeight: 300, color: '#888780', lineHeight: 1.8, maxWidth: '520px', marginBottom: '3rem' }}>
            sudeNEXUS partners with organisations to design, fund, and deliver high-impact projects — from concept to completion.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#consulting" style={{
              background: '#1d9e75', color: 'white', padding: '0.85rem 2.25rem',
              fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px'
            }}>Our Services</a>
            <a href="#contact" style={{
              background: 'transparent', color: '#444441', padding: '0.85rem 2.25rem',
              fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.12em',
              textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px',
              border: '1px solid #d3d1c7'
            }}>Start a Project</a>
          </div>
        </div>
        <div className="hero-svg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg width="100%" viewBox="0 0 300 220" style={{ maxWidth: '420px' }} xmlns="http://www.w3.org/2000/svg">
            <line x1="20" y1="100" x2="210" y2="100" stroke="#d3d1c7" strokeWidth="0.5" strokeDasharray="6 6"/>
            <rect x="20" y="72" width="44" height="56" rx="3" fill="none" stroke="#b4b2a9" strokeWidth="1"/>
            <rect x="80" y="58" width="44" height="84" rx="3" fill="none" stroke="#b4b2a9" strokeWidth="1"/>
            <rect x="140" y="40" width="44" height="120" rx="3" fill="none" stroke="#1d9e75" strokeWidth="2"/>
            <circle cx="252" cy="100" r="36" fill="#e1f5ee"/>
            <circle cx="252" cy="100" r="20" fill="#1d9e75"/>
            <path d="M242 100 L252 88 L262 100 L252 112 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-grid" style={{
        background: '#2c2c2a', padding: '2.5rem 4rem',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem'
      }}>
        {[
          { num: '360°', label: 'End-to-end project support' },
          { num: 'Global', label: 'Cross-border programme expertise' },
          { num: 'Accredited', label: 'Internationally recognised courses' },
          { num: 'Networked', label: 'Active multi-country partnerships' },
        ].map(s => (
          <div key={s.num} style={{ borderLeft: '2px solid #1d9e75', paddingLeft: '1.25rem' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1d9e75', lineHeight: 1, marginBottom: '0.3rem' }}>{s.num}</div>
            <div style={{ fontSize: '0.75rem', color: '#888780', fontWeight: 300, letterSpacing: '0.06em', fontFamily: 'var(--font-raleway), Raleway, sans-serif' }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* CONSULTING */}
      <section id="consulting" className="section-pad" style={{ padding: '6rem 4rem', background: '#f1efe8' }}>
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'end' }}>
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '1rem' }}>Consulting</p>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#2c2c2a', lineHeight: 1.2, marginBottom: '1.5rem' }}>Strategic guidance that delivers.</h2>
            <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.95rem', color: '#888780', fontWeight: 300, lineHeight: 1.9, marginBottom: '2rem' }}>
              We work alongside organisations to navigate complex landscapes, identifying opportunities, building strategies, and turning vision into action.
            </p>
            <svg width="100%" viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
              <circle cx="110" cy="32" r="18" fill="none" stroke="#1d9e75" strokeWidth="1.5"/>
              <circle cx="40" cy="110" r="13" fill="none" stroke="#888780" strokeWidth="1"/>
              <circle cx="110" cy="110" r="13" fill="none" stroke="#888780" strokeWidth="1"/>
              <circle cx="180" cy="110" r="13" fill="none" stroke="#888780" strokeWidth="1"/>
              <line x1="110" y1="50" x2="46" y2="98" stroke="#1d9e75" strokeWidth="1" strokeOpacity="0.6"/>
              <line x1="110" y1="50" x2="110" y2="97" stroke="#1d9e75" strokeWidth="1.5" strokeOpacity="0.9"/>
              <line x1="110" y1="50" x2="174" y2="98" stroke="#1d9e75" strokeWidth="1" strokeOpacity="0.6"/>
              <line x1="53" y1="110" x2="97" y2="110" stroke="#d3d1c7" strokeWidth="0.5" strokeDasharray="3 3"/>
              <line x1="123" y1="110" x2="167" y2="110" stroke="#d3d1c7" strokeWidth="0.5" strokeDasharray="3 3"/>
              <circle cx="110" cy="32" r="6" fill="#1d9e75"/>
            </svg>
          </div>
          <ConsultingCards />
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="section-pad" style={{ padding: '6rem 4rem', background: 'white' }}>
        <div className="two-col-rev" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'end' }}>
          <TrainingCards />
          <div className="training-sticky" style={{ position: 'sticky', top: '6rem' }}>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '1rem' }}>Training</p>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#2c2c2a', lineHeight: 1.2, marginBottom: '1.5rem' }}>Learning that moves organisations forward.</h2>
            <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.95rem', color: '#888780', fontWeight: 300, lineHeight: 1.9, marginBottom: '2rem' }}>
              Our training programmes combine practical content with international perspective, designed for professionals who need more than theory.
            </p>
            <a href="#contact" style={{
              background: '#1d9e75', color: 'white', padding: '0.75rem 2rem',
              fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', display: 'inline-block'
            }}>View Course Catalogue</a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-pad" style={{ padding: '6rem 4rem', background: '#2c2c2a' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '1rem' }}>Projects</p>
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'white', lineHeight: 1.2, margin: 0 }}>
            We don&apos;t just advise.<br />
            <span style={{ color: '#1d9e75' }}>We build.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.95rem', color: '#888780', fontWeight: 300, lineHeight: 1.9, margin: 0 }}>
            sudeNEXUS takes an active role in projects, as applicant, coordinator, or partner, bringing expertise and commitment to every collaboration.
          </p>
        </div>
        <ProjectCards />
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad" style={{ padding: '6rem 4rem', background: 'white' }}>
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '1rem' }}>About sudeNEXUS</p>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#2c2c2a', lineHeight: 1.2, marginBottom: '1.5rem' }}>Built for organisations that want to do more.</h2>
            <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.95rem', color: '#888780', fontWeight: 300, lineHeight: 1.9, marginBottom: '1.25rem' }}>
              sudeNEXUS is a consultancy at the intersection of strategy, education, and project development. We work with institutions, NGOs, and forward-thinking organisations to unlock their potential.
            </p>
            <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.95rem', color: '#888780', fontWeight: 300, lineHeight: 1.9 }}>
              Our approach is hands-on. We don&apos;t deliver reports — we deliver results.
            </p>
          </div>
          <div className="four-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              { num: '3', label: 'Core service areas' },
              { num: 'Global', label: 'Funding frameworks covered' },
              { num: '360°', label: 'Project lifecycle support' },
              { num: 'Networked', label: 'Active partner network' },
            ].map(stat => (
              <div key={stat.num} style={{ background: '#f1efe8', padding: '2rem', borderRadius: '4px', borderLeft: '3px solid #1d9e75' }}>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1d9e75', lineHeight: 1, marginBottom: '0.4rem' }}>{stat.num}</div>
                <div style={{ fontSize: '0.78rem', color: '#888780', fontWeight: 300, letterSpacing: '0.06em', fontFamily: 'var(--font-raleway), Raleway, sans-serif' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-pad" style={{ padding: '6rem 4rem', background: '#f1efe8' }}>
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '1rem' }}>Contact</p>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#2c2c2a', lineHeight: 1.2, marginBottom: '1.5rem' }}>Let&apos;s build something that matters.</h2>
            <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.95rem', color: '#888780', fontWeight: 300, lineHeight: 1.9, marginBottom: '2rem' }}>
              Whether you have a project in mind, are looking for a training partner, or simply want to explore what&apos;s possible, we&apos;d love to hear from you.
            </p>
            <a href="mailto:info@sudenexus.com" style={{ color: '#1d9e75', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>info@sudenexus.com</a>
          </div>
          <form action="https://formspree.io/f/mdabloja" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your name', required: true },
              { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your@email.com', required: true },
              { label: 'Organisation', name: 'organisation', type: 'text', placeholder: 'Your organisation', required: false },
            ].map(field => (
              <div key={field.name}>
                <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888780', fontWeight: 600, marginBottom: '0.4rem' }}>{field.label}</label>
                <input name={field.name} type={field.type} placeholder={field.placeholder} required={field.required} style={{ width: '100%', padding: '0.7rem 0.9rem', border: '0.5px solid #d3d1c7', borderRadius: '2px', fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.88rem', color: '#444441', background: 'white', outline: 'none', boxSizing: 'border-box' }} />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888780', fontWeight: 600, marginBottom: '0.4rem' }}>How can we help?</label>
              <select name="subject" style={{ width: '100%', padding: '0.7rem 0.9rem', border: '0.5px solid #d3d1c7', borderRadius: '2px', fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.88rem', color: '#444441', background: 'white', outline: 'none' }}>
                <option>Project Consulting</option>
                <option>Training & Courses</option>
                <option>Partnership Opportunity</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888780', fontWeight: 600, marginBottom: '0.4rem' }}>Message</label>
              <textarea name="message" placeholder="Tell us about your project or enquiry..." rows={4} required style={{ width: '100%', padding: '0.7rem 0.9rem', border: '0.5px solid #d3d1c7', borderRadius: '2px', fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.88rem', color: '#444441', background: 'white', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
            </div>
            <button type="submit" style={{ background: '#1d9e75', color: 'white', padding: '0.85rem 2rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', border: 'none', borderRadius: '2px', cursor: 'pointer' }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#2c2c2a', color: '#888780', padding: '2.5rem 4rem' }}>
        <div className="footer-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', fontSize: '1.1rem', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
              <span style={{ fontWeight: 300, color: '#888780' }}>sude</span>
              <span style={{ fontWeight: 700, color: '#1d9e75' }}>NEXUS</span>
            </div>
            <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.72rem', fontWeight: 300, letterSpacing: '0.1em' }}>Connecting ideas. Creating impact.</p>
          </div>
          <div className="footer-links" style={{ display: 'flex', gap: '2rem' }}>
            {[['Consulting', '#consulting'], ['Training', '#training'], ['Projects', '#projects'], ['Digital', '/digital'], ['About', '#about'], ['Contact', '#contact']].map(([label, href]) => (
              <a key={label} href={href} style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888780', textDecoration: 'none' }}>{label}</a>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.78rem', fontWeight: 300 }}>© 2025 sudeNEXUS. All rights reserved.</p>
        </div>
      </footer>

    </main>
  )
}