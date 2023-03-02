import styled from 'styled-components'

export const QuantityCoffeeContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;

  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-input']};

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};

    &:focus {
      outline: none;
    }
  }

  > svg {
    font-size: ;
  }
`
export const ButtonIcon = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.purple};
  transition: 0.4s;
  &:disabled {
    opacity: 0.4;
  }
  &:not(:disabled):hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
