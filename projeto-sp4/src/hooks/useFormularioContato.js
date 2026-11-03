'use client'

import { useState } from 'react'

const INICIAL = { nome: '', email: '', assunto: '', mensagem: '' }

export default function useFormularioContato() {
  const [valores, setValores] = useState(INICIAL)
  const [status, setStatus] = useState('ocioso')
  const [erro, setErro] = useState('')

  function aoMudar(e) {
    const { name, value } = e.target
    setValores((atual) => ({ ...atual, [name]: value }))
    if (status !== 'ocioso' && status !== 'enviando') setStatus('ocioso')
  }

  async function aoEnviar(e) {
    e.preventDefault()
    setStatus('enviando')
    setErro('')

    try {
      const res = await fetch('/api/mensagens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valores),
      })
      const dados = await res.json()
      if (!res.ok) throw new Error(dados.erro || 'Não foi possível enviar a mensagem.')

      setValores(INICIAL)
      setStatus('sucesso')
    } catch (err) {
      setErro(err.message)
      setStatus('erro')
    }
  }

  return { valores, status, erro, aoMudar, aoEnviar }
}
