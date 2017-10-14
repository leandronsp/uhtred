const storeName = 'stocks'

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(storeName)
    if (serializedState === null) {
      return {
        stocks: [
          { symbol: 'PETR4' },
          { symbol: 'VALE5' },
          { symbol: 'BVMF3' },
          { symbol: 'BBAS3' }
        ]
      }
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(storeName, serializedState)
  } catch(err) {
    // ignore
  }
}
