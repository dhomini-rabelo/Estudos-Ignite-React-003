import { Table } from "./styles";

export function DataList() {

  return (
    <main className="w-full mx-auto p-[0_1.5rem]">
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

