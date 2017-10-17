import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Stock from 'components/stock/index'

it('renders stock element', () => {
  const props = { symbol: 'PETR4' }
  const component = shallow(<Stock {...props} />)
  expect(component.find('li').text()).toEqual('PETR4')
})

it('renders correctly', () => {
  const tree = renderer.create(
    <Stock symbol='VALE5' />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
