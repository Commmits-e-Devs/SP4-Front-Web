'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Marca from './Marca'
import useMenuMobile from '../hooks/useMenuMobile'
import useAuth from '../hooks/useAuth'
import { linksNav } from '../data/conteudo'

const estiloLink = 'text-sm text-suave-escuro transition-colors duration-200 hover:text-white'

export default function Cabecalho() {
  const { aberto, alternar, fechar } = useMenuMobile()
  const { autenticado, usuario, sair } = useAuth()
  const router = useRouter()

  function aoSair() {
    sair()
    fechar()
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-100 border-b border-borda-escura bg-dark-950/90 backdrop-blur-sm">
      <div className="mx-auto grid max-w-caixa grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4">
        <Marca href="/#top" />

        <nav className="hidden md:block" aria-label="Navegação principal">
          <ul className="flex items-center justify-end gap-6">
            {linksNav.map((l) => (
              <li key={l.href}>
                <Link href={`/${l.href}`} className={estiloLink}>
                  {l.texto}
                </Link>
              </li>
            ))}
            {autenticado ? (
              <>
                <li>
                  <Link href="/minhas-fotos" className={estiloLink}>
                    Minhas fotos
                  </Link>
                </li>
                <li>
                  <button
                    onClick={aoSair}
                    className="cursor-pointer rounded-full border border-borda-escura px-4 py-1.5 text-sm text-white transition-colors duration-200 hover:border-ambar"
                  >
                    Sair{usuario ? ` (${usuario.nome.split(' ')[0]})` : ''}
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  href="/login"
                  className="rounded-full bg-azul px-4 py-1.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Entrar
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <button
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          aria-controls="menu-movel"
          onClick={alternar}
          className="cursor-pointer rounded-md border border-borda-escura bg-transparent px-3 py-1.5 text-lg text-white md:hidden"
        >
          {aberto ? '✕' : '☰'}
        </button>
      </div>

      <nav
        id="menu-movel"
        aria-label="Navegação móvel"
        className={`border-t border-borda-escura bg-dark-900 md:hidden ${aberto ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col gap-3 px-6 py-4">
          {linksNav.map((l) => (
            <li key={l.href}>
              <Link href={`/${l.href}`} onClick={fechar} className="text-white">
                {l.texto}
              </Link>
            </li>
          ))}
          {autenticado ? (
            <>
              <li>
                <Link href="/minhas-fotos" onClick={fechar} className="text-white">
                  Minhas fotos
                </Link>
              </li>
              <li>
                <button onClick={aoSair} className="cursor-pointer text-ambar">
                  Sair
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login" onClick={fechar} className="font-semibold text-ambar">
                Entrar
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
