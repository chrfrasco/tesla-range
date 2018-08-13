import React from 'react'
import {getRange} from './utils'
import {withConfigValues} from './Configuration'

export const MilesInformation = withConfigValues(configValues => (
  <React.Fragment>
    {['60', '60D', '75', '75D', '90D', 'P100D'].map(model => (
      <span>{model}: {getRange({model, ...configValues})} miles, </span>
    ))}
  </React.Fragment>
))
