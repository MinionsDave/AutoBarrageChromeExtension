// 先把视频隐藏了
var i = 0,
    msg = 'gaylun.tv 直播整合平台',
    href = window.location.href;


if (href.indexOf('quanmin') > 0) {
    sendBarrage('.w-sender_textarea', '.w-sender_submit-btn');
} else if (href.indexOf('panda') > 0) {
    sendBarrage('.room-chat-texta', '.room-chat-send');
} else if (href.indexOf('douyu') > 0) {
    sendBarrage('.cs-textarea', '.b-btn');
}

function sendBarrage(textareaSelector, sendBtnSelector) {
    setInterval(function () {
        i++;
        $(textareaSelector).val(msg + i);
        $(sendBtnSelector).click();
    }, 20000);
}