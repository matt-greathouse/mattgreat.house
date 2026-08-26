import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App'
import BreakoutHelperPage from '../src/BreakoutHelperPage'
import BreakoutPrivacyPage from '../src/BreakoutPrivacyPage'

const rootPlaceholder = '<div id="root"></div>'
const pages = [
  { path: '../dist/index.html', component: App },
  { path: '../dist/apps/breakout-helper/index.html', component: BreakoutHelperPage },
  { path: '../dist/apps/breakout-helper/privacy/index.html', component: BreakoutPrivacyPage },
]

for (const page of pages) {
  const pagePath = fileURLToPath(new URL(page.path, import.meta.url))
  const html = await readFile(pagePath, 'utf8')
  const placeholderCount = html.split(rootPlaceholder).length - 1

  if (placeholderCount !== 1) {
    throw new Error(`Expected exactly one empty #root placeholder in ${pagePath}; found ${placeholderCount}.`)
  }

  const renderedPage = renderToString(createElement(page.component))
  await writeFile(pagePath, html.replace(rootPlaceholder, `<div id="root">${renderedPage}</div>`))
}
