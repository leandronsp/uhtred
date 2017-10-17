import React from 'react'
import { mount } from 'enzyme'
import Header from 'components/header/index'

it('renders stock quotes', () => {
  const props = {
    stocks: [{ symbol: 'PETR4' }, { symbol: 'VALE5' }]
  }

  const component = mount(<Header {...props} />)

  expect(component.find('ul').childAt(0).text()).toEqual('PETR4')
  expect(component.find('ul').childAt(1).text()).toEqual('VALE5')
})
