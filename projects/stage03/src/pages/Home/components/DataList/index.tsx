import { MagnifyingGlass } from 'phosphor-react'
import { Form, Table } from "./styles";

export function DataList() {

  return (
    <main className="w-full mx-auto p-[0_1.5rem] mt-16">
      <Form.search className="flex gap-4">
        <input type="text" className="grow rounded-md bg-Gray-900 text-Gray-300 p-4 placeholder:text-Gray-500" placeholder="Busque por transações" />
        <button className="flex items-center gap-3 p-4 text-Green-300 font-semibold rounded-md hover:bg-Green-500 hover:text-white" type="submit">
          <MagnifyingGlass size={20} />
          <span>Buscar</span>
        </button>
      </Form.search>
      <Table.main className="w-full mt-6">
        <tbody>
          <tr>
            <td>Trabalho</td>
            <td className="income">R$ 5.600,00</td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td>Hambúrguer</td>
            <td className="outcome">- R$ 600,00</td>
            <td>Alimentação</td>
            <td>13/04/2022</td>
          </tr>
        </tbody>
      </Table.main>
    </main>
  )
}

