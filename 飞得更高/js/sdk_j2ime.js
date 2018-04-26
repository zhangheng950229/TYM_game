
/**
 * [我的SDK]
 * @author j2ime
 * @modify 2016-08-22
 */
var j2ime = {
	utils: {
		// 加载图片
		loadSingleImage: function( imgUrl, cb, caller, params ) {
			var img = new Image();
			var loaded = function(){
				img = this.onload = this.onerror = null;
				if( cb ) {
					caller ? cb.call(caller, params, img) : cb(params, img);
					cb = caller = params = null;
				}
			};
			img.onload = img.onerror = loaded;
			img.src = imgUrl;
		},
		// 获取分享参数
		getShareParams: function ( data ) {
			var str = '';
			for( var key in data ) {
				str += '&' + key + '=' + encodeURIComponent( data[key] );
			}
			str = str.substring(1);
			console.log( 'getShareParams: ' + str );
			return str;
		},
		// 获取url参数
		getUrlParams: function (){
			var urlParams = {};
			var searchArr = window.location.search.substring(1).split('&');
			var index, key, item;
			for( var i = 0; i < searchArr.length; i++ ) {
				item = searchArr[i];
				index = item.indexOf('=');
				if( index<0 ) continue;
				key = decodeURIComponent(item.substring( 0, index ));
				urlParams[key] = decodeURIComponent(item.substring(index + 1));
			}
			return urlParams;
		},
		// 设置分享参数
		setWxShare: function( setting ) {
			/*// 分享设置
			var shareSetting = {
				shareTitle: '',
				shareDesc: '',
				shareLink: ''
			};*/
			if( typeof tymsdk !== 'undefined' && tymsdk.wxShare ) {
				try {
					if( !setting || typeof setting !== 'object' ) {
						setting = {};
					}
					//不用内部设置分享图标
					//setting.shareIcon = userConfig.shareIcon.value;
					tymsdk.wxShare( setting );
				} catch(e) {
					console.log('tymsdk.wxShare: 分享设置失败');
				}
			}
		},
		// 显示、隐藏个人中心
		showUserCenter: function( isShow ){
			if( isShow === false ) {
				j2ime.GAME.start();
			}
			else {
				j2ime.GAME.over( 0 );
			}
		},
		// 显示、隐藏尾链
		showFootBanner: function( isShow ){
			if( typeof tymsdk !== 'undefined' && tymsdk.footBanner ) {
				tymsdk.footBanner.show();
			}
		},
		parseHtml: function(s){
			if( typeof s === 'string' ) {
				s = s.replace(/</g, "&lt;")
					 .replace(/>/g, "&gt;")
					 .replace(/(\n\r|\r\n|\n|\r)/g, "<br>")
					 .replace(/[\s]/g, "&nbsp;");
			}
			return s;
		}
	},

	GAME: {
		//平台统计数据
		gameData: {
			tapScreenCount: 0,
			startGameTime: 0,
			gameScore: 0,
			overGameTime: 0
		},
		start: function( callback ) {
			/**
			* 游戏开始,记录开始时间
			*/
			console.log('游戏开始');
			var _data = this.gameData;
			_data.startGameTime = new Date();
			tymsdk.gameStart(_data.startGameTime, callback);
		},
		updateRecord: function(score, tapCount) {
			/**
			* 游戏结束,但不抽奖,上传本次游戏的统计数据
			*/
			var _data = this.gameData;
			_data.overGameTime = new Date();
			_data.gameScore = Number(score);
			if( tapCount != null ) {
				_data.tapScreenCount = Number(tapCount);
			}
			console.log('游戏结束');
			//console.log('开始时间==>' + _data.startGameTime);
			//console.log('结束时间==>' + _data.overGameTime);
			console.log('游戏得分==>' + _data.gameScore);
			console.log('点击次数==>' + _data.tapScreenCount);
            var form = {"开始时间":  _data.startGameTime, "结束时间" : _data.overGameTime,"游戏得分":_data.gameScore,"点击次数": _data.tapScreenCount};
            fiboSDK.saveFormInfo(form);
			tymsdk.gamer && tymsdk.gamer.updateRecord(_data);
		},
		over: function(score, tapCount) {
			/**
			* 游戏结束,上传本次游戏的统计数据
			*/
			var _data = this.gameData;
			_data.overGameTime = new Date();
			_data.gameScore = Number(score);
			if( tapCount != null ) {
				_data.tapScreenCount = Number(tapCount);
			}
			console.log('游戏结束');
			//console.log('开始时间==>' + _data.startGameTime);
			//console.log('结束时间==>' + _data.overGameTime);
			console.log('游戏得分==>' + _data.gameScore);
			console.log('点击次数==>' + _data.tapScreenCount);
            var form = {"开始时间":  _data.startGameTime, "结束时间" : _data.overGameTime,"游戏得分":_data.gameScore,"点击次数": _data.tapScreenCount};
            fiboSDK.saveFormInfo(form);
			tymsdk.gameEnd(_data.startGameTime, _data.overGameTime, _data.gameScore, _data.tapScreenCount);
		},
		/**
		 * 设置游戏标题
		 * hack在微信等webview中无法修改document.title的情况
		 */
		setTitle: function( title ) {
			document.title = title;
			if( typeof $ !== 'undefined' ) {
				var $body = $('body');
				var $iframe = $('<iframe src="game.css"></iframe>');
				$iframe.on('load',function() {
					setTimeout(function() {
						$iframe.off('load').remove();
					}, 0);
				}).appendTo($body);
			}
			else {
				//console.log('缺少 zepto.min.js');
				var iframe = document.createElement('iframe');
				iframe.addEventListener('load', function(){
					setTimeout(function() {
						iframe.parentNode.removeChild(iframe);
					}, 20);
				});
				iframe.src = 'game.css';
				document.body.appendChild(iframe);
			}
		}
	},
	RES: {
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
		setResAll: function ( cfg ) {
			this.setResSize( cfg );
			this.setResPosition( cfg );
			this.setResFont( cfg );
			this.setResRotate( cfg );
			this.setResAdvert( cfg );
			this.setResOpacity( cfg );
		},
		// 将元素锚点 转成 元素正中间
		moveAnchorToCenter: function ( child ) {
			if( child.anchorX != null ) {
				if( child.width != null ) {
					child.x -= (child.anchorX - 0.5) * child.width;
					child.anchorX = 0.5;
				}
				if( child.height != null ) {
					child.y -= (child.anchorY - 0.5) * child.height;
					child.anchorY = 0.5;
				}
			}
			else if( child.anchorOffsetX != null ) {
				if( child.width != null ) {
					child.x -= child.anchorOffsetX - child.width/2;
					child.anchorOffsetX = child.width/2;
				}
				if( child.height != null ) {
					child.y -= child.anchorOffsetY - child.height/2;
					child.anchorOffsetY = child.height/2;
				}
			}
		},
		//设置元素大小
		setResSize: function ( cfg ) {
			var sprite = cfg.res;
			var resCfg = userConfig[cfg.name];
			
			if( resCfg.size && !resCfg.size.readonly ) {
				sprite.width = resCfg.size.width;
				sprite.height = resCfg.size.height;
			}
			else if( cfg.width!=null ) {
				sprite.width = cfg.width;
				sprite.height = cfg.height;
			}
			else if( resCfg.size ) {
				sprite.width = resCfg.size.width;
				sprite.height = resCfg.size.height;
			}
		},
		//设置元素位置
		setResPosition: function ( cfg ) {
			var sprite = cfg.res;
			var resCfg = userConfig[cfg.name];
			//编辑器以左上角为基准点
			//sprite.anchorX = sprite.anchorY = 0;
			
			if( resCfg.position && !resCfg.position.readonly ) {
				sprite.x = resCfg.position.x;
				sprite.y = resCfg.position.y;
			}
			else if( cfg.x!=null ) {
				sprite.x = cfg.x;
				sprite.y = cfg.y;
			}
			else if( cfg.autoPos ) {
				cfg.autoPos();
			}
			else if( resCfg.position ) {
				sprite.x = resCfg.position.x;
				sprite.y = resCfg.position.y;
			}

			this.moveAnchorToCenter( sprite );
		},
		//设置元素字体 #只支持白鹭引擎
		setResFont: function ( cfg ) {
			var sprite = cfg.res;
			var resCfg = userConfig[cfg.name];
			font = resCfg.font
			if( font && !font.readonly ) {
				this._setFont( sprite, font );
			}
			else if( cfg.font ) {
				this._setFont( sprite, cfg.font );
			}
			else if( font ) {
				this._setFont( sprite, font );
			}
		},
		_setFont: function( sprite, font ){
			//console.log(font);
			if( font.fontColor != null ){
				sprite.textColor = this.colorHex2Number( font.fontColor );
			}
			if(font.strokeColor != null) {
				sprite.strokeColor = this.colorHex2Number( font.strokeColor );
			}
			if(font.stroke != null && font.stroke != '0'){
				sprite.stroke = parseInt( font.stroke );
			}
			if(font.fontSize != null){
				sprite.size = parseInt( font.fontSize );
			}
			if(font.bold != null){
				sprite.bold = font.bold;
			}
			if(font.italic != null){
				sprite.italic = font.italic;
			}
			if(font.textAlign != null){
				sprite.textAlign = egret.HorizontalAlign[ font.textAlign.toUpperCase() ];
			}
		},
		getResFontStyle: function( resName ){
			//console.log(resName);
			var resCfg = userConfig[resName];
			var styleObj = {};
			this._setFont( styleObj, resCfg.font );
			return styleObj;
		},
		// 将十六进制的#ffffff颜色转换成十进制数字
		colorHex2Number: function(hexColor){
			if( hexColor.charAt(0) === '#' ) {
				return parseInt( '0x'+hexColor.substring(1) );
			}
			else {
				return parseInt( hexColor );
			}
		},
		// 设置透明度
		setResOpacity: function ( cfg ) {
			var resCfg = userConfig[cfg.name].other
			if( !resCfg || resCfg.opacity == null ) {
				return;
			}
			cfg.res.alpha = Number(resCfg.opacity);
		},
		// 设置元素旋转
		setResRotate: function ( cfg ) {
			var sprite = cfg.res;
			var resCfg = userConfig[cfg.name].other
			if( !resCfg || !resCfg.rotate ) {
				return;
			}
			resCfg = resCfg.rotate;
			
			if( resCfg.deg!=null && !resCfg.readonly ) {
				sprite.rotation = Number(resCfg.deg);
			}
			else if( cfg.deg!=null ) {
				sprite.rotation = cfg.deg;
			}
			else if( resCfg.deg!=null ) {
				sprite.rotation = Number(resCfg.deg);
			}

			this.moveAnchorToCenter( sprite );
		},
		//设置广告元素
		setResAdvert: function ( cfg ) {
			var resCfg = userConfig[cfg.name];
			if( resCfg.other && resCfg.other.advert && resCfg.other.advert.display==='none' ) {
				var sprite = cfg.res;
				sprite.touchEnabled = false;
				sprite.visible = false;
			}
		},
		clickAdvert: function( resName ) {
			var adv = userConfig[resName].other;
			if( !adv || !adv.advert ) {
				return;
			}
			adv = adv.advert;

			if( adv.link ) {
				window.location.href = adv.link;
			}
			else if( adv.qrcode ) {
				var qrMask = document.querySelector('.qrMask');
				if( !qrMask ) {
					var qrcodeImg = document.createElement('img');
					qrcodeImg.className = 'qrcodeImg';
					qrcodeImg.src = adv.qrcode;
					qrcodeImg.addEventListener('click', function(e){
						e.stopPropagation();
					});

					qrMask = document.createElement('div');
					qrMask.className = 'qrMask';
					qrMask.appendChild( qrcodeImg );
					qrMask.addEventListener('click', function(e){
						var target = e.currentTarget;
						target.style.display = 'none';
					});
					document.body.appendChild( qrMask );
				}
				qrMask.style.display = 'block';
			}
			else if( adv.display ) {
			}
			else {
				console.log('广告元素设置有误！');
			}
		}
	}
};

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

