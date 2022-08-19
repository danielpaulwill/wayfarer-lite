class AddNameToOptions < ActiveRecord::Migration[7.0]
  def change
    add_column :options, :name, :string
  end
end
