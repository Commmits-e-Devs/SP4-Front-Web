'use client'

import Cabecalho from '../../components/Cabecalho'
import Caixa from '../../components/Caixa'
import Etiqueta from '../../components/Etiqueta'
import RotaPrivada from '../../components/RotaPrivada'
import useAuth from '../../hooks/useAuth'
import useFotos from '../../hooks/useFotos'

const FILTROS = [
  { valor: 'todas', texto: 'Todas' },
  { valor: 'texto', texto: 'Estudo (texto)' },
  { valor: 'pessoa', texto: 'Pessoas' },
  { valor: 'paisagem', texto: 'Paisagens' },
]

const ROTULO = { texto: 'Texto', pessoa: 'Pessoa', paisagem: 'Paisagem' }

function formatarData(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR')
}

function Conteudo() {
  const { usuario } = useAuth()
  const { fotos, total, carregando, erro, categoria, setCategoria } = useFotos()

  return (
    <Caixa>
      <Etiqueta>Galeria inteligente</Etiqueta>
      <h1 className="mt-3 font-heading text-[clamp(28px,4vw,40px)] font-semibold">
        Olá, {usuario?.nome.split(' ')[0]}
      </h1>
      <p className="mt-2 mb-8 max-w-[640px] text-suave">
        Suas fotos já chegam separadas por contexto, com os ajustes que a IA aplicou em cada uma.
      </p>

      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
        {FILTROS.map((f) => (
          <button
            key={f.valor}
            onClick={() => setCategoria(f.valor)}
            aria-pressed={categoria === f.valor}
            className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 ${
              categoria === f.valor
                ? 'border-azul bg-azul text-white'
                : 'border-borda-clara bg-cartao text-suave hover:border-azul'
            }`}
          >
            {f.texto}
          </button>
        ))}
      </div>

      {carregando && (
        <p role="status" className="text-suave">
          Carregando fotos...
        </p>
      )}
      {erro && (
        <p role="alert" className="text-red-600">
          {erro}
        </p>
      )}

      {!carregando && !erro && (
        <>
          <p className="mb-4 font-code text-xs uppercase text-suave">{total} foto(s)</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fotos.map((f) => (
              <article key={f.id} className="rounded-cartao border border-borda-clara bg-cartao p-6">
                <span className="mb-3 inline-block rounded-full bg-icone px-3 py-1 font-code text-[11px] uppercase text-azul">
                  {ROTULO[f.categoria]}
                </span>
                <h2 className="font-heading text-lg font-bold">{f.titulo}</h2>
                <p className="mb-3 text-[13px] text-suave">{formatarData(f.data)}</p>
                <dl className="grid grid-cols-3 gap-2 border-t border-borda-clara pt-3 text-[13px]">
                  <div>
                    <dt className="font-code text-[11px] uppercase text-suave">ISO</dt>
                    <dd className="font-semibold">{f.iso}</dd>
                  </div>
                  <div>
                    <dt className="font-code text-[11px] uppercase text-suave">Luz</dt>
                    <dd className="font-semibold">{f.luz}</dd>
                  </div>
                  <div>
                    <dt className="font-code text-[11px] uppercase text-suave">Nitidez</dt>
                    <dd className="font-semibold">{f.nitidez}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </>
      )}
    </Caixa>
  )
}

export default function MinhasFotos() {
  return (
    <>
      <Cabecalho />
      <main className="min-h-[70vh] bg-fundo-claro py-16">
        <RotaPrivada>
          <Conteudo />
        </RotaPrivada>
      </main>
    </>
  )
}
