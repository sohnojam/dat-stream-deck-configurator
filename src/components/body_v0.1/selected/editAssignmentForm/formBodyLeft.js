import React from 'react'
import './editAssignmentForm.css'

function FormBodyLeft({
  states,
  name,
  onChangeNameInput,
  state,
  onChangeStateInput,
  disableStateInput,
  color
}) {

  return (
    <div className="edit-assignment-form-body-c1">

      <span className="edit-assignment-form-label">
        Assignment name
      </span>
      <input
        className="edit-assignment-form-input-text"
        type="text"
        onChange={(e) => onChangeNameInput(e.target.value)}
        value={name || ''}
      />

      <span className="edit-assignment-form-label">
        State
      </span>
      <select
        className="edit-assignment-form-input-text"
        onChange={(e) => onChangeStateInput(e.target.value)}
        value={state || ''}
        disabled={disableStateInput}
      >
        <option value="" disabled>Select a state</option>
        {states.map((state, index) => (
          <option
            key={`optionstate${index}`}
            value={state.name}
          >
            {state.name}
          </option>
        ))}
      </select>
    </div>
  )

}

export default FormBodyLeft