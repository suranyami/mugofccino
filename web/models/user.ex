defmodule Mugofccino.User do
  use Mugofccino.Web, :model

  schema "users" do
    field :first_name, :string
    field :surname, :string
    field :email, :string
    
    timestamps
  end

  @required_fields ~w(first_name surname email)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
    |> validate_format(:email, ~r/@/)
    |> validate_length(:surname, min: 2)
    |> validate_length(:first_name, min: 2)
  end
end
