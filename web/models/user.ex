defmodule Mugofccino.User do
  use Mugofccino.Web, :model

  schema "users" do
    field :first_name, :string
    field :surname, :string
    field :email, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:first_name, :surname, :email])
    |> validate_required([:first_name, :surname, :email])
  end
end
