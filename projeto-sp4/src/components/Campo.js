export default function Campo({ id, label, tipo = 'text', textarea = false, ...props }) {
  const base =
    'rounded-campo border border-borda-clara bg-fundo-claro px-3.5 py-3 font-main text-sm text-texto outline-none transition-colors duration-200 focus:border-azul'

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-code text-xs uppercase tracking-[0.06em] text-suave">
        {label}
      </label>
      {textarea ? (
        <textarea id={id} className={`${base} min-h-[100px] resize-y`} {...props} />
      ) : (
        <input id={id} type={tipo} className={base} {...props} />
      )}
    </div>
  )
}
