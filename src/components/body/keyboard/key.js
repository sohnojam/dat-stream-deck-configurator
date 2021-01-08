import React from 'react'
import './keyboard.css'

function Key({
  special,
  label,
  keyData,
  keys,
  selectedState,
  setSelectedKey
}) {

  return (
    <div className={`key${special ? ` ${special}` : ''}`}>
      <div className="key-label">
        {label}
      </div>
      <div className="key-state-container">
      </div>
    </div>
  )

}

export default Key