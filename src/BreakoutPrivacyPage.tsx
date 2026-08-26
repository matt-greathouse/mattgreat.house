import { SiteFooter, SiteHeader } from './SiteHeader'

export default function BreakoutPrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="content" className="privacy-page page-shell">
        <header className="privacy-hero">
          <p className="kicker">Breakout Helper</p>
          <h1>Privacy policy</h1>
          <p>Last updated: August 26, 2026</p>
        </header>

        <article className="privacy-content">
          <section>
            <h2>Our approach</h2>
            <p>Breakout Helper is designed to help you create classroom groups without collecting your information. The app does not require an account, and it does not send your data to us or to third parties.</p>
          </section>
          <section>
            <h2>Data stored on your device</h2>
            <p>To make the app useful, Breakout Helper stores the information you enter directly on your device. This can include class names, student and guest names, whether a participant is active, minimum group-size settings, selected classes, generated groups, and pairing history.</p>
            <p>Students remain available for future sessions. Guests, generated groups, and pairing history are cleared daily. Each class keeps its own people, group-size setting, and pairing history.</p>
          </section>
          <section>
            <h2>What we do not collect</h2>
            <p>Breakout Helper does not collect, transmit, sell, rent, or share the data you enter. It has no user accounts, cloud sync, analytics, advertising, tracking, or third-party data-sharing services. The app does not use your data to identify you or your students.</p>
          </section>
          <section>
            <h2>Your choices and deletion</h2>
            <p>You control the data in the app. You can remove individual students or guests in Settings, and you can delete a class and its people and history from the class manager. Deleting the app removes its locally stored app data from your device.</p>
          </section>
          <section>
            <h2>Children&apos;s privacy</h2>
            <p>Because Breakout Helper does not collect or transmit the names or other data entered into the app, we do not knowingly collect personal information from children.</p>
          </section>
          <section>
            <h2>Changes to this policy</h2>
            <p>If Breakout Helper&apos;s data practices change, this policy will be updated before those changes take effect.</p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>For privacy questions about Breakout Helper, email <a href="mailto:matt@mattgreat.house">matt@mattgreat.house</a>.</p>
          </section>
        </article>

        <a className="privacy-back-link" href="/apps/breakout-helper/">← Back to Breakout Helper</a>
      </main>
      <SiteFooter />
    </>
  )
}
