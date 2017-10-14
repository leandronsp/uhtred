import reducer from 'reducers/stocks'

it('returns the default state', () => {
  expect(reducer(undefined, '')).toEqual([])
})
