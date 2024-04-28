import axios from ".";

// 测试用例3
export async function getTableDataRequest() {
  const url = "/api/tableList";
  const data = await axios.get(url);

  return data;
}
