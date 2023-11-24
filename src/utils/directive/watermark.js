function applyWatermark(el, text) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = el.width;
  canvas.height = el.height;

  ctx.drawImage(el, 0, 0);

  ctx.font = "16px Arial";
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.fillText(text || "Watermark", el.width - 100, el.height - 20);

  el.src = canvas.toDataURL("image/png");
}

const watermark = {
  // 当绑定元素插入到 DOM 中时
  beforeMount(el, binding) {
    // 检查是否是图片元素
    if (el.tagName.toLowerCase() !== "img" || !el.src) {
      console.warn("v-watermark 指令只能应用于图片元素");
      return;
    }

    // 判断是否已加载
    if (el.complete) {
      applyWatermark(el, binding.value);
    } else {
      el.addEventListener("load", function () {
        applyWatermark(el, binding.value);
      });
    }
  },
};
export default watermark;
