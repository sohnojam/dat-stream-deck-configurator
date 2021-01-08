function formatStates(config) {
  return config.states.map(state => ({
    name: state.name,
    color: state.color,
    keys: state.keys.length
  }))
}

export default formatStates