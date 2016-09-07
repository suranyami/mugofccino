// Preloads the assets
export class Boot extends window.Phaser.State {
  preload () {
    console.log('Boot.preload')
    this.assetPath = document.body.dataset.assetPath
    this.imagePath = `${this.assetPath}images`
    this.soundPath = `${this.assetPath}sounds`
    this.loadImage('player')
    this.loadImage('starfield')
    this.loadImage('enemy', 'enemy-blue')
    this.loadImage('bullet')
    this.spriteFor('explosion', 128, 128, 'explode')
    this.loadSound('explosion')
    this.loadSound('blaster')
  }

  create () {
    // this.game.state.start('lobby', true, false)
    this.game.state.start('main_screen', true, false)
  }

  spriteFor (name, width, height, filename = name, suffix = 'png') {
    let path = this.imageFor(filename, suffix)
    this.game.load.spritesheet(name, path, width, height)
    console.log(`sprite: '${name}', '${path}', ${width}, ${height}`)
  }

  soundFor (name, suffix = 'mp3') {
    return `${this.soundPath}/${name}.${suffix}`
  }

  loadSound (name, filename = name) {
    let path = this.soundFor(filename)
    this.game.load.audio(name, path)
    console.log(`sound: '${name}', '${path}'`)
  }

  imageFor (name, suffix = 'png') {
    return `${this.imagePath}/${name}.${suffix}`
  }

  loadImage (name, filename = name) {
    let path = this.imageFor(filename)
    this.game.load.image(name, path)
    console.log(`image: '${name}', '${path}'`)
  }
}
