defmodule Mugofccino.PageControllerTest do
  use Mugofccino.ConnCase

  test "GET /" do
    conn = get conn(), "/"
    assert html_response(conn, 200) =~ "Welcome to Phoenix!"
  end
end
