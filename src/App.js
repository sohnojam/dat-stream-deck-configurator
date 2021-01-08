import React, { useState } from 'react'

import initialConfig from './utils/initialConfig'
import shallowCompare from './utils/shallowCompare'
import formatKeys from './utils/formatKeys'
import formatStates from './utils/formatStates'

import Header from './components/header'
import Body from './components/body'

function App() {

  const [config, setConfig] = useState(initialConfig)
  const [configModified, setConfigModified] = useState(false)
  const [selectedState, setSelectedState] = useState(null)
  const [selectedKey, setSelectedKey] = useState(null)

  const newConfig = () => null

  const loadConfig = () => null

  const saveConfig = () => null
  
  const addState = () => null

  const modifyState = () => null

  const removeState = () => null

  const setSelectedKeyHandler = (key) => {
    if (shallowCompare(key, selectedKey)) {
      setSelectedKey(null)
    } else {
      setSelectedKey(key)
    }
  }

  const addKey = () => null

  const modifyKey = () => null

  const removeKey = () => null

  console.log(config)

  return (
    <div>
      <Header />
      <Body
        newConfig={newConfig}
        loadConfig={loadConfig}
        saveConfig={saveConfig}
        states={formatStates(config)}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        addState={addState}
        modifyState={modifyState}
        removeState={removeState}
        keys={formatKeys(config)}
        selectedKey={selectedKey}
        setSelectedKey={setSelectedKeyHandler}
        addKey={addKey}
        modifyKey={modifyKey}
        removeKey={removeKey}
      />
    </div>
  )
}

export default App
