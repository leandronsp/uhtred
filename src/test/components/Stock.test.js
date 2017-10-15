import React from 'react'
import { shallow } from 'enzyme'
import Stock from 'components/Stock'

it('renders stock element', () => {
  const props = { symbol: 'PETR4' }
  const component = shallow(<Stock {...props} />)
  expect(component.find('li').text()).toEqual('PETR4')
})
