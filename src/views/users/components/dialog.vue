<template>
  <el-dialog
    :model-value="dialogVisible"
    :title="DialogTitle"
    width="30%"
    :before-close="handleClose"
  >
    <el-form
      :model="datafrom"
      :rules="rules"
      ref="ruleFormRef"
      label-width="70px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="datafrom.username" />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        v-if="DialogTitle == '添加用户'"
      >
        <el-input v-model="datafrom.password" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="datafrom.email" />
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="datafrom.mobile" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, defineEmits, defineProps, watch } from 'vue'
import { addUser, editUser,delUser } from '@/api/users'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
const i18n = useI18n()
const emits = defineEmits(['update:modelValue', 'inituserlist'])
const props = defineProps({
  DialogTitle: {
    type: String,
    require: true,
    default: '添加用户'
  },
  dialogTableValue: {
    type: Object,
    default: () => {}
  }
})
const datafrom = ref({
  username: '',
  password: '',
  email: '',
  mobile: ''
})
const rules = ref({
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ],
  email: [
    {
      required: true,
      message: '请输入正确邮箱',
      trigger: 'blur'
    }
  ],
  mobile: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    }
  ]
})
const handleClose = () => {
  emits('update:modelValue', false)
}
const ruleFormRef = ref(null)
const handleConfirm = () => {
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      if (props.DialogTitle == '添加用户') {
        addUser(datafrom.value).then((res) => {
          ElMessage({
            message: i18n.t('message.updeteSuccess'),
            type: 'success'
          })
        })
      }else{
         editUser(datafrom.value).then((res) => {
          ElMessage({
            message: i18n.t('message.updeteSuccess'),
            type: 'success'
          })
        })
      }

      emits('inituserlist')
      handleClose()
    } else {
      return false
    }
  })
}
watch(
  () => props.dialogTableValue,
  (e) => {
    datafrom.value = e
  },
  { deep: true, immediate: true }
)
</script>
<style lang="scss" scoped></style>
