'use client'

import Campo from './Campo'
import useFormularioContato from '../hooks/useFormularioContato'

export default function FormularioContato() {
  const { valores, status, erro, aoMudar, aoEnviar } = useFormularioContato()
  const enviando = status === 'enviando'

  return (
    <form
      onSubmit={aoEnviar}
      className="flex flex-col gap-[18px] rounded-cartao border border-borda-clara bg-cartao p-7"
    >
      <Campo
        id="nomeContato"
        name="nome"
        label="Nome"
        placeholder="Seu nome completo"
        value={valores.nome}
        onChange={aoMudar}
        required
      />
      <Campo
        id="emailContato"
        name="email"
        label="E-mail"
        tipo="email"
        placeholder="voce@email.com"
        value={valores.email}
        onChange={aoMudar}
        required
      />
      <Campo
        id="assuntoContato"
        name="assunto"
        label="Assunto"
        placeholder="Sobre o que você quer falar?"
        value={valores.assunto}
        onChange={aoMudar}
      />
      <Campo
        id="mensagemContato"
        name="mensagem"
        label="Mensagem"
        textarea
        rows={4}
        placeholder="Escreva sua mensagem aqui..."
        value={valores.mensagem}
        onChange={aoMudar}
        required
      />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={enviando}
          className="inline-block cursor-pointer rounded-full border-0 bg-azul px-6 py-3 font-heading text-[15px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {enviando ? 'Enviando...' : 'Enviar mensagem'}
        </button>

        {status === 'sucesso' && (
          <p role="status" className="text-sm text-azul">
            Mensagem enviada! A equipe Jovi SmartFlow retornará em breve.
          </p>
        )}
        {status === 'erro' && (
          <p role="alert" className="text-sm text-red-600">
            {erro}
          </p>
        )}
      </div>
    </form>
  )
}
