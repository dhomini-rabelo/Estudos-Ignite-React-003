import { RepositoryType } from '../../../types/repository'

/* eslint-disable */
export enum ProjectsActions {
  SET_REPOS = 'SET_REPOS'
}
/* eslint-enable */

export const ProjectsConsumer = {
  setRepos(repositories: RepositoryType[]) {
    return {
      type: ProjectsActions.SET_REPOS,
      payload: repositories,
    }
  },
}
