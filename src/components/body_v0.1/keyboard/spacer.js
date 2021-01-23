import React from 'react'
import './keyboard.css'

function Spacer({ length }) {

  return (
    <div style={{ gridColumn: `span ${length}`}} />
  )

}

export default Spacer