import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'

import { DefaultLayout } from '../layouts/defaultLayout'
import { Cart, ConfirmedProducts, Home } from '../pages'

export const Router = () => {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/pedido-confirmado" element={<ConfirmedProducts />} />
        </Route>
      </Routes>
    </Routers>
  )
}
