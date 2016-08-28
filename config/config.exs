# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

if Mix.env == :dev do
  config :mix_test_watch, tasks: ~w(test dogma), clear: true
end

# General application configuration
config :mugofccino,
  ecto_repos: [Mugofccino.Repo]

# Configures the endpoint
config :mugofccino, Mugofccino.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base:
    "XApGHH9hc75Ph34bMvCQWPUF/1hFuozsygX2uZHdy2cAQlmw6XeXODb+ovC6Zdtk",
  render_errors: [view: Mugofccino.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Mugofccino.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :phoenix, :template_engines, haml: PhoenixHaml.Engine

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
