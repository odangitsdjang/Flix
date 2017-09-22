# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
50.times do |num|
  User.create(username: "user#{num+1}", password:"password", email: "user#{num+1}@gmail.com" )
end

User.first.follower_ids=[2,3,4,5,6,7,8,9,10,14,15,19,20,21,25,49]
