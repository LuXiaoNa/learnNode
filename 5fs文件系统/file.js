var fs = require("fs"); //导入自带的fs文件系统模块
var buf = new Buffer.alloc(1024); //创建一个1024长度的buffer

console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) { //异步打开input.txt文件
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("截取10字节内的文件内容，超出部分将被去除。");
    // 截取文件
    fs.ftruncate(fd, 10, function(err) { //fd - 通过 fs.open() 方法返回的文件描述符,10是截取的长度
        if (err) {
            console.log(err);
        }
        console.log("文件截取成功。");
        console.log("读取相同的文件");
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
            if (err) {
                console.log(err);
            }
            console.log(bytes)
                // 仅输出读取的字节
            if (bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }

            // 关闭文件
            fs.close(fd, function(err) {
                if (err) {
                    console.log(err);
                }
                console.log("文件关闭成功！");
            });
        });
    });
});

//删除文件
console.log("准备删除文件！");
fs.unlink('delete.txt', function(err) { //fs.unlink(path,callback) path删除路径，callback回调函数，没有参数
    if (err) {
        return console.error(err);
    }
    console.log("文件删除成功！");
});

// 创建文件 
console.log("创建目录 /test/");
fs.mkdir("/test/", function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
});