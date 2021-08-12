<template>
  <div class="app">
    <Header></Header>
    <div class="contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>