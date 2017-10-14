import React from 'react'
import { mount } from 'enzyme'
import Stocks from 'components/Stocks'

it('renders stock list', () => {
  const props = {
    stocks: [{ symbol: 'PETR4' }]
  }

  const component = mount(<Stocks {...props} />)
  expect(component.find('ul').text()).toEqual('PETR4')
})

