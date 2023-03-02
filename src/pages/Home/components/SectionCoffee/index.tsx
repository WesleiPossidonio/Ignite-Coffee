import { CoffeeList } from '../../../../data/cardCoffee'
import { CardsCoffee } from '../CardsCoffee'
import { ContainerCards, TitleSection, ContainerSectionCoffee } from './style'

export const SectionCoffee = () => {
  return (
    <ContainerSectionCoffee>
      <TitleSection>Nossos Cafés</TitleSection>
      <ContainerCards>
        {CoffeeList.map((coffee) => {
          return <CardsCoffee key={coffee.id} coffee={coffee}></CardsCoffee>
        })}
      </ContainerCards>
    </ContainerSectionCoffee>
  )
}
