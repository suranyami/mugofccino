defmodule Mugofccino.EmailTemplates do
  def register_template(user) do
    """
      <h1>Welcome to Mugofccino.</h1>
      <p>Welcome, #{user.name}.</p>
    """
  end

  def password_recovery_template(user) do
    """
      <h1>Password recovery</h1>
      <p>Someone, possibly you, requested to reset your password.</p>
      <p>If this was you, then please click here to set a new password:</p>
      <p><a href="http://mugofccino.com/recover_password?token=#{user.recovery_hash}">Password Reset</a></p>
    """
  end
end
