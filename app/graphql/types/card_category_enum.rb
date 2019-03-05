module Types
  class CardCategoryEnum < Types::BaseEnum
    ::Card.categories.keys.each do |category|
      value category.upcase, "#{category} is a category of card", value: category
    end
  end
end
