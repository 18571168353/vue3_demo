<template>
  <el-container class="app-wrapper">
    <el-aside :width="asideWidth"><Menu></Menu></el-aside>
    <el-container
      class="container"
      :class="{ hidderContainer: !$store.getters.siderType }"
    >
      <el-header class="head"><Header></Header></el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Menu from './Menu'
import Header from './headers'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const asideWidth = computed(() => {
  return store.getters.siderType ? '300px' : '63px'
})
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  flex: 1;
  overflow: hidden;
  .head {
    padding: 0px;
    height: 70px;
  }
  .el-aside {
    // height: 100%;
    ul {
      height: 100%;
    }
  }
}
.container {
  height: 100%;
  position: fixed;
  width: 100%;
  width: calc(100% - 300px);
  top: 0;
  right: 0;
  z-index: 9;
}
.hidderContainer {
  // transition: width 0.27s;
  width: calc(100% - 63px);
}
</style>
