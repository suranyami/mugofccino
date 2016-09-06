import {Player} from '../Player'

export class MainScreen extends window.Phaser.State {
  create () {
    console.log('creating main_screen')
    this.physics.startSystem(window.Phaser.Physics.P2JS)
    this.player = new Player(this.game)
    this.starfield = this.game.add.tileSprite(0, 0, 800, 600, 'starfield')
    this.game.stage.addChild(this.starfield)
    this.game.stage.addChild(this.player)
    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.game.input.keyboard.addKeyCapture([window.Phaser.Keyboard.SPACEBAR])
  }

  update () {
    if (this.cursors.up.isDown) {
      this.game.physics.arcade.accelerationFromRotation(this.player.rotation, 300, this.player.body.acceleration)
    } else {
      this.player.body.acceleration.set(0)
    }

    if (this.cursors.left.isDown) {
      this.player.body.angularVelocity = -300
    } else if (this.cursors.right.isDown) {
      this.player.body.angularVelocity = 300
    } else {
      this.player.body.angularVelocity = 0
    }

    if (this.game.input.keyboard.isDown(window.Phaser.Keyboard.SPACEBAR)) {
      // bullets.fire()
    }

    this.game.world.wrap(this.player, 16, true)
    // this.game.physics.arcade.overlap(bullets.bullets, aliens, collisionHandler, null, this);
    // this.game.physics.arcade.overlap(player, aliens, collisionHandler, null, this);
  }

  shutdown () {
    console.log('destroying main_screen')
    this.game.stage.removeChildren()
  }

  // createTitle () {
  //   this.title = new Title(this.game, 'Something else')
  //   this.game.stage.addChild(this.title)
  //   this.title.inputEnabled = true
  //   let listener = function () {
  //     this.game.state.start('lobby', true, false)
  //   }
  //   this.title.events.onInputDown.add(listener, this)
  // }
}
