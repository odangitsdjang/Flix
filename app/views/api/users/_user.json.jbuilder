json.extract! user, :id, :username, :status, :firstname, :lastname, :img_url

# followers and following will return array of ids
json.followers user.follower_ids
json.following user.following_ids


# more object form

# json.followers do
#   json.partial! 'api/users/follows', collection: user.followers, as: :follow
# end

# json.following do
# json.partial! 'api/users/follows', collection: user.following, as: :follow
# end
