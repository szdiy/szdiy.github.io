dnf install -y ruby
# gem sources --add https://mirrors.tuna.tsinghua.edu.cn/rubygems/ --remove https://rubygems.org/
gem install bundler
# bundle config mirror.https://rubygems.org https://mirrors.tuna.tsinghua.edu.cn/rubygems
bundle config set --local path 'vendor/bundle'
dnf install -y git ruby-devel gcc make gcc-c++
bundle install
