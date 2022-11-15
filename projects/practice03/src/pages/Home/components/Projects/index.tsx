import { RepositoryType } from '../../../../code/types/repository'
import { PostBox } from '../../../../layout/components/PostBox'
import { Div } from './styles'

export function Projects({ userRepos }: { userRepos: RepositoryType[] }) {
  return (
    <>
      <Div.inputContainer className="input-container">
        <div className="flex items-center justify-between mt-10 lh-160">
          <strong className="text-lg text-Gray-200">Projetos</strong>
          <span className="text-sm text-Blue-500">
            {userRepos.length} projetos
          </span>
        </div>
        <input
          type="text"
          className="block w-full mt-3 px-4 h-12 bg-Gray-900 lh-160 placeholder:text-Blue-600 rounded-md"
          placeholder="Buscar por projeto"
        />
      </Div.inputContainer>
      <div className="post-boxes mt-12 grid grid-cols-2 gap-x-8">
        {userRepos.length > 0 ? (
          userRepos.map((repo) => (
            <div className="col-span-1" key={repo.id}>
              <PostBox repository={repo} />
            </div>
          ))
        ) : (
          <span className="block text-center col-span-2">
            <i className="fa-solid fa-x mr-2"></i>
            Nenhum repositório público encontrado
          </span>
        )}
      </div>
    </>
  )
}
