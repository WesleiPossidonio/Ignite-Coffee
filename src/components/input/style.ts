import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme['base-error']};
  }
`

interface InputStyleContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: 0.4s;
  overflow: hidden;

  &:focus-within {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${(props) => props.theme['base-error']};
    `}
`

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;

  font-size: 0.75rem;
  padding: 0 0.75rem;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
`
