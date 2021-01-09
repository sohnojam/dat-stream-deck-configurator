import React from 'react'
import './states.css'

function StateList({
  states,
  selectedState,
  setSelectedState,
  modifyState,
  removeState
}) {

  return (
    <div className="states-c3">
      {states.map((state, index) => (
        <div
          key={`state${index}`}
          className={`states-list-item${state.name === selectedState ? ' states-list-item-selected' : ''}`}
          onClick={() => setSelectedState(state.name)}
        >
          <div className="states-list-item-label">
            <div
              className="states-list-item-circle"
              style={{backgroundColor: state.color, boxShadow: `0 0 4px 0 ${state.color}`}}
            />
            <span
              className="states-list-item-name"
              style={{color: state.color}}
            >
              {state.name}
            </span>
          </div>
          <div
            className="states-list-item-remove"
            onClick={() => removeState(states.findIndex(state => state.name === selectedState))}
          >
            X
          </div>
        </div>
      ))}
    </div>
  )

}

export default StateList