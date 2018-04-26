
/*
	包依赖：
	npm install -g fis-parser-less
	npm install -g fis-parser-coffee-script
	npm install -g fis3-deploy-filter

	测试开发：
	fis3 release
	正式发布：(会压缩js、css)
	fis3 release prod
 */

/*
//npm install -g fis3-postpackager-loader
fis.match('::packager', {
	spriter: fis.plugin('csssprites'),
	postpackager: fis.plugin('loader', {
		allInOne: true
	})
});
*/

/**
 * 设定JS打包顺序，数值小的合并在前面
 */
var jsPackArr = [
	// 基础代码
	'js/require.js',
	// loading
	'js/game-loading.js',
	// 依赖库or框架
	'js/zepto.min.js',
	'js/jquery.min.js',
	// 配置&sdk
	'js/sdk_j2ime.js',
	'js/config.js',
	// 资源加载器
	'js/loader.js',
	'js/ImageLoader.js',
	// 游戏引擎
	'js/egret_require.js',
	'js/egret_loader.js',
	'js/createjs.js',
	// 游戏主逻辑 part1
	'js/orientationchange.js',
	'js/BasePage.js',
	'js/page.js',
	'js/other.js',
	// 游戏主逻辑 part2
	'js/logic.js',
	'js/game-logic.js',
	'js/game-min.js',
	'js/game.js',
	'js/main.js'
];
/**
 * 设定CSS打包顺序，数值小的合并在前面
 */
var cssPackArr = [
	'css/normalize.css',
	'css/basic.css',
	'css/base.css',
	'css/main.css',
	'css/game.min.css',
	'css/game-min.css',
	'css/game.css'
];

// fis3 release productName
var productName = 'prod';
var filePath = {
	coffee: 'js/*.coffee',
	less: 'css/*.less',
	js: 'js/*.{js,coffee}',
	css: 'css/*.{css,less}'
};

// 忽略的文件
fis.set('project.ignore', ['node_modules/**', 'output/**', '*.js', '**/**.sh', '**/**.bat', '**/**.bak', '**/**.exe', '**/**.md']);

fis.match('*', {
	useHash: false,
	// 发布时过滤一些没用的文件，如css、js、dist目录以及assets下的目录
	deploy: [
		fis.plugin('filter', {
			//include: [],
			exclude: ['js/**', 'css/**', 'dist/**', 'assets/*/**']
		}),
		fis.plugin('local-deliver', {})
	]
});

var build = {
	js: function(){
		// 预编译
		fis.match(filePath.coffee, {
			parser: fis.plugin('coffee-script'),
			rExt: '.js'
		});
		// 统一打包JS
		fis.match(filePath.js, {
			packTo: 'game.js'
		});
		// 正式发布
		fis.media(productName)
			.match(filePath.js, {
				optimizer: fis.plugin('uglify-js')
			});
	},
	css: function(){
		// 预编译
		fis.match(filePath.less, {
			parser: fis.plugin('less'),
			rExt: '.css'
		});
		// 统一打包CSS
		fis.match(filePath.css, {
			useSprite: false,
			packTo: 'game.css'
		});
		// 正式发布
		fis.media(productName)
			.match(filePath.css, {
				optimizer: fis.plugin('clean-css')
			});
	},
	// 设定打包顺序
	packOrder: function( packArr ){
		if( !packArr || !Array.isArray(packArr) ) {
			return false;
		}
		for( var i=0; i<packArr.length; i++ ) {
			var fileStr, fileOrder;
			if( typeof packArr[i] === 'object' ) {
				fileStr = packArr[i].file;
				fileOrder = packArr[i].order;
			}
			else {
				fileStr = packArr[i];
				fileOrder = i;
			}
			fis.match(fileStr, {
				packOrder: fileOrder
			});
		}
		return true
	}
};

build.js();
build.css();
build.packOrder( jsPackArr );
build.packOrder( cssPackArr );

