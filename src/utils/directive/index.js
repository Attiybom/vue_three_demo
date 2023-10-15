import realImg from "./realImg";
import hideText from "./hideText";

const directives = {
  realImg,
  hideText,
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
