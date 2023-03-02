import styled from 'styled-components'

export const OrderCartContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  padding: 4rem 10rem;

  @media (min-width: 1700px) {
    padding: 2rem 26rem;
  }

  @media (max-width: 1024px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
