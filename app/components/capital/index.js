import React from 'react'
import './styles.css'

const Capital = ({capital, actions}) => {
  const changeCapital = () => event => {
    actions.changeCapital(event.target.value)
  }

  return (
    <form autoComplete='off'>
      <input
        className='capital'
        type='text'
        id='capital'
        placeholder='How much are you up to invest?'
        value={capital}
        onChange={changeCapital()}
      />
    </form>
  );
}

export default Capital
