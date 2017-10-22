import React from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField';
import styles from './styles'

const Capital = ({capital, actions, classes}) => {
  const changeCapital = () => event => {
    actions.changeCapital(event.target.value)
  }

  return (
    <form className={classes.capital} noValidate autoComplete='off'>
      <TextField
        id='capital'
        label='How much are you up to invest?'
        value={capital}
        className={classes.input}
        onChange={changeCapital()}
      />
    </form>
  );
}

export default withStyles(styles)(Capital);
