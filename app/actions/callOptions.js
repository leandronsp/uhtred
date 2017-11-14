import fetch from 'isomorphic-fetch'
import types from './actionTypes'
import config from 'config'

export const changeScore = (callOption, score) => ({
  type: types.CHANGE_CALL_OPTION_SCORE,
  callOption,
  score
})

export const trainDataRequest = () => ({
  type: types.TRAIN_DATA_REQUEST
})

export const trainDataSuccess = () => ({
  type: types.TRAIN_DATA_SUCCESS
})

export const trainData = () => {
  return (dispatch, getState) => {
    const { callOptions } = getState()

    if (callOptions[0].score) {
      let inputs  = []
      let targets = []

      callOptions.forEach((callOption) => {
        const rateRelation = (callOption.rate / callOption.remaining_days).toFixed(2)
        const balanceRelation = (callOption.balance / callOption.future_volatility).toFixed(2)
        const tradesRelation = (Math.log(callOption.trades) / Math.log(10)).toFixed(2)
        const score = Number(callOption.score).toFixed(2)

        inputs.push([Number(tradesRelation), Number(balanceRelation), Number(rateRelation)])
        targets.push(Number(score))
      })

      const options = {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ inputs: inputs, targets: [targets] })
      }

      dispatch(trainDataRequest())

      return fetch(config.API_ENDPOINT + '/api/network/train', options)
        .then(response => response.json())
        .then(json =>
          Promise.all([
            dispatch(fetchCallOptions()),
            dispatch(trainDataSuccess())
          ])
        )
    } else {
      return Promise.all([])
    }
  }
}

export const fetchCallOptionsSuccess = (body) => ({
  type: types.FETCH_CALL_OPTIONS_SUCCESS,
  body
})

export const fetchCallOptions = () => {
  return (dispatch, getState) => {
    const { currentStock, currentSerie, capital } = getState()

    return fetch(config.API_ENDPOINT + '/api/stocks/' + currentStock.symbol + '/calls/evaluated?serie=' + currentSerie.symbol + '&capital=' + capital)
      .then(response => response.json())
      .then(json =>
        Promise.all([
          dispatch(fetchCallOptionsSuccess(json))
        ])
      )
  }
}
