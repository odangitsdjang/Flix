class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !current_user.nil?
  end

  def log_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def log_out
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end

  private
  def user_params
    # remember the magic that happens with Rails: creating a new follow entry with
    # the follower_ids, following_ids
    # the association in the user model followers= and followings= allows us
    # access to follower_ids= and following_ids= as well
    params.require(:user).permit(:username, :password, :email,
       :img_url, follower_ids: [], following_ids: [] )
  end

end
