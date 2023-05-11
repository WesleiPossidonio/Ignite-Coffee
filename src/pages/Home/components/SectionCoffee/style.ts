import styled from 'styled-components'

export const ContainerSectionCoffee = styled.section`
  margin-top: 7rem;
`

export const TitleSection = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: min(5.5vw, 2rem);
  line-height: 130%;
  margin-bottom: 4rem;

  color: ${(props) => props.theme['base-title']};
`

export const ContainerCards = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 2rem;
  justify-content: center;
`
