<script setup>
import { ref, reactive } from 'vue'
import Aside from './components/Aside.vue'



</script>

<template>
  <div class="app">
    <Aside />

    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/main.scss';

.app {
  display: grid;
  grid-template-columns: 18% 82%;
  min-height: 100vh;
  background-color: rgba(32, 33, 36, 1);
}

@media screen and (max-width: 1100px) {
  .app {
    display: grid;
    grid-template-columns: 1fr;
    background-color: rgba(32, 33, 36, 1);
  }
}
</style>

