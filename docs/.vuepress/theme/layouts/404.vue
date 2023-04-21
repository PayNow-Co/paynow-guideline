<template>
  <Layout>
    <template v-slot:page>
      <div class="theme-container">
        <div class="theme-default-content">
          <div class="page">
            <img src="/logo.svg" alt="logo" style="width: 160px;">
            <span>沒有這個頁面</span>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import { useDarkMode } from '@vuepress/theme-default/lib/client/composables'

export default {
  components: {
    Layout,
  },
  setup(props) {
    const isDarkMode = useDarkMode()
    return {
      isDarkMode
    }
  }
}
</script>