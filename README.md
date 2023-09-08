# vitepress demo

## init steps
```bash
pnpm add -D vitepress
pnpm dlx vitepress init
# follow the question wizard
```

## features
- [x] routing
- [x] assets handling(image/video/audio path)
  - public folder https://vitepress.dev/guide/asset-handling#the-public-directory
- [x] custom theme 
  - https://vitepress.dev/guide/extending-default-theme
  - [x] add custom font-face: LXGW WenKai Screen is bold enough
- [x] search
  - algolia
  - [x] local => 分词索引的效果很一般。
- [x] last update timestamp => 反映文档最后更新时间，提示读者文档维护程度和时效性。
  > You need to commit the markdown file to see the updated time.
- [x] reading time estimation/word count
  - by reading-time library and own plugin
- [x] Allow images to be zoomed in on click => 部分图片细节很多，需要放大，进一步思考理解。
- [x] comment system(no backend)
  - https://giscus.app/zh-CN 在这个链接填写repo和分类，将配置复制
  - https://github.com/T-miracle/vitepress-plugin-comment-with-giscus
- [x] add og:XXX property by `transformPageData(pageData)` hooks
- [ ] deploy guide
- [ ] music support
  - https://www.npmjs.com/package/vitepress-plugin-awesome-musicplayer