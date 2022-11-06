import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

export function SummaryContainer() {

  return (
    <section className="w-full mx-auto p-[0_1.25rem] grid grid-cols-3 gap-8 mt-[-5rem]">

      <div className="col-span-1 bg-Gray-600 rounded-md p-8">
        <header className="flex items-center justify-between text-Gray-300">
          <span>Entradas</span>
          <ArrowCircleUp size={32} className="text-Green-300" />
        </header>
        <strong className="block mt-4 text-[2rem]">R$ 17.400,00</strong>
      </div>

      <div className="col-span-1 bg-Gray-600 rounded-md p-8">
        <header className="flex items-center justify-between text-Gray-300">
          <span>Saídas</span>
          <ArrowCircleDown size={32} className="text-Red-300" />
        </header>
        <strong className="block mt-4 text-[2rem]">R$ 17.400,00</strong>
      </div>

      <div className="col-span-1 bg-Green-700 rounded-md p-8">
        <header className="flex items-center justify-between text-Gray-300">
          <span>Total</span>
          <CurrencyDollar size={32} className="text-white" />
        </header>
        <strong className="block mt-4 text-[2rem]">R$ 17.400,00</strong>
      </div>

    </section>
  )
}