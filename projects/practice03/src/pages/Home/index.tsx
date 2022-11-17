import { useContext, useEffect } from 'react'
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
    username,
    actions: { setUserData },
  } = useContext(ProjectsContext)
  const request = useExternalData<UserDataType>(
    `users/${username}`,
    mainGithubClient,
    !user,
  )
  const userIsLoading = request.wasSuccess === true && !user

  useEffect(() => {
    if (userIsLoading) {
      setUserData(request.data!)
    }
  }, [request, setUserData, userIsLoading])

  if (request.isLoading || userIsLoading) {
    return <Loading />
  }

  return request.wasSuccess ? (
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
