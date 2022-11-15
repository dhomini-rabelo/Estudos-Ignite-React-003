import { RepositoryType } from '../../types/repository'

export interface UserSettingsType {
  defaultUser: string
  currentUser: string
  repos: RepositoryType[]
}

export interface ProjectsContextType extends UserSettingsType {
  actions: {
    setRepositories: (repositories: RepositoryType[]) => void
  }
}
