<template>
  <div class="home">
    <Navbar msg="Welcome to Your Vue.js App"/>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar
}
}
</script>
<style scoped>
  .content{
    position: relative;
    top: 50px;
  }

</style>
