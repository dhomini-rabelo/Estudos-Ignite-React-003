import { createContext, ReactNode, useReducer } from 'react'
import { myUserRepos } from '../../data'
import { ProjectsReducer } from './reducer'
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

  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  )
}
