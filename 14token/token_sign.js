const fs = require('fs');
const jwt = require('jsonwebtoken');

const key = "sfwdwrefcdcwew";

let user = {
    login_name: 'zhangsan',
};
//加密
let token_sign = jwt.sign(user, key, { expiresIn: 30 }); //expiresIn设置有效期，单位s
fs.writeFileSync('./token.txt', token_sign)