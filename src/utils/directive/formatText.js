const formatMoney = {
  beforeMount(el, binding) {
    console.log("formatText", binding);

    let strValue = binding.value;

    el.innerText = el.innerText.replace(/^-?\d+/g, (m) => {
      return "$" + m.replace(/(?=(?!\b)(\d{3})+$)/g, strValue);
    });

    // function replaceTextWithPattern(el, arg, value) {
    //   let regText = `(\\d{${arg}})`;
    //   let reg = new RegExp(regText, "g");
    //   el.innerText = el.innerText.replace(reg, value);
    // }

    // let { value = ",", arg = 3, modifiers } = binding;
    // console.log("modifiers", modifiers);
    // // const strList = Object.keys(modifiers)[0].split(":");
    // // console.log("strList", strList);
    // // const type = strList[0];
    // // arg = strList[1] || 3;
    // console.log("arg", arg);
    // if (type === "money") {
    //   console.log("money");
    //   // 金额
    //   el.innerText = el.innerText.replace(/^-?\d+/g, (m) => {
    //     return m.replace(/(?=(?!\b)(\d{3})+$)/g, value);
    //   });
    // } else {
    //   // 普通字符串
    //   console.log("str");
    //   let regText = "\\B(?=(\\w{" + arg + "})+(?!\\w))";
    //   let reg = new RegExp(regText, "g");
    //   // el.innerText = el.innerText.replace(reg, value);
    //   replaceTextWithPattern(el, arg, value);
    // }
  },
};

export default formatMoney;
