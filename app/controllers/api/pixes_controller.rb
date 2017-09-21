class Api::PixesController < ApplicationController
  # note that this returns all pix of a specific user, not all pix from the database
  def index
    @user = User.find_by(id: params[:userId])
    if @user
      @pixes = @user.pixes
      render :index
    else
      render json: ["User does not exist"], status: 422
    end
  end


  def show
    @pix = Pix.find_by(params[:id])
    if @pix
      render :show
    else
      render json: ["Pix does not exist"], status: 422
    end
  end

  def destroy
    @pix = Pix.find_by(params[:id])
    @pix.delete
    # redirect somewhere ?
    render :show 
  end
end
