# == Schema Information
#
# Table name: games
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  options    :jsonb
#  state      :string           default("in_box")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Game < ApplicationRecord
end
