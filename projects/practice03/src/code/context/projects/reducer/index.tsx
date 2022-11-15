import { ProjectsContextType } from '../types'
import { ProjectsReducerAction } from './types'

export function ProjectsReducer(
  state: ProjectsContextType,
  action: ProjectsReducerAction,
): ProjectsContextType {
  return { ...state }
}
