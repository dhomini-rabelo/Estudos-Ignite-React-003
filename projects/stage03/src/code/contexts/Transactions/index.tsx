import { createContext, ReactNode, useEffect, useState } from 'react'
import { client } from '../../../core/settings'
import { newTransactionSchemaType } from '../../../pages/Home/components/Header/components/NewTransactionModal/schemas'
import { TransactionSchema } from '../../schemas/transactions'
import { TransactionsContextType } from './types'

export const TransactionsContext = createContext<TransactionsContextType>(
  {} as TransactionsContextType,
)

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<TransactionSchema[]>([])

  async function searchTransactions(query?: string) {
    const response = await client.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query || '',
      },
    })
    const data: TransactionSchema[] = response.data
    setTransactions(data)
  }

  async function createTransaction(data: newTransactionSchemaType) {
    const response = await client.post('transactions', {
      ...data,
      createdAt: new Date(),
    })
    setTransactions((prev) => [response.data, ...prev])
  }

  useEffect(() => {
    searchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, searchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
