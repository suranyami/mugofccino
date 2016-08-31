import {createLabel} from "../common/labels"

export class Lobby extends Phaser.State {
  init(...options) {
    console.log(options)
    const [nextState] = options
    this.nextState = nextState
  }
  create(nextState) {
    const label = createLabel(this, "Hello world")
    label.anchor.setTo(0.5)
    label.inputEnabled = true
    let listener = () => {
      this.nextState()
    }
    label.events.onInputDown.add(listener, this);
  }
}
