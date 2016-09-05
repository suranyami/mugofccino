class Player extends Phaser.State {
  init(options) {
    game = options.game
    this.sprite = game.add.sprite(midWidth, midHeight, 'player')
    this.sprite.anchor.setTo(0.5, 0.5)
    this.game.physics.enable(sprite, Phaser.Physics.ARCADE)
    this.sprite.body.maxVelocity.setTo(MAXSPEED, MAXSPEED)
    this.sprite.body.drag.setTo(DRAG, DRAG)
  }
}
