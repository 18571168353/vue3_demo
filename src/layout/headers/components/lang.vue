<template>
  <el-dropdown @command="handleCommand">
    <svg-icon icon="language"></svg-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :disabled="currrentlang == 'zh'"
          >中文</el-dropdown-item
        >
        <el-dropdown-item command="en" :disabled="currrentlang == 'en'"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
const store = useStore()
const i18n = useI18n()
const handleCommand = (command) => {
  i18n.locale.value = command
  store.commit('app/changelang', command)
  localStorage.setItem('lang',command)
}
const currrentlang = computed(() => {
  return i18n.locale.value
})
</script>
<style lang="scss" scoped></style>
