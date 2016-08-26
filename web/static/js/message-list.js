import React from "react"

class Message extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.data.text}</div>
        <div>{this.props.data.date}</div>
      </div>
    )
  }
}

class MessageList extends React.Component {
  render() {
    return (
      <div>
        {this.props.messages.map(message => {
          return <Message data={message} />
        })}
      </div>
    )
  }
}
