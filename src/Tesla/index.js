import React from 'react'
import styled from 'styled-components'
import {FixedAspectRatio} from '../FixedAspectRatio'
import {Wheels} from './Wheels'

const TeslaWrapper = styled(FixedAspectRatio).attrs({
  w: 2.55,
  h: 1
})`
  @media (max-width: 500px) {
    margin: 0 -1.4rem;
  }
`

const Car = styled.img.attrs({
  src: '/assets/tesla.jpg'
})`
  max-width: 100%;
  display: block;
`

export const Tesla = ({speed, wheelSize}) => (
  <TeslaWrapper>
    <Car />
    <Wheels size={wheelSize} speed={speed} />
  </TeslaWrapper>
)
