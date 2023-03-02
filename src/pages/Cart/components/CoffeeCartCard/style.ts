import styled from 'styled-components'

export const CoffeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
      mix-blend-mode: multiply;
    }

    > p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 130%;

      align-self: flex-start;
      font-weight: 700;
    }
  }
`

export const TitleCoffe = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
`

export const ActionContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
    padding: 0.3rem 0.5rem;
    background: ${(props) => props.theme['base-button']};
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  height: 100%;
  background: ${(props) => props.theme['base-button']};

  padding: 0 0.5rem;
  border: none;
  border-radius: 6px;
  transition: 0.4s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
