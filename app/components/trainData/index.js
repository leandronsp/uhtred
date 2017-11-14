import React from 'react'
import './styles.css'

const TrainData = ({callOptions, isTraining, actions}) => {
  const buttonText = isTraining ? 'Training...' : 'Train Data'

  return (
    <button className='train-data' onClick={() => actions.trainData()}>{buttonText}</button>
  );
}

export default TrainData
