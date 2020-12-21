import express = require('express');
const app = express();


app.get('/',function(request, response){
    response.send('Hello world');
});

const server = app.listen(8888,function(){
    console.log("服务器开启");
});
//这里是测试注释