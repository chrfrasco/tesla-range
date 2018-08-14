import React from 'react'
import {hydrate, render} from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './globalStyles'
import {App} from './App'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}

registerServiceWorker()
