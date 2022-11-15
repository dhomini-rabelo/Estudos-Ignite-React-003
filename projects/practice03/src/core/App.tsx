import { RoutesController } from './router'
import './global.css'
import { ProjectsProvider } from '../code/context/projects'

export function App() {
  return (
    <ProjectsProvider>
      <RoutesController />
    </ProjectsProvider>
  )
}
