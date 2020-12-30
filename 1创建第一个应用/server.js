//步骤一：使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http
var http = require('http');

//步骤二：http.createServer()方法创建服务器
http.createServer(function(request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OKlu
    // 内容类型: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888); //使用 listen 方法绑定 8888 端口

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');