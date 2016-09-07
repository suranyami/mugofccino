import {Title} from '../common/Title'

export class Lobby extends window.Phaser.State {
  preload () {
    this.game.load.image('player', '/images/player.png')
  }

  create () {
    console.log('creating lobby')
    this.game.stage.backgroundColor = '#00000'
    this.createTitle()
  }

  shutdown () {
    console.log('shutdown lobby')
    this.game.stage.removeChildren()
  }

  createTitle () {
    this.title = new Title(this.game, 'Space War')
    this.game.stage.addChild(this.title)
    this.title.inputEnabled = true
    let listener = function () {
      console.log('Lobby.listener')
      this.game.state.start('main_screen', true, false)
      this.game.input.keyboard.onDownCallback = null
    }
    // start when press any key
    this.game.input.keyboard.onDownCallback = listener
  }
}
