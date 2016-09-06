export class Boot extends window.Phaser.State {
  preload () {
    console.log('Boot.preload')
    let load = this.game.load
    load.image('player', '/images/player.png')
    load.image('starfield', '/images/starfield.png')
    load.image('enemy', '/images/enemy-blue.png')
  }

  create () {
    this.game.state.start('lobby', true, false)
  }
}
