import axios from ".";

// 测试用例
export async function getTestData1() {
  const url = "/api/test1";
  const data = await axios.get(url);
  console.log("axios.get(url)", axios.get(url));
  return data;
}
// 测试用例2
export async function getTestData2() {
  const url = "/api/test2";
  const data = await axios.get(url);

  return data;
}

// 测试用例3 - 下架接口
export async function removeFromShelvesReq() {
  const url = "/api/test3";
  const data = await axios.get(url);

  return data;
}

// 测试用例3
export async function groundingReq() {
  const url = "/api/test4";
  const data = await axios.get(url);

  return data;
}
