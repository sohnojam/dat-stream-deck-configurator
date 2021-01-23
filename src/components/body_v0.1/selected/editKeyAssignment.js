import React from 'react'
import './selected.css'
import EditAssignmentForm from './editAssignmentForm'

function EditKeyAssignment({
  states,
  selectedState,
  selectedKey,
  currentAssignment,
  cancelEditAssignment,
  addKey,
  modifyKey,
  removeKey
}) {

  return (
    <div className="selected-editassignment-container">
      <EditAssignmentForm
        states={states}
        selectedState={selectedState}
        selectedKey={selectedKey}
        currentAssignment={currentAssignment}
        cancelEditAssignment={cancelEditAssignment}
        addKey={addKey}
        modifyKey={modifyKey}
        removeKey={removeKey}
      />
    </div>
  )

}

export default EditKeyAssignment