@pixes.each do |pix|
  json.set! pix.id do
    json.partial! "api/pixes/pix", pix: pix
  end
end
