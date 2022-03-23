<template>
  <div class="header">
    <hamburger></hamburger>
  </div>
</template>

<script setup>
import hamburger from './components/hamburger.vue'
import { ref } from 'vue'
</script>
<style lang="scss" scoped>
.header{
  height: 100%;
  padding: 0px;
  box-shadow: 0px 1px 3px #999;

}
</style>
