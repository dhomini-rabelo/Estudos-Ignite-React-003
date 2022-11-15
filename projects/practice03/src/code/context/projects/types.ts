import { RepositoryType } from '../../types/repository'

export interface ProjectsContextType {
  defaultUser: string
  currentUser: string
  repos: RepositoryType[]
}
