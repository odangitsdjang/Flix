# [Flix](https://flix1.herokuapp.com/)

This project was pursued to practice the full power of  React/Redux using a Ruby on Rails backend.

Check out the [wiki](https://github.com/odangitsdjang/Flix/wiki) for what the structure of the app looks like on the high level.

This app has plenty of features including, but not limited to:

1. [Safe user authentication](#safe-user-authentication)
2. [Customizable user page](#customizable-user-page)
    - [Follow others](#follow-others)
3. [Upload pix (pictures)](#upload-pix)
4. [Discover others](#discover-others)
    - [Search other users](#search-other-users)
5. [Custom home page](#custom-home-page)

## Safe User Authentication

Flix uses the BCrypt gem to store a salted and hashed version of a user's password into the database.

Here is a snippet to store the password into the database:
```ruby
def password=(pw)
  self.password_digest = BCrypt::Password.create(pw)
end
```

And a snippet to find the user given the password:
```ruby
def put_in_proper_password?(pw)
  BCrypt::Password.new(self.password_digest) == (pw)
end
```

## Customizable User Page

When a user creates a profile using the signup form, a unique user is created and stored into the database if that username doesn't already exist.

The information on this user will persist through time, as you would expect in any web application. The user can find other users through [searching users](#search-other-users)
and change their profile picture from the default one using [change profile picture](#upload-pix).

### Follow Others
Through a multitude of methods, you can find other users. After finding another user, if you wish to see all their most recent uploads in your [home page](TODO), then you're just one click away. Click that green follow button! Of course, if you are annoyed with a certain user posting too many pix or with the quality of their pix, then you're one click away from never seeing them again too!

## Upload Pix
Flix uses cloudinary's API. A user can upload their picture, and then on successful upload to cloudinary, we will get a link back from cloudinary which we will save to the database along with the caption provided by the user. The database will store this full size url to the picture.

This is important; since Flix is a photo app we want to be able to keep the high quality, high resolution photo. The problem with this is when we try to render 10 pictures with their width resolutions exceeding 5000 pixels, a simple css image resize does not solve the lag and pixel congestion happening on the screen.

So I came up with a solution to this by again going through cloudinary's api and finding a way to grab a smaller version of the picture instead of the full picture. This is way more scalable than:

- Uploading a picture two times with two different qualities and saving two different links to the database

Here is a snippet of what I did, simple but effective:

```javascript
getPotentiallySmallerPicFromUrl(originalPicUrl, minWidth=1000, minHeight=1000) {
  let indx = /v\d/.exec(originalPicUrl).index;
  return originalPicUrl.slice(0,indx).concat(
    `w_${minWidth},h_${minHeight},c_limit/`).concat(
    originalPicUrl.slice(indx));
}
```
The link to grab the picture is guaranteed to have "/v{andsomenumbers}" in the link so I took advantage of this by finding the index of where that is and shovelling in some string into the link.

## Discover Others
Clicking on the discover button on the navbar will allow you to find photos uploaded by other users!

### Search Other Users
The nifty search bar up on the top allows you to find other users!

## Custom Home Page
As mentioned before, the user's page will be filled only with pix of people that you follow
