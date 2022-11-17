import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainTemplate } from '../layout/templates/Main'
import { Home } from '../pages/Home'
import { Project } from '../pages/Project'

export function RoutesController() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainTemplate />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/projeto-github/:githubUsername/:projectName/:branch"
            element={<Project />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
