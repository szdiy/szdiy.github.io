source 'https://rubygems.org'

# Fix for Ruby 3.3+ compatibility with Jekyll 3.9.3
require 'logger'
module LoggerPatch
  def level
    @level_override ||= {}
    @level_override[Fiber.current] || @level
  end
end
Logger.prepend(LoggerPatch)

gem 'github-pages', group: :jekyll_plugins

gem "jekyll-theme-architect"
gem 'jekyll-loading-lazy'

gem "webrick", "~> 1.8"
