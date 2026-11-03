'use client'

import { useCallback, useEffect, useState } from 'react'

export default function useMenuMobile() {
  const [aberto, setAberto] = useState(false)

  const alternar = useCallback(() => setAberto((a) => !a), [])
  const fechar = useCallback(() => setAberto(false), [])

  useEffect(() => {
    if (!aberto) return
    function aoTeclar(e) {
      if (e.key === 'Escape') setAberto(false)
    }
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  }, [aberto])

  return { aberto, alternar, fechar }
}
