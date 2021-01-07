import NameTag from './NameTag'

function Header() {

  return (
    <div style={{
      position: 'relative',
      left: 0,
      top: 0,
      right: 0,
      height: 100,
      backgroundColor: '#c0c0c0',
      display: 'flex',
      flexDirection: 'row'
    }}>
      <NameTag />
    </div>
  )

}

export default Header