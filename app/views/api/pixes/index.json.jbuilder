@pixes.each do |pix|
  json.set! pix.id do
    json.partial! "api/pixes/pix_detail", pix: pix
  end
end
