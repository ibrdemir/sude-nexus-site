import Link from 'next/link'

export default function Digital() {
  return (
    <main style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#444441' }}>

      {/* NAV */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0.75rem 4rem', borderBottom: '0.5px solid rgba(229,227,223,0.6)',
        position: 'sticky', top: 0, background: 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(12px)', zIndex: 100
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'baseline', fontSize: '1.4rem', letterSpacing: '0.08em', textDecoration: 'none' }}>
          <span style={{ fontWeight: 300, color: '#888780' }}>sude</span>
          <span style={{ fontWeight: 700, color: '#1d9e75' }}>NEXUS</span>
        </Link>
        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {[['Consulting', '/#consulting'], ['Training', '/#training'], ['Projects', '/#projects'], ['Digital', '/digital'], ['About', '/#about'], ['Contact', '/#contact']].map(([label, href]) => (
            <li key={label}>
              <Link href={href} style={{
                fontSize: '0.78rem', fontWeight: 400,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#888780', textDecoration: 'none'
              }}>{label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/#contact" style={{
          fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', color: '#1d9e75', border: '1.5px solid #1d9e75',
          padding: '0.6rem 1.5rem', textDecoration: 'none', borderRadius: '2px'
        }}>Get in Touch</Link>
      </nav>

      {/* HERO */}
      <section style={{ padding: '8rem 4rem 7rem', background: 'white' }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '2rem' }}>
          Digital Transformation
        </p>
        <h1 style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1.1, color: '#2c2c2a', marginBottom: '0.5rem', letterSpacing: '-0.02em', maxWidth: '700px' }}>
          Technology that
        </h1>
        <h1 style={{ fontSize: '4rem', fontWeight: 300, lineHeight: 1.1, color: '#2c2c2a', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
          drives real <span style={{ color: '#1d9e75', fontWeight: 700 }}>change.</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '1.1rem', fontWeight: 300, color: '#888780', lineHeight: 1.8, maxWidth: '520px', marginBottom: '3rem' }}>
          We help organisations and educational institutions navigate digital transformation — from strategy and tool selection to implementation and training.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
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
      <section style={{ padding: '6rem 4rem', background: '#f1efe8' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '0.75rem' }}>What We Offer</p>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#2c2c2a', lineHeight: 1.2, marginBottom: '3rem' }}>
          End-to-end digital solutions.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {[
            { icon: '◈', title: 'Digital Strategy', desc: 'Roadmapping your organisation\'s digital future — tools, processes, and people aligned to a clear vision.' },
            { icon: '◎', title: 'EdTech Solutions', desc: 'Technology platforms and tools that transform how schools and institutions teach, manage, and communicate.' },
            { icon: '⬡', title: 'Process Automation', desc: 'Identifying manual workflows that can be streamlined or automated to save time and reduce errors.' },
            { icon: '◇', title: 'Digital Literacy Training', desc: 'Practical training programmes that build digital confidence and capability across your team or institution.' },
            { icon: '▣', title: 'School Management Systems', desc: 'Tailored digital infrastructure for educational institutions — administration, communication, and data in one place.' },
            { icon: '◐', title: 'AI Integration & Workflow Modernisation', desc: 'Helping organisations build genuine AI fluency and redesign workflows to make technology work for people.' },
          ].map(card => (
            <div key={card.title} style={{ background: 'white', border: '0.5px solid #e5e3df', padding: '1.75rem', borderRadius: '4px' }}>
              <div style={{ fontSize: '1.4rem', color: '#1d9e75', marginBottom: '0.75rem' }}>{card.icon}</div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#2c2c2a', marginBottom: '0.5rem' }}>{card.title}</h3>
              <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.85rem', color: '#888780', lineHeight: 1.7, fontWeight: 300 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOCUS — Education */}
      <section style={{ padding: '6rem 4rem', background: '#2c2c2a' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '1rem' }}>Focus Area</p>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'white', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Digital transformation<br />
              <span style={{ color: '#1d9e75' }}>in education.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.95rem', color: '#b4b2a9', fontWeight: 300, lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Schools and educational institutions face unique digital challenges — from managing student data and communication to adopting new teaching technologies and meeting compliance requirements.
            </p>
            <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.95rem', color: '#b4b2a9', fontWeight: 300, lineHeight: 1.9 }}>
              sudeNEXUS brings together project management expertise and deep understanding of the education sector to deliver digital solutions that actually work in practice.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { label: 'For Schools', desc: 'Management systems, parent communication platforms, and digital administration tools tailored for K-12 institutions.' },
              { label: 'For Higher Education', desc: 'LMS integration, research data management, and digital workflow optimisation for universities and colleges.' },
              { label: 'For Training Organisations', desc: 'Course delivery platforms, participant tracking, and reporting tools for professional training providers.' },
            ].map(item => (
              <div key={item.label} style={{ borderLeft: '2px solid #1d9e75', paddingLeft: '1.25rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>{item.label}</h3>
                <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.85rem', color: '#888780', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON — Products */}
      <section style={{ padding: '6rem 4rem', background: 'white' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '0.75rem' }}>Products</p>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: '#2c2c2a', marginBottom: '0.5rem' }}>Solutions in development.</h2>
        <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.95rem', color: '#888780', fontWeight: 300, marginBottom: '2.5rem' }}>
          We are building targeted digital products for the education sector.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {[
            { title: 'School Management Platform', status: 'In Development', desc: 'A comprehensive, lightweight school management system designed for simplicity and real-world usability.' },
            { title: 'Digital Readiness Assessment', status: 'Coming Soon', desc: 'A structured framework to evaluate and benchmark your organisation\'s digital maturity and identify priorities.' },
            { title: 'EdTech Integration Toolkit', status: 'Coming Soon', desc: 'A curated set of tools and templates to help educational institutions adopt new technologies smoothly.' },
          ].map(product => (
            <div key={product.title} style={{ border: '1px dashed #d3d1c7', borderRadius: '4px', padding: '2rem', background: '#fafaf8' }}>
              <span style={{ display: 'inline-block', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '1rem', background: '#e1f5ee', padding: '3px 10px', borderRadius: '2px' }}>{product.status}</span>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#2c2c2a', marginBottom: '0.5rem' }}>{product.title}</h3>
              <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.85rem', color: '#888780', lineHeight: 1.7, fontWeight: 300 }}>{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#2c2c2a', color: '#888780', padding: '2.5rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <Link href="/" style={{ display: 'flex', alignItems: 'baseline', fontSize: '1.1rem', letterSpacing: '0.08em', marginBottom: '0.4rem', textDecoration: 'none' }}>
            <span style={{ fontWeight: 300, color: '#888780' }}>sude</span>
            <span style={{ fontWeight: 700, color: '#1d9e75' }}>NEXUS</span>
          </Link>
          <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.72rem', fontWeight: 300, letterSpacing: '0.1em' }}>Connecting ideas. Creating impact.</p>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {[['Consulting', '/#consulting'], ['Training', '/#training'], ['Projects', '/#projects'], ['Digital', '/digital'], ['Contact', '/#contact']].map(([label, href]) => (
            <Link key={label} href={href} style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888780', textDecoration: 'none' }}>{label}</Link>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif', fontSize: '0.78rem', fontWeight: 300 }}>© 2025 sudeNEXUS. All rights reserved.</p>
      </footer>

    </main>
  )
}