class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # I feel like you should rarely enter here (will render show a lot
  # but not actually hit the show function)
  def show
    @user = User.find_by_id(params[:id])
    if @user
      render :show
    else
      render json: ["User does not exist"], status: 422
    end
  end

  def update
    @user = User.find_by_id(params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end
end
