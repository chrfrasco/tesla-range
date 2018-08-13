import React from 'react'
import {config} from './config'

const ConfigContext = React.createContext({})

export class ConfigProvider extends React.Component {
  change = key => value =>
    this.setState(({[key]: old}) => ({[key]: {...old, value}}))

  state = {
    speed: {
      value: 45,
      values: config.speeds,
      change: this.change('speed'),
      name: 'Speed (MPH)'
    },
    temperature: {
      value: -10,
      values: config.temperatures,
      change: this.change('temperature'),
      name: 'Temperature (℉)'
    },
    wheelSize: {
      value: 'small',
      values: config.wheelSizes,
      change: this.change('wheelSize'),
      name: 'Wheel Size'
    },
    isACRunning: {
      value: false,
      values: config.airConRunningStates,
      change: this.change('isACRunning'),
      name: 'AC Running'
    }
  }

  render() {
    return (
      <ConfigContext.Provider value={this.state}>
        {this.props.children}
      </ConfigContext.Provider>
    )
  }
}

export const ConfigConsumer = ConfigContext.Consumer

const liftValues = obj =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      [key]: obj[key].value
    }),
    {}
  )

export const withConfigValues = WrappedComponent => {
  const ConfigComponent = props => {
    return (
      <ConfigConsumer>
        {context => <WrappedComponent {...liftValues(context)} {...props} />}
      </ConfigConsumer>
    )
  }

  return ConfigComponent
}
