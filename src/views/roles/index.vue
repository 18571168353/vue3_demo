<template>
  <div class="containerpage">
    <div>父组件</div>
    <Son :msg="msg" @send="send" />
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import Son from './components/son.vue'
export default defineComponent({
  components: { Son },
  setup() {
    const state = reactive({
      msg: '父组件的数据'
    })
    const send = (val) => {
      console.log(val)
      state.msg = val
    }
    return { ...toRefs(state), send }
  }
})
</script>
<style lang="scss" scoped></style>
