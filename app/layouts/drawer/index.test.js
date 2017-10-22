import React from 'react'
import { mount } from 'enzyme'
import DrawerLayout from 'layouts/drawer/index'
import renderer from 'react-test-renderer'

it('renders stock list', () => {
  const state = {
    stocks: [{ symbol: 'PETR4' }],
    series: [{ symbol: 'C' }]
  }

  const tree = renderer.create(
    <DrawerLayout stocks={state.stocks} series={state.series} />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
