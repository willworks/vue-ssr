<template>
  <div class="main">
    <router-view transition="expand" transition-mode="out-in"></router-view>
  </div>
</template>

<script>

// 接入 vuex 的 store
import store from './store'

export default {
  /* 注册顶层 App 的 store */
  store
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body {
  font: 12px/1.5 arial;
  height: 100%;
}

.expand-transtion {
  transition: all .5s ease;
}
.expand-enter,
.expand-leave {
  opacity: .01;
  transform: translate3d(0, 20px, 0);
}
[v-cloak] {
  display: none;
}
</style>
