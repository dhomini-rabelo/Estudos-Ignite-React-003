import { createContext, ReactNode, useEffect, useState } from 'react'
import { client } from '../../../core/settings'
import { TransactionSchema } from '../../schemas/transactions'
import { TransactionsContextType } from './types'

export const TransactionsContext = createContext<TransactionsContextType>(
  {} as TransactionsContextType,
)

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<TransactionSchema[]>([])

  async function searchTransactions(query?: string) {
    const response = await client.get('transactions')
    const data: TransactionSchema[] = response.data
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
