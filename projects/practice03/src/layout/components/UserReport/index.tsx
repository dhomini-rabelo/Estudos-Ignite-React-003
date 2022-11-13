import { Div } from './styles'

export function UserReport() {
  return (
    <Div.container className="flex p-8 gap-x-8">
      <div className="profile-image">
        <img
          src="/images/avatar.svg"
          alt="github-profile-image"
          className="h-36 x-36"
        />
      </div>
      <div className="profile-content flex flex-col pt-2 grow">
        <div className="flex justify-between text-Blue-300 items-start">
          <h1 className="text-Gray-100 text-2xl font-bold lh-130">
            Cameron Williamson
          </h1>
          <a className="github-link" href="#">
            GITHUB
            <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
          </a>
        </div>
        <p className="lh-160 mt-1 text-xs">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="mt-6 flex items-center gap-x-6 lh-160">
          <div className="icon-text flex gap-x-2 items-center">
            <i className="fa-brands fa-github"></i>
            <span>cameronwll</span>
          </div>
          <div className="icon-text flex gap-x-2 items-center">
            <i className="fa-solid fa-building"></i>
            <span>Rocketseat</span>
          </div>
          <div className="icon-text flex gap-x-2 items-center">
            <i className="fa-solid fa-user-group"></i>
            <span>32 seguidores</span>
          </div>
        </div>
      </div>
    </Div.container>
  )
}
