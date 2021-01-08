import React, { useState, useEffect } from 'react'
import './selected.css'
import KeyAssignment from './keyAssignment'
import NewKeyAssignment from './newKeyAssignment'
import EditKeyAssignment from './editKeyAssignment'
import NoSelection from './noSelection'

function Selected({
  states,
  selectedState,
  selectedKey,
  selectedKeyStates,
  addKey,
  modifyKey,
  removeKey
}) {

  const [isEditing, setIsEditing] = useState(null)

  useEffect(() => {
    if (
      (isEditing && !selectedKey)
      ||
      (isEditing && selectedKey.label !== isEditing.selectedKey.label)
    ) {
      setIsEditing(null)
    }
  })

  const editAssignment = (selectedKey, currentAssignment) => {
    setIsEditing({selectedKey, currentAssignment})
  }

  const cancelEditAssignment = () => {
    setIsEditing(null)
  }

  return (
    <div className="selected-container">
      {selectedKey ? 
        isEditing ?
          <EditKeyAssignment
            selectedKey={isEditing.selectedKey}
            currentAssignment={isEditing.currentAssignment}
            cancelEditAssignment={cancelEditAssignment}
          />
        :
          <div className="selected-assignments-container">
            {selectedKeyStates.map((state, index) => (
              <KeyAssignment
                key={`assign${index}`}
                selectedKey={selectedKey}
                assignment={state}
                editAssignment={() => editAssignment(selectedKey, state)}
              />
            ))}
            <NewKeyAssignment
              newAssignment={() => editAssignment(selectedKey, {actions: [], name: '', state: null, color: ''})}
            />
          </div>
      :
        <NoSelection />
      }
    </div>
  )

}

export default Selected