<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button class="up-btn" v-if="scope.row.canUp" @click="getShelves(scope.row, '上架')">上架</el-button>
          <el-popover placement="top-start" title="标题" width="200" trigger="click"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-button @click="getShelves(scope.row, '下架')" class="down-btn" v-if="scope.row.canDown">下架</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
// api

import { removeFromShelvesReq, groundingReq } from "../services/test";

const tableData = ref([{
  name: '王小虎',
  state: 0,
  canUp: true,
}, {
  name: '李小龙',
  state: 1,
  canDown: true,
}])

// eslint-disable-next-line no-unused-vars
const getShelves = (row, type) => {
  console.log('state', row.state)
  console.log('type', type)
  // 当row.state为0走上架接口正常
  // 当row.state为1走下架接口
  // 如果200el-popover组件不生效就是卡片没出来
  // 如果500且res.msg === '不能下架'el-popover组件生效就是卡片出来

  if (row.state === 1) {
    // console.log('下架')
    removeFromShelvesReq(row.id).then(res => {
      console.log(res)
      if (res.code === 200) {
        row.state = 0
      }
    })
  }

  if (row.state === 0) {
    // console.log('上架')
    groundingReq(row.id).then(res => {
      console.log(res)
      if (res.code === 200) {
        row.state = 1
      }
    })
  }
}

</script>
<style scoped>
.up-btn {
  background-color: #409eff;
  color: #fff;
  border-color: #409eff;
  margin-right: 10px;
  width: 80px;
}

.down-btn {
  background-color: #f56c6c;
  color: #fff;
  border-color: #f56c6c;
  width: 80px;
}
</style>
