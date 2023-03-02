import { Button } from '../../../../components'
import { useCart } from '../../../../hooks/useCart'
import { FormatMoney } from '../../../../utils/formatMoney'
import {
  ConfirmationSectionContainer,
  TextCurrency,
  TextPriceTotalOrder,
} from './style'

const DELIVERY_PRICE = 3.5

export const ConfirmationSection = () => {
  const { cartItensTotal, cartQuantity } = useCart()

  const cartTotal = DELIVERY_PRICE + cartItensTotal

  const formattedItemsTotal = FormatMoney(cartItensTotal)
  const formattedCartTotal = FormatMoney(cartTotal)
  const formatDeliveryPrice = FormatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <TextCurrency>Total de Itens</TextCurrency>
        <TextCurrency>{formattedItemsTotal}</TextCurrency>
      </div>
      <div>
        <TextCurrency>Entrega</TextCurrency>
        <TextCurrency>{formatDeliveryPrice}</TextCurrency>
      </div>
      <div>
        <TextPriceTotalOrder>Total</TextPriceTotalOrder>
        <TextPriceTotalOrder>{formattedCartTotal}</TextPriceTotalOrder>
      </div>
      <Button
        text="confirmar pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
