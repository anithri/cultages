
namespace :grid do
  desc "generate hexGrid"
  task hexes: :environment do
    raw = `node lib/tasks/generateGrid.js 24 48 30 2>/dev/null`
    data = JSON.parse(raw).with_indifferent_access
    CreateGrid.call(grid_data: data)
  end

  desc "smooth height"
  task height: :environment do
    cols = GridHex.maximum(:r)
    step = 2.0 / cols
    GridCorner.update_all("z = x * #{step}")
  end
end
