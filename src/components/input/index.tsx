import { forwardRef, InputHTMLAttributes } from 'react'

import {
  InputStyleContainer,
  InputStyled,
  InputWrapper,
  RightText,
} from './style'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled ref={ref} {...props} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <p>{error}</p>}
      </InputWrapper>
    )
  }
)
