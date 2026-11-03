'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useAuth from '../hooks/useAuth'

// Protege uma página: sem login, redireciona para /login.
export default function RotaPrivada({ children }) {
  const { autenticado, carregando } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!carregando && !autenticado) router.replace('/login')
  }, [carregando, autenticado, router])

  if (carregando || !autenticado) {
    return (
      <p role="status" className="px-6 py-20 text-center text-suave">
        Verificando acesso...
      </p>
    )
  }

  return children
}
