require(['jquery', 'mustache', 'webuploader', 'bootstrap'], function ($, mustache, WebUploader) {
    'use strict';
    var $form = $('#form-add'),
        $tableList = $('#table-list'),
        $alert = $('#alert'),
        $dialogLook = $('#dialog-look'),
        tmpList = $('#tmp-list').html();
    // 添加表单
    $form.on('submit', function () {
        $.ajax({
            url: '/notice/addNotice',
            type: 'put', // 使用put提交数据
            data: $form.serialize(),
            success: function (data) {
                var cls = data.status ? 'alert-success' : 'alert-danger';
                $alert.removeClass('hidden').addClass(cls).find('strong').text(data.data);
                setTimeout(function () {
                    $alert.addClass('hidden').removeClass(cls);
                    appendListData(1);
                }, 1000);
            },
            error: function (err) {
                $alert.removeClass('hidden').addClass('alert-danger').find('strong').text('Server Error! Duang~');
                setTimeout(function () {
                    $alert.addClass('hidden').removeClass('alert-danger');
                }, 3000);
            }
        });
        return false;
    });
    // 绑定删除操作
    $tableList.on('click', '.btn-del', function () {
        if (confirm('确定要删除？')) {
            (function (_this) {
                $.ajax({
                    url: '/notice/delNotice',
                    type: 'delete',
                    data: {id: _this.closest('tr').find('td:first').data('id')},
                    success: function (data) {
                        var cls = data.status ? 'alert-success' : 'alert-danger';
                        $alert.removeClass('hidden').addClass(cls).find('strong').text(data.data);
                        setTimeout(function () {
                            $alert.addClass('hidden').removeClass(cls);
                            appendListData(1);
                        }, 1000);
                    },
                    error: function (err) {
                        $alert.removeClass('hidden').addClass('alert-danger').find('strong').text('Server Error! Duang~');
                        setTimeout(function () {
                            $alert.addClass('hidden').removeClass('alert-danger');
                        }, 3000);
                    }
                });
            }($(this)));
        }
    });
    // 追加列表数据
    function appendListData(page, size) {
        page = page || 1;
        size = size || 10;
        $.ajax({
            url: '/notice/getNotice' + '?page=' + page + '&size=' + size,
            success: function(data) {
                $tableList.find('tbody').html(mustache.render(tmpList, data));
            }
        });
    }
    // 上传图片按钮
    var uploader = new WebUploader.Uploader({
        swf: '../flash/Uploader.swf',
        dnd: true, // 支持拖拽
        disableGlobalDnd: false, // 是否禁用整个页面的图片被拖拽
        paste: true, // 支持截屏导入
        pick: {
            id: '.btn-uploader', // 对象
            innerHTML: '上传图片',
            multiple: true // 支持多个文件上传
        },
        accept: [
            '只支持png, jpg, gif三种格式！', // 描述
            'png,jpg,gif', // 文件后缀名
            'image/png,image/jpeg,image/git' // 文件类型
        ],
        compress: { // 图片压缩配置
            width: 800,
            height: 800,
            quality: 80,
            allowMagnify: false,
            preserveHeaders: true, // 保留头部meta信息
            noCompressIfLarger: true, // 压缩文件比原来的大，则使用原来图片
            compressSize: 0 // 如果图片小于0字节，则不压缩
        },
        prepareNextFile: true, // 允许下个文件上传准备
        chunked: true, // 分片大文件
        threads: 4, // 上传最大进程数
        auto: true, // 有文件自动上传
        duplicate: true, // 去重
        fileNumLimit: 4, // 只允许上传4张
        server: '/notice/upload'
    });
    // 图片上传成功
    uploader.on('uploadFinished', function () {
        location.reload();
    });
    // 查看内容
    $tableList.on('click', '.btn-look', function () {
        var $this = $(this),
            $tr = $this.closest('tr');
        $dialogLook.find('h3').text($tr.find('td:eq(1)').text());
        $dialogLook.find('.content').html($this.data('content'));
        $dialogLook.find('.timer').html($tr.find('td:eq(-3)').text() + '<br>' + $tr.find('td:eq(-2)').text());
        // 将id传给上传文件
        uploader.option('formData', {
            _id: $tr.find('td:first').data('id')
        });
        // 将图片渲染
        var img = $tr.find('td:eq(2)').children();
        if (img.length) {
            var lis = '', imgs = '';
            img.each(function (index, item) {
                lis += '<li data-target="#carousel-box" data-slide-to="' + index + '"></li>',
                imgs += '<div class="item"><img src="' + $(item).attr('src') + '"></div>';
            });
            $dialogLook.find('.carousel-indicators').html(lis).find('li:first').addClass('active');
            $dialogLook.find('.carousel-inner').html(imgs).find('.item:first').addClass('active');;
            $dialogLook.find('.carousel').carousel().removeClass('hidden');
        } else {
            $dialogLook.find('.carousel').addClass('hidden');
        }
    });
});
