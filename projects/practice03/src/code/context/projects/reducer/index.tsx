import { UserSettingsType } from '../types'
import { ProjectsActions } from './actions'
import { ProjectsReducerAction } from './types'

export function ProjectsReducer(
  state: UserSettingsType,
  action: ProjectsReducerAction,
): UserSettingsType {
  switch (action.type) {
    case ProjectsActions.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    case ProjectsActions.SET_REPOS:
      return {
        ...state,
        repos: action.payload,
      }
  }
}
