'use client'

import { useAuthContext } from '../contexts/AuthContext'

export default function useAuth() {
  const { usuario, carregando, entrar, sair } = useAuthContext()
  return { usuario, carregando, entrar, sair, autenticado: Boolean(usuario) }
}
