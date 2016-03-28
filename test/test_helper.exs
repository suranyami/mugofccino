ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Mugofccino.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Mugofccino.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Mugofccino.Repo)

