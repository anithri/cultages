# == Schema Information
#
# Table name: cards
#
#  id         :bigint(8)        not null, primary key
#  body       :text
#  category   :integer          default("event")
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Card < ApplicationRecord
  CATEGORIES = [:event, :artifact, :legend, :secret, :power]
  enum category: CATEGORIES

end
