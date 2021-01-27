//
// Imports

// Core
import React from 'react'

// Styles
import { makeStyles } from '@material-ui/core/styles'

// Mui Components
import MuiAppBar from '@material-ui/core/AppBar'
import MuiToolbar from '@material-ui/core/Toolbar'
import MuiCardMedia from '@material-ui/core/CardMedia'
import MuiTypography from '@material-ui/core/Typography'

// Assets
import logo from '../../assets/logo_black.png'

//
// Classes
const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary
  },
  logo: {
    width: 85,
    height: 60
  },
  title: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
    color: theme.palette.primary.contrastText,
    fontFamily: 'Ubuntu',
    fontWeight: 500
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

        <MuiCardMedia
          className={classes.logo}
          image={logo}
        />

        <MuiTypography
          className={classes.title}
          align="left"
          variant="h4"
        >
          Configurator
        </MuiTypography>

       </MuiToolbar>
    </MuiAppBar>
  )
}

export default Header