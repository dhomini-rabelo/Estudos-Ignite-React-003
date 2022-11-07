import { createContext, ReactNode, useEffect, useState } from 'react'
import { TransactionSchema } from '../../schemas/transactions'
import { TransactionsContextType } from './types'

export const TransactionsContext = createContext<TransactionsContextType>(
  {} as TransactionsContextType,
)

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<TransactionSchema[]>([])
  useEffect(() => {
    fetch('http://localhost:3000/transactions').then(async (response) => {
      const data: TransactionSchema[] = await response.json()
      setTransactions(data)
    })
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
