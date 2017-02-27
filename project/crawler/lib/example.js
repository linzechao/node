// 爬虫例子
var http = require('http'),
	cheerio = require('cheerio'),
	url = 'http://expo.bootcss.com/';

function filterChapters(html) {
	var $ = cheerio.load(html),
		$thumbnail = $('.thumbnail'),
		imgs = [];

	$thumbnail.each(function(index, item) {
		var $this = $(this),
			href = $this.attr('href'),
			title = $this.find('img').attr('alt'),
			img = $this.find('img').attr('src');

		imgs.push({
			href: href,
			title: title,
			img: img
		});
	});

	return imgs;
}

http.get(url, function(res) {
	var html = '';

	res.on('data', function(data) {
		html += data;
	});

	res.on('end', function() {
		filterChapters(html).forEach(function(item) {
			console.log('<a href="' + item.href + '"><img src="' + item.img + '" title="' + item.title + '"></a>\n');
		});
	});

}).on('error', function() {
	console.log('爬虫获取数据出错....');
});
