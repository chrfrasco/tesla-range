import React from 'react'
import styled from 'styled-components'

const Outer = styled.div`
  position: relative;
  width: 100%;
  &::before {
    content: '';
    display: block;
    padding-top: ${({w, h}) => (h / w) * 100}%;
  }
`

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export const FixedAspectRatio = ({
  children = null,
  w = 1,
  h = 1,
  className = ''
}) => (
  <Outer w={w} h={h} className={className}>
    <Inner>{children}</Inner>
  </Outer>
)
