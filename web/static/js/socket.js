import {Socket} from 'phoenix'

let socket = new Socket('/socket', {params: {token: window.userToken}})
socket.connect()

export var channel = socket.channel('games:lobby', {})
channel.join()
  .receive('ok', resp => {
    console.log('Joined successfully', resp)
  })
  .receive('message', resp => {
    console.log('message', resp)
  })
  .receive('uuid', resp => {
    console.log('message', resp)
  })
  .receive('error', resp => {
    console.log('Unable to join', resp)
  })

export default socket
