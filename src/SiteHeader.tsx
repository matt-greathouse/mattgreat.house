const githubUrl = 'https://github.com/matt-greathouse'

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" className="arrow-icon" viewBox="0 0 16 16">
      <path d="M3 13 13 3M6 3h7v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  )
}

function ThemeIcon({ theme }: { theme: 'light' | 'dark' }) {
  return theme === 'dark' ? (
    <svg aria-hidden="true" className="theme-icon" viewBox="0 0 16 16">
      <path d="M12.8 10.3A5.4 5.4 0 0 1 5.7 3.2 5.4 5.4 0 1 0 12.8 10.3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45" />
    </svg>
  ) : (
    <svg aria-hidden="true" className="theme-icon" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.45" />
      <path d="M8 1.5v1.4M8 13.1v1.4M1.5 8h1.4M13.1 8h1.4M3.4 3.4l1 1M11.6 11.6l1 1M12.6 3.4l-1 1M4.4 11.6l-1 1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45" />
    </svg>
  )
}

export function ExternalLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children} <ArrowUpRight /></a>
}

function AppsMenu() {
  return (
    <details className="apps-menu" data-apps-menu>
      <summary>Apps <span className="apps-menu-chevron" aria-hidden="true"><svg viewBox="0 0 12 8"><path d="m1 1 5 5 5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" /></svg></span></summary>
      <div className="apps-menu-panel">
        <a href="/apps/breakout-helper/">
          <img src="/apps/breakout-helper/app-icon.png" width="32" height="32" alt="" />
          <span>Breakout Helper</span>
        </a>
      </div>
    </details>
  )
}

function MobileAppsMenu() {
  return (
    <details className="mobile-apps-menu">
      <summary>Apps <span aria-hidden="true">⌄</span></summary>
      <a href="/apps/breakout-helper/">Breakout Helper</a>
    </details>
  )
}

export function SiteHeader({ home = false }: { home?: boolean }) {
  const root = home ? '' : '/'

  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="site-header">
        <div className="header-topline">
          <a className="wordmark" href={home ? '#top' : '/'} aria-label="mattgreat.house — Matt Greathouse, back to top">mattgreat.house</a>
          <div className="header-actions">
            <ExternalLink href={githubUrl}>GitHub</ExternalLink>
            <a href="/resume/">Résumé</a>
            <a href="/plain.html">Plain version</a>
            <button className="theme-toggle" type="button" data-theme-toggle aria-label="Light mode. Switch to dark mode" aria-pressed="false">
              <span className="theme-icon-variant theme-icon-light"><ThemeIcon theme="light" /></span>
              <span className="theme-icon-variant theme-icon-dark"><ThemeIcon theme="dark" /></span>
              <span data-theme-label>Light</span>
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
              <a href={`${root}#overview`}>Overview</a>
              <a href={`${root}#experience`}>Experience</a>
              <a href={`${root}#skills`}>Skills</a>
              <a href={`${root}#background`}>Background</a>
              <a href="/resume/">Résumé</a>
              <a href={`${root}#contact`}>Contact</a>
              <MobileAppsMenu />
            </nav>
            <div className="mobile-menu-links">
              <ExternalLink href={githubUrl}>GitHub</ExternalLink>
              <a href="/resume/">Résumé</a>
              <a href="/plain.html">Plain version</a>
            </div>
          </div>
        </details>
        <nav className="desktop-navigation" aria-label="Primary navigation">
          <a href={`${root}#overview`}>Overview</a>
          <a href={`${root}#experience`}>Experience</a>
          <a href={`${root}#skills`}>Skills</a>
          <a href={`${root}#background`}>Background</a>
          <a href={`${root}#contact`}>Contact</a>
          <AppsMenu />
        </nav>
      </header>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="page-shell">
      <p>© {new Date().getFullYear()} Matt Greathouse</p>
      <div><ExternalLink href={githubUrl}>GitHub</ExternalLink><ExternalLink href="https://www.linkedin.com/in/matt-greathouse-977aa6110/">LinkedIn</ExternalLink></div>
    </footer>
  )
}
