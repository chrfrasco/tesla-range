import React from 'react'
import {Intro} from './Intro'
import {Tesla} from './Tesla'

export default () => (
  <React.Fragment>
    <Intro />
    <Tesla speed={70} />
  </React.Fragment>
)
