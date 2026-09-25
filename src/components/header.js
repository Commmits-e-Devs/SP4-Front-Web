'use client'

import { useState } from 'react'
import Marca from './Marca'
import { linksNav } from '../data/content'

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="sticky top-0 z-100 border-b border-borda-escura bg-dark-950/90 backdrop-blur-sm">
      <div className="mx-auto grid max-w-caixa grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4">
        <Marca href="#top" />

        <nav className="hidden md:block" aria-label="Navegação principal">
          <ul className="flex justify-end gap-6">
            {linksNav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-suave-escuro transition-colors duration-200 hover:text-white">
                  {l.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          aria-label="Abrir menu"
          onClick={() => setMenuAberto(!menuAberto)}
          className="cursor-pointer rounded-md border border-borda-escura bg-transparent px-3 py-1.5 text-lg text-white md:hidden"
        >
          ☰
        </button>
      </div>

      <nav
        aria-label="Navegação móvel"
        className={`border-t border-borda-escura bg-dark-900 md:hidden ${menuAberto ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col gap-3 px-6 py-4">
          {linksNav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-white">{l.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}