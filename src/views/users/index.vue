<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input
          :placeholder="$t('table.placeholder')"
          clearable
          v-model="queryForm.query"
        ></el-input>
      </el-col>
      <el-button type="primary" :icon="Search" @click="search">搜索</el-button>
      <el-button type="primary" @click="adduser">添加用户</el-button>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        :prop="item.prop"
        :width="item.width"
        :label="$t(`table.${item.label}`)"
        v-for="(item, index) in options"
        :key="index"
      >
        <template v-slot="{ row }" v-if="item.prop === 'create_time'">
          {{ $filters.filterTimes(row.create_time) }}
        </template>
        <template v-slot="{ row }" v-else-if="item.prop === 'mg_state'">
          <el-switch v-model="row.mg_state" @change="changestate(row)" />
        </template>
        <template #default="{ row }" v-else-if="item.prop === 'action'">
          <el-button
            type="primary"
            size="small"
            @click="adduser(row)"
            :icon="Edit"
          ></el-button>
          <el-button type="warning" size="small" :icon="Setting"></el-button>
          <el-button
            type="danger"
            size="small"
            @click="deluser(row)"
            :icon="Delete"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      v-model:currentPage="queryForm.pagenum"
      v-model:page-size="queryForm.pagesize"
      :page-sizes="[1, 5, 10]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
  <Dialog
    v-model="dialogVisible"
    v-if="dialogVisible"
    :DialogTitle="DialogTitle"
    :dialogTableValue="dialogTableValue"
    @inituserlist="getUserinit"
  />
</template>

<script setup>
import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { getUser, changeUserState, delUser } from '@/api/users'
import { options } from './components/options'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import Dialog from './components/dialog.vue'
const i18n = useI18n()
const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 10
})
const total = ref(0)
const tableData = ref([])
const dialogVisible = ref(false)
const dialogTableValue = ref({})
const getUserinit = () => {
  getUser(queryForm.value).then((res) => {
    tableData.value = res.users
    total.value = res.total
  })
}
const changestate = (row) => {
  changeUserState(row.id, row.mg_state).then((res) => {
    ElMessage({
      message: i18n.t('message.updeteSuccess'),
      type: 'success'
    })
  })
}
const DialogTitle = ref('')
const adduser = (row) => {
  if (row.id) {
    DialogTitle.value = '编辑用户'
    dialogTableValue.value = JSON.parse(JSON.stringify(row))
  } else {
    dialogTableValue.value = {}
    DialogTitle.value = '添加用户'
  }
  dialogVisible.value = true
}
const deluser = (row) => {
  ElMessageBox.confirm(`此操作将删除用户${row.username}`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      delUser(row.id).then((res) => {
        getUserinit()
        ElMessage({
          type: 'success',
          message: '删除用户成功！'
        })
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除'
      })
    })
}
const search = () => {
  getUserinit()
}

const handleSizeChange = (pagesize) => {
  queryForm.value.pagenum = 1
  queryForm.value.pagesize = pagesize
  getUserinit()
}
const handleCurrentChange = (pagenum) => {
  queryForm.value.pagenum = pagenum
  getUserinit()
}
getUserinit()
</script>

<style lang="scss" scoped>
.header {
  padding-bottom: 20px;
}
.pagination {
  float: right;
  margin: 20px;
}
</style>
