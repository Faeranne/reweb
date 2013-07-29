
socket.on('html', function (data) {
    console.log(data);
    $(data.tag).html(data.html);
});
socket.on('js', function (data) {
    console.log(data);
    eval(data);
});
socket.on('css', function (data) {
    console.log(data);
    $("head").append("<style>"+data+"</style>");
});