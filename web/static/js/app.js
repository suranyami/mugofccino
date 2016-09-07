import 'phoenix_html'
// import socket from './socket'
import {Boot} from './states/Boot'
import {Lobby} from './states/Lobby'
import {MainScreen} from './states/MainScreen'

let game = new window.Phaser.Game(800, 600, window.Phaser.AUTO, 'screen')
game.assetPath = document.body.dataset.assetPath
game.state.add('boot', Boot, false)
game.state.add('lobby', Lobby, false)
game.state.add('main_screen', MainScreen, false)
game.backgroundColor = '#000000'

console.log('Game.start')
game.state.start('boot', true, false)

    // socket.connect()
    // const channel = socket.channel('games:lobby', {})

    // joinChannel(channel, () => {
    //   console.log('Joined successfully')
    //   this.state.start('lobby', true, false, channel)
    // })
