import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

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

/* eslint-disable */
type ButtonTransactionProps = { isIncome: boolean }

export const Button = {
  transactionType: styled(RadioGroup.Item) <ButtonTransactionProps>`
    border: 0;
    background-color: var(--Gray-700);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    color: var(--Gray-300);

    &[data-state="checked"] {
      color: white;
      background-color: ${props => props.isIncome ? 'var(--Green-500)' : 'var(--Red-500)'};
      
      svg {
        color: white;
      }
    }
    
    &[data-state="unchecked"]:hover {
      background-color: var(--Gray-600);
    }
  `,
}
/* eslint-enable */
