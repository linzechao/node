'use strict';
var express = require('express'),
    router = express.Router();

// 首页
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Welcom To Here.'
    });
});

module.exports = router;
