<script setup>
import { useRouter } from "vue-router";
import { TEST_PATH } from "../router/index";

const router = useRouter();
const addTest = () => {
  console.info('addTest')
  router.push({
    name: `test`,
    query: {
      isShow: true,
    },
  });
};

const toTest = () => {
  console.info('toTest')
  router.push({
    path: TEST_PATH,
  });
};
</script>

<template>
  <div class="home">
    home-page
    <div>
      <el-button type="primary" @click="addTest">新增到test</el-button>
      <el-button type="primary" @click="toTest">编辑到test</el-button>
    </div>
  </div>
</template>

<style scoped></style>
