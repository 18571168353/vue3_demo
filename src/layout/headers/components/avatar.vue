<template>
  <el-dropdown @command="handleCommand">
    <div class="block">
      <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="退出">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { ElMessageBox, ElMessage } from 'element-plus'
const store = useStore()
const squareUrl = ref(
  'https://img0.baidu.com/it/u=661161858,172661768&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
)
const handleCommand = (command) => {
  console.log(command)
  if (command === '退出') {
    ElMessageBox.confirm('此操作将退出系统', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        store.dispatch('app/logout')
        ElMessage({
          type: 'success',
          message: '退出成功！'
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消退出'
        })
      })
  }
}
</script>
<style lang="scss" scoped>
.block {
  cursor: pointer;
}
</style>
