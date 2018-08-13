import React from 'react'
import styled from 'styled-components'
import {Wheels} from './Wheels'

const TeslaWrapper = styled.div`
  position: relative;
`

const Car = styled.img.attrs({
  src: '/assets/tesla.jpg'
})`
  max-width: 100%;
  display: block;
`

export const Tesla = ({speed, wheelSize = 'small'}) => (
  <TeslaWrapper>
    <Car />
    <Wheels size={wheelSize} speed={speed} />
  </TeslaWrapper>
)
