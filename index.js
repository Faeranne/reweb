var path=require('path');

exports.run = function(io,app){
    this.socket = io.sockets;
    app.get('/reweb.js',function(req, res){
        res.sendfile(path.resolve(__dirname, 'reweb.js'))
    })
    this
}

exports.run.prototype.html = function(tag, html){
    this.socket.emit("html",{tag:tag,html:html});
}

exports.run.prototype.javascript = function(javascript){
    this.socket.emit("js",javascript);
}

exports.run.prototype.css = function(css){
    this.socket.emit("css",css);
}


