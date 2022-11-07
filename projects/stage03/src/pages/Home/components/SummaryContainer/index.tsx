import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../code/contexts/Transactions'
import { priceFormatter } from '../../../../code/utils/formatter'

export function SummaryContainer() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === 'income') {
        accumulator.income += transaction.price
        accumulator.total += transaction.price
      } else {
        accumulator.outcome += transaction.price
        accumulator.total -= transaction.price
      }

      return accumulator
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return (
    <section className="w-full mx-auto p-[0_1.25rem] grid grid-cols-3 gap-8 mt-[-5rem]">
      <div className="col-span-1 bg-Gray-600 rounded-md p-8">
        <header className="flex items-center justify-between text-Gray-300">
          <span>Entradas</span>
          <ArrowCircleUp size={32} className="text-Green-300" />
        </header>
        <strong className="block mt-4 text-[2rem]">
          {priceFormatter.format(summary.income)}
        </strong>
      </div>

      <div className="col-span-1 bg-Gray-600 rounded-md p-8">
        <header className="flex items-center justify-between text-Gray-300">
          <span>Saídas</span>
          <ArrowCircleDown size={32} className="text-Red-300" />
        </header>
        <strong className="block mt-4 text-[2rem]">
          {priceFormatter.format(summary.outcome)}
        </strong>
      </div>

      <div className="col-span-1 bg-Green-700 rounded-md p-8">
        <header className="flex items-center justify-between text-Gray-300">
          <span>Total</span>
          <CurrencyDollar size={32} className="text-white" />
        </header>
        <strong className="block mt-4 text-[2rem]">
          {priceFormatter.format(summary.total)}
        </strong>
      </div>
    </section>
  )
}
