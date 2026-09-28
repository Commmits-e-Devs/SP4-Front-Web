import Image from 'next/image'
import Caixa from './Caixa'
import Etiqueta from './Etiqueta'
import { estatisticas } from '../data/conteudo'

export default function Topo() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_top_left,var(--color-azul-profundo)_0%,var(--color-dark-950)_70%)] pt-[72px] pb-[88px] text-white">
      <Caixa className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <Etiqueta>IA de contexto · Parceria ZEISS</Etiqueta>
          <h1 className="mt-4 font-heading text-[clamp(32px,5vw,56px)] leading-[1.1] font-bold">
            Aponte a câmera.
            <br />
            Ele calibra <em className="text-ambar not-italic">tudo</em>.
          </h1>
          <p className="mt-5 text-[17px] text-suave-escuro">
            O Jovi SmartFlow reconhece se você tocou em um texto, uma pessoa ou uma
            paisagem e ajusta ISO, luz e nitidez na hora. Fricção zero entre a lousa
            e o seu caderno de estudos.
          </p>

          <div className="mt-7">
            <a
              href="#solucao"
              className="inline-block rounded-full border border-borda-escura px-6 py-3 font-heading text-[15px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Ver como funciona
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-borda-escura pt-5">
            {estatisticas.map((e) => (
              <div key={e.rotulo}>
                <strong className="block font-heading text-xl">{e.valor}</strong>
                <span className="font-code text-[11px] uppercase text-suave-escuro">{e.rotulo}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-[300px]">
            <Image
              src="/img/celular-inicial.png"
              alt="Mockup da Câmera Jovi SmartFlow"
              width={300}
              height={600}
              priority
              className="drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </Caixa>
    </section>
  )
}
