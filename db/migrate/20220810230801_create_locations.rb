class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :description
      t.boolean :is_complete

      t.timestamps
    end
  end
end
