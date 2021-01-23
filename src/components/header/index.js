import React from 'react'

// Styles
import { makeStyles } from '@material-ui/core/styles'
import colors from '../../styles/colors'

// Component
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'

// Drawer button
import MenuIcon from '@material-ui/icons/Menu'

// Title
import Typography from '@material-ui/core/Typography'

// File menu
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: colors.secondary,
    background: `linear-gradient(0deg, ${colors.primaryDark} 0%, ${colors.primary} 25%, ${colors.primary} 75%, ${colors.primaryLight} 100%)`
  },
  iconButton: {
    color: colors.textSecondary
  },
  menu: {
    backgroundColor: colors.backgroundAlt,
    color: colors.text
  },
  title: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
    color: colors.textSecondary
  }
}))

function Header({

}) {

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const menuOpened = Boolean(anchorEl)

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  console.log(colors, colors.primary)

  return (
    <AppBar
      className={classes.header}
    >
      <Toolbar>

        <IconButton
          className={classes.iconButton}
          onClick={() => null}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          className={classes.title}
          align="left"
          variant="h4"
        >
          dat-stream-deck Configurator
        </Typography>

        <IconButton
          className={classes.iconButton}
          onClick={handleOpenMenu}
        >
          <InsertDriveFileIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={menuOpened}
          onClose={handleCloseMenu}
        >
          <MenuItem
          >
            New Configuration
          </MenuItem>

          <MenuItem
          >
            Load Configuration
          </MenuItem>

          <MenuItem
          >
            Save Configuration
          </MenuItem>

          <MenuItem
            disabled
          >
            v0.2.0
          </MenuItem>

          <MenuItem
            onClick={() => window.location.assign('https://github.com/sohnojam/dat-stream-deck')}
          >
            dat-stream-deck
          </MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  )
}

export default Header