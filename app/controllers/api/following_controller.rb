class Api::FollowingController < ApplicationController
  def create
    @f = Following.new(following_params)
    if @f.save
      render "api/following/following"
    else
      render json: @f.errors.full_messages, status: 422
    end
  end

  # does not use params[:id]
  def destroy
    # @f = Following.find_by_follower_id_and_following_id(params[:follower_id], params[:following_id])
    # if @f
    #   @f.delete
    # else
    #  # should probably not enter here
    #   render json: ["Could not unfollow"], status: 422
    # end
  end

  private
  def following_params
    params.require(:following).permit(:follower_id, :following_id)
  end
end
