const DEFAULT_STYLE = {
  font: '65px Carbon',
  fill: 'green',
  align: 'center'
}

export class Label extends window.Phaser.Text {
  constructor (game, x, y, text, style = DEFAULT_STYLE) {
    super(game, x, y, text, style)
    this.setShadow(4, 4, '#333333', 4, true, false)
    this.anchor.setTo(0.5, 0.5)
  }
}
