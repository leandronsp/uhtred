import React from 'react'
import { mount } from 'enzyme'
import AppLayout from 'layouts/app/index'
import renderer from 'react-test-renderer'

it('renders stock list', () => {
  const state = {
    stocks: [{ symbol: 'PETR4' }],
    series: [{ symbol: 'C' }],
    callOptions: [{ symbol: 'PETRB28' }]
  }

  const tree = renderer.create(
    <AppLayout stocks={state.stocks} series={state.series} callOptions={state.callOptions} />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
