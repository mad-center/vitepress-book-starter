import {defineConfig} from 'vitepress'

import sidebar from './sidebar.json'
import {imageLinkPlugin} from "./plugins/image-links/imageLink";

const DOC_ROOT_DIR = "manuscript"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir: `./${DOC_ROOT_DIR}`,
  lastUpdated: true,
  markdown: {
    config: (md) => {
      // md.use(imageLinkPlugin)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
    ],
    lastUpdated: {
      text: "Last Updated"
    },
    sidebar: sidebar,
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: `https://github.com/mad-center/vitepress-book-starter/edit/main/docs/${DOC_ROOT_DIR}/:path`
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/mad-center/vitepress-book-starter'}
    ],
  },
  transformPageData(pageData) {
    // console.log(pageData)

    // make sure head is an array
    pageData.frontmatter.head ??= []

    // add more open graph property
    // e.g. <meta name="og:title" content="VitePress">
    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'og:title',
        content:
          pageData.frontmatter.layout === 'home'
            ? `VitePress`
            : `${pageData.title} | VitePress`
      }
    ])

    // add custom web font
    // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-webfont@1.1.0/style.css"/>
    pageData.frontmatter.head.push([
      'link',{
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-webfont@1.1.0/style.css"
      }
    ])
  }
})