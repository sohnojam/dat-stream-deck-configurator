//
// Imports

// Core
import React from 'react'

// Styles
import { makeStyles } from '@material-ui/core/styles'

// Mui Components
import MuiPaper from '@material-ui/core/Paper'
import MuiTypography from '@material-ui/core/Typography'

//
// Classes
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  heading: {
    marginBottom: theme.spacing(2)
  },
  paragraph: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  link: {
    color: theme.palette.primary.main
  }
}))

//
// Component
function Home() {

  const classes = useStyles()

  //
  // Render
  return (
    
    <MuiPaper
      className={classes.root}
    >

      <MuiTypography
        className={classes.heading}
        variant="h3"
        align="center"
      >
        Welcome to dat-stream-deck Configurator
      </MuiTypography>

      <MuiTypography
        className={classes.paragraph}
        variant="body1"
        align="justify"
      >
        This is a tool for dat-stream-deck, that allows you to create the configuration files you will need to run your stream deck. If you landed here and have no idea what it's all about, you can check out <a className={classes.link} href="https://github.com/sohnojam/dat-stream-deck">dat-stream-deck on GitHub</a> for a better explanation. If you know what you're doing, welcome, and enjoy your planning now, so that you can enjoy your streaming later!
      </MuiTypography>

    </MuiPaper>

  )

}

export default Home