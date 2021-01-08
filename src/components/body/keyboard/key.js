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

  return (
    <div
      className={`key${selectedKey && label === selectedKey.label ? ' key-selected' : ''}${special ? ` ${special}` : ''}`}
      onClick={() => setSelectedKey({label, keyData})}
    >
      <div className="key-label">
        {label}
      </div>
      <div className="key-state-container">
      </div>
    </div>
  )

}

export default Key