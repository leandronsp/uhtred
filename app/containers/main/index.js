import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as capitalActions from 'actions/capital'
import * as callOptionActions from 'actions/callOptions'

import Capital from 'components/capital/index'
import Card from 'containers/card/index'
import CallOptions from 'components/callOptions/index'

import './styles.css'

const mapStateToProps = state => ({
  callOptions: state.callOptions,
  capital: state.capital
})

const actionCreators = Object.assign({}, capitalActions, callOptionActions)

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

const Main = ({ callOptions, capital, actions }) => {
  return (
    <div className='main'>
      <Capital capital={capital} actions={actions} />
      <Card />
      <CallOptions callOptions={callOptions} actions={actions} />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
