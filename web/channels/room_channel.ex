defmodule Mugofccino.RoomChannel do
  use Phoenix.Channel

  def join("games:" <> _topic, _auth_message, socket) do
    send(self, :after_join)
    {:ok, socket}
  end

  def handle_info(:after_join, socket) do
    # uuid = UUID.uuid1()
    uuid = :rand.uniform(1000)
    socket = assign(socket, :uuid, uuid)
    id = %{uuid: uuid}
    push socket, "joined", id
    broadcast! socket, "opponent_joined", id
    {:noreply, socket}
  end

  def handle_in("move", message, socket) do
    uuid = socket.assigns[:uuid]
    broadcast! socket, "opponent_move", Map.put(message, :uuid, uuid)
    {:noreply, socket}
  end

  # def handle_out("message", message, socket) do
  #   push socket, "message", message
  #   {:noreply, socket}
  # end

end
