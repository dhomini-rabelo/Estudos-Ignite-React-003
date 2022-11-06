import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Div = {
  overlay: styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);
  `,

  content: styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    input {
      display: block;
      border-radius: 6px;
      border: 0;
      background-color: var(--Gray-900);
      color: var(--Gray-300);
      padding: 1rem;
    }

    input::placeholder {
      color: var(--Gray-500);
    }

    button[type='submit'] {
      height: 3.625rem;
      border: 0;
      background-color: var(--Green-500);
      color: white;
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:hover {
        background-color: var(--Green-700);
        transition: background-color 0.2s;
      }
    }
  `,
}
