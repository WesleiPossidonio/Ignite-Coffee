import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

 @media (max-width: 1400px) {
    font-size: 87%;
  }

  @media (max-width: 900px) {
    font-size: 80%;
  }

 }

 body {
    background-color: ${(props) => props.theme.background};
  
 }

.container {
  padding: 4rem 10rem;

  @media (min-width: 1700px) {
    padding: 8rem 20rem;
  }

  @media (max-width: 1024px) {
    padding: 4rem 6rem;
  }

  @media (max-width: 855px) {
    padding: 4rem 2rem;
  }
}


 input::-webkit-outer-spin-button,
 input::-webkit-inner-spin-button {
   -webkit-appearance: none;
   margin: 0;
 }

 input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}

button {
   cursor: pointer;
}


::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme['base-button']}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${(props) => props.theme.purple}
  }

`
