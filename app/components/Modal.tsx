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
  {
    icon: '◈',
    title: 'Project Strategy',
    desc: 'End-to-end strategic planning for initiatives that create measurable, lasting impact.',
    full: 'sudeNEXUS works with organisations at the earliest stage of project development, helping define objectives, map stakeholders, and build a roadmap that connects ambition to action. Whether designing a new initiative from scratch or repositioning an existing programme, we bring structured thinking and international experience to every engagement. Our approach starts with listening — understanding your vision fully before offering any direction.',
    services: ['Needs assessment', 'Logic framework development', 'Stakeholder mapping', 'Risk analysis', 'Implementation planning']
  },
  {
    icon: '◎',
    title: 'Funding & Grant Advisory',
    desc: 'Identifying the right EU and international funding mechanisms and crafting compelling, successful applications.',
    full: 'Navigating the EU funding landscape requires more than knowing where to look. It requires understanding what funders want and how to speak their language. sudeNEXUS supports organisations across the full funding cycle — from identifying the right programme to submitting applications that stand out. We have hands-on experience across Erasmus+, Horizon Europe, CERV, Creative Europe, Digital Europe, LIFE, European Solidarity Corps, EU External Action (RELEX-Prospect), PPPA, and country-specific calls.',
    services: ['Funding landscape mapping', 'Programme eligibility assessment', 'Proposal writing', 'Budget development', 'Compliance review', 'Resubmission strategy']
  },
  {
    icon: '⬡',
    title: 'Partnership Brokering',
    desc: 'Building cross-border consortiums with the right organisations across our 26+ country network.',
    full: 'Strong projects are built on strong partnerships. Many organisations have the vision but lack the network. sudeNEXUS connects organisations across borders — drawing on our active network spanning 26+ countries across Europe, MENA, and Central Asia — to match complementary strengths, facilitate introductions, and help consortiums develop the trust and structure needed for successful collaboration. Finding the right partner is often the difference between a funded project and a missed opportunity.',
    services: ['Partner identification', 'Consortium building', 'MoU development', 'Role & responsibility mapping', 'Cross-border facilitation']
  },
  {
    icon: '◇',
    title: 'Programme Management',
    desc: 'Hands-on coordination, reporting, and quality assurance throughout project delivery.',
    full: 'From kick-off to final report, sudeNEXUS provides hands-on project coordination, keeping timelines on track, managing deliverables, and ensuring every requirement is met with precision and care. We handle the complexity of multi-partner EU projects so your organisation can focus on the work that matters. Mid-term reviews, financial monitoring, and dissemination are all part of how we work.',
    services: ['Project coordination', 'Progress reporting', 'Financial monitoring', 'Mid-term review support', 'Stakeholder communication', 'Quality assurance']
  },
]

const trainingData: Item[] = [
  {
    icon: '▣',
    title: 'Professional Development',
    desc: 'Structured training programmes for teams and individuals seeking real, applicable skills.',
    full: 'Investing in people is the most sustainable investment an organisation can make. Our professional development programmes are designed around real workplace challenges — practical, immediately applicable, and built for lasting impact. We design programmes around your organisation\'s specific needs, not off-the-shelf content.',
    services: ['Skills gap analysis', 'Customised programme design', 'Workshop facilitation', 'Progress tracking', 'Post-training support']
  },
  {
    icon: '◑',
    title: 'AI Integration & Workflow Modernisation',
    desc: 'Helping organisations build genuine AI fluency and redesign workflows for the modern era.',
    full: 'Technology only creates value when people know how to use it. sudeNEXUS has helped schools redesign their management systems and student curriculum frameworks using AI-supported tools, supported NGOs in automating volunteer recruitment, management, and dissemination workflows, and assisted organisations in building AI-driven content and SEO strategies for their digital platforms. We do not just introduce tools — we redesign how your organisation works around them, ensuring adoption is real and sustainable.',
    services: ['AI tools assessment', 'Workflow audit', 'Management system redesign', 'Staff training & change support', 'Dissemination automation', 'Integration roadmap']
  },
  {
    icon: '◐',
    title: 'Leadership & Management',
    desc: 'Building the capacity of leaders to drive organisational change and innovation.',
    full: 'Effective leadership separates good organisations from great ones. Our leadership programmes combine strategic frameworks with practical tools, equipping managers and executives to lead with clarity, confidence, and impact. Designed for professionals working in international and cross-cultural contexts.',
    services: ['Leadership assessment', 'Management skills training', 'Decision-making frameworks', 'Team dynamics', 'Strategic thinking']
  },
  {
    icon: '◈',
    title: 'International Mobility Courses',
    desc: 'Accredited courses delivered across Europe and MENA, eligible for Erasmus+ and mobility funding frameworks.',
    full: 'Our internationally delivered courses offer professionals a unique combination of structured learning and cross-cultural exchange. Designed for participants from diverse backgrounds across all EU member states and associated countries — including MENA partners — each course is a genuine opportunity to grow professionally and personally. All courses are designed to meet Erasmus+ and relevant mobility programme requirements, with full accreditation and reporting support.',
    services: ['Course design', 'Erasmus+ accreditation support', 'Participant coordination', 'Host organisation liaison', 'Mobility funding guidance', 'Post-course reporting']
  },
]

