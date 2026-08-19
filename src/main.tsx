import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const githubUrl = 'https://github.com/matt-greathouse'
const linkedInUrl = 'https://www.linkedin.com/in/matt-greathouse-977aa6110/'
const themeStorageKey = 'mattgreat.house-theme'

type Theme = 'light' | 'dark'

function getInitialTheme(): { theme: Theme; isManual: boolean } {
  const savedTheme = window.localStorage.getItem(themeStorageKey)

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return { theme: savedTheme, isManual: true }
  }

  return { theme: 'light', isManual: false }
}

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 16 16">
      <path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  )
}

function ThemeIcon({ theme }: { theme: Theme }) {
  return theme === 'dark' ? (
    <svg aria-hidden="true" className="theme-icon" viewBox="0 0 16 16">
      <path d="M12.8 10.3A5.4 5.4 0 0 1 5.7 3.2 5.4 5.4 0 1 0 12.8 10.3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45" />
    </svg>
  ) : (
    <svg aria-hidden="true" className="theme-icon" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.45" />
      <path d="M8 1.5v1.4M8 13.1v1.4M1.5 8h1.4M13.1 8h1.4M3.4 3.4l1 1M11.6 11.6l1 1M12.6 3.4l-1 1M4.4 11.6l-1 1" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.45" />
    </svg>
  )
}

