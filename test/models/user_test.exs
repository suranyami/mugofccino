defmodule Mugofccino.UserTest do
  use Mugofccino.ModelCase

  alias Mugofccino.User

  @valid_attrs %{
    email: "some content",
    first_name: "some content",
    surname: "some content"
  }
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = User.changeset(%User{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = User.changeset(%User{}, @invalid_attrs)
    refute changeset.valid?
  end
end
