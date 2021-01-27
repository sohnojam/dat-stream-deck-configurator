import versionChecker from './versionChecker'
import unversioned from './unversioned'

function needsUpdate(config) {
  const currentVersion = 'cv1'
  return versionChecker(config) !== currentVersion
}

function updateConfig(config) {

  if (needsUpdate(config)) {

    if (versionChecker(config) === 'unversioned') {
      let newConfig = config
      newConfig = unversioned(newConfig)
      return newConfig
    }

  } else {
    return config
  }

}

const ConfigUpdater = {
  needsUpdate,
  updateConfig
}

export default ConfigUpdater