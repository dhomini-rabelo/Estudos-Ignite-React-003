import { createContext, ReactNode, useEffect, useState } from 'react'
import { TransactionSchema } from '../../schemas/transactions'
import { TransactionsContextType } from './types'

export const TransactionsContext = createContext<TransactionsContextType>(
  {} as TransactionsContextType,
)

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<TransactionSchema[]>([])

  async function searchTransactions(query?: string) {
    const url = new URL('http://localhost:3000/transactions')

    if (query) {
      url.searchParams.append('q', query)
    }

    const request = await fetch(url)
    const data: TransactionSchema[] = await request.json()
    setTransactions(data)
  }

  useEffect(() => {
    searchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, searchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
