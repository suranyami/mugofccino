import React from "react"
import MessageInput   from "./message-input"
import MessageList    from "./message-list"

class ActiveRoom extends React.Component {
  render() {
    return (
      <div>
      <span>Welcome to the {this.props.room} chat room!</span>
        <MessageInput onMessageSubmit={this.props.onMessageSubmit}/>
        <MessageList messages={this.props.messages}/>
      </div>
    )
  }
}
