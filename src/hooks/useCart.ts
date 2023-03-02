import { useContext } from 'react'

import { CartContext } from '../contexts/cartProductContext'

export function useCart() {
  const context = useContext(CartContext)
  return context
}
