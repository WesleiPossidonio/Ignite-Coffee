import styled from 'styled-components'

import { SectionBaseStyle } from '../../style'

export const CompleteFormOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const TitleText = styled.p`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};
`

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.54rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
    width: 100%;
  }

  .complement {
    grid-column: span 2;
  }

  @media (max-width: 900px) {
    grid-template-columns: 30% 40% 27%;
  }
`

export const PaymentMethodOptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11.166875rem, 1fr));
  gap: 0.75rem;

  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${(props) => props.theme['base-error']};
  }
`
