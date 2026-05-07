'use client'

import React, { useState } from 'react'

type Item = {
  icon?: string
  title: string
  desc: string
  full: string
  services: string[]
}

const consultingData: Item[] = [
  { icon: '◈', title: 'Project Strategy', desc: 'End-to-end strategic planning for initiatives that create measurable, lasting impact.', full: 'sudeNEXUS works with organisations at the earliest stage of project development, helping define objectives, map stakeholders, and build a roadmap that connects ambition to action. Whether designing a new initiative from scratch or repositioning an existing programme, we bring structured thinking and international experience to every engagement.', services: ['Needs assessment', 'Logic framework development', 'Stakeholder mapping', 'Risk analysis', 'Implementation planning'] },
  { icon: '◎', title: 'Funding & Grant Advisory', desc: 'Identifying the right funding mechanisms and crafting compelling, successful applications.', full: 'Navigating the funding landscape requires more than knowing where to look. It requires understanding what funders want and how to speak their language. sudeNEXUS supports organisations in identifying the right opportunities, building compelling cases, and submitting applications that stand out.', services: ['Funding landscape mapping', 'Proposal writing', 'Budget development', 'Compliance review', 'Resubmission strategy'] },
  { icon: '⬡', title: 'Partnership Brokering', desc: 'Building cross-border consortiums with the right organisations for your project goals.', full: 'Strong projects are built on strong partnerships. sudeNEXUS connects organisations across borders, matching complementary strengths, facilitating introductions, and helping consortiums develop the trust and structure needed for successful collaboration.', services: ['Partner identification', 'Consortium building', 'MoU development', 'Role & responsibility mapping', 'Cross-border facilitation'] },
  { icon: '◇', title: 'Programme Management', desc: 'Hands-on coordination, reporting, and quality assurance throughout project delivery.', full: 'From kick-off to final report, sudeNEXUS provides hands-on project coordination, keeping timelines on track, managing deliverables, and ensuring every requirement is met with precision and care.', services: ['Project coordination', 'Progress reporting', 'Financial monitoring', 'Stakeholder communication', 'Quality assurance'] },
]

const trainingData: Item[] = [
  { icon: '▣', title: 'Professional Development', desc: 'Structured training programmes for teams and individuals seeking real, applicable skills.', full: 'Investing in people is the most sustainable investment an organisation can make. Our professional development programmes are designed around real workplace challenges, practical, immediately applicable, and built for lasting impact.', services: ['Skills gap analysis', 'Customised programme design', 'Workshop facilitation', 'Progress tracking', 'Post-training support'] },
  { icon: '◑', title: 'AI Integration & Workflow Modernisation', desc: 'Helping organisations build genuine AI fluency and redesign workflows for the modern era.', full: 'Organisations that understand and use technology well move faster and work smarter. sudeNEXUS helps teams build genuine AI fluency and redesigns workflows to make technology work for people, not the other way around.', services: ['AI tools assessment', 'Workflow audit', 'Integration roadmap', 'Staff training', 'Change support'] },
  { icon: '◐', title: 'Leadership & Management', desc: 'Building the capacity of leaders to drive organisational change and innovation.', full: 'Effective leadership separates good organisations from great ones. Our leadership programmes combine strategic frameworks with practical tools, equipping managers and executives to lead with clarity, confidence, and impact.', services: ['Leadership assessment', 'Management skills training', 'Decision-making frameworks', 'Team dynamics', 'Strategic thinking'] },
  { icon: '◈', title: 'International Mobility Courses', desc: 'Accredited courses delivered across Europe, eligible for mobility funding frameworks.', full: 'Our internationally delivered courses offer professionals a unique combination of structured learning and cross-cultural exchange. Designed for participants from diverse backgrounds, each course is a genuine opportunity to grow professionally and personally.', services: ['Course design', 'Accreditation support', 'Participant coordination', 'Host organisation liaison', 'Post-course reporting'] },
]

const projectsData: Item[] = [
  { title: 'As Applicant', desc: 'We identify funding opportunities and lead applications on behalf of our clients and partners.', full: 'When the right opportunity meets the right moment, sudeNEXUS steps in as lead applicant, taking responsibility for the full application process and, if successful, for project delivery. We identify calls that match our partners strengths and build applications designed to succeed.', services: ['Call identification', 'Full application management', 'Budget construction', 'Partner coordination', 'Submission & follow-up'] },
  { title: 'As Coordinator', desc: 'We manage consortium projects end-to-end, from kick-off to final report and dissemination.', full: 'Coordinating a multi-partner project is one of the most demanding roles in international project work. sudeNEXUS brings the organisational capacity, communication skills, and attention to detail that consortium coordination demands, from the first meeting to the final report.', services: ['Consortium management', 'Work package oversight', 'Financial coordination', 'Reporting', 'Dissemination'] },
  { title: 'As Partner', desc: 'We join consortiums as an active partner, contributing expertise and international reach.', full: 'sudeNEXUS joins projects as an active, contributing partner, bringing expertise in training, consultancy, and project management to consortiums that need a reliable, experienced collaborator with international reach.', services: ['Active participation', 'Expertise contribution', 'Deliverable ownership', 'Cross-partner collaboration', 'Knowledge transfer'] },
]

