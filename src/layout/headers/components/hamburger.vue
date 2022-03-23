<template>
  <div class="hamburger">
    <svg-icon :icon="icon" @click="changeType"></svg-icon>
  </div>
</template>

<script setup>
import { ref ,computed} from 'vue'
import {useStore} from 'vuex'
const store = useStore()
const changeType = ()=>{
  store.commit('app/changeSiderType')
}
const icon = computed(()=>{
 return store.getters.siderType ? 'hamburger-opened' :'hamburger-closed'
})
</script>
<style lang="scss" scoped>
.hamburger {
  margin-left: 16px;
  cursor: pointer;
  line-height: 70px;
}
</style>
