class CreatePixes < ActiveRecord::Migration[5.1]
  def change
    create_table :pixes do |t|
      t.string :caption
      t.integer :author_id, null: false
      t.string :image_url, null: false

      t.timestamps
    end
    add_index :pixes, :author_id
  end
end
