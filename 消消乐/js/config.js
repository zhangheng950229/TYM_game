
/**
 * 游戏方格大小控制
 * 需要配合修改 mainfest.json
 */
window.gridWidth = 76;
window.gridPadding = 6;
window.itemWidth = 64;


/**
 * [localConfig description]
 * 本地资源配置
 */
//var localConfig = {};

/**
 * [initGameConfig description]
 * @param  {[type]} cfg 即mainfest.json解释出来的userConfig
 * @return {[type]}     没有返回值
 */
var res_config = {
	"groups": [],
	"resources": []
};
function initGameConfig( cfg ) {
	// 需要加载的资源
	var resKeyArr = ["loading", "logo"];
	getEgretResGroup( resKeyArr, 'loading' );

	// 需要加载的资源
	resKeyArr = ["startBg", "gameBg", "startTitle", "startBtn", "scoreBg", "playBg", "progressBg"
		, "progressBar", "item0", "item1", "item2", "item3", "item4", "rulePageBg", "ruleBg", "ruleImg", "ruleSureBtn"];
	getEgretResGroup( resKeyArr, 'preload' );
}

function getEgretResGroup( resKeyArr, groupName ) {
	window.res_config.groups.push({
		"keys": resKeyArr.join(','),
		"name": groupName
	});

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
