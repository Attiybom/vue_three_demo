<script setup>
import { optionsA, optionsB } from "@/data/cascaderData";
import { onMounted, ref } from "vue";

const options = ref([]);
const cascaderValue = ref([])
const lastSelectedLength = ref(0)
// 初始化级联数据
onMounted(() => {
  // 为每一组数据添加无选项
  optionsA.push({
    value: "none",
    label: "None",
  });
  // 为每一组数据添加无选项
  optionsB.push({
    value: "none",
    label: "None",
  });
  options.value = optionsA;
});

// 切换数据
const handleCommand = (command = 'a') => {
  console.log('handleCommand', command)
  if (command === 'b') {
    options.value = optionsB
  } else {
    options.value = optionsA
  }
  // 清空原已选中数据
  cascaderValue.value = []
}


// 过滤方法
const filterArr = (arr1, arr2) => {
  const arr = arr1.filters(item => !arr2.includes(item))
  return arr
}

//
const handleChange = () => {
  console.info('cascaderValue', cascaderValue.value)
  console.info('lastSelectedValue', lastSelectedLength.value)
  // 对比这次和上次选择的数据，得出用户这次选中的数据

  // if(res)

  lastSelectedLength.value = cascaderValue.value.length
}
</script>

<template>
  <div class="home">
    <div class="container">
      <router-link class="routerLink" to="edit">编辑页</router-link>
      <router-link class="routerLink" to="test">测试页</router-link>
      <router-link class="routerLink" to="directive">自定义指令测试页</router-link>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;

  .routerLink {
    margin: 10px ;
  }
}
</style>
