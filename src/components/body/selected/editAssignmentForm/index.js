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

  const addAction = () => null

  const removeAction = () => null

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
          onClick={() => cancelEditAssignment()}
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
    </div>
  )

}

export default EditAssignmentForm