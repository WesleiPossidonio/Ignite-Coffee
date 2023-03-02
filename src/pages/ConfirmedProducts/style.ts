import styled from 'styled-components'

export const ConfirmedProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;
  padding: 4rem 10rem;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    > img {
      width: min(40vw, 30.75rem);
      height: 18.3125rem;
    }
  }

  @media (min-width: 1700px) {
    padding: 2rem 26rem;
  }

  @media (max-width: 1152px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 1013px) {
    > section {
      justify-content: center;
      align-items: center;

      > img {
        width: 100%;
        margin-top: 2rem;
      }
    }
  }
`

export const TitlePage = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;

  color: ${(props) => props.theme['yellow-dark']};
`
export const SubTitlePage = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
  font-stretch: 100;

  color: ${(props) => props.theme['base-subtitle']};
`

export const OrderDatailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme.background};
  min-width: min(40vw, 32rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  @media (max-width: 1013px) {
    min-width: 100%;
  }
`

export const ContainerTextDatalsOrders = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }
`

const IconStyle = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0.5rem;
  border-radius: 50%;
`

export const IconTimer = styled(IconStyle)`
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
`

export const IconMap = styled(IconStyle)`
  background: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
`

export const IconCurrency = styled(IconStyle)`
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
`
