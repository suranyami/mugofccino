# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :mugofccino, Mugofccino.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base: "xuZDe2enRKtv89zis2idsKdRwjzzUg+PkGWcKRQLgT4ha3cx9VMrKvTyOTD89L3p",
  render_errors: [accepts: ~w(html json)],
  pubsub: [name: Mugofccino.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

# Configure phoenix generators
config :phoenix, :generators,
  migration: true,
  binary_id: false

config :phoenix, :template_engines,
  haml: PhoenixHaml.Engine

config :addict, not_logged_in_url: "/error", 
  db: Mugofccino.Repo,
  user: Mugofccino.User,
  register_from_email: "Registration <welcome@mugofccino.com>",
  register_subject: "Welcome to Mugofccino!",
  password_recover_from_email: "Password Recovery <no-reply@mugofccino.com>",
  password_recover_subject: "You requested a password recovery link",
  email_templates: Mugofccino.EmailTemplates
