import {Player} from '../Player'
import {Opponent} from '../Opponent'

import {Socket} from 'phoenix'

const UPDATE_PERIOD = 100 // milliseconds

export class MainScreen extends window.Phaser.State {
  create () {
    console.log('MainScreen.create')
    this.socket = new Socket('/socket', {params: {token: window.userToken}})
    this.socket.connect()

    this.game.renderer.clearBeforeRender = false
    this.game.renderer.roundPixels = true
    this.game.add.tileSprite(0, 0, 800, 600, 'starfield')
    this.game.physics.startSystem(window.Phaser.Physics.ARCADE)
    this.player = new Player(this.game)
    this.opponents = {}
    this.started = false
    this.listen()
    this.nextSend = this.game.time.now + UPDATE_PERIOD
  }

  listen () {
    this.channel = this.socket.channel('games:lobby', {})
    this.channel.join()
    .receive('ok', resp => {
      console.log('Joined successfully', resp)
      this.player.start()
      this.started = true
    })
    .receive('error', resp => {
      console.log('Unable to join', resp)
    })

    this.channel.on('joined', ({uuid}) => {
      console.log('Joined with ID:', uuid)
      this.uuid = uuid
      this.game.debug.text('My ID: ' + uuid)
      this.player.setUUID(uuid)
    })

    this.channel.on('opponent_joined', ({uuid}) => {
      console.log('Opponent joined with ID:', uuid)
      if (this.uuid !== uuid) {
        console.log('AND IT\'S NOT US')
        let opponent = new Opponent(this.game)
        this.opponents[uuid] = opponent
        opponent.start()
      }
    })

    this.channel.on('opponent_move', ({uuid, x, y, rot}) => {
      console.log(uuid)
      let opponent = this.opponents[uuid]
      if (opponent) {
        console.log('Opponent update:', uuid, x, y, rot)
        opponent.updatePos(x, y, rot)
      }
    })

    this.channel.onError((reason) => {
      console.log('there was an error!', reason)
    })

    this.channel.onClose(() => {
      console.log('the channel has gone away gracefully')
    })
  }

  update () {
    if (this.started) {
      this.player.update()
      if (this.game.time.now > this.nextSend) {
        this.nextSend = this.game.time.now + UPDATE_PERIOD
        this.sendPosition()
      }
    }

    // this.game.physics.arcade.overlap(this.game.bullets.this.game.bullets, aliens, collisionHandler, null, this)
    // this.game.physics.arcade.overlap(player, aliens, collisionHandler, null, this)
  }

  sendPosition () {
    console.log('sendPosition()')
    const message = this.player.getPos()
    this.channel.push('move', message)
    console.log('Player#move:', message)
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
