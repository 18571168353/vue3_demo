<template>
  <div class="">rights</div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch, computed, onMounted } from 'vue'
const props = defineProps({})
const emits = defineEmits([''])
onMounted(() => {})
watch(
  () => props.xx,
  (e) => {},
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped></style>
