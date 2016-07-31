var app =  require('express')(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    redis = require('redis');

server.listen(9090);

app.get('/',function(req,res){
    res.send('Server running..');
});

io.on('connection',function(soc){
    console.log('client connected');
})