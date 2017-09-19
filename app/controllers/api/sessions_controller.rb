class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      log_in(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def delete
    if current_user
      log_out
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
