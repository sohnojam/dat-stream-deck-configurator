import React, { useState } from 'react'

import shallowCompare from './utils/shallowCompare'

import Header from './components/header'
import Body from './components/body'

function App() {

  const [selectedKey, setSelectedKey] = useState(null)

  const setSelectedKeyHandler = (key) => {
    if (shallowCompare(key, selectedKey)) {
      setSelectedKey(null)
    } else {
      setSelectedKey(key)
    }
  }

  return (
    <div>
      <Header />
      <Body selectedKey={selectedKey} setSelectedKey={setSelectedKeyHandler.bind(this)} />
    </div>
  )
}

export default App
