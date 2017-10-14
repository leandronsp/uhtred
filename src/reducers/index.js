const increment = (number) => number + 1
const decrement = (number) => number > 0 ? number - 1 : number

export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return increment(state)
    case 'DECREMENT': return decrement(state)
    default: return state
  }
}
