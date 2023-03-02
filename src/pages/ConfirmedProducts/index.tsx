import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import ConfirmedOrder from '../../assets/confirmed-order.svg'
import { OrderData } from '../Cart'
import { paymentMethods } from '../Cart/components/CompleteFormOrder/PaymentMethodOption'
import {
  ConfirmedProductsContainer,
  ContainerTextDatalsOrders,
  IconCurrency,
  IconMap,
  IconTimer,
  OrderDatailsContainer,
  SubTitlePage,
  TitlePage,
} from './style'

interface locationTypes {
  state: OrderData
}

export const ConfirmedProducts = () => {
  const { state } = useLocation() as unknown as locationTypes

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <ConfirmedProductsContainer>
      <div>
        <TitlePage>Uhu! Pedido Confirmado</TitlePage>
        <SubTitlePage>
          Agora é só aguardar que logo o café chegará até você
        </SubTitlePage>
      </div>

      <section>
        <OrderDatailsContainer>
          <ContainerTextDatalsOrders>
            <IconMap>
              <MapPin weight="fill" size={16} />
            </IconMap>
            <p>
              Entrega em{' '}
              <strong>
                {state.street}, nº{state.number}
              </strong>{' '}
              <br />
              {state.district} - {state.city}, {state.uf}
            </p>
          </ContainerTextDatalsOrders>
          <ContainerTextDatalsOrders>
            <IconTimer>
              <Timer weight="fill" size={16} />
            </IconTimer>
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </p>
          </ContainerTextDatalsOrders>
          <ContainerTextDatalsOrders>
            <IconCurrency>
              <CurrencyDollar size={16} />
            </IconCurrency>
            <p>
              Pagamento na entrega <br />
              <strong>{paymentMethods[state.paymentMethod].label}</strong>
            </p>
          </ContainerTextDatalsOrders>
        </OrderDatailsContainer>
        <img src={ConfirmedOrder} alt="" />
      </section>
    </ConfirmedProductsContainer>
  )
}
