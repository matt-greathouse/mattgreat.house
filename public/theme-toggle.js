(() => {
  const storageKey = 'mattgreat.house-theme'
  const root = document.documentElement
  const toggle = document.querySelector('[data-theme-toggle]')
  const label = document.querySelector('[data-theme-label]')

  if (!toggle || !label) return

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  let isManual = false

  function setTheme(theme) {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    root.dataset.theme = theme
    toggle.setAttribute('aria-pressed', String(theme === 'dark'))
    toggle.setAttribute('aria-label', `${theme[0].toUpperCase()}${theme.slice(1)} mode. Switch to ${nextTheme} mode`)
    label.textContent = theme[0].toUpperCase() + theme.slice(1)
  }

  try {
    const savedTheme = localStorage.getItem(storageKey)
    if (savedTheme === 'light' || savedTheme === 'dark') {
      isManual = true
      setTheme(savedTheme)
    } else {
      setTheme(mediaQuery.matches ? 'dark' : 'light')
    }
  } catch {
    setTheme(mediaQuery.matches ? 'dark' : 'light')
  }

  mediaQuery.addEventListener('change', (event) => {
    if (!isManual) setTheme(event.matches ? 'dark' : 'light')
  })

  toggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark'
    isManual = true
    setTheme(nextTheme)
    try { localStorage.setItem(storageKey, nextTheme) } catch {}
  })
})()
