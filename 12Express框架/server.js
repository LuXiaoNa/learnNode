var express = require('express');
//调用express函数  返回一个app代表一个服务端的应用程序
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');
//express.static方法告诉express框架 静态文件在哪里
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }).array('image'));

//对外提供了一个get请求  路径是 /index.html
app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.post('/file_upload', function(req, res) {

    console.log(req.files[0]); // 上传的文件信息

    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function(err, data) {
        fs.writeFile(des_file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
})

var server = app.listen(8081, function(err) {
    if (err) {
        console.log(err)
        return;
    }
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})