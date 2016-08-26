import React from "react"

class RoomList extends React.Component {
  render() {
    return(
      <div class="room-list">
        {this.props.rooms.map(room => {
          return(
            <span key={room}><RoomLink onClick={this.props.onRoomLinkClick} name={room}/> | </span>)
        })}
      </div>
    )
  }
}
