function debounceFn(fn, delay = 300) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const debounce = {
  mounted(el, binding) {
    if (typeof binding.value !== "function") {
      console.warn("v-debounce 参数必须是函数");
      return;
    }

    // 使用防抖函数包装原始的事件处理程序
    const debouncedHandler = debounceFn(binding.value, binding.arg || 300);

    el.addEventListener("input", debouncedHandler);
    el._debouncedHandler = debouncedHandler;
  },
  // unbind: function (el) {
  //   el.removeEventListener("input", el._debouncedHandler);
  //   el._debouncedHandler = null;
  // },
  unmounted(el) {
    el.removeEventListener("input", el._debouncedHandler);
    el._debouncedHandler = null;
  },
};

export default debounce;
