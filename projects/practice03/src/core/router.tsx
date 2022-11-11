import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainTemplate } from '../layout/templates/Main'
import { Home } from '../pages/Home'

export function RoutesController() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainTemplate />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
