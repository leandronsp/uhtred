import React from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import styles from './styles'

const Brand = ({classes}) => {
  return (
    <div className={`${classes.drawerHeaderMixin} ${classes.drawerHeader}`}>
      <Typography type="title" color='primary' className={classes.drawerHeaderTitle} noWrap>
        Marketr
      </Typography>
      <Typography type="subheading" color='primary' noWrap>
        About
      </Typography>
    </div>
  );
}

export default withStyles(styles)(Brand);
