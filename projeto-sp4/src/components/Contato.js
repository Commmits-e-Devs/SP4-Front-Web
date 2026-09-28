import Caixa from './Caixa'
import Secao from './Secao'
import CabecalhoSecao from './CabecalhoSecao'
import CaixaIcone from './CaixaIcone'
import FormularioContato from './FormularioContato'
import { contatos } from '../data/conteudo'

export default function Contato() {
  return (
    <Secao id="contato">
      <Caixa>
        <CabecalhoSecao etiqueta="Contato" titulo="Fale com a equipe Jovi SmartFlow">
          Tem dúvidas sobre o projeto, quer sugerir uma parceria ou só trocar uma
          ideia sobre o Challenge? Escolha o canal que preferir.
        </CabecalhoSecao>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col gap-5">
            {contatos.map((c) => {
              const Icone = c.icone
              return (
                <article key={c.titulo} className="flex items-start gap-3.5">
                  <CaixaIcone>
                    <Icone size={20} />
                  </CaixaIcone>
                  <div>
                    <h4 className="mb-0.5 font-heading text-[15px] font-bold">{c.titulo}</h4>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-suave hover:text-azul">{c.texto}</a>
                    ) : (
                      <span className="text-sm text-suave">{c.texto}</span>
                    )}
                  </div>
                </article>
              )
            })}
          </div>

          <FormularioContato />
        </div>
      </Caixa>
    </Secao>
  )
}
