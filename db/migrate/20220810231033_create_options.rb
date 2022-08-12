class CreateOptions < ActiveRecord::Migration[7.0]
  def change
    create_table :options do |t|
      t.integer :event_id
      t.string :description
      t.boolean :is_complete

      t.timestamps
    end
  end
end
