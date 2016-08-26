import socket from "./socket"
import React from "react"
import ReactDOM from "react-dom"
import RoomLink from "./room-link"
import RoomList from "./room-list"
import ActiveRoom from "./active-room"

let rooms = [
  "general",
  "mix",
  "ecto",
  "plug",
  "elixir",
  "erlang"
]

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeRoom: "general",
      channel: socket.channel("topic:general")
    }
  }

  handleRoomLinkClick(room) {
    let channel = socket.channel(`topic:${room}`)
    this.setState({activeRoom: room, channel: channel})
    this.configureChannel(channel)
  }

  componentDidMount() {
    this.configureChannel(this.state.channel)
  }

  configureChannel(channel) {
    channel.join()
      .receive("ok", () => {
        console.log(`Succesfully joined the ${this.state.activeRoom} chat room.`)
      })
      .receive("error", () => {
        console.log(`Unable to join the ${this.state.activeRoom} chat room.`)
      })
  }

  render() {
    return (
      <div class="chat-frame">
        <RoomList onRoomLinkClick={this.handleRoomLinkClick} rooms={rooms}/>
        <ActiveRoom room={this.state.activeRoom}/>
      </div>
    )
  }
}
