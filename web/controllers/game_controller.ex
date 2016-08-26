defmodule Mugofccino.GameController do
  use Mugofccino.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
