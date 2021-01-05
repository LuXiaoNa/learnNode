var http = require('http');
var https = require('https');
var url = require('url');
var util = require('util');
var fs = require('fs');
var cheerio = require('cheerio'); //npm install cheerio

// http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
//     // res.end(util.inspect(url.parse(req.url, true)));

//     // 解析 url 参数
//     var params = url.parse(req.url, true).query;
//     res.write("网站名：" + params.name);
//     res.write("\n");
//     res.write("网站 URL：" + params.url);
//     res.end();
// }).listen(3000);

//爬虫新浪网页
https.get('https://www.sina.com.cn', function(response) {
    let html = '';
    response.on('data', function(data) {
        html = html + data;
    });

    response.on('end', function() {
        fs.writeFileSync('./sina.html', html);
        const $ = cheerio.load(html);
        let links = $('a')
        console.log(links.length) //查询超级链接的个数
        let imgs = $('img')
        console.log(imgs.length) //查询图片的个数
    })
})