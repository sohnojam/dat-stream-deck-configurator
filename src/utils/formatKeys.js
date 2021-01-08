function formatKeys(config) {
  const keys = []
  config.states.forEach(state => {
    state.keys.forEach(key => {
      const peKey = keys.findIndex(cKey => cKey.label === key.label)
      if (peKey !== -1) {
        keys[peKey].states.push({
          state: state.name,
          color: state.color,
          name: key.name,
          actions: key.actions
        })
      } else {
        keys.push({
          ...key,
          states: [
            {
              state: state.name,
              color: state.color,
              name: key.name,
              actions: key.actions
            }
          ]
        })
      }
    })
  })
  return keys
}

export default formatKeys