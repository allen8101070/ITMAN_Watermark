console.log("Hello")
const player = videojs('my-video',{
    sources:[{ src: "https://www.w3schools.com/html/movie.mp4" }],
    loop:true,
    muted:true,
    width:"600",
    height:"300",
    controls:true
});

player.ITMAN_watermark({
    file: "./G.png",
    position:"left-bottom",
    opacity: 0.3,
});
