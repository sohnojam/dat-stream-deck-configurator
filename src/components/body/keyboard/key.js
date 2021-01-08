import React from 'react'
import './keyboard.css'

function Key({
  special,
  label,
  keyData,
  keys,
  selectedState,
  selectedKey,
  setSelectedKey
}) {

  const key = keys.find(cKey => cKey.label === label)
  let states = []
  if (key) {
    if (selectedState) {
      states = key.states.filter(state => state.name === selectedState)
    } else {
      states = key.states
    }
  }

  return (
    <div
      className={`key${selectedKey && label === selectedKey.label ? ' key-selected' : ''}${special ? ` ${special}` : ''}`}
      onClick={() => setSelectedKey({label, keyData})}
    >
      <div className="key-label">
        {label}
      </div>
      <div className="key-state-container">
        {key ?
          states.map((state, index) => (
            <div key={`key${label}s${index}`} className="key-state-circle" style={{backgroundColor: state.color}} />
          ))
        :
          null
        }
      </div>
    </div>
  )

}

export default Key