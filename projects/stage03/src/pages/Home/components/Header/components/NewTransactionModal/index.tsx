import * as Dialog from '@radix-ui/react-dialog'
import { Div } from './styles'
import { X } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Div.overlay />
      <Div.content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <Dialog.Close asChild>
          <button
            type="button"
            className="bg-transparent border-0 absolute top-6 right-6 cursor-pointer text-Gray-500"
          >
            <X size={24} className="hover:text-Gray-100" />
          </button>
        </Dialog.Close>

        <form className="mt-8 flex flex-col gap-4">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
        </form>
      </Div.content>
    </Dialog.Portal>
  )
}
