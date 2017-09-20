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

  # I feel like you should rarely enter here
  def show
    @user = User.find_by_id(params[:id])
    if @user
      render :show
    else
      render json: ["User does not exist"], status: 422
    end
  end

  # bonus
  def edit
    render plain: "EDIT ROUTE"
  end

  def update
    render plain: "UPDATE ROUTE"
  end
end
