import styled from 'styled-components'

import { SectionBaseStyle } from '../../style'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`
export const DetailsContainer = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`
export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const TextStyle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 0.875rem;
  line-height: 130%;
`

export const TextCurrency = styled(TextStyle)`
  font-weight: 400;
`
export const TextPriceTotalOrder = styled(TextStyle)`
  font-size: 1.25rem;
  font-weight: 700;
`
