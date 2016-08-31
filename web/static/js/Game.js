// import {joinChannel} from "./common/channels"
import {Lobby} from "./states/Lobby"
import {Lobby0} from "./states/Lobby0"

export class Game extends Phaser.Game {
  constructor(width, height, container, assetPath) {
    super(width, height, Phaser.AUTO, container)
    this.assetPath = assetPath
    this.state.add("lobby0", Lobby0, false)
    let nextState = function () {
      this.state.stop("lobby0")
      this.state.start("lobby0")
    }
    this.state.add("lobby", Lobby, false, false, nextState)
    this.state.start("lobby")
  }

  // start(socket) {
  //   socket.connect()
  //   const channel = socket.channel("games:lobby", {})
  //   joinChannel(channel, () => {
  //     console.log("Joined successfully")
  //     this.state.start("lobby", true, false, channel)
  //   })
  // }
}
