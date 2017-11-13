import React from 'react'
import CurrencyInput from 'react-currency-input'
import './styles.css'

const Capital = ({capital, actions}) => {
  const changeCapital = () => (value, vnumber, event) => {
    actions.changeCapital(vnumber)
  }

  return (
    <form autoComplete='off'>
      <CurrencyInput
        decimalSeparator=','
        thousandSeparator='.'
        prefix='R$ '
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
