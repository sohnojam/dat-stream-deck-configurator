import React from 'react'
import './states.css'

function FileControl({
  newConfig,
  loadConfig,
  saveConfig,
  editInterface
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
      <label
        className="states-file-button"
      >
        <input
          className="states-file-input-hidden"
          type="file"
          accept="file_extension,.json"
          onChange={e => loadConfig((e.target.files && e.target.files.length && e.target.files[0]) || null)}
        />
        <span>
          Load config
        </span>
      </label>
      <div
        className="states-file-button"
        onClick={() => saveConfig()}
      >
        <span>
          Save config
        </span>
      </div>
      <div
        className="states-file-button"
        onClick={() => editInterface()}
      >
        <span>
          Edit interface
        </span>
      </div>
    </div>
  )
}

export default FileControl