import { useContext } from 'react'
import { TransactionsContext } from '../../code/contexts/Transactions'
import { DataList } from './components/DataList'
import { Header } from './components/Header'
import { SummaryContainer } from './components/SummaryContainer'

export function Home() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <>
      <Header />
      <SummaryContainer />
      <DataList transactions={transactions} />
    </>
  )
}
