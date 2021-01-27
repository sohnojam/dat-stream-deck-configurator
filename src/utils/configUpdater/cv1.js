export default function cv1(prevConfig) {

  const newAddress = (
    prevConfig.interface.type === 'OBSS' ?
      prevConfig.interface.address.split(':')[0]
    : prevConfig.interface.type === 'SLOBS' ?
      prevConfig.interface.address.split(':')[0].replace('http://','')
    : ''
  )
  const newPort = (
    prevConfig.interface.type === 'OBSS' ?
      prevConfig.interface.address.split(':')[1]
    : prevConfig.interface.type === 'SLOBS' ?
      prevConfig.interface.address.split(':')[1].replace('/api','')
    : ''
  )

  const newConfig = {
    ...prevConfig,
    'interface.address': newAddress,
    'interface.port': newPort
  }

  return newConfig

}