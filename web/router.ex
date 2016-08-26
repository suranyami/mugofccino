defmodule Mugofccino.Router do
  use Mugofccino.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Mugofccino do
    pipe_through :browser # Use the default browser stack

    get "/", GameController, :index
    resources "/users", UserController
    resources "/game", GameController
    resources "/page", PageController
  end

  # Other scopes may use custom stacks.
  # scope "/api", Mugofccino do
  #   pipe_through :api
  # end
end
