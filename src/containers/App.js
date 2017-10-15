import { connect } from 'react-redux'
import Stocks from '../components/Stocks'

const mapStateToProps = state => ({
  stocks: state.stocks
})

export default connect(
  mapStateToProps
)(Stocks)
