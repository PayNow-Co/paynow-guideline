import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  // 預設語言為中文
  // router.addRoute({ path: '/', redirect: '/zh_tw/' })
  router.beforeEach((to, from, next) => {
    const redirectList = {
      '/': '/zh_tw/',
    }
    const redirect = redirectList[to.path]

    if (redirect) {
      next({ path: redirect })
    } else next()
  })
})