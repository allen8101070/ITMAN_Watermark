(function() {

    const defaults = {
      file: "",
      position: "bottom-right",
      opacity: 1,
      url: "",
      className: "",
    };
    
    const extend = function() {
      let args, target, i, object, property;
      args = Array.prototype.slice.call(arguments);
      target = args.shift() || {};
      for (i in args) {
        object = args[i];
        for (property in object) {
          if (object.hasOwnProperty(property)) {
            if (typeof object[property] === "object") {
              target[property] = extend(target[property], object[property]);
            } else {
              target[property] = object[property];
            }
          }
        }
      }
      return target;
    };
  
    let div;
  
    // 使用 .registerPlugin 和 extend 把自訂內容綁進videojs
    // .registerPlugin() 第一個參數名稱會對應之後新建進videojs原形鏈上的方法名稱
    videojs.registerPlugin("ITMAN_watermark", function(settings) {
  
      let options, player, video, img, link;
      options = extend(defaults, settings);
  
      
      player = this.el();
      video = this.el().getElementsByTagName("video")[0];
  
      // 創建浮水印相關元素的 div 和添加 class 樣式
      if (!div) {
        div = document.createElement("div");
        options.className === "itman-watermark"
          ? (div.className = options.className)
          : (div.className = "itman-watermark " + options.className);
      } else {
        // 如果 div 已存在 就清空 div 內容
        div.innerHTML = "";
      }
  
      // 圖片設定
      if (options.file) {
        img = document.createElement("img");
        div.appendChild(img);
        img.src = options.file;
      }
  
      // 浮水印位置設定
      if (options.position === "top-left" || options.position === "left-top") {
        // 左上
        div.style.top = "0";
        div.style.left = "0";
      } else if (
        options.position === "top-right" ||
        options.position === "right-top"
      ) {
        // 右上
        div.style.top = "0";
        div.style.right = "0";
      } else if (
        options.position === "bottom-right" ||
        options.position === "right-bottom"
      ) {
        // 右下 ( 30px 是為了避開與導覽列UI重疊 )
        div.style.bottom = "30px";
        div.style.right = "0";
      } else if (
        options.position === "bottom-left" ||
        options.position === "left-bottom"
      ) {
        // 左下 ( 30px 是為了避開與導覽列UI重疊 )
        div.style.bottom = "30px";
        div.style.left = "0";
      } else if (options.position === "center") {
        // Center
        div.style.top = this.height() / 2 + "px";
        div.style.left = this.width() / 2 + "px";
      }
  
      // 透明度設定
      div.style.opacity = options.opacity;
  
      // url參數有值(連結) 就替浮水印添加 a 標籤
      if (options.url !== "") {
        link = document.createElement("a");
        link.href = options.url;
        link.target = "_blank";
        link.appendChild(div);
        player.appendChild(link);
      } else {
        player.appendChild(div);
      }
    });
  })();