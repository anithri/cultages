namespace :grid do
  desc "generate hexGrid"
  task hex: :environment do
    5.times do
      CreateGrid.call
    end
  end

  desc "smooth height"
  task height: :environment do
    cols = GridHex.maximum(:r)
    step = 2.0 / cols
    GridCorner.update_all("z = x * #{step}")
  end
end
