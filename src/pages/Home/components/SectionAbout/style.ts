import styled from 'styled-components'

import BgIntro from '../../../../assets/BackgroundIntro.svg'

export const ContainerHome = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  background: ${() => `url(${BgIntro}) no-repeat center`};
  background-size: cover;

  > img {
    width: min(35vw, 29.75rem);
    height: 22.5rem;
  }

  @media (max-width: 855px) {
    justify-content: center;
    flex-wrap: wrap-reverse;

    > img {
      width: min(75vw, 29.75rem);
    }
  }

  @media (max-width: 417px) {
    gap: 0.5rem;
  }
`

export const TitleHome = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: min(3vw, 3rem);
  line-height: 130%;

  color: ${(props) => props.theme['base-title']};

  margin-bottom: 1rem;

  @media (max-width: 855px) {
    font-size: min(5.7vw, 3rem);
  }
`

export const TextHome = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: min(3.33vw, 1.25rem);
  line-height: 130%;

  margin-bottom: min(3.5vw, 4.125rem);

  color: ${(props) => props.theme['base-subtitle']};
`

export const ContainerTextAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ContainerAboutProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 0.65rem;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: min(3vw, 1rem);
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};
  }
`

export const IconCart = styled.div`
  padding: 0.5rem;
  background: ${(props) => props.theme.yellow};
  border-radius: 50%;
  color: ${(props) => props.theme.white};
`

export const IconTimer = styled.div`
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 50%;
  color: ${(props) => props.theme.white};
`

export const IconPackage = styled.div`
  padding: 0.5rem;
  background: ${(props) => props.theme['base-text']};
  border-radius: 50%;
  color: ${(props) => props.theme.white};
`

export const IconCoffe = styled.div`
  padding: 0.5rem;
  background: ${(props) => props.theme.purple};
  border-radius: 50%;
  color: ${(props) => props.theme.white};
`
