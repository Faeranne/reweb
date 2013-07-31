var path=require('path');

exports.run = function(io,app){
    this.socket = io.sockets;
    app.get('/reweb.js',function(req, res){
        res.sendfile(path.resolve(__dirname, 'reweb.js'))
    })
    this.html = function(tag, html){
        this.socket.emit("html",{tag:tag,html:html});
    }
    this.javascript = function(javascript){
        var js = javascript
        var id = new Date().getUTCMilliseconds();
        app.get('/'+id,function(req,res){
            res.send(js)
        })
        this.socket.emit("js",id);
    }
    this.css = function(css){
        this.socket.emit("css",css);
    }
}


