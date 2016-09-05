// import {Label} from '../common/Label'
// import {Phaser} from '../../vendor/phaser'
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

export class Lobby extends window.Phaser.State {
  create () {
    const label = new Label(this, 'hello 2')
    // const {centerX, centerY} = this.world
    // this.label = this.add.text(centerX, centerY, 'Hello', {font: '65px Arial', fill: '#ff0000'})
    // this.label.anchor.setTo(0.5)
  }

  update () {
    // this.label.velocity
  }
}
