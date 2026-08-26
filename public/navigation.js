(() => {
  const menus = [...document.querySelectorAll('[data-apps-menu]')]

  document.addEventListener('click', (event) => {
    for (const menu of menus) {
      if (menu.open && !menu.contains(event.target)) menu.open = false
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return
    for (const menu of menus) {
      if (menu.open) {
        menu.open = false
        menu.querySelector('summary')?.focus()
      }
    }
  })
})()
