import { useContext, useEffect } from 'react'
import { ProjectsContext } from '../../code/context/projects'
import { myUserRepos } from '../../code/data'
import { UserDataType } from '../../code/types/user'
import { mainGithubClient } from '../../core/settings'
import { Loading } from '../../layout/components/Loading'
import { UserReport } from '../../layout/components/UserReport'
import { useExternalData } from '../../layout/hooks/useExternalData'
import { Projects } from './components/Projects'

export function Home() {
  const {
    currentUser,
    actions: { setUserData },
  } = useContext(ProjectsContext)
  const request = useExternalData<UserDataType>(
    'users/dhomini-rabelo',
    mainGithubClient,
  )

  useEffect(() => {
    if (request.wasSuccess === true) {
      setUserData(request.data!)
    }
  }, [request, setUserData])

  if (request.isLoading) {
    return <Loading />
  }

  return request.wasSuccess ? (
    <main>
      <UserReport user={currentUser} />
      <Projects userRepos={myUserRepos} />
    </main>
  ) : (
    <span className="block text-center col-span-2">
      <i className="fa-solid fa-x mr-2"></i>
      Usuário inválido
    </span>
  )
}
