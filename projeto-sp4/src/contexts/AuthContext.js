'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const CHAVE = 'jovi:usuario'
const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    try {
      const salvo = localStorage.getItem(CHAVE)
      if (salvo) setUsuario(JSON.parse(salvo))
    } catch {
      // localStorage indisponível ou JSON corrompido: segue sem sessão.
    }
    setCarregando(false)
  }, [])

  const entrar = useCallback(async (email, senha) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    })
    const dados = await res.json()
    if (!res.ok) throw new Error(dados.erro || 'Não foi possível entrar.')

    setUsuario(dados)
    try {
      localStorage.setItem(CHAVE, JSON.stringify(dados))
    } catch {}
    return dados
  }, [])

  const sair = useCallback(() => {
    setUsuario(null)
    try {
      localStorage.removeItem(CHAVE)
    } catch {}
  }, [])

  const valor = useMemo(
    () => ({ usuario, carregando, entrar, sair }),
    [usuario, carregando, entrar, sair]
  )

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuthContext deve ser usado dentro de <AuthProvider>.')
  return ctx
}
