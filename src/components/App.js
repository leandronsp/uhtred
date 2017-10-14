import { connect } from 'react-redux'
import Counter from './Counter'

const mapStateToProps = (state) => ({value: state})
const mapDispatchToProps = (dispatch) => ({
  onIncrement() { dispatch({type: 'INCREMENT'}) },
  onDecrement() { dispatch({type: 'DECREMENT'}) },
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default App
