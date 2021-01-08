import React from 'react'
import './keyboard.css'
import Key from './key'
import Spacer from './spacer'

function Keyboard({
  keys,
  selectedState,
  selectedKey,
  setSelectedKey
}) {
  return (
    <div className="keyboard">
      <Key label="Esc" keyData={{key: {name: 'escape'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Spacer length="5" />
      <Key label="F1" keyData={{key: {name: 'f1'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="F2" keyData={{key: {name: 'f2'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="F3" keyData={{key: {name: 'f3'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="F4" keyData={{key: {name: 'f4'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Spacer length="3" />
      <Key label="F5" keyData={{key: {name: 'f5'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="F6" keyData={{key: {name: 'f6'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="F7" keyData={{key: {name: 'f7'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="F8" keyData={{key: {name: 'f8'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Spacer length="3" />
      <Key label="F9" keyData={{key: {name: 'f9'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="F10" keyData={{key: {name: 'f10'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="F11" keyData={{key: {name: 'f11'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="F12" keyData={{key: {name: 'f12'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />

      <Key label="~" keyData={{ch: '`'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="1" keyData={{ch: '1'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="2" keyData={{ch: '2'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="3" keyData={{ch: '3'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="4" keyData={{ch: '4'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="5" keyData={{ch: '5'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="6" keyData={{ch: '6'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="7" keyData={{ch: '7'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="8" keyData={{ch: '8'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="9" keyData={{ch: '9'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="0" keyData={{ch: '0'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="-" keyData={{ch: '-'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="=" keyData={{ch: '='}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="Backspace" special="back" keyData={{key: {name: 'backspace'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />

      <Key label="Tab" special="tab" keyData={{key: {name: 'tab'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="Q" keyData={{ch: 'q', key:{name: 'q'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="W" keyData={{ch: 'w', key:{name: 'w'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="E" keyData={{ch: 'e', key:{name: 'e'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="R" keyData={{ch: 'r', key:{name: 'r'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="T" keyData={{ch: 't', key:{name: 't'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="Y" keyData={{ch: 'y', key:{name: 'y'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="U" keyData={{ch: 'u', key:{name: 'u'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="I" keyData={{ch: 'i', key:{name: 'i'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="O" keyData={{ch: 'o', key:{name: 'o'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="P" keyData={{ch: 'p', key:{name: 'p'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="[" keyData={{ch: '['}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="]" keyData={{ch: ']'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="\" special="or" keyData={{ch: '\\'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />

      {/* <Key label="Caps'}} special="caps-lock" /> */}
      <Spacer length="10" />
      <Key label="A" keyData={{ch: 'a', key:{name: 'a'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="S" keyData={{ch: 's', key:{name: 's'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="D" keyData={{ch: 'd', key:{name: 'd'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="F" keyData={{ch: 'f', key:{name: 'f'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="G" keyData={{ch: 'g', key:{name: 'g'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="H" keyData={{ch: 'h', key:{name: 'h'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="J" keyData={{ch: 'j', key:{name: 'j'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="K" keyData={{ch: 'k', key:{name: 'k'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="L" keyData={{ch: 'l', key:{name: 'l'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label=";" keyData={{ch: ';'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="'" keyData={{ch: '\''}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="Enter" special="enter" keyData={{key:{name: 'return'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />

      {/* <Key label="Shift'}} special="shift" /> */}
      <Spacer length="13" />
      <Key label="Z" keyData={{ch: 'z', key:{name: 'z'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="X" keyData={{ch: 'x', key:{name: 'x'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="C" keyData={{ch: 'c', key:{name: 'c'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="V" keyData={{ch: 'v', key:{name: 'v'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="B" keyData={{ch: 'b', key:{name: 'b'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="N" keyData={{ch: 'n', key:{name: 'n'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="M" keyData={{ch: 'm', key:{name: 'm'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="," keyData={{ch: ','}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="." keyData={{ch: '.'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Key label="/" keyData={{ch: '/'}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      {/* <Key label="Shift'}} special="shift" /> */}
      <Spacer length="13" />

      {/* <Key label="Ctrl'}} special="control" /> */}
      <Spacer length="6" />
      {/* <Key label="Meta'}} special="root" /> */}
      <Spacer length="6" />
      {/* <Key label="Alt'}} special="alt" /> */}
      <Spacer length="6" />
      <Key label="Space" special="space" keyData={{key:{name: 'space'}}} keys={keys} selectedState={selectedState} selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      {/* <Key label="Alt'}} special="alt" /> */}
      <Spacer length="6" />
      {/* <Key label="Meta'}} special="root" /> */}
      <Spacer length="6" />
      {/* <Key label="Ctrl'}} special="control" /> */}
      <Spacer length="6" />
      {/* <Key label="Fn'}} special="fn" /> */}
      <Spacer length="6" />
    </div>
  )

}

export default Keyboard