const initialConfig = {
  controller: {
    initStateName: 'init'
  },
  interface: {
  },
  states: [
    {
      name: 'init',
      color: '#000000',
      keys: [
        {
          label: 'C',
          keyData: {
            key: {
              name: 'c'
            },
            ch: 'c'
          },
          name: 'Connect',
          actions: [
            {
              type: 'connect',
              startStateName: 'main'
            }
          ]
        },
        {
          label: 'X',
          keyData: {
            key: {
              name: 'x'
            },
            ch: 'x'
          },
          name: 'Exit',
          action: [
            {
              type: 'exit'
            }
          ]
        }
      ]
    },
    {
      name: 'main',
      color: '#ff0000',
      keys: [
        {
          label: 'Backspace',
          keyData: {
            key: {
              name: 'backspace'
            }
          },
          name: 'Exit',
          actions: [
            {
              type: 'exit'
            }
          ]
        }
      ]
    }
  ]
}

export default initialConfig