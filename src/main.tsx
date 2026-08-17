import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-stone-950 px-6 text-stone-50">
      <section className="max-w-2xl">
        <p className="mb-5 font-mono text-sm tracking-[0.24em] text-lime-300 uppercase">
          mattgreat.house
        </p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Hello, world.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-stone-300">
          A small corner of the internet, built with React, TypeScript, Vite, and Tailwind CSS.
        </p>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
