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
//

// Classes
const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    background: `linear-gradient(0deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 25%, ${theme.palette.primary.main} 75%, ${theme.palette.primary.light} 100%)`
  },
  title: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
    color: theme.palette.text
  },
  version: {
    marginRight: theme.spacing(2),
    flexGrow: 0,
    color: theme.palette.text
  }
}))

//
//

// Component function
function Header({
}) {

  const classes = useStyles()

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

        <MuiTypography
          className={classes.version}
          align="right"
          variant="h6"
        >
          v0.2.0
        </MuiTypography>

       </MuiToolbar>
    </MuiAppBar>
  )
}

export default Header