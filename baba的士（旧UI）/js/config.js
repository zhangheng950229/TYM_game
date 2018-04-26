
/**
 * 初始化平台统计数据
 */
var tymGameStartHandler, tymGameOverHandler, tymGamePostData;
(function(){
	var _data = {
		tapScreenCount: 0,
		startGameTime: 0,
		gameScore: 0,
		overGameTime: 0
	};

	tymGameStartHandler = function () {
		/**
		* 游戏开始,记录开始时间
		*/
		console.log('游戏开始');
		_data.startGameTime = new Date();
		tymsdk.gameStart(_data.startGameTime);
	}
	tymGameOverHandler = function (score) {
		/**
		* 游戏结束,上传本次游戏的统计数据
		*/
		_data.overGameTime = new Date();
		_data.gameScore = Number(score);
		//tymsdk.gameEnd(_data.startGameTime, _data.overGameTime, _data.gameScore, _data.tapScreenCount);
		console.log('游戏结束');
		console.log('开始时间==>' + _data.startGameTime);
		console.log('结束时间==>' + _data.overGameTime);
		console.log('游戏得分==>' + _data.gameScore);
		console.log('点击次数==>' + _data.tapScreenCount);
        var form = {"开始时间":  _data.startGameTime, "结束时间" : _data.overGameTime,"游戏得分":_data.gameScore,"点击次数": _data.tapScreenCount};
        fiboSDK.saveFormInfo(form);

	}
	tymGamePostData = function () {
		tymsdk.gameEnd(_data.startGameTime, _data.overGameTime, _data.gameScore, _data.tapScreenCount);
	}

	return _data;
})();


/**
 * 判断手机系统类型
 */
var sys = {
	u: navigator.userAgent,
	app: navigator.appVersion,
	isMobile: !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/),
	isAndroid: function(){
		return this.u.indexOf('Android') > -1 || this.u.indexOf('Linux') > -1;
	}
};
var xxsParam = sys.isMobile ? '?c' : (sys.isAndroid() ? "?a" : "?i");

/**
 * [localConfig description]
 * 本地资源配置
 */
var localConfig = {
	bgMusic: 'assets/temp.mp3' + xxsParam,
	waiting: 'assets/waiting.png' + xxsParam,
	gun: 'assets/gun.png' + xxsParam
};

/**
 * [initGameConfig description]
 * @param  {[type]} cfg 即mainfest.json解释出来的userConfig
 * @return {[type]}     没有返回值
 */
function initGameConfig( cfg ) {

/**
 * 游戏资源配置
 */
window.res_config = {
	"resources":
		[
				{
			"name":"waiting",
			"type":"image",
			"url": cdnRoot + localConfig.waiting
		},
				{
			"name":"gun",
			"type":"image",
			"url": cdnRoot + localConfig.gun
		},
				{
			"name":"sound",
			"type":"sound",
			"url": cdnRoot + localConfig.bgMusic
		},
		
				{
			"name":"gameBg",
			"type":"image",
			"url": window.userConfig.gameBg.value
		},
				{
			"name":"gameStartBg",
			"type":"image",
			"url": window.userConfig.gameStartBg.value
		},
				{
			"name":"startButton",
			"type":"image",
			"url": window.userConfig.startButton.value
		},
				{
			"name":"titleImg",
			"type":"image",
			"url": window.userConfig.titleImg.value
		},
				{
			"name":"block1",
			"type":"image",
			"url": window.userConfig.block1.value
		},
				{
			"name":"block2",
			"type":"image",
			"url": window.userConfig.block2.value
		},
				{
			"name":"block3",
			"type":"image",
			"url": window.userConfig.block3.value
		},
				{
			"name":"role_stand",
			"type":"image",
			"url": window.userConfig.role_stand.value
		}
	],
	"groups": [{
			"name":"preload",
			"keys":"gameStartBg,titleImg,gameBg,startButton,block1,block2,block3,role_stand,gun,waiting"
		},
		{
			"name":"soundload",
			"keys":"sound"
		}
	]
};


window.template_config = {
	"templateId":20151012,
	"texturepacker":[],
	"templateCategory": {},
	"templateVars":{
		"gameRule":{
			"type":"STRING",
			"desc":"游戏说明文字",
			"value": window.userConfig.gameRule.value,
			"name":"gameRule"
		},
		"gameScroeTitle":{
			"type":"STRING",
			"desc":"分数描述",
			"value":"已成功到达",
			"name":"gameScroeTitle"
		},
		"gameScroeTitle2":{
			"type":"STRING",
			"desc":"单位",
			"value":"个",
			"name":"gameScroeTitle2"
		}
	},
	"share":{
		"setting":{
			"title": window.userConfig.game_name.value,
			"bgAudio":"true",
			"switch":"false"
		}
	}
}

}

