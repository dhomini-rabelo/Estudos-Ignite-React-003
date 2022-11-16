import { createContext, ReactNode, useReducer } from 'react'
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
    defaultUser: 'dhomini-rabelo',
    currentUser: {
      login: 'dhomini-rabelo',
      avatar_url: '',
      html_url: '',
      repos_url: '',
      name: '',
      company: null,
      blog: null,
      location: null,
      bio: '',
      public_repos: 0,
      followers: 0,
    },
    repos: [],
  })

  function setUserData(userData: UserDataType) {
    projectsDispatch(ProjectsConsumer.setUser(userData))
  }

  function setRepositories(repositories: RepositoryType[]) {
    projectsDispatch(ProjectsConsumer.setRepos(repositories))
  }

  return (
    <ProjectsContext.Provider
      value={{ ...projects, actions: { setRepositories, setUserData } }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}
