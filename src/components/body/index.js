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
  modifyState,
  removeState,
  keys,
  selectedKey,
  selectedKeyStates,
  setSelectedKey,
  addKey,
  modifyKey,
  removeKey
}) {
  return (
    <div className="body">
      <div className="body-container">
        <States
          states={states}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          addState={addState}
          modifyState={modifyState}
          removeState={removeState}
        />

        <Keyboard
          keys={keys}
          selectedState={selectedState}
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
        />

        <Selected
          selectedState={selectedState}
          selectedKey={selectedKey}
          selectedKeyStates={selectedKeyStates}
          addKey={addKey}
          modifyKey={modifyKey}
          removeKey={removeKey}
        />
      </div>
    </div>
  )
}

export default Body