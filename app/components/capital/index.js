import React from 'react'

const Capital = ({capital, actions}) => {
  const changeCapital = () => event => {
    actions.changeCapital(event.target.value)
  }

  return (
    <form autoComplete='off'>
      <input
        type='text'
        id='capital'
        label='How much are you up to invest?'
        value={capital}
        onChange={changeCapital()}
      />
    </form>
  );
}

export default Capital
