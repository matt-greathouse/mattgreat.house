import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const githubUrl = 'https://github.com/matt-greathouse'
const linkedInUrl = 'https://www.linkedin.com/in/matt-greathouse-977aa6110/'

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 16 16">
      <path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  )
}

function ExternalLink({ href, children }: { href: string; children: string }) {
  return <a href={href} target="_blank" rel="noreferrer">{children} <ArrowUpRight /></a>
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="section-heading">
      <p>{number}</p>
      <h2>{title}</h2>
    </div>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Matt Greathouse, back to top">mattgreat.house</a>
        <nav aria-label="Primary navigation">
          <a href="#overview">Overview</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#background">Background</a>
          <a href="#contact">Contact</a>
        </nav>
        <ExternalLink href={githubUrl}>GitHub</ExternalLink>
      </header>

      <main id="content">
        <section className="hero page-shell" id="top" aria-labelledby="hero-title">
          <p className="kicker">Matt Greathouse · Senior software engineer</p>
          <h1 id="hero-title">Founding senior engineer building AI-enabled products that ship and last.</h1>
          <p className="hero-copy">I help teams turn complex product ideas into reliable software—from AI agent workflows and customer-facing features to the systems that keep them running.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">View experience <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href={linkedInUrl} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight /></a>
          </div>
        </section>

        <section className="page-shell section" id="overview" aria-labelledby="overview-title">
          <SectionHeading number="01" title="Professional overview" />
          <div className="section-content">
            <p className="section-lede" id="overview-title">A product-minded engineer who can own the work from an early concept through a dependable release.</p>
            <p className="section-copy">At Gobii, I&apos;ve helped take an AI agent platform from its early stage to paying customers. I work best where thoughtful engineering, clear communication, and a practical bias toward shipping all matter.</p>
            <ul className="strength-list" aria-label="Core strengths">
              <li><strong>Full-stack delivery</strong><span>Turn product direction into well-built, customer-facing software.</span></li>
              <li><strong>AI agent systems</strong><span>Build and evaluate LLM-powered workflows that behave reliably in production.</span></li>
              <li><strong>Technical leadership</strong><span>Shape architecture, guide execution, and make complex work easier for teams to deliver.</span></li>
            </ul>
          </div>
        </section>

        <section className="page-shell section" id="experience" aria-labelledby="experience-title">
          <SectionHeading number="02" title="Experience" />
          <div className="section-content">
            <p className="section-intro" id="experience-title">Roles where I&apos;ve combined product ownership with hands-on engineering.</p>
            <div className="experience-list">
              <article className="experience-card">
                <div className="experience-meta"><p>2025 — Present</p><p>Gobii</p></div>
                <div className="experience-details">
                  <h3>Senior Software Engineer <span>(Founding Engineer)</span></h3>
                  <p>Building and operating a production AI agent platform that helps streamline complex work.</p>
                  <ul>
                    <li>Shipped LLM orchestration, tool-calling, MCP, and browser-automation capabilities from early product stages through use by paying customers.</li>
                    <li>Owned work across the stack: Kubernetes on GCP, Postgres and Neon, agent memory, Stripe billing, and observability.</li>
                    <li>Maintained an evaluation suite to keep outputs more consistent across non-deterministic workflows.</li>
                  </ul>
                </div>
              </article>
              <article className="experience-card">
                <div className="experience-meta"><p>2018 — 2025</p><p>Yakabod <span>/ now Everfox</span></p></div>
                <div className="experience-details">
                  <h3>Senior Software Engineer</h3>
                  <p>Led technical work across multiple projects, pairing system design with hands-on implementation.</p>
                  <ul>
                    <li>Designed system architecture, documented plans, and coordinated development work as a technical lead.</li>
                    <li>Delivered enterprise single sign-on with SAML and OIDC support through Keycloak.</li>
                    <li>Modernized a JavaScript and React stack to TypeScript and built an extensible dashboard framework.</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="page-shell section" id="skills" aria-labelledby="skills-title">
          <SectionHeading number="03" title="Skills and tools" />
          <div className="section-content">
            <p className="section-intro" id="skills-title">A focused toolkit for building, shipping, and supporting modern software products.</p>
            <div className="skill-groups">
              <section><h3>Build</h3><p>Python · TypeScript · React · Node.js · PHP · MySQL · HTML · CSS</p></section>
              <section><h3>Ship and operate</h3><p>Docker · Kubernetes · GCP · Firebase · Git · GitHub · GitLab</p></section>
              <section><h3>AI and identity</h3><p>Codex · Claude Code · LLM orchestration · MCP · OAuth · SAML · Keycloak</p></section>
            </div>
          </div>
        </section>

        <section className="page-shell section background-section" id="background" aria-labelledby="background-title">
          <SectionHeading number="04" title="Background" />
          <div className="section-content background-content">
            <p className="section-lede" id="background-title">A strong technical foundation, with years of practical web work alongside it.</p>
            <div className="background-details">
              <div><h3>Education</h3><p>Bachelor&apos;s degree in Computer Information Systems, Grove City College.</p></div>
              <div><h3>Additional experience</h3><p>Freelance web developer and technical support since 2014, building and maintaining websites for clients.</p></div>
            </div>
          </div>
        </section>

        <section className="contact-section page-shell" id="contact" aria-labelledby="contact-title">
          <p className="kicker">Contact</p>
          <h2 id="contact-title">Looking for a senior engineer who can help move a product forward?</h2>
          <p>Let&apos;s connect on LinkedIn.</p>
          <a className="button button-light" href={linkedInUrl} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight /></a>
        </section>
      </main>

      <footer className="page-shell">
        <p>© {new Date().getFullYear()} Matt Greathouse</p>
        <div><ExternalLink href={githubUrl}>GitHub</ExternalLink><ExternalLink href={linkedInUrl}>LinkedIn</ExternalLink></div>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>,
)
