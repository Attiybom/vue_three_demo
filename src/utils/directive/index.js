import realImg from "./realImg";
import hideText from "./hideText";
import formatMoney from "./formatText";
import ellipsis from "./ellipsis";

const directives = {
  realImg,
  hideText,
  formatMoney,
  ellipsis,
};

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      console.log("key-value", key, directives[key]);
      app.directive(key, directives[key]);
    });
  },
};
3;
