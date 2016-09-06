const MAXSPEED = 100
const DRAG = 50

export class Player extends window.Phaser.Sprite {
  constructor (game) {
    super(game, game.world.centerX, game.world.centerY, 'player')
    this.anchor.setTo(0.5, 0.5)
    game.physics.enable(this, window.Phaser.Physics.ARCADE)
    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.game.input.keyboard.addKeyCapture([window.Phaser.Keyboard.SPACEBAR])
  }

  create () {
    this.body.maxVelocity.setTo(MAXSPEED, MAXSPEED)
    this.body.drag.setTo(DRAG, DRAG)
  }

  update () {
    if (this.cursors.up.isDown) {
      this.game.physics.arcade.accelerationFromRotation(this.rotation, 300, this.body.acceleration)
    } else {
      this.body.acceleration.set(0)
    }

    if (this.cursors.left.isDown) {
      this.body.angularVelocity = -300
    } else if (this.cursors.right.isDown) {
      this.body.angularVelocity = 300
    } else {
      this.body.angularVelocity = 0
    }

    if (this.game.input.keyboard.isDown(window.Phaser.Keyboard.SPACEBAR)) {
      console.log('pew pew')
      // bullets.fire()
    }

    this.game.world.wrap(this, 16, true)
    // this.game.physics.arcade.overlap(bullets.bullets, aliens, collisionHandler, null, this);
    // this.game.physics.arcade.overlap(player, aliens, collisionHandler, null, this);
  }
}
