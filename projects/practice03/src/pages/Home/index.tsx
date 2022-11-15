import { MyUserData, myUserRepos } from '../../code/data'
import { Loading } from '../../layout/components/Loading'
import { PostBox } from '../../layout/components/PostBox'
import { UserReport } from '../../layout/components/UserReport'
import { Div } from './styles'

export function Home() {
  const isLoading = false

  return !isLoading ? (
    <main>
      <UserReport user={MyUserData} />
      <Div.inputContainer className="input-container">
        <div className="flex items-center justify-between mt-10 lh-160">
          <strong className="text-lg text-Gray-200">Projetos</strong>
          <span className="text-sm text-Blue-500">
            {MyUserData.public_repos} projetos
          </span>
        </div>
        <input
          type="text"
          className="block w-full mt-3 px-4 h-12 bg-Gray-900 lh-160 placeholder:text-Blue-600 rounded-md"
          placeholder="Buscar por projeto"
        />
      </Div.inputContainer>
      <div className="post-boxes mt-12 grid grid-cols-2 gap-x-8">
        {myUserRepos.map((repo) => (
          <div className="col-span-1" key={repo.id}>
            <PostBox repository={repo} />
          </div>
        ))}
      </div>
    </main>
  ) : (
    <Loading />
  )
}
