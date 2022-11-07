export interface TransactionSchema {
  id: number
  title: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}
