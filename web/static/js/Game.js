// import {joinChannel} from './common/channels'
import {Lobby} from './states/Lobby'

export class Game extends Phaser.Game {
  constructor (width, height, container, assetPath) {
    super(width, height, Phaser.AUTO, container)
    this.assetPath = assetPath
    this.state.add('lobby', Lobby, false)
    this.state.start('lobby')
  }

  start (socket) {
    // socket.connect()
    // const channel = socket.channel('games:lobby', {})

    // joinChannel(channel, () => {
    //   console.log('Joined successfully')
    //   this.state.start('lobby', true, false, channel)
    // })
  }
}
