import { MyUserData, myUserRepos } from '../../code/data'
import { Loading } from '../../layout/components/Loading'
import { UserReport } from '../../layout/components/UserReport'
import { Projects } from './components/Projects'

export function Home() {
  const isLoading = false

  return !isLoading ? (
    <main>
      <UserReport user={MyUserData} />
      <Projects userRepos={myUserRepos} />
    </main>
  ) : (
    <Loading />
  )
}
