<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    :default-active="defaultactive"
    text-color="#fff"
    :collapse="!$store.getters.siderType"
    unique-opened
    router
  >
    <el-sub-menu
      :index="item.id + ''"
      v-for="(item, index) in menulist"
      :key="index"
    >
      <template #title>
        <el-icon>
          <component :is="iconslist[index]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item-group v-for="(ite, ind) in item.children" :key="ind">
        <el-menu-item :index="'/' + ite.path" @click="savepath(ite.path)">
          <el-icon>
            <component :is="menu"></component>
          </el-icon>
          {{ ite.authName }}
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref,computed } from 'vue'
const menulist = ref([])
const defaultactive = ref(sessionStorage.getItem('path') || '/users')
const iconslist = ref(['user', 'setting', 'shop', 'tickets', 'pie-chart'])
const menu = ref('menu')
const initMenuList = () => {
  Get('menus').then((res) => {
    menulist.value = res
  })
}
const savepath = (path) => {
  sessionStorage.setItem('path', `/${path}`)
  // defaultactive.value = '/' + path
}
initMenuList()
</script>
<style lang="scss" scoped></style>
