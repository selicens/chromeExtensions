/*
navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia ||
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
navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then( ).catch( );
*/
