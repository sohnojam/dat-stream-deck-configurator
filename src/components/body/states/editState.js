import React from 'react'
import './states.css'

function EditState({
  isEditing,
  newState,
  name,
  onChangeName,
  color,
  onChangeColor,
  customColor,
  onChangeCustomColor,
  saveState,
  cancel
}) {

  return (
    <div className="states-c2" style={{opacity: isEditing ? 1 : 0}}>
      <div className="states-edit-form">
        <div className="states-edit-form-header">
          <div
            className="states-edit-form-header-cancel"
            onClick={() => window.confirm('This will discard any changes made to the assignment. Are you sure you want to do this?')
              && cancel()}
          >
            <span>Cancel</span>
          </div>
        </div>
        <
      </div>
    </div>
  )

}

export default EditState