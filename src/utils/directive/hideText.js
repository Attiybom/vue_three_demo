const hideText = {
  beforeMount(el, binding) {
    // console.log("hideText-binding", binding);
    const { modifiers } = binding || {};

    // 获取类型
    let type = Object.keys(modifiers)[0];

    // 检测错误
    const typeList = ["name", "mobile", "idCard"];
    if (!typeList.includes(type)) {
      // console.log("请输入类型");
      // modifiers.name = true;
      type = "name"; //设置默认值为name
    }

    // do something
    switch (type) {
      case "name": {
        el.innerText =
          el.innerText.length > 2
            ? el.innerText.replace(/^(\S{1})\S+(\S{1})/, "$1*$2")
            : el.innerText.substring(0, 1) + "*";
        break;
      }
      case "mobile": {
        el.innerText = el.innerText.replace(/^(\d{3})\d+(\d{4})$/, "$1****$2");
        break;
      }
      case "idCard": {
        el.innerText = el.innerText.replace(
          /^(\d{6})\d+(\d{4})$/,
          "$1********$2"
        );
        break;
      }
    }
  },
};
export default hideText;
