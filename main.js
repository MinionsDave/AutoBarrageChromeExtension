// 先把视频隐藏了
var i = 0,
    msg = 'gaylun.tv 直播整合平台',
    href = window.location.href;


if (href.indexOf('quanmin') > 0) {
    sendBarrage('asd', 'asd', quanmin())
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
    }, 20000);
}

function quanmin(i) {
    $.ajax({
        type: 'POST',
        url: 'http://www.quanmin.tv/barrage/sendBarrage?p=5&rid=15&rcat=1&uid=10205139&net=0&screen=3&device=rwduvf64prarqwhnzjtjj1s1cl80lcajhvuung25&refer=room%2F15&sw=1280&sh=800',
        data: {"p":{"type":0,"room":i,"text":"gaylun tv 直播整合"}},
    });
}
