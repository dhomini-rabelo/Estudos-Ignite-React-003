import { RepositoryType } from '../../types/repository'
import { UserDataType } from '../../types/user'

export interface UserSettingsType {
  username: string
  user: UserDataType | null
  repos: RepositoryType[]
}

export interface ProjectsContextType extends UserSettingsType {
  actions: {
    setRepositories: (repositories: RepositoryType[]) => void
    setUserData: (userData: UserDataType) => void
  }
}
