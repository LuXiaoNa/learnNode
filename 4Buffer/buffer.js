/*  JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
    但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，
    定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
*/
//1.Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
// const buf = Buffer.from('runoob', 'ascii');

// 输出 72756e6f6f62
//console.log(buf.toString('hex')); //hex - 将每个字节编码为两个十六进制字符。
// 输出 cnVub29i
//console.log(buf.toString('base64')); //Base64 编码。


// 2.创建一个长度为 10、且用 0 填充的 Buffer。
//const buf1 = Buffer.alloc(10);


//3.写入 Node 缓冲区   buf.write(string[, offset[, length]][, encoding])
// buf = Buffer.alloc(256);
// len = buf.write("www.runoob.com");
// console.log("写入字节数 : " + len);


//4.从缓冲区读取数据  buf.toString([encoding[, start[, end]]]),     start开始位置默认为0，end结束位置默认为缓冲区的末尾
// buf = Buffer.alloc(26);
// for (var i = 0; i < 26; i++) {
//     buf[i] = i + 97;
// }
//ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
// console.log(buf.toString('ascii')); // 输出: abcdefghijklmnopqrstuvwxyz
// console.log(buf.toString('ascii', 0, 5)); //使用 'ascii' 编码, 并输出: abcde
// console.log(buf.toString('utf8', 0, 5)); // 使用 'utf8' 编码, 并输出: abcde
// console.log(buf.toString(undefined, 0, 5)); // 使用默认的 'utf8' 编码, 并输出: abcde


//5.将 Buffer 转换为 JSON 对象  buf.toJSON()
// const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
// const json = JSON.stringify(buf);

// // 输出: {"type":"Buffer","data":[1,2,3,4,5]}
// console.log(json);

// const copy = JSON.parse(json, (key, value) => {
//     return value && value.type === 'Buffer' ?
//         Buffer.from(value.data) :
//         value;
// });

// // 输出: <Buffer 01 02 03 04 05>
// console.log(copy);

//6.缓冲区合并 Buffer.concat(list[, totalLength])
// var buffer1 = Buffer.from(('Hello World!!!'));
// var buffer2 = Buffer.from(('https://github.com/luxinjuan'));
// var buffer3 = Buffer.concat([buffer1, buffer2]);
// console.log("buffer3 内容: " + buffer3.toString());


//7.缓冲区比较   buf.compare(otherBuffer); 返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
// var buffer1 = Buffer.from('ABC');
// var buffer2 = Buffer.from('ABCD');
// var result = buffer1.compare(buffer2);

// if (result < 0) {
//     console.log(buffer1 + " 在 " + buffer2 + "之前");
// } else if (result == 0) {
//     console.log(buffer1 + " 与 " + buffer2 + "相同");
// } else {
//     console.log(buffer1 + " 在 " + buffer2 + "之后");
// }
//输入结果：ABC在ABCD之前


//8.拷贝缓冲区  buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
// var buf1 = Buffer.from('abcdefghijkl');
// var buf2 = Buffer.from('RUNOOB');
//  //将 buf2 插入到 buf1 指定位置上
// buf2.copy(buf1, 2);
// console.log(buf1.toString());    //输出结果：abRUNOOBijkl


//9.缓冲区裁剪  buf.slice([start[, end]])
var buffer1 = Buffer.from('Hello');
// 剪切缓冲区
var buffer2 = buffer1.slice(0, 2);
console.log("buffer2 content: " + buffer2.toString()); //输出结果：He