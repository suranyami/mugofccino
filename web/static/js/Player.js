const MAXSPEED = 400
const DRAG = 400
const BULLET_SPEED = 400
const BULLET_FIRE_RATE = 250

// const ACCELERATION = 600

export class Player {
  constructor (game) {
    console.log('Player.constructor')
    this.game = game
  }

  start () {
    this.sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player')
    this.sprite.anchor.setTo(0.5, 0.5)
    this.game.physics.enable(this.sprite, window.Phaser.Physics.ARCADE)
    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.game.input.keyboard.addKeyCapture([window.Phaser.Keyboard.SPACEBAR])
    this.sprite.body.maxVelocity.setTo(MAXSPEED, MAXSPEED)
    this.sprite.body.drag.setTo(DRAG, DRAG)
    this.makeBullets()
  }

  makeBullets () {
    console.log('Player.makeBullets')
    this.bullets = this.game.add.weapon(30, 'bullet')
    this.bullets.bulletKillType = window.Phaser.Weapon.KILL_WORLD_BOUNDS
    this.bullets.bulletSpeed = BULLET_SPEED
    this.bullets.fireRate = BULLET_FIRE_RATE

    this.explosion = this.game.add.audio('explosion')
    this.blaster = this.game.add.audio('blaster')
    // this.game.sound.setDecodedCallback([this.explosion, this.blaster], this.start, this)
    let pew = () => {
      this.blaster.play()
    }
    this.bullets.onFire.add(pew)
    this.game.physics.enable(this.bullets, window.Phaser.Physics.ARCADE)
    this.bullets.trackSprite(this.sprite, 16, 0, true)
  }

  update () {
    if (this.cursors.up.isDown) {
      this.game.physics.arcade.accelerationFromRotation(this.sprite.rotation, 300, this.sprite.body.acceleration)
    } else {
      this.sprite.body.acceleration.set(0)
    }

    if (this.cursors.left.isDown) {
      this.sprite.body.angularVelocity = -300
    } else if (this.cursors.right.isDown) {
      this.sprite.body.angularVelocity = 300
    } else {
      this.sprite.body.angularVelocity = 0
    }

    if (this.game.input.keyboard.isDown(window.Phaser.Keyboard.SPACEBAR)) {
      this.bullets.fire()
    }

    this.game.world.wrap(this.sprite, 16, true)
  }
}
