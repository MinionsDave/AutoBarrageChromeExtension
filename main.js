// 先把视频隐藏了
var i = 0;
setInterval(function () {
    i++;
    $('.room-chat-texta').val('gaylun.tv 直播整合平台' + i);
    $('.room-chat-send').click();
}, 10000);