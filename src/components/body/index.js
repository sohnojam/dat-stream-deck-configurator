import React from 'react'
import './body.css'
import States from './states'
import Keyboard from './keyboard'
import Selected from './selected'

function Body({
  states,
  selectedState,
  setSelectedState,
  addState,
  removeState,
  keys,
  selectedKey,
  setSelectedKey,
  addKey,
  modifyKey,
  removeKey
}) {
  return (
    <div className="body">
      <div className="body-container">
        <States states={states} selectedState={selectedState} setSelectedState={setSelectedState} addState={addState} removeState={removeState} />
        <Keyboard keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
        <Selected selectedKey={selectedKey} addKey={addKey} modifyKey={modifyKey} removeKey={removeKey} />
      </div>
    </div>
  )
}

export default Body