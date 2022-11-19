import { RepositoryType } from '../../../code/types/repository'
import { Link } from 'react-router-dom'
import { Div } from './styles'

export function PostBox({ repository }: { repository: RepositoryType }) {
  return (
    <Link
      to={`/projeto-github/${repository.full_name}/${repository.default_branch}`}
      className="block"
    >
      <Div.container className="p-8 cursor-pointer">
        <div className="flex items-center justify-between">
          <strong className="text-xl text-Gray-100">{repository.name}</strong>
          <div className="text-Blue-500 text-sm flex items-center gap-x-1">
            {repository.language && (
              <span>
                <i
                  className={`devicon-${repository.language.toLowerCase()}-plain text-Blue-500`}
                ></i>
              </span>
            )}
            <span>{new Date(repository.created_at).toLocaleDateString()}</span>
          </div>
        </div>
        <p className="lh-160 mt-5">{repository.description || '...'}</p>
      </Div.container>
    </Link>
  )
}