function Modal({ item, onClose }: { item: Item; onClose: () => void }) {
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(44,44,42,0.7)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'white', borderRadius: '4px', padding: '3rem', maxWidth: '580px', width: '100%', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#888780' }}>✕</button>
        {item.icon && <div style={{ fontSize: '1.8rem', color: '#1d9e75', marginBottom: '1rem' }}>{item.icon}</div>}
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#2c2c2a', marginBottom: '1rem', fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h2>
        <p style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.95rem', color: '#888780', lineHeight: 1.9, fontWeight: 300, marginBottom: '2rem' }}>{item.full}</p>
        <div style={{ borderTop: '0.5px solid #e5e3df', paddingTop: '1.5rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1d9e75', fontWeight: 600, marginBottom: '1rem' }}>What we do</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {item.services.map((s) => <span key={s} style={{ fontSize: '0.78rem', color: '#444441', background: '#f1efe8', padding: '0.35rem 0.85rem', borderRadius: '2px' }}>{s}</span>)}
          </div>
        </div>
        <a href="#contact" onClick={onClose} style={{ display: 'inline-block', marginTop: '2rem', background: '#1d9e75', color: 'white', padding: '0.75rem 2rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>Get in Touch</a>
      </div>
    </div>
  )
}

export function ConsultingCards() {
  const [active, setActive] = useState<Item | null>(null)
  return (
    <React.Fragment>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
        {consultingData.map((card) => (
          <div key={card.title} onClick={() => setActive(card)} style={{ background: 'white', border: '0.5px solid #e5e3df', padding: '1.75rem', borderRadius: '4px', cursor: 'pointer' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#1d9e75')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e5e3df')}>
            <div style={{ fontSize: '1.4rem', color: '#1d9e75', marginBottom: '0.75rem' }}>{card.icon}</div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#2c2c2a', marginBottom: '0.5rem' }}>{card.title}</h3>
            <p style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.85rem', color: '#888780', lineHeight: 1.7, fontWeight: 300 }}>{card.desc}</p>
            <span style={{ fontSize: '0.72rem', color: '#1d9e75', fontWeight: 600, marginTop: '1rem', display: 'inline-block' }}>Learn more →</span>
          </div>
        ))}
      </div>
      {active && <Modal item={active} onClose={() => setActive(null)} />}
    </React.Fragment>
  )
}

export function TrainingCards() {
  const [active, setActive] = useState<Item | null>(null)
  return (
    <React.Fragment>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
        {trainingData.map((card) => (
          <div key={card.title} onClick={() => setActive(card)} style={{ background: '#f1efe8', border: '0.5px solid #e5e3df', padding: '1.75rem', borderRadius: '4px', cursor: 'pointer' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#1d9e75')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e5e3df')}>
            <div style={{ fontSize: '1.4rem', color: '#1d9e75', marginBottom: '0.75rem' }}>{card.icon}</div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#2c2c2a', marginBottom: '0.5rem' }}>{card.title}</h3>
            <p style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.85rem', color: '#888780', lineHeight: 1.7, fontWeight: 300 }}>{card.desc}</p>
            <span style={{ fontSize: '0.72rem', color: '#1d9e75', fontWeight: 600, marginTop: '1rem', display: 'inline-block' }}>Learn more →</span>
          </div>
        ))}
      </div>
      {active && <Modal item={active} onClose={() => setActive(null)} />}
    </React.Fragment>
  )
}

export function ProjectCards() {
  const [active, setActive] = useState<Item | null>(null)
  return (
    <React.Fragment>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
        {projectsData.map((item) => (
          <div key={item.title} onClick={() => setActive(item)} style={{ borderTop: '2px solid #1d9e75', paddingTop: '1.5rem', cursor: 'pointer' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem' }}>{item.title}</h3>
            <p style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.88rem', color: '#888780', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
            <span style={{ fontSize: '0.72rem', color: '#1d9e75', fontWeight: 600, marginTop: '1rem', display: 'inline-block' }}>Learn more →</span>
          </div>
        ))}
      </div>
      {active && <Modal item={active} onClose={() => setActive(null)} />}
    </React.Fragment>
  )
}