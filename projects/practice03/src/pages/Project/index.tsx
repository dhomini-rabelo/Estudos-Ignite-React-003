import { Link, useParams } from 'react-router-dom'
import { contentGithubClient } from '../../core/settings'
import { Loading } from '../../layout/components/Loading'
import { useLoading } from '../../layout/hooks/useLoading'
import { Markup } from 'interweave'
import { Div } from './styles'

export function Project() {
  const { username, projectName, branch } = useParams()
  const { isLoading, data, wasSuccess } = useLoading(
    `${username}/${projectName}/${branch}/README.md`,
    contentGithubClient,
  )
  console.log(username, projectName, branch)

  return !isLoading ? (
    <main className="pt-8">
      <Div.header className="flex items-center justify-between text-Blue-300">
        <Link to="/" className="lh-160">
          <i className="fa-solid fa-chevron-left mr-2"></i>
          <span>VOLTAR</span>
        </Link>
        <a
          className="github-link"
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/${username}/${projectName}`}
        >
          VER NO GITHUB
          <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
        </a>
      </Div.header>
      <section className="mt-5">
        {wasSuccess ? (
          <Div.content>
            <Markup
              content={data.replaceAll(
                'src=".',
                `src="https://raw.githubusercontent.com/${username}/${projectName}/${branch}`,
              )}
            />
          </Div.content>
        ) : (
          <span className="block text-center col-span-2">
            <i className="fa-solid fa-x mr-2"></i>
            Nenhum conteúdo público encontrado
          </span>
        )}
      </section>
    </main>
  ) : (
    <Loading />
  )
}
