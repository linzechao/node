'use strict';
// 抓取慕课网的教程爬虫
var http = require('http'),
    cheerio = require('cheerio'),
    monk = require('monk'),
    db = monk('localhost:27017/imooc'),
    url = 'http://www.imooc.com/view/',
    error = 1, // 失败个数
    start = 0, // 开始id
    end = start + 2000; // 抓取2000条数据

function filterChapters(html, id) {
    var $ = cheerio.load(html),
        $main = $('#main'),
        author = [],
        // 等级，时长，人数
        $msg = $main.find('.meta-value'),
        title = $main.find('.hd h2').text().trim(),
        imooc;

    // 没有课程名称的忽略
    if (!title.trim()) {return;}

    // 作者
    $main.find('.teacher-info').each(function () {
        var $this = $(this);
        author.push({
            name: $this.find('.tit').text().trim(),
            job: $this.find('.job').text().trim()
        });
    });

    // 组装
    imooc = {
        _id: id,
        title: title,
        author: author,
        level: $msg.eq(0).text().trim(),
        time: $msg.eq(1).text().replace(/\s/g, ''),
        number: +$msg.eq(2).text().trim(),
        info: $main.find('.course-brief p').text().trim()
    };

    // 存入数据库
    var course = db.get('course');
    // 暂时关闭不了db数据库
    course.insert(imooc);

    // 返回测试
    // return imooc;
}

// 闭包
for (; start < end; start++) {
    (function (id) {
        setTimeout(request(id), id);
    }(start));
}

// 柯里化
function request(id) {
    return function () {
        http.get(url + id, function(res) {
            var html = '';

            res.on('data', function(data) {
                html += data;
            });

            res.on('end', function() {
                filterChapters(html, id);
            });
        }).on('error', function() {
            console.log(error++ + '、爬虫获取数据出错....');
        });
    }
}
