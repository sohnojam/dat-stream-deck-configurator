import React, { useState } from 'react'
import './states.css'
import FileControl from './fileControl'
import EditState from './editState'
import StateList from './stateList'

function States({
  newConfig,
  loadConfig,
  saveConfig,
  states,
  selectedState,
  setSelectedState,
  addState,
  modifyState,
  removeState
}) {

  const [isEditing, setIsEditing] = useState(false)

  const [editName, setEditName] = useState(
    selectedState ?
      states.find(state => state.name === selectedState).name
    : ''
  )

  const [editColor, setEditColor] = useState(
    selectedState ?
      'custom'
    : ''
  )

  const [editCustomColor, setEditCustomColor] = useState(
    selectedState ?
      states.find(state => state.name === selectedState).color
    : ''
  )

  const onChangeName = (value) => {
    setEditName(value.toLowerCase())
  }

  const onChangeColor = (value) => {
    setEditColor(value)
  }

  const onChangeCustomColor = (value) => {
    setEditCustomColor(
      value ? value[0] === '#' ? value : '#' + value : ''
    )
  }

  const handleSaveState = () => {
    if (selectedState) {
      const confirm = window.confirm('This will overwrite the state. Are you sure you want to do this?')
      if (confirm) {
        modifyState(selectedState, {name: editName, color: editColor === 'custom' ? editCustomColor : editColor})
        setIsEditing(false)
      }
    } else {
      addState({name: editName, color: editColor === 'custom' ? editCustomColor : editColor})
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
      />
      <EditState
        isEditing={isEditing}
        newState={!selectedState}
        name={editName}
        onChangeName={onChangeName}
        color={editColor}
        onChangeColor={onChangeColor}
        customColor={editCustomColor}
        onChangeCustomColor={onChangeCustomColor}
        saveState={handleSaveState}
        cancel={() => setIsEditing(false)}
      />
      <StateList
        states={states}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        setIsEditing={setIsEditing}
        removeState={handleRemoveState}
      />
    </div>
  )
}

export default States