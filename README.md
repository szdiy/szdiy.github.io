# szdiy.org

深圳 DIY 社区官方网站，基于 Jekyll 构建。

## 快速开始

### 环境要求
- [Ruby 2.1.0+](https://www.ruby-lang.org/en/downloads/)
- [Bundler](http://bundler.io/)

### 安装运行

```bash
# 克隆项目
git clone git@github.com:szdiy/szdiy.github.io.git
cd szdiy.github.io

# 安装依赖
gem install bundler
bundle install

# 启动开发服务器
bundle exec jekyll serve
```

访问 http://localhost:4000 预览网站。

### 故障排除

macOS 用户如遇到 nokogiri 安装错误，请参考 [官方文档](http://www.nokogiri.org/tutorials/installing_nokogiri.html#mac_os_x)。

## 技术栈

- **框架**: Jekyll
- **主题**: [Architect](https://github.com/pages-themes/architect) + 小汐优化
- **部署**: GitHub Pages
