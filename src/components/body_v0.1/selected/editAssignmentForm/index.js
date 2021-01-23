import React, { useState } from 'react'
import './editAssignmentForm.css'
import FormBodyLeft from './formBodyLeft'
import FormBodyRightList from './formBodyRightList'
import FormBodyRightCreate from './formBodyRightCreate'

function EditAssignmentForm({
  states,
  selectedState,
  selectedKey,
  currentAssignment,
  cancelEditAssignment,
  addKey,
  modifyKey,
  removeKey
}) {

  const [name, setName] = useState(
    currentAssignment ? currentAssignment.name : ''
  )
  const [state, setState] = useState(
    currentAssignment ? currentAssignment.state : ''
  )
  const [color, setColor] = useState(
    currentAssignment ? currentAssignment.color :
    selectedState ? states.find(state => state.name === selectedState).color :
    ''
  )
  const [actions, setActions] = useState(
    currentAssignment ? currentAssignment.actions : []
  )
  const [creatingAction, setCreatingAction] = useState(false)

  const onChangeNameInput = (value) => {
    setName(value)
  }

  const onChangeStateInput = (value) => {
    setState(value)
    setColor(
      states.find(state => state.name === value).color
    )
  }

  const addAction = (action) => {
    setActions([...actions, action])
    setCreatingAction(false)
  }

  const removeAction = (index) => {
    const newActions = [...actions]
    newActions.splice(index, 1)
    setActions(newActions)
  }

  const handleSaveKey = () => {
    if (currentAssignment) {
      const confirm = window.confirm('This will overwrite the previous assignment to this key on this state. Are you sure you want to do this?')
      if (confirm) {
        modifyKey(state, selectedKey, {name, state, color, actions})
        cancelEditAssignment()
      }
    } else {
      addKey(state, selectedKey, {name, state, color, actions})
      cancelEditAssignment()
    }
  }

  const handleRemoveKey = () => {
    const confirm = window.confirm('This will permanently delete the assignment to this key on this state. Are you sure you want to do this?')
    if (confirm) {
      removeKey(state, selectedKey)
      cancelEditAssignment()
    }
  }

  return (
    <div className="edit-assignment-form">
      <div className="edit-assignment-form-header">
        <span
          className="edit-assignment-form-header-key"
          style={{color: color || '#a0a0a0'}}
        >
          {currentAssignment && currentAssignment.name ?
            currentAssignment.name + (' (') + selectedKey.label + (')')
          :
            selectedKey.label
          }
        </span>
        <div
          className="edit-assignment-form-header-cancel"
          onClick={() => window.confirm('This will discard any changes made to the assignment. Are you sure you want to do this?')
            && cancelEditAssignment()}
        >
          <span>
            Cancel
          </span>
        </div>
      </div>
      <div className="edit-assignment-form-body">
        <FormBodyLeft
          states={states}
          name={name}
          onChangeNameInput={onChangeNameInput}
          state={state}
          onChangeStateInput={onChangeStateInput}
          disableStateInput={!!currentAssignment}
          color={color}
        />
        {creatingAction ?
          <FormBodyRightCreate
            addAction={addAction}
            cancelCreateAction={() => setCreatingAction(false)}
          />
        :
          <FormBodyRightList
            actions={actions}
            createAction={() => setCreatingAction(true)}
            removeAction={removeAction}
          />
        }
      </div>
      <div className="edit-assignment-form-footer">
        <div
          className="edit-assignment-form-footer-button"
          onClick={() => handleSaveKey()}
        >
          <span>
            Save
          </span>
        </div>
        <div
          className="edit-assignment-form-footer-remove"
          onClick={() => handleRemoveKey()}
        >
          <span>
            Delete
          </span>
        </div>
      </div>
    </div>
  )

}

export default EditAssignmentForm