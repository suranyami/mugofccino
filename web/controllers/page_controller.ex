defmodule Mugofccino.PageController do
  use Mugofccino.Web, :controller

  def index(conn, params = %{name: name}) do
    render conn, "index.html", name: name
  end

  def index(conn, _params) do
    render conn, "index.html", name: "Phoenix!"
  end
end
