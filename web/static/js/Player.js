const BULLET_SPEED = 400
const BULLET_FIRE_RATE = 250

// const ACCELERATION = 600

import {BasePlayer} from './BasePlayer'

export class Player extends BasePlayer {
  start () {
    // console.log('Player.start')
    this.makeSprite('player')
    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.game.input.keyboard.addKeyCapture([window.Phaser.Keyboard.SPACEBAR])
    this.activeBullets = []
    this.makeBullets()
  }

  setUUID (uuid) {
    this.uuid = uuid
  }

  makeBullets () {
    // console.log('Player.makeBullets')
    this.bullets = this.game.add.weapon(30, 'bullet')
    this.bullets.bulletKillType = window.Phaser.Weapon.KILL_WORLD_BOUNDS
    this.bullets.bulletSpeed = BULLET_SPEED
    this.bullets.fireRate = BULLET_FIRE_RATE

    this.explosion = this.game.add.audio('explosion')
    this.blaster = this.game.add.audio('blaster')
    // this.game.sound.setDecodedCallback([this.explosion, this.blaster], this.start, this)
    this.bullets.onFire.add(this.bulletFired, this)
    this.bullets.onKill.add(this.bulletKilled, this)
    this.game.physics.enable(this.bullets, window.Phaser.Physics.ARCADE)
    this.bullets.trackSprite(this.sprite, 16, 0, true)
  }

  bulletFired (weapon, bullet) {
    this.blaster.play()
    this.activeBullets.push(bullet)
  }

  bulletKilled (bullet) {
    let i = this.activeBullets.indexOf(bullet)
    if (i !== -1) {
      this.activeBullets.splice(i, 1)
    }
  }

  bulletPositions () {
    return this.activeBullets.map(function (item) {
      return {
        x: item.position.x,
        y: item.position.y,
        angle: item.angle
      }
    })
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

  getPos () {
    const serializePosition = ({x, y}) => Object.assign({x, y})
    let message = serializePosition(this.sprite)
    message.angle = this.sprite.angle
    message.uuid = this.uuid
    return message
  }
}
