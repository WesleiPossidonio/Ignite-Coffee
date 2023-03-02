import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  background: ${(props) => props.theme.yellow};
  border: none;
  border-radius: 6px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;

  text-transform: uppercase;
  transition: 0.4s;
  font-stretch: 100;
  margin-top: 0.7rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
