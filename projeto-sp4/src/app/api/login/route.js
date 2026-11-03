import { NextResponse } from 'next/server'
import { usuarios } from '../../../lib/dados'

export async function POST(request) {
  let corpo
  try {
    corpo = await request.json()
  } catch {
    return NextResponse.json({ erro: 'Requisição inválida.' }, { status: 400 })
  }

  const email = String(corpo?.email ?? '').trim().toLowerCase()
  const senha = String(corpo?.senha ?? '')

  const usuario = usuarios.find((u) => u.email === email && u.senha === senha)
  if (!usuario) {
    return NextResponse.json({ erro: 'E-mail ou senha inválidos.' }, { status: 401 })
  }

  // Nunca devolve a senha.
  return NextResponse.json({ id: usuario.id, nome: usuario.nome, email: usuario.email })
}
