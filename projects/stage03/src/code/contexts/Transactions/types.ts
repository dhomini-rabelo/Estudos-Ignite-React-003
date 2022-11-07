import { TransactionSchema } from '../../schemas/transactions'

export interface TransactionsContextType {
  transactions: TransactionSchema[]
}
