class CreatePotties < ActiveRecord::Migration[5.1]
  def change
    create_table :potties do |t|
      t.string :type
      t.string :description
      t.timestamps
    end

    add_index :potties, :type
  end
end
