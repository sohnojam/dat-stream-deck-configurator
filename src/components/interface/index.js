//
// Imports

// Core
import React from 'react'

// Styles
import { makeStyles } from '@material-ui/core/styles'

// Mui Components
import MuiPaper from '@material-ui/core/Paper'
import MuiCollapse from '@material-ui/core/Collapse'
import MuiTypography from '@material-ui/core/Typography'
import MuiFormControl from '@material-ui/core/FormControl'
import MuiSelect from '@material-ui/core/Select'
import MuiMenuItem from '@material-ui/core/MenuItem'
import MuiInputLabel from '@material-ui/core/InputLabel'
import MuiTextField from '@material-ui/core/TextField'
import MuiButton from '@material-ui/core/Button'

// Mui Icons
import IconSave from '@material-ui/icons/Save'

//
// Classes
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  heading: {
    marginBottom: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  collapse: {
  },
  saveContainer: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(3),
    minWidth: 150
  },
  save: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.success.dark
    }
  }
}))

//
// Component
function Interface({
  currentInterface
}) {

  const classes = useStyles()

  //
  // Inputs

  // Type
  const [interfaceType, setInterfaceType] = React.useState(
    currentInterface && currentInterface.type && (currentInterface.type === 'OBSS' || currentInterface.type === 'SLOBS')
    ? currentInterface.type
    : ''
  )
  const handleChangeInterfaceType = (event) => {
    setInterfaceType(event.target.value)
  }

  // OBSS address
  const [obssAddress, setObssAddress] = React.useState(
    currentInterface && currentInterface.type && currentInterface.type === 'OBSS' && currentInterface.address && currentInterface.address.split(':')[0]
    ? currentInterface.address.split(':')[0]
    : ''
  )
  const handleChangeObssAddress = (event) => {
    setObssAddress(event.target.value)
  }

  // OBSS port
  const [obssPort, setObssPort] = React.useState(
    currentInterface && currentInterface.type && currentInterface.type === 'OBSS' && currentInterface.address && currentInterface.address.split(':')[1]
    ? currentInterface.address.split(':')[1]
    : ''
  )
  const handleChangeObssPort = (event) => {
    setObssPort(event.target.value)
  }

  // OBSS password
  const [obssPassword, setObssPassword] = React.useState(
    currentInterface && currentInterface.type && currentInterface.type === 'OBSS' && currentInterface.password
    ? currentInterface.password
    : ''
  )
  const handleChangeObssPassword = (event) => {
    setObssPassword(event.target.value)
  }

  // SLOBS address
  const [slobsAddress, setSlobsAddress] = React.useState(
    currentInterface && currentInterface.type && currentInterface.type === 'SLOBS' && currentInterface.address && currentInterface.address.split(':')[0].replace('http://','')
    ? currentInterface.address.split(':')[0].replace('http://','')
    : ''
  )
  const handleChangeSlobsAddress = (event) => {
    setSlobsAddress(event.target.value)
  }

  // SLOBS port
  const [slobsPort, setSlobsPort] = React.useState(
    currentInterface && currentInterface.type && currentInterface.type === 'SLOBS' && currentInterface.address && currentInterface.address.split(':')[1].replace('/api','')
    ? currentInterface.address.split(':')[1].replace('/api','')
    : ''
  )
  const handleChangeSlobsPort = (event) => {
    setSlobsPort(event.target.value)
  }

  // SLOBS token
  const [slobsToken, setSlobsToken] = React.useState(
    currentInterface && currentInterface.type && currentInterface.type === 'SLOBS' && currentInterface.token
    ? currentInterface.token
    : ''
  )
  const handleChangeSlobsToken = (event) => {
    setSlobsToken(event.target.value)
  }

  // Save button condition
  const showSaveButton = () => {
    return (
      (interfaceType === 'OBSS' && obssAddress && obssPort && obssPassword)
      ||
      (interfaceType === 'SLOBS' && slobsAddress && slobsPort && slobsToken)
    )
  }

  //
  // Render
  return (

    <MuiPaper
      className={classes.root}
    >

      <MuiTypography
        className={classes.heading}
        variant="h4"
      >
        Interface settings
      </MuiTypography>

      <MuiFormControl
        className={classes.formControl}
      >
        <MuiInputLabel
          id="typeLabel"
        >
          Interface type
        </MuiInputLabel>
        <MuiSelect
          id="typeSelect"
          labelId="typeLabel"
          value={interfaceType}
          onChange={handleChangeInterfaceType}
        >
          <MuiMenuItem value="" disabled>Select an interface type</MuiMenuItem>
          <MuiMenuItem value="OBSS">OBS Studio</MuiMenuItem>
          <MuiMenuItem value="SLOBS">Streamlabs OBS</MuiMenuItem>
        </MuiSelect>
      </MuiFormControl>

      <MuiCollapse
        className={classes.collapse}
        in={interfaceType === 'OBSS'}
        timeout="auto"
        unmountOnExit
      >

        <MuiFormControl
          className={classes.formControl}
        >
          <MuiTextField
            label="IP address"
            value={obssAddress}
            onChange={handleChangeObssAddress}
          />
        </MuiFormControl>

        <MuiFormControl
          className={classes.formControl}
        >
          <MuiTextField
            label="Port"
            value={obssPort}
            onChange={handleChangeObssPort}
          />
        </MuiFormControl>

        <MuiFormControl
          className={classes.formControl}
        >
          <MuiTextField
            label="Password"
            value={obssPassword}
            onChange={handleChangeObssPassword}
            type="password"
          />
        </MuiFormControl>

      </MuiCollapse>

      <MuiCollapse
        className={classes.collapse}
        in={interfaceType === 'SLOBS'}
        timeout="auto"
        unmountOnExit
      >

        <MuiFormControl
          className={classes.formControl}
        >
          <MuiTextField
            label="IP address"
            value={slobsAddress}
            onChange={handleChangeSlobsAddress}
          />
        </MuiFormControl>

        <MuiFormControl
          className={classes.formControl}
        >
          <MuiTextField
            label="Port"
            value={slobsPort}
            onChange={handleChangeSlobsPort}
          />
        </MuiFormControl>

        <MuiFormControl
          className={classes.formControl}
        >
          <MuiTextField
            label="API token"
            value={slobsToken}
            onChange={handleChangeSlobsToken}
            type="password"
          />
        </MuiFormControl>

      </MuiCollapse>

      <MuiCollapse
        className={classes.collapse}
        in={showSaveButton()}
        timeout="auto"
        unmountOnExit
      >

        <MuiFormControl
          className={classes.saveContainer}
        >
          <MuiButton
            className={classes.save}
            variant="contained"
            startIcon={<IconSave />}
          >
            Save
          </MuiButton>
        </MuiFormControl>

      </MuiCollapse>

    </MuiPaper>

  )

}

export default Interface