import { RepositoryType } from '../../../types/repository'
import { UserDataType } from '../../../types/user'

/* eslint-disable */
export enum ProjectsActions {
  SET_USER = 'SET_USER',
  SET_REPOS = 'SET_REPOS',
}
/* eslint-enable */

export const ProjectsConsumer = {
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
