import { Outlet } from 'react-router-dom'

export function MainTemplate() {
  return (
    <div id="container">
      <header>
        <img src="/images/Logo.svg" alt="project-logo" />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
