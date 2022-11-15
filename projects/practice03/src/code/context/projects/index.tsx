import { createContext, ReactNode, useReducer } from 'react'
import { myUserRepos } from '../../data'
import { RepositoryType } from '../../types/repository'
import { ProjectsReducer } from './reducer'
import { ProjectsConsumer } from './reducer/actions'
import { ProjectsContextType } from './types'

export const ProjectsContext = createContext<ProjectsContextType>(
  {} as ProjectsContextType,
)

export function ProjectsProvider({ children }: { children: ReactNode }) {
  const [projects, projectsDispatch] = useReducer(ProjectsReducer, {
    defaultUser: 'dhomini-rabelo',
    currentUser: 'dhomini-rabelo',
    repos: myUserRepos,
  })

  function setRepositories(repositories: RepositoryType[]) {
    projectsDispatch(ProjectsConsumer.setRepos(repositories))
  }

  return (
    <ProjectsContext.Provider
      value={{ ...projects, actions: { setRepositories } }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}
