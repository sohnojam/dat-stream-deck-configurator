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

  const newConfig = () => {
    if (configModified) {
      window.confirm('There are unsaved changes in your configuration. Are you sure you want to do this?')
      && window.location.reload()
    } else {
      window.location.reload()
    }
  }

  const loadConfigRead = (filePointer) => {
    const fileReader = new FileReader()
    fileReader.readAsText(filePointer, 'UTF-8')
    fileReader.onload = (e) => {
      try {
        const newConfig = JSON.parse(e.target.result)
        setConfig(newConfig)
      } catch (e) {
        console.error(e)
      }
    }
  }

  const loadConfig = (filePointer) => {
    if (configModified) {
      window.confirm('There are unsaved changes in your configuration. Are you sure you want to do this?')
      && loadConfigRead(filePointer)
    } else {
      loadConfigRead(filePointer)
    }
  }

  const saveConfig = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(config)], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "dsdconfig.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    setConfigModified(false)
  }

  const modifyInterface = (iface, startStateName) => {
    const newConfig = Object.assign({}, config)
    newConfig.interface = iface
    newConfig.startStateName = startStateName
    setConfig(newConfig)
    setConfigModified(true)
  }
  
  const addState = (state) => {
    const newConfig = Object.assign({}, config)
    newConfig.states.push({
      name: state.name,
      color: state.color,
      keys: []
    })
    setConfig(newConfig)
    setConfigModified(true)
  }

  const modifyState = (stateName, state) => {
    const newConfig = Object.assign({}, config)
    const stateIndex = newConfig.states.findIndex(state => state.name === stateName)
    newConfig.states[stateIndex] = {
      name: state.name,
      color: state.color,
      keys: newConfig.states[stateIndex].keys 
    }
    setConfig(newConfig)
    setConfigModified(true)
  }

  const removeState = (stateIndex) => {
    const newConfig = Object.assign({}, config)
    newConfig.states.splice(stateIndex, 1)
    setConfig(newConfig)
    setConfigModified(true)
    setSelectedState(null)
  }

  const setSelectedKeyHandler = (key) => {
    if (shallowCompare(key, selectedKey)) {
      setSelectedKey(null)
    } else {
      setSelectedKey(key)
    }
  }

  const addKey = (stateName, selectedKey, data) => {
    const newConfig = Object.assign({}, config)
    const stateIndex = newConfig.states.findIndex(state => state.name === stateName)
    newConfig.states[stateIndex].keys.push({
      label: selectedKey.label,
      keyData: selectedKey.keyData,
      name: data.name,
      actions: data.actions
    })
    setConfig(newConfig)
    setConfigModified(true)
  }

  const modifyKey = (stateName, selectedKey, data) => {
    const newConfig = Object.assign({}, config)
    const stateIndex = newConfig.states.findIndex(state => state.name === stateName)
    const keyIndex = newConfig.states[stateIndex].keys.findIndex(key => key.label === selectedKey.label)
    newConfig.states[stateIndex].keys[keyIndex] = {
      label: selectedKey.label,
      keyData: selectedKey.keyData,
      name: data.name,
      actions: data.actions
    }
    setConfig(newConfig)
    setConfigModified(true)
  }

  const removeKey = (stateName, selectedKey) => {
    const newConfig = Object.assign({}, config)
    const stateIndex = newConfig.states.findIndex(state => state.name === stateName)
    const keyIndex = newConfig.states[stateIndex].keys.findIndex(key => key.label === selectedKey.label)
    newConfig.states[stateIndex].keys.splice(keyIndex, 1)
    setConfig(newConfig)
    setConfigModified(true)
  }

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
        interfaceConfig={{interface: config.interface, startStateName: config.startStateName}}
        modifyInterface={modifyInterface}
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
