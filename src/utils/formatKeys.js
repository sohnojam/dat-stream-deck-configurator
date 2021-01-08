function formatKeys(config) {
  const keys = []
  config.states.forEach(state => {
    state.keys.forEach(key => {
      const peKey = keys.findIndex(cKey => cKey.label === key.label)
      if (peKey !== -1) {
        keys[peKey].states.push({
          name: state.name,
          color: state.color
        })
      } else {
        keys.push({
          ...key,
          states: [
            {
              name: state.name,
              color: state.color
            }
          ]
        })
      }
    })
  })
  return keys
}

export default formatKeys