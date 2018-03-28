export default (state = { pinging: true }, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case 'PING':
      return { pinging: true }
    case 'PONG':      
      return { pinging: false }
    default:
      return state
  }
}
