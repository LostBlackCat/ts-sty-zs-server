import express = require('express');
const app = express();
//将static文件加入express目录，此后html内部的静态文件均可以使用相对路径
app.use(express.static('static'));


//默认中介体，响应任何url，返回index1
app.get('/',function(request, response){
    response.sendFile(__dirname + '/static/index1.html')
});

//route.url = index1
//return index1.html
app.get('/index1',function(request,response){
    response.sendFile(__dirname + '/static/index1.html')
})


//route.url = index2
//return index2.html
app.get('/index2',function(request,response){
    response.sendFile(__dirname + '/static/index2.html')
})


//监听8888端口，在本地开启web服务器
const server = app.listen(8888,function(){
    console.log("服务器开启");
});
