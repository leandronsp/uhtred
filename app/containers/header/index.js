import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'actions/stocks'

import Stocks from 'components/stocks/index'

import './styles.css'

const mapStateToProps = state => ({ stocks: state.stocks })
const actionCreators = Object.assign({}, actions)
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

const Header = ({stocks, actions}) => {
  return (
    <div styleName='header'>
      <span>Marketr</span>
      <Stocks stocks={stocks} actions={actions} />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
