import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import BreakoutHelperPage from './BreakoutHelperPage'
import BreakoutPrivacyPage from './BreakoutPrivacyPage'

const pathname = window.location.pathname
const Page = pathname === '/apps/breakout-helper/privacy/'
  ? BreakoutPrivacyPage
  : pathname === '/apps/breakout-helper/'
    ? BreakoutHelperPage
    : App

const root = document.getElementById('root')

if (!root) throw new Error('Missing #root element.')

const page = <Page />

if (root.hasChildNodes()) {
  hydrateRoot(root, page)
} else {
  createRoot(root).render(page)
}
