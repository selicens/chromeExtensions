$(document).ready(function() {
    $('#login').on('click', function () {
        console.log('login')
        $(location).attr("href", "index.html")
    });
    /*navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia ||
        navigator.mediaDevices.webkitGetUserMedia ||
        navigator.mediaDevices.mozGetUserMedia ||
        navigator.mediaDevices.msGetUserMedia;
    if (navigator.getUserMedia) {
        // 支持
        console.log('支持')
    } else {
        // 不支持
        console.log('不支持')
    }
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then( ).catch( )*/
})
/*navigator.mediaDevices.getUserMedia({video : true, audio : false})
    .then(function (stream) {
        // videoタグの箇所へ、カメラの映像を挿入します。
        login.srcObject = stream;
    }).catch(function (error) {
    // もし許可されなかった場合、エラーの場合にはエラーログを表示します。
    console.log('mediaDevices.getUserMedia() error:', error);
    return;
})*/
