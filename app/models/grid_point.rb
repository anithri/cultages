# == Schema Information
#
# Table name: grid_points
#
#  id         :bigint(8)        not null, primary key
#  category   :integer          default("center")
#  x          :decimal(8, 3)
#  y          :decimal(8, 3)
#  z          :decimal(8, 3)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class GridPoint < ApplicationRecord
  enum category: %w{center corner}
  has_and_belongs_to_many :grid_hexes, inverse_of: :center, required: false

  scope :corners, -> { where(category: :corner) }
  scope :centers, -> { where(category: :center) }
end
