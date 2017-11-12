import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as capitalActions from 'actions/capital'

import Capital from 'components/capital/index'
import Card from 'containers/card/index'
import CallOptions from 'components/callOptions/index'

import './styles.css'

const mapStateToProps = state => ({
  callOptions: state.callOptions,
  capital: state.capital
})

const actionCreators = Object.assign({}, capitalActions)

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

const Main = ({ callOptions, capital, actions }) => {
  return (
    <div className='main'>
      <Capital capital={capital} actions={actions} />
      <Card />
      <CallOptions callOptions={callOptions} />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
