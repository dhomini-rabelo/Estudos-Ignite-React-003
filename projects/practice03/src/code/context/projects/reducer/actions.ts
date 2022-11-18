import { RepositoryType } from '../../../types/repository'
import { UserDataType } from '../../../types/user'

/* eslint-disable */
export enum ProjectsActions {
  SET_NEW_USER = 'SET_NEW_USER',
  SET_USER = 'SET_USER',
  SET_REPOS = 'SET_REPOS',
}
/* eslint-enable */

export const ProjectsConsumer = {
  setNewUser(username: string) {
    return {
      type: ProjectsActions.SET_NEW_USER,
      payload: username,
    }
  },
  setUser(userData: UserDataType) {
    return {
      type: ProjectsActions.SET_USER,
      payload: userData,
    }
  },
  setRepos(repositories: RepositoryType[]) {
    return {
      type: ProjectsActions.SET_REPOS,
      payload: repositories,
    }
  },
}
