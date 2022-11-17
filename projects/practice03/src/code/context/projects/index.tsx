import { createContext, ReactNode, useCallback, useReducer } from 'react'
import { RepositoryType } from '../../types/repository'
import { UserDataType } from '../../types/user'
import { ProjectsReducer } from './reducer'
import { ProjectsConsumer } from './reducer/actions'
import { ProjectsContextType } from './types'

export const ProjectsContext = createContext<ProjectsContextType>(
  {} as ProjectsContextType,
)

export function ProjectsProvider({ children }: { children: ReactNode }) {
  const [projects, projectsDispatch] = useReducer(ProjectsReducer, {
    username: 'dhomini-rabelo',
    user: null,
    repos: [],
  })

  const setUserData = useCallback((userData: UserDataType) => {
    projectsDispatch(ProjectsConsumer.setUser(userData))
  }, [])

  const setRepositories = useCallback((repositories: RepositoryType[]) => {
    projectsDispatch(ProjectsConsumer.setRepos(repositories))
  }, [])

  return (
    <ProjectsContext.Provider
      value={{ ...projects, actions: { setRepositories, setUserData } }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}
