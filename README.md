# SZDIY 新网站

## 本地开发浏览

 1. 拉代码

 ```bash
 $ git clone git@github.com:szdiy/szdiy.github.io.git szdiy-web
 $ cd szdiy-web
 ```

 2. 安装开发环境

 需要先安装[Ruby v2.1.0以上](https://www.ruby-lang.org/en/downloads/)和[Bundler](http://bundler.io/)

 ```bash
 $ ruby --version
 ruby 2.X.X

 $ gem install bundler
 ```

 然后在本地安装必须的包。（OSX下）安装过程可能提示nokogiri有错误，可以看[这个](http://www.nokogiri.org/tutorials/installing_nokogiri.html#mac_os_x)

 ```bash
 # 安装本地包
 $ bundle install

 ```

 3. 预览

 ```bash
 $ bundle exec jekyll serve
 ```

 ## 当前配置模板

 [Architect](https://github.com/pages-themes/architect)，可参考它的README.md来进行配置
