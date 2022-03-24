<template>
  <div id="screenFul">
    <svg-icon
      :icon="icon ? 'exit-fullscreen' : 'fullscreen'"
      @click="fullscreenclick"
    ></svg-icon>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import screenfull from 'screenfull'
const icon = ref(screenfull.isFullscreen)
const fullscreenclick = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
const changeIon = () => {
  icon.value = screenfull.isFullscreen
}
onMounted(() => {
  screenfull.on('change', changeIon)
})
onBeforeMount(() => {
  screenfull.off('change')
})
</script>
<style lang="scss" scoped></style>
