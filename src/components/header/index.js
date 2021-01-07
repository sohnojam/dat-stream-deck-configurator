import React from 'react'
import NameTag from './nameTag'
import VersionTag from './versionTag'
import './header.css'

function Header() {

  return (
    <div className="header">
      <div className="header-container">
        <NameTag />
        <VersionTag />
      </div>
    </div>
  )

}

export default Header