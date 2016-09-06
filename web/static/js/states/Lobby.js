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

  update () {
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
      this.game.state.start('main_screen', true, false)
    }
    this.title.events.onInputDown.add(listener, this)
  }
}
