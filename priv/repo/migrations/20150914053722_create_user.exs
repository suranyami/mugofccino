defmodule Mugofccino.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :first_name, :string
      add :surname, :string
      add :email, :string

      timestamps
    end

  end
end
