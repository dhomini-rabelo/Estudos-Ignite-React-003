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

  return !isLoading ? (
    <main className="py-8">
      <Div.header className="flex flex-col">
        <nav className="flex items-center justify-between text-Blue-300 w-full">
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
        </nav>
        <div className="w-full my-5 text-center flex flex-col justify-center items-center text-center">
          <h1 className="text-lg text-Gray-100">{projectName} ( README )</h1>
          <div className="mt-2 flex justify-content items-center gap-x-6 lh-160 text-Blue-500">
            <div className="icon-text flex gap-x-2 items-center">
              <i className="fa-brands fa-github"></i>
              <span>{username}</span>
            </div>
            <div className="icon-text flex gap-x-2 items-center">
              <i className="fa-brands fa-python"></i>
              <span>Python</span>
            </div>
            <div className="icon-text flex gap-x-2 items-center">
              <i className="fa-solid fa-calendar"></i>
              <span>Há 1 dia</span>
            </div>
          </div>
        </div>
      </Div.header>
      <section>
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
