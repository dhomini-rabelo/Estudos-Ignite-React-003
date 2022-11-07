import { TransactionSchema } from '../../schemas/transactions'

export interface TransactionsContextType {
  transactions: TransactionSchema[]
  searchTransactions: (query?: string) => Promise<void>
}
