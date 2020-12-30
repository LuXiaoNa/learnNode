var fs = require("fs");

//阻塞代码  同步 fs.readFileSync(path)  path指文件路径；同步操作没有回调函数
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("程序执行结束!");


//非阻塞代码   异步  fs.readFile(path,callback){}  异步操作有回调函数  
fs.readFile('input.txt', function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");

//第一个实例同步操作在文件读取完后才执行程序。 
//第二个实例异步操作 不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能