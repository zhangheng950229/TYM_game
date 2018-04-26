
/**
 * [localConfig description]
 * 本地资源配置
 */
var localConfig = {};

/**
 * [initGameConfig description]
 * @param  {[type]} cfg 即mainfest.json解释出来的userConfig
 * @return {[type]}     没有返回值
 */
function initGameConfig( cfg ) {
	// 需要加载的资源
	var resKeyArr = ['startBg', 'startTitle', 'startBtn', 'gameBg', 'introduction', 'juese', 'clouds01', 'clouds02'];

	window.res_config = {
		"groups":[{
			"keys": resKeyArr.join(','),
			"name": "preload"
		}],
		"resources": []
	};
	var resName, obj, i;
	for( i=0; i<resKeyArr.length; i++ ) {
		resName = resKeyArr[i];
		obj = {
			"name": resName,
			"type": "image",
			"url": userConfig[resName].value
		};
		window.res_config.resources.push( obj );
	}
}


/**
 * [pxRatio description]
 * 游戏尺寸缩放倍率
 * @type {Number}
 */
var pxRatio = 1;
// 舞台宽高
var gameStage = {
	width: 640,
	height: 1008
};
