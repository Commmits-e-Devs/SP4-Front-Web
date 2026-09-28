import Etiqueta from './Etiqueta'

export default function CabecalhoSecao({ etiqueta, titulo, escuro = false, children }) {
  return (
    <header className="mb-12 max-w-[640px]">
      <Etiqueta>{etiqueta}</Etiqueta>
      <h2 className="mt-3 font-heading text-[clamp(28px,4vw,40px)] font-semibold">{titulo}</h2>
      <p className={`mt-3.5 text-base ${escuro ? 'text-suave-escuro' : 'text-suave'}`}>{children}</p>
    </header>
  )
}
