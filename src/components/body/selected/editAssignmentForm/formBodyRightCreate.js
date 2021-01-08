import React, { useState } from 'react'
import './editAssignmentForm.css'

function FormBodyRightCreate({
  addAction,
  cancelCreateAction
}) {

  const [inputs, setInputs] = useState({type: ''})

  const onChangeType = (value) => {
    switch(value) {
      case 'connect': {
        setInputs({
          type: 'connect',
          startStateName: ''
        })
        break
      }
      case 'switchScene': {
        setInputs({
          type: 'switchScene',
          sceneName: ''
        })
        break
      }
      case 'returnToStoredScene': {
        setInputs({
          type: 'returnToStoredScene'
        })
        break
      }
      case 'setSourceMute': {
        setInputs({
          type: 'setSourceMute',
          sourceName: '',
          mute: false
        })
        break
      }
      case 'setSourceVisibility': {
        setInputs({
          type: 'setSourceVisibility',
          sceneName: '',
          sourceName: '',
          visible: true
        })
        break
      }
      case 'setTransition': {
        setInputs({
          type: 'setTransition',
          transitionName: ''
        })
        break
      }
      case 'setTransitionDuration': {
        setInputs({
          type: 'setTransitionDuration',
          transitionDuration: 0
        })
        break
      }
      case 'switchState': {
        setInputs({
          type: 'switchState',
          stateName: ''
        })
        break
      }
      case 'storeCurrentScene': {
        setInputs({
          type: 'storeCurrentScene'
        })
        break
      }
      case 'dropStoredScene': {
        setInputs({
          type: 'dropStoredScene'
        })
        break
      }
      case 'exit': {
        setInputs({
          type: 'exit'
        })
        break
      }
    }
  }

  return (
    <div className="edit-assignment-form-body-c2">
      {Object.keys(inputs).map((inputKey, index) => (
        <React.Fragment>

          {inputKey === 'type' ?
            <React.Fragment>
              <span className="edit-assignment-form-label">Action type</span>
              <select
                className="edit-assignment-form-input-text"
                onChange={(e) => onChangeType(e.target.value)}
                value={inputs[inputKey]}
              >
                <option key='0' value='' disabled>Select action type</option>
                <option key='1' value='connect'>Connect</option>
                <option key='2' value='switchScene'>Switch scene</option>
                <option key='3' value='returnToStoredScene'>Return to stored scene</option>
                <option key='4' value='setSourceMute'>Set source mute</option>
                <option key='5' value='setSourceVisibility'>Set source visibility</option>
                <option key='6' value='setTransition'>Set transition</option>
                <option key='7' value='setTransitionDuration'>Set transition duration</option>
                <option key='8' value='switchState'>Switch state</option>
                <option key='9' value='storeCurrentScene'>Store current scene</option>
                <option key='10' value='dropStoredScene'>Drop stored scene</option>
                <option key='11' value='exit'>Exit</option>
              </select>
            </React.Fragment>

          : inputKey === 'startStateName' ?
            <React.Fragment>
              <span className="edit-assignment-form-label">Start state</span>
              <input
                className="edit-assignment-form-input-text"
                type="text"
                onChange={(e) => setInputs({...inputs, startStateName: e.target.value})}
                value={inputs[inputKey]}
              />
            </React.Fragment>

          : inputKey === 'sceneName' ?
            <React.Fragment>
              <span className="edit-assignment-form-label">Scene name</span>
              <input
                className="edit-assignment-form-input-text"
                type="text"
                onChange={(e) => setInputs({...inputs, sceneName: e.target.value})}
                value={inputs[inputKey]}
              />
            </React.Fragment>

          : inputKey === 'sourceName' ?
            <React.Fragment>
              <span className="edit-assignment-form-label">Source name</span>
              <input
                className="edit-assignment-form-input-text"
                type="text"
                onChange={(e) => setInputs({...inputs, sourceName: e.target.value})}
                value={inputs[inputKey]}
              />
            </React.Fragment>

          : inputKey === 'mute' ?
            <React.Fragment>
              <span className="edit-assignment-form-label">Set to</span>
              <select
                className="edit-assignment-form-input-text"
                onChange={(e) => setInputs({...inputs, mute: e.target.value})}
                value={inputs[inputKey]}
              >
                <option key='0' value={true}>Muted</option>
                <option key='1' value={false}>Unmuted</option>
              </select>
            </React.Fragment>

          : inputKey === 'visible' ?
            <React.Fragment>
              <span className="edit-assignment-form-label">Set to</span>
              <select
                className="edit-assignment-form-input-text"
                onChange={(e) => setInputs({...inputs, visible: e.target.value})}
                value={inputs[inputKey]}
              >
                <option key='0' value={true}>Visible</option>
                <option key='1' value={false}>Invisible</option>
              </select>
            </React.Fragment>

          : inputKey === 'transitionName' ?
            <React.Fragment>
              <span className="edit-assignment-form-label">Transition name</span>
              <input
                className="edit-assignment-form-input-text"
                type="text"
                onChange={(e) => setInputs({...inputs, transitionName: e.target.value})}
                value={inputs[inputKey]}
              />
            </React.Fragment>

          : inputKey === 'transitionDuration' ?
            <React.Fragment>
              <span className="edit-assignment-form-label">Transition duration (ms)</span>
              <input
                className="edit-assignment-form-input-text"
                type="text"
                onChange={(e) => Number(e.target.value) && setInputs({...inputs, transitionDuration: Number(e.target.value)})}
                value={String(inputs[inputKey])}
              />
            </React.Fragment>

          : inputKey === 'stateName' ?
            <React.Fragment>
              <span className="edit-assignment-form-label">State name</span>
              <input
                className="edit-assignment-form-input-text"
                type="text"
                onChange={(e) => setInputs({...inputs, stateName: e.target.value})}
                value={inputs[inputKey]}
              />
            </React.Fragment>

          :
            null
          }
        </React.Fragment>
      ))}
      <div className="edit-assignment-create-bottom">
        <div
          className="edit-assignment-create-button"
          onClick={() => addAction(inputs)}
        >
          <span>
            Confirm
          </span>
        </div>
        <div
          className="edit-assignment-create-cancel"
          onClick={() => cancelCreateAction()}
        >
          <span>
            Cancel
          </span>
        </div>
      </div>
    </div>
  )
}

export default FormBodyRightCreate