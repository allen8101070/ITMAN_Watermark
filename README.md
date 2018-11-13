# video.js 浮水印套件 ITMAN_watermark
[2019 年 IT 邦幫忙鐵人賽](https://ithelp.ithome.com.tw/ironman) videojs 範例-浮水印套件

## 安裝、引入檔案

git clone 此專案後，取出 `ITMAN.watermanmark.css` 和 `ITMAN.watermanmark.js`兩個檔案。
在您的專案安裝、引入 vidoejs 後安裝、引入此套件檔案

```HTML
<!-- CSS -->
<link href="路徑/ITMAN.watermanmark.css" rel="stylesheet">

<!-- JS -->
<script src='路徑/ITMAN.watermanmark.js'></script>
```

## 使用方式
使用 `videojs()` 建立好 videojs 播放器物件後，用 `.ITMAN_watermark()` 方法來新增浮水印

### 範例
```
const player = videojs('your_video_id');

player.ITMAN_watermark({
    file:"路徑/浮水印圖片",
    opacity: 0.4
})
```

### .ITMAN_watermark( ) 可傳物件屬性、值
| 屬性 | 值 | 描述 | 預設 |
| -------- | -------- | -------- | -------- |
| file     | 字串 ( URL 路徑 )     | 圖片位置     | |
| position     | 字串    | 水印圖在播放器上的位置     |"bottom-right" |
| opacity    | 數值 ( 0.1 ~ 1 )    | 透明度     |1 |
| className   | 字串    | CSS的class名稱(添加在水印上)    | |
| url     | 字串 ( URL 路徑 )    | 浮水印超連結網址    | |

#### postiion
postiion 會決定浮水印圖片的位置，其可設置的值為：

| 值 | 浮水印位置 |
| -------- | -------- |
| "top-left" 或 "left-top" | 左上     |
| "bottom-left" 或 "left-bottom" | 左下     |
| "top-right" 或 "right-top" | 右上     |
| "bottom-right" 或 "right-bottom" | 右下     |

#### className
className 的設定為，當使用者傳入自己的 class 樣式名稱，會接續在 `ITMAN.watermanmark.css` 的樣式後面變成
```
<div class="itman-watermark 你傳入的樣式名稱">
    <img>
</div>
```