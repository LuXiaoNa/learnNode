const fs = require('fs');
const jwt = require('jsonwebtoken');

const key = "sfwdwrefcdcwew";
//解密
const token = fs.readFileSync('./token.txt', 'utf-8');
const obj = jwt.verify(token, key)
console.log(obj)