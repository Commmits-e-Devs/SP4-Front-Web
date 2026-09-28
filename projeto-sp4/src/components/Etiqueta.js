export default function Etiqueta({ children }) {
  return (
    <span className="inline-flex items-center gap-2 font-code text-xs uppercase tracking-[0.12em] text-azul before:size-1.5 before:rounded-full before:bg-ambar before:content-['']">
      {children}
    </span>
  )
}
