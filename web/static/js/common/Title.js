import {Label} from './Label'
export class Title extends Label {
  constructor (game, text) {
    super(game, game.world.centerX, game.world.centerY, text)
  }
}
