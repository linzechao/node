module.exports = function (grunt) {
	'use strict';

	// 加载插件
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-autoprefixer');

	// 项目配置
	grunt.initConfig({
		// 压缩html(暂错)
		htmlmin: {
			options: {
				collapseWhitespace: true, // 删除空行
				removeComments: true, // 删除注释
				minifyCSS: true, // css也压缩
				minifyJS: true, // js也压缩
				collapseBooleanAttributes: true, // 布尔值简写
				useShortDoctype: true, // 使用html5声明文档
				removeScriptTypeAttributes: true, // 删除默认的script的类型
				removeStyleLinkTypeAttributes: true, // 默认样式
				processScripts: ['text/template'] // 模板也压缩
			},
			htmlMin: {
				files: {}
			}
		},

		// 压缩css
		cssmin: {
			options: {
				// 不简写压缩
				shorthandCompacting: false, 
				// 精确度
				roundingPrecision: -1
			},
			cssMin: {
				files: [{
					expand: true,
					cwd: 'fp/',
					src: ['**/*.css'],
					dest: 'public/',
					ext: '.css',
					extDot: 'frist'
				}]
			}
		},

		// 自动加上浏览器支持前缀
		autoprefixer: {
			'public/css/libs/common.css': 'fp/css/libs/common.css'
		},

		// 检测js语法
		jshint: {
			options: {
				eqnull: true, // 等于null
				eqeqeq: true, // 使用全等
				undef: true, // 未定义
			   	browser: true, // 运行在浏览器上，location等为全局
				globals: { // 全局对象
					$: true, // 平台模板管理的jq
					define: true, // 使用sea.js的define
					sID: true // 平台模板管理的用户ID
				}
			},
			jsTest: [
				'fp/js/**/*.js'
			]
		},

		// 压缩js
		uglify: {
			options: {
				mangle: {
					// 指定不混搅的变量名
					except: ['require', 'exports', 'module']
				},
				// 保留原始引号
				quoteStyle: 3
			},
			jsMin: {
				files: [{
					expand: true,
					cwd: 'fp/js/',
					src: ['**/*.js'],
					dest: 'public/js',
					ext: '.js',
					extDot: 'first'
				}]
			}
		},

		// 压缩图片
		imagemin: {
			options: {
				// 压缩水平
				optimizationLevel: 2
			},
			imgMin: {
				files: [{
					expand: true,
					cwd: 'fp/img/',
					src: ['**/*.{png,jpg,gif,ico}'],
					dest: 'public/img/'
				}]
			}
		},

		// 清除文件(夹)
		clean: ['public/**'],

		// 文件监听
		watch: {
			watchServer: { // 监听服务器
				options: {
					// 与connect的端口一直
					// 自带服务器
					// livereload: '<%= connect.options.livereload %>'
					// 谷歌浏览器插件
					livereload: true
				},
				files: [ // 刷新指定文件
					'views/**/*.html',
					'routes/**/*.js',
					'public/js/**/*.js',
					'public/css/**/*.css',
					'public/img/*.{png,jpg,gif,ico}'
				]
			}
		},

		// 复制文件(夹)
		copy: {
			all: {
				files: [{
					expand: true,
					cwd: 'fp/',
					src: ['**'],
					dest: 'public/'
				}]
			},
			public: {
				files: [{
					'public/js/jquery.js': 'bower_components/jquery/dist/jquery.min.js',
					'public/js/bootstrap.js': 'bower_components/bootstrap/dist/js/bootstrap.min.js',
					'public/css/bootstrap.css': 'bower_components/bootstrap/dist/css/bootstrap.min.css',
					'public/js/require.js': 'bower_components/require/index.js',
					'public/js/mustache.js': 'bower_components/mustache.js/mustache.min.js'
				}, {
					expand: true,
					cwd: 'bower_components/bootstrap/dist/fonts',
					src: ['**'],
					dest: 'public/fonts'
				}]
			}
		},

		// 文件合并
		concat: {
			options: {
				separator: ';'
			},
			merge: {
				src: 'fp/js/**/*.js',
				dest: 'public/main.js'
			}
		},

		// 连接服务器
		connect: {
			options: {
				port: 8090,
				hostname: '*', //默认
				livereload: 35729
			},
			server: {
				options: {
					open: true, // 自动打开
					base: ['views'] // 主目录
				}
			}
		},

		// 验证css语法
		csslint: {
			options: {},
			cssTest: ['public/css/**/*.css']
		}
	});

	// 使用Chrome LiveReload浏览器插件
	grunt.registerTask('live', ['copy:public', 'watch']);
};
