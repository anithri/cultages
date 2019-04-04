# Be sure to restart your server when you modify this file.

ASDF_DIR = '/home/scottp/.asdf/installs/ruby/'

# You can add backtrace silencers for libraries that you're using but don't wish to see in your backtraces.
# Rails.backtrace_cleaner.add_silencer { |line| line =~ /my_noisy_library/ }
Rails.backtrace_cleaner.add_silencer { |line| line =~ /\/\.asdf\// }
# You can also remove all the silencers if you're trying to debug a problem that might stem from framework code.
# Rails.backtrace_cleaner.remove_silencers!
Rails.backtrace_cleaner.add_filter { |line| line.gsub(Rails.root.to_s, '') }
# Rails.backtrace_cleaner.add_filter { |line| line.gsub(ASDF_DIR, '') }
