const drawerWidth = 240;

const styles = theme => ({
  content: {
    width: '100%',
    padding: 0,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  }
})

export default styles
