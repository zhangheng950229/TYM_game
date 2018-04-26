
/**
 * 	@author j2ime
 *	@description 以下是自定义设置
 */

var utils;
! function(t) {
	t.createBitmapByName = function(t) {
		var e = new egret.Bitmap;
		return t = RES.getRes(t), e.texture = t, e
	}, t.createSpriteByName = function(t) {
		var e = new egret.Bitmap;
		t = RES.getRes(t);
		e.texture = t;
		t = new egret.Sprite;
		t.addChild(e);
		return t;
	}, t.createSpriteSheet = function(t) {
		return RES.getRes(t);
	}, t.createSoundByName = function(t) {
		return RES.getRes(t);
	}, t.createRectangular = function(t, e, i, r, o, n) {
		void 0 === t && (t = 0);
		void 0 === e && (e = 0);
		void 0 === i && (i = gameStage.width);
		void 0 === r && (r = gameStage.height);
		void 0 === o && (o = 1);
		void 0 === n && (n = 0);
		var s = new egret.Sprite;
		s.graphics.beginFill(n, o);
		s.graphics.drawRect(t, e, i, r);
		s.graphics.endFill();
		s.width = i;
		s.height = r;
		return s;
	}, t.createCircle = function(t, e, i, r, o) {
		void 0 === t && (t = 0);
		void 0 === e && (e = 0);
		void 0 === i && (i = 10);
		void 0 === r && (r = 1);
		void 0 === o && (o = 16777215);
		var n = new egret.Sprite;
		n.graphics.beginFill(o, r);
		n.graphics.drawCircle(t, e, i);
		n.graphics.endFill();
		return n;
	}, t.createTextLabel = function(t, e, i, r, o, n, s, a, h, l, p, c) {
		void 0 === e && (e = 0);
		void 0 === i && (i = "left");
		void 0 === r && (r = "none");
		void 0 === o && (o = 14);
		void 0 === n && (n = 0);
		void 0 === s && (s = 0);
		void 0 === a && (a = 0);
		void 0 === h && (h = 0);
		void 0 === l && (l = 0);
		void 0 === p && (p = 0);
		void 0 === c && (c = 0);
		t = new egret.TextField;
		t.textColor = e;
		t.textAlign = i;
		t.text = r;
		t.size = o;
		0 != n && (t.width = n);
		0 != s && 0 != a && (t.strokeColor = s, t.stroke = a);
		t.rotation = p;
		0 != c && (t.skewX = c);
		t.x = h;
		t.y = l;
		return t;
	}, t.randomInt = function(t, e) {
		if (0 >= e - t) return 0;
		var i = e - t;
		return Math.floor(Math.random() * i) + t
	}, t.createBitmap = function(t, e, i, r) {
		void 0 === i && (i = 0);
		void 0 === r && (r = 0);
		var o = new egret.Bitmap;
		o.texture = t.getTexture(e);
		o.x = i;
		o.y = r;
		return o;
	}, t.isWeiXin = function() {
		return "MicroMessenger" == navigator.userAgent.toString().match(/MicroMessenger/i) ? !0 : !1
	}, t.IsPC = function() {
		for (var t = navigator.userAgent.toString(), e = "Android;iPhone;SymbianOS;Windows Phone;iPad;iPod".split(";"), i = !0, r = 0; r < e.length; r++)
			if (0 < t.indexOf(e[r])) {
				i = !1;
				break
			}
		return i
	}, t.FPS_show = function() {
		egret.Profiler.getInstance().run()
	}
}(utils || (utils = {}));

var layout;
! function(t) {
	t.percent_Y = function(t) {
		return t / Settings.DesginHeight * Settings.StageHeight
	}, t.percent_X = function(t) {
		return t / Settings.DesginWidth * Settings.StageWidth
	}, t.middle_X = function(t) {
		return (Settings.StageWidth - t.width * t.scaleX) / 2
	}, t.middle_Y = function(t) {
		return (Settings.StageHeight - t.height * t.scaleY) / 2
	}, t.left = function(t) {
		return Settings.StageWidth - t.width * t.scaleX
	}, t.bottom = function(t) {
		return Settings.StageHeight - t.height * t.scaleY
	}, t.Scale = function() {
		var t = 0,
			t = Settings.StageHeight / Settings.DesginHeight;
		return 1 >= t ? t : 1
	}, t.setScale = function(e, i, r) {
		void 0 === i && (i = t.Scale()), void 0 === r && (r = t.Scale()), e.scaleX = i, e.scaleY = r
	}
}(layout || (layout = {}));

/**
 * 游戏设置
 */
var Settings = function() {
	function t() {}
	t.ShareUrl = function(t) {
		return t ? this.url : window.location.href.toString()
	};
	t.StageWidth = gameStage.width;
	t.StageHeight = gameStage.height;
	t.DesginWidth = gameStage.width;
	t.DesginHeight = gameStage.height;
	t.frameTime = 30;
	t.score = 0;
	t.isRotation = !1;
	t.isMobile = !utils.IsPC();
	t.ShareImageUrl = "";
	t.url = "";
	t.bestScore = 0;
	t.isMuisc = !0;
	return t;
}();
Settings.prototype.__class__ = "Settings";


var SpriteControl = function() {
	function t() {};
	t.getBitMap = function( keyName ) {
		if( !this[keyName] ) {
			this[keyName] = this.getNewBitMap( keyName );
		}
		return this[keyName];
	};
	t.getNewBitMap = function( keyName ) {
		var tmpBitMap = utils.createBitmapByName( keyName );
		tmpBitMap.name = keyName;
		j2ime.RES.setResAll({
			name: keyName,
			res: tmpBitMap
		});
		return tmpBitMap;
	};
	t.initSprite = function( resKeyArr ) {
		for( var i=0; i<resKeyArr.length; i++ ) {
			this[resKeyArr[i]] = this.getNewBitMap( resKeyArr[i] );
		}
	};
	t.initButtons = function( resKeyArr ) {
		var child, resName;
		for( var i=0; i<resKeyArr.length; i++ ) {
			resName = resKeyArr[i];
			child = this[resName] = this.getNewBitMap( resName );
			child.touchEnabled = true;
			child.isButton = true;
		}
	};
	t.setTextStyleByName = function( resName ) {
		this.setTextStyle({
			res: this[resName],
			name: resName
		});
	};
	t.setTextStyle = function( config ) {
		config.res.name = config.name;
		j2ime.RES.setResSize( config );
		j2ime.RES.setResPosition( config );
		j2ime.RES.setResFont( config );
	};
	t.SpriteGameInit = function() {
		// 图片
		var resKeyArr = ['startBg', 'startTitle', 'gameBg', 'introduction', 'juese', 'clouds01', 'clouds02'];
		this.initSprite( resKeyArr );

		// 按钮
		var resKeyArr = ['startBtn'];
		this.initButtons( resKeyArr );

		this.TextLabelInit();
	};
	t.TextLabelInit = function() {
		var w = gameStage.width, resCfg;
		// “得分”
		resCfg = userConfig.scoreText;
		this.scoreText = utils.createTextLabel(this.scoreText, 0xffffff, "center", resCfg.value, 60, w);
		this.setTextStyleByName('scoreText');
		/*
		this.scoreText = new ScoreSixMc;
		this.scoreText.space = 25;
		this.setTextStyleByName('scoreText');
		*/
	};
	return t;
}();
SpriteControl.prototype.__class__ = "SpriteControl";
