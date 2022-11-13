import { Div } from './styles'

export function PostBox() {
  return (
    <Div.container className="p-8">
      <div className="flex items-center-justify-between">
        <strong className="text-xl text-Gray-100">
          JavaScript data types and data structures
        </strong>
        <span className="text-Blue-500 text-sm">06/12/22</span>
      </div>
      <p className="lh-160 mt-5">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in
      </p>
    </Div.container>
  )
}
