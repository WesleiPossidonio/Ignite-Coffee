import { MapPinLine, CurrencyDollar } from 'phosphor-react'

import { SectionTitle } from '../SectionTitle'
import { AddressForm } from './AddressForm'
import { PaymentMethodOption } from './PaymentMethodOption'
import {
  CompleteFormOrderContainer,
  FormSectionContainer,
  TitleText,
} from './style'

export const CompleteFormOrder = () => {
  return (
    <CompleteFormOrderContainer>
      <TitleText>Complete seu pedido</TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subTitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} />}
        />

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subTitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} className="icon" />}
        />
        <PaymentMethodOption />
      </FormSectionContainer>
    </CompleteFormOrderContainer>
  )
}
