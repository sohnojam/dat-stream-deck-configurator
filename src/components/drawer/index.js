//
// Imports

// Core
import React from 'react'

// Components
import List from './list'

// Styles
import { makeStyles } from '@material-ui/core/styles'

// Mui Components
import MuiDrawer from '@material-ui/core/Drawer'
import MuiToolbar from '@material-ui/core/Toolbar'
import MuiTypography from '@material-ui/core/Typography'

//
// Classes
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 256,
    flexShrink: 0
  },
  drawerPaper: {
    width: 256,
    backgroundColor: theme.palette.background.paper
  },
  drawerContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'auto'
  },
  version: {
    alignSelf: 'center',
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.text.disabled
  }
}))

//
// Component
function Drawer({
  selected,
  onClick,
  version,
  configVersion
}) {

  const classes = useStyles()

  //
  // Render
  return (
      <MuiDrawer
        className={classes.drawer}
        classes={{paper: classes.drawerPaper}}
        variant="permanent"
        anchor="left"
      >

        <MuiToolbar />

        <div
          className={classes.drawerContainer}
        >
          
          <List
            selected={selected}
            onClick={onClick}
          />

          <MuiTypography
            className={classes.version}
            variant="body1"
          >
            {`${version} - ${configVersion}`}
          </MuiTypography>

        </div>

      </MuiDrawer>
  )

}

export default Drawer