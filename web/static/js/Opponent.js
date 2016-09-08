import {BasePlayer} from './BasePlayer'

export class Opponent extends BasePlayer {
  constructor (game) {
    super(game)
  }

  start () {
    this.makeSprite('opponent')
  }
}
