<template>
  <el-container class="app-wrapper">
    <el-aside width="250px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <!-- <router-link/> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  components: {},
  setup() {
    const state = reactive({})
    return { ...toRefs(state) }
  }
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  flex: 1;
  overflow: hidden;
  .el-aside {
    height: 100%;
    background-color: #304156;
  }
}
.container {
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
}
</style>
