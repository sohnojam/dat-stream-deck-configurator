import React from 'react'
import './keyboard.css'
import Key from './key'
import Spacer from './spacer'

function Keyboard() {

  return (
    <div className="keyboard">
      <Key data={{label: 'Esc'}} />
      <Spacer length="5" />
      <Key data={{label: 'F1'}} />
      <Key data={{label: 'F2'}} />
      <Key data={{label: 'F3'}} />
      <Key data={{label: 'F4'}} />
      <Spacer length="3" />
      <Key data={{label: 'F5'}} />
      <Key data={{label: 'F6'}} />
      <Key data={{label: 'F7'}} />
      <Key data={{label: 'F8'}} />
      <Spacer length="3" />
      <Key data={{label: 'F9'}} />
      <Key data={{label: 'F10'}} />
      <Key data={{label: 'F11'}} />
      <Key data={{label: 'F12'}} />

      <Key data={{label: '~'}} />
      <Key data={{label: '1'}} />
      <Key data={{label: '2'}} />
      <Key data={{label: '3'}} />
      <Key data={{label: '4'}} />
      <Key data={{label: '5'}} />
      <Key data={{label: '6'}} />
      <Key data={{label: '7'}} />
      <Key data={{label: '8'}} />
      <Key data={{label: '9'}} />
      <Key data={{label: '0'}} />
      <Key data={{label: '-'}} />
      <Key data={{label: '='}} />
      <Key data={{label: 'Backspace'}} special="back" />

      <Key data={{label: 'Tab'}} special="tab" />
      <Key data={{label: 'Q'}} />
      <Key data={{label: 'W'}} />
      <Key data={{label: 'E'}} />
      <Key data={{label: 'R'}} />
      <Key data={{label: 'T'}} />
      <Key data={{label: 'Y'}} />
      <Key data={{label: 'U'}} />
      <Key data={{label: 'I'}} />
      <Key data={{label: 'O'}} />
      <Key data={{label: 'P'}} />
      <Key data={{label: '['}} />
      <Key data={{label: ']'}} />
      <Key data={{label: '\\'}} special="or" />

      {/* <Key data={{label: 'Caps'}} special="caps-lock" /> */}
      <Spacer length="10" />
      <Key data={{label: 'A'}} />
      <Key data={{label: 'S'}} />
      <Key data={{label: 'D'}} />
      <Key data={{label: 'F'}} />
      <Key data={{label: 'G'}} />
      <Key data={{label: 'H'}} />
      <Key data={{label: 'J'}} />
      <Key data={{label: 'K'}} />
      <Key data={{label: 'L'}} />
      <Key data={{label: ';'}} />
      <Key data={{label: '\''}} />
      <Key data={{label: 'Return'}} special="enter" />

      {/* <Key data={{label: 'Shift'}} special="shift" /> */}
      <Spacer length="13" />
      <Key data={{label: 'Z'}} />
      <Key data={{label: 'X'}} />
      <Key data={{label: 'C'}} />
      <Key data={{label: 'V'}} />
      <Key data={{label: 'B'}} />
      <Key data={{label: 'N'}} />
      <Key data={{label: 'M'}} />
      <Key data={{label: ','}} />
      <Key data={{label: '.'}} />
      <Key data={{label: '/'}} />
      {/* <Key data={{label: 'Shift'}} special="shift" /> */}
      <Spacer length="13" />

      {/* <Key data={{label: 'Ctrl'}} special="control" /> */}
      <Spacer length="6" />
      {/* <Key data={{label: 'Meta'}} special="root" /> */}
      <Spacer length="6" />
      {/* <Key data={{label: 'Alt'}} special="alt" /> */}
      <Spacer length="6" />
      <Key data={{label: 'Space'}} special="space" />
      {/* <Key data={{label: 'Alt'}} special="alt" /> */}
      <Spacer length="6" />
      {/* <Key data={{label: 'Meta'}} special="root" /> */}
      <Spacer length="6" />
      {/* <Key data={{label: 'Ctrl'}} special="control" /> */}
      <Spacer length="6" />
      {/* <Key data={{label: 'Fn'}} special="fn" /> */}
      <Spacer length="6" />
    </div>
  )

}

export default Keyboard