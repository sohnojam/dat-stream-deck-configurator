import React, { useState } from 'react'
import './states.css'
import FileControl from './fileControl'
import EditEmpty from './editEmpty'
import EditInterface from './editInterface'
import EditState from './editState'
import StateList from './stateList'

function States({
  newConfig,
  loadConfig,
  saveConfig,
  interfaceConfig,
  modifyInterface,
  states,
  selectedState,
  setSelectedState,
  addState,
  modifyState,
  removeState
}) {

  const [isEditing, setIsEditing] = useState(false)

  const handleSaveInterface = (iface, controller) => {
    modifyInterface(iface, controller)
    setIsEditing('')
  }

  const handleSaveState = (state) => {
    if (selectedState) {
      const confirm = window.confirm('This will overwrite the state. Are you sure you want to do this?')
      if (confirm) {
        modifyState(selectedState, state)
        setIsEditing('')
      }
    } else {
      addState(state)
      setIsEditing('')
    }
  }

  const handleRemoveState = (stateIndex) => {
    const confirm = window.confirm('This will permanently delete the state. Any Switch State actions pointing to this state will cease to work. Are you sure you want to do this?')
    if (confirm) {
      removeState(stateIndex)
    }
  }

  return (
    <div className="states-container">
      <FileControl
        newConfig={newConfig}
        loadConfig={loadConfig}
        saveConfig={saveConfig}
        editInterface={() => isEditing === 'state' ?
            window.confirm('This will discard any changes made to the state. Are you sure you want to do this?') && setIsEditing('interface')
          :
            setIsEditing('interface')
          }
      />
      {isEditing === 'state' ?
        <EditState
          states={states}
          selectedState={selectedState}
          saveState={handleSaveState}
          cancel={() => window.confirm('This will discard any changes made to the state. Are you sure you want to do this?')
            && setIsEditing('')}
        />
      : isEditing === 'interface' ?
        <EditInterface
          interfaceConfig={interfaceConfig}
          states={states}
          saveInterface={handleSaveInterface}
          cancel={() => window.confirm('This will discard any changes made to the interface. Are you sure you want to do this?')
            && setIsEditing('')}
        />
      :
        <EditEmpty />
      }
      <StateList
        states={states}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        editState={() => isEditing === 'interface' ?
            window.confirm('This will discard any changes made to the interface. Are you sure you want to do this?') && setIsEditing('state')
          :
            setIsEditing('state')
          }
        removeState={handleRemoveState}
      />
    </div>
  )
}

export default States