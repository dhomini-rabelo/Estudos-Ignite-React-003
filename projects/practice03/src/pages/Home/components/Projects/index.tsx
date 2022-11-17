import { useContext, useEffect, useState } from 'react'
import { ProjectsContext } from '../../../../code/context/projects'
import { RepositoryType } from '../../../../code/types/repository'
import { mainGithubClient } from '../../../../core/settings'
import { Loading } from '../../../../layout/components/Loading'
import { PostBox } from '../../../../layout/components/PostBox'
import { useExternalData } from '../../../../layout/hooks/useExternalData'
import { Div } from './styles'

export function Projects() {
  const {
    defaultUser,
    currentUser,
    repos,
    actions: { setRepositories },
  } = useContext(ProjectsContext)
  const request = useExternalData<RepositoryType[]>(
    `users/${defaultUser}/repos`,
    mainGithubClient,
    repos.length === 0,
  )
  const [searchText, setSearchText] = useState('')
  const loadingNewRepos =
    request.wasSuccess && currentUser!.public_repos > 0 && repos.length === 0
  const filteredProjects = repos.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchText.toLowerCase()) ||
      repo.description?.toLowerCase().includes(searchText.toLowerCase()),
  )

  useEffect(() => {
    if (loadingNewRepos) {
      setRepositories(request.data!)
    }
  }, [request, setRepositories, loadingNewRepos])

  function handleClearSearchText() {
    setSearchText('')
  }
  if (request.isLoading || loadingNewRepos) {
    return <Loading />
  }

  return (
    <>
      <Div.inputContainer className="input-container">
        <div className="flex items-center justify-between mt-10 lh-160">
          <strong className="text-lg text-Gray-200">Projetos</strong>
          <div className="flex items-center gap-x-2">
            <span className="text-sm text-Blue-500">
              {repos.length} projetos
            </span>
            {searchText && (
              <span
                className="text-sm text-Blue-300 cursor-pointer"
                onClick={handleClearSearchText}
              >
                <i className="fa-solid fa-x mr-1"></i>
                Limpar
              </span>
            )}
          </div>
        </div>
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="block w-full mt-3 px-4 h-12 bg-Gray-900 lh-160 placeholder:text-Blue-600 rounded-md"
          placeholder="Buscar por projeto"
        />
      </Div.inputContainer>
      <div className="post-boxes mt-12 grid grid-cols-2 gap-x-8">
        {repos.length > 0 ? (
          filteredProjects.map((repo) => (
            <div className="col-span-1" key={repo.id}>
              <PostBox repository={repo} />
            </div>
          ))
        ) : (
          <span className="block text-center col-span-2">
            <i className="fa-solid fa-x mr-2"></i>
            Nenhum repositório público encontrado
          </span>
        )}
      </div>
    </>
  )
}
