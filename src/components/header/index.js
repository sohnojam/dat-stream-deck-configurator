//
// Imports

// Core
import React from 'react'

// Styles
import { makeStyles } from '@material-ui/core/styles'

// Mui Components
import MuiAppBar from '@material-ui/core/AppBar'
import MuiToolbar from '@material-ui/core/Toolbar'
import MuiTypography from '@material-ui/core/Typography'

//
// Classes
const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary
  },
  title: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
    color: theme.palette.primary.contrastText
  },
  icon: {
    color: theme.palette.primary.contrastText
  }
}))

//
// Component
function Header() {

  const classes = useStyles()

  //
  // Render
  return (
    <MuiAppBar
      className={classes.root}
    >
      <MuiToolbar>

        <MuiTypography
          className={classes.title}
          align="left"
          variant="h4"
        >
          dat-stream-deck Configurator
        </MuiTypography>

       </MuiToolbar>
    </MuiAppBar>
  )
}

export default Header