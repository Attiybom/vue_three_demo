function splitStringByArgAndValue(inputString, arg, value) {
  if (arg <= 0) {
    return inputString; // 无需分割
  }

  const parts = [];
  for (let i = 0; i < inputString.length; i += arg) {
    parts.push(inputString.substr(i, arg));
  }

  return parts.join(value);
}

// 示例用法
const inputString = "123456789";
const arg = 4;
const value = "_";
const result = splitStringByArgAndValue(inputString, arg, value);
console.log(result); // 输出 "1234_5678_9"
