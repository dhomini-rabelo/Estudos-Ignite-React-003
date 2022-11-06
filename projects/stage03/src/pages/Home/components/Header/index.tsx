export function Header() {

  return (
    <header className="bg-Gray-900 p-[2.5rem_0_7.5rem]">
      <div className="content mx-auto px-6 flex justify-between items-center">
        <img src="/images/logo.svg" alt="project-logo" />
        <button className="h-[3.125rem] border-0 bg-Green-500 text-white font-bold p-[0_1.25rem] rounded-md cursor-pointer hover:bg-Green-700">Nova Transação</button>
      </div>
    </header>
  )
}

