import { Trash } from 'phosphor-react'

import { QuantityCoffee } from '../../../../components'
import { CartItem } from '../../../../contexts/cartProductContext'
import { useCart } from '../../../../hooks/useCart'
import { FormatMoney } from '../../../../utils/formatMoney'
import {
  ActionContainer,
  CoffeCartCardContainer,
  RemoveButton,
  TitleCoffe,
} from './style'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export const CoffeeCartCard = ({ coffee }: CoffeeCartCardProps) => {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity

  const formattedPrice = FormatMoney(coffeeTotal)

  return (
    <CoffeCartCardContainer>
      <div>
        <img src={`/images/${coffee.image}`} alt="" />
        <div>
          <TitleCoffe>{coffee.title}</TitleCoffe>
          <ActionContainer>
            <QuantityCoffee
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionContainer>
        </div>
        <p>RS {formattedPrice}</p>
      </div>
    </CoffeCartCardContainer>
  )
}
