import React, { useState } from 'react'
import './selected.css'
import KeyAssignment from './keyAssignment'
import NewKeyAssignment from './newKeyAssignment'
import EditKeyAssignment from './editKeyAssignment'
import NoSelection from './noSelection'

function Selected({
  selectedState,
  selectedKey,
  selectedKeyStates,
  addKey,
  modifyKey,
  removeKey
}) {

  const [isEditing, setIsEditing] = useState(null)

  return (
    <div className="selected-container">
      {selectedKey ? 
        isEditing ?
          <EditKeyAssignment
          />
        :
          <div className="selected-assignments-container">
            {selectedKeyStates.map((state, index) => (
              <KeyAssignment
                key={`assign${index}`}
                selectedKey={selectedKey}
                assignment={state}
              />
            ))}
            <NewKeyAssignment
            />
          </div>
      :
        <NoSelection />
      }
    </div>
  )

}

export default Selected