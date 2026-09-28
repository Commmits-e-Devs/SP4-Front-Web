import Image from 'next/image'
import Caixa from './Caixa'
import Secao from './Secao'
import CabecalhoSecao from './CabecalhoSecao'
import { detalhesPublico } from '../data/conteudo'

export default function Publico() {
  return (
    <Secao id="publico" escura>
      <Caixa>
        <CabecalhoSecao
          escuro
          etiqueta="Público-Alvo"
          titulo="Feito para quem vive entre aula, prova e vida real"
        >
          O foco é o estudante full-time: concilia estudos, interações sociais e
          ambição, está sempre em movimento e usa o smartphone como ferramenta de
          produtividade e expressão.
        </CabecalhoSecao>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
          <article className="flex flex-col justify-between rounded-cartao border border-borda-escura bg-linear-160 from-azul-profundo to-dark-900 p-5">
            <div className="mb-3 w-full">
              {/* width/height: troque pelas dimensões reais da imagem */}
              <Image
                src="/img/estudantes.jpg"
                alt="Estudante Full-time"
                width={600}
                height={400}
                className="max-h-60 w-full rounded-campo object-cover"
              />
            </div>
            <cite className="text-xs text-suave-escuro not-italic">
              Estudante Full-time · principal persona da Jovi
            </cite>
          </article>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {detalhesPublico.map((d) => (
              <article
                key={d.titulo}
                className={`rounded-campo border border-borda-escura bg-dark-900 p-5 ${d.larguraTotal ? 'md:col-span-2' : ''}`}
              >
                <h4 className="mb-3 font-code text-xs font-bold uppercase text-ambar">{d.titulo}</h4>
                <ul>
                  {d.itens.map((item) => (
                    <li
                      key={item}
                      className="border-t border-borda-escura py-1.5 text-sm text-suave-escuro first:border-t-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Caixa>
    </Secao>
  )
}
