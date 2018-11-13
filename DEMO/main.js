console.log("Hello")
const player = videojs('my-video',{
    sources:[{ src: "http://www.html5videoplayer.net/videos/toystory.mp4"}],
    loop:true,
    muted:true,
    width:"600",
    height:"300",
    controls:true
});

player.ITMAN_watermark({
    file: 'http://literreviewstaffing.com/wp-content/uploads/2015/02/google-1088004_960_720-150x150.png',
    position:"left-bottom",
    opacity: 0.3,
});
