import { useEffect, useState } from 'react'
import { TransactionSchema } from '../../code/schemas/transactions'
import { DataList } from './components/DataList'
import { Header } from './components/Header'
import { SummaryContainer } from './components/SummaryContainer'

export function Home() {
  const [transactions, setTransactions] = useState<TransactionSchema[]>([])
  useEffect(() => {
    fetch('http://localhost:3000/transactions').then(async (response) => {
      const data: TransactionSchema[] = await response.json()
      setTransactions(data)
    })
  }, [])

  return (
    <>
      <Header />
      <SummaryContainer />
      <DataList transactions={transactions} />
    </>
  )
}
