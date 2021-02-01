//
//Imports

// Core
import React from 'react'

// Components
import Header from '../header'
import Drawer from '../drawer'
import Home from '../home'
import Interface from '../interface'
import States from '../states'
import Keys from '../keys'

// Styles
import { makeStyles } from '@material-ui/core/styles'

// Mui Components
import MuiContainer from '@material-ui/core/Container'
import MuiToolbar from '@material-ui/core/Toolbar'

//
// Classes
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  page: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}))

//
// Components
function Body({
  config,
  states,
  keys,
  version,
  configVersion
}) {

  const classes = useStyles()

  // Screen control
  const [screen, setScreen] = React.useState('home')
  const handleScreenHome = () => {
    setScreen('home')
  }
  const handleScreenInterface = () => {
    setScreen('interface')
  }

  const handleScreenStates = () => {
    setScreen('states')
  }

  const handleScreenKeys = () => {
    setScreen('keys')
  }

  //
  // Render
  return (
    <div
      className={classes.root}
    >

      <Header />

      <Drawer
        selected={screen}
        onClick={{
          home: handleScreenHome,
          fileNew: () => null,
          fileOpen: () => null,
          fileSave: () => null,
          interface: handleScreenInterface,
          states: handleScreenStates,
          keys: handleScreenKeys
        }}
        version={version}
        configVersion={configVersion}
      />

      <MuiContainer>

        <MuiToolbar />

        <MuiContainer
          className={classes.page}
        >

          { screen === 'home' ?

            <Home
            />

          : screen === 'interface' ?

            <Interface
              config={config}
            />

          : screen === 'states' ?

            <States
              config={config}
              states={states}
            />
          
          : screen === 'keys' ?

            <Keys
              config={config}
              keys={keys}
            />

          : null }

        </MuiContainer>

      </MuiContainer>

    </div>
  )

}

export default Body