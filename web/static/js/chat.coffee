socket = require './socket'
socket.connect()
chan = socket.channel "rooms:lobby", {}

chatInput         = $("#chat-input")
messagesContainer = $("#messages")

chatInput.on "keypress", (event) =>
  if event.keyCode == 13
    chan.push "new_msg", {body: chatInput.val()}
    chatInput.val ""

chan.on "new_msg", (payload) =>
  console.log "new_msg:", payload.body
  messagesContainer.prepend("<br/>[#{Date()}] #{payload.body}")


chan.join().receive "ok", (resp) =>
  console.log("Welcome to Phoenix Chat!", resp)
