import { Link, useParams } from 'react-router-dom'
import { contentGithubClient } from '../../core/settings'
import { Loading } from '../../layout/components/Loading'
import { useLoading } from '../../layout/hooks/useLoading'
import { Markup } from 'interweave'
import { Div } from './styles'
import { useContext } from 'react'
import { ProjectsContext } from '../../code/context/projects'
import ReactMarkdown from 'react-markdown'
import ReactDOMServer from 'react-dom/server'

export function Project() {
  const { username, projectName, branch } = useParams()
  const { currentUser, repos } = useContext(ProjectsContext)
  const { isLoading, data, wasSuccess } = useLoading<string>(
    `${username}/${projectName}/${branch}/README.md`,
    contentGithubClient,
  )
  const projectRepository = repos.find(
    (repo) => repo.full_name === `${username}/${projectName}`,
  )

  if (username !== currentUser || !projectRepository) {
    return (
      <main className="py-8">
        <Div.header className="flex flex-col">
          <nav className="flex items-center justify-between text-Blue-300 w-full">
            <Link to="/" className="lh-160">
              <i className="fa-solid fa-chevron-left mr-2"></i>
              <span>VOLTAR</span>
            </Link>
          </nav>
        </Div.header>
        <section>
          <span className="block text-center col-span-2">
            <i className="fa-solid fa-x mr-2"></i>
            Usuário inválido
          </span>
        </section>
      </main>
    )
  }

  const markdownAndHtmlCodeAsString = ReactDOMServer.renderToStaticMarkup(
    <ReactMarkdown>{data || ''}</ReactMarkdown>,
  )
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll(
      'src=".',
      `src="https://raw.githubusercontent.com/${username}/${projectName}/${branch}`,
    )

  return !isLoading ? (
    <main className="pt-8 pb-24">
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
              <i
                className={`devicon-${projectRepository.language.toLowerCase()}-plain text-Blue-500`}
              ></i>
              <span>{projectRepository.language}</span>
            </div>
            <div className="icon-text flex gap-x-2 items-center">
              <i className="fa-solid fa-calendar"></i>
              <span>
                {new Date(projectRepository.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </Div.header>
      <section>
        {wasSuccess ? (
          <Div.content>
            <Markup content={markdownAndHtmlCodeAsString} />
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
