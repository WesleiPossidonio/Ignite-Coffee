import { ReactNode } from 'react'

import { AddressSubTitle, AddressTitle, SectionTitleContainer } from './style'

interface SectionTitleProps {
  title: string
  subTitle: string
  icon: ReactNode
}

export const SectionTitle = ({ title, subTitle, icon }: SectionTitleProps) => {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <AddressTitle>{title}</AddressTitle>
        <AddressSubTitle>{subTitle}</AddressSubTitle>
      </div>
    </SectionTitleContainer>
  )
}
