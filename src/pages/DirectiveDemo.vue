<script setup></script>

<template>
  <div class="directiveContainer">
    <h2>自定义指令测试</h2>
    <!-- <div class="box">
      <img class="imgContainer" src="" alt="" v-realImg="'/src/assets/loading.gif'">
      <img class="imgContainer" src="../assets//loading.gif" alt="">
    </div> -->

    <div class="textBox">
      <div v-hide-text>张三</div>
      <!-- 张* -->
      <div v-hide-text.name>张三丰</div>
      <!-- 张*丰 -->
      <div v-hide-text.mobile>13412345678</div>
      <!-- 134****5678 -->
      <div v-hide-text.idCard>422124199010101234</div>
      <!-- 422124********1234 -->
    </div>
  </div>
</template>

<style lang="less" scoped>
.directiveContainer {
  .imgContainer {
    width: 200px;
    height: 200px;
    margin: 10px;
  }
}
</style>
