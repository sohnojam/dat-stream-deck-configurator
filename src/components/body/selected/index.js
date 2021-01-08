import React from 'react'
import './selected.css'
import NoSelection from './noSelection'

function Selected({
  selectedKey,
  addKey,
  modifyKey,
  removeKey
}) {

  return (
    <div className="selected-container">
      {selectedKey ?
        <span>things</span>
      :
        <NoSelection />
      }
    </div>
  )

}

export default Selected