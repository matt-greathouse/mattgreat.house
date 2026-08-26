import { SiteFooter, SiteHeader } from './SiteHeader'

const screenshots = [
  {
    src: '/apps/breakout-helper/screenshot-groups.png',
    alt: 'Breakout Helper showing three generated student groups.',
    title: 'Make a fresh mix',
    copy: 'Create new groups in one tap and keep the room moving.',
  },
  {
    src: '/apps/breakout-helper/screenshot-settings.png',
    alt: 'Breakout Helper settings listing students and guests with controls to include or exclude each person.',
    title: 'Keep your roster ready',
    copy: 'Students stay ready for every session, while guests clear daily.',
  },
  {
    src: '/apps/breakout-helper/screenshot-classes.png',
    alt: 'Breakout Helper class picker with N2N, Calculus 201, History 101, and Programming 102.',
    title: 'Switch between classes',
    copy: 'Each class keeps its own people, group size, and pairing history.',
  },
]

export default function BreakoutHelperPage() {
  return (
    <>
      <SiteHeader />
      <main id="content" className="breakout-page">
        <section className="breakout-hero page-shell" aria-labelledby="breakout-title">
          <div className="app-identity">
            <img className="app-icon" src="/apps/breakout-helper/app-icon.png" width="144" height="144" alt="Breakout Helper app icon" fetchPriority="high" />
            <div>
              <p className="kicker">Breakout Helper</p>
              <p className="app-platform">For iPhone and iPad</p>
            </div>
          </div>
          <p className="coming-soon">Coming soon</p>
          <h1 id="breakout-title">Thoughtful groups, in a tap.</h1>
          <p className="breakout-hero-copy">Breakout Helper makes it simple to build classroom groups that feel fresh—so you can spend less time organizing and more time teaching.</p>
        </section>

        <section className="breakout-intro page-shell" aria-labelledby="breakout-intro-title">
          <div>
            <p className="kicker">Built for the room</p>
            <h2 id="breakout-intro-title">A calmer way to form groups.</h2>
          </div>
          <p>Manage students and drop-in guests, choose a minimum group size, and make a new set of groups whenever you need one. Breakout Helper remembers past pairings to help create a more varied mix over time.</p>
        </section>

        <section className="breakout-features page-shell" aria-label="Breakout Helper features">
          <article>
            <span>01</span>
            <h2>Ready when class starts</h2>
            <p>Keep students saved for every session, then add guests only when they are in the room.</p>
          </article>
          <article>
            <span>02</span>
            <h2>Set the group size</h2>
            <p>Choose the smallest group that fits the activity and adjust it whenever plans change.</p>
          </article>
          <article>
            <span>03</span>
            <h2>Give everyone a new mix</h2>
            <p>Create fresh groups while considering the people who have already worked together.</p>
          </article>
        </section>

        <section className="breakout-screens page-shell" aria-labelledby="screens-title">
          <div className="breakout-section-heading">
            <p className="kicker">A closer look</p>
            <h2 id="screens-title">Everything you need, kept simple.</h2>
          </div>
          <div className="screenshot-grid">
            {screenshots.map((screenshot, index) => (
              <figure key={screenshot.src} className={`screenshot-card screenshot-card-${index + 1}`}>
                <div className="screenshot-frame">
                  <img src={screenshot.src} alt={screenshot.alt} width="1206" height="2622" loading={index === 0 ? 'eager' : 'lazy'} />
                </div>
                <figcaption><strong>{screenshot.title}</strong><span>{screenshot.copy}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="breakout-privacy-callout page-shell" aria-labelledby="privacy-callout-title">
          <p className="kicker">Privacy by design</p>
          <h2 id="privacy-callout-title">Your classroom data stays on your device.</h2>
          <p>Breakout Helper has no accounts, analytics, ads, or cloud sync. Your class data stays local to the device you use.</p>
          <a href="/apps/breakout-helper/privacy/">Read the full privacy policy <span aria-hidden="true">→</span></a>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
