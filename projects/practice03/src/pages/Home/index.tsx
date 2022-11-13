import { MyUserData } from '../../code/data'
import { PostBox } from '../../layout/components/PostBox'
import { UserReport } from '../../layout/components/UserReport'
import { Div } from './styles'

export function Home() {
  return (
    <main>
      <UserReport user={MyUserData} />
      <Div.inputContainer className="input-container">
        <div className="flex items-center justify-between mt-10 lh-160">
          <strong className="text-lg text-Gray-200">Publicações</strong>
          <span className="text-sm text-Blue-500">6 publicações</span>
        </div>
        <input
          type="text"
          className="block w-full mt-3 px-4 h-12 bg-Gray-900 lh-160 placeholder:text-Blue-600 rounded-md"
          placeholder="Buscar conteúdo"
        />
      </Div.inputContainer>
      <div className="post-boxes mt-12 grid grid-cols-2 gap-x-8">
        <div className="col-span-1">
          <PostBox />
        </div>
        <div className="col-span-1">
          <PostBox />
        </div>
      </div>
    </main>
  )
}
