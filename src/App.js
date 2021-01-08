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

  const states = formatStates(config)
  const keys = formatKeys(config)

  const keyStates = (keys, key) => {
    if (key && key.label) {
      const fKey = keys.find(cKey => cKey.label === key.label)
      if (fKey && fKey.states) {
        return fKey.states
      }
    }
    return []
  }

  return (
    <div>
      <Header />
      <Body
        newConfig={newConfig}
        loadConfig={loadConfig}
        saveConfig={saveConfig}
        states={states}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        addState={addState}
        modifyState={modifyState}
        removeState={removeState}
        keys={keys}
        selectedKey={selectedKey}
        selectedKeyStates={keyStates(keys, selectedKey)}
        setSelectedKey={setSelectedKeyHandler}
        addKey={addKey}
        modifyKey={modifyKey}
        removeKey={removeKey}
      />
    </div>
  )
}

export default App
