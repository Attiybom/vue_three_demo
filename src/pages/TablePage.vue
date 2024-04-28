<script setup>
// api

import { getTableDataRequest } from '../../src/services/table'

import { onMounted, ref } from 'vue'

const tableData = ref([])
onMounted(() => {
  setTimeout(() => {
    getTableDataRequest().then(res => {
    console.log('tableData', res.data.data.list)
    tableData.value = res.data.data.list
  })
  }, 2000)
})

</script>

<template>
  <div class="tablePage">
    <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="150" />
    <el-table-column label="Delivery Info">
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column label="Address Info">
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="120" />
        <el-table-column prop="address" label="Address" />
        <el-table-column prop="zip" label="Zip" width="120" />
      </el-table-column>
    </el-table-column>
  </el-table>
  </div>
</template>

<style scoped lang="less">

</style>
