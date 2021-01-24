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
    overflow: 'auto'
  }
}))

//
// Component
function Drawer({
  selected,
  onClick,
  version
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
            version={version}
          />

        </div>

      </MuiDrawer>
  )

}

export default Drawer