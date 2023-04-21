<template>
  <Layout>
    <template #page-bottom>
      <div class="footer">
        <div class="footer__text">Copyright © OwlPay.</div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default {
  components: {
    Layout,
  },
}
</script>

<style lang="scss">
.footer__text {
  text-align: center;
  color: #666;
  font-size: 14px;
}
</style>