import {Player} from '../Player'

export class MainScreen extends window.Phaser.State {
  create () {
    console.log('MainScreen.create')
    this.game.renderer.clearBeforeRender = false
    this.game.renderer.roundPixels = true
    this.game.add.tileSprite(0, 0, 800, 600, 'starfield')
    this.game.physics.startSystem(window.Phaser.Physics.ARCADE)
    this.player = new Player(this.game)
    this.player.start()
  }

  update () {
    this.player.update()
    // this.game.physics.arcade.overlap(this.game.bullets.this.game.bullets, aliens, collisionHandler, null, this)
    // this.game.physics.arcade.overlap(player, aliens, collisionHandler, null, this)
  }

  render () {
    // this.game.debug.text('help', 32, 32)
    // this.player.bullets.debug()
  }

  shutdown () {
    console.log('destroying main_screen')
    this.game.stage.removeChildren()
  }
}
