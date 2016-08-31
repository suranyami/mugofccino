import {createLabel} from "../common/labels"

export class Lobby0 extends Phaser.State {
  create() {
    const label = createLabel(this, "Second Lobby")
    label.anchor.setTo(0.5)
    label.inputEnabled = true
  }
}
