const drawerWidth = 240;

const styles = theme => ({
  headerToolbar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  }
})

export default styles
