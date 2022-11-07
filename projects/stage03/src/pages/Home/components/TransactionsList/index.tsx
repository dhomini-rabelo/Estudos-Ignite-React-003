import { MagnifyingGlass } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../code/contexts/Transactions'
import { dateFormatter, priceFormatter } from '../../../../code/utils/formatter'
import { Form, Table } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  searchTransactionsSchema,
  searchTransactionsSchemaType,
} from './schemas'

export function TransactionsList() {
  const { transactions, searchTransactions } = useContext(TransactionsContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchTransactionsSchemaType>({
    resolver: zodResolver(searchTransactionsSchema),
  })

  function handleSearchTransactions(data: searchTransactionsSchemaType) {
    searchTransactions(data.query)
  }

  return (
    <main className="w-full mx-auto p-[0_1.5rem] mt-16">
      <Form.search
        className="flex gap-4"
        onSubmit={handleSubmit(handleSearchTransactions)}
      >
        <input
          type="text"
          className="grow rounded-md bg-Gray-900 text-Gray-300 p-4 placeholder:text-Gray-500"
          placeholder="Busque por transações"
          {...register('query')}
        />
        <button
          className="flex items-center gap-3 p-4 text-Green-300 font-semibold rounded-md hover:bg-Green-500 hover:text-white"
          type="submit"
          disabled={isSubmitting}
        >
          <MagnifyingGlass size={20} />
          <span>Buscar</span>
        </button>
      </Form.search>
      <Table.main className="w-full mt-6">
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {priceFormatter.format(transaction.price)}
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </Table.main>
    </main>
  )
}
