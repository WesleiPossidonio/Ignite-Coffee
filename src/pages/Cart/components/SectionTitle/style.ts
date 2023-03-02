import styled from 'styled-components'

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  .icon {
    color: ${(props) => props.theme.purple};
  }
`

export const AddressTitle = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};
`

export const AddressSubTitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};
`
