//
// Imports

// Core
import React from 'react'

// Utils
import initialConfig from './utils/initialConfig'
import formatKeys from './utils/formatKeys'
import formatStates from './utils/formatStates'

// Components
import Body from './components/body'

// Styles
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

//
// Themes
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#F08000",
      contrastText: "#000000"
    },
    secondary: {
      main: "#80F000",
      contrastText: "#000000"
    },
    success: {
      main: "#30F030",
      contrastText: "#000000"
    },
    danger: {
      main: "#F08030",
      contrastText: "#000000"
    },
    failure: {
      main: "#F03030",
      contrastText: "#000000"
    },
    info: {
      main: "#8080F0",
      contrastText: "#000000"
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255,255,255, 0.7)",
      disabled: "rgba(255,255,255, 0.5)",
      hint: "rgba(255,255,255, 0.5)",
      icon: "rgba(255,255,255, 0.5)"
    }
  }
})

//
// Component
function App() {

  //
  // Config data
  const [config, setConfig] = React.useState(initialConfig)

  return (
    <ThemeProvider
      theme={theme}
    >
      <Body
        config={config}
        states={formatStates(config)}
        keys={formatKeys(config)}
        version="v0.2.0"
        configVersion="cv2"
      />
    </ThemeProvider>
  )
}

export default App
