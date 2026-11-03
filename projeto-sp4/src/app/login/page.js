'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Cabecalho from '../../components/Cabecalho'
import Caixa from '../../components/Caixa'
import Campo from '../../components/Campo'
import Etiqueta from '../../components/Etiqueta'
import useAuth from '../../hooks/useAuth'

export default function Login() {
  const { entrar, autenticado, carregando } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)

  // Quem já está logado não precisa ver a tela de login.
  useEffect(() => {
    if (!carregando && autenticado) router.replace('/minhas-fotos')
  }, [carregando, autenticado, router])

  async function aoEnviar(e) {
    e.preventDefault()
    setEnviando(true)
    setErro('')
    try {
      await entrar(email, senha)
      router.push('/minhas-fotos')
    } catch (err) {
      setErro(err.message)
      setEnviando(false)
    }
  }

  return (
    <>
      <Cabecalho />
      <main className="min-h-[70vh] bg-fundo-claro py-20">
        <Caixa className="max-w-[480px]">
          <Etiqueta>Área do estudante</Etiqueta>
          <h1 className="mt-3 mb-2 font-heading text-[clamp(28px,4vw,40px)] font-semibold">Entrar</h1>
          <p className="mb-8 text-suave">
            Acesse suas fotos organizadas automaticamente pela IA de contexto.
          </p>

          <form
            onSubmit={aoEnviar}
            className="flex flex-col gap-[18px] rounded-cartao border border-borda-clara bg-cartao p-7"
          >
            <Campo
              id="emailLogin"
              name="email"
              label="E-mail"
              tipo="email"
              placeholder="aluno@jovi.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            <Campo
              id="senhaLogin"
              name="senha"
              label="Senha"
              tipo="password"
              placeholder="Sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="current-password"
              required
            />

            {erro && (
              <p role="alert" className="text-sm text-red-600">
                {erro}
              </p>
            )}

            <button
              type="submit"
              disabled={enviando}
              className="cursor-pointer self-start rounded-full border-0 bg-azul px-6 py-3 font-heading text-[15px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {enviando ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <p className="mt-6 rounded-campo border border-borda-clara bg-icone p-4 text-[13px] text-suave">
            <strong className="text-texto">Usuário de teste:</strong> aluno@jovi.com · senha jovi1234
          </p>
        </Caixa>
      </main>
    </>
  )
}
