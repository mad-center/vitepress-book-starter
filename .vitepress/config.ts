import {defineConfig} from 'vitepress'

import sidebar from './sidebar.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir: "./manuscript",
  lastUpdated: true,
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
    socialLinks: [
      {icon: 'github', link: 'https://github.com/mad-center/'}
    ]
  }
})
