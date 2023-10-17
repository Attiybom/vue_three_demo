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
    <h1>home-page</h1>

    <div class="layout">
      <div class="left">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <el-button type="primary">
              切换级联数据
            </el-button>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="a">data A</el-dropdown-item>
              <el-dropdown-item command="b">data B</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="right">
        <el-cascader
          :props="{ multiple: true }"
          v-model="cascaderValue"
          :options="options"
          @change="handleChange"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
}
.left {
  margin-right: 30px;
}
</style>
