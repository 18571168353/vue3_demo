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
      <el-button type="primary">添加用户</el-button>
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
          <el-switch v-model="row.mg_state" />
        </template>
        <template #default v-else-if="item.prop === 'action'">
          <el-button type="primary" size="small" :icon="Edit"></el-button>
          <el-button type="warning" size="small" :icon="Setting"></el-button>
          <el-button type="danger" size="small" :icon="Delete"></el-button>
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
</template>

<script setup>
import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { getUser } from '@/api/users'
import { options } from './components/options'
const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 10
})
const total = ref(0)
const tableData = ref([])
const getUserinit = () => {
  getUser(queryForm.value).then((res) => {
    tableData.value = res.users
    total.value = res.total
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
