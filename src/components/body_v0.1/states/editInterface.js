import React, { useState } from 'react'
import './states.css'

function EditInterface({
  interfaceConfig,
  states,
  saveInterface,
  cancel
}) {

  const [type, setType] = useState(
    (interfaceConfig && interfaceConfig.interface && interfaceConfig.interface.type) || ''
  )

  const [address, setAddress] = useState(
    interfaceConfig && interfaceConfig.interface && interfaceConfig.interface.type ?
      interfaceConfig.interface.type === 'OBSS' ?
        interfaceConfig.interface.address && interfaceConfig.interface.address.split(':').length > 1 ?
          interfaceConfig.interface.address.split(':')[0]
        :
          ''
      : interfaceConfig.interface.type === 'SLOBS' ?
        interfaceConfig.interface.address && interfaceConfig.interface.address.split(':').length > 1 ?
          interfaceConfig.interface.address.split(':')[0].replace('http://', '')
        :
          ''
      :
        ''
    :
      ''
  )

  const [port, setPort] = useState(
    interfaceConfig && interfaceConfig.interface && interfaceConfig.interface.type ?
      interfaceConfig.interface.type === 'OBSS' ?
        interfaceConfig.interface.address && interfaceConfig.interface.address.split(':').length > 1 ?
          interfaceConfig.interface.address.split(':')[1]
        :
          ''
      : interfaceConfig.interface.type === 'SLOBS' ?
        interfaceConfig.interface.address && interfaceConfig.interface.address.split(':').length > 1 ?
          interfaceConfig.interface.address.split(':')[1].replace('/api', '')
        :
          ''
      :
        ''
    :
      ''
  )

  const [password, setPassword] = useState(
    interfaceConfig && interfaceConfig.interface && interfaceConfig.interface.type ?
      interfaceConfig.interface.type === 'OBSS' ?
        interfaceConfig.interface.password || ''
      :
        ''
    :
      ''
  )

  const [token, setToken] = useState(
    interfaceConfig && interfaceConfig.interface && interfaceConfig.interface.type ?
      interfaceConfig.interface.type === 'SLOBS' ?
        interfaceConfig.interface.token || ''
      :
        ''
    :
      ''
  )

  const [startStateName, setStartStateName] = useState(
    (interfaceConfig && interfaceConfig.controller && interfaceConfig.controller.startStateName) || ''
  )

  const onChangeType = (value) => {
    setType(value)
  }

  const onChangeAddress = (value) => {
    setAddress(value)
  }

  const onChangePort = (value) => {
    setPort(value)
  }

  const onChangePassword = (value) => {
    setPassword(value)
  }

  const onChangeToken = (value) => {
    setToken(value)
  }

  const onChangeStartStateName = (value) => {
    setStartStateName(value)
  }

  const onClickSave = () => {
    saveInterface({
      type,
      address: (
        type === 'OBSS' ?
          `${address}:${port}`
        : type === 'SLOBS' ?
          `http://${address}:${port}/api`
        : ''
      ),
      password: type === 'OBSS' ? password : undefined,
      token: type === 'SLOBS' ? token : undefined
    }, {startStateName})
  }

  return (
    <div className="states-c2">
      <div className="states-edit-form">
        <div className="states-edit-form-header">
          <div
            className="states-edit-form-header-cancel"
            onClick={() => cancel()}
          >
            <span>Cancel</span>
          </div>
        </div>

        <span
          className="states-edit-form-label"
        >
          Type
        </span>
        <select
          className="states-edit-form-input-text"
          onChange={(e) => onChangeType(e.target.value)}
          value={type}
        >
          <option key='0' value='' disabled>Select interface type</option>
          <option key='1' value='OBSS'>OBS Studio</option>
          <option key='2' value='SLOBS'>Streamlabs OBS</option>
        </select>

        <span
          className="states-edit-form-label"
        >
          Address (Local IP)
        </span>
        <input
          className="states-edit-form-input-text"
          type="text"
          value={address}
          onChange={(e) => onChangeAddress(e.target.value)}
        />

        <span
          className="states-edit-form-label"
        >
          Port
        </span>
        <input
          className="states-edit-form-input-text"
          type="text"
          value={port}
          onChange={(e) => onChangePort(e.target.value)}
        />

        {type === 'OBSS' ?
          <React.Fragment>
            <span
              className="states-edit-form-label"
            >
              Password
            </span>
            <input
              className="states-edit-form-input-text"
              type="password"
              value={password}
              onChange={(e) => onChangePassword(e.target.value)}
            />
          </React.Fragment>
        : type === 'SLOBS' ?
          <React.Fragment>
            <span
              className="states-edit-form-label"
            >
              Token
            </span>
            <input
              className="states-edit-form-input-text"
              type="password"
              value={token}
              onChange={(e) => onChangeToken(e.target.value)}
            />
          </React.Fragment>
        : null}

        <span
          className="states-edit-form-label"
        >
          Start state
        </span>
        <select
          className="states-edit-form-input-text"
          value={startStateName}
          onChange={(e) => onChangeStartStateName(e.target.value)}
        >
          <option key='0' value='' disabled>Select start state</option>
          {states.map((state, index) => (
            <option key={index+1} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>

        <div className="states-edit-form-footer">
          <div
            className="states-edit-form-footer-button"
            onClick={() => onClickSave()}
          >
            <span>Save</span>
          </div>
        </div>
      </div>
    </div>
  )

}

export default EditInterface