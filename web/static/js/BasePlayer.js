const MAXSPEED = 400
const DRAG = 400

export class BasePlayer {
  constructor (game) {
    // console.log('BasePlayer.constructor')
    this.game = game
  }

  makeSprite (name) {
    // console.log(`makeSprite('${name}')`)
    this.sprite = this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, name)
    this.sprite.anchor.setTo(0.5, 0.5)
    this.game.physics.enable(this.sprite, window.Phaser.Physics.ARCADE)
    this.sprite.body.maxVelocity.setTo(MAXSPEED, MAXSPEED)
    this.sprite.body.drag.setTo(DRAG, DRAG)
  }

  updatePos (x, y, rot) {
    // console.log(`BasePlayer.update(${x}, ${y}, ${rot})`)
    this.sprite.position.x = x
    this.sprite.position.y = y
    this.sprite.angle = rot
  }
}
