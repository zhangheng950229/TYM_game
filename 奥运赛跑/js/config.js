
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
	window.res_config = {
		"groups": [],
		"resources": []
	};

	// 需要加载的资源
	var resKeyArr = ["za_1"];
	getEgretResGroup( resKeyArr, 'loading' );
	// 需要加载的资源
	var resKeyArr = ["za_0", "Map", "car_1", "car_1_b", "car_2", "car_2_b", "playBtn", "top_bar", "startBg", "gameTitle"];
	getEgretResGroup( resKeyArr, 'runNeed' );
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
