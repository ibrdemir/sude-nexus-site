'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Digital() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#444441' }}>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
          .mobile-menu { display: ${menuOpen ? 'flex' : 'none'} !important; }
          .nav-pad { padding: 0.75rem 1.5rem !important; }
          .hero-pad { padding: 6rem 1.5rem 4rem !important; }
          .hero-h1 { font-size: 2.8rem !important; }
          .section-pad { padding: 4rem 1.5rem !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .footer-inner { flex-direction: column !important; align-items: flex-start !important; gap: 1.5rem !important; }
          .footer-links { flex-wrap: wrap !important; gap: 1rem !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav-pad" style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0.75rem 4rem', borderBottom: '0.5px solid rgba(229,227,223,0.6)',
        position: 'sticky', top: 0, background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)', zIndex: 100
      }}>
        <img src="/logo.svg" alt="sudeNEXUS" style={{ height: '28px', width: 'auto' }} />

        <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {[['Consulting', '/#consulting'], ['Training', '/#training'], ['Projects', '/#projects'], ['Digital', '/digital'], ['About', '/#about'], ['Contact', '/#contact']].map(([label, href]) => (
            <li key={label}>
              <Link href={href} style={{ fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: label === 'Digital' ? '#1d9e75' : '#888780', textDecoration: 'none' }}>{label}</Link>
            </li>
          ))}
        </ul>

        <Link href="/#contact" className="nav-cta" style={{
          fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: '#1d9e75', border: '1.5px solid #1d9e75',
          padding: '0.6rem 1.5rem', textDecoration: 'none', borderRadius: '2px'
        }}>Get in Touch</Link>

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
        {[['Consulting', '/#consulting'], ['Training', '/#training'], ['Projects', '/#projects'], ['Digital', '/digital'], ['About', '/#about'], ['Contact', '/#contact']].map(([label, href]) => (
          <Link key={label} href={href} onClick={() => setMenuOpen(false)} style={{
            fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: label === 'Digital' ? '#1d9e75' : '#444441',
            textDecoration: 'none', paddingBottom: '1rem', borderBottom: '0.5px solid #e5e3df'
          }}>{label}</Link>
        ))}
        <Link href="/#contact" onClick={() => setMenuOpen(false)} style={{
          background: '#1d9e75', color: 'white', padding: '0.85rem',
          fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px',
          textAlign: 'center', display: 'block'
        }}>Get in Touch</Link>
      </div>

      {/* HERO */}
      <section className="hero-pad" style={{ padding: '8rem 4rem 7rem', background: 'white' }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '2rem' }}>
          Digital Transformation
        </p>
        <h1 className="hero-h1" style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1.1, color: '#2c2c2a', marginBottom: '0.5rem', letterSpacing: '-0.02em', maxWidth: '700px' }}>
          Technology that
        </h1>
        <h1 className="hero-h1" style={{ fontSize: '4rem', fontWeight: 300, lineHeight: 1.1, color: '#2c2c2a', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
          drives real <span style={{ color: '#1d9e75', fontWeight: 700 }}>change.</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '1.1rem', fontWeight: 300, color: '#888780', lineHeight: 1.8, maxWidth: '520px', marginBottom: '3rem' }}>
          We help organisations and educational institutions navigate digital transformation — from strategy and tool selection to implementation and training.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/#contact" style={{
            background: '#1d9e75', color: 'white', padding: '0.85rem 2.25rem',
            fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px'
          }}>Start a Conversation</Link>
          <Link href="/#training" style={{
            background: 'transparent', color: '#444441', padding: '0.85rem 2.25rem',
            fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.12em',
            textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px',
            border: '1px solid #d3d1c7'
          }}>View Training</Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad" style={{ padding: '6rem 4rem', background: '#f1efe8' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '0.75rem' }}>What We Offer</p>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#2c2c2a', lineHeight: 1.2, marginBottom: '3rem' }}>
          End-to-end digital solutions.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {[
            { icon: '◈', title: 'Digital Strategy', desc: "Roadmapping your organisation's digital future — tools, processes, and people aligned to a clear vision." },
            { icon: '◎', title: 'EdTech Solutions', desc: 'Technology platforms and tools that transform how schools and institutions teach, manage, and communicate.' },
            { icon: '⬡', title: 'Process Automation', desc: 'Identifying manual workflows that can be streamlined or automated to save time and reduce errors.' },
            { icon: '◇', title: 'Digital Literacy Training', desc: 'Practical training programmes that build digital confidence and capability across your team or institution.' },
            { icon: '▣', title: 'School Management Systems', desc: 'Tailored digital infrastructure for educational institutions — administration, communication, and data in one place.' },
            { icon: '◉', title: 'AI Integration & Workflow Modernisation', desc: 'Practical AI adoption strategies that enhance productivity without overwhelming your team.' },
          ].map(s => (
            <div key={s.title} style={{ background: 'white', border: '0.5px solid #e5e3df', padding: '2rem', borderRadius: '4px' }}>
              <div style={{ fontSize: '1.4rem', color: '#1d9e75', marginBottom: '1rem' }}>{s.icon}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#2c2c2a', marginBottom: '0.75rem' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.88rem', color: '#888780', lineHeight: 1.7, fontWeight: 300 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY DIGITAL */}
      <section className="section-pad" style={{ padding: '6rem 4rem', background: 'white' }}>
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '1rem' }}>Our Approach</p>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#2c2c2a', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Digital transformation done right.
            </h2>
            <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.95rem', color: '#888780', fontWeight: 300, lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Too many digital projects fail because they focus on tools rather than people. We start with your organisation's goals, culture, and capacity — then design solutions that actually get adopted.
            </p>
            <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.95rem', color: '#888780', fontWeight: 300, lineHeight: 1.9 }}>
              From audit to implementation, we stay alongside you — not just as consultants, but as partners in change.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              { num: 'People-first', label: 'Change management at the core' },
              { num: 'Practical', label: 'No jargon, just results' },
              { num: 'Scalable', label: 'Solutions that grow with you' },
              { num: 'Supported', label: 'Training and handover included' },
            ].map(stat => (
              <div key={stat.num} style={{ background: '#f1efe8', padding: '1.75rem', borderRadius: '4px', borderLeft: '3px solid #1d9e75' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1d9e75', lineHeight: 1.2, marginBottom: '0.4rem' }}>{stat.num}</div>
                <div style={{ fontSize: '0.78rem', color: '#888780', fontWeight: 300, letterSpacing: '0.06em', fontFamily: 'var(--font-raleway), Raleway, sans-serif' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ padding: '6rem 4rem', background: '#2c2c2a', textAlign: 'center' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '1rem' }}>Get Started</p>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          Ready to transform how your organisation works?
        </h2>
        <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.95rem', color: '#888780', fontWeight: 300, lineHeight: 1.9, maxWidth: '500px', margin: '0 auto 2.5rem' }}>
          Let's start with a conversation about where you are and where you want to be.
        </p>
        <Link href="/#contact" style={{
          background: '#1d9e75', color: 'white', padding: '0.85rem 2.5rem',
          fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px',
          display: 'inline-block'
        }}>Start a Conversation</Link>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#2c2c2a', borderTop: '0.5px solid rgba(255,255,255,0.08)', color: '#888780', padding: '2.5rem 4rem' }}>
        <div className="footer-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <img src="/logo.svg" alt="sudeNEXUS" style={{ height: '28px', width: 'auto' }} />
            <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.72rem', fontWeight: 300, letterSpacing: '0.1em' }}>Connecting ideas. Creating impact.</p>
          </div>
          <div className="footer-links" style={{ display: 'flex', gap: '2rem' }}>
            {[['Consulting', '/#consulting'], ['Training', '/#training'], ['Projects', '/#projects'], ['Digital', '/digital'], ['About', '/#about'], ['Contact', '/#contact']].map(([label, href]) => (
              <Link key={label} href={href} style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888780', textDecoration: 'none' }}>{label}</Link>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.78rem', fontWeight: 300 }}>© 2025 sudeNEXUS. All rights reserved.</p>
        </div>
      </footer>

    </main>
  )
}
