import { useCart } from '../../../../hooks/useCart'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { TitleText } from '../CompleteFormOrder/style'
import { ConfirmationSection } from './ConfirmationSection'
import { DetailsContainer, SelectedCoffeesContainer } from './style'

export const SelectedCoffees = () => {
  const { cartItems } = useCart()
  return (
    <SelectedCoffeesContainer>
      <TitleText>Cafés Selecionados</TitleText>
      <DetailsContainer>
        {cartItems.map((item) => {
          return <CoffeeCartCard key={item.id} coffee={item} />
        })}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
