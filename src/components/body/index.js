//
//Imports

// Core
import React from 'react'

// Components
import Header from '../header'
import Drawer from '../drawer'

// Styles
import { makeStyles } from '@material-ui/core/styles'

//
// Classes
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  }
}))

//
// Components
function Body({

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

      <Header
      />

      <Drawer
        selected={screen}
        onClick={{
          home: handleScreenHome,
          interface: handleScreenInterface,
          states: handleScreenStates,
          keys: handleScreenKeys
        }}
      />

    </div>
  )

}

export default Body