// function printHello() {
//     console.log("Hello, World!");
// }
// // 两秒后执行以上函数,setTimeout() 只执行一次指定函数。
// var t = setTimeout(printHello, 2000);

// // 清除定时器
//  clearTimeout(t);



function printHello() {
    console.log("Hello, World!");
}
// 两秒后执行以上函数
//setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
//setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
var t = setInterval(printHello, 2000); //每隔两秒会输出“Hello World”

clearInterval(t)