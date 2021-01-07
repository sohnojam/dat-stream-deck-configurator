function NameTag() {
  return (
    <div style={{
      position: 'relative',
      left: 0,
      top: 0,
      bottom: 0,
      width: 250,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        fontFamily: 'sans-serif',
        fontSize: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <span>dat-stream-deck</span>
      </div>
      <div style={{
        fontFamily: 'sans-serif',
        fontSize: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <span>configurator</span>
      </div>
    </div>
  )
}

export default NameTag