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

User.create(username: "user", password:"password", email: "user@gmail.com" )
User.create(username: "test", password:"password", email: "test@gmail.com" )

testUser = User.find_by_username("test")
testUser.follower_ids = [1,2,3,4,5,6,7,8,9,10,15,20,13]
testUser.following_ids = [1,2,3,4,5,6,7,8,9,10]

User.create(username: "scenery", password:"password", email: "scenery@gmail.com" )
User.create(username: "coffee", password:"password", email: "coffee@gmail.com" )

scenery = User.find_by_username("scenery")
scenery.follower_ids = [1,2,3,4,5,6,7,8,9,10,15,20,13]
scenery.following_ids = [1,2,3,4,5,6,7,8,9,10]

Pix.create(caption:"amazing", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051550/scenery/thomas-kelley-64329.jpg")
Pix.create(caption:"wow", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051548/scenery/philippe-toupet-320689.jpg")
Pix.create(caption:"3rd upload", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051549/scenery/niko-soikkeli-333391.jpg")
Pix.create(caption:"very nice", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051552/scenery/milada-vigerova-35578.jpg")
Pix.create(caption:"beautiful", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051544/scenery/luis-poletti-17300.jpg")
Pix.create(caption:"horsey", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051544/scenery/idella-maeland-19069.jpg")
Pix.create(caption:"mm trees", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051548/scenery/eric-muller-11760.jpg")
Pix.create(caption:"more trees?", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051545/scenery/daniel-frank-357258.jpg")

coffee = User.find_by_username("coffee")
coffee.follower_ids = [1,2,3,4,5,6,7,8,10,15,24,40]
coffee.following_ids = [1]

Pix.create(caption:"beans", author_id: coffee.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051565/coffee/fireskystudios-com-46284.jpg")
Pix.create(caption:"artsy", author_id: coffee.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051564/coffee/jeremy-yap-199222.jpg")
Pix.create(caption:"artsy artsy", author_id: coffee.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051566/coffee/matt-hoffman-146094.jpg")
Pix.create(caption:"you know what it is", author_id: coffee.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051566/coffee/matt-hoffman-310320.jpg")
Pix.create(caption:"beans101", author_id: coffee.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051566/coffee/michal-grosicki-198598.jpg")
Pix.create(caption:"yum", author_id: coffee.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051561/coffee/natalie-collins-57855.jpg")

User.create(username: "ilovedavid", password: "iloveyou", email:"somerandomcrap@somerandomcrap@gmail.com")
Pix.create(caption:"iloveya<3", author_id: 3, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506397582/IMG_2058_rs4l7c.jpg")
User.find_by_username("ilovedavid").following_ids= [3];
