import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'actions/stocks'

import Brand from 'components/brand/index'
import Stocks from 'components/stocks/index'

const mapStateToProps = state => ({ stocks: state.stocks })
const actionCreators = Object.assign({}, actions)
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

const Sidebar = ({stocks, actions}) => {
  return (
    <div>
      <Brand />
      <Stocks stocks={stocks} actions={actions} />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
