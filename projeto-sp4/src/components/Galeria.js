import Image from 'next/image'
import Caixa from './Caixa'
import Secao from './Secao'
import CabecalhoSecao from './CabecalhoSecao'
import { telasGaleria } from '../data/conteudo'

export default function Galeria() {
  return (
    <Secao id="galeria">
      <Caixa>
        <CabecalhoSecao etiqueta="Galeria" titulo="A interface, por dentro">
          Três telas, um único princípio: poucas opções, contexto reconhecido
          automaticamente e nada que o estudante precise aprender antes de usar.
        </CabecalhoSecao>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {telasGaleria.map((t) => (
            <figure key={t.src} className="overflow-hidden rounded-cartao border border-borda-clara bg-cartao">
              <div className="flex justify-center overflow-hidden bg-dark-950">
                <Image
                  src={t.src}
                  alt={t.alt}
                  width={280}
                  height={500}
                  className="h-auto w-full max-w-none object-contain"
                />
              </div>
              <figcaption className="p-4 text-[13px] text-suave">
                <strong className="mb-1 block font-heading text-[15px] text-texto">{t.titulo}</strong>
                {t.texto}
              </figcaption>
            </figure>
          ))}
        </div>
      </Caixa>
    </Secao>
  )
}
