import { UserDataType } from '../../../code/types/user'
import { Div } from './styles'

export function UserReport({ user }: { user: UserDataType }) {
  return (
    <Div.container className="flex p-8 gap-x-8">
      <div className="profile-image w-40">
        <img
          src={user.avatar_url}
          alt="github-profile-image"
          className="h-36 w-40"
        />
      </div>
      <div className="profile-content flex flex-col pt-2 w-full">
        <div className="flex justify-between text-Blue-300 items-start">
          <h1 className="text-Gray-100 text-2xl font-bold lh-130">
            {user.name}
          </h1>
          <a
            className="github-link"
            target="_blank"
            rel="noreferrer"
            href={user.html_url}
          >
            GITHUB
            <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
          </a>
        </div>
        <p className="text-xs mt-1">
          {user.bio.split('\r\n').map((partialText, index, splitArray) =>
            index + 1 !== splitArray.length ? (
              <span key={index}>
                {partialText}
                <br />
              </span>
            ) : (
              <span key={index}>{partialText}</span>
            ),
          )}
        </p>
        <div className="mt-4 flex items-center gap-x-6 gap-y-2 lh-160 flex-wrap">
          <div className="icon-text flex gap-x-2 items-center">
            <i className="fa-brands fa-github"></i>
            <span>{user.login}</span>
          </div>
          {user.company && (
            <div className="icon-text flex gap-x-2 items-center">
              <i className="fa-solid fa-building"></i>
              <span>{user.company}</span>
            </div>
          )}
          {user.location && (
            <div className="icon-text flex gap-x-2 items-center">
              <i className="fa-solid fa-location-dot"></i>
              <span>{user.location}</span>
            </div>
          )}
          {user.followers && (
            <div className="icon-text flex gap-x-2 items-center">
              <i className="fa-solid fa-user-group"></i>
              <span>{user.followers} seguidores</span>
            </div>
          )}
          {user.blog && (
            <div className="icon-text flex gap-x-2 items-center">
              <i className="fa-solid fa-link"></i>
              <a
                href={user.blog}
                target="_blank"
                rel="noreferrer"
                className="hover:text-Blue-300"
              >
                {user.blog}
              </a>
            </div>
          )}
        </div>
      </div>
    </Div.container>
  )
}
