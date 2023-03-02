import { SectionAbout, SectionCoffee } from './components'
import { ContainerHome } from './style'

export const Home = () => {
  return (
    <ContainerHome>
      <SectionAbout />
      <SectionCoffee />
    </ContainerHome>
  )
}
