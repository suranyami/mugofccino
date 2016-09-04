import {createLabel} from '../common/labels'

export class Lobby extends Phaser.State {
  create () {
    this.label = createLabel(this, 'Hello world')
    this.label.anchor.setTo(0.5)
    this.label.inputEnabled = true
    // let listener = () => {
    //   this.state.start('lobby0')
    // }
    // this.label.events.onInputDown.add(listener, this)
  }

  update () {
    this.label.velocity
  }
}
