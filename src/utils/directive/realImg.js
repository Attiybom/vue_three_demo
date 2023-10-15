const realImg = {
  async beforeMount(el, binding) {
    const imgURL = binding.value;
    console.log("realImg", binding.value);
    if (imgURL) {
      const exist = imgIsExist(imgURL);
      exist && el.setAttribute("src", imgURL);
    }

    function imgIsExist(url) {
      return new Promise((resolve) => {
        let img = new Image();

        img.src = url;

        img.onload = () => {
          if (img.complete) {
            resolve(true);
            img = null;
          }
        };

        img.onerror = () => {
          resolve(false);
          img = null;
        };
      });
    }
  },
};

export default realImg;
