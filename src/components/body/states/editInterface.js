import React, { useState } from 'react'
import './states.css'

function EditInterface({
  cancel
}) {

  return (
    <div className="states-c2">
      <div className="states-edit-form">
        <div className="states-edit-form-header">
          <div
            className="states-edit-form-header-cancel"
            onClick={() => cancel()}
          >
            <span>Cancel</span>
          </div>
        </div>
      </div>
    </div>
  )

}

export default EditInterface