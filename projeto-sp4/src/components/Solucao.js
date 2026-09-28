import Image from 'next/image'
import Caixa from './Caixa'
import Secao from './Secao'
import CabecalhoSecao from './CabecalhoSecao'
import CaixaIcone from './CaixaIcone'
import { cartoesSolucao, passos } from '../data/conteudo'

export default function Solucao() {
  return (
    <Secao id="solucao">
      <Caixa>
        <CabecalhoSecao etiqueta="A Solução" titulo="Uma câmera que entende o que você está olhando">
          Hoje o estudante full-time perde a explicação do professor tentando focar
          a câmera, ou guarda fotos estouradas e ilegíveis. O Jovi SmartFlow troca os
          ajustes manuais por uma IA de contexto: um toque e o hardware já sabe o que
          fazer.
        </CabecalhoSecao>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cartoesSolucao.map((c) => {
            const Icone = c.icone
            return (
              <article key={c.titulo} className="rounded-cartao border border-borda-clara bg-cartao p-6">
                <CaixaIcone>
                  <Icone />
                </CaixaIcone>
                <h3 className="mb-2 font-heading text-lg font-bold">{c.titulo}</h3>
                <p className="text-sm text-suave">{c.texto}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-[1.17em] font-bold">Como funciona, em 3 passos</h3>
            <ol>
              {passos.map((p) => (
                <li key={p.numero} className="grid grid-cols-[auto_1fr] gap-4 border-t border-borda-clara py-4">
                  <span className="font-code font-medium text-azul">{p.numero}</span>
                  <div>
                    <h4 className="font-heading text-base font-bold">{p.titulo}</h4>
                    <p className="text-sm text-suave">{p.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex min-h-[280px] justify-center rounded-cartao border border-borda-escura bg-dark-950 p-5">
            <Image
              src="/img/config02.png"
              alt="Interface de Configurações"
              width={300}
              height={600}
              className="max-h-[280px] w-auto object-contain"
            />
          </div>
        </div>
      </Caixa>
    </Secao>
  )
}
