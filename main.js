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
} else if (href.indexOf('huya') > 0) {
    sendBarrage('#pub_msg_input', '#msg_send_bt', function () {
        $('#msg_send_bt').addClass('enable');
    });
}

function sendBarrage(textareaSelector, sendBtnSelector, beforeFn) {
    setInterval(function () {
        if (beforeFn) {
            beforeFn();
        }
        i++;
        $(textareaSelector).val(msg + i);
        $(sendBtnSelector).click();
    }, 10000);
}