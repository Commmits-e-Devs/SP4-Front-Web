import Caixa from './Caixa'
import Marca from './Marca'

export default function Rodape() {
  return (
    <footer className="border-t border-borda-escura bg-dark-950 pt-10 pb-6 text-suave-escuro">
      <Caixa className="grid grid-cols-1 gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Marca />
          <p className="mt-2.5 text-[13px]">
            A câmera que entende o contexto do estudante full-time. Fricção zero, do
            primeiro toque à última anotação.
          </p>
        </div>

        <div>
          <h5 className="mb-2.5 font-heading text-sm font-bold text-white">Navegação</h5>
          <ul className="text-[13px]">
            <li className="py-1"><a href="#solucao">A Solução</a></li>
            <li className="py-1"><a href="#publico">Público-Alvo</a></li>
            <li className="py-1"><a href="#galeria">Galeria</a></li>
          </ul>
        </div>

        <div>
          <h5 className="mb-2.5 font-heading text-sm font-bold text-white">Projeto</h5>
          <ul className="text-[13px]">
            <li className="py-1"><a href="#equipe">Nossa Equipe</a></li>
            <li className="py-1"><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </Caixa>

      <Caixa className="mt-8 flex flex-col gap-2 border-t border-borda-escura pt-4 font-code text-xs md:flex-row md:justify-between">
        <span>© 2026 Jovi SmartFlow Camera</span>
        <span>Projeto acadêmico — Challenge de Câmera Inteligente</span>
      </Caixa>
    </footer>
  )
}
