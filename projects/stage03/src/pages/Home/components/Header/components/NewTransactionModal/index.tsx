import { ArrowCircleUp, ArrowCircleDown, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { Button, Div } from './styles'

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
          <RadioGroup.Root className="grid grid-cols-2">
            <Button.transactionType
              value="income"
              isIncome={true}
              type="button"
              className="col-span-1"
            >
              <span>Entrada</span>
              <ArrowCircleUp size={32} className="text-Green-300" />
            </Button.transactionType>
            <Button.transactionType
              value="outcome"
              isIncome={false}
              type="button"
              className="col-span-1"
            >
              <span>Saída</span>
              <ArrowCircleDown size={32} className="text-Red-300" />
            </Button.transactionType>
          </RadioGroup.Root>
          <button type="submit">Cadastrar</button>
        </form>
      </Div.content>
    </Dialog.Portal>
  )
}
