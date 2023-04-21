import { path } from '@vuepress/utils'
import navbar from './configs/navbar'
import sidebar from './configs/sidebar'

export default {
  base: process.env.NODE_ENV === 'production' ? '/owlpay-admin-guideline/' : '/',
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/en/': {
            placeholder: 'Search',
          },
          '/zh_tw/': {
            placeholder: '搜尋',
          },
        },
      },
    ],
  ],
  //* SITE
  title: ' OwlPay Admin',
  description: 'OwlPay 內部系統介紹',
  theme: path.resolve(__dirname, './theme'),
  locales: {
    // '/en/': {
    //   lang: 'en-US'
    // },
    '/zh_tw/': {
      lang: 'zh-TW'
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { property: 'robots', content: 'noindex,nofollow' }]
  ],
  //* THEME
  themeConfig: {
    logo: '/logo-combine.svg',
    logoDark: '/logo-combine-dark.svg',
    // repo: 'https://github.com/OwlTing/owlpay-guideline',
    editLink: false,
    lastUpdated: false,
    contributors: false,
    selectLanguageText: 'Language',
    locales: {
      // '/en/': {
      //   selectLanguageName: 'English',
      //   navbar: navbar.en,
      //   sidebar: sidebar.en
      // },
      '/zh_tw/': {
        selectLanguageName: '中文',
        navbar: navbar.zh,
        sidebar: sidebar.zh
      },
    },
  },
}
