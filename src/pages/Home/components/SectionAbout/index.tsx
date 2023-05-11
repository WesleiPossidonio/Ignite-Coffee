import Aos from 'aos'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import 'aos/dist/aos.css'

import { useEffect } from 'react'

import HomeImage from '../../../../assets/home-image.svg'
import {
  ContainerAboutProduct,
  ContainerHome,
  ContainerTextAbout,
  IconCart,
  IconCoffe,
  IconPackage,
  IconTimer,
  TextHome,
  TitleHome,
} from './style'

export const SectionAbout = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <ContainerHome className="container">
      <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1200">
        <TitleHome>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </TitleHome>
        <TextHome>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </TextHome>
        <ContainerTextAbout>
          <ContainerAboutProduct>
            <div>
              <IconCart>
                <ShoppingCart weight="fill" size={16} />
              </IconCart>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <IconTimer>
                <Timer weight="fill" size={16} />
              </IconTimer>
              <p>Entrega rápida e rastreada</p>
            </div>
          </ContainerAboutProduct>
          <ContainerAboutProduct>
            <div>
              <IconPackage>
                <Package weight="fill" size={16} />
              </IconPackage>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <IconCoffe>
                <Coffee weight="fill" size={16} />
              </IconCoffe>
              <p>O café chega fresquinho até você</p>
            </div>
          </ContainerAboutProduct>
        </ContainerTextAbout>
      </div>

      <img
        src={HomeImage}
        alt=""
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1200"
      />
    </ContainerHome>
  )
}
