import realImg from "./realImg";
import hideText from "./hideText";
import formatMoney from "./formatText";

const directives = {
  realImg,
  hideText,
  formatMoney,
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
