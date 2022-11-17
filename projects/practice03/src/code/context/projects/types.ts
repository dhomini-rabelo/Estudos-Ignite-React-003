import { RepositoryType } from '../../types/repository'
import { UserDataType } from '../../types/user'

export interface UserSettingsType {
  username: string
  user: UserDataType | null
  repos: RepositoryType[]
}

export interface ProjectsContextType extends UserSettingsType {
  actions: {
    setNewUser: (username: string) => void
    setUserData: (userData: UserDataType) => void
    setRepositories: (repositories: RepositoryType[]) => void
  }
}
