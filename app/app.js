import React from 'react'
import { render } from 'react-dom'
import Root from 'components/root/index'
import configureStore from 'configureStore'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
