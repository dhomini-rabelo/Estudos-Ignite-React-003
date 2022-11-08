import { newTransactionSchemaType } from '../../../pages/Home/components/Header/components/NewTransactionModal/schemas'
import { TransactionSchema } from '../../schemas/transactions'

export interface TransactionsContextType {
  transactions: TransactionSchema[]
  searchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: newTransactionSchemaType) => Promise<void>
}
