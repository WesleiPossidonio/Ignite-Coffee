import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import 'aos/dist/aos.css'

import { QuantityCoffee } from '../../../../components'
import { useCart } from '../../../../hooks/useCart'
import { FormatMoney } from '../../../../utils/formatMoney'
import {
  ButtonCart,
  ContainerButton,
  ContainerCoffeeCards,
  ContainerTagsDescription,
  DescriptionProduct,
  FooterCard,
  ImageCoffee,
  NameProduct,
  Price,
} from './style'

export interface CardCoffeeTypes {
  title: string
  description: string
  tagsDescriptions: string[]
  image: string
  price: number
  id: string
}

interface CoffeeProps {
  coffee: CardCoffeeTypes
}

export const CardsCoffee = ({ coffee }: CoffeeProps) => {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  const { addCoffeeToCart } = useCart()

  function handleAddToCard() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  const currencyMoney = FormatMoney(coffee.price)

  return (
    <ContainerCoffeeCards>
      <ImageCoffee src={`/images/${coffee.image}`} alt="" />
      <ContainerTagsDescription>
        {coffee.tagsDescriptions.map((tags) => {
          return <span key={`${coffee.id}${tags}`}>{tags}</span>
        })}
      </ContainerTagsDescription>
      <NameProduct>{coffee.title}</NameProduct>
      <DescriptionProduct>{coffee.description}</DescriptionProduct>
      <FooterCard>
        <Price>
          <span>RS</span>
          {currencyMoney}
        </Price>
        <QuantityCoffee
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={quantity}
        />
        <ContainerButton>
          <ButtonCart onClick={handleAddToCard}>
            <ShoppingCart size={25} weight="fill" />
          </ButtonCart>
        </ContainerButton>
      </FooterCard>
    </ContainerCoffeeCards>
  )
}
