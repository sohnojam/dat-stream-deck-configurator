//
// Imports

// Core
import React from 'react'

// Styles
import { makeStyles } from '@material-ui/core/styles'

// Mui Components
import MuiList from '@material-ui/core/List'
import MuiDivider from '@material-ui/core/Divider'
import MuiListItem from '@material-ui/core/ListItem'
import MuiListItemIcon from '@material-ui/core/ListItemIcon'
import MuiListItemText from '@material-ui/core/ListItemText'
import MuiCollapse from '@material-ui/core/Collapse'

// Mui Icons
import IconHome from '@material-ui/icons/Home'
import IconFile from '@material-ui/icons/InsertDriveFile'
import IconCollapse from '@material-ui/icons/ExpandLess'
import IconExpand from '@material-ui/icons/ExpandMore'
import IconNew from '@material-ui/icons/InsertDriveFileOutlined'
import IconOpen from '@material-ui/icons/OpenInBrowserOutlined'
import IconSave from '@material-ui/icons/SaveOutlined'
import IconInterface from '@material-ui/icons/SettingsInputHdmi'
import IconStates from '@material-ui/icons/Album'
import IconKeys from '@material-ui/icons/Keyboard'

//
// Classes
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  icon: {
    color: theme.palette.text
  },
  text: {
    color: theme.palette.text
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  version: {
    color: theme.palette.text.disabled,
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1)
  }
}))

//
// Component
function List({
  selected,
  onClick,
  version
}) {

  const classes = useStyles()

  // File actions state
  const [fileOpen, setFileOpen] = React.useState(false)
  const handleFileToggle = () => {
    setFileOpen(!fileOpen)
  }

  //
  // Render
  return (
  
    <MuiList
      className={classes.root}
      component="nav"
    >

      <MuiListItem
        button
        selected={selected === 'home'}
        onClick={onClick.home}
      >
        <MuiListItemIcon
          className={classes.icon}
        >
          <IconHome />
        </MuiListItemIcon>
        <MuiListItemText
          className={classes.text}
          primary="Home"
        />
      </MuiListItem>

      <MuiDivider
        className={classes.divider}
      />

      <MuiListItem
        button
        onClick={handleFileToggle}
      >
        <MuiListItemIcon
          className={classes.icon}
        >
          <IconFile />
        </MuiListItemIcon>
        <MuiListItemText
          className={classes.text}
          primary="File"
        />
        { fileOpen ?
          <IconCollapse />
        :
          <IconExpand />
        }
      </MuiListItem>

      <MuiCollapse
        in={fileOpen}
        timeout="auto"
        unmountOnExit
      >

        <MuiList
          component="div"
          disablePadding
        >

          <MuiListItem
            className={classes.nested}
            button
            onClick={() => null}
          >
            <MuiListItemIcon
              className={classes.icon}
            >
              <IconNew />
            </MuiListItemIcon>
            <MuiListItemText
              className={classes.text}
              primary="New File"
            />
          </MuiListItem>

          <MuiListItem
            className={classes.nested}
            button
            onClick={() => null}
          >
            <MuiListItemIcon
              className={classes.icon}
            >
              <IconOpen />
            </MuiListItemIcon>
            <MuiListItemText
              className={classes.text}
              primary="Open File"
            />
          </MuiListItem>

          <MuiListItem
            className={classes.nested}
            button
            onClick={() => null}
          >
            <MuiListItemIcon
              className={classes.icon}
            >
              <IconSave />
            </MuiListItemIcon>
            <MuiListItemText
              className={classes.text}
              primary="Save File"
            />
          </MuiListItem>
          
        </MuiList>

      </MuiCollapse>

      <MuiListItem
        button
        selected={selected === 'interface'}
        onClick={onClick.interface}
      >
        <MuiListItemIcon
          className={classes.icon}
        >
          <IconInterface />
        </MuiListItemIcon>
        <MuiListItemText
          className={classes.text}
          primary="Interface"
        />
      </MuiListItem>

      <MuiListItem
        button
        selected={selected === 'states'}
        onClick={onClick.states}
      >
        <MuiListItemIcon
          className={classes.icon}
        >
          <IconStates />
        </MuiListItemIcon>
        <MuiListItemText
          className={classes.text}
          primary="States"
        />
      </MuiListItem>

      <MuiListItem
        button
        selected={selected === 'keys'}
        onClick={onClick.keys}
      >
        <MuiListItemIcon
          className={classes.icon}
        >
          <IconKeys />
        </MuiListItemIcon>
        <MuiListItemText
          className={classes.text}
          primary="Keys"
        />
      </MuiListItem>

      <MuiListItem>
        <MuiListItemText
          className={classes.version}
          primary={version}
        />
      </MuiListItem>

    </MuiList>

  )

}

export default List