import styled from 'styled-components'

export const ContainerHeader = styled.div`
  width: 100%;
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  background: ${(props) => props.theme.background};

  position: sticky;
  top: 0;
  left: 0%;
  z-index: 99;

  > img {
    width: 5.309375rem;
    height: 2.5rem;
  }

  @media (min-width: 1700px) {
    padding: 2rem 20rem;
  }

  @media (max-width: 1024px) {
    padding: 2rem 2rem;
  }
`
export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`

export const ButtonMap = styled.button`
  width: 8.9375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  border: none;
  border-radius: 6px;
  padding: 0.5rem;

  background-color: ${(props) => props.theme['purple-light']};

  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['purple-dark']};
`

export const ButtonCart = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  position: relative;

  background: ${(props) => props.theme['yellow-light']};
  border: none;
  border-radius: 8px;

  color: ${(props) => props.theme['yellow-dark']};

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;

    background: ${(props) => props.theme['yellow-dark']};
  }
`
