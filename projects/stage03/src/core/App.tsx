import { TransactionsProvider } from '../code/contexts/Transactions'
import { Home } from '../pages/Home'

export function App() {
  return (
    <TransactionsProvider>
      <Home />
    </TransactionsProvider>
  )
}
