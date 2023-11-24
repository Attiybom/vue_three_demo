import realImg from "./realImg";
import hideText from "./hideText";
import formatMoney from "./formatText";
import ellipsis from "./ellipsis";
import debounce from "./debounce";
import watermark from "./watermark";
import compare from "./compare";

const directives = {
  realImg,
  hideText,
  formatMoney,
  ellipsis,
  debounce,
  watermark,
  compare,
};

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      // console.log("key-value", key, directives[key]);
      app.directive(key, directives[key]);
    });
  },
};
3;
