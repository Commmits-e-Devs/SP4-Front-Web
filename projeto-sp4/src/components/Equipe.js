import Caixa from './Caixa'
import Secao from './Secao'
import CabecalhoSecao from './CabecalhoSecao'
import { equipe } from '../data/conteudo'

export default function Equipe() {
  return (
    <Secao id="equipe" escura>
      <Caixa>
        <CabecalhoSecao escuro etiqueta="Nossa Equipe" titulo="Quem construiu o Jovi SmartFlow">
          Um time multidisciplinar responsável pela pesquisa, design e
          desenvolvimento da solução para o Challenge.
        </CabecalhoSecao>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {equipe.map((m) => (
            <article key={m.rm} className="rounded-cartao border border-borda-escura bg-dark-900 p-5">
              <div className="mb-3 flex size-11 items-center justify-center rounded-[10px] bg-dark-800 font-heading font-semibold text-azul-claro">
                {m.iniciais}
              </div>
              <h3 className="font-heading text-base font-bold">{m.nome}</h3>
              <span className="mt-1 mb-2 block font-code text-[11px] text-ambar">RM: {m.rm}</span>
              <p className="text-[13px] text-suave-escuro">{m.funcao}</p>
            </article>
          ))}
        </div>
      </Caixa>
    </Secao>
  )
}
