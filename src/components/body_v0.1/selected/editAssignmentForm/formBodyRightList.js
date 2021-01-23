import React from 'react'
import './editAssignmentForm.css'

function FormBodyRightList({
  actions,
  createAction,
  removeAction
}) {
  return (
    <div className="edit-assignment-form-body-c2">
      <div className="edit-assignment-action-list-container">
        {actions.map((action, index) => (
          <div
            key={`actionlist${index}`}
            className="edit-assignment-action-list-item"
          >
            <span className="edit-assignment-action-list-item-type">
              {action.type}
            </span>
            {Object.keys(action).filter(aKey => aKey !== 'type').map((aKey, index) => (
              <span
                key={`actionarg${index}`}
                className="edit-assignment-action-list-item-arg"
              >
                {action[aKey]}
              </span>
            ))}
            <span
              onClick={() => removeAction(index)}
              className="edit-assignment-action-list-item-remove"
            >
              X
            </span>
          </div>
        ))}
      </div>
      <div className="edit-assignment-action-list-bottom">
        <div
          className="edit-assignment-action-list-button"
          onClick={() => createAction()}
        >
          <span className="edit-assignment-action-list-button-label">
            Add action
          </span>
        </div>
      </div>
    </div>
  )
}

export default FormBodyRightList