defmodule Mugofccino.UserTest do
  use Mugofccino.ModelCase

  alias Mugofccino.User

  @valid_attrs %{
    email: Faker.Internet.email,
    first_name: Faker.Name.first_name,
    surname: Faker.Name.last_name
  }
  
  @invalid_attrs %{
    email: "xyz",
  }

  test "changeset with valid attributes" do
    changeset = User.changeset(%User{}, @valid_attrs)
    assert changeset.valid?
  end

  test "invalid email" do
    changeset = User.changeset(%User{}, %{email: "xyz"})
    refute changeset.valid?
  end
end
