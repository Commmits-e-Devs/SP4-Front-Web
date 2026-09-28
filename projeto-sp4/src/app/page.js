import Cabecalho from '../components/Cabecalho'
import Topo from '../components/Topo'
import Solucao from '../components/Solucao'
import Publico from '../components/Publico'
import Galeria from '../components/Galeria'
import Equipe from '../components/Equipe'
import Contato from '../components/Contato'
import Rodape from '../components/Rodape'

export default function Home() {
  return (
    <>
      <Cabecalho />
      <main id="top">
        <Topo />
        <Solucao />
        <Publico />
        <Galeria />
        <Equipe />
        <Contato />
      </main>
      <Rodape />
    </>
  )
}
