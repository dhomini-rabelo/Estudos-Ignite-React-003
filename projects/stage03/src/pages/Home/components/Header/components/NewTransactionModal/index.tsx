import { ArrowCircleUp, ArrowCircleDown, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { Button, Div } from './styles'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newTransactionSchema, newTransactionSchemaType } from './schemas'

export function NewTransactionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<newTransactionSchemaType>({
    resolver: zodResolver(newTransactionSchema),
    defaultValues: {
      type: 'income',
    },
  })

  function handleRegisterNewTransaction(data: newTransactionSchemaType) {
    console.log(data)
  }

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

        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={handleSubmit(handleRegisterNewTransaction)}
        >
          <input
            type="text"
            placeholder="Título"
            required
            {...register('title')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <RadioGroup.Root
                className="grid grid-cols-2"
                onValueChange={field.onChange}
                value={field.value}
              >
                <Button.transactionType
                  value="income"
                  type="button"
                  className="col-span-1"
                >
                  <span>Entrada</span>
                  <ArrowCircleUp size={32} className="text-Green-300" />
                </Button.transactionType>
                <Button.transactionType
                  value="outcome"
                  type="button"
                  className="col-span-1"
                >
                  <span>Saída</span>
                  <ArrowCircleDown size={32} className="text-Red-300" />
                </Button.transactionType>
              </RadioGroup.Root>
            )}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Div.content>
    </Dialog.Portal>
  )
}
