import React from 'react'
import './states.css'

function FileControl({
  newConfig,
  loadConfig,
  saveConfig
}) {
  return (
    <div className="states-c1">
      <div
        className="states-file-button"
        onClick={() => newConfig()}
      >
        <span>
          New config
        </span>
      </div>
      <div
        className="states-file-button"
        onClick={() => loadConfig()}
      >
        <span>
          Load config
        </span>
      </div>
      <div
        className="states-file-button"
        onClick={() => saveConfig()}
      >
        <span>
          Save config
        </span>
      </div>
    </div>
  )
}

export default FileControl