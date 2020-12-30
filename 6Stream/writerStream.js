var fs = require("fs");
var data = '我的github地址：https://github.com/luxinjuan';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data, 'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> finish、error
//error - 在接收和写入过程中发生错误时触发。
//finish - 所有数据已被写入到底层系统时触发
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log("程序执行完毕");