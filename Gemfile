# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.5'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.0.rc1'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 4.3'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '~> 4.0.2'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'web-console', '>= 3.3.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'spring-commands-rubocop'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'pry-rails'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

# CPP Additions
# gem 'workflow-activerecord', '>= 4.1', '< 6.0'
gem 'aasm'
gem 'graphql'
gem 'interactor-rails', git: 'git@github.com:CPPWind/interactor-rails.git'
gem 'pundit'
gem 'rails_warden'

gem 'globalid'
gem 'active_hash'
group :development do
  gem 'annotate'
  gem 'guard-bundler'
  gem 'guard-process'
  gem 'guard-rails'
  gem 'guard-spring'
  gem 'libnotify'
  #gem 'rubocop', require: false
  gem 'aasm-diagram', require: false
  gem 'perlin'
end

group :test do
  # gem 'database_cleaner'
  # gem 'factory_bot_rails'
  # gem 'fuubar'
  # gem 'pundit-matchers', '~> 1.6.0'
  # gem 'rspec-graphql_matchers'
  # gem 'rspec-rails'
  # gem 'shoulda-matchers'
end

group :development, :test do
  gem 'faker'
  gem 'graphiql-rails'
end

gem "foreman", "~> 0.64.0", :group => :development
gem "awesome_print", "~> 1.8", :group => :development