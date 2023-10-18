<script setup></script>

<template>
  <div class="directiveContainer">
    <h2>自定义指令测试</h2>
    <!-- <div class="realImgBox">
      <img class="imgContainer" src="" alt="" v-realImg="'/src/assets/loading.gif'">
      <img class="imgContainer" src="../assets//loading.gif" alt="">
    </div> -->

    <!-- <div class="hideTextBox">
      <div v-hide-text>张三</div>
      <div v-hide-text.name>张三丰</div>
      <div v-hide-text.mobile>13412345678</div>
      <div v-hide-text.idCard>422124199010101234</div>
    </div> -->

    <div class="formatTextBox">
      <!-- <div v-format-text.money="','">123456789</div> -->
      <!-- 123,456,789 -->
      <!-- <div v-format-text.money="'_'">123456789</div> -->
      <!-- 123_456_789 -->
      <!-- <div v-format-text.money:4="','">123456789</div> -->
      <!-- 1234,4567,89 -->
      <!-- <div v-formatMoney="'_'">123456789</div> -->
      <!-- 1234_4567_89 -->
      <!-- <div v-format-text>abcdefghi</div> -->
      <!-- abc,def,ghi- -->
    </div>

    <div class="ellipsis">
      <div v-ellipsis:220>
        默认通过样式实现文字省略通过样式实现文字省略通过样式实现文字省略通过样式实现文字省略
      </div>
      <div v-ellipsis:10="'js'">
        通过js实现文字省略通过js实现文字省略通过js实现文字省略通过js实现文字省略通过js实现文字省略
      </div>
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
