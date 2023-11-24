export default {
  // inject: ['compareInfo'],
  inject: {
    compareInfo: {
      value: "compareInfo",
      default: null,
    },
  },
  directives: {
    compare: {
      inserted(el, binding, vnode) {
        let propertyValue = null;
        const { arg: propertyName, value } = binding;
        console.log(binding, 8);
        const { context: that } = vnode;
        propertyValue =
          value !== null && value !== undefined ? value : el.innerText;
        if (typeof propertyValue === "string") {
          propertyValue = propertyValue.trim();
        }
        if (
          !that.compareInfo?.hasOwnProperty(propertyName) ||
          that.compareInfo[propertyName] === null ||
          that.compareInfo[propertyName] === undefined
        ) {
          return;
        }
        const innerText = el.innerText;
        el.innerHTML = `<span title=${el.innerText} style="overflow:hidden;white-space:nowrap;text-overflow:ellipsis">${innerText}</span>`;
        if (that.compareInfo[propertyName] != propertyValue) {
          console.log(28);
          const warningIcon = document.createElement("i");
          warningIcon.setAttribute("style", "color:#ff7d00;margin-right:8px;");
          el.setAttribute(
            "style",
            "background-color:#fff7eb;display:flex;justify-content:space-between;align-items:center;"
          );
          el.appendChild(warningIcon);
        } else {
          const approveIcon = document.createAttribute("i");
          approveIcon.setAttribute("class", "el-icon-check");
          approveIcon.setAttribute("style", "color:#00b42a;margin-right:8px");
          el.setAttribute(
            "style",
            "display:flex;justify-content:space-between;align-items:center;"
          );
          el.appendChild(approveIcon);
        }
      },
    },
  },
};
