<script setup>
import ShowArrCpn from "../components/ShowArrCpn";
import mockData from "../data/arrData.js";
import { ref, reactive, onMounted } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()

// 生命周期
const showArray = ref([]);
onMounted(() => {
  // console.log('route-query', route)
  const { isShow } = route.query || {}
  if (isShow) {
    console.log('mockData', mockData)
    showArray.value = [mockData[1][0]]
    // console.log('showArray', showArray.value)
  }
});

const dialogVisible = ref(false);
function showDialog(params) {
  dialogVisible.value = true;
}

const title = ref("");
function sure(params) {
  dialogVisible.value = false;
  title.value = "标题";
  showArray.value = mockData[1];
}



// 测试函数
const changeData = () => {
  showArray.value = [
    {
      name: "元始天尊",
      age: 18033330,
      hobby: "盘古幡",
    },
  ];
};
const refreshData = () => {
  showArray.value = mockData[1];
};
</script>

<template>
  <div class="test-view">
    <h1>test-view</h1>
    <div class="container">
      <div>title: {{ title || "空" }}</div>
      <div>
        <el-button type="primary" @click="showDialog">显示弹窗</el-button>
        <el-dialog title="提示" v-model="dialogVisible" width="30%">
          <span>点击确定，改变标题</span>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="dialogVisible = false">取消</el-button>
              <el-button type="primary" @click="sure"> 确定 </el-button>
            </span>
          </template>
        </el-dialog>
      </div>
      <el-button @click="changeData">change</el-button>
      <el-button @click="refreshData">refresh</el-button>
    </div>
    <el-divider />
    <div class="showClient">
      <ShowArrCpn :showData="showArray" />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
}
.showClient {
  margin-top: 10px;
}
</style>
