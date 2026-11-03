'use client'

import { useEffect, useMemo, useState } from 'react'

export default function useFotos() {
  const [fotos, setFotos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [categoria, setCategoria] = useState('todas')

  useEffect(() => {
    const controlador = new AbortController()
    setCarregando(true)
    setErro('')

    const url = categoria === 'todas' ? '/api/fotos' : `/api/fotos?categoria=${categoria}`

    fetch(url, { signal: controlador.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Não foi possível carregar as fotos.')
        return res.json()
      })
      .then((dados) => {
        setFotos(dados)
        setCarregando(false)
      })
      .catch((e) => {
        if (e.name === 'AbortError') return
        setErro(e.message)
        setCarregando(false)
      })

    return () => controlador.abort()
  }, [categoria])

  const total = useMemo(() => fotos.length, [fotos])

  return { fotos, total, carregando, erro, categoria, setCategoria }
}
