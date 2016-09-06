import {Player} from '../Player'

export class MainScreen extends window.Phaser.State {
  create () {
    console.log('creating main_screen')
    this.physics.startSystem(window.Phaser.Physics.P2JS)
    this.player = new Player(this.game)
    this.starfield = this.game.add.tileSprite(0, 0, 800, 600, 'starfield')
    this.game.stage.addChild(this.starfield)
    this.game.stage.addChild(this.player)
  }

  update () {
  }

  shutdown () {
    console.log('destroying main_screen')
    this.game.stage.removeChildren()
  }
}
