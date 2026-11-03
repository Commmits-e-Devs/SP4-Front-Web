import { NextResponse } from 'next/server'
import { fotos } from '../../../lib/dados'

const CATEGORIAS = ['texto', 'pessoa', 'paisagem']

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const categoria = searchParams.get('categoria')

  if (categoria && !CATEGORIAS.includes(categoria)) {
    return NextResponse.json({ erro: 'Categoria inválida.' }, { status: 400 })
  }

  const resultado = categoria ? fotos.filter((f) => f.categoria === categoria) : fotos
  return NextResponse.json(resultado)
}
