import { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProjectsContext } from '../../code/context/projects'
import { UserDataType } from '../../code/types/user'
import { mainGithubClient } from '../../core/settings'
import { Loading } from '../../layout/components/Loading'
import { UserReport } from '../../layout/components/UserReport'
import { useExternalData } from '../../layout/hooks/useExternalData'
import { Projects } from './components/Projects'

export function Home() {
  const {
    user,
    username: activeUsername,
    actions: { setUserData, setNewUser },
  } = useContext(ProjectsContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const usernameParam = searchParams.get('username')
  const request = useExternalData<UserDataType>(
    `users/${activeUsername}`,
    mainGithubClient,
    !user && usernameParam === activeUsername,
  )
  const userIsLoading = request.wasSuccess === true && !user

  useEffect(() => {
    if (usernameParam && usernameParam !== activeUsername) {
      setNewUser(usernameParam)
    } else if (usernameParam === null) {
      setSearchParams(new URLSearchParams({ username: activeUsername }))
    }
  }, [activeUsername, searchParams, setSearchParams, setNewUser, usernameParam])

  useEffect(() => {
    if (userIsLoading) {
      setUserData(request.data!)
    }
  }, [request, setUserData, userIsLoading])

  if (request.isLoading || userIsLoading) {
    return <Loading />
  }

  return request.wasSuccess && user ? (
    <main>
      <UserReport user={user!} />
      <Projects />
    </main>
  ) : (
    <span className="block text-center col-span-2">
      <i className="fa-solid fa-x mr-2"></i>
      Usuário inválido
    </span>
  )
}
