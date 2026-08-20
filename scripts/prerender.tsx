import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App'

const indexPath = fileURLToPath(new URL('../dist/index.html', import.meta.url))
const indexHtml = await readFile(indexPath, 'utf8')
const rootPlaceholder = '<div id="root"></div>'
const placeholderCount = indexHtml.split(rootPlaceholder).length - 1

if (placeholderCount !== 1) {
  throw new Error(`Expected exactly one empty #root placeholder in ${indexPath}; found ${placeholderCount}.`)
}

const renderedApp = renderToString(createElement(App))
const prerenderedHtml = indexHtml.replace(rootPlaceholder, `<div id="root">${renderedApp}</div>`)

await writeFile(indexPath, prerenderedHtml)
