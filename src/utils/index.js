import {rangeData} from './rangeData'

export const getRange = ({model, speed, temperature, isACRunning, wheelSize}) =>
  rangeData[model][wheelSize][isACRunning ? 'on' : 'off'].speed[speed][temperature]
