class Pix < ApplicationRecord
  belongs_to :author, primary_key: :id, foreign_key: :author_id, class_name: :User

  validates :image_url, presence: true
end
