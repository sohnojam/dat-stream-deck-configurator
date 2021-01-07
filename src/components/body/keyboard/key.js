import React from 'react'
import './keyboard.css'

function Key({ special, data }) {

  return (
    <div className={`key${special ? ` ${special}` : ''}`}>
      {data ? data.label ? data.label : '' : ''}
    </div>
  )

}

export default Key