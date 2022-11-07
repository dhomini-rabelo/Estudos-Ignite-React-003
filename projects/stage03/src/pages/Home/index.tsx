import { Header } from './components/Header'
import { SummaryContainer } from './components/SummaryContainer'
import { TransactionsList } from './components/TransactionsList'

export function Home() {
  return (
    <>
      <Header />
      <SummaryContainer />
      <TransactionsList />
    </>
  )
}
