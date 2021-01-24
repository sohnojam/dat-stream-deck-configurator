//
//Imports

// Core
import React from 'react'

// Components
import Header from '../header'
import Drawer from '../drawer'

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
}))

//
// Components
function Body({
  version
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
          interface: handleScreenInterface,
          states: handleScreenStates,
          keys: handleScreenKeys
        }}
        version={version}
      />

      <MuiContainer>

        <MuiToolbar />

        { screen === 'home' ?

          null

        : screen === 'interface' ?

          null

        : screen === 'states' ?

          null
        
        : screen === 'keys' ?

          null

        : null }

      </MuiContainer>

    </div>
  )

}

export default Body