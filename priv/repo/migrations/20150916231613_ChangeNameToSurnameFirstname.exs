defmodule Mugofccino.Repo.Migrations.ChangeNameToSurnameFirstname do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :surname, :string
    end
    rename table(:users), :name, to: :first_name
  end
end