const projectsData: Item[] = [
  {
    title: 'As Applicant',
    desc: 'We identify funding opportunities and lead applications on behalf of our clients and partners.',
    full: 'When the right opportunity meets the right moment, sudeNEXUS steps in as lead applicant — taking responsibility for the full application process and, if successful, for project delivery. Across our 28+ completed and active projects, we have led applications under Erasmus+, CERV, Creative Europe, and country-specific calls. We identify calls that match our partners\' strengths and build applications designed to succeed.',
    services: ['Call identification', 'Full application management', 'Budget construction', 'Partner coordination', 'Submission & follow-up']
  },
  {
    title: 'As Coordinator',
    desc: 'We manage consortium projects end-to-end, from kick-off to final report and dissemination.',
    full: 'Coordinating a multi-partner project is one of the most demanding roles in international project work. sudeNEXUS brings the organisational capacity, communication skills, and attention to detail that consortium coordination demands — from the first kick-off meeting to the final report and dissemination. With partners spanning 26+ countries from Europe to Central Asia, we know what it takes to keep diverse teams aligned and moving forward.',
    services: ['Consortium management', 'Work package oversight', 'Financial coordination', 'Mid-term & final reporting', 'Dissemination']
  },
  {
    title: 'As Partner',
    desc: 'We join consortiums as an active partner, contributing expertise and international reach.',
    full: 'sudeNEXUS joins projects as an active, contributing partner — bringing expertise in training, consultancy, and project management to consortiums that need a reliable, experienced collaborator with international reach. Our network across Europe, MENA, and Central Asia makes us a genuinely valuable addition to any consortium.',
    services: ['Active participation', 'Expertise contribution', 'Deliverable ownership', 'Cross-partner collaboration', 'Knowledge transfer']
  },
]

function Modal({ item, onClose }: { item: Item; onClose: () => void }) {
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(36,54,84,0.75)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'white', borderRadius: '4px', padding: '3rem', maxWidth: '580px', width: '100%', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#888780' }}>✕</button>
        {item.icon && <div style={{ fontSize: '1.8rem', color: '#1d9e75', marginBottom: '1rem' }}>{item.icon}</div>}
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#243654', marginBottom: '1rem', fontFamily: 'Montserrat, sans-serif' }}>{item.title}</h2>
        <p style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.95rem', color: '#888780', lineHeight: 1.9, fontWeight: 300, marginBottom: '2rem' }}>{item.full}</p>
        <div style={{ borderTop: '0.5px solid #e5e3df', paddingTop: '1.5rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5c1a2e', fontWeight: 600, marginBottom: '1rem' }}>What we do</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {item.services.map((s) => <span key={s} style={{ fontSize: '0.78rem', color: '#444441', background: '#f1efe8', padding: '0.35rem 0.85rem', borderRadius: '2px' }}>{s}</span>)}
          </div>
        </div>
        <a href="#contact" onClick={onClose} style={{ display: 'inline-block', marginTop: '2rem', background: '#243654', color: 'white', padding: '0.75rem 2rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>Get in Touch</a>
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
          <div key={card.title} onClick={() => setActive(card)} style={{ background: 'white', border: '0.5px solid #e5e3df', padding: '1.75rem', borderRadius: '4px', cursor: 'pointer', transition: 'border-color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#1d9e75')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e5e3df')}>
            <div style={{ fontSize: '1.4rem', color: '#1d9e75', marginBottom: '0.75rem' }}>{card.icon}</div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#243654', marginBottom: '0.5rem' }}>{card.title}</h3>
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
          <div key={card.title} onClick={() => setActive(card)} style={{ background: '#f1efe8', border: '0.5px solid #e5e3df', padding: '1.75rem', borderRadius: '4px', cursor: 'pointer', transition: 'border-color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#1d9e75')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e5e3df')}>
            <div style={{ fontSize: '1.4rem', color: '#1d9e75', marginBottom: '0.75rem' }}>{card.icon}</div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#243654', marginBottom: '0.5rem' }}>{card.title}</h3>
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
            <p style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
            <span style={{ fontSize: '0.72rem', color: '#1d9e75', fontWeight: 600, marginTop: '1rem', display: 'inline-block' }}>Learn more →</span>
          </div>
        ))}
      </div>
      {active && <Modal item={active} onClose={() => setActive(null)} />}
    </React.Fragment>
  )
}
