import { Minus, Plus } from 'phosphor-react'

import { ButtonIcon, QuantityCoffeeContainer } from './style'

interface QuantityCoffeeProps {
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export const QuantityCoffee = ({
  onIncrease,
  onDecrease,
  quantity,
}: QuantityCoffeeProps) => {
  return (
    <QuantityCoffeeContainer>
      <ButtonIcon disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </ButtonIcon>

      <input type="number" readOnly value={quantity} />

      <ButtonIcon onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </ButtonIcon>
    </QuantityCoffeeContainer>
  )
}
