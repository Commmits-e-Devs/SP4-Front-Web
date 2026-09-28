export default function Secao({ id, escura = false, children }) {
  const tema = escura ? 'bg-dark-950 text-white' : 'bg-fundo-claro text-texto'
  return (
    <section id={id} className={`py-20 ${tema}`}>
      {children}
    </section>
  )
}
