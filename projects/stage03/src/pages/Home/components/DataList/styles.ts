import styled from "styled-components";


export const Form = {
  search: styled.form`


  button {
    border: 1px solid var(--Green-300);
  }
  
  button:hover {
    border: 1px solid var(--Green-500);
    transition: background-color 0.2s, color 0.2s, border 0.2s;
  }

  `,
}


export const Table = {
  main: styled.table`
    border-collapse: separate;
    border-spacing: 0 0.5rem;

    tr td:first-child {
      width: 40%;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    
    tr td:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    td {
      padding: 1.25rem 2rem;
      background-color: var(--Gray-700);
    }

    td.income {
      color: var(--Green-300);
    }
    
    td.outcome {
      color: var(--Red-300);
    }
  `,
}