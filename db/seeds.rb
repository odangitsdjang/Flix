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
User.create(username: "NationalGeographic", password:"secret?", email: "nationalgeographic@gmail.com" )
User.create(username: "CleanDesigns", password:"secret?", email: "CleanDesigns@gmail.com" )


scenery = User.find_by_username("scenery")
scenery.follower_ids = [1,2,3,4,5,6,7,8,9,10,15,20,13]
scenery.following_ids = [1,2,3,4,5,6,7,8,9,10]

Pix.create(caption:"Waterfall with trees", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051550/scenery/thomas-kelley-64329.jpg")
Pix.create(caption:"The lake and the mountain", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051548/scenery/philippe-toupet-320689.jpg")
Pix.create(caption:"Aesthetic tree", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051549/scenery/niko-soikkeli-333391.jpg")
Pix.create(caption:"Green pool", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051552/scenery/milada-vigerova-35578.jpg")
Pix.create(caption:"The contrasting colors of the sky, tree, and the waterfall", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051544/scenery/luis-poletti-17300.jpg")
Pix.create(caption:"Hi, I'm speedy", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051544/scenery/idella-maeland-19069.jpg")
Pix.create(caption:"Trees without life", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051548/scenery/eric-muller-11760.jpg")
Pix.create(caption:"Luscious trees", author_id: scenery.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051545/scenery/daniel-frank-357258.jpg")

coffee = User.find_by_username("coffee")
coffee.follower_ids = [1,2,3,4,5,6,7,8,10,15,24,40]
coffee.following_ids = [1]

Pix.create(caption:"Just pure and beautiful beans", author_id: coffee.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051565/coffee/fireskystudios-com-46284.jpg")
Pix.create(caption:"Magical coffee", author_id: coffee.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051564/coffee/jeremy-yap-199222.jpg")
Pix.create(caption:"A beautiful cup of coffee", author_id: coffee.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051566/coffee/matt-hoffman-146094.jpg")
Pix.create(caption:"Beautiful coffee", author_id: coffee.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051566/coffee/matt-hoffman-310320.jpg")
Pix.create(caption:"Beans with a flash!", author_id: coffee.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051566/coffee/michal-grosicki-198598.jpg")
Pix.create(caption:"That's one delicious looking cup of coffee there", author_id: coffee.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506051561/coffee/natalie-collins-57855.jpg")

# User.create(username: "ilovedavid", password: "iloveyou", email:"somerandomcrap@somerandomcrap@gmail.com")
# Pix.create(caption:"iloveya<3", author_id: 3, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1506397582/IMG_2058_rs4l7c.jpg")
# User.find_by_username("ilovedavid").following_ids= [3];
national = User.find_by_username("NationalGeographic")
Pix.create(caption:"Space and time", author_id: national.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508633915/1_ctpnp0.jpg")
Pix.create(caption:"The calm after the storm", author_id: national.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508633910/2_s02dha.jpg")
Pix.create(caption:"Protect the environment!!!", author_id: national.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508633917/3_v8p98r.jpg")
Pix.create(caption:"Isn't it relaxing", author_id: national.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508633919/4_m4o2ko.jpg")
Pix.create(caption:"Rainbow above the city", author_id: national.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508633922/6_kh1nin.jpg")
Pix.create(caption:"SF at night!", author_id: national.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508633939/5_nllouz.jpg")
Pix.create(caption:"Ball is life", author_id: national.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508633940/8_ap6afb.jpg")
Pix.create(caption:"Keepin myself warm", author_id: national.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508633940/10_ubcwmo.jpg")
Pix.create(caption:"Majestic", author_id: national.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508633961/14_gg4yaz.jpg")
Pix.create(caption:"Salt in the beach", author_id: national.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508633968/11_xzfbuu.jpg")
Pix.create(caption:"Hills", author_id: national.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508633983/18_xf0ovl.jpg")
Pix.create(caption:"Where there's a will there's a way", author_id: national.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508633973/12_eskbbk.jpg")

clean = User.find_by_username("CleanDesigns")
Pix.create(caption:"Drone shot of the bridge", author_id: clean.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508716333/adrian-207619_gwqs87.jpg")
Pix.create(caption:"Clean building design", author_id: clean.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508716333/antoine-bussy-388724_a80amd.jpg")
Pix.create(caption:"Mountain trip", author_id: clean.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508716335/kalen-emsley-99659_fsyemp.jpg")
Pix.create(caption:"Modern Greek architecture", author_id: clean.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508716334/simone-hutsch-384848_n8dywm.jpg")
Pix.create(caption:"Trip through Antarctica", author_id: clean.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508716333/marc-guellerin-151177_vyg0pe.jpg")
Pix.create(caption:"Trip through the Sahara Desert", author_id: clean.id, img_url: "http://res.cloudinary.com/odangitsdjang/image/upload/v1508716332/nathan-mcbride-229639_dyc8gh.jpg")

