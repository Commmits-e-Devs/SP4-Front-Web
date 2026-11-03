import { NextResponse } from 'next/server'
import { mensagens } from '../../../lib/dados'

export async function POST(request) {
  let corpo
  try {
    corpo = await request.json()
  } catch {
    return NextResponse.json({ erro: 'Requisição inválida.' }, { status: 400 })
  }

  const nome = String(corpo?.nome ?? '').trim()
  const email = String(corpo?.email ?? '').trim()
  const assunto = String(corpo?.assunto ?? '').trim()
  const mensagem = String(corpo?.mensagem ?? '').trim()

  if (!nome || !email || !mensagem) {
    return NextResponse.json({ erro: 'Preencha nome, e-mail e mensagem.' }, { status: 400 })
  }

  const nova = { id: mensagens.length + 1, nome, email, assunto, mensagem, criadaEm: new Date().toISOString() }
  mensagens.push(nova)

  return NextResponse.json({ id: nova.id }, { status: 201 })
}
