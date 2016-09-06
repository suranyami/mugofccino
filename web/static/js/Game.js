// import {joinChannel} from './common/channels'
import {Boot} from './states/Boot'
import {Lobby} from './states/Lobby'
import {MainScreen} from './states/MainScreen'

export class Game extends window.Phaser.Game {
  constructor (width, height, container, assetPath) {
    super(width, height, window.Phaser.AUTO, container)
    this.assetPath = assetPath
    this.state.add('boot', Boot, false)
    this.state.add('lobby', Lobby, false)
    this.state.add('main_screen', MainScreen, false)
    this.backgroundColor = '#000000'
  }

  start (socket) {
    console.log('Game.start')
    this.state.start('boot', true, false)
    // socket.connect()
    // const channel = socket.channel('games:lobby', {})

    // joinChannel(channel, () => {
    //   console.log('Joined successfully')
    //   this.state.start('lobby', true, false, channel)
    // })
  }
}
