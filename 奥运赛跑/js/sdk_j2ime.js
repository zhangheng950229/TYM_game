
/**
 * 初始化平台统计数据
 */
var tymGameStartHandler, tymGameOverHandler, tymGameData = {};
tymGameData = (function(){
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
		console.log('游戏结束');
		console.log('开始时间==>' + _data.startGameTime);
		console.log('结束时间==>' + _data.overGameTime);
		console.log('游戏得分==>' + _data.gameScore);
		console.log('点击次数==>' + _data.tapScreenCount);
        var form = {"开始时间":  _data.startGameTime, "结束时间" : _data.overGameTime,"游戏得分":_data.gameScore,"点击次数": _data.tapScreenCount};
        fiboSDK.saveFormInfo(form);
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
    isPCView: (location.pathname.substring(0,3) != '/m/'),
	//isMobile: !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/),
    isAndroid: function(){
        return (this.u.indexOf('Android') > -1 || this.u.indexOf('Linux') > -1);
    }
};
var xxsParam = sys.isPCView ? '?c' : (sys.isAndroid() ? "?a" : "?i");


/*
不适用于根据宽高设定坐标的元素
标准参数格式如下：
{
	name: '元素名称',
	res: 元素引用,
	width: 宽度,
	height: 高度,
	x: x坐标,
	y: y坐标,
	//调整元素位置的函数
	autoPos: function(){
		this.x = (320 - this.res.width)/2;
		this.y = (320 - this.res.height)/2;
	}
}
 */
function setRescoure( obj ) {
	var resCfg = userConfig[obj.name];
	
	if( resCfg.size && !resCfg.size.readonly ) {
		obj.res.width = resCfg.size.width;
		obj.res.height = resCfg.size.height;
	}
	else if( obj.width!=null ) {
		obj.res.width = obj.width;
		obj.res.height = obj.height;
	}

	if( resCfg.position && !resCfg.position.readonly ) {
		//编辑器以左上角为基准点
		obj.res.anchorX = obj.res.anchorY = 0;
		obj.res.x = resCfg.position.x;
		obj.res.y = resCfg.position.y;
	}
	else if( obj.x!=null ) {
		//编辑器以左上角为基准点
		obj.res.anchorX = obj.res.anchorY = 0;
		obj.res.x = obj.x;
		obj.res.y = obj.y;
	}
	else if( obj.autoPos ) {
		//编辑器以左上角为基准点
		obj.res.anchorX = obj.res.anchorY = 0;
		obj.autoPos();
	}
}

/*
	只设置元素字体
 */
function setResFont( resKey, obj, fontSetting ) {
	var resCfg = userConfig[resKey];
	if( resCfg.font && !resCfg.font.readonly ) {
		obj.textColor = parseInt( resCfg.font.fontColor );
		obj.strokeColor = parseInt( resCfg.font.strokeColor );
		obj.stroke = parseInt( resCfg.font.stroke );
		obj.size = parseInt( resCfg.font.fontSize );
	}
	else if( fontSetting ) {
		if(fontSetting.fontColor != null)
			obj.textColor = parseInt( fontSetting.fontColor );
		if(fontSetting.strokeColor != null)
			obj.strokeColor = parseInt( fontSetting.strokeColor );
		if(fontSetting.stroke != null)
			obj.stroke = parseInt( fontSetting.stroke );
		if(fontSetting.fontSize != null)
			obj.size = parseInt( fontSetting.fontSize );
	}
}

/*
	只设置元素大小
 */
function setResSize( resKey, obj, width, height ) {
	var resCfg = userConfig[resKey];
	if( resCfg.size && !resCfg.size.readonly ) {
		obj.width = resCfg.size.width;
		obj.height = resCfg.size.height;
	}
	else if( width!=null && height!=null ) {
		obj.width = width;
		obj.height = height;
	}
}
