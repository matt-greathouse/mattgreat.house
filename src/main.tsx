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
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children} <ArrowUpRight />
    </a>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Matt Greathouse, back to top">mattgreat.house</a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-links" aria-label="Social links">
          <ExternalLink href={githubUrl}>GitHub</ExternalLink>
          <ExternalLink href={linkedInUrl}>LinkedIn</ExternalLink>
        </div>
      </header>

      <main id="content">
        <section className="hero section-shell" id="top" aria-labelledby="hero-title">
          <p className="eyebrow">Senior software engineer · Building useful things</p>
          <h1 id="hero-title">I turn ambitious software into products people can use.</h1>
          <p className="hero-copy">I&apos;m Matt Greathouse, a founding senior engineer who works across the full stack—from product ideas and AI agents to reliable systems in production.</p>
          <a className="button" href="#experience">See my work <span aria-hidden="true">↓</span></a>
        </section>

        <section className="section-shell section-grid" id="about" aria-labelledby="about-title">
          <div className="section-label"><p>01</p><h2 id="about-title">About</h2></div>
          <div className="section-content intro-copy">
            <p className="large-copy">I enjoy taking complex problems from a rough idea to something clear, capable, and dependable.</p>
            <p>Most recently, I&apos;ve helped take an AI agent platform from its earliest stage to paying customers. I&apos;m comfortable owning a problem end to end, and I value the close collaboration it takes to make good software.</p>
          </div>
        </section>

        <section className="section-shell section-grid" id="experience" aria-labelledby="experience-title">
          <div className="section-label"><p>02</p><h2 id="experience-title">Selected experience</h2></div>
          <div className="section-content experience-list">
            <article className="experience-card">
              <div className="experience-meta"><p>2025 — Present</p><p>Gobii</p></div>
              <div>
                <h3>Senior Software Engineer <span>(Founding Engineer)</span></h3>
                <p>Building a production AI system that uses LLM orchestration, tool calling, MCP, and browser automation to streamline complex work.</p>
                <ul>
                  <li>Worked across product, customer support, incidents, and reliability as the company&apos;s second hire.</li>
                  <li>Operated the platform across Kubernetes, GCP, Postgres, agent memory, billing, and observability.</li>
                  <li>Built an evaluation suite to make non-deterministic agent workflows more consistent.</li>
                </ul>
              </div>
            </article>
            <article className="experience-card">
              <div className="experience-meta"><p>2018 — 2025</p><p>Yakabod <span>/ now Everfox</span></p></div>
              <div>
                <h3>Senior Software Engineer</h3>
                <p>Technical lead across multiple projects, pairing system architecture with hands-on execution and clear technical direction.</p>
                <ul>
                  <li>Delivered enterprise single sign-on with SAML and OIDC via Keycloak.</li>
                  <li>Modernized a legacy JavaScript and React stack to TypeScript with a new build process.</li>
                  <li>Developed an extensible React dashboard framework with customizable layouts and reusable component properties.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="section-shell section-grid" aria-labelledby="toolkit-title">
          <div className="section-label"><p>03</p><h2 id="toolkit-title">Toolkit</h2></div>
          <div className="section-content toolkit-grid">
            <div><h3>Build</h3><p>Python · TypeScript · React · Node.js · PHP · MySQL · HTML &amp; CSS</p></div>
            <div><h3>Ship &amp; operate</h3><p>Docker · Kubernetes · GCP · Firebase · Git · GitHub · GitLab</p></div>
            <div><h3>AI &amp; systems</h3><p>Codex · Claude Code · LLM orchestration · MCP · OAuth · SAML · Keycloak</p></div>
          </div>
        </section>

        <section className="section-shell section-grid background-section" aria-labelledby="background-title">
          <div className="section-label"><p>04</p><h2 id="background-title">A little more</h2></div>
          <div className="section-content background-copy"><p>I earned a degree in Computer Information Systems from Grove City College. I&apos;ve also built and maintained websites as a freelance developer since 2014, and enjoy serving in group leadership and childcare at church.</p></div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Get in touch</p>
          <h2 id="contact-title">Have something interesting in mind?</h2>
          <p>I&apos;m always glad to connect with thoughtful people doing meaningful work.</p>
          <a className="contact-link" href={linkedInUrl} target="_blank" rel="noreferrer">Message me on LinkedIn <ArrowUpRight /></a>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Matt Greathouse</p>
        <div><ExternalLink href={githubUrl}>GitHub</ExternalLink><ExternalLink href={linkedInUrl}>LinkedIn</ExternalLink></div>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>,
)
