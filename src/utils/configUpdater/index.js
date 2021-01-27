import versionChecker from './versionChecker'
import unversioned from './unversioned'
import cv1 from './cv1'

function needsUpdate(config) {
  const currentVersion = 'cv2'
  return versionChecker(config) === currentVersion
}

function updateConfig(config) {

  if (needsUpdate(config)) {

    if (versionChecker(config) === 'unversioned') {
      return cv1(unversioned(config))
    } else if (versionChecker(config) === 'cv1') {
      return cv1(config)
    } else {
      throw 'CONFIG_VERSION_ERROR'
    }

  } else {
    return config
  }

}

const ConfigUpdater = {
  updateConfig
}

export default ConfigUpdater