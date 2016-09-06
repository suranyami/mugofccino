const MAXSPEED = 100
const DRAG = 50

export class Player extends window.Phaser.Sprite {
  constructor (game) {
    super(game, game.world.centerX, game.world.centerY, 'player')
    this.anchor.setTo(0.5, 0.5)
    game.physics.enable(this, window.Phaser.Physics.ARCADE)
  }

  create () {
    this.body.maxVelocity.setTo(MAXSPEED, MAXSPEED)
    this.body.drag.setTo(DRAG, DRAG)
  }
}
