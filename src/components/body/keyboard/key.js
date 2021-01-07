import React from 'react'
import './keyboard.css'

function Key({ special, data }) {

  return (
    <div className={`key${special ? ` ${special}` : ''}`}>
      <div className="key-label">
        {data ? data.label ? data.label : '' : ''}
      </div>
      <div className="key-state-container">
      </div>
    </div>
  )

}

export default Key