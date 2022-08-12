class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.integer :location_id
      t.string :name
      t.boolean :is_complete

      t.timestamps
    end
  end
end
