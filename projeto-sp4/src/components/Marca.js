export default function Marca({ href }) {
  const classes = 'flex items-center gap-2.5 font-heading text-lg font-semibold text-white'
  const conteudo = (
    <>
      <span
        aria-hidden="true"
        className="size-8 rounded-lg bg-linear-to-br from-azul to-ambar"
      ></span>
      <span>Jovi SmartFlow</span>
    </>
  )
  return href ? (
    <a href={href} className={classes}>{conteudo}</a>
  ) : (
    <div className={classes}>{conteudo}</div>
  )
}
