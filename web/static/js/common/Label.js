const DEFAULT_STYLE = {
  font: '65px Carbon',
  fill: 'green',
  align: 'center'
}

export class Label extends window.Phaser.Text {
  constructor (state, text, style = DEFAULT_STYLE) {
    const {centerX, centerY} = state.world
    super(state, centerX, centerY, text, style)
    this.setShadow(4, 4, '#333333', 4, true, false)
    this.anchor.setTo(0.5)
  }
}
