<script setup>
const props = defineProps(["showData"]);

console.log(props.showData);
</script>

<template>
  <div class="show">
    <h1>child-components</h1>

    <div v-for="item in showData" :key="item.hobby" class="dataClient">
      <div>name:{{ item.name }}</div>
      <div>age:{{ item.age }}</div>
      <div>hobby:{{ item.hobby }}</div>
    </div>
  </div>
</template>

<style scoped>
.show {
  width: 400px;
  height: 400px;
  background-color: #23aaf2;
}
.dataClient {
  padding: 12px;
}
</style>
