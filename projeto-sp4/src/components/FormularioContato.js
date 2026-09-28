'use client'

import Campo from './Campo'

export default function FormularioContato() {
  function aoEnviar(e) {
    e.preventDefault()
    e.currentTarget.reset()
    alert('Mensagem enviada! A equipe Jovi SmartFlow retornará em breve.')
  }

  return (
    <form
      onSubmit={aoEnviar}
      className="flex flex-col gap-[18px] rounded-cartao border border-borda-clara bg-cartao p-7"
    >
      <Campo id="nomeContato" label="Nome" placeholder="Seu nome completo" required />
      <Campo id="emailContato" label="E-mail" tipo="email" placeholder="voce@email.com" required />
      <Campo id="assuntoContato" label="Assunto" placeholder="Sobre o que você quer falar?" />
      <Campo
        id="mensagemContato"
        label="Mensagem"
        textarea
        rows={4}
        placeholder="Escreva sua mensagem aqui..."
        required
      />

      <button
        type="submit"
        className="inline-block cursor-pointer self-start rounded-full border-0 bg-azul px-6 py-3 font-heading text-[15px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
      >
        Enviar mensagem
      </button>
    </form>
  )
}
