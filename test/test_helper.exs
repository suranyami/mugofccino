ExUnit.configure exclude: :pending, trace: true
ExUnit.start
Faker.start

Ecto.Adapters.SQL.Sandbox.mode(Mugofccino.Repo, :manual)
