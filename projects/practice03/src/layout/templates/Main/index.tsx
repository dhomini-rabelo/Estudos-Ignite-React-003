import { Outlet } from 'react-router-dom'
import { Div } from './styles'

export function MainTemplate() {
  return (
    <Div.container id="container">
      <header className="w-full h-72 flex">
        <img
          src="/images/Logo.svg"
          alt="project-logo"
          className="w-36 h-24 m-auto d-block mt-16"
        />
      </header>
      <main>
        <Outlet />
      </main>
    </Div.container>
  )
}
