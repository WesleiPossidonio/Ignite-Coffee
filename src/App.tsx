import { ThemeProvider } from 'styled-components'

import { CartContextProvider } from './contexts/cartProductContext'
import { Router } from './routers/router'
import { GlobalStyle } from './styles/global'
import { defaultThemes } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
