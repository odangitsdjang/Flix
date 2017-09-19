class Following < ApplicationRecord
  # I don't know how to name this any better :(
  belongs_to :follower, primary_key: :id, foreign_key: :following_id, class_name: :User
  belongs_to :following, primary_key: :id, foreign_key: :follower_id, class_name: :User

  validates :follower_id, uniqueness: { scope: :following_id }
  validate :must_follow_another_user

  def must_follow_another_user
    return if self.following_id != self.follower_id

    p "YOU CANNOT FOLLOW YOURSELF"
    # maybe add another error message
  end
end
