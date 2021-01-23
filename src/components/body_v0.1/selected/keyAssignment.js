import React from 'react'
import './selected.css'

function KeyAssignment({
  selectedKey,
  assignment,
  editAssignment
}) {

  return (
    <div
      className="selected-assignment-container"
      onClick={() => editAssignment()}
    >
      <div className="selected-assignment-header">
        <div 
          className="selected-assignment-header-circle" 
          style={{
            backgroundColor: assignment.color || '#000000',
            boxShadow: `0 0 5px 0 ${assignment.color || '#000000'}`
          }}
        />
        <div className="selected-assignment-header-text" style={{color: assignment.color || '#000000'}}>
          <span className="selected-assignment-header-text-line1">
            {assignment.name || 'Assignment'}
          </span>
          <span className="selected-assignment-header-text-line2">
            {assignment.state || "State"}{' - '}{selectedKey.label}
          </span>
        </div>
      </div>
      <div className="selected-assignment-actions">
        {assignment.actions.map((action, index) => (
          <div
            key={`${selectedKey.label}assign${assignment.state}act${index}`}
            className="selected-assignment-actions-line"
          >
            <span className="selected-assignment-actions-type" style={{color: assignment.color || '#000000'}}>
              {action.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  )

}

export default KeyAssignment