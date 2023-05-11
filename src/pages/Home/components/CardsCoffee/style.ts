import styled from 'styled-components'

export const ContainerCoffeeCards = styled.div`
  width: 16rem;
  height: 19.375rem;
  padding: 1rem;
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  @media (max-width: 855px) {
    margin-bottom: 2rem;
  }
`

export const ImageCoffee = styled.img`
  width: 7.5rem;
  margin-top: -4.5rem;
  margin-bottom: 0.75rem;
  mix-blend-mode: multiply;
  z-index: 10;
`

export const ContainerTagsDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};

    margin-bottom: 1.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background-color: ${(props) => props.theme['yellow-light']};
  }
`

export const NameProduct = styled.h3`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;

  margin-bottom: 0.5rem;
`

export const DescriptionProduct = styled.p`
  text-align: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};

  margin-bottom: 2.0625rem;
`

export const FooterCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4375rem;
`

export const Price = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;

  text-align: right;

  color: ${(props) => props.theme['base-title']};

  span {
    font-size: 0.8rem;
    margin: 0.125rem;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;

  padding: 0.5rem;
  gap: 8px;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['purple-dark']};

  border: none;
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
