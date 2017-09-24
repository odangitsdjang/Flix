class User < ApplicationRecord
  DEFAULT_PROFILE_PIC = "http://res.cloudinary.com/odangitsdjang/image/upload/v1505966458/defaultPP_xfk4yh.svg"

  validates :email, :img_url, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6}, allow_nil: true
  validates :username, presence: true, uniqueness: true

  # FROM FOLLOWING TABLE:  FOLLOWER_ID FOLLOWS FOLLOWING_ID
  has_many :following_tag, primary_key: :id, foreign_key: :following_id, class_name: :Following
  has_many :followers_tag, primary_key: :id, foreign_key: :follower_id, class_name: :Following
  has_many :followers, through: :following_tag, source: :follower
  has_many :following, through: :followers_tag, source: :following

  has_many :pixes, primary_key: :id, foreign_key: :author_id, class_name: :Pix
  after_initialize :ensure_session_token, :ensure_default_img

  attr_reader :password

  # class method
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    (user && user.put_in_proper_password?(password)) ? user : nil
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def put_in_proper_password?(pw)
    BCrypt::Password.new(self.password_digest) == (pw)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  # Give a default profile picture, from assets/images
  def ensure_default_img
    self.img_url ||=  DEFAULT_PROFILE_PIC

  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end


end
