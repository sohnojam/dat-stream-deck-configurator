//
// Imports

// Core
import React from 'react'

// Components
import Body from './components/body'

// Styles
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

//
// Theme
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#F08000"
    },
    secondary: {
      main: "#80F000"
    }
  }
})

//
// Component
function App() {

    return (
      <ThemeProvider
        theme={theme}
      >
        <Body />
      </ThemeProvider>
    )
}

export default App
