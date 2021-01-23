import React, { useState } from 'react'
import './states.css'

function EditState({
  states,
  selectedState,
  saveState,
  cancel
}) {

  const [name, setName] = useState(
    selectedState ?
      states.find(state => state.name === selectedState).name
    :
      ''
  )

  const [color, setColor] = useState(
    selectedState ? 'custom' : ''
  )

  const [customColor, setCustomColor] = useState(
    selectedState ?
      states.find(state => state.name === selectedState).color
    :
      ''
  )

  const onChangeName = (value) => {
    setName(value)
  }

  const onChangeColor = (value) => {
    setColor(value)
  }

  const onChangeCustomColor = (value) => {
    setCustomColor(value.length > 0 && value[0] !== '#' ? '#' : value)
  }

  const onClickSave = () => {
    saveState({
      name,
      color: (
        color === 'custom' ?
          customColor
        :
          color
      )
    })
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
          Name
        </span>
        <input
          className="states-edit-form-input-text"
          type="text"
          disabled={!!selectedState}
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
        />

        <span
          className="states-edit-form-label"
        >
          Color
        </span>
        <select
          className="states-edit-form-input-text"
          onChange={(e) => onChangeColor(e.target.value)}
          value={color}
        >
          <option key='0' value='' disabled>Select a color</option>
          <option key='1' value='#ffffff'>White</option>
          <option key='2' value='#000000'>Black</option>
          <option key='3' value='#ff0000'>Red</option>
          <option key='4' value='#00ff00'>Green</option>
          <option key='5' value='#0000ff'>Blue</option>
          <option key='6' value='#ffff00'>Yellow</option>
          <option key='7' value='#ff00ff'>Magenta</option>
          <option key='8' value='#00ffff'>Cyan</option>
          <option key='9' value='custom'>Custom color</option>
        </select>

        <span
          className="states-edit-form-label"
        >
          Custom color
        </span>
        <input
          className="states-edit-form-input-text"
          type="text"
          disabled={color !== 'custom'}
          value={customColor}
          onChange={(e) => onChangeCustomColor(e.target.value)}
        />

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

export default EditState