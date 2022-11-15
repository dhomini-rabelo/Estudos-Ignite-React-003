import { Link } from 'react-router-dom'
import { Loading } from '../../layout/components/Loading'
import { Div } from './styles'

export function Project() {
  const isLoading = false

  return !isLoading ? (
    <main>
      <Div.header className="flex items-center justify-between text-Blue-300">
        <Link to="/" className="lh-160">
          <i className="fa-solid fa-chevron-left mr-2"></i>
          <span>VOLTAR</span>
        </Link>
        <a className="github-link" target="_blank" rel="noreferrer" href="#">
          GITHUB
          <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
        </a>
      </Div.header>
      <section>
        <div>content</div>
      </section>
    </main>
  ) : (
    <Loading />
  )
}
