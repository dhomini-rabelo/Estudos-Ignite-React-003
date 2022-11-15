import styled from 'styled-components'

export const Div = {
  header: styled.div`
    margin-top: -7.2rem;

    h1 {
      font-size: 1.5rem;
    }

    a {
      border-bottom: 1px solid transparent;
    }

    a:hover {
      border-bottom: 1px solid var(--Blue-300);
    }
  `,

  content: styled.div`
    * {
      all: revert;
    }

    img {
      max-width: 100% !important;
    }

    a {
      color: var(--Blue-300);
      text-decoration: none;
    }
  `,
}
