import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import Logo from '../../assets/Logo.svg'
import { useCart } from '../../hooks/useCart'
import {
  ButtonMap,
  ContainerHeader,
  ContainerButton,
  ButtonCart,
} from './style'

export const Header = () => {
  const { cartQuantity } = useCart()
  return (
    <ContainerHeader>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>

      <ContainerButton>
        <ButtonMap>
          <MapPin size={21} weight="fill" /> Macaé, RJ
        </ButtonMap>

        <NavLink to="/carrinho">
          <ButtonCart>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={21} weight="fill" />
          </ButtonCart>
        </NavLink>
      </ContainerButton>
    </ContainerHeader>
  )
}
