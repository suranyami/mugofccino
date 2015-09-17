defmodule Mugofccino.Repo.Migrations.AddCryptoToUsers do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :hash, :string
      add :recovery_hash, :string
    end
    create index(:users, [:email], unique: true)
  end
end