/**
 * Promise实现
 */
var Promise = (function(){
	function f() {
		this._status = "pending", this._resolves = [], this._rejects = [], this._index = -1;
	};
	var p = f.prototype;
	p.isFunction = function(t) {
		return t && "function" === typeof t;
	};
	p.resolve = function(t) {
		this._index++;
		var fn = this._resolves[this._index];
		fn && setTimeout(function(){
			fn(t);
		});
		this._resolves.length <= this._index && (this._resolves = [], this._index = 0);
	};
	p.reject = function(t) {
		this._rejects[this._index++](t);
	};
	p.then = function(t, e) {
		this.isFunction(t) && this._resolves.push(t);
		this.isFunction(e) && this._rejects.push(e);
		return this;
	};
	return f;
})();


/**
 * UI动效
 */
var Effects = {
	moveLeftIn: function(t, cb, owner){
		t.x = gameStage.width;
		t = egret.Tween.get(t).to({
			x: 0
		}, 500, egret.Ease.cubicOut);
		
		if( cb ) {
			t.call(cb, owner || this);
		}
	},
	moveLeftOut: function(t, cb, owner){
		t = egret.Tween.get(t).to({
			x: -gameStage.width
		}, 500, egret.Ease.cubicOut);

		if( cb ) {
			t.call(cb, owner || this);
		}
	},
	dropEffect: function(t, cb, owner) {
		if( !t ) return;
		var tmpRotation = t.rotation;
		var y = t.y;
		t.y = -t.height;
		t.rotation = tmpRotation -10;
		t = egret.Tween.get(t);
		t.to({
			y: y - 10
		}, 333, egret.Ease.circIn).to({
			rotation: tmpRotation
		}, 133, egret.Ease.backInOut).to({
			y: y
		}, 33, egret.Ease.circIn);

		if( cb ) {
			t.call(cb, owner || this);
		}
	},
	scaleFadeIn: function(t, cb, owner) {
		if( !t ) return;
		t.scaleX = t.scaleY = 3;
		t.alpha = 0;
		t = egret.Tween.get(t);
		//t.to({ scaleX: 3, scaleY: 3, alpha:0 }, 0);
		t.to({ scaleX: 0.8, scaleY: 0.8, alpha:1 }, 250)
		 .to({ scaleX: 1.5, scaleY: 1.5 }, 120)
		 .to({ scaleX: 1, scaleY: 1 }, 100);

		if( cb ) {
			t.call(cb, owner || this);
		}
	},
	buttonScale: function(t, cb, owner) {
		if( !t ) return;
		t = egret.Tween.get(t);
		t.to({ scaleX: 0.8, scaleY: 0.8 }, 150)
		 .to({ scaleX: 1, scaleY: 1 }, 150);

		if( cb ) {
			t.call(cb, owner || this);
		}
	},
	buttonScaleLoop: function(t) {
		t = egret.Tween.get(t, {loop:true});
		t.to({ scaleX: 0.8, scaleY: 0.8 }, 750)
		.to({ scaleX: 1, scaleY: 1 }, 600);
	}
};
