export default function Caixa({ className = '', children }) {
  return <div className={`mx-auto max-w-caixa px-6 ${className}`}>{children}</div>
}
