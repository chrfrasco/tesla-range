import React from 'react'
import styled, {keyframes} from 'styled-components'
import {FixedAspectRatio} from '../FixedAspectRatio'

const spin = keyframes`
  100% { transform: rotate(360deg); }
`

const getRotationDuration = speed => 0.8 - ((speed - 45) / 62.5)

const WheelWrapper = styled(FixedAspectRatio)`
  width: 9%;

  position: absolute;
  top: 48%;

  animation: ${spin} ${({speed}) => getRotationDuration(speed)}s infinite linear;
  animation-direction: reverse;

  &:first-of-type {
    left: 24.9%;
  }

  &:last-of-type {
    right: 26.7%;
  }
`

const Wheel = styled.img.attrs({
  src: ({size}) =>
    size === 'small' ? '/assets/wheel.png' : '/assets/wheel-large.png',
  alt: 'Tesla car wheel'
})`
  display: block;
  width: 100%;
  height: 100%;
`

export const Wheels = ({size, speed}) => (
  <React.Fragment>
    <WheelWrapper speed={speed}>
      <Wheel size={size} />
    </WheelWrapper>

    <WheelWrapper speed={speed}>
      <Wheel size={size} />
    </WheelWrapper>
  </React.Fragment>
)
