import React from 'react'
import { mount } from 'enzyme'
import DrawerLayout from 'layouts/drawer/index'
import renderer from 'react-test-renderer'

it('renders stock list', () => {
  const stocks = [{ symbol: 'PETR4' }]

  const tree = renderer.create(
    <DrawerLayout stocks={stocks} />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
