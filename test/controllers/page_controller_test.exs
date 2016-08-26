defmodule Mugofccino.PageControllerTest do
  use Mugofccino.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "mugofccino"
  end
end
