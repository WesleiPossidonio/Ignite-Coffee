import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { PaymentMethodInput } from '../PaymentMethodInput'
import { PaymentMethodOptionContainer } from './style'

export const paymentMethods = {
  credid: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export const PaymentMethodOption = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodErros = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentMethodOptionContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          icon={icon}
          label={label}
          value={key}
          id={key}
          {...register('paymentMethod')}
        />
      ))}
      {paymentMethodErros && <p>{paymentMethodErros}</p>}
    </PaymentMethodOptionContainer>
  )
}
