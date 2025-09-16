dnf install -y ruby
gem install bundler
bundle config set --local path 'vendor/bundle'
dnf install -y git ruby-devel gcc make gcc-c++
bundle install
