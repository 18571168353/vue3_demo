<template>
  <div class="logincontainer">
    <el-form ref="formRef" class="formbox" :model="formData" :rules="rules">
      <div class="title"><h3>{{$t('login.title')}}</h3></div>
      <el-form-item prop="username">
        <svg-icon class="iconsvg" icon="user"></svg-icon>
        <el-input
          v-model="formData.username"
          autocomplete="off"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item prop="password">
        <svg-icon class="iconsvg" icon="password"></svg-icon>
        <el-input
          show-password
          autocomplete="off"
          placeholder="请输入密码"
          v-model="formData.password"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          style="width: 100%; height: 47px"
          type="primary"
          @click="onSubmit"
          >{{$t('login.btnTitle')}}</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const formData = ref({
  username: 'admin',
  password: '123456'
})
const rules = ref({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const formRef = ref(null)
const onSubmit = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      //调用vuex 传入参数 触发登录
      store.dispatch('app/login', formData.value)
    } else {
      return false
    }
  })
}
</script>
<style lang="scss" scoped>
.logincontainer {
  width: 100%;
  height: 100%;
  background-color: #2b3a4b;
  overflow: hidden;
  text-align: center;
  .formbox {
    width: 420px;
    margin: 300px auto;
    box-shadow: 0 0 25px #2b3a4b;
    position: relative;
    .title {
      color: #fff;
      margin: 20px 0;
    }
    .el-form-item {
      position: relative;
    }
    ::v-deep .el-input {
      input {
        height: 47px;
        border-color: #273443;
        background-color: #273443;
        padding: 12px 5px 12px 25px;
      }
    }
    .iconsvg {
      position: absolute;
      z-index: 10;
      top: 17px;
      left: 6px;
      color: #556773;
    }
  }
}
</style>