function ExternalLink({ href, children, className }: { href: string; children: string; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children} <ArrowUpRight /></a>
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
  const [themePreference, setThemePreference] = useState(getInitialTheme)
  const theme = themePreference.theme
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    if (themePreference.isManual) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const syncWithSystemTheme = (event: MediaQueryListEvent) => {
      setThemePreference({ theme: event.matches ? 'dark' : 'light', isManual: false })
    }

    mediaQuery.addEventListener('change', syncWithSystemTheme)
    return () => mediaQuery.removeEventListener('change', syncWithSystemTheme)
  }, [themePreference.isManual])

  function toggleTheme() {
    setThemePreference({ theme: nextTheme, isManual: true })
    window.localStorage.setItem(themeStorageKey, nextTheme)
  }

  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="site-header">
        <div className="header-topline">
          <a className="wordmark" href="#top" aria-label="Matt Greathouse, back to top">mattgreat.house</a>
          <div className="header-actions">
            <ExternalLink href={githubUrl}>GitHub</ExternalLink>
            <a href="/resume/">Résumé</a>
            <a href="/plain.html">Plain version</a>
            <button className="theme-toggle" type="button" aria-label={`Switch to ${nextTheme} mode`} aria-pressed={theme === 'dark'} onClick={toggleTheme}>
              <ThemeIcon theme={theme} />
              <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
            </button>
          </div>
        </div>
        <details className="mobile-menu">
          <summary>
            <span className="menu-label">Menu</span>
            <span className="close-label">Close</span>
            <span className="menu-icon" aria-hidden="true"><span /></span>
          </summary>
          <div className="mobile-menu-panel">
            <nav aria-label="Mobile navigation">
              <a href="#overview">Overview</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#background">Background</a>
              <a href="/resume/">Résumé</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="mobile-menu-links">
              <ExternalLink href={githubUrl}>GitHub</ExternalLink>
              <a href="/resume/">Résumé</a>
              <a href="/plain.html">Plain version</a>
            </div>
          </div>
        </details>
        <nav className="desktop-navigation" aria-label="Primary navigation">
          <a href="#overview">Overview</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#background">Background</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="content">
        <section className="hero page-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-identity">
            <img className="hero-headshot" src="/matt-greathouse-headshot.jpg" width="72" height="72" alt="Matt Greathouse" />
            <p className="kicker">Matt Greathouse · Senior software engineer</p>
          </div>
          <h1 id="hero-title">Senior engineer building AI-enabled products that ship and last.</h1>
          <p className="hero-copy">I build and operate AI agent platforms and full-stack products from early-stage ideas through paying customers, with hands-on ownership of the systems that keep them reliable.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">View experience <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="/matt-greathouse-resume.pdf" download>Download résumé (PDF) <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href={linkedInUrl} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight /></a>
          </div>
        </section>

        <section className="page-shell section" id="overview" aria-labelledby="overview-title">
          <SectionHeading number="01" title="Professional overview" />
          <div className="section-content">
            <p className="section-lede" id="overview-title">A product-minded engineer who can own the work from an early concept through a dependable release.</p>
            <p className="section-copy">At Gobii, I&apos;ve helped take an AI agent platform from early-stage to paying customers. As the second hire and founding engineer, I work across product development, reliability, customer support, and the systems behind the product.</p>
            <ul className="strength-list" aria-label="Core strengths">
              <li><strong>Full-stack delivery</strong><span>Own product features, infrastructure, billing, observability, and operational reliability.</span></li>
              <li><strong>AI agent systems</strong><span>Ship LLM orchestration, tool calling, MCP, browser automation, and evaluation workflows.</span></li>
              <li><strong>Technical leadership</strong><span>Design systems, guide execution, document plans, and help teams adopt practical AI tooling.</span></li>
            </ul>
          </div>
        </section>

        <section className="page-shell section" id="experience" aria-labelledby="experience-title">
          <SectionHeading number="02" title="Experience" />
          <div className="section-content">
            <p className="section-intro" id="experience-title">Roles where I&apos;ve combined product ownership, technical leadership, and hands-on engineering.</p>
            <div className="experience-list">
              <article className="experience-card">
                <div className="experience-meta"><p>August 2025 — Present</p><p>Gobii</p></div>
                <div className="experience-details">
                  <h3>Senior Software Engineer <span>(Founding Engineer)</span></h3>
                  <p>Building and operating a production AI agent platform that streamlines complex work for paying customers.</p>
                  <ul>
                    <li>Developed and shipped LLM orchestration, tool calling, MCP, and browser automation capabilities, taking the platform from early-stage to production with paying customers in 12 months.</li>
                    <li>Operated the full stack: Kubernetes on GCP, Postgres and Neon, SQLite for agent memory, Stripe billing, and OpenTelemetry observability.</li>
                    <li>Worked across every layer of the stack while running customer support, incidents, and reliability as the second hire and founding engineer.</li>
                    <li>Shipped features at high velocity using AI-assisted development paired with rigorous human review.</li>
                    <li>Maintained an evaluation suite to keep agent outputs consistent across non-deterministic workflows.</li>
                  </ul>
                </div>
              </article>
              <article className="experience-card">
                <div className="experience-meta"><p>2018 — 2025</p><p>Yakabod <span>/ now Everfox</span></p></div>
                <div className="experience-details">
                  <h3>Senior Software Engineer</h3>
                  <p>Led technical work across multiple projects, pairing system design, team execution, and hands-on implementation.</p>
                  <ul>
                    <li>Designed system architecture, delegated tasks, wrote documentation, and executed technical plans ahead of schedule.</li>
                    <li>Implemented enterprise single sign-on with SAML and OIDC support through Keycloak.</li>
                    <li>Migrated a legacy JavaScript and React stack to TypeScript, including a new build process for development and production applications.</li>
                    <li>Developed a large-scale React and TypeScript dashboard framework with reusable component properties and customizable layout.</li>
                    <li>Led adoption of AI-assisted tooling across the development team.</li>
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
              <section><h3>Build</h3><p>Python · TypeScript · React · Node.js · Java · PHP · SQLite · MySQL · HTML · CSS · SCSS</p></section>
              <section><h3>Ship and operate</h3><p>Docker · Kubernetes · GCP · Azure · Firebase · Postgres · Neon · Stripe · OpenTelemetry · Git</p></section>
              <section><h3>AI and identity</h3><p>Codex · Claude Code · LLM orchestration · MCP · API development · OAuth · SAML · OIDC · Keycloak</p></section>
            </div>
          </div>
        </section>

        <section className="page-shell section background-section" id="background" aria-labelledby="background-title">
          <SectionHeading number="04" title="Background" />
          <div className="section-content background-content">
            <p className="section-lede" id="background-title">A strong technical foundation, with years of practical web work alongside it.</p>
            <div className="background-details">
              <div><h3>Education</h3><p>Bachelor&apos;s degree in Computer Information Systems, Grove City College, 2018.</p></div>
              <div><h3>Additional experience</h3><p>Freelance web developer and technical support since 2014, plus internships at Highgear and Global Data Consultants.</p></div>
            </div>
          </div>
        </section>

        <section className="page-shell section recommendations-section" aria-label="Colleagues I recommend">
          <SectionHeading number="05" title="Colleagues I recommend" />
          <div className="section-content">
            <div className="recommendation-card">
              <div>
                <h3>Will Bonde</h3>
                <p>Engineer / builder</p>
              </div>
              <ExternalLink className="recommendation-link" href="https://willbonde.com/">Visit willbonde.com</ExternalLink>
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
