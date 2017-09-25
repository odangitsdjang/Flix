json.extract! pix, :id, :caption, :img_url, :author_id, :created_at

json.author do
  json.partial! "api/users/user", user: pix.author
end
