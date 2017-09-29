class Api::UsersController < ApplicationController
  def index
    # search
    if params[:letters]
      @users = User.find_by_beginning_letters(params[:letters])
    else
      @users = User.all
    end
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

  def show
    @user = User.find_by_username(params[:id])
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
