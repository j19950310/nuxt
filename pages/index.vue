<template>
  <div class="container">
      <div class="index__nav">
        <nuxt-link :to="gh_rep+'/about'" target="_blank" class="index__nav-link"><span class="a index__nav-link-t">關於我</span></nuxt-link>
        <nuxt-link :to="gh_rep+'/contact'"  target="_blank" class="index__nav-link"><span class="a index__nav-link-t">連絡我</span></nuxt-link>
      </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  head:{
    title: 'Jay 測試中'
  },
  data() {
    return {
      // gh repository name
      gh_rep: 'nuxt'
      // gh_rep: ''

    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
