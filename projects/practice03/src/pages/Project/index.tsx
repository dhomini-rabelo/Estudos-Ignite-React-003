import { Loading } from '../../layout/components/Loading'

export function Project() {
  const isLoading = false

  return !isLoading ? <main>project page</main> : <Loading />
}
