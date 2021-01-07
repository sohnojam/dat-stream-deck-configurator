import React from 'react'
import './body.css'
import States from './states'
import Keyboard from './keyboard'
import Selected from './selected'

function Body() {
  return (
    <div className="body">
      <div className="body-container">
        <States />
        <Keyboard />
        <Selected />
      </div>
    </div>
  )
}

export default Body