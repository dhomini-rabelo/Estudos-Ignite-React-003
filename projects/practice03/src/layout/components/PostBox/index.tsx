import { RepositoryType } from '../../../code/types/repository'
import { Div } from './styles'

export function PostBox({ repository }: { repository: RepositoryType }) {
  return (
    <Div.container className="p-8 cursor-pointer">
      <div className="flex items-center justify-between">
        <strong className="text-xl text-Gray-100">{repository.name}</strong>
        <span className="text-Blue-500 text-sm">
          {new Date(repository.created_at).toLocaleDateString()}
        </span>
      </div>
      <p className="lh-160 mt-5">{repository.description}</p>
    </Div.container>
  )
}
