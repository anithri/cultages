# frozen_string_literal: true
require 'json'
grid_filename = Rails.root + 'db/grid-5-8.json'
template =JSON.parse(File.read(grid_filename))

10.times do
  CreateGridMap.call data: template
end
