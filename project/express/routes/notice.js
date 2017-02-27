'use strict';
var url = require('url'),
    express = require('express'),
    mongo = require('mongodb'),
    monk = require('monk'),
    router = express.Router(),
    db = monk('localhost:27017/database'),
    // 支持图片上传
    multiparty = require('multiparty'),
    util = require('util'),
    fs = require('fs');

// 读取数据
function readDB (extent, options, callback) {
    var collection = db.get('notice');
    collection.find(extent, options, function (error, docs) {
        callback(error, docs);
    });
}

// 首页为列表显示
router.get('/', function (req, res) {
    // 默认是按最新排序
    readDB({}, {sort: {date: -1}}, function (error, docs) {
        var sum = docs.length;
        // 暂时使用slice来分页
        docs = docs.slice(0, 10);
        docs = docs.map(function (element, index) {
            element.no = index + 1;
            element.title = decodeURI(element.title);
            element.content = decodeURI(element.content.replace(/\%0A/g, '<br>').replace(/\%E3\%80\%80/g, '　'));
            element.date = element.date.toLocaleString();
            if (element.carousel) {
                element.carousel.reverse();
            }
            return element;
        });

        var num = [];
        for (let start = 1; start <= sum && start <= 5; start ++) {
            num.push(start);
        }

        if (!error) {
            res.render('notice', {
                title: 'Notice List',
                result: docs,
                info: {
                    page: 1,
                    sum: sum,
                    size: 10,
                    num: num
                }
            });
        }
    });
});

// 请求数据
router.get('/getNotice', function (req, res) {
    var options = url.parse(req.originalUrl, true).query,
        page = +options.page || 1,
        size = +options.size || 10;
    // 暂时使用slice来分页
    readDB({}, {sort: {date: -1}}, function (error, docs) {
        var sum = docs.length;
        docs = docs.slice((page - 1) * size, size * page);
        docs = docs.map(function (element, index) {
            element.no = index + 1;
            element.title = decodeURI(element.title);
            element.content = decodeURI(element.content.replace(/\%0A/g, '<br>').replace(/\%E3\%80\%80/g, '　'));
            element.date = element.date.toLocaleString();
            return element;
        });

        var num = [];
        var count = Math.ceil(sum / size);
        page = page > count ? count : page;
        var start = page > 5 ? page - 2 : 1;
        var end = page > 5 ? (page + 2 < count ? page + 2 : count) : (start + 4 > count ? count : start + 4);

        for (; start <= end; start ++) {
            num.push(start);
        }

        // 组装数据
        if (!error) {
            res.json('notice', {
                result: docs,
                info: {
                    page: page,
                    sum: sum,
                    size: size,
                    num: num
                }
            });
        }
    });
});

// 插入数据
function insertDB (data, callback) {
    var collection = db.get('notice');
    collection.insert(data, function (error, docs) {
        callback(error, docs);
    });
}

// 添加新公告
router.put('/addNotice', function (req, res) {
    var body = req.body;
    // 提交到数据库
    readDB({}, function (error, docs) {
        if (!error) {
            insertDB({
                title: encodeURI(body.title.replace(/</g, '&lt;').replace(/>/g, '&gt;')),
                content: encodeURI(body.content.replace(/</g, '&lt;').replace(/>/g, '&gt;')),
                department: body.department,
                date: new Date()
            }, function (error, docs) {
                if (error) {
                    res.json({status: 0, data: '添加失败！'});
                } else {
                    res.json({status: 1, data: '添加成功！'});
                }
            });
        }
    });
});

// 删除数据
function delDB (id, callback) {
    var collection = db.get('notice');
    collection.remove({_id: id}, function (error) {
        callback(error);
    });
}

// 删除公告
router.delete('/delNotice', function (req, res) {
    delDB(req.body.id, function (error) {
        if (error) {
            res.json({status: 0, data: '删除失败！'});
        } else {
            res.json({status: 1, data: '删除成功！'});
        }
    });
});

// 更新数据库
function updateDB (extent, updater, callback) {
    var collection = db.get('notice');
    collection.update(extent, updater, function (error) {
        callback(error);
    });
}

// 上传图片
router.post('/upload', function (req, res) {
    var form = new multiparty.Form({uploadDir: './public/img/upload/tmp/'});
    form.parse(req, function (error, fields, files) {
        if (error) {
            res.json({status: 0, data: '上传失败！'});
        } else {
            var id = fields._id[0], active = {_id: id};
            readDB(active, function (error, docs) {
                if (!error) {
                    docs = docs[0];
                    var len;
                    // 只允许上传4张图片
                    if (docs.carousel) {
                        if (docs.carousel.length >= 4) {
                            // 删除第一张图片
                            updateDB(active, {'$pop': {carousel: -1}}, function () {});
                            len = 5;
                        } else {
                            len = docs.carousel.length + 1;
                        }
                    } else {
                        len = 0;
                    }
                    // 重命名
                    var inputFile = files.file[0];
                    var uploadedPath = inputFile.path;
                    var name = id + '-' + len + '.' + inputFile.originalFilename.split('.').reverse()[0];
                    // 存入数据库
                    updateDB(active, {'$addToSet': {carousel: name}}, function () {});
                    // let go
                    var dstPath = './public/img/upload/files/' + name;
                    fs.rename(uploadedPath, dstPath);
                    res.json({
                        status: 1,
                        data: '上传成功！',
                        files: files
                    });
                }
            });
        }
    });
});

module.exports = router;
