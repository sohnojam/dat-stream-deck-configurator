import React from 'react'
import './selected.css'

function NewKeyAssignment({
  newAssignment
}) {

  return (
    <div
      className="selected-newassignment-container"
      onClick={() => newAssignment()}
    >
      Add new
    </div>
  )

}

export default NewKeyAssignment