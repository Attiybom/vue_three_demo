// 原二维数组
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const oriData = [arr1, arr2];

// flag为假，第二个数组保留全部
// 不变，沿用原二维数据即 oriData = [[1,2,3],[4,5,6]]

// flag为真,第二个数组只剩一个
const changeArr2 = [4]
const trueData = [arr1, changeArr2]
// 最终数据 oriData = [[1,2,3],[4]]
