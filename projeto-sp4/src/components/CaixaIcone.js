export default function CaixaIcone({ children }) {
  return (
    <div
      aria-hidden="true"
      className="mb-4 flex size-[42px] items-center justify-center rounded-campo bg-icone text-azul"
    >
      {children}
    </div>
  )
}
