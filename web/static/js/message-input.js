import React from "react"

class MessageInput extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    let text = React.findDOMNode(this.refs.text).value.trim()
    let date = (new Date()).toLocaleTimeString()
    React.findDOMNode(this.refs.text).value = ""
    this.props.onMessageSubmit({text: text, date: date})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="text"/>
      </form>
    )
  }
}
