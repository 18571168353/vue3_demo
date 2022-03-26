<template>
  <div class=""></div>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
export default defineComponent({
  components: {},
  props: {},
  setup(props, ctx) {
    onMounted(() => {})
    const state = reactive({})
    return { ...toRefs(state) }
  }
})
</script>
<style lang="scss" scoped></style>
