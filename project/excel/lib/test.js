'use strict';
var fs = require('fs'),
    mustache = require('mustache'),
    mysql = require('mysql'),
    xlsx = require('node-xlsx'),
    conf = require('../config.json'),
    connection = mysql.createConnection({
        host: conf.host,
        user: conf.user,
        password: conf.pwd,
        database: conf.db
    }),
    data = xlsx.parse(__dirname + '/../app/xls/example.xlsx')[0].data,
    list = {},
    error = [];

// 追加列表数据
function addTable(th, td, isEmpty) {
    var box = list.product_param.table[list.product_param.table.length - 1],
        isLack = box.tr[box.tr.length - 1].ctx.length <= box.num - 1;
    if (isEmpty) {
        // 判断最后一行数据是否多出空格单元格
        while (box.tr[box.tr.length - 1].ctx.length <= box.num - 1) {
            box.tr[box.tr.length - 1].ctx.push({
                th: '-',
                td: '-'
            });
        }
    } else {
        // 正常追加数据
        th = th.trim();
        td = td.trim();
        if (isLack) {
            box.tr[box.tr.length - 1].ctx.push({
                th: th,
                td: td
            });
        } else {
            box.tr.push({
                ctx: [{
                    th: th,
                    td: td
                }]
            });
        }
    }
}

// 连接数据库
connection.connect();
data.forEach(function (element) {
    if (!element.length) {return;}

    var model = element[0].trim(),
        title = element[1] ? element[1].trim() : null,
        ctx = element[2] ? element[2].trim() : null;

    switch (model) {
        case '产品细节':
            list.product_details = {
                title: title,
                details: ctx.trim(),
                img: []
            };
        break;

        case '产品图片':
            list.product_details.img.push({
                title: title,
                src: conf.url + ctx
            });
        break;

        case '场景图':
            if (!list.scene_img) {
                list.scene_img = {
                    title: title,
                    img: []
                };
            }
            list.scene_img.img.push(ctx);
        break;

        case '产品参数':
            if (!list.product_param) {
                list.product_param = {
                    title: title,
                    table: []
                };
            }

            // 是否以逗号来分割表头与表内容的
            var flag = element[5] &&
                typeof element[5] === 'string' ?
                    element[5].trim() .toUpperCase() :
                    element[5];

            if ('Y' === flag) {
                var bar = {caption: ctx, thead: {}, tr: []};
                // 表头
                bar.thead.th = element[3].split(',').map(function (element) {
                    return element.trim();
                });
                // 表内容
                element[4].replace(/\r/g, '').split('\\n').forEach(function (element) {
                    var tr = {ctx: [{td: []}]};
                    element.split(',').forEach(function (element) {
                        tr.ctx[0].td.push(element.trim());
                    });
                    bar.tr.push(tr);
                });
                list.product_param.table.push(bar);

            } else {
                // 没有表头
                var _index;
                list.product_param.table.forEach(function (element, index) {
                    if (ctx === element.caption) {
                        _index = index;
                    }
                });

                if (ctx) {
                    // 有caption
                    if (_index !== null && _index !== undefined) {
                        // 已存在
                        addTable(element[3], element[4]);
                    } else {
                        // 不存在
                        var bar = {caption: ctx, tr: [], num: +flag || 2, img: element[6]};
                        bar.tr.push({
                            ctx: [{
                                th: element[3].trim(),
                                td: element[4].trim()
                            }]
                        });
                        list.product_param.table.push(bar);
                    }
                } else {
                    // 无caption
                    addTable(element[3], element[4]);
                }
            }
        break;

        case '购物细节':
            if (!list.shop_details) {
                list.shop_details = [];
            }
            list.shop_details.push({
                title: title,
                centext: ctx,
                img: element[3] ? element[3].trim() : null,
            });
        break;

        case '相关产品':
            if (!list.related_product) {
                list.related_product = [];
            }
            connection.query('select Title, PictureURL, Currency, CurrentPrice From eb_item WHERE ID = ' + element[3], function(err, rows, db) {
                if (rows.length) {
                    var bar = {
                        href: (conf.href[ctx.trim().toUpperCase()] || conf.href.US) + element[3],
                        src: rows[0].PictureURL,
                        desc: rows[0].Title,
                        curr: rows[0].Currency,
                        price: rows[0].CurrentPrice,
                        postage: element[4]
                    };
                    // 含有title
                    if (title) {
                        list.related_product.push({
                            title: title,
                            product: [bar]
                        });
                    } else {
                        list.related_product[list.related_product.length - 1].product.push(bar);
                    }
                } else {
                    error.push(element[3]);
                }
            });
        break;

        default:
        break;
    }
});

// 关闭数据库
// 之后处理模板
connection.end(function (err) {
    // 判断表格最后一行是否存在多个空格单元格
    addTable(undefined, undefined, true);

    // console.dir(list);
    // console.log(list.related_product);

    // 生成页面
    fs.readFile(__dirname + '/../app/model/input.html', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            fs.writeFile(__dirname + '/../app/model/ouput.html',
                mustache.render(data.toString(), list), function (err) {
                if (err) {
                    console.log('No.');
                } else {
                    console.log('Yes.');
                }
            });
        }
    });
});
