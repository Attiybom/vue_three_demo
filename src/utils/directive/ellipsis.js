const ellipsis = {
  beforeMount(el, binding) {
    console.log("ellipsis-binding", binding);
    const { value = "style", arg = 10 } = binding;

    // js实现文字省略
    function substrLength(element, length = 10) {
      //elementId：元素id，length：需保留字符串长度
      const text = element;
      let result = "";
      if (text.innerText.length > length) {
        result = text.innerText.substr(0, length) + "...";
      } else {
        result = text.innerText;
      }
      text.innerText = result;
    }

    if (value === "style") {
      // 方案一: 通过样式控制省略
      el.style.width = `${binding.arg || 100}px`;
      el.style.whiteSpace = "nowrap";
      el.style.overflow = "hidden";
      el.style.textOverflow = "ellipsis";
    } else {
      const len = +arg + 1;
      substrLength(el, len);
    }
  },
};

export default ellipsis;
