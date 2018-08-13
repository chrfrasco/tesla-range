import React from 'react'
import merge from 'lodash.merge'
import {config} from './config'

const STORAGE_KEY = '@@tesla-calc/config'

const liftValues = obj =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value.value
    }),
    {}
  )

const lowerValues = obj =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: {value}
    }),
    {}
  )

const ConfigContext = React.createContext({})

const getInitialConfig = () => {
  const oldConfig = localStorage.getItem(STORAGE_KEY)
  if (oldConfig != null) {
    return JSON.parse(oldConfig)
  }

  return {
    speed: 45,
    temperature: -10,
    wheelSize: 'small',
    isACRunning: false
  }
}

export class ConfigProvider extends React.Component {
  change = key => value =>
    this.setState(
      ({[key]: old}) => ({[key]: {...old, value}}),
      this.onAfterChange
    )

  prepareConfig = configuration =>
    merge(lowerValues(configuration), {
      speed: {
        values: config.speeds,
        change: this.change('speed'),
        name: 'Speed (MPH)'
      },
      temperature: {
        values: config.temperatures,
        change: this.change('temperature'),
        name: 'Temperature (℉)'
      },
      wheelSize: {
        values: config.wheelSizes,
        change: this.change('wheelSize'),
        name: 'Wheel Size'
      },
      isACRunning: {
        values: config.airConRunningStates,
        change: this.change('isACRunning'),
        name: 'AC Running'
      }
    })

  state = this.prepareConfig(getInitialConfig())

  onAfterChange = () =>
    localStorage.setItem(STORAGE_KEY, JSON.stringify(liftValues(this.state)))

  render() {
    return (
      <ConfigContext.Provider value={this.state}>
        {this.props.children}
      </ConfigContext.Provider>
    )
  }
}

export const ConfigConsumer = ConfigContext.Consumer

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
