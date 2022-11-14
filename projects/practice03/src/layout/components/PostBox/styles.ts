import styled from 'styled-components'

export const Div = {
  container: styled.div`
    border-radius: 10px;
    border: 2px solid transparent;
    height: 10rem;

    &:hover {
      border: 2px solid var(--Blue-600);
    }
  `,
}
