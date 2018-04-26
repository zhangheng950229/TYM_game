function init() {
    fiboSDK.init({
        pfid: 'be_6eM2baqqd',
        appid: 'uuid2415449266535'});
	showWelcomeLayer(), body = document.getElementById("gameBody") || document.body, body.style.height = window.innerHeight + "px", transform = "undefined" != typeof body.style.webkitTransform ? "webkitTransform" : "undefined" != typeof body.style.msTransform ? "msTransform" : "transform", transitionDuration = transform.replace(/ransform/g, "ransitionDuration"), GameTimeLayer = document.getElementById("GameTimeLayer"), GameLayer.push(document.getElementById("GameLayer1")), GameLayer[0].children = GameLayer[0].querySelectorAll("div"), GameLayer.push(document.getElementById("GameLayer2")), GameLayer[1].children = GameLayer[1].querySelectorAll("div"), GameLayerBG = document.getElementById("GameLayerBG"), supportsTouch && null === GameLayerBG.ontouchstart ? GameLayerBG.ontouchstart = gameTapEvent : GameLayerBG.onmousedown = gameTapEvent, gameInit(), window.addEventListener("resize", refreshSize, !1), $("#game-logo").css({
		height: "20em",
		width: "80%",
		margin: "25px auto",
		backgroundImage: "url(" + window.userConfig.game_logo + ")",
		backgroundSize: "100% 100%"
	}), $("#ready-btn").css({
		backgroundImage: "url(" + window.userConfig.btn + ")",
		backgroundSize: "100% 100%"
	});
	var t = function(t) {
		t.preventDefault(), t.stopPropagation(), target = t.target, $(target).addClass("bounceBtn"), setTimeout(function() {
			closeWelcomeLayer(), startGameTime = new Date, window.tymsdk.gameStart(startGameTime), $(target).removeClass("bounceBtn"), $("#rule").css({
				display: "block"
			})
		}, 400)
	};
	$("#ready-btn")[0].onmousedown = t, $("#ready-btn")[0].ontouchstart = t, $("#GameTimeLayer").css({
		backgroundImage: "url(" + window.userConfig.timer + ")",
		backgroundSize: "100% 100%"
	}), $("body").css({
		backgroundImage: "url(" + window.userConfig.game_bg + ")",
		backgroundSize: "100% 100%"
	}), $("#rule").css({
		backgroundImage: "url(" + window.userConfig.mask_gameBg + ")"
	}), $("#rule_bg").css({
		backgroundImage: "url(" + window.userConfig.rule_bg + ")"
	}), $("#rule_content").css({
		backgroundImage: "url(" + window.userConfig.rule_content + ")"
	}), $("#rule_btn").css({
		backgroundImage: "url(" + window.userConfig.rule_btn + ")"
	});
	var e = function(t) {
		target = t.target, "rule_btn" == target.id && $(target).addClass("bounceBtn"), setTimeout(function() {
			$(target).removeClass("bounceBtn"), $("#rule").css({
				display: "none"
			})
		}, 400)
	};
	$("#rule")[0].onmousedown = e, $("#rule")[0].ontouchstart = e, document.querySelector("#welcome").addEventListener("touchmove", function(t) {
		t.preventDefault(), t.stopPropagation()
	}, !1), document.querySelector("#rule").addEventListener("touchmove", function(t) {
		t.preventDefault(), t.stopPropagation()
	}, !1), document.querySelector("#GameLayerBG").addEventListener("touchmove", function(t) {
		t.preventDefault(), t.stopPropagation()
	}, !1)
}

function refreshSize() {
	clearTimeout(refreshSizeTime), refreshSizeTime = setTimeout(_refreshSize, 200)
}

function _refreshSize() {
	countBlockSize();
	for (var t = 0; t < GameLayer.length; t++)
		for (var e = GameLayer[t], n = 0; n < e.children.length; n++) {
			var i = e.children[n],
				r = i.style;
			r.left = n % 4 * blockSize + "px", r.bottom = Math.floor(n / 4) * blockSize + "px", r.width = blockSize + "px", r.height = blockSize + "px"
		}
	var s, a;
	GameLayer[0].y > GameLayer[1].y ? (s = GameLayer[0], a = GameLayer[1]) : (s = GameLayer[1], a = GameLayer[0]);
	var o = _gameBBListIndex % 10 * blockSize;
	s.y = o, s.style[transform] = "translate3D(0," + s.y + "px,0)", a.y = -blockSize * Math.floor(s.children.length / 4) + o, a.style[transform] = "translate3D(0," + a.y + "px,0)"
}

function countBlockSize() {
	blockSize = body.offsetWidth / 4, body.style.height = window.innerHeight + "px", count = parseInt(window.innerHeight / blockSize), GameLayerBG.style.height = blockSize * count + "px", touchArea[0] = window.innerHeight - 0 * blockSize, touchArea[1] = window.innerHeight - 3 * blockSize, $("#GameTimeLayer").css({
		height: 1.2 * blockSize + "px"
	})
}

function gameInit() {
	var t, e = window.userConfig,
		n = (cookie("bast-score"), getElementsByClassName("block")),
		i = getElementsByClassName("bl");
	for (t = n.length; t--;) n[t].style.borderTopColor = e.line_color;
	for (t = i.length; t--;) i[t].style.borderLeftColor = e.line_color;
	setTimeout(function() {
		htmlLoading.end(!0), gameRestart()
	}, 1e3)
}

function gameRestart() {
	_gameBBList = [], _gameBBListIndex = 0, _gameScore = 0, _gameOver = !1, _gameStart = !1, _gameTimeNum = game_time, GameTimeLayer.innerHTML = creatTimeText(_gameTimeNum), countBlockSize(), refreshGameLayer(GameLayer[0]), refreshGameLayer(GameLayer[1], 1)
}

function gameStart() {
	_gameStart = !0, _gameTime = setInterval(gameTime, 10)
}

function gameOver() {
	var t = new Date;
	console.log(startGameTime), window.tymsdk.gameEnd(startGameTime, t, _gameScore, _gameScore), _gameOver = !0, clearInterval(_gameTime), GameLayerBG.className = "";
	var e = cookie("bast-score");
	(!e || _gameScore > e) && (e = _gameScore, cookie("bast-score", e, 100)), window.userConfig.tTitle = "我吃掉了" + _gameScore + "个小苹果，不服来挑战！！！"
    var form = {"开始时间":  startGameTime,"游戏得分":_gameScore};
    fiboSDK.saveFormInfo(form);
}

function gameTime() {
	_gameTimeNum--, 0 >= _gameTimeNum ? (GameTimeLayer.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时间到！", gameOver(), GameLayerBG.className += " flash") : GameTimeLayer.innerHTML = creatTimeText(_gameTimeNum)
}

function creatTimeText(t) {
	var e = (1e5 + t + "").substr(-4, 4);
	return e = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + e.substr(0, 2) + "'" + e.substr(2) + "''"
}

function refreshGameLayer(t, e, n) {
	for (var i = Math.floor(1e3 * Math.random()) % 4 + (e ? 0 : 4), r = 0; r < t.children.length; r++) {
		var s = t.children[r],
			a = s.style;
		a.left = r % 4 * blockSize + "px", a.bottom = Math.floor(r / 4) * blockSize + "px", a.width = blockSize + "px", a.height = blockSize + "px", s.className = s.className.replace(_clearttClsReg, ""), s.style.backgroundImage = "url(" + window.userConfig.border + ")", s.style.backgroundPosition = "center", i == r ? (_gameBBList.push({
			cell: i % 4,
			id: s.id
		}), s.className += " t" + (Math.floor(1e3 * Math.random()) % 5 + 1), s.style.backgroundImage = s.className.match(_ttreg) ? "url(" + window.userConfig.carrot_good + "), url(" + window.userConfig.carrot_bad + "), url(" + window.userConfig.border + ")" : "url(" + window.userConfig.border + ")", s.style.backgroundPosition = s.className.match(_ttreg) ? "center, -10000px center, center" : "center", s.notEmpty = !0, i = 4 * (Math.floor(r / 4) + 1) + Math.floor(1e3 * Math.random()) % 4) : s.notEmpty = !1
	}
	e ? (t.style.webkitTransitionDuration = "0ms", t.style.display = "none", t.y = -blockSize * (Math.floor(t.children.length / 4) + (n || 0)) * e, setTimeout(function() {
		t.style[transform] = "translate3D(0," + t.y + "px,0)", setTimeout(function() {
			t.style.display = "block"
		}, 100)
	}, 200)) : (t.y = 0, t.style[transform] = "translate3D(0," + t.y + "px,0)"), t.style[transitionDuration] = "300ms"
}

function gameLayerMoveNextRow() {
	for (var t = 0; t < GameLayer.length; t++) {
		var e = GameLayer[t];
		e.y += blockSize, e.y > blockSize * Math.floor(e.children.length / 4) ? refreshGameLayer(e, 1, -1) : e.style[transform] = "translate3D(0," + e.y + "px,0)"
	}
}

function gameTapEvent(t) {
	if (_gameOver) return !1;
	var e = t.target,
		n = t.clientY || t.targetTouches[0].clientY,
		i = ((t.clientX || t.targetTouches[0].clientX) - body.offsetLeft, _gameBBList[_gameBBListIndex]);
	return n > touchArea[0] || n < touchArea[1] ? !1 : (i.id == e.id && e.notEmpty ? (_gameStart || gameStart(), e = document.getElementById(i.id), e.className = e.className.replace(_ttreg, " tt$1"), e.style.backgroundPosition = "-10000px center, center, center", _gameBBListIndex++, _gameScore++, gameLayerMoveNextRow()) : _gameStart && !e.notEmpty && (gameOver(), e.className += " bad"), !1)
}

function createGameLayer() {
	for (var t = '<div id="GameLayerBG">', e = 1; 2 >= e; e++) {
		var n = "GameLayer" + e;
		t += '<div id="' + n + '" class="GameLayer">';
		for (var i = 0; 10 > i; i++)
			for (var r = 0; 4 > r; r++) t += '<div id="' + n + "-" + (r + 4 * i) + '" num="' + (r + 4 * i) + '" class="block' + (r ? " bl" : "") + '"></div>';
		t += "</div>"
	}
	return t += "</div>", t += '<div id="GameTimeLayer"></div>'
}

function closeWelcomeLayer() {
	var t = document.getElementById("welcome");
	t.style.display = "none"
}

function showWelcomeLayer() {
	var t = document.getElementById("welcome");
	$(t).css({
		display: "block",
		backgroundImage: "url(" + window.userConfig.start_bg + ")",
		backgroundSize: "100% 100%"
	})
}

function hideGameScoreLayer() {
	var t = document.getElementById("GameScoreLayer");
	t.style.display = "none"
}

function replayBtn() {
	gameRestart(), hideGameScoreLayer()
}

function backBtn() {
	gameRestart(), hideGameScoreLayer(), showWelcomeLayer()
}

function shareText(t) {
	return Math.ceil(t / 5), 49 >= t ? "呵呵！我吃掉了" + t + "个小苹果！<br/>亲，还得加油哦!" : 99 >= t ? "酷！我吃掉了" + t + "个小苹果！<br/>亲，不错哦！" : 149 >= t ? "帅呆了！我吃掉了" + t + "个小苹果！<br/>亲，爱死你了！" : 199 >= t ? "太牛了！我吃掉了" + t + "个小苹果！<br/>亲，奥巴马和金正恩都惊呆了！" : "膜拜ing！我吃掉了" + t + "个小苹果！<br/>亲，你确定你是地球人？你是宇宙第一强人，再也没人能超越你了！"
}

function toStr(t) {
	return "object" == typeof t ? JSON.stringify(t) : t
}

function cookie(name, value, time) {
	if (name) {
		if (value) {
			if (time) {
				var date = new Date;
				date.setTime(date.getTime() + 864e5 * time), time = date.toGMTString()
			}
			return document.cookie = name + "=" + escape(toStr(value)) + (time ? "; expires=" + time + (arguments[3] ? "; domain=" + arguments[3] + (arguments[4] ? "; path=" + arguments[4] + (arguments[5] ? "; secure" : "") : "") : "") : ""), !0
		}
		return value = document.cookie.match("(?:^|;)\\s*" + name.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1") + "=([^;]*)"), value = value && "string" == typeof value[1] ? unescape(value[1]) : !1, (/^(\{|\[).+\}|\]$/.test(value) || /^[0-9]+$/g.test(value)) && eval("value=" + value), value
	}
	var data = {};
	value = document.cookie.replace(/\s/g, "").split(";");
	for (var i = 0; value.length > i; i++) name = value[i].split("="), name[1] && (data[name[0]] = unescape(name[1]));
	return data
}

function share() {
	document.getElementById("share-wx").style.display = "block", document.getElementById("share-wx").onclick = function() {
		this.style.display = "none"
	}
}

function getElementsByClassName(t) {
	var e = document.getElementsByTagName("*"),
		n = "\\b" + t + "\\b",
		i = new RegExp(n),
		r = [];
	for (len = e.length; len--;) e[len].className.match(i) && r.push(e[len]);
	return r
}

function gameReady() {
	htmlLoading = GameLoading({
		end: function() {
			return !1
		}
	});
	var t = ImageLoader({
		progress: function(t, e) {
			htmlLoading.progress(t, e)
		},
		complete: function() {
			init()
		}
	});
	t.add(window.userConfig.carrot_good.value), t.add(window.userConfig.carrot_bad.value), t.add(window.userConfig.start_bg.value), t.add(window.userConfig.game_bg.value), t.add(window.userConfig.btn.value), t.add(window.userConfig.game_logo.value), t.add(window.userConfig.timer.value), t.add(window.userConfig.border.value), t.start()
}
window.initGame = function() {
	window.userConfig.timeLineLink = window.location.href, window.userConfig.game_name && (document.title = window.userConfig.game_name)
};
var startGameTime = "",
	game_time = 2e3,
	isDesktop = navigator.userAgent.match(/(ipad|iphone|ipod|android|windows phone)/i) ? !1 : !0,
	supportsTouch = !isDesktop && (window.DocumentTouch && document instanceof window.DocumentTouch || "ontouchstart" in window);
! function() {
	function t(t) {
		this.options = {
			start: t && "function" == typeof t.start && t.start || function() {},
			progress: t && "function" == typeof t.progress && t.progress || function() {},
			complete: t && "function" == typeof t.complete && t.complete || function() {}
		}, this.isloading = !1, this.files = new s, this.loadeds = new s, this.total = 0, this.loaded = 0
	}

	function e() {
		this.loaded++, this.options.progress.call(this, this.loaded, this.total), this.total <= this.loaded && this.complete()
	}

	function n(t) {
		return t && "string" == typeof t && t.substr(t.lastIndexOf(".") + 1).toLowerCase() || ""
	}

	function i(t, e) {
		var n = new Image;
		return n.onload = function() {
			this.onload = this.onerror = null, e.call(this, !0)
		}, n.onerror = function() {
			this.onload = this.onerror = null, e.call(this, !1)
		}, n.src = t, n
	}

	function r(t, e) {
		var n = document.createElement("audio");
		return n.preload = !0, n.onload = function() {
			this.onload = this.onerror = null, e(this, !0)
		}, n.onerror = function() {
			this.onload = this.onerror = null, e(this, !1)
		}, n.src = t, document.getElementsByTagName("body")[0].appendChild(n), n
	}

	function s(t) {
		this.q = [], this.length = 0, this.compare = "function" == typeof t && t || function(t) {
			return this == t
		}
	}
	t.prototype = {
		add: function(t) {
			this.isloading || this.files.add(t)
		},
		start: function() {
			var t;
			this.isloading || (t = this.files.length, this.isloading = !0, t ? (this.total = t, this.files.each(function(t) {
				var s = n(this.toString()),
					a = /^(jpg|jpeg|gif|png|bmp)(\?[^\?]+)*$/i.test(s) ? i : /^(mp3|ogg)(\?[^\?]+)*$/i.test(s) ? r : null;
				t.loadeds.add(a(this, function(n) {
					e.call(t, n)
				}))
			}, this), this.options.start.call(this)) : (this.options.start.call(this), this.complete()))
		},
		complete: function() {
			this.isloading = !1, this.files.empty(), this.options.complete.call(this)
		}
	}, s.prototype = {
		add: function(t) {
			this.index(t) < 0 && (this.q.push(t), this.length = this.q.length)
		},
		remove: function(t) {
			var e = this.index(t);
			e >= 0 && (this.q.splice(e, 1), this.length = this.q.length)
		},
		empty: function() {
			this.q.length = 0
		},
		index: function(t, e) {
			var n, i = -1;
			return n = "function" == typeof e && e || this.compare, this.each(function(t, e) {
				t.call(this, e)
			}, n, t), i
		},
		get: function(t) {
			return t >= 0 && t < this.q.length ? this.q[t] : null
		},
		each: function(t) {
			var e, n = Array.prototype.slice.call(arguments);
			n.shift();
			for (var i = 0, r = this.q.length; r > i && (e = t.apply(this.q[i], n), e !== !1); i++);
		}
	}, "undefined" == typeof window.ImageLoader && (window.ImageLoader = function(e) {
		return new t(e)
	})
}(), ! function() {
	function t(t) {
		this.status = !1, this.options = "object" == typeof t && t || {}, e(this.options, {
			id: "GameLoadingContainer",
			skin: "string" == typeof t.skin ? "game-loading " + t.skin : "game-loading",
			start: "function" == typeof t.start ? t.start : function() {},
			progress: "function" == typeof t.progress ? t.progress : function() {},
			end: "function" == typeof t.end ? t.end : function() {},
			error: "function" == typeof t.error ? t.error : function() {},
			style: "",
			template: ""
		}), t.init && 0 == t.init || this.start()
	}

	function e(t, e) {
		for (var n in e) t[n] || (t[n] = e[n])
	}

	function n(t, e) {
		var n, i = t.getAttribute("class"),
			r = RegExp("(^|\\s+)" + e + "(\\s+|$)", "gi");
		i ? r.test(i) || (n = i + " " + e) : n = e, n && t.setAttribute("class", n)
	}

	function i(t, e) {
		var n = t.getAttribute("class"),
			i = RegExp("(^|\\s+)" + e + "(\\s+|$)", "gi");
		n && i.test(n) && t.setAttribute("class", n.replace(i, function(t, e, n) {
			return e && n ? " " : ""
		}))
	}
	t.prototype = {
		create: function() {
			var t, e;
			this.container = document.getElementById(this.options.id), this.container || (e = document.createElement("style"), e.setAttribute("type", "text/css"), e.styleSheet ? e.styleSheet.cssText = this.options.style : e.appendChild(document.createTextNode(this.options.style)), document.getElementsByTagName("head")[0].appendChild(e), t = document.createElement("div"), t.setAttribute("id", this.options.id), t.setAttribute("class", this.options.skin), t.innerHTML = this.options.template, document.getElementsByTagName("body")[0].appendChild(t), this.container = document.getElementById(this.options.id))
		},
		start: function() {
			this.container || this.create(), this.status = !0, n(document.getElementsByTagName("html")[0], "game-loading-html"), this.options.start.call(this)
		},
		progress: function(t, e) {
			this.container && (this.options.progress.call(this, t, e), t == e && this.end())
		},
		end: function(t) {
			var e;
			(t || this.container && this.status) && (e = this.options.end.call(this), (t || e !== !1) && i(document.getElementsByTagName("html")[0], "game-loading-html"), this.status = !1)
		}
	}, "GameLoading" in window || (window.GameLoading = function(e) {
		var n = e || {};
		return n.style || (n.style = '.game-loading-html,.game-loading-html body{height:100%;overflow:hidden;}.game-loading{position:fixed;left:0;top:0;width:100%;height:100%;z-index:99999;background-color:#fff;display:none;}.game-loading-content{width:100%;height:100%;text-align:center;z-index:1;position:relative;margin-top:-39px;}.game-loading-content:after{content:"";display:inline-block;vertical-align:middle;height:100%;width:0;font-size:0;}.game-loading-main{display:inline-block;vertical-align:middle;margin:0;position:relative;}.game-loading-img{display:block;margin:0 auto;}.game-loading-progress{font-size:14px;color:#363636;white-space:nowrap;position:relative;}.game-loading-string{display:inline;position:relative;}.game-loading-percent{display:inline;position:relative;}.game-loading-logo{width:100%;position:absolute;left:0;bottom:24px;text-align:center;overflow:hidden;}.game-loading-logo img{max-width:100%;width:168px;display:block;margin:0 auto;}.game-loading-html .game-loading{display:block;}@media screen and (max-width:640px) {.game-loading-progress{font-size:12px;}.game-loading-img{width:76px;}.game-loading-logo{bottom:12px;}.game-loading-logo img{width:auto;height:40px;}.game-loading-content{margin-top:-20px;}}@media screen and (max-height: 480px) {.game-loading-progress{font-size:12px;}.game-loading-img{width:76px;}.game-loading-logo{bottom:12px;}.game-loading-logo img{width:auto;height:40px;}.game-loading-content{margin-top:-20px;}}'), n.template || (n.template = '<div class="game-loading-content"><div class="game-loading-main"><img src="' + window.userConfig.loading + '" class="game-loading-img"><div class="game-loading-progress"><div class="game-loading-string">' + window.userConfig.loadtext + '</div><div class="game-loading-percent" id="game-loading-percent"></div></div></div></div><div class="game-loading-logo"><img src="' + window.userConfig.logo + '"></div>'), n.progress || (n.progress = function(t, e) {
			document.getElementById("game-loading-percent").innerHTML = t + "/" + e
		}), new t(n)
	})
}(), ! function(t, e) {
	function n() {
		if (!_.isReady) {
			try {
				b.documentElement.doScroll("left")
			} catch (t) {
				return void setTimeout(n, 1)
			}
			_.ready()
		}
	}

	function i(t, e) {
		e.src ? _.ajax({
			url: e.src,
			async: !1,
			dataType: "script"
		}) : _.globalEval(e.text || e.textContent || e.innerHTML || ""), e.parentNode && e.parentNode.removeChild(e)
	}

	function r(t, n, i, s, a, o) {
		var l = t.length;
		if ("object" == typeof n) {
			for (var u in n) r(t, u, n[u], s, a, i);
			return t
		}
		if (i !== e) {
			for (s = !o && s && _.isFunction(i), u = 0; l > u; u++) a(t[u], n, s ? i.call(t[u], u, a(t[u], n)) : i, o);
			return t
		}
		return l ? a(t[0], n) : e
	}

	function s() {
		return (new Date).getTime()
	}

	function a() {
		return !1
	}

	function o() {
		return !0
	}

	function l(t, e, n) {
		return n[0].type = t, _.event.handle.apply(e, n)
	}

	function u(t) {
		var e, n, i, r, s, a, o, l = [],
			u = [],
			c = arguments;
		if (i = _.data(this, "events"), t.liveFired !== this && i && i.live && (!t.button || "click" !== t.type)) {
			t.liveFired = this;
			var h = i.live.slice(0);
			for (s = 0; s < h.length; s++) i = h[s], i.origType.replace(Y, "") === t.type ? u.push(i.selector) : h.splice(s--, 1);
			for (n = _(t.target).closest(u, t.currentTarget), a = 0, o = n.length; o > a; a++)
				for (s = 0; s < h.length; s++) i = h[s], n[a].selector === i.selector && (r = n[a].elem, u = null, ("mouseenter" === i.preType || "mouseleave" === i.preType) && (u = _(t.relatedTarget).closest(i.selector)[0]), u && u === r || l.push({
					elem: r,
					handleObj: i
				}));
			for (a = 0, o = l.length; o > a; a++)
				if (n = l[a], t.currentTarget = n.elem, t.data = n.handleObj.data, t.handleObj = n.handleObj, n.handleObj.origHandler.apply(n.elem, c) === !1) {
					e = !1;
					break
				}
			return e
		}
	}

	function c(t, e) {
		return "live." + (t && "*" !== t ? t + "." : "") + e.replace(/\./g, "`").replace(/ /g, "&")
	}

	function h(t) {
		return !t || !t.parentNode || 11 === t.parentNode.nodeType
	}

	function d(t, e) {
		var n = 0;
		e.each(function() {
			if (this.nodeName === (t[n] && t[n].nodeName)) {
				var e = _.data(t[n++]),
					i = _.data(this, e);
				if (e = e && e.events) {
					delete i.handle, i.events = {};
					for (var r in e)
						for (var s in e[r]) _.event.add(this, r, e[r][s], e[r][s].data)
				}
			}
		})
	}

	function f(t, e, n) {
		var i, r, s;
		return e = e && e[0] ? e[0].ownerDocument || e[0] : b, 1 === t.length && "string" == typeof t[0] && t[0].length < 512 && e === b && !fe.test(t[0]) && (_.support.checkClone || !pe.test(t[0])) && (r = !0, (s = _.fragments[t[0]]) && 1 !== s && (i = s)), i || (i = e.createDocumentFragment(), _.clean(t, e, i, n)), r && (_.fragments[t[0]] = s ? i : 1), {
			fragment: i,
			cacheable: r
		}
	}

	function p(t, e) {
		var n = {};
		return _.each(Ue.concat.apply([], Ue.slice(0, e)), function() {
			n[this] = t
		}), n
	}

	function g(t) {
		return "scrollTo" in t && t.document ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
	}
	var m, v, _ = function(t, e) {
			return new _.fn.init(t, e)
		},
		y = t.jQuery,
		w = t.$,
		b = t.document,
		x = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,
		S = /^.[^:#\[\.,]*$/,
		T = /\S/,
		E = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
		L = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
		j = navigator.userAgent,
		P = !1,
		I = [],
		C = Object.prototype.toString,
		N = Object.prototype.hasOwnProperty,
		O = Array.prototype.push,
		A = Array.prototype.slice,
		D = Array.prototype.indexOf;
	_.fn = _.prototype = {
			init: function(t, n) {
				var i, r;
				if (!t) return this;
				if (t.nodeType) return this.context = this[0] = t, this.length = 1, this;
				if ("body" === t && !n) return this.context = b, this[0] = b.body, this.selector = "body", this.length = 1, this;
				if ("string" == typeof t) {
					if (!(i = x.exec(t)) || !i[1] && n) return !n && /^\w+$/.test(t) ? (this.selector = t, this.context = b, t = b.getElementsByTagName(t), _.merge(this, t)) : !n || n.jquery ? (n || m).find(t) : _(n).find(t);
					if (i[1]) return r = n ? n.ownerDocument || n : b, (t = L.exec(t)) ? _.isPlainObject(n) ? (t = [b.createElement(t[1])], _.fn.attr.call(t, n, !0)) : t = [r.createElement(t[1])] : (t = f([i[1]], [r]), t = (t.cacheable ? t.fragment.cloneNode(!0) : t.fragment).childNodes), _.merge(this, t);
					if (n = b.getElementById(i[2])) {
						if (n.id !== i[2]) return m.find(t);
						this.length = 1, this[0] = n
					}
					return this.context = b, this.selector = t, this
				}
				return _.isFunction(t) ? m.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), _.makeArray(t, this))
			},
			selector: "",
			jquery: "1.4.2",
			length: 0,
			size: function() {
				return this.length
			},
			toArray: function() {
				return A.call(this, 0)
			},
			get: function(t) {
				return null == t ? this.toArray() : 0 > t ? this.slice(t)[0] : this[t]
			},
			pushStack: function(t, e, n) {
				var i = _();
				return _.isArray(t) ? O.apply(i, t) : _.merge(i, t), i.prevObject = this, i.context = this.context, "find" === e ? i.selector = this.selector + (this.selector ? " " : "") + n : e && (i.selector = this.selector + "." + e + "(" + n + ")"), i
			},
			each: function(t, e) {
				return _.each(this, t, e)
			},
			ready: function(t) {
				return _.bindReady(), _.isReady ? t.call(b, _) : I && I.push(t), this
			},
			eq: function(t) {
				return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			slice: function() {
				return this.pushStack(A.apply(this, arguments), "slice", A.call(arguments).join(","))
			},
			map: function(t) {
				return this.pushStack(_.map(this, function(e, n) {
					return t.call(e, n, e)
				}))
			},
			end: function() {
				return this.prevObject || _(null)
			},
			push: O,
			sort: [].sort,
			splice: [].splice
		}, _.fn.init.prototype = _.fn, _.extend = _.fn.extend = function() {
			var t, n, i, r, s = arguments[0] || {},
				a = 1,
				o = arguments.length,
				l = !1;
			for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, a = 2), "object" == typeof s || _.isFunction(s) || (s = {}), o === a && (s = this, --a); o > a; a++)
				if (null != (t = arguments[a]))
					for (n in t) i = s[n], r = t[n], s !== r && (l && r && (_.isPlainObject(r) || _.isArray(r)) ? (i = i && (_.isPlainObject(i) || _.isArray(i)) ? i : _.isArray(r) ? [] : {}, s[n] = _.extend(l, i, r)) : r !== e && (s[n] = r));
			return s
		}, _.extend({
			noConflict: function(e) {
				return t.$ = w, e && (t.jQuery = y), _
			},
			isReady: !1,
			ready: function() {
				if (!_.isReady) {
					if (!b.body) return setTimeout(_.ready, 13);
					if (_.isReady = !0, I) {
						for (var t, e = 0; t = I[e++];) t.call(b, _);
						I = null
					}
					_.fn.triggerHandler && _(b).triggerHandler("ready")
				}
			},
			bindReady: function() {
				if (!P) {
					if (P = !0, "complete" === b.readyState) return _.ready();
					if (b.addEventListener) b.addEventListener("DOMContentLoaded", v, !1), t.addEventListener("load", _.ready, !1);
					else if (b.attachEvent) {
						b.attachEvent("onreadystatechange", v), t.attachEvent("onload", _.ready);
						var e = !1;
						try {
							e = null == t.frameElement
						} catch (i) {}
						b.documentElement.doScroll && e && n()
					}
				}
			},
			isFunction: function(t) {
				return "[object Function]" === C.call(t)
			},
			isArray: function(t) {
				return "[object Array]" === C.call(t)
			},
			isPlainObject: function(t) {
				if (!t || "[object Object]" !== C.call(t) || t.nodeType || t.setInterval) return !1;
				if (t.constructor && !N.call(t, "constructor") && !N.call(t.constructor.prototype, "isPrototypeOf")) return !1;
				var n;
				for (n in t);
				return n === e || N.call(t, n)
			},
			isEmptyObject: function(t) {
				for (var e in t) return !1;
				return !0
			},
			error: function(t) {
				throw t
			},
			parseJSON: function(e) {
				return "string" == typeof e && e ? (e = _.trim(e), /^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? t.JSON && t.JSON.parse ? t.JSON.parse(e) : new Function("return " + e)() : void _.error("Invalid JSON: " + e)) : null
			},
			noop: function() {},
			globalEval: function(t) {
				if (t && T.test(t)) {
					var e = b.getElementsByTagName("head")[0] || b.documentElement,
						n = b.createElement("script");
					n.type = "text/javascript", _.support.scriptEval ? n.appendChild(b.createTextNode(t)) : n.text = t, e.insertBefore(n, e.firstChild), e.removeChild(n)
				}
			},
			nodeName: function(t, e) {
				return t.nodeName && t.nodeName.toUpperCase() === e.toUpperCase()
			},
			each: function(t, n, i) {
				var r, s = 0,
					a = t.length,
					o = a === e || _.isFunction(t);
				if (i)
					if (o) {
						for (r in t)
							if (n.apply(t[r], i) === !1) break
					} else
						for (; a > s && n.apply(t[s++], i) !== !1;);
				else if (o) {
					for (r in t)
						if (n.call(t[r], r, t[r]) === !1) break
				} else
					for (i = t[0]; a > s && n.call(i, s, i) !== !1; i = t[++s]);
				return t
			},
			trim: function(t) {
				return (t || "").replace(E, "")
			},
			makeArray: function(t, e) {
				return e = e || [], null != t && (null == t.length || "string" == typeof t || _.isFunction(t) || "function" != typeof t && t.setInterval ? O.call(e, t) : _.merge(e, t)), e
			},
			inArray: function(t, e) {
				if (e.indexOf) return e.indexOf(t);
				for (var n = 0, i = e.length; i > n; n++)
					if (e[n] === t) return n;
				return -1
			},
			merge: function(t, n) {
				var i = t.length,
					r = 0;
				if ("number" == typeof n.length)
					for (var s = n.length; s > r; r++) t[i++] = n[r];
				else
					for (; n[r] !== e;) t[i++] = n[r++];
				return t.length = i, t
			},
			grep: function(t, e, n) {
				for (var i = [], r = 0, s = t.length; s > r; r++) !n != !e(t[r], r) && i.push(t[r]);
				return i
			},
			map: function(t, e, n) {
				for (var i, r = [], s = 0, a = t.length; a > s; s++) i = e(t[s], s, n), null != i && (r[r.length] = i);
				return r.concat.apply([], r)
			},
			guid: 1,
			proxy: function(t, n, i) {
				return 2 === arguments.length && ("string" == typeof n ? (i = t, t = i[n], n = e) : n && !_.isFunction(n) && (i = n, n = e)), !n && t && (n = function() {
					return t.apply(i || this, arguments)
				}), t && (n.guid = t.guid = t.guid || n.guid || _.guid++), n
			},
			uaMatch: function(t) {
				return t = t.toLowerCase(), t = /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || !/compatible/.test(t) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(t) || [], {
					browser: t[1] || "",
					version: t[2] || "0"
				}
			},
			browser: {}
		}), j = _.uaMatch(j), j.browser && (_.browser[j.browser] = !0, _.browser.version = j.version), _.browser.webkit && (_.browser.safari = !0), D && (_.inArray = function(t, e) {
			return D.call(e, t)
		}), m = _(b), b.addEventListener ? v = function() {
			b.removeEventListener("DOMContentLoaded", v, !1), _.ready()
		} : b.attachEvent && (v = function() {
			"complete" === b.readyState && (b.detachEvent("onreadystatechange", v), _.ready())
		}),
		function() {
			_.support = {};
			var e = b.documentElement,
				n = b.createElement("script"),
				i = b.createElement("div"),
				r = "script" + s();
			i.style.display = "none", i.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
			var a = i.getElementsByTagName("*"),
				o = i.getElementsByTagName("a")[0];
			if (a && a.length && o) {
				_.support = {
					leadingWhitespace: 3 === i.firstChild.nodeType,
					tbody: !i.getElementsByTagName("tbody").length,
					htmlSerialize: !!i.getElementsByTagName("link").length,
					style: /red/.test(o.getAttribute("style")),
					hrefNormalized: "/a" === o.getAttribute("href"),
					opacity: /^0.55$/.test(o.style.opacity),
					cssFloat: !!o.style.cssFloat,
					checkOn: "on" === i.getElementsByTagName("input")[0].value,
					optSelected: b.createElement("select").appendChild(b.createElement("option")).selected,
					parentNode: null === i.removeChild(i.appendChild(b.createElement("div"))).parentNode,
					deleteExpando: !0,
					checkClone: !1,
					scriptEval: !1,
					noCloneEvent: !0,
					boxModel: null
				}, n.type = "text/javascript";
				try {
					n.appendChild(b.createTextNode("window." + r + "=1;"))
				} catch (l) {}
				e.insertBefore(n, e.firstChild), t[r] && (_.support.scriptEval = !0, delete t[r]);
				try {
					delete n.test
				} catch (u) {
					_.support.deleteExpando = !1
				}
				e.removeChild(n), i.attachEvent && i.fireEvent && (i.attachEvent("onclick", function c() {
					_.support.noCloneEvent = !1, i.detachEvent("onclick", c)
				}), i.cloneNode(!0).fireEvent("onclick")), i = b.createElement("div"), i.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>", e = b.createDocumentFragment(), e.appendChild(i.firstChild), _.support.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, _(function() {
					var t = b.createElement("div");
					t.style.width = t.style.paddingLeft = "1px", b.body.appendChild(t), _.boxModel = _.support.boxModel = 2 === t.offsetWidth, b.body.removeChild(t).style.display = "none"
				}), e = function(t) {
					var e = b.createElement("div");
					t = "on" + t;
					var n = t in e;
					return n || (e.setAttribute(t, "return;"), n = "function" == typeof e[t]), n
				}, _.support.submitBubbles = e("submit"), _.support.changeBubbles = e("change"), e = n = i = a = o = null
			}
		}(), _.props = {
			"for": "htmlFor",
			"class": "className",
			readonly: "readOnly",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			rowspan: "rowSpan",
			colspan: "colSpan",
			tabindex: "tabIndex",
			usemap: "useMap",
			frameborder: "frameBorder"
		};
	var M = "jQuery" + s(),
		k = 0,
		R = {};
	_.extend({
		cache: {},
		expando: M,
		noData: {
			embed: !0,
			object: !0,
			applet: !0
		},
		data: function(n, i, r) {
			if (!n.nodeName || !_.noData[n.nodeName.toLowerCase()]) {
				n = n == t ? R : n;
				var s = n[M],
					a = _.cache;
				return s || "string" != typeof i || r !== e ? (s || (s = ++k), "object" == typeof i ? (n[M] = s, a[s] = _.extend(!0, {}, i)) : a[s] || (n[M] = s, a[s] = {}), n = a[s], r !== e && (n[i] = r), "string" == typeof i ? n[i] : n) : null
			}
		},
		removeData: function(e, n) {
			if (!e.nodeName || !_.noData[e.nodeName.toLowerCase()]) {
				e = e == t ? R : e;
				var i = e[M],
					r = _.cache,
					s = r[i];
				n ? s && (delete s[n], _.isEmptyObject(s) && _.removeData(e)) : (_.support.deleteExpando ? delete e[_.expando] : e.removeAttribute && e.removeAttribute(_.expando), delete r[i])
			}
		}
	}), _.fn.extend({
		data: function(t, n) {
			if ("undefined" == typeof t && this.length) return _.data(this[0]);
			if ("object" == typeof t) return this.each(function() {
				_.data(this, t)
			});
			var i = t.split(".");
			if (i[1] = i[1] ? "." + i[1] : "", n === e) {
				var r = this.triggerHandler("getData" + i[1] + "!", [i[0]]);
				return r === e && this.length && (r = _.data(this[0], t)), r === e && i[1] ? this.data(i[0]) : r
			}
			return this.trigger("setData" + i[1] + "!", [i[0], n]).each(function() {
				_.data(this, t, n)
			})
		},
		removeData: function(t) {
			return this.each(function() {
				_.removeData(this, t)
			})
		}
	}), _.extend({
		queue: function(t, e, n) {
			if (t) {
				e = (e || "fx") + "queue";
				var i = _.data(t, e);
				return n ? (!i || _.isArray(n) ? i = _.data(t, e, _.makeArray(n)) : i.push(n), i) : i || []
			}
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var n = _.queue(t, e),
				i = n.shift();
			"inprogress" === i && (i = n.shift()), i && ("fx" === e && n.unshift("inprogress"), i.call(t, function() {
				_.dequeue(t, e)
			}))
		}
	}), _.fn.extend({
		queue: function(t, n) {
			return "string" != typeof t && (n = t, t = "fx"), n === e ? _.queue(this[0], t) : this.each(function() {
				var e = _.queue(this, t, n);
				"fx" === t && "inprogress" !== e[0] && _.dequeue(this, t)
			})
		},
		dequeue: function(t) {
			return this.each(function() {
				_.dequeue(this, t)
			})
		},
		delay: function(t, e) {
			return t = _.fx ? _.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function() {
				var n = this;
				setTimeout(function() {
					_.dequeue(n, e)
				}, t)
			})
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		}
	});
	var F = /[\n\t]/g,
		B = /\s+/,
		H = /\r/g,
		z = /href|src|style/,
		G = /(button|input)/i,
		X = /(button|input|object|select|textarea)/i,
		q = /^(a|area)$/i,
		U = /radio|checkbox/;
	_.fn.extend({
		attr: function(t, e) {
			return r(this, t, e, !0, _.attr)
		},
		removeAttr: function(t) {
			return this.each(function() {
				_.attr(this, t, ""), 1 === this.nodeType && this.removeAttribute(t)
			})
		},
		addClass: function(t) {
			if (_.isFunction(t)) return this.each(function(e) {
				var n = _(this);
				n.addClass(t.call(this, e, n.attr("class")))
			});
			if (t && "string" == typeof t)
				for (var e = (t || "").split(B), n = 0, i = this.length; i > n; n++) {
					var r = this[n];
					if (1 === r.nodeType)
						if (r.className) {
							for (var s = " " + r.className + " ", a = r.className, o = 0, l = e.length; l > o; o++) s.indexOf(" " + e[o] + " ") < 0 && (a += " " + e[o]);
							r.className = _.trim(a)
						} else r.className = t
				}
			return this
		},
		removeClass: function(t) {
			if (_.isFunction(t)) return this.each(function(e) {
				var n = _(this);
				n.removeClass(t.call(this, e, n.attr("class")))
			});
			if (t && "string" == typeof t || t === e)
				for (var n = (t || "").split(B), i = 0, r = this.length; r > i; i++) {
					var s = this[i];
					if (1 === s.nodeType && s.className)
						if (t) {
							for (var a = (" " + s.className + " ").replace(F, " "), o = 0, l = n.length; l > o; o++) a = a.replace(" " + n[o] + " ", " ");
							s.className = _.trim(a)
						} else s.className = ""
				}
			return this
		},
		toggleClass: function(t, e) {
			var n = typeof t,
				i = "boolean" == typeof e;
			return this.each(_.isFunction(t) ? function(n) {
				var i = _(this);
				i.toggleClass(t.call(this, n, i.attr("class"), e), e)
			} : function() {
				if ("string" === n)
					for (var r, s = 0, a = _(this), o = e, l = t.split(B); r = l[s++];) o = i ? o : !a.hasClass(r), a[o ? "addClass" : "removeClass"](r);
				else("undefined" === n || "boolean" === n) && (this.className && _.data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : _.data(this, "__className__") || "")
			})
		},
		hasClass: function(t) {
			t = " " + t + " ";
			for (var e = 0, n = this.length; n > e; e++)
				if ((" " + this[e].className + " ").replace(F, " ").indexOf(t) > -1) return !0;
			return !1
		},
		val: function(t) {
			if (t === e) {
				var n = this[0];
				if (n) {
					if (_.nodeName(n, "option")) return (n.attributes.value || {}).specified ? n.value : n.text;
					if (_.nodeName(n, "select")) {
						var i = n.selectedIndex,
							r = [],
							s = n.options;
						if (n = "select-one" === n.type, 0 > i) return null;
						var a = n ? i : 0;
						for (i = n ? i + 1 : s.length; i > a; a++) {
							var o = s[a];
							if (o.selected) {
								if (t = _(o).val(), n) return t;
								r.push(t)
							}
						}
						return r
					}
					return U.test(n.type) && !_.support.checkOn ? null === n.getAttribute("value") ? "on" : n.value : (n.value || "").replace(H, "")
				}
				return e
			}
			var l = _.isFunction(t);
			return this.each(function(e) {
				var n = _(this),
					i = t;
				if (1 === this.nodeType)
					if (l && (i = t.call(this, e, n.val())), "number" == typeof i && (i += ""), _.isArray(i) && U.test(this.type)) this.checked = _.inArray(n.val(), i) >= 0;
					else if (_.nodeName(this, "select")) {
					var r = _.makeArray(i);
					_("option", this).each(function() {
						this.selected = _.inArray(_(this).val(), r) >= 0
					}), r.length || (this.selectedIndex = -1)
				} else this.value = i
			})
		}
	}), _.extend({
		attrFn: {
			val: !0,
			css: !0,
			html: !0,
			text: !0,
			data: !0,
			width: !0,
			height: !0,
			offset: !0
		},
		attr: function(t, n, i, r) {
			if (!t || 3 === t.nodeType || 8 === t.nodeType) return e;
			if (r && n in _.attrFn) return _(t)[n](i);
			r = 1 !== t.nodeType || !_.isXMLDoc(t);
			var s = i !== e;
			if (n = r && _.props[n] || n, 1 === t.nodeType) {
				var a = z.test(n);
				return n in t && r && !a ? (s && ("type" === n && G.test(t.nodeName) && t.parentNode && _.error("type property can't be changed"), t[n] = i), _.nodeName(t, "form") && t.getAttributeNode(n) ? t.getAttributeNode(n).nodeValue : "tabIndex" === n ? (n = t.getAttributeNode("tabIndex")) && n.specified ? n.value : X.test(t.nodeName) || q.test(t.nodeName) && t.href ? 0 : e : t[n]) : !_.support.style && r && "style" === n ? (s && (t.style.cssText = "" + i), t.style.cssText) : (s && t.setAttribute(n, "" + i), t = !_.support.hrefNormalized && r && a ? t.getAttribute(n, 2) : t.getAttribute(n), null === t ? e : t)
			}
			return _.style(t, n, i)
		}
	});
	var Y = /\.(.*)$/,
		Q = function(t) {
			return t.replace(/[^\w\s\.\|`]/g, function(t) {
				return "\\" + t
			})
		};
	_.event = {
		add: function(n, i, r, s) {
			if (3 !== n.nodeType && 8 !== n.nodeType) {
				n.setInterval && n !== t && !n.frameElement && (n = t);
				var a, o;
				if (r.handler && (a = r, r = a.handler), r.guid || (r.guid = _.guid++), o = _.data(n)) {
					var l = o.events = o.events || {},
						u = o.handle;
					u || (o.handle = u = function() {
						return "undefined" == typeof _ || _.event.triggered ? e : _.event.handle.apply(u.elem, arguments)
					}), u.elem = n, i = i.split(" ");
					for (var c, h, d = 0; c = i[d++];) {
						o = a ? _.extend({}, a) : {
							handler: r,
							data: s
						}, c.indexOf(".") > -1 ? (h = c.split("."), c = h.shift(), o.namespace = h.slice(0).sort().join(".")) : (h = [], o.namespace = ""), o.type = c, o.guid = r.guid;
						var f = l[c],
							p = _.event.special[c] || {};
						f || (f = l[c] = [], p.setup && p.setup.call(n, s, h, u) !== !1 || (n.addEventListener ? n.addEventListener(c, u, !1) : n.attachEvent && n.attachEvent("on" + c, u))), p.add && (p.add.call(n, o), o.handler.guid || (o.handler.guid = r.guid)), f.push(o), _.event.global[c] = !0
					}
					n = null
				}
			}
		},
		global: {},
		remove: function(t, e, n, i) {
			if (3 !== t.nodeType && 8 !== t.nodeType) {
				var r, s, a, o, l, u, c, h = 0,
					d = _.data(t),
					f = d && d.events;
				if (d && f)
					if (e && e.type && (n = e.handler, e = e.type), !e || "string" == typeof e && "." === e.charAt(0)) {
						e = e || "";
						for (r in f) _.event.remove(t, r + e)
					} else {
						for (e = e.split(" "); r = e[h++];)
							if (l = r, s = r.indexOf(".") < 0, a = [], s || (a = r.split("."), r = a.shift(), o = new RegExp("(^|\\.)" + _.map(a.slice(0).sort(), Q).join("\\.(?:.*\\.)?") + "(\\.|$)")), u = f[r])
								if (n) {
									for (l = _.event.special[r] || {}, p = i || 0; p < u.length && (c = u[p], n.guid !== c.guid || ((s || o.test(c.namespace)) && (null == i && u.splice(p--, 1), l.remove && l.remove.call(t, c)), null == i)); p++);
									(0 === u.length || null != i && 1 === u.length) && (l.teardown && l.teardown.call(t, a) !== !1 || W(t, r, d.handle), delete f[r])
								} else
									for (var p = 0; p < u.length; p++) c = u[p], (s || o.test(c.namespace)) && (_.event.remove(t, l, c.handler, p), u.splice(p--, 1));
						_.isEmptyObject(f) && ((e = d.handle) && (e.elem = null), delete d.events, delete d.handle, _.isEmptyObject(d) && _.removeData(t))
					}
			}
		},
		trigger: function(t, n, i, r) {
			var s = t.type || t;
			if (!r) {
				if (t = "object" == typeof t ? t[M] ? t : _.extend(_.Event(s), t) : _.Event(s), s.indexOf("!") >= 0 && (t.type = s = s.slice(0, -1), t.exclusive = !0), i || (t.stopPropagation(), _.event.global[s] && _.each(_.cache, function() {
						this.events && this.events[s] && _.event.trigger(t, n, this.handle.elem)
					})), !i || 3 === i.nodeType || 8 === i.nodeType) return e;
				t.result = e, t.target = i, n = _.makeArray(n), n.unshift(t)
			}
			t.currentTarget = i, (r = _.data(i, "handle")) && r.apply(i, n), r = i.parentNode || i.ownerDocument;
			try {
				i && i.nodeName && _.noData[i.nodeName.toLowerCase()] || i["on" + s] && i["on" + s].apply(i, n) === !1 && (t.result = !1)
			} catch (a) {}
			if (!t.isPropagationStopped() && r) _.event.trigger(t, n, r, !0);
			else if (!t.isDefaultPrevented()) {
				r = t.target;
				var o, l = _.nodeName(r, "a") && "click" === s,
					u = _.event.special[s] || {};
				if (!(u._default && u._default.call(i, t) !== !1 || l || r && r.nodeName && _.noData[r.nodeName.toLowerCase()])) {
					try {
						r[s] && ((o = r["on" + s]) && (r["on" + s] = null), _.event.triggered = !0, r[s]())
					} catch (c) {}
					o && (r["on" + s] = o), _.event.triggered = !1
				}
			}
		},
		handle: function(n) {
			var i, r, s, a;
			if (n = arguments[0] = _.event.fix(n || t.event), n.currentTarget = this, i = n.type.indexOf(".") < 0 && !n.exclusive, i || (r = n.type.split("."), n.type = r.shift(), s = new RegExp("(^|\\.)" + r.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)")), a = _.data(this, "events"), r = a[n.type], a && r) {
				r = r.slice(0), a = 0;
				for (var o = r.length; o > a; a++) {
					var l = r[a];
					if ((i || s.test(l.namespace)) && (n.handler = l.handler, n.data = l.data, n.handleObj = l, l = l.handler.apply(this, arguments), l !== e && (n.result = l, l === !1 && (n.preventDefault(), n.stopPropagation())), n.isImmediatePropagationStopped())) break
				}
			}
			return n.result
		},
		props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
		fix: function(t) {
			if (t[M]) return t;
			var n = t;
			t = _.Event(n);
			for (var i, r = this.props.length; r;) i = this.props[--r], t[i] = n[i];
			return t.target || (t.target = t.srcElement || b), 3 === t.target.nodeType && (t.target = t.target.parentNode), !t.relatedTarget && t.fromElement && (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), null == t.pageX && null != t.clientX && (n = b.documentElement, r = b.body, t.pageX = t.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = t.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), !t.which && (t.charCode || 0 === t.charCode ? t.charCode : t.keyCode) && (t.which = t.charCode || t.keyCode), !t.metaKey && t.ctrlKey && (t.metaKey = t.ctrlKey), t.which || t.button === e || (t.which = 1 & t.button ? 1 : 2 & t.button ? 3 : 4 & t.button ? 2 : 0), t
		},
		guid: 1e8,
		proxy: _.proxy,
		special: {
			ready: {
				setup: _.bindReady,
				teardown: _.noop
			},
			live: {
				add: function(t) {
					_.event.add(this, t.origType, _.extend({}, t, {
						handler: u
					}))
				},
				remove: function(t) {
					var e = !0,
						n = t.origType.replace(Y, "");
					_.each(_.data(this, "events").live || [], function() {
						return n === this.origType.replace(Y, "") ? e = !1 : void 0
					}), e && _.event.remove(this, t.origType, u)
				}
			},
			beforeunload: {
				setup: function(t, e, n) {
					return this.setInterval && (this.onbeforeunload = n), !1
				},
				teardown: function(t, e) {
					this.onbeforeunload === e && (this.onbeforeunload = null)
				}
			}
		}
	};
	var W = b.removeEventListener ? function(t, e, n) {
		t.removeEventListener(e, n, !1)
	} : function(t, e, n) {
		t.detachEvent("on" + e, n)
	};
	_.Event = function(t) {
		return this.preventDefault ? (t && t.type ? (this.originalEvent = t, this.type = t.type) : this.type = t, this.timeStamp = s(), void(this[M] = !0)) : new _.Event(t)
	}, _.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = o;
			var t = this.originalEvent;
			t && (t.preventDefault && t.preventDefault(), t.returnValue = !1)
		},
		stopPropagation: function() {
			this.isPropagationStopped = o;
			var t = this.originalEvent;
			t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = o, this.stopPropagation()
		},
		isDefaultPrevented: a,
		isPropagationStopped: a,
		isImmediatePropagationStopped: a
	};
	var V = function(t) {
			var e = t.relatedTarget;
			try {
				for (; e && e !== this;) e = e.parentNode;
				e !== this && (t.type = t.data, _.event.handle.apply(this, arguments))
			} catch (n) {}
		},
		J = function(t) {
			t.type = t.data, _.event.handle.apply(this, arguments)
		};
	if (_.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, function(t, e) {
			_.event.special[t] = {
				setup: function(n) {
					_.event.add(this, e, n && n.selector ? J : V, t)
				},
				teardown: function(t) {
					_.event.remove(this, e, t && t.selector ? J : V)
				}
			}
		}), _.support.submitBubbles || (_.event.special.submit = {
			setup: function() {
				return "form" === this.nodeName.toLowerCase() ? !1 : (_.event.add(this, "click.specialSubmit", function(t) {
					var e = t.target,
						n = e.type;
					return "submit" !== n && "image" !== n || !_(e).closest("form").length ? void 0 : l("submit", this, arguments)
				}), void _.event.add(this, "keypress.specialSubmit", function(t) {
					var e = t.target,
						n = e.type;
					return "text" !== n && "password" !== n || !_(e).closest("form").length || 13 !== t.keyCode ? void 0 : l("submit", this, arguments)
				}))
			},
			teardown: function() {
				_.event.remove(this, ".specialSubmit")
			}
		}), !_.support.changeBubbles) {
		var $, K = /textarea|input|select/i,
			Z = function(t) {
				var e = t.type,
					n = t.value;
				return "radio" === e || "checkbox" === e ? n = t.checked : "select-multiple" === e ? n = t.selectedIndex > -1 ? _.map(t.options, function(t) {
					return t.selected
				}).join("-") : "" : "select" === t.nodeName.toLowerCase() && (n = t.selectedIndex), n
			},
			te = function(t, n) {
				var i, r, s = t.target;
				return !K.test(s.nodeName) || s.readOnly || (i = _.data(s, "_change_data"), r = Z(s), ("focusout" !== t.type || "radio" !== s.type) && _.data(s, "_change_data", r), i === e || r === i || null == i && !r) ? void 0 : (t.type = "change", _.event.trigger(t, n, s))
			};
		_.event.special.change = {
			filters: {
				focusout: te,
				click: function(t) {
					var e = t.target,
						n = e.type;
					return "radio" === n || "checkbox" === n || "select" === e.nodeName.toLowerCase() ? te.call(this, t) : void 0
				},
				keydown: function(t) {
					var e = t.target,
						n = e.type;
					return 13 === t.keyCode && "textarea" !== e.nodeName.toLowerCase() || 32 === t.keyCode && ("checkbox" === n || "radio" === n) || "select-multiple" === n ? te.call(this, t) : void 0
				},
				beforeactivate: function(t) {
					t = t.target, _.data(t, "_change_data", Z(t))
				}
			},
			setup: function() {
				if ("file" === this.type) return !1;
				for (var t in $) _.event.add(this, t + ".specialChange", $[t]);
				return K.test(this.nodeName)
			},
			teardown: function() {
				return _.event.remove(this, ".specialChange"), K.test(this.nodeName)
			}
		}, $ = _.event.special.change.filters
	}
	b.addEventListener && _.each({
		focus: "focusin",
		blur: "focusout"
	}, function(t, e) {
		function n(t) {
			return t = _.event.fix(t), t.type = e, _.event.handle.call(this, t)
		}
		_.event.special[e] = {
			setup: function() {
				this.addEventListener(t, n, !0)
			},
			teardown: function() {
				this.removeEventListener(t, n, !0)
			}
		}
	}), _.each(["bind", "one"], function(t, n) {
		_.fn[n] = function(t, i, r) {
			if ("object" == typeof t) {
				for (var s in t) this[n](s, i, t[s], r);
				return this
			}
			_.isFunction(i) && (r = i, i = e);
			var a = "one" === n ? _.proxy(r, function(t) {
				return _(this).unbind(t, a), r.apply(this, arguments)
			}) : r;
			if ("unload" === t && "one" !== n) this.one(t, i, r);
			else {
				s = 0;
				for (var o = this.length; o > s; s++) _.event.add(this[s], t, a, i)
			}
			return this
		}
	}), _.fn.extend({
		unbind: function(t, e) {
			if ("object" != typeof t || t.preventDefault) {
				i = 0;
				for (var n = this.length; n > i; i++) _.event.remove(this[i], t, e)
			} else
				for (var i in t) this.unbind(i, t[i]);
			return this
		},
		delegate: function(t, e, n, i) {
			return this.live(e, n, i, t)
		},
		undelegate: function(t, e, n) {
			return 0 === arguments.length ? this.unbind("live") : this.die(e, null, n, t)
		},
		trigger: function(t, e) {
			return this.each(function() {
				_.event.trigger(t, e, this)
			})
		},
		triggerHandler: function(t, e) {
			return this[0] ? (t = _.Event(t), t.preventDefault(), t.stopPropagation(), _.event.trigger(t, e, this[0]), t.result) : void 0
		},
		toggle: function(t) {
			for (var e = arguments, n = 1; n < e.length;) _.proxy(t, e[n++]);
			return this.click(_.proxy(t, function(i) {
				var r = (_.data(this, "lastToggle" + t.guid) || 0) % n;
				return _.data(this, "lastToggle" + t.guid, r + 1), i.preventDefault(), e[r].apply(this, arguments) || !1
			}))
		},
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		}
	});
	var ee = {
		focus: "focusin",
		blur: "focusout",
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	};
	_.each(["live", "die"], function(t, n) {
			_.fn[n] = function(t, i, r, s) {
				var a, o, l, u = 0,
					h = s || this.selector,
					d = s ? this : _(this.context);
				for (_.isFunction(i) && (r = i, i = e), t = (t || "").split(" "); null != (a = t[u++]);) s = Y.exec(a), o = "", s && (o = s[0], a = a.replace(Y, "")), "hover" === a ? t.push("mouseenter" + o, "mouseleave" + o) : (l = a, "focus" === a || "blur" === a ? (t.push(ee[a] + o), a += o) : a = (ee[a] || a) + o, "live" === n ? d.each(function() {
					_.event.add(this, c(a, h), {
						data: i,
						selector: h,
						handler: r,
						origType: a,
						origHandler: r,
						preType: l
					})
				}) : d.unbind(c(a, h), r));
				return this
			}
		}), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(t, e) {
			_.fn[e] = function(t) {
				return t ? this.bind(e, t) : this.trigger(e)
			}, _.attrFn && (_.attrFn[e] = !0)
		}), t.attachEvent && !t.addEventListener && t.attachEvent("onunload", function() {
			for (var t in _.cache)
				if (_.cache[t].handle) try {
					_.event.remove(_.cache[t].handle.elem)
				} catch (e) {}
		}),
		function() {
			function t(e) {
				for (var n, i = "", r = 0; e[r]; r++) n = e[r], 3 === n.nodeType || 4 === n.nodeType ? i += n.nodeValue : 8 !== n.nodeType && (i += t(n.childNodes));
				return i
			}

			function n(t, e, n, i, r, s) {
				r = 0;
				for (var a = i.length; a > r; r++) {
					var o = i[r];
					if (o) {
						o = o[t];
						for (var l = !1; o;) {
							if (o.sizcache === n) {
								l = i[o.sizset];
								break
							}
							if (1 !== o.nodeType || s || (o.sizcache = n, o.sizset = r), o.nodeName.toLowerCase() === e) {
								l = o;
								break
							}
							o = o[t]
						}
						i[r] = l
					}
				}
			}

			function i(t, e, n, i, r, s) {
				r = 0;
				for (var a = i.length; a > r; r++) {
					var o = i[r];
					if (o) {
						o = o[t];
						for (var l = !1; o;) {
							if (o.sizcache === n) {
								l = i[o.sizset];
								break
							}
							if (1 === o.nodeType)
								if (s || (o.sizcache = n, o.sizset = r), "string" != typeof e) {
									if (o === e) {
										l = !0;
										break
									}
								} else if (u.filter(e, [o]).length > 0) {
								l = o;
								break
							}
							o = o[t]
						}
						i[r] = l
					}
				}
			}
			var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
				s = 0,
				a = Object.prototype.toString,
				o = !1,
				l = !0;
			[0, 0].sort(function() {
				return l = !1, 0
			});
			var u = function(t, e, n, i) {
				n = n || [];
				var s = e = e || b;
				if (1 !== e.nodeType && 9 !== e.nodeType) return [];
				if (!t || "string" != typeof t) return n;
				for (var o, l, d, p, g = [], _ = !0, w = v(e), x = t; null !== (r.exec(""), o = r.exec(x));)
					if (x = o[3], g.push(o[1]), o[2]) {
						p = o[3];
						break
					}
				if (g.length > 1 && h.exec(t))
					if (2 === g.length && c.relative[g[0]]) l = y(g[0] + g[1], e);
					else
						for (l = c.relative[g[0]] ? [e] : u(g.shift(), e); g.length;) t = g.shift(), c.relative[t] && (t += g.shift()), l = y(t, l);
				else if (!i && g.length > 1 && 9 === e.nodeType && !w && c.match.ID.test(g[0]) && !c.match.ID.test(g[g.length - 1]) && (o = u.find(g.shift(), e, w), e = o.expr ? u.filter(o.expr, o.set)[0] : o.set[0]), e)
					for (o = i ? {
							expr: g.pop(),
							set: f(i)
						} : u.find(g.pop(), 1 !== g.length || "~" !== g[0] && "+" !== g[0] || !e.parentNode ? e : e.parentNode, w), l = o.expr ? u.filter(o.expr, o.set) : o.set, g.length > 0 ? d = f(l) : _ = !1; g.length;) {
						var S = g.pop();
						o = S, c.relative[S] ? o = g.pop() : S = "", null == o && (o = e), c.relative[S](d, o, w)
					} else d = [];
				if (d || (d = l), d || u.error(S || t), "[object Array]" === a.call(d))
					if (_)
						if (e && 1 === e.nodeType)
							for (t = 0; null != d[t]; t++) d[t] && (d[t] === !0 || 1 === d[t].nodeType && m(e, d[t])) && n.push(l[t]);
						else
							for (t = 0; null != d[t]; t++) d[t] && 1 === d[t].nodeType && n.push(l[t]);
				else n.push.apply(n, d);
				else f(d, n);
				return p && (u(p, s, n, i), u.uniqueSort(n)), n
			};
			u.uniqueSort = function(t) {
				if (g && (o = l, t.sort(g), o))
					for (var e = 1; e < t.length; e++) t[e] === t[e - 1] && t.splice(e--, 1);
				return t
			}, u.matches = function(t, e) {
				return u(t, null, null, e)
			}, u.find = function(t, e, n) {
				var i, r;
				if (!t) return [];
				for (var s = 0, a = c.order.length; a > s; s++) {
					var o = c.order[s];
					if (r = c.leftMatch[o].exec(t)) {
						var l = r[1];
						if (r.splice(1, 1), "\\" !== l.substr(l.length - 1) && (r[1] = (r[1] || "").replace(/\\/g, ""), i = c.find[o](r, e, n), null != i)) {
							t = t.replace(c.match[o], "");
							break
						}
					}
				}
				return i || (i = e.getElementsByTagName("*")), {
					set: i,
					expr: t
				}
			}, u.filter = function(t, n, i, r) {
				for (var s, a, o = t, l = [], h = n, d = n && n[0] && v(n[0]); t && n.length;) {
					for (var f in c.filter)
						if (null != (s = c.leftMatch[f].exec(t)) && s[2]) {
							var p, g, m = c.filter[f];
							if (g = s[1], a = !1, s.splice(1, 1), "\\" !== g.substr(g.length - 1)) {
								if (h === l && (l = []), c.preFilter[f])
									if (s = c.preFilter[f](s, h, i, l, r, d)) {
										if (s === !0) continue
									} else a = p = !0;
								if (s)
									for (var _ = 0; null != (g = h[_]); _++)
										if (g) {
											p = m(g, s, _, h);
											var y = r ^ !!p;
											i && null != p ? y ? a = !0 : h[_] = !1 : y && (l.push(g), a = !0)
										}
								if (p !== e) {
									if (i || (h = l), t = t.replace(c.match[f], ""), !a) return [];
									break
								}
							}
						}
					if (t === o) {
						if (null != a) break;
						u.error(t)
					}
					o = t
				}
				return h
			}, u.error = function(t) {
				throw "Syntax error, unrecognized expression: " + t
			};
			var c = u.selectors = {
					order: ["ID", "NAME", "TAG"],
					match: {
						ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
						CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
						NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
						ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
						TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
						CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
						POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
						PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
					},
					leftMatch: {},
					attrMap: {
						"class": "className",
						"for": "htmlFor"
					},
					attrHandle: {
						href: function(t) {
							return t.getAttribute("href")
						}
					},
					relative: {
						"+": function(t, e) {
							var n = "string" == typeof e,
								i = n && !/\W/.test(e);
							n = n && !i, i && (e = e.toLowerCase()), i = 0;
							for (var r, s = t.length; s > i; i++)
								if (r = t[i]) {
									for (;
										(r = r.previousSibling) && 1 !== r.nodeType;);
									t[i] = n || r && r.nodeName.toLowerCase() === e ? r || !1 : r === e
								}
							n && u.filter(e, t, !0)
						},
						">": function(t, e) {
							var n = "string" == typeof e;
							if (n && !/\W/.test(e)) {
								e = e.toLowerCase();
								for (var i = 0, r = t.length; r > i; i++) {
									var s = t[i];
									s && (n = s.parentNode, t[i] = n.nodeName.toLowerCase() === e ? n : !1)
								}
							} else {
								for (i = 0, r = t.length; r > i; i++)(s = t[i]) && (t[i] = n ? s.parentNode : s.parentNode === e);
								n && u.filter(e, t, !0)
							}
						},
						"": function(t, e, r) {
							var a = s++,
								o = i;
							if ("string" == typeof e && !/\W/.test(e)) {
								var l = e = e.toLowerCase();
								o = n
							}
							o("parentNode", e, a, t, l, r)
						},
						"~": function(t, e, r) {
							var a = s++,
								o = i;
							if ("string" == typeof e && !/\W/.test(e)) {
								var l = e = e.toLowerCase();
								o = n
							}
							o("previousSibling", e, a, t, l, r)
						}
					},
					find: {
						ID: function(t, e, n) {
							return "undefined" == typeof e.getElementById || n ? void 0 : (t = e.getElementById(t[1])) ? [t] : []
						},
						NAME: function(t, e) {
							if ("undefined" != typeof e.getElementsByName) {
								var n = [];
								e = e.getElementsByName(t[1]);
								for (var i = 0, r = e.length; r > i; i++) e[i].getAttribute("name") === t[1] && n.push(e[i]);
								return 0 === n.length ? null : n
							}
						},
						TAG: function(t, e) {
							return e.getElementsByTagName(t[1])
						}
					},
					preFilter: {
						CLASS: function(t, e, n, i, r, s) {
							if (t = " " + t[1].replace(/\\/g, "") + " ", s) return t;
							s = 0;
							for (var a; null != (a = e[s]); s++) a && (r ^ (a.className && (" " + a.className + " ").replace(/[\t\n]/g, " ").indexOf(t) >= 0) ? n || i.push(a) : n && (e[s] = !1));
							return !1
						},
						ID: function(t) {
							return t[1].replace(/\\/g, "")
						},
						TAG: function(t) {
							return t[1].toLowerCase()
						},
						CHILD: function(t) {
							if ("nth" === t[1]) {
								var e = /(-?)(\d*)n((?:\+|-)?\d*)/.exec("even" === t[2] && "2n" || "odd" === t[2] && "2n+1" || !/\D/.test(t[2]) && "0n+" + t[2] || t[2]);
								t[2] = e[1] + (e[2] || 1) - 0, t[3] = e[3] - 0
							}
							return t[0] = s++, t
						},
						ATTR: function(t, e, n, i, r, s) {
							return e = t[1].replace(/\\/g, ""), !s && c.attrMap[e] && (t[1] = c.attrMap[e]), "~=" === t[2] && (t[4] = " " + t[4] + " "), t
						},
						PSEUDO: function(t, e, n, i, s) {
							if ("not" === t[1]) {
								if (!((r.exec(t[3]) || "").length > 1 || /^\w/.test(t[3]))) return t = u.filter(t[3], e, n, !0 ^ s), n || i.push.apply(i, t), !1;
								t[3] = u(t[3], null, null, e)
							} else if (c.match.POS.test(t[0]) || c.match.CHILD.test(t[0])) return !0;
							return t
						},
						POS: function(t) {
							return t.unshift(!0), t
						}
					},
					filters: {
						enabled: function(t) {
							return t.disabled === !1 && "hidden" !== t.type
						},
						disabled: function(t) {
							return t.disabled === !0
						},
						checked: function(t) {
							return t.checked === !0
						},
						selected: function(t) {
							return t.selected === !0
						},
						parent: function(t) {
							return !!t.firstChild
						},
						empty: function(t) {
							return !t.firstChild
						},
						has: function(t, e, n) {
							return !!u(n[3], t).length
						},
						header: function(t) {
							return /h\d/i.test(t.nodeName)
						},
						text: function(t) {
							return "text" === t.type
						},
						radio: function(t) {
							return "radio" === t.type
						},
						checkbox: function(t) {
							return "checkbox" === t.type
						},
						file: function(t) {
							return "file" === t.type
						},
						password: function(t) {
							return "password" === t.type
						},
						submit: function(t) {
							return "submit" === t.type
						},
						image: function(t) {
							return "image" === t.type
						},
						reset: function(t) {
							return "reset" === t.type
						},
						button: function(t) {
							return "button" === t.type || "button" === t.nodeName.toLowerCase()
						},
						input: function(t) {
							return /input|select|textarea|button/i.test(t.nodeName)
						}
					},
					setFilters: {
						first: function(t, e) {
							return 0 === e
						},
						last: function(t, e, n, i) {
							return e === i.length - 1
						},
						even: function(t, e) {
							return e % 2 === 0
						},
						odd: function(t, e) {
							return e % 2 === 1
						},
						lt: function(t, e, n) {
							return e < n[3] - 0
						},
						gt: function(t, e, n) {
							return e > n[3] - 0
						},
						nth: function(t, e, n) {
							return n[3] - 0 === e
						},
						eq: function(t, e, n) {
							return n[3] - 0 === e
						}
					},
					filter: {
						PSEUDO: function(e, n, i, r) {
							var s = n[1],
								a = c.filters[s];
							if (a) return a(e, i, n, r);
							if ("contains" === s) return (e.textContent || e.innerText || t([e]) || "").indexOf(n[3]) >= 0;
							if ("not" === s) {
								for (n = n[3], i = 0, r = n.length; r > i; i++)
									if (n[i] === e) return !1;
								return !0
							}
							u.error("Syntax error, unrecognized expression: " + s)
						},
						CHILD: function(t, e) {
							var n = e[1],
								i = t;
							switch (n) {
								case "only":
								case "first":
									for (; i = i.previousSibling;)
										if (1 === i.nodeType) return !1;
									if ("first" === n) return !0;
									i = t;
								case "last":
									for (; i = i.nextSibling;)
										if (1 === i.nodeType) return !1;
									return !0;
								case "nth":
									n = e[2];
									var r = e[3];
									if (1 === n && 0 === r) return !0;
									e = e[0];
									var s = t.parentNode;
									if (s && (s.sizcache !== e || !t.nodeIndex)) {
										var a = 0;
										for (i = s.firstChild; i; i = i.nextSibling) 1 === i.nodeType && (i.nodeIndex = ++a);
										s.sizcache = e
									}
									return t = t.nodeIndex - r, 0 === n ? 0 === t : t % n === 0 && t / n >= 0
							}
						},
						ID: function(t, e) {
							return 1 === t.nodeType && t.getAttribute("id") === e
						},
						TAG: function(t, e) {
							return "*" === e && 1 === t.nodeType || t.nodeName.toLowerCase() === e
						},
						CLASS: function(t, e) {
							return (" " + (t.className || t.getAttribute("class")) + " ").indexOf(e) > -1
						},
						ATTR: function(t, e) {
							var n = e[1];
							t = c.attrHandle[n] ? c.attrHandle[n](t) : null != t[n] ? t[n] : t.getAttribute(n), n = t + "";
							var i = e[2];
							return e = e[4], null == t ? "!=" === i : "=" === i ? n === e : "*=" === i ? n.indexOf(e) >= 0 : "~=" === i ? (" " + n + " ").indexOf(e) >= 0 : e ? "!=" === i ? n !== e : "^=" === i ? 0 === n.indexOf(e) : "$=" === i ? n.substr(n.length - e.length) === e : "|=" === i ? n === e || n.substr(0, e.length + 1) === e + "-" : !1 : n && t !== !1
						},
						POS: function(t, e, n, i) {
							var r = c.setFilters[e[2]];
							return r ? r(t, n, e, i) : void 0
						}
					}
				},
				h = c.match.POS;
			for (var d in c.match) c.match[d] = new RegExp(c.match[d].source + /(?![^\[]*\])(?![^\(]*\))/.source), c.leftMatch[d] = new RegExp(/(^(?:.|\r|\n)*?)/.source + c.match[d].source.replace(/\\(\d+)/g, function(t, e) {
				return "\\" + (e - 0 + 1)
			}));
			var f = function(t, e) {
				return t = Array.prototype.slice.call(t, 0), e ? (e.push.apply(e, t), e) : t
			};
			try {
				Array.prototype.slice.call(b.documentElement.childNodes, 0)
			} catch (p) {
				f = function(t, e) {
					if (e = e || [], "[object Array]" === a.call(t)) Array.prototype.push.apply(e, t);
					else if ("number" == typeof t.length)
						for (var n = 0, i = t.length; i > n; n++) e.push(t[n]);
					else
						for (n = 0; t[n]; n++) e.push(t[n]);
					return e
				}
			}
			var g;
			b.documentElement.compareDocumentPosition ? g = function(t, e) {
					return t.compareDocumentPosition && e.compareDocumentPosition ? (t = 4 & t.compareDocumentPosition(e) ? -1 : t === e ? 0 : 1, 0 === t && (o = !0), t) : (t == e && (o = !0), t.compareDocumentPosition ? -1 : 1)
				} : "sourceIndex" in b.documentElement ? g = function(t, e) {
					return t.sourceIndex && e.sourceIndex ? (t = t.sourceIndex - e.sourceIndex, 0 === t && (o = !0), t) : (t == e && (o = !0), t.sourceIndex ? -1 : 1)
				} : b.createRange && (g = function(t, e) {
					if (!t.ownerDocument || !e.ownerDocument) return t == e && (o = !0), t.ownerDocument ? -1 : 1;
					var n = t.ownerDocument.createRange(),
						i = e.ownerDocument.createRange();
					return n.setStart(t, 0), n.setEnd(t, 0), i.setStart(e, 0), i.setEnd(e, 0), t = n.compareBoundaryPoints(Range.START_TO_END, i), 0 === t && (o = !0), t
				}),
				function() {
					var t = b.createElement("div"),
						n = "script" + (new Date).getTime();
					t.innerHTML = "<a name='" + n + "'/>";
					var i = b.documentElement;
					i.insertBefore(t, i.firstChild), b.getElementById(n) && (c.find.ID = function(t, n, i) {
						return "undefined" == typeof n.getElementById || i ? void 0 : (n = n.getElementById(t[1])) ? n.id === t[1] || "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id").nodeValue === t[1] ? [n] : e : []
					}, c.filter.ID = function(t, e) {
						var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
						return 1 === t.nodeType && n && n.nodeValue === e
					}), i.removeChild(t), i = t = null
				}(),
				function() {
					var t = b.createElement("div");
					t.appendChild(b.createComment("")), t.getElementsByTagName("*").length > 0 && (c.find.TAG = function(t, e) {
						if (e = e.getElementsByTagName(t[1]), "*" === t[1]) {
							t = [];
							for (var n = 0; e[n]; n++) 1 === e[n].nodeType && t.push(e[n]);
							e = t
						}
						return e
					}), t.innerHTML = "<a href='#'></a>", t.firstChild && "undefined" != typeof t.firstChild.getAttribute && "#" !== t.firstChild.getAttribute("href") && (c.attrHandle.href = function(t) {
						return t.getAttribute("href", 2)
					}), t = null
				}(), b.querySelectorAll && function() {
					var t = u,
						e = b.createElement("div");
					if (e.innerHTML = "<p class='TEST'></p>", !e.querySelectorAll || 0 !== e.querySelectorAll(".TEST").length) {
						u = function(e, n, i, r) {
							if (n = n || b, !r && 9 === n.nodeType && !v(n)) try {
								return f(n.querySelectorAll(e), i)
							} catch (s) {}
							return t(e, n, i, r)
						};
						for (var n in t) u[n] = t[n];
						e = null
					}
				}(),
				function() {
					var t = b.createElement("div");
					t.innerHTML = "<div class='test e'></div><div class='test'></div>", t.getElementsByClassName && 0 !== t.getElementsByClassName("e").length && (t.lastChild.className = "e", 1 !== t.getElementsByClassName("e").length && (c.order.splice(1, 0, "CLASS"), c.find.CLASS = function(t, e, n) {
						return "undefined" == typeof e.getElementsByClassName || n ? void 0 : e.getElementsByClassName(t[1])
					}, t = null))
				}();
			var m = b.compareDocumentPosition ? function(t, e) {
					return !!(16 & t.compareDocumentPosition(e))
				} : function(t, e) {
					return t !== e && (t.contains ? t.contains(e) : !0)
				},
				v = function(t) {
					return (t = (t ? t.ownerDocument || t : 0).documentElement) ? "HTML" !== t.nodeName : !1
				},
				y = function(t, e) {
					var n, i = [],
						r = "";
					for (e = e.nodeType ? [e] : e; n = c.match.PSEUDO.exec(t);) r += n[0], t = t.replace(c.match.PSEUDO, "");
					t = c.relative[t] ? t + "*" : t, n = 0;
					for (var s = e.length; s > n; n++) u(t, e[n], i);
					return u.filter(r, i)
				};
			_.find = u, _.expr = u.selectors, _.expr[":"] = _.expr.filters, _.unique = u.uniqueSort, _.text = t, _.isXMLDoc = v, _.contains = m
		}();
	var ne = /Until$/,
		ie = /^(?:parents|prevUntil|prevAll)/,
		re = /,/;
	A = Array.prototype.slice;
	var se = function(t, e, n) {
		if (_.isFunction(e)) return _.grep(t, function(t, i) {
			return !!e.call(t, i, t) === n
		});
		if (e.nodeType) return _.grep(t, function(t) {
			return t === e === n
		});
		if ("string" == typeof e) {
			var i = _.grep(t, function(t) {
				return 1 === t.nodeType
			});
			if (S.test(e)) return _.filter(e, i, !n);
			e = _.filter(e, i)
		}
		return _.grep(t, function(t) {
			return _.inArray(t, e) >= 0 === n
		})
	};
	_.fn.extend({
		find: function(t) {
			for (var e = this.pushStack("", "find", t), n = 0, i = 0, r = this.length; r > i; i++)
				if (n = e.length, _.find(t, this[i], e), i > 0)
					for (var s = n; s < e.length; s++)
						for (var a = 0; n > a; a++)
							if (e[a] === e[s]) {
								e.splice(s--, 1);
								break
							}
			return e
		},
		has: function(t) {
			var e = _(t);
			return this.filter(function() {
				for (var t = 0, n = e.length; n > t; t++)
					if (_.contains(this, e[t])) return !0
			})
		},
		not: function(t) {
			return this.pushStack(se(this, t, !1), "not", t)
		},
		filter: function(t) {
			return this.pushStack(se(this, t, !0), "filter", t)
		},
		is: function(t) {
			return !!t && _.filter(t, this).length > 0
		},
		closest: function(t, e) {
			if (_.isArray(t)) {
				var n, i, r = [],
					s = this[0],
					a = {};
				if (s && t.length) {
					n = 0;
					for (var o = t.length; o > n; n++) i = t[n], a[i] || (a[i] = _.expr.match.POS.test(i) ? _(i, e || this.context) : i);
					for (; s && s.ownerDocument && s !== e;) {
						for (i in a) n = a[i], (n.jquery ? n.index(s) > -1 : _(s).is(n)) && (r.push({
							selector: i,
							elem: s
						}), delete a[i]);
						s = s.parentNode
					}
				}
				return r
			}
			var l = _.expr.match.POS.test(t) ? _(t, e || this.context) : null;
			return this.map(function(n, i) {
				for (; i && i.ownerDocument && i !== e;) {
					if (l ? l.index(i) > -1 : _(i).is(t)) return i;
					i = i.parentNode
				}
				return null
			})
		},
		index: function(t) {
			return t && "string" != typeof t ? _.inArray(t.jquery ? t[0] : t, this) : _.inArray(this[0], t ? _(t) : this.parent().children())
		},
		add: function(t, e) {
			return t = "string" == typeof t ? _(t, e || this.context) : _.makeArray(t), e = _.merge(this.get(), t), this.pushStack(h(t[0]) || h(e[0]) ? e : _.unique(e))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	}), _.each({
		parent: function(t) {
			return (t = t.parentNode) && 11 !== t.nodeType ? t : null
		},
		parents: function(t) {
			return _.dir(t, "parentNode")
		},
		parentsUntil: function(t, e, n) {
			return _.dir(t, "parentNode", n)
		},
		next: function(t) {
			return _.nth(t, 2, "nextSibling")
		},
		prev: function(t) {
			return _.nth(t, 2, "previousSibling")
		},
		nextAll: function(t) {
			return _.dir(t, "nextSibling")
		},
		prevAll: function(t) {
			return _.dir(t, "previousSibling")
		},
		nextUntil: function(t, e, n) {
			return _.dir(t, "nextSibling", n)
		},
		prevUntil: function(t, e, n) {
			return _.dir(t, "previousSibling", n)
		},
		siblings: function(t) {
			return _.sibling(t.parentNode.firstChild, t)
		},
		children: function(t) {
			return _.sibling(t.firstChild)
		},
		contents: function(t) {
			return _.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : _.makeArray(t.childNodes)
		}
	}, function(t, e) {
		_.fn[t] = function(n, i) {
			var r = _.map(this, e, n);
			return ne.test(t) || (i = n), i && "string" == typeof i && (r = _.filter(i, r)), r = this.length > 1 ? _.unique(r) : r, (this.length > 1 || re.test(i)) && ie.test(t) && (r = r.reverse()), this.pushStack(r, t, A.call(arguments).join(","))
		}
	}), _.extend({
		filter: function(t, e, n) {
			return n && (t = ":not(" + t + ")"), _.find.matches(t, e)
		},
		dir: function(t, n, i) {
			var r = [];
			for (t = t[n]; t && 9 !== t.nodeType && (i === e || 1 !== t.nodeType || !_(t).is(i));) 1 === t.nodeType && r.push(t), t = t[n];
			return r
		},
		nth: function(t, e, n) {
			e = e || 1;
			for (var i = 0; t && (1 !== t.nodeType || ++i !== e); t = t[n]);
			return t
		},
		sibling: function(t, e) {
			for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
			return n
		}
	});
	var ae = / jQuery\d+="(?:\d+|null)"/g,
		oe = /^\s+/,
		le = /(<([\w:]+)[^>]*?)\/>/g,
		ue = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,
		ce = /<([\w:]+)/,
		he = /<tbody/i,
		de = /<|&#?\w+;/,
		fe = /<script|<object|<embed|<option|<style/i,
		pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
		ge = function(t, e, n) {
			return ue.test(n) ? t : e + "></" + n + ">"
		},
		me = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		};
	me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, _.support.htmlSerialize || (me._default = [1, "div<div>", "</div>"]), _.fn.extend({
		text: function(t) {
			return _.isFunction(t) ? this.each(function(e) {
				var n = _(this);
				n.text(t.call(this, e, n.text()))
			}) : "object" != typeof t && t !== e ? this.empty().append((this[0] && this[0].ownerDocument || b).createTextNode(t)) : _.text(this)
		},
		wrapAll: function(t) {
			if (_.isFunction(t)) return this.each(function(e) {
				_(this).wrapAll(t.call(this, e))
			});
			if (this[0]) {
				var e = _(t, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
					for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
					return t
				}).append(this)
			}
			return this
		},
		wrapInner: function(t) {
			return this.each(_.isFunction(t) ? function(e) {
				_(this).wrapInner(t.call(this, e))
			} : function() {
				var e = _(this),
					n = e.contents();
				n.length ? n.wrapAll(t) : e.append(t)
			})
		},
		wrap: function(t) {
			return this.each(function() {
				_(this).wrapAll(t)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				_.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(t) {
				1 === this.nodeType && this.appendChild(t)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(t) {
				1 === this.nodeType && this.insertBefore(t, this.firstChild)
			})
		},
		before: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(t) {
				this.parentNode.insertBefore(t, this)
			});
			if (arguments.length) {
				var t = _(arguments[0]);
				return t.push.apply(t, this.toArray()), this.pushStack(t, "before", arguments)
			}
		},
		after: function() {
			if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(t) {
				this.parentNode.insertBefore(t, this.nextSibling)
			});
			if (arguments.length) {
				var t = this.pushStack(this, "after", arguments);
				return t.push.apply(t, _(arguments[0]).toArray()), t
			}
		},
		remove: function(t, e) {
			for (var n, i = 0; null != (n = this[i]); i++)(!t || _.filter(t, [n]).length) && (e || 1 !== n.nodeType || (_.cleanData(n.getElementsByTagName("*")), _.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var t, e = 0; null != (t = this[e]); e++)
				for (1 === t.nodeType && _.cleanData(t.getElementsByTagName("*")); t.firstChild;) t.removeChild(t.firstChild);
			return this
		},
		clone: function(t) {
			var e = this.map(function() {
				if (_.support.noCloneEvent || _.isXMLDoc(this)) return this.cloneNode(!0);
				var t = this.outerHTML,
					e = this.ownerDocument;
				return t || (t = e.createElement("div"), t.appendChild(this.cloneNode(!0)), t = t.innerHTML), _.clean([t.replace(ae, "").replace(/=([^="'>\s]+\/)>/g, '="$1">').replace(oe, "")], e)[0]
			});
			return t === !0 && (d(this, e), d(this.find("*"), e.find("*"))), e
		},
		html: function(t) {
			if (t === e) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(ae, "") : null;
			if ("string" != typeof t || fe.test(t) || !_.support.leadingWhitespace && oe.test(t) || me[(ce.exec(t) || ["", ""])[1].toLowerCase()]) _.isFunction(t) ? this.each(function(e) {
				var n = _(this),
					i = n.html();
				n.empty().append(function() {
					return t.call(this, e, i)
				})
			}) : this.empty().append(t);
			else {
				t = t.replace(le, ge);
				try {
					for (var n = 0, i = this.length; i > n; n++) 1 === this[n].nodeType && (_.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = t)
				} catch (r) {
					this.empty().append(t)
				}
			}
			return this
		},
		replaceWith: function(t) {
			return this[0] && this[0].parentNode ? _.isFunction(t) ? this.each(function(e) {
				var n = _(this),
					i = n.html();
				n.replaceWith(t.call(this, e, i))
			}) : ("string" != typeof t && (t = _(t).detach()), this.each(function() {
				var e = this.nextSibling,
					n = this.parentNode;
				_(this).remove(), e ? _(e).before(t) : _(n).append(t)
			})) : this.pushStack(_(_.isFunction(t) ? t() : t), "replaceWith", t)
		},
		detach: function(t) {
			return this.remove(t, !0)
		},
		domManip: function(t, n, r) {
			function s(t) {
				return _.nodeName(t, "table") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
			}
			var a, o, l, u = t[0],
				c = [];
			if (!_.support.checkClone && 3 === arguments.length && "string" == typeof u && pe.test(u)) return this.each(function() {
				_(this).domManip(t, n, r, !0)
			});
			if (_.isFunction(u)) return this.each(function(i) {
				var s = _(this);
				t[0] = u.call(this, i, n ? s.html() : e), s.domManip(t, n, r)
			});
			if (this[0]) {
				if (a = u && u.parentNode, a = _.support.parentNode && a && 11 === a.nodeType && a.childNodes.length === this.length ? {
						fragment: a
					} : f(t, this, c), l = a.fragment, o = 1 === l.childNodes.length ? l = l.firstChild : l.firstChild) {
					n = n && _.nodeName(o, "tr");
					for (var h = 0, d = this.length; d > h; h++) r.call(n ? s(this[h], o) : this[h], h > 0 || a.cacheable || this.length > 1 ? l.cloneNode(!0) : l)
				}
				c.length && _.each(c, i)
			}
			return this
		}
	}), _.fragments = {}, _.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(t, e) {
		_.fn[t] = function(n) {
			var i = [];
			n = _(n);
			var r = 1 === this.length && this[0].parentNode;
			if (r && 11 === r.nodeType && 1 === r.childNodes.length && 1 === n.length) return n[e](this[0]), this;
			r = 0;
			for (var s = n.length; s > r; r++) {
				var a = (r > 0 ? this.clone(!0) : this).get();
				_.fn[e].apply(_(n[r]), a), i = i.concat(a)
			}
			return this.pushStack(i, t, n.selector)
		}
	}), _.extend({
		clean: function(t, e, n, i) {
			e = e || b, "undefined" == typeof e.createElement && (e = e.ownerDocument || e[0] && e[0].ownerDocument || b);
			for (var r, s = [], a = 0; null != (r = t[a]); a++)
				if ("number" == typeof r && (r += ""), r) {
					if ("string" != typeof r || de.test(r)) {
						if ("string" == typeof r) {
							r = r.replace(le, ge);
							var o = (ce.exec(r) || ["", ""])[1].toLowerCase(),
								l = me[o] || me._default,
								u = l[0],
								c = e.createElement("div");
							for (c.innerHTML = l[1] + r + l[2]; u--;) c = c.lastChild;
							if (!_.support.tbody)
								for (u = he.test(r), o = "table" !== o || u ? "<table>" !== l[1] || u ? [] : c.childNodes : c.firstChild && c.firstChild.childNodes, l = o.length - 1; l >= 0; --l) _.nodeName(o[l], "tbody") && !o[l].childNodes.length && o[l].parentNode.removeChild(o[l]);
							!_.support.leadingWhitespace && oe.test(r) && c.insertBefore(e.createTextNode(oe.exec(r)[0]), c.firstChild), r = c.childNodes
						}
					} else r = e.createTextNode(r);
					r.nodeType ? s.push(r) : s = _.merge(s, r)
				}
			if (n)
				for (a = 0; s[a]; a++) !i || !_.nodeName(s[a], "script") || s[a].type && "text/javascript" !== s[a].type.toLowerCase() ? (1 === s[a].nodeType && s.splice.apply(s, [a + 1, 0].concat(_.makeArray(s[a].getElementsByTagName("script")))), n.appendChild(s[a])) : i.push(s[a].parentNode ? s[a].parentNode.removeChild(s[a]) : s[a]);
			return s
		},
		cleanData: function(t) {
			for (var e, n, i, r = _.cache, s = _.event.special, a = _.support.deleteExpando, o = 0; null != (i = t[o]); o++)
				if (n = i[_.expando]) {
					if (e = r[n], e.events)
						for (var l in e.events) s[l] ? _.event.remove(i, l) : W(i, l, e.handle);
					a ? delete i[_.expando] : i.removeAttribute && i.removeAttribute(_.expando), delete r[n]
				}
		}
	});
	var ve = /z-?index|font-?weight|opacity|zoom|line-?height/i,
		_e = /alpha\([^)]*\)/,
		ye = /opacity=([^)]*)/,
		we = /float/i,
		be = /-([a-z])/gi,
		xe = /([A-Z])/g,
		Se = /^-?\d+(?:px)?$/i,
		Te = /^-?\d/,
		Ee = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Le = ["Left", "Right"],
		je = ["Top", "Bottom"],
		Pe = b.defaultView && b.defaultView.getComputedStyle,
		Ie = _.support.cssFloat ? "cssFloat" : "styleFloat",
		Ce = function(t, e) {
			return e.toUpperCase()
		};
	_.fn.css = function(t, n) {
		return r(this, t, n, !0, function(t, n, i) {
			return i === e ? _.curCSS(t, n) : ("number" != typeof i || ve.test(n) || (i += "px"), void _.style(t, n, i))
		})
	}, _.extend({
		style: function(t, n, i) {
			if (!t || 3 === t.nodeType || 8 === t.nodeType) return e;
			("width" === n || "height" === n) && parseFloat(i) < 0 && (i = e);
			var r = t.style || t,
				s = i !== e;
			return _.support.opacity || "opacity" !== n ? (we.test(n) && (n = Ie), n = n.replace(be, Ce), s && (r[n] = i), r[n]) : (s && (r.zoom = 1, n = parseInt(i, 10) + "" == "NaN" ? "" : "alpha(opacity=" + 100 * i + ")", t = r.filter || _.curCSS(t, "filter") || "", r.filter = _e.test(t) ? t.replace(_e, n) : n), r.filter && r.filter.indexOf("opacity=") >= 0 ? parseFloat(ye.exec(r.filter)[1]) / 100 + "" : "")
		},
		css: function(t, e, n, i) {
			function r() {
				s = "width" === e ? t.offsetWidth : t.offsetHeight, "border" !== i && _.each(a, function() {
					i || (s -= parseFloat(_.curCSS(t, "padding" + this, !0)) || 0), "margin" === i ? s += parseFloat(_.curCSS(t, "margin" + this, !0)) || 0 : s -= parseFloat(_.curCSS(t, "border" + this + "Width", !0)) || 0
				})
			}
			if ("width" === e || "height" === e) {
				var s, a = "width" === e ? Le : je;
				return 0 !== t.offsetWidth ? r() : _.swap(t, Ee, r), Math.max(0, Math.round(s))
			}
			return _.curCSS(t, e, n)
		},
		curCSS: function(t, e, n) {
			var i, r = t.style;
			if (!_.support.opacity && "opacity" === e && t.currentStyle) return i = ye.test(t.currentStyle.filter || "") ? parseFloat(RegExp.$1) / 100 + "" : "", "" === i ? "1" : i;
			if (we.test(e) && (e = Ie), !n && r && r[e]) i = r[e];
			else if (Pe) {
				if (we.test(e) && (e = "float"), e = e.replace(xe, "-$1").toLowerCase(), r = t.ownerDocument.defaultView, !r) return null;
				(t = r.getComputedStyle(t, null)) && (i = t.getPropertyValue(e)), "opacity" === e && "" === i && (i = "1")
			} else if (t.currentStyle && (n = e.replace(be, Ce), i = t.currentStyle[e] || t.currentStyle[n], !Se.test(i) && Te.test(i))) {
				e = r.left;
				var s = t.runtimeStyle.left;
				t.runtimeStyle.left = t.currentStyle.left, r.left = "fontSize" === n ? "1em" : i || 0, i = r.pixelLeft + "px", r.left = e, t.runtimeStyle.left = s
			}
			return i
		},
		swap: function(t, e, n) {
			var i = {};
			for (var r in e) i[r] = t.style[r], t.style[r] = e[r];
			n.call(t);
			for (r in e) t.style[r] = i[r]
		}
	}), _.expr && _.expr.filters && (_.expr.filters.hidden = function(t) {
		var e = t.offsetWidth,
			n = t.offsetHeight,
			i = "tr" === t.nodeName.toLowerCase();
		return 0 !== e || 0 !== n || i ? e > 0 && n > 0 && !i ? !1 : "none" === _.curCSS(t, "display") : !0
	}, _.expr.filters.visible = function(t) {
		return !_.expr.filters.hidden(t)
	});
	var Ne = s(),
		Oe = /<script(.|\s)*?\/script>/gi,
		Ae = /select|textarea/i,
		De = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,
		Me = /=\?(&|$)/,
		ke = /\?/,
		Re = /(\?|&)_=.*?(&|$)/,
		Fe = /^(\w+:)?\/\/([^\/?#]+)/,
		Be = /%20/g,
		He = _.fn.load;
	_.fn.extend({
		load: function(t, e, n) {
			if ("string" != typeof t) return He.call(this, t);
			if (!this.length) return this;
			var i = t.indexOf(" ");
			if (i >= 0) {
				var r = t.slice(i, t.length);
				t = t.slice(0, i)
			}
			i = "GET", e && (_.isFunction(e) ? (n = e, e = null) : "object" == typeof e && (e = _.param(e, _.ajaxSettings.traditional), i = "POST"));
			var s = this;
			return _.ajax({
				url: t,
				type: i,
				dataType: "html",
				data: e,
				complete: function(t, e) {
					("success" === e || "notmodified" === e) && s.html(r ? _("<div />").append(t.responseText.replace(Oe, "")).find(r) : t.responseText), n && s.each(n, [t.responseText, e, t])
				}
			}), this
		},
		serialize: function() {
			return _.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? _.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || Ae.test(this.nodeName) || De.test(this.type))
			}).map(function(t, e) {
				return t = _(this).val(), null == t ? null : _.isArray(t) ? _.map(t, function(t) {
					return {
						name: e.name,
						value: t
					}
				}) : {
					name: e.name,
					value: t
				}
			}).get()
		}
	}), _.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(t, e) {
		_.fn[e] = function(t) {
			return this.bind(e, t)
		}
	}), _.extend({
		get: function(t, e, n, i) {
			return _.isFunction(e) && (i = i || n, n = e, e = null), _.ajax({
				type: "GET",
				url: t,
				data: e,
				success: n,
				dataType: i
			})
		},
		getScript: function(t, e) {
			return _.get(t, null, e, "script")
		},
		getJSON: function(t, e, n) {
			return _.get(t, e, n, "json")
		},
		post: function(t, e, n, i) {
			return _.isFunction(e) && (i = i || n, n = e, e = {}), _.ajax({
				type: "POST",
				url: t,
				data: e,
				success: n,
				dataType: i
			})
		},
		ajaxSetup: function(t) {
			_.extend(_.ajaxSettings, t)
		},
		ajaxSettings: {
			url: location.href,
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: !0,
			async: !0,
			xhr: !t.XMLHttpRequest || "file:" === t.location.protocol && t.ActiveXObject ? function() {
				try {
					return new t.ActiveXObject("Microsoft.XMLHTTP")
				} catch (e) {}
			} : function() {
				return new t.XMLHttpRequest
			},
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				script: "text/javascript, application/javascript",
				json: "application/json, text/javascript",
				text: "text/plain",
				_default: "*/*"
			}
		},
		lastModified: {},
		etag: {},
		ajax: function(n) {
			function i() {
				c.success && c.success.call(h, u, l, w), c.global && a("ajaxSuccess", [w, c])
			}

			function r() {
				c.complete && c.complete.call(h, w, l), c.global && a("ajaxComplete", [w, c]), c.global && !--_.active && _.event.trigger("ajaxStop")
			}

			function a(t, e) {
				(c.context ? _(c.context) : _.event).trigger(t, e)
			}
			var o, l, u, c = _.extend(!0, {}, _.ajaxSettings, n),
				h = n && n.context || c,
				d = c.type.toUpperCase();
			if (c.data && c.processData && "string" != typeof c.data && (c.data = _.param(c.data, c.traditional)), "jsonp" === c.dataType && ("GET" === d ? Me.test(c.url) || (c.url += (ke.test(c.url) ? "&" : "?") + (c.jsonp || "callback") + "=?") : c.data && Me.test(c.data) || (c.data = (c.data ? c.data + "&" : "") + (c.jsonp || "callback") + "=?"), c.dataType = "json"), "json" === c.dataType && (c.data && Me.test(c.data) || Me.test(c.url)) && (o = c.jsonpCallback || "jsonp" + Ne++, c.data && (c.data = (c.data + "").replace(Me, "=" + o + "$1")), c.url = c.url.replace(Me, "=" + o + "$1"), c.dataType = "script", t[o] = t[o] || function(n) {
					u = n, i(), r(), t[o] = e;
					try {
						delete t[o]
					} catch (s) {}
					g && g.removeChild(m)
				}), "script" === c.dataType && null === c.cache && (c.cache = !1), c.cache === !1 && "GET" === d) {
				var f = s(),
					p = c.url.replace(Re, "$1_=" + f + "$2");
				c.url = p + (p === c.url ? (ke.test(c.url) ? "&" : "?") + "_=" + f : "")
			}
			if (c.data && "GET" === d && (c.url += (ke.test(c.url) ? "&" : "?") + c.data), c.global && !_.active++ && _.event.trigger("ajaxStart"), f = (f = Fe.exec(c.url)) && (f[1] && f[1] !== location.protocol || f[2] !== location.host), "script" === c.dataType && "GET" === d && f) {
				var g = b.getElementsByTagName("head")[0] || b.documentElement,
					m = b.createElement("script");
				if (m.src = c.url, c.scriptCharset && (m.charset = c.scriptCharset), !o) {
					var v = !1;
					m.onload = m.onreadystatechange = function() {
						v || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (v = !0, i(), r(), m.onload = m.onreadystatechange = null, g && m.parentNode && g.removeChild(m))
					}
				}
				return g.insertBefore(m, g.firstChild), e
			}
			var y = !1,
				w = c.xhr();
			if (w) {
				c.username ? w.open(d, c.url, c.async, c.username, c.password) : w.open(d, c.url, c.async);
				try {
					(c.data || n && n.contentType) && w.setRequestHeader("Content-Type", c.contentType), c.ifModified && (_.lastModified[c.url] && w.setRequestHeader("If-Modified-Since", _.lastModified[c.url]), _.etag[c.url] && w.setRequestHeader("If-None-Match", _.etag[c.url])), f || w.setRequestHeader("X-Requested-With", "XMLHttpRequest"), w.setRequestHeader("Accept", c.dataType && c.accepts[c.dataType] ? c.accepts[c.dataType] + ", */*" : c.accepts._default)
				} catch (x) {}
				if (c.beforeSend && c.beforeSend.call(h, w, c) === !1) return c.global && !--_.active && _.event.trigger("ajaxStop"), w.abort(), !1;
				c.global && a("ajaxSend", [w, c]);
				var S = w.onreadystatechange = function(t) {
					if (w && 0 !== w.readyState && "abort" !== t) {
						if (!y && w && (4 === w.readyState || "timeout" === t)) {
							y = !0, w.onreadystatechange = _.noop, l = "timeout" === t ? "timeout" : _.httpSuccess(w) ? c.ifModified && _.httpNotModified(w, c.url) ? "notmodified" : "success" : "error";
							var e;
							if ("success" === l) try {
								u = _.httpData(w, c.dataType, c)
							} catch (n) {
								l = "parsererror", e = n
							}
							"success" === l || "notmodified" === l ? o || i() : _.handleError(c, w, l, e), r(), "timeout" === t && w.abort(), c.async && (w = null)
						}
					} else y || r(), y = !0, w && (w.onreadystatechange = _.noop)
				};
				try {
					var T = w.abort;
					w.abort = function() {
						w && T.call(w), S("abort")
					}
				} catch (E) {}
				c.async && c.timeout > 0 && setTimeout(function() {
					w && !y && S("timeout")
				}, c.timeout);
				try {
					w.send("POST" === d || "PUT" === d || "DELETE" === d ? c.data : null)
				} catch (L) {
					_.handleError(c, w, null, L), r()
				}
				return c.async || S(), w
			}
		},
		handleError: function(t, e, n, i) {
			t.error && t.error.call(t.context || t, e, n, i), t.global && (t.context ? _(t.context) : _.event).trigger("ajaxError", [e, t, i])
		},
		active: 0,
		httpSuccess: function(t) {
			try {
				return !t.status && "file:" === location.protocol || t.status >= 200 && t.status < 300 || 304 === t.status || 1223 === t.status || 0 === t.status
			} catch (e) {}
			return !1
		},
		httpNotModified: function(t, e) {
			var n = t.getResponseHeader("Last-Modified"),
				i = t.getResponseHeader("Etag");
			return n && (_.lastModified[e] = n), i && (_.etag[e] = i), 304 === t.status || 0 === t.status
		},
		httpData: function(t, e, n) {
			var i = t.getResponseHeader("content-type") || "",
				r = "xml" === e || !e && i.indexOf("xml") >= 0;
			return t = r ? t.responseXML : t.responseText, r && "parsererror" === t.documentElement.nodeName && _.error("parsererror"), n && n.dataFilter && (t = n.dataFilter(t, e)), "string" == typeof t && ("json" === e || !e && i.indexOf("json") >= 0 ? t = _.parseJSON(t) : ("script" === e || !e && i.indexOf("javascript") >= 0) && _.globalEval(t)), t
		},
		param: function(t, n) {
			function i(t, e) {
				_.isArray(e) ? _.each(e, function(e, s) {
					n || /\[\]$/.test(t) ? r(t, s) : i(t + "[" + ("object" == typeof s || _.isArray(s) ? e : "") + "]", s)
				}) : n || null == e || "object" != typeof e ? r(t, e) : _.each(e, function(e, n) {
					i(t + "[" + e + "]", n)
				})
			}

			function r(t, e) {
				e = _.isFunction(e) ? e() : e, s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
			}
			var s = [];
			if (n === e && (n = _.ajaxSettings.traditional), _.isArray(t) || t.jquery) _.each(t, function() {
				r(this.name, this.value)
			});
			else
				for (var a in t) i(a, t[a]);
			return s.join("&").replace(Be, "+")
		}
	});
	var ze, Ge = {},
		Xe = /toggle|show|hide/,
		qe = /^([+-]=)?([\d+-.]+)(.*)$/,
		Ue = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		];
	_.fn.extend({
		show: function(t, e) {
			if (t || 0 === t) return this.animate(p("show", 3), t, e);
			for (t = 0, e = this.length; e > t; t++) {
				var n = _.data(this[t], "olddisplay");
				if (this[t].style.display = n || "", "none" === _.css(this[t], "display")) {
					n = this[t].nodeName;
					var i;
					if (Ge[n]) i = Ge[n];
					else {
						var r = _("<" + n + " />").appendTo("body");
						i = r.css("display"), "none" === i && (i = "block"), r.remove(), Ge[n] = i
					}
					_.data(this[t], "olddisplay", i)
				}
			}
			for (t = 0, e = this.length; e > t; t++) this[t].style.display = _.data(this[t], "olddisplay") || "";
			return this
		},
		hide: function(t, e) {
			if (t || 0 === t) return this.animate(p("hide", 3), t, e);
			for (t = 0, e = this.length; e > t; t++) {
				var n = _.data(this[t], "olddisplay");
				!n && "none" !== n && _.data(this[t], "olddisplay", _.css(this[t], "display"))
			}
			for (t = 0, e = this.length; e > t; t++) this[t].style.display = "none";
			return this
		},
		_toggle: _.fn.toggle,
		toggle: function(t, e) {
			var n = "boolean" == typeof t;
			return _.isFunction(t) && _.isFunction(e) ? this._toggle.apply(this, arguments) : null == t || n ? this.each(function() {
				var e = n ? t : _(this).is(":hidden");
				_(this)[e ? "show" : "hide"]()
			}) : this.animate(p("toggle", 3), t, e), this
		},
		fadeTo: function(t, e, n) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: e
			}, t, n)
		},
		animate: function(t, e, n, i) {
			var r = _.speed(e, n, i);
			return _.isEmptyObject(t) ? this.each(r.complete) : this[r.queue === !1 ? "each" : "queue"](function() {
				var e, n = _.extend({}, r),
					i = 1 === this.nodeType && _(this).is(":hidden"),
					s = this;
				for (e in t) {
					var a = e.replace(be, Ce);
					if (e !== a && (t[a] = t[e], delete t[e], e = a), "hide" === t[e] && i || "show" === t[e] && !i) return n.complete.call(this);
					"height" !== e && "width" !== e || !this.style || (n.display = _.css(this, "display"), n.overflow = this.style.overflow), _.isArray(t[e]) && ((n.specialEasing = n.specialEasing || {})[e] = t[e][1], t[e] = t[e][0])
				}
				return null != n.overflow && (this.style.overflow = "hidden"), n.curAnim = _.extend({}, t), _.each(t, function(e, r) {
					var a = new _.fx(s, n, e);
					if (Xe.test(r)) a["toggle" === r ? i ? "show" : "hide" : r](t);
					else {
						var o = qe.exec(r),
							l = a.cur(!0) || 0;
						if (o) {
							r = parseFloat(o[2]);
							var u = o[3] || "px";
							"px" !== u && (s.style[e] = (r || 1) + u, l = (r || 1) / a.cur(!0) * l, s.style[e] = l + u), o[1] && (r = ("-=" === o[1] ? -1 : 1) * r + l), a.custom(l, r, u)
						} else a.custom(l, r, "")
					}
				}), !0
			})
		},
		stop: function(t, e) {
			var n = _.timers;
			return t && this.queue([]), this.each(function() {
				for (var t = n.length - 1; t >= 0; t--) n[t].elem === this && (e && n[t](!0), n.splice(t, 1))
			}), e || this.dequeue(), this
		}
	}), _.each({
		slideDown: p("show", 1),
		slideUp: p("hide", 1),
		slideToggle: p("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		}
	}, function(t, e) {
		_.fn[t] = function(t, n) {
			return this.animate(e, t, n)
		}
	}), _.extend({
		speed: function(t, e, n) {
			var i = t && "object" == typeof t ? t : {
				complete: n || !n && e || _.isFunction(t) && t,
				duration: t,
				easing: n && e || e && !_.isFunction(e) && e
			};
			return i.duration = _.fx.off ? 0 : "number" == typeof i.duration ? i.duration : _.fx.speeds[i.duration] || _.fx.speeds._default, i.old = i.complete, i.complete = function() {
				i.queue !== !1 && _(this).dequeue(), _.isFunction(i.old) && i.old.call(this)
			}, i
		},
		easing: {
			linear: function(t, e, n, i) {
				return n + i * t
			},
			swing: function(t, e, n, i) {
				return (-Math.cos(t * Math.PI) / 2 + .5) * i + n
			}
		},
		timers: [],
		fx: function(t, e, n) {
			this.options = e, this.elem = t, this.prop = n, e.orig || (e.orig = {})
		}
	}), _.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this), (_.fx.step[this.prop] || _.fx.step._default)(this), "height" !== this.prop && "width" !== this.prop || !this.elem.style || (this.elem.style.display = "block")
		},
		cur: function(t) {
			return null == this.elem[this.prop] || this.elem.style && null != this.elem.style[this.prop] ? (t = parseFloat(_.css(this.elem, this.prop, t))) && t > -1e4 ? t : parseFloat(_.curCSS(this.elem, this.prop)) || 0 : this.elem[this.prop]
		},
		custom: function(t, e, n) {
			function i(t) {
				return r.step(t)
			}
			this.startTime = s(), this.start = t, this.end = e, this.unit = n || this.unit || "px", this.now = this.start, this.pos = this.state = 0;
			var r = this;
			i.elem = this.elem, i() && _.timers.push(i) && !ze && (ze = setInterval(_.fx.tick, 13))
		},
		show: function() {
			this.options.orig[this.prop] = _.style(this.elem, this.prop), this.options.show = !0, this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), _(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = _.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
		},
		step: function(t) {
			var e = s(),
				n = !0;
			if (t || e >= this.options.duration + this.startTime) {
				this.now = this.end, this.pos = this.state = 1, this.update(), this.options.curAnim[this.prop] = !0;
				for (var i in this.options.curAnim) this.options.curAnim[i] !== !0 && (n = !1);
				if (n) {
					if (null != this.options.display && (this.elem.style.overflow = this.options.overflow, t = _.data(this.elem, "olddisplay"), this.elem.style.display = t ? t : this.options.display, "none" === _.css(this.elem, "display") && (this.elem.style.display = "block")), this.options.hide && _(this.elem).hide(), this.options.hide || this.options.show)
						for (var r in this.options.curAnim) _.style(this.elem, r, this.options.orig[r]);
					this.options.complete.call(this.elem)
				}
				return !1
			}
			return r = e - this.startTime, this.state = r / this.options.duration, t = this.options.easing || (_.easing.swing ? "swing" : "linear"), this.pos = _.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || t](this.state, r, 0, 1, this.options.duration), this.now = this.start + (this.end - this.start) * this.pos, this.update(), !0
		}
	}, _.extend(_.fx, {
		tick: function() {
			for (var t = _.timers, e = 0; e < t.length; e++) t[e]() || t.splice(e--, 1);
			t.length || _.fx.stop()
		},
		stop: function() {
			clearInterval(ze), ze = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(t) {
				_.style(t.elem, "opacity", t.now)
			},
			_default: function(t) {
				t.elem.style && null != t.elem.style[t.prop] ? t.elem.style[t.prop] = ("width" === t.prop || "height" === t.prop ? Math.max(0, t.now) : t.now) + t.unit : t.elem[t.prop] = t.now
			}
		}
	}), _.expr && _.expr.filters && (_.expr.filters.animated = function(t) {
		return _.grep(_.timers, function(e) {
			return t === e.elem
		}).length
	}), _.fn.offset = "getBoundingClientRect" in b.documentElement ? function(t) {
		var e = this[0];
		if (t) return this.each(function(e) {
			_.offset.setOffset(this, t, e)
		});
		if (!e || !e.ownerDocument) return null;
		if (e === e.ownerDocument.body) return _.offset.bodyOffset(e);
		var n = e.getBoundingClientRect(),
			i = e.ownerDocument;
		return e = i.body, i = i.documentElement, {
			top: n.top + (self.pageYOffset || _.support.boxModel && i.scrollTop || e.scrollTop) - (i.clientTop || e.clientTop || 0),
			left: n.left + (self.pageXOffset || _.support.boxModel && i.scrollLeft || e.scrollLeft) - (i.clientLeft || e.clientLeft || 0)
		}
	} : function(t) {
		var e = this[0];
		if (t) return this.each(function(e) {
			_.offset.setOffset(this, t, e)
		});
		if (!e || !e.ownerDocument) return null;
		if (e === e.ownerDocument.body) return _.offset.bodyOffset(e);
		_.offset.initialize();
		var n, i = e.offsetParent,
			r = e,
			s = e.ownerDocument,
			a = s.documentElement,
			o = s.body;
		r = (s = s.defaultView) ? s.getComputedStyle(e, null) : e.currentStyle;
		for (var l = e.offsetTop, u = e.offsetLeft;
			(e = e.parentNode) && e !== o && e !== a && (!_.offset.supportsFixedPosition || "fixed" !== r.position);) n = s ? s.getComputedStyle(e, null) : e.currentStyle, l -= e.scrollTop, u -= e.scrollLeft, e === i && (l += e.offsetTop, u += e.offsetLeft, !_.offset.doesNotAddBorder || _.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(e.nodeName) || (l += parseFloat(n.borderTopWidth) || 0, u += parseFloat(n.borderLeftWidth) || 0), r = i, i = e.offsetParent), _.offset.subtractsBorderForOverflowNotVisible && "visible" !== n.overflow && (l += parseFloat(n.borderTopWidth) || 0, u += parseFloat(n.borderLeftWidth) || 0), r = n;
		return ("relative" === r.position || "static" === r.position) && (l += o.offsetTop, u += o.offsetLeft), _.offset.supportsFixedPosition && "fixed" === r.position && (l += Math.max(a.scrollTop, o.scrollTop), u += Math.max(a.scrollLeft, o.scrollLeft)), {
			top: l,
			left: u
		}
	}, _.offset = {
		initialize: function() {
			var t, e, n, i = b.body,
				r = b.createElement("div"),
				s = parseFloat(_.curCSS(i, "marginTop", !0)) || 0;
			_.extend(r.style, {
				position: "absolute",
				top: 0,
				left: 0,
				margin: 0,
				border: 0,
				width: "1px",
				height: "1px",
				visibility: "hidden"
			}), r.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", i.insertBefore(r, i.firstChild), t = r.firstChild, e = t.firstChild, n = t.nextSibling.firstChild.firstChild, this.doesNotAddBorder = 5 !== e.offsetTop, this.doesAddBorderForTableAndCells = 5 === n.offsetTop, e.style.position = "fixed", e.style.top = "20px", this.supportsFixedPosition = 20 === e.offsetTop || 15 === e.offsetTop, e.style.position = e.style.top = "", t.style.overflow = "hidden", t.style.position = "relative", this.subtractsBorderForOverflowNotVisible = -5 === e.offsetTop, this.doesNotIncludeMarginInBodyOffset = i.offsetTop !== s, i.removeChild(r), _.offset.initialize = _.noop
		},
		bodyOffset: function(t) {
			var e = t.offsetTop,
				n = t.offsetLeft;
			return _.offset.initialize(), _.offset.doesNotIncludeMarginInBodyOffset && (e += parseFloat(_.curCSS(t, "marginTop", !0)) || 0, n += parseFloat(_.curCSS(t, "marginLeft", !0)) || 0), {
				top: e,
				left: n
			}
		},
		setOffset: function(t, e, n) {
			/static/.test(_.curCSS(t, "position")) && (t.style.position = "relative");
			var i = _(t),
				r = i.offset(),
				s = parseInt(_.curCSS(t, "top", !0), 10) || 0,
				a = parseInt(_.curCSS(t, "left", !0), 10) || 0;
			_.isFunction(e) && (e = e.call(t, n, r)), n = {
				top: e.top - r.top + s,
				left: e.left - r.left + a
			}, "using" in e ? e.using.call(t, n) : i.css(n)
		}
	}, _.fn.extend({
		position: function() {
			if (!this[0]) return null;
			var t = this[0],
				e = this.offsetParent(),
				n = this.offset(),
				i = /^body|html$/i.test(e[0].nodeName) ? {
					top: 0,
					left: 0
				} : e.offset();
			return n.top -= parseFloat(_.curCSS(t, "marginTop", !0)) || 0, n.left -= parseFloat(_.curCSS(t, "marginLeft", !0)) || 0, i.top += parseFloat(_.curCSS(e[0], "borderTopWidth", !0)) || 0, i.left += parseFloat(_.curCSS(e[0], "borderLeftWidth", !0)) || 0, {
				top: n.top - i.top,
				left: n.left - i.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent || b.body; t && !/^body|html$/i.test(t.nodeName) && "static" === _.css(t, "position");) t = t.offsetParent;
				return t
			})
		}
	}), _.each(["Left", "Top"], function(t, n) {
		var i = "scroll" + n;
		_.fn[i] = function(n) {
			var r, s = this[0];
			return s ? n !== e ? this.each(function() {
				(r = g(this)) ? r.scrollTo(t ? _(r).scrollLeft() : n, t ? n : _(r).scrollTop()): this[i] = n
			}) : (r = g(s)) ? "pageXOffset" in r ? r[t ? "pageYOffset" : "pageXOffset"] : _.support.boxModel && r.document.documentElement[i] || r.document.body[i] : s[i] : null
		}
	}), _.each(["Height", "Width"], function(t, n) {
		var i = n.toLowerCase();
		_.fn["inner" + n] = function() {
			return this[0] ? _.css(this[0], i, !1, "padding") : null
		}, _.fn["outer" + n] = function(t) {
			return this[0] ? _.css(this[0], i, !1, t ? "margin" : "border") : null
		}, _.fn[i] = function(t) {
			var r = this[0];
			return r ? _.isFunction(t) ? this.each(function(e) {
				var n = _(this);
				n[i](t.call(this, e, n[i]()))
			}) : "scrollTo" in r && r.document ? "CSS1Compat" === r.document.compatMode && r.document.documentElement["client" + n] || r.document.body["client" + n] : 9 === r.nodeType ? Math.max(r.documentElement["client" + n], r.body["scroll" + n], r.documentElement["scroll" + n], r.body["offset" + n], r.documentElement["offset" + n]) : t === e ? _.css(r, i) : this.css(i, "string" == typeof t ? t : t + "px") : null == t ? null : this
		}
	}), t.jQuery = t.$ = _
}(window), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e, n) {
				this.initialize(t, e, n)
			},
			e = t.prototype;
		e.type = null, e.target = null, e.currentTarget = null, e.eventPhase = 0, e.bubbles = !1, e.cancelable = !1, e.timeStamp = 0, e.defaultPrevented = !1, e.propagationStopped = !1, e.immediatePropagationStopped = !1, e.removed = !1, e.initialize = function(t, e, n) {
			this.type = t, this.bubbles = e, this.cancelable = n, this.timeStamp = (new Date).getTime()
		}, e.preventDefault = function() {
			this.defaultPrevented = !0
		}, e.stopPropagation = function() {
			this.propagationStopped = !0
		}, e.stopImmediatePropagation = function() {
			this.immediatePropagationStopped = this.propagationStopped = !0
		}, e.remove = function() {
			this.removed = !0
		}, e.clone = function() {
			return new t(this.type, this.bubbles, this.cancelable)
		}, e.toString = function() {
			return "[Event (type=" + this.type + ")]"
		}, createjs.Event = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function() {},
			e = t.prototype;
		t.initialize = function(t) {
			t.addEventListener = e.addEventListener, t.on = e.on, t.removeEventListener = t.off = e.removeEventListener, t.removeAllEventListeners = e.removeAllEventListeners, t.hasEventListener = e.hasEventListener, t.dispatchEvent = e.dispatchEvent, t._dispatchEvent = e._dispatchEvent
		}, e._listeners = null, e._captureListeners = null, e.initialize = function() {}, e.addEventListener = function(t, e, n) {
			var i;
			i = n ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
			var r = i[t];
			return r && this.removeEventListener(t, e, n), r = i[t], r ? r.push(e) : i[t] = [e], e
		}, e.on = function(t, e, n, i, r, s) {
			return e.handleEvent && (n = n || e, e = e.handleEvent), n = n || this, this.addEventListener(t, function(t) {
				e.call(n, t, r), i && t.remove()
			}, s)
		}, e.removeEventListener = function(t, e, n) {
			var i = n ? this._captureListeners : this._listeners;
			if (i) {
				var r = i[t];
				if (r)
					for (var s = 0, a = r.length; a > s; s++)
						if (r[s] == e) {
							1 == a ? delete i[t] : r.splice(s, 1);
							break
						}
			}
		}, e.off = e.removeEventListener, e.removeAllEventListeners = function(t) {
			t ? (this._listeners && delete this._listeners[t], this._captureListeners && delete this._captureListeners[t]) : this._listeners = this._captureListeners = null
		}, e.dispatchEvent = function(t, e) {
			if ("string" == typeof t) {
				var n = this._listeners;
				if (!n || !n[t]) return !1;
				t = new createjs.Event(t)
			}
			if (t.target = e || this, t.bubbles && this.parent) {
				for (var i = this, r = [i]; i.parent;) r.push(i = i.parent);
				var s, a = r.length;
				for (s = a - 1; s >= 0 && !t.propagationStopped; s--) r[s]._dispatchEvent(t, 1 + (0 == s));
				for (s = 1; a > s && !t.propagationStopped; s++) r[s]._dispatchEvent(t, 3)
			} else this._dispatchEvent(t, 2);
			return t.defaultPrevented
		}, e.hasEventListener = function(t) {
			var e = this._listeners,
				n = this._captureListeners;
			return !!(e && e[t] || n && n[t])
		}, e.toString = function() {
			return "[EventDispatcher]"
		}, e._dispatchEvent = function(t, e) {
			var n, i = 1 == e ? this._captureListeners : this._listeners;
			if (t && i) {
				var r = i[t.type];
				if (!r || !(n = r.length)) return;
				t.currentTarget = this, t.eventPhase = e, t.removed = !1, r = r.slice();
				for (var s = 0; n > s && !t.immediatePropagationStopped; s++) {
					var a = r[s];
					a.handleEvent ? a.handleEvent(t) : a(t), t.removed && (this.off(t.type, a, 1 == e), t.removed = !1)
				}
			}
		}, createjs.EventDispatcher = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		createjs.indexOf = function(t, e) {
			for (var n = 0, i = t.length; i > n; n++)
				if (e === t[n]) return n;
			return -1
		}
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function() {
			throw "UID cannot be instantiated"
		};
		t._nextID = 0, t.get = function() {
			return t._nextID++
		}, createjs.UID = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function() {
			throw "Ticker cannot be instantiated."
		};
		t.RAF_SYNCHED = "synched", t.RAF = "raf", t.TIMEOUT = "timeout", t.useRAF = !1, t.timingMode = null, t.maxDelta = 0, t.removeEventListener = null, t.removeAllEventListeners = null, t.dispatchEvent = null, t.hasEventListener = null, t._listeners = null, createjs.EventDispatcher.initialize(t), t._addEventListener = t.addEventListener, t.addEventListener = function() {
			!t._inited && t.init(), t._addEventListener.apply(t, arguments)
		}, t._paused = !1, t._inited = !1, t._startTime = 0, t._pausedTime = 0, t._ticks = 0, t._pausedTicks = 0, t._interval = 50, t._lastTime = 0, t._times = null, t._tickTimes = null, t._timerId = null, t._raf = !0, t.init = function() {
			t._inited || (t._inited = !0, t._times = [], t._tickTimes = [], t._startTime = t._getTime(), t._times.push(t._lastTime = 0), t.setInterval(t._interval))
		}, t.reset = function() {
			if (t._raf) {
				var e = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
				e && e(t._timerId)
			} else clearTimeout(t._timerId);
			t.removeAllEventListeners("tick")
		}, t.setInterval = function(e) {
			t._interval = e, t._inited && t._setupTick()
		}, t.getInterval = function() {
			return t._interval
		}, t.setFPS = function(e) {
			t.setInterval(1e3 / e)
		}, t.getFPS = function() {
			return 1e3 / t._interval
		}, t.getMeasuredTickTime = function(e) {
			var n = 0,
				i = t._tickTimes;
			if (i.length < 1) return -1;
			e = Math.min(i.length, e || 0 | t.getFPS());
			for (var r = 0; e > r; r++) n += i[r];
			return i / e
		}, t.getMeasuredFPS = function(e) {
			var n = t._times;
			return n.length < 2 ? -1 : (e = Math.min(n.length - 1, e || 0 | t.getFPS()), 1e3 / ((n[0] - n[e]) / e))
		}, t.setPaused = function(e) {
			t._paused = e
		}, t.getPaused = function() {
			return t._paused
		}, t.getTime = function(e) {
			return t._getTime() - t._startTime - (e ? t._pausedTime : 0)
		}, t.getEventTime = function(e) {
			return (t._lastTime || t._startTime) - (e ? t._pausedTime : 0)
		}, t.getTicks = function(e) {
			return t._ticks - (e ? t._pausedTicks : 0)
		}, t._handleSynch = function() {
			var e = t._getTime() - t._startTime;
			t._timerId = null, t._setupTick(), e - t._lastTime >= .97 * (t._interval - 1) && t._tick()
		}, t._handleRAF = function() {
			t._timerId = null, t._setupTick(), t._tick()
		}, t._handleTimeout = function() {
			t._timerId = null, t._setupTick(), t._tick()
		}, t._setupTick = function() {
			if (null == t._timerId) {
				var e = t.timingMode || t.useRAF && t.RAF_SYNCHED;
				if (e == t.RAF_SYNCHED || e == t.RAF) {
					var n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
					if (n) return t._timerId = n(e == t.RAF ? t._handleRAF : t._handleSynch), void(t._raf = !0)
				}
				t._raf = !1, t._timerId = setTimeout(t._handleTimeout, t._interval)
			}
		}, t._tick = function() {
			var e = t._getTime() - t._startTime,
				n = e - t._lastTime,
				i = t._paused;
			if (t._ticks++, i && (t._pausedTicks++, t._pausedTime += n), t._lastTime = e, t.hasEventListener("tick")) {
				var r = new createjs.Event("tick"),
					s = t.maxDelta;
				r.delta = s && n > s ? s : n, r.paused = i, r.time = e, r.runTime = e - t._pausedTime, t.dispatchEvent(r)
			}
			for (t._tickTimes.unshift(t._getTime() - e); t._tickTimes.length > 100;) t._tickTimes.pop();
			for (t._times.unshift(e); t._times.length > 100;) t._times.pop()
		};
		var e = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
		t._getTime = function() {
			return e && e.call(performance) || (new Date).getTime()
		}, createjs.Ticker = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e, n, i, r, s, a, o, l, u) {
				this.initialize(t, e, n, i, r, s, a, o, l, u)
			},
			e = t.prototype = new createjs.Event;
		e.stageX = 0, e.stageY = 0, e.rawX = 0, e.rawY = 0, e.nativeEvent = null, e.pointerID = 0, e.primary = !1, e.addEventListener = null, e.removeEventListener = null, e.removeAllEventListeners = null, e.dispatchEvent = null, e.hasEventListener = null, e._listeners = null, createjs.EventDispatcher.initialize(e), e.Event_initialize = e.initialize, e.initialize = function(t, e, n, i, r, s, a, o, l, u) {
			this.Event_initialize(t, e, n), this.stageX = i, this.stageY = r, this.nativeEvent = s, this.pointerID = a, this.primary = o, this.rawX = null == l ? i : l, this.rawY = null == u ? r : u
		}, e.clone = function() {
			return new t(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.target, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
		}, e.toString = function() {
			return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
		}, createjs.MouseEvent = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e, n, i, r, s) {
				this.initialize(t, e, n, i, r, s)
			},
			e = t.prototype;
		t.identity = null, t.DEG_TO_RAD = Math.PI / 180, e.a = 1, e.b = 0, e.c = 0, e.d = 1, e.tx = 0, e.ty = 0, e.alpha = 1, e.shadow = null, e.compositeOperation = null, e.initialize = function(t, e, n, i, r, s) {
			return this.a = null == t ? 1 : t, this.b = e || 0, this.c = n || 0, this.d = null == i ? 1 : i, this.tx = r || 0, this.ty = s || 0, this
		}, e.prepend = function(t, e, n, i, r, s) {
			var a = this.tx;
			if (1 != t || 0 != e || 0 != n || 1 != i) {
				var o = this.a,
					l = this.c;
				this.a = o * t + this.b * n, this.b = o * e + this.b * i, this.c = l * t + this.d * n, this.d = l * e + this.d * i
			}
			return this.tx = a * t + this.ty * n + r, this.ty = a * e + this.ty * i + s, this
		}, e.append = function(t, e, n, i, r, s) {
			var a = this.a,
				o = this.b,
				l = this.c,
				u = this.d;
			return this.a = t * a + e * l, this.b = t * o + e * u, this.c = n * a + i * l, this.d = n * o + i * u, this.tx = r * a + s * l + this.tx, this.ty = r * o + s * u + this.ty, this
		}, e.prependMatrix = function(t) {
			return this.prepend(t.a, t.b, t.c, t.d, t.tx, t.ty), this.prependProperties(t.alpha, t.shadow, t.compositeOperation), this
		}, e.appendMatrix = function(t) {
			return this.append(t.a, t.b, t.c, t.d, t.tx, t.ty), this.appendProperties(t.alpha, t.shadow, t.compositeOperation), this
		}, e.prependTransform = function(e, n, i, r, s, a, o, l, u) {
			if (s % 360) var c = s * t.DEG_TO_RAD,
				h = Math.cos(c),
				d = Math.sin(c);
			else h = 1, d = 0;
			return (l || u) && (this.tx -= l, this.ty -= u), a || o ? (a *= t.DEG_TO_RAD, o *= t.DEG_TO_RAD, this.prepend(h * i, d * i, -d * r, h * r, 0, 0), this.prepend(Math.cos(o), Math.sin(o), -Math.sin(a), Math.cos(a), e, n)) : this.prepend(h * i, d * i, -d * r, h * r, e, n), this
		}, e.appendTransform = function(e, n, i, r, s, a, o, l, u) {
			if (s % 360) var c = s * t.DEG_TO_RAD,
				h = Math.cos(c),
				d = Math.sin(c);
			else h = 1, d = 0;
			return a || o ? (a *= t.DEG_TO_RAD, o *= t.DEG_TO_RAD, this.append(Math.cos(o), Math.sin(o), -Math.sin(a), Math.cos(a), e, n), this.append(h * i, d * i, -d * r, h * r, 0, 0)) : this.append(h * i, d * i, -d * r, h * r, e, n), (l || u) && (this.tx -= l * this.a + u * this.c, this.ty -= l * this.b + u * this.d), this
		}, e.rotate = function(t) {
			var e = Math.cos(t),
				n = Math.sin(t),
				i = this.a,
				r = this.c,
				s = this.tx;
			return this.a = i * e - this.b * n, this.b = i * n + this.b * e, this.c = r * e - this.d * n, this.d = r * n + this.d * e, this.tx = s * e - this.ty * n, this.ty = s * n + this.ty * e, this
		}, e.skew = function(e, n) {
			return e *= t.DEG_TO_RAD, n *= t.DEG_TO_RAD, this.append(Math.cos(n), Math.sin(n), -Math.sin(e), Math.cos(e), 0, 0), this
		}, e.scale = function(t, e) {
			return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
		}, e.translate = function(t, e) {
			return this.tx += t, this.ty += e, this
		}, e.identity = function() {
			return this.alpha = this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this.shadow = this.compositeOperation = null, this
		}, e.invert = function() {
			var t = this.a,
				e = this.b,
				n = this.c,
				i = this.d,
				r = this.tx,
				s = t * i - e * n;
			return this.a = i / s, this.b = -e / s, this.c = -n / s, this.d = t / s, this.tx = (n * this.ty - i * r) / s, this.ty = -(t * this.ty - e * r) / s, this
		}, e.isIdentity = function() {
			return 0 == this.tx && 0 == this.ty && 1 == this.a && 0 == this.b && 0 == this.c && 1 == this.d
		}, e.transformPoint = function(t, e, n) {
			return n = n || {}, n.x = t * this.a + e * this.c + this.tx, n.y = t * this.b + e * this.d + this.ty, n
		}, e.decompose = function(e) {
			null == e && (e = {}), e.x = this.tx, e.y = this.ty, e.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), e.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
			var n = Math.atan2(-this.c, this.d),
				i = Math.atan2(this.b, this.a);
			return n == i ? (e.rotation = i / t.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (e.rotation += e.rotation <= 0 ? 180 : -180), e.skewX = e.skewY = 0) : (e.skewX = n / t.DEG_TO_RAD, e.skewY = i / t.DEG_TO_RAD), e
		}, e.reinitialize = function(t, e, n, i, r, s, a, o, l) {
			return this.initialize(t, e, n, i, r, s), this.alpha = null == a ? 1 : a, this.shadow = o, this.compositeOperation = l, this
		}, e.copy = function(t) {
			return this.reinitialize(t.a, t.b, t.c, t.d, t.tx, t.ty, t.alpha, t.shadow, t.compositeOperation)
		}, e.appendProperties = function(t, e, n) {
			return this.alpha *= t, this.shadow = e || this.shadow, this.compositeOperation = n || this.compositeOperation, this
		}, e.prependProperties = function(t, e, n) {
			return this.alpha *= t, this.shadow = this.shadow || e, this.compositeOperation = this.compositeOperation || n, this
		}, e.clone = function() {
			return (new t).copy(this)
		}, e.toString = function() {
			return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
		}, t.identity = new t, createjs.Matrix2D = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e) {
				this.initialize(t, e)
			},
			e = t.prototype;
		e.x = 0, e.y = 0, e.initialize = function(t, e) {
			return this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this
		}, e.copy = function(t) {
			return this.initialize(t.x, t.y)
		}, e.clone = function() {
			return new t(this.x, this.y)
		}, e.toString = function() {
			return "[Point (x=" + this.x + " y=" + this.y + ")]"
		}, createjs.Point = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e, n, i) {
				this.initialize(t, e, n, i)
			},
			e = t.prototype;
		e.x = 0, e.y = 0, e.width = 0, e.height = 0, e.initialize = function(t, e, n, i) {
			return this.x = t || 0, this.y = e || 0, this.width = n || 0, this.height = i || 0, this
		}, e.copy = function(t) {
			return this.initialize(t.x, t.y, t.width, t.height)
		}, e.clone = function() {
			return new t(this.x, this.y, this.width, this.height)
		}, e.toString = function() {
			return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
		}, createjs.Rectangle = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e, n, i, r, s, a) {
				this.initialize(t, e, n, i, r, s, a)
			},
			e = t.prototype;
		e.target = null, e.overLabel = null, e.outLabel = null, e.downLabel = null, e.play = !1, e._isPressed = !1, e._isOver = !1, e.initialize = function(t, e, n, i, r, s, a) {
			t.addEventListener && (this.target = t, t.cursor = "pointer", this.overLabel = null == n ? "over" : n, this.outLabel = null == e ? "out" : e, this.downLabel = null == i ? "down" : i, this.play = r, this.setEnabled(!0), this.handleEvent({}), s && (a && (s.actionsEnabled = !1, s.gotoAndStop && s.gotoAndStop(a)), t.hitArea = s))
		}, e.setEnabled = function(t) {
			var e = this.target;
			t ? (e.addEventListener("rollover", this), e.addEventListener("rollout", this), e.addEventListener("mousedown", this), e.addEventListener("pressup", this)) : (e.removeEventListener("rollover", this), e.removeEventListener("rollout", this), e.removeEventListener("mousedown", this), e.removeEventListener("pressup", this))
		}, e.toString = function() {
			return "[ButtonHelper]"
		}, e.handleEvent = function(t) {
			var e, n = this.target,
				i = t.type;
			"mousedown" == i ? (this._isPressed = !0, e = this.downLabel) : "pressup" == i ? (this._isPressed = !1, e = this._isOver ? this.overLabel : this.outLabel) : "rollover" == i ? (this._isOver = !0, e = this._isPressed ? this.downLabel : this.overLabel) : (this._isOver = !1, e = this._isPressed ? this.overLabel : this.outLabel), this.play ? n.gotoAndPlay && n.gotoAndPlay(e) : n.gotoAndStop && n.gotoAndStop(e)
		}, createjs.ButtonHelper = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e, n, i) {
				this.initialize(t, e, n, i)
			},
			e = t.prototype;
		t.identity = null, e.color = null, e.offsetX = 0, e.offsetY = 0, e.blur = 0, e.initialize = function(t, e, n, i) {
			this.color = t, this.offsetX = e, this.offsetY = n, this.blur = i
		}, e.toString = function() {
			return "[Shadow]"
		}, e.clone = function() {
			return new t(this.color, this.offsetX, this.offsetY, this.blur)
		}, t.identity = new t("transparent", 0, 0, 0), createjs.Shadow = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t) {
				this.initialize(t)
			},
			e = t.prototype = new createjs.EventDispatcher;
		e.complete = !0, e.framerate = 0, e._animations = null, e._frames = null, e._images = null, e._data = null, e._loadCount = 0, e._frameHeight = 0, e._frameWidth = 0, e._numFrames = 0, e._regX = 0, e._regY = 0, e.initialize = function(t) {
			var e, n, i, r;
			if (null != t) {
				if (this.framerate = t.framerate || 0, t.images && (n = t.images.length) > 0)
					for (r = this._images = [], e = 0; n > e; e++) {
						var s = t.images[e];
						if ("string" == typeof s) {
							var a = s;
							s = new Image, s.src = a
						}
						r.push(s), s.getContext || s.complete || (this._loadCount++, this.complete = !1, function(t) {
							s.onload = function() {
								t._handleImageLoad()
							}
						}(this))
					}
				if (null == t.frames);
				else if (t.frames instanceof Array)
					for (this._frames = [], r = t.frames, e = 0, n = r.length; n > e; e++) {
						var o = r[e];
						this._frames.push({
							image: this._images[o[4] ? o[4] : 0],
							rect: new createjs.Rectangle(o[0], o[1], o[2], o[3]),
							regX: o[5] || 0,
							regY: o[6] || 0
						})
					} else i = t.frames, this._frameWidth = i.width, this._frameHeight = i.height, this._regX = i.regX || 0, this._regY = i.regY || 0, this._numFrames = i.count, 0 == this._loadCount && this._calculateFrames();
				if (this._animations = [], null != (i = t.animations)) {
					this._data = {};
					var l;
					for (l in i) {
						var u = {
								name: l
							},
							c = i[l];
						if ("number" == typeof c) r = u.frames = [c];
						else if (c instanceof Array)
							if (1 == c.length) u.frames = [c[0]];
							else
								for (u.speed = c[3], u.next = c[2], r = u.frames = [], e = c[0]; e <= c[1]; e++) r.push(e);
						else {
							u.speed = c.speed, u.next = c.next;
							var h = c.frames;
							r = u.frames = "number" == typeof h ? [h] : h.slice(0)
						}(u.next === !0 || void 0 === u.next) && (u.next = l), (u.next === !1 || r.length < 2 && u.next == l) && (u.next = null), u.speed || (u.speed = 1), this._animations.push(l), this._data[l] = u
					}
				}
			}
		}, e.getNumFrames = function(t) {
			if (null == t) return this._frames ? this._frames.length : this._numFrames;
			var e = this._data[t];
			return null == e ? 0 : e.frames.length
		}, e.getAnimations = function() {
			return this._animations.slice(0)
		}, e.getAnimation = function(t) {
			return this._data[t]
		}, e.getFrame = function(t) {
			var e;
			return this._frames && (e = this._frames[t]) ? e : null
		}, e.getFrameBounds = function(t, e) {
			var n = this.getFrame(t);
			return n ? (e || new createjs.Rectangle).initialize(-n.regX, -n.regY, n.rect.width, n.rect.height) : null
		}, e.toString = function() {
			return "[SpriteSheet]"
		}, e.clone = function() {
			var e = new t;
			return e.complete = this.complete, e._animations = this._animations, e._frames = this._frames, e._images = this._images, e._data = this._data, e._frameHeight = this._frameHeight, e._frameWidth = this._frameWidth, e._numFrames = this._numFrames, e._loadCount = this._loadCount, e
		}, e._handleImageLoad = function() {
			0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.dispatchEvent("complete"))
		}, e._calculateFrames = function() {
			if (!this._frames && 0 != this._frameWidth) {
				this._frames = [];
				for (var t = 0, e = this._frameWidth, n = this._frameHeight, i = 0, r = this._images; i < r.length; i++) {
					for (var s = r[i], a = 0 | (s.width + 1) / e, o = 0 | (s.height + 1) / n, l = this._numFrames > 0 ? Math.min(this._numFrames - t, a * o) : a * o, u = 0; l > u; u++) this._frames.push({
						image: s,
						rect: new createjs.Rectangle(u % a * e, (0 | u / a) * n, e, n),
						regX: this._regX,
						regY: this._regY
					});
					t += l
				}
				this._numFrames = t
			}
		}, createjs.SpriteSheet = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";

		function t(t, e, n) {
			this.f = t, this.params = e, this.path = null == n ? !0 : n
		}
		t.prototype.exec = function(t) {
			this.f.apply(t, this.params)
		};
		var e = function() {
				this.initialize()
			},
			n = e.prototype;
		e.getRGB = function(t, e, n, i) {
			return null != t && null == n && (i = e, n = 255 & t, e = 255 & t >> 8, t = 255 & t >> 16), null == i ? "rgb(" + t + "," + e + "," + n + ")" : "rgba(" + t + "," + e + "," + n + "," + i + ")"
		}, e.getHSL = function(t, e, n, i) {
			return null == i ? "hsl(" + t % 360 + "," + e + "%," + n + "%)" : "hsla(" + t % 360 + "," + e + "%," + n + "%," + i + ")"
		}, e.Command = t, e.BASE_64 = {
			A: 0,
			B: 1,
			C: 2,
			D: 3,
			E: 4,
			F: 5,
			G: 6,
			H: 7,
			I: 8,
			J: 9,
			K: 10,
			L: 11,
			M: 12,
			N: 13,
			O: 14,
			P: 15,
			Q: 16,
			R: 17,
			S: 18,
			T: 19,
			U: 20,
			V: 21,
			W: 22,
			X: 23,
			Y: 24,
			Z: 25,
			a: 26,
			b: 27,
			c: 28,
			d: 29,
			e: 30,
			f: 31,
			g: 32,
			h: 33,
			i: 34,
			j: 35,
			k: 36,
			l: 37,
			m: 38,
			n: 39,
			o: 40,
			p: 41,
			q: 42,
			r: 43,
			s: 44,
			t: 45,
			u: 46,
			v: 47,
			w: 48,
			x: 49,
			y: 50,
			z: 51,
			0: 52,
			1: 53,
			2: 54,
			3: 55,
			4: 56,
			5: 57,
			6: 58,
			7: 59,
			8: 60,
			9: 61,
			"+": 62,
			"/": 63
		}, e.STROKE_CAPS_MAP = ["butt", "round", "square"], e.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
		var i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
		if (i.getContext) {
			var r = e._ctx = i.getContext("2d");
			e.beginCmd = new t(r.beginPath, [], !1), e.fillCmd = new t(r.fill, [], !1), e.strokeCmd = new t(r.stroke, [], !1), i.width = i.height = 1
		}
		n._strokeInstructions = null, n._strokeStyleInstructions = null, n._strokeIgnoreScale = !1, n._fillInstructions = null, n._fillMatrix = null, n._instructions = null, n._oldInstructions = null, n._activeInstructions = null, n._active = !1, n._dirty = !1, n.initialize = function() {
			this.clear(), this._ctx = e._ctx
		}, n.isEmpty = function() {
			return !(this._instructions.length || this._oldInstructions.length || this._activeInstructions.length)
		}, n.draw = function(t) {
			this._dirty && this._updateInstructions();
			for (var e = this._instructions, n = 0, i = e.length; i > n; n++) e[n].exec(t)
		}, n.drawAsPath = function(t) {
			this._dirty && this._updateInstructions();
			for (var e, n = this._instructions, i = 0, r = n.length; r > i; i++)((e = n[i]).path || 0 == i) && e.exec(t)
		}, n.moveTo = function(e, n) {
			return this._activeInstructions.push(new t(this._ctx.moveTo, [e, n])), this
		}, n.lineTo = function(e, n) {
			return this._dirty = this._active = !0, this._activeInstructions.push(new t(this._ctx.lineTo, [e, n])), this
		}, n.arcTo = function(e, n, i, r, s) {
			return this._dirty = this._active = !0, this._activeInstructions.push(new t(this._ctx.arcTo, [e, n, i, r, s])), this
		}, n.arc = function(e, n, i, r, s, a) {
			return this._dirty = this._active = !0, null == a && (a = !1), this._activeInstructions.push(new t(this._ctx.arc, [e, n, i, r, s, a])), this
		}, n.quadraticCurveTo = function(e, n, i, r) {
			return this._dirty = this._active = !0, this._activeInstructions.push(new t(this._ctx.quadraticCurveTo, [e, n, i, r])), this
		}, n.bezierCurveTo = function(e, n, i, r, s, a) {
			return this._dirty = this._active = !0, this._activeInstructions.push(new t(this._ctx.bezierCurveTo, [e, n, i, r, s, a])), this
		}, n.rect = function(e, n, i, r) {
			return this._dirty = this._active = !0, this._activeInstructions.push(new t(this._ctx.rect, [e, n, i, r])), this
		}, n.closePath = function() {
			return this._active && (this._dirty = !0, this._activeInstructions.push(new t(this._ctx.closePath, []))), this
		}, n.clear = function() {
			return this._instructions = [], this._oldInstructions = [], this._activeInstructions = [], this._strokeStyleInstructions = this._strokeInstructions = this._fillInstructions = this._fillMatrix = null, this._active = this._dirty = this._strokeIgnoreScale = !1, this
		}, n.beginFill = function(e) {
			return this._active && this._newPath(), this._fillInstructions = e ? [new t(this._setProp, ["fillStyle", e], !1)] : null, this._fillMatrix = null, this
		}, n.beginLinearGradientFill = function(e, n, i, r, s, a) {
			this._active && this._newPath();
			for (var o = this._ctx.createLinearGradient(i, r, s, a), l = 0, u = e.length; u > l; l++) o.addColorStop(n[l], e[l]);
			return this._fillInstructions = [new t(this._setProp, ["fillStyle", o], !1)], this._fillMatrix = null, this
		}, n.beginRadialGradientFill = function(e, n, i, r, s, a, o, l) {
			this._active && this._newPath();
			for (var u = this._ctx.createRadialGradient(i, r, s, a, o, l), c = 0, h = e.length; h > c; c++) u.addColorStop(n[c], e[c]);
			return this._fillInstructions = [new t(this._setProp, ["fillStyle", u], !1)], this._fillMatrix = null, this
		}, n.beginBitmapFill = function(e, n, i) {
			this._active && this._newPath(), n = n || "";
			var r = this._ctx.createPattern(e, n);
			return this._fillInstructions = [new t(this._setProp, ["fillStyle", r], !1)], this._fillMatrix = i ? [i.a, i.b, i.c, i.d, i.tx, i.ty] : null, this
		}, n.endFill = function() {
			return this.beginFill()
		}, n.setStrokeStyle = function(n, i, r, s, a) {
			return this._active && this._newPath(), this._strokeStyleInstructions = [new t(this._setProp, ["lineWidth", null == n ? "1" : n], !1), new t(this._setProp, ["lineCap", null == i ? "butt" : isNaN(i) ? i : e.STROKE_CAPS_MAP[i]], !1), new t(this._setProp, ["lineJoin", null == r ? "miter" : isNaN(r) ? r : e.STROKE_JOINTS_MAP[r]], !1), new t(this._setProp, ["miterLimit", null == s ? "10" : s], !1)], this._strokeIgnoreScale = a, this
		}, n.beginStroke = function(e) {
			return this._active && this._newPath(), this._strokeInstructions = e ? [new t(this._setProp, ["strokeStyle", e], !1)] : null, this
		}, n.beginLinearGradientStroke = function(e, n, i, r, s, a) {
			this._active && this._newPath();
			for (var o = this._ctx.createLinearGradient(i, r, s, a), l = 0, u = e.length; u > l; l++) o.addColorStop(n[l], e[l]);
			return this._strokeInstructions = [new t(this._setProp, ["strokeStyle", o], !1)], this
		}, n.beginRadialGradientStroke = function(e, n, i, r, s, a, o, l) {
			this._active && this._newPath();
			for (var u = this._ctx.createRadialGradient(i, r, s, a, o, l), c = 0, h = e.length; h > c; c++) u.addColorStop(n[c], e[c]);
			return this._strokeInstructions = [new t(this._setProp, ["strokeStyle", u], !1)], this
		}, n.beginBitmapStroke = function(e, n) {
			this._active && this._newPath(), n = n || "";
			var i = this._ctx.createPattern(e, n);
			return this._strokeInstructions = [new t(this._setProp, ["strokeStyle", i], !1)], this
		}, n.endStroke = function() {
			return this.beginStroke(), this
		}, n.curveTo = n.quadraticCurveTo, n.drawRect = n.rect, n.drawRoundRect = function(t, e, n, i, r) {
			return this.drawRoundRectComplex(t, e, n, i, r, r, r, r), this
		}, n.drawRoundRectComplex = function(e, n, i, r, s, a, o, l) {
			var u = (r > i ? i : r) / 2,
				c = 0,
				h = 0,
				d = 0,
				f = 0;
			0 > s && (s *= c = -1), s > u && (s = u), 0 > a && (a *= h = -1), a > u && (a = u), 0 > o && (o *= d = -1), o > u && (o = u), 0 > l && (l *= f = -1), l > u && (l = u), this._dirty = this._active = !0;
			var p = this._ctx.arcTo,
				g = this._ctx.lineTo;
			return this._activeInstructions.push(new t(this._ctx.moveTo, [e + i - a, n]), new t(p, [e + i + a * h, n - a * h, e + i, n + a, a]), new t(g, [e + i, n + r - o]), new t(p, [e + i + o * d, n + r + o * d, e + i - o, n + r, o]), new t(g, [e + l, n + r]), new t(p, [e - l * f, n + r + l * f, e, n + r - l, l]), new t(g, [e, n + s]), new t(p, [e - s * c, n - s * c, e + s, n, s]), new t(this._ctx.closePath)), this
		}, n.drawCircle = function(t, e, n) {
			return this.arc(t, e, n, 0, 2 * Math.PI), this
		}, n.drawEllipse = function(e, n, i, r) {
			this._dirty = this._active = !0;
			var s = .5522848,
				a = i / 2 * s,
				o = r / 2 * s,
				l = e + i,
				u = n + r,
				c = e + i / 2,
				h = n + r / 2;
			return this._activeInstructions.push(new t(this._ctx.moveTo, [e, h]), new t(this._ctx.bezierCurveTo, [e, h - o, c - a, n, c, n]), new t(this._ctx.bezierCurveTo, [c + a, n, l, h - o, l, h]), new t(this._ctx.bezierCurveTo, [l, h + o, c + a, u, c, u]), new t(this._ctx.bezierCurveTo, [c - a, u, e, h + o, e, h])), this
		}, n.inject = function(e, n) {
			return this._dirty = this._active = !0, this._activeInstructions.push(new t(e, [n])), this
		}, n.drawPolyStar = function(e, n, i, r, s, a) {
			this._dirty = this._active = !0, null == s && (s = 0), s = 1 - s, null == a ? a = 0 : a /= 180 / Math.PI;
			var o = Math.PI / r;
			this._activeInstructions.push(new t(this._ctx.moveTo, [e + Math.cos(a) * i, n + Math.sin(a) * i]));
			for (var l = 0; r > l; l++) a += o, 1 != s && this._activeInstructions.push(new t(this._ctx.lineTo, [e + Math.cos(a) * i * s, n + Math.sin(a) * i * s])), a += o, this._activeInstructions.push(new t(this._ctx.lineTo, [e + Math.cos(a) * i, n + Math.sin(a) * i]));
			return this
		}, n.decodePath = function(t) {
			for (var n = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath], i = [2, 2, 4, 6, 0], r = 0, s = t.length, a = [], o = 0, l = 0, u = e.BASE_64; s > r;) {
				var c = t.charAt(r),
					h = u[c],
					d = h >> 3,
					f = n[d];
				if (!f || 3 & h) throw "bad path data (@" + r + "): " + c;
				var p = i[d];
				d || (o = l = 0), a.length = 0, r++;
				for (var g = (1 & h >> 2) + 2, m = 0; p > m; m++) {
					var v = u[t.charAt(r)],
						_ = v >> 5 ? -1 : 1;
					v = (31 & v) << 6 | u[t.charAt(r + 1)], 3 == g && (v = v << 6 | u[t.charAt(r + 2)]), v = _ * v / 10, m % 2 ? o = v += o : l = v += l, a[m] = v, r += g
				}
				f.apply(this, a)
			}
			return this
		}, n.clone = function() {
			var t = new e;
			return t._instructions = this._instructions.slice(), t._activeInstructions = this._activeInstructions.slice(), t._oldInstructions = this._oldInstructions.slice(), this._fillInstructions && (t._fillInstructions = this._fillInstructions.slice()), this._strokeInstructions && (t._strokeInstructions = this._strokeInstructions.slice()), this._strokeStyleInstructions && (t._strokeStyleInstructions = this._strokeStyleInstructions.slice()), t._active = this._active, t._dirty = this._dirty, t._fillMatrix = this._fillMatrix, t._strokeIgnoreScale = this._strokeIgnoreScale, t
		}, n.toString = function() {
			return "[Graphics]"
		}, n.mt = n.moveTo, n.lt = n.lineTo, n.at = n.arcTo, n.bt = n.bezierCurveTo, n.qt = n.quadraticCurveTo, n.a = n.arc, n.r = n.rect, n.cp = n.closePath, n.c = n.clear, n.f = n.beginFill, n.lf = n.beginLinearGradientFill, n.rf = n.beginRadialGradientFill, n.bf = n.beginBitmapFill, n.ef = n.endFill, n.ss = n.setStrokeStyle, n.s = n.beginStroke, n.ls = n.beginLinearGradientStroke, n.rs = n.beginRadialGradientStroke, n.bs = n.beginBitmapStroke, n.es = n.endStroke, n.dr = n.drawRect, n.rr = n.drawRoundRect, n.rc = n.drawRoundRectComplex, n.dc = n.drawCircle, n.de = n.drawEllipse, n.dp = n.drawPolyStar, n.p = n.decodePath, n._updateInstructions = function() {
			this._instructions = this._oldInstructions.slice(), this._instructions.push(e.beginCmd), this._appendInstructions(this._fillInstructions), this._appendInstructions(this._strokeInstructions), this._appendInstructions(this._strokeInstructions && this._strokeStyleInstructions), this._appendInstructions(this._activeInstructions), this._fillInstructions && this._appendDraw(e.fillCmd, this._fillMatrix), this._strokeInstructions && this._appendDraw(e.strokeCmd, this._strokeIgnoreScale && [1, 0, 0, 1, 0, 0])
		}, n._appendInstructions = function(t) {
			t && this._instructions.push.apply(this._instructions, t)
		}, n._appendDraw = function(e, n) {
			n ? this._instructions.push(new t(this._ctx.save, [], !1), new t(this._ctx.transform, n, !1), e, new t(this._ctx.restore, [], !1)) : this._instructions.push(e)
		}, n._newPath = function() {
			this._dirty && this._updateInstructions(), this._oldInstructions = this._instructions, this._activeInstructions = [], this._active = this._dirty = !1
		}, n._setProp = function(t, e) {
			this[t] = e
		}, createjs.Graphics = e
	}(), this.createjs = this.createjs || {},
	function() {
		var t = function() {
				this.initialize()
			},
			e = t.prototype = new createjs.EventDispatcher;
		t.suppressCrossDomainErrors = !1;
		var n = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
		n.getContext && (t._hitTestCanvas = n, t._hitTestContext = n.getContext("2d"), n.width = n.height = 1), t._nextCacheID = 1, e.alpha = 1, e.cacheCanvas = null, e.id = -1, e.mouseEnabled = !0, e.name = null, e.parent = null, e.regX = 0, e.regY = 0, e.rotation = 0, e.scaleX = 1, e.scaleY = 1, e.skewX = 0, e.skewY = 0, e.shadow = null, e.visible = !0, e.x = 0, e.y = 0, e.compositeOperation = null, e.snapToPixel = !1, e.filters = null, e.cacheID = 0, e.mask = null, e.hitArea = null, e.cursor = null, e._cacheOffsetX = 0, e._cacheOffsetY = 0, e._cacheScale = 1, e._cacheDataURLID = 0, e._cacheDataURL = null, e._matrix = null, e._rectangle = null, e._bounds = null, e.initialize = function() {
			this.id = createjs.UID.get(), this._matrix = new createjs.Matrix2D, this._rectangle = new createjs.Rectangle
		}, e.isVisible = function() {
			return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY)
		}, e.draw = function(t, e) {
			var n = this.cacheCanvas;
			if (e || !n) return !1;
			var i, r = this._cacheScale,
				s = this._cacheOffsetX,
				a = this._cacheOffsetY;
			return (i = this._applyFilterBounds(s, a, 0, 0)) && (s = i.x, a = i.y), t.drawImage(n, s, a, n.width / r, n.height / r), !0
		}, e.updateContext = function(t) {
			var e, n = this.mask,
				i = this;
			n && n.graphics && !n.graphics.isEmpty() && (e = n.getMatrix(n._matrix), t.transform(e.a, e.b, e.c, e.d, e.tx, e.ty), n.graphics.drawAsPath(t), t.clip(), e.invert(), t.transform(e.a, e.b, e.c, e.d, e.tx, e.ty)), e = i._matrix.identity().appendTransform(i.x, i.y, i.scaleX, i.scaleY, i.rotation, i.skewX, i.skewY, i.regX, i.regY), createjs.Stage._snapToPixelEnabled && i.snapToPixel ? t.transform(e.a, e.b, e.c, e.d, 0 | e.tx + .5, 0 | e.ty + .5) : t.transform(e.a, e.b, e.c, e.d, e.tx, e.ty), t.globalAlpha *= i.alpha, i.compositeOperation && (t.globalCompositeOperation = i.compositeOperation), i.shadow && this._applyShadow(t, i.shadow)
		}, e.cache = function(t, e, n, i, r) {
			r = r || 1, this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), this._cacheWidth = n, this._cacheHeight = i, this._cacheOffsetX = t, this._cacheOffsetY = e, this._cacheScale = r, this.updateCache()
		}, e.updateCache = function(e) {
			var n, i = this.cacheCanvas,
				r = this._cacheScale,
				s = this._cacheOffsetX * r,
				a = this._cacheOffsetY * r,
				o = this._cacheWidth,
				l = this._cacheHeight;
			if (!i) throw "cache() must be called before updateCache()";
			var u = i.getContext("2d");
			(n = this._applyFilterBounds(s, a, o, l)) && (s = n.x, a = n.y, o = n.width, l = n.height), o = Math.ceil(o * r), l = Math.ceil(l * r), o != i.width || l != i.height ? (i.width = o, i.height = l) : e || u.clearRect(0, 0, o + 1, l + 1), u.save(), u.globalCompositeOperation = e, u.setTransform(r, 0, 0, r, -s, -a), this.draw(u, !0), this._applyFilters(), u.restore(), this.cacheID = t._nextCacheID++
		}, e.uncache = function() {
			this._cacheDataURL = this.cacheCanvas = null, this.cacheID = this._cacheOffsetX = this._cacheOffsetY = 0, this._cacheScale = 1
		}, e.getCacheDataURL = function() {
			return this.cacheCanvas ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURL = this.cacheCanvas.toDataURL()), this._cacheDataURL) : null
		}, e.getStage = function() {
			for (var t = this; t.parent;) t = t.parent;
			return t instanceof createjs.Stage ? t : null
		}, e.localToGlobal = function(t, e) {
			var n = this.getConcatenatedMatrix(this._matrix);
			return null == n ? null : (n.append(1, 0, 0, 1, t, e), new createjs.Point(n.tx, n.ty))
		}, e.globalToLocal = function(t, e) {
			var n = this.getConcatenatedMatrix(this._matrix);
			return null == n ? null : (n.invert(), n.append(1, 0, 0, 1, t, e), new createjs.Point(n.tx, n.ty))
		}, e.localToLocal = function(t, e, n) {
			var i = this.localToGlobal(t, e);
			return n.globalToLocal(i.x, i.y)
		}, e.setTransform = function(t, e, n, i, r, s, a, o, l) {
			return this.x = t || 0, this.y = e || 0, this.scaleX = null == n ? 1 : n, this.scaleY = null == i ? 1 : i, this.rotation = r || 0, this.skewX = s || 0, this.skewY = a || 0, this.regX = o || 0, this.regY = l || 0, this
		}, e.getMatrix = function(t) {
			var e = this;
			return (t ? t.identity() : new createjs.Matrix2D).appendTransform(e.x, e.y, e.scaleX, e.scaleY, e.rotation, e.skewX, e.skewY, e.regX, e.regY).appendProperties(e.alpha, e.shadow, e.compositeOperation)
		}, e.getConcatenatedMatrix = function(t) {
			t ? t.identity() : t = new createjs.Matrix2D;
			for (var e = this; null != e;) t.prependTransform(e.x, e.y, e.scaleX, e.scaleY, e.rotation, e.skewX, e.skewY, e.regX, e.regY).prependProperties(e.alpha, e.shadow, e.compositeOperation), e = e.parent;
			return t
		}, e.hitTest = function(e, n) {
			var i = t._hitTestContext;
			i.setTransform(1, 0, 0, 1, -e, -n), this.draw(i);
			var r = this._testHit(i);
			return i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, 2, 2), r
		}, e.set = function(t) {
			for (var e in t) this[e] = t[e];
			return this
		}, e.getBounds = function() {
			if (this._bounds) return this._rectangle.copy(this._bounds);
			var t = this.cacheCanvas;
			if (t) {
				var e = this._cacheScale;
				return this._rectangle.initialize(this._cacheOffsetX, this._cacheOffsetY, t.width / e, t.height / e)
			}
			return null
		}, e.getTransformedBounds = function() {
			return this._getBounds()
		}, e.setBounds = function(t, e, n, i) {
			null == t && (this._bounds = t), this._bounds = (this._bounds || new createjs.Rectangle).initialize(t, e, n, i)
		}, e.clone = function() {
			var e = new t;
			return this.cloneProps(e), e
		}, e.toString = function() {
			return "[DisplayObject (name=" + this.name + ")]"
		}, e.cloneProps = function(t) {
			t.alpha = this.alpha, t.name = this.name, t.regX = this.regX, t.regY = this.regY, t.rotation = this.rotation, t.scaleX = this.scaleX, t.scaleY = this.scaleY, t.shadow = this.shadow, t.skewX = this.skewX, t.skewY = this.skewY, t.visible = this.visible, t.x = this.x, t.y = this.y, t._bounds = this._bounds, t.mouseEnabled = this.mouseEnabled, t.compositeOperation = this.compositeOperation
		}, e._applyShadow = function(t, e) {
			e = e || Shadow.identity, t.shadowColor = e.color, t.shadowOffsetX = e.offsetX, t.shadowOffsetY = e.offsetY, t.shadowBlur = e.blur
		}, e._tick = function(t) {
			var e = this._listeners;
			if (e && e.tick) {
				var n = new createjs.Event("tick");
				n.params = t, this._dispatchEvent(n, this, 2)
			}
		}, e._testHit = function(e) {
			try {
				var n = e.getImageData(0, 0, 1, 1).data[3] > 1
			} catch (i) {
				if (!t.suppressCrossDomainErrors) throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
			}
			return n
		}, e._applyFilters = function() {
			if (this.filters && 0 != this.filters.length && this.cacheCanvas)
				for (var t = this.filters.length, e = this.cacheCanvas.getContext("2d"), n = this.cacheCanvas.width, i = this.cacheCanvas.height, r = 0; t > r; r++) this.filters[r].applyFilter(e, 0, 0, n, i)
		}, e._applyFilterBounds = function(t, e, n, i) {
			var r, s, a = this.filters;
			if (a && (s = a.length)) {
				for (var o = 0; s > o; o++) {
					var l = this.filters[o],
						u = l.getBounds && l.getBounds();
					u && (r || (r = this._rectangle.initialize(t, e, n, i)), r.x += u.x, r.y += u.y, r.width += u.width, r.height += u.height)
				}
				return r
			}
		}, e._getBounds = function(t, e) {
			return this._transformBounds(this.getBounds(), t, e)
		}, e._transformBounds = function(t, e, n) {
			if (!t) return t;
			var i = t.x,
				r = t.y,
				s = t.width,
				a = t.height,
				o = n ? this._matrix.identity() : this.getMatrix(this._matrix);
			(i || r) && o.appendTransform(0, 0, 1, 1, 0, 0, 0, -i, -r), e && o.prependMatrix(e);
			var l = s * o.a,
				u = s * o.b,
				c = a * o.c,
				h = a * o.d,
				d = o.tx,
				f = o.ty,
				p = d,
				g = d,
				m = f,
				v = f;
			return (i = l + d) < p ? p = i : i > g && (g = i), (i = l + c + d) < p ? p = i : i > g && (g = i), (i = c + d) < p ? p = i : i > g && (g = i), (r = u + f) < m ? m = r : r > v && (v = r), (r = u + h + f) < m ? m = r : r > v && (v = r), (r = h + f) < m ? m = r : r > v && (v = r), t.initialize(p, m, g - p, v - m)
		}, createjs.DisplayObject = t
	}(), this.createjs = this.createjs || {},
	function() {
		var t = function() {
				this.initialize()
			},
			e = t.prototype = new createjs.DisplayObject;
		e.children = null, e.mouseChildren = !0, e.DisplayObject_initialize = e.initialize, e.initialize = function() {
			this.DisplayObject_initialize(), this.children = []
		}, e.isVisible = function() {
			var t = this.cacheCanvas || this.children.length;
			return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
		}, e.DisplayObject_draw = e.draw, e.draw = function(t, e) {
			if (this.DisplayObject_draw(t, e)) return !0;
			for (var n = this.children.slice(0), i = 0, r = n.length; r > i; i++) {
				var s = n[i];
				s.isVisible() && (t.save(), s.updateContext(t), s.draw(t), t.restore())
			}
			return !0
		}, e.addChild = function(t) {
			if (null == t) return t;
			var e = arguments.length;
			if (e > 1) {
				for (var n = 0; e > n; n++) this.addChild(arguments[n]);
				return arguments[e - 1]
			}
			return t.parent && t.parent.removeChild(t), t.parent = this, this.children.push(t), t
		}, e.addChildAt = function(t, e) {
			var n = arguments.length,
				i = arguments[n - 1];
			if (0 > i || i > this.children.length) return arguments[n - 2];
			if (n > 2) {
				for (var r = 0; n - 1 > r; r++) this.addChildAt(arguments[r], i + r);
				return arguments[n - 2]
			}
			return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), t
		}, e.removeChild = function(t) {
			var e = arguments.length;
			if (e > 1) {
				for (var n = !0, i = 0; e > i; i++) n = n && this.removeChild(arguments[i]);
				return n
			}
			return this.removeChildAt(createjs.indexOf(this.children, t))
		}, e.removeChildAt = function(t) {
			var e = arguments.length;
			if (e > 1) {
				for (var n = [], i = 0; e > i; i++) n[i] = arguments[i];
				n.sort(function(t, e) {
					return e - t
				});
				for (var r = !0, i = 0; e > i; i++) r = r && this.removeChildAt(n[i]);
				return r
			}
			if (0 > t || t > this.children.length - 1) return !1;
			var s = this.children[t];
			return s && (s.parent = null), this.children.splice(t, 1), !0
		}, e.removeAllChildren = function() {
			for (var t = this.children; t.length;) t.pop().parent = null
		}, e.getChildAt = function(t) {
			return this.children[t]
		}, e.getChildByName = function(t) {
			for (var e = this.children, n = 0, i = e.length; i > n; n++)
				if (e[n].name == t) return e[n];
			return null
		}, e.sortChildren = function(t) {
			this.children.sort(t)
		}, e.getChildIndex = function(t) {
			return createjs.indexOf(this.children, t)
		}, e.getNumChildren = function() {
			return this.children.length
		}, e.swapChildrenAt = function(t, e) {
			var n = this.children,
				i = n[t],
				r = n[e];
			i && r && (n[t] = r, n[e] = i)
		}, e.swapChildren = function(t, e) {
			for (var n, i, r = this.children, s = 0, a = r.length; a > s && (r[s] == t && (n = s), r[s] == e && (i = s), null == n || null == i); s++);
			s != a && (r[n] = e, r[i] = t)
		}, e.setChildIndex = function(t, e) {
			var n = this.children,
				i = n.length;
			if (!(t.parent != this || 0 > e || e >= i)) {
				for (var r = 0; i > r && n[r] != t; r++);
				r != i && r != e && (n.splice(r, 1), n.splice(e, 0, t))
			}
		}, e.contains = function(t) {
			for (; t;) {
				if (t == this) return !0;
				t = t.parent
			}
			return !1
		}, e.hitTest = function(t, e) {
			return null != this.getObjectUnderPoint(t, e)
		}, e.getObjectsUnderPoint = function(t, e) {
			var n = [],
				i = this.localToGlobal(t, e);
			return this._getObjectsUnderPoint(i.x, i.y, n), n
		}, e.getObjectUnderPoint = function(t, e) {
			var n = this.localToGlobal(t, e);
			return this._getObjectsUnderPoint(n.x, n.y)
		}, e.DisplayObject_getBounds = e.getBounds, e.getBounds = function() {
			return this._getBounds(null, !0)
		}, e.getTransformedBounds = function() {
			return this._getBounds()
		}, e.clone = function(e) {
			var n = new t;
			if (this.cloneProps(n), e)
				for (var i = n.children = [], r = 0, s = this.children.length; s > r; r++) {
					var a = this.children[r].clone(e);
					a.parent = n, i.push(a)
				}
			return n
		}, e.toString = function() {
			return "[Container (name=" + this.name + ")]"
		}, e.DisplayObject__tick = e._tick, e._tick = function(t) {
			for (var e = this.children.length - 1; e >= 0; e--) {
				var n = this.children[e];
				n._tick && n._tick(t)
			}
			this.DisplayObject__tick(t)
		}, e._getObjectsUnderPoint = function(e, n, i, r) {
			for (var s = createjs.DisplayObject._hitTestContext, a = this._matrix, o = this.children.length, l = o - 1; l >= 0; l--) {
				var u = this.children[l],
					c = r && u.hitArea;
				if (u.visible && (c || u.isVisible()) && (!r || u.mouseEnabled))
					if (!c && u instanceof t) {
						var h = u._getObjectsUnderPoint(e, n, i, r);
						if (!i && h) return h
					} else {
						if (u.getConcatenatedMatrix(a), c && (a.appendTransform(c.x, c.y, c.scaleX, c.scaleY, c.rotation, c.skewX, c.skewY, c.regX, c.regY), a.alpha = c.alpha), s.globalAlpha = a.alpha, s.setTransform(a.a, a.b, a.c, a.d, a.tx - e, a.ty - n), (c || u).draw(s), !this._testHit(s)) continue;
						if (s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, 2, 2), !i) return r && !this.mouseChildren ? this : u;
						i.push(u)
					}
			}
			return null
		}, e._getBounds = function(t, e) {
			var n = this.DisplayObject_getBounds();
			if (n) return this._transformBounds(n, t, e);
			var i, r, s, a, o = e ? this._matrix.identity() : this.getMatrix(this._matrix);
			t && o.prependMatrix(t);
			for (var l = this.children.length, u = 0; l > u; u++) {
				var c = this.children[u];
				if (c.visible && (n = c._getBounds(o))) {
					var h = n.x,
						d = n.y,
						f = h + n.width,
						p = d + n.height;
					(i > h || null == i) && (i = h), (f > r || null == r) && (r = f), (s > d || null == s) && (s = d), (p > a || null == a) && (a = p)
				}
			}
			return null == r ? null : this._rectangle.initialize(i, s, r - i, a - s)
		}, createjs.Container = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t) {
				this.initialize(t)
			},
			e = t.prototype = new createjs.Container;
		t._snapToPixelEnabled = !1, e.autoClear = !0, e.canvas = null, e.mouseX = 0, e.mouseY = 0, e.snapToPixelEnabled = !1, e.mouseInBounds = !1, e.tickOnUpdate = !0, e.mouseMoveOutside = !1, e.nextStage = null, e._pointerData = null, e._pointerCount = 0, e._primaryPointerID = null, e._mouseOverIntervalID = null, e.Container_initialize = e.initialize, e.initialize = function(t) {
			this.Container_initialize(), this.canvas = "string" == typeof t ? document.getElementById(t) : t, this._pointerData = {}, this.enableDOMEvents(!0)
		}, e.update = function() {
			if (this.canvas) {
				this.tickOnUpdate && (this.dispatchEvent("tickstart"), this._tick(arguments.length ? arguments : null), this.dispatchEvent("tickend")), this.dispatchEvent("drawstart"), t._snapToPixelEnabled = this.snapToPixelEnabled, this.autoClear && this.clear();
				var e = this.canvas.getContext("2d");
				e.save(), this.updateContext(e), this.draw(e, !1), e.restore(), this.dispatchEvent("drawend")
			}
		}, e.handleEvent = function(t) {
			"tick" == t.type && this.update(t)
		}, e.clear = function() {
			if (this.canvas) {
				var t = this.canvas.getContext("2d");
				t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1)
			}
		}, e.toDataURL = function(t, e) {
			e || (e = "image/png");
			var n, i = this.canvas.getContext("2d"),
				r = this.canvas.width,
				s = this.canvas.height;
			if (t) {
				n = i.getImageData(0, 0, r, s);
				var a = i.globalCompositeOperation;
				i.globalCompositeOperation = "destination-over", i.fillStyle = t, i.fillRect(0, 0, r, s)
			}
			var o = this.canvas.toDataURL(e);
			return t && (i.clearRect(0, 0, r + 1, s + 1), i.putImageData(n, 0, 0), i.globalCompositeOperation = a), o
		}, e.enableMouseOver = function(t) {
			if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null, 0 == t && this._testMouseOver(!0)), null == t) t = 20;
			else if (0 >= t) return;
			var e = this;
			this._mouseOverIntervalID = setInterval(function() {
				e._testMouseOver()
			}, 1e3 / Math.min(50, t))
		}, e.enableDOMEvents = function(t) {
			null == t && (t = !0);
			var e, n, i = this._eventListeners;
			if (!t && i) {
				for (e in i) n = i[e], n.t.removeEventListener(e, n.f, !1);
				this._eventListeners = null
			} else if (t && !i && this.canvas) {
				var r = window.addEventListener ? window : document,
					s = this;
				i = this._eventListeners = {}, i.mouseup = {
					t: r,
					f: function(t) {
						s._handleMouseUp(t)
					}
				}, i.mousemove = {
					t: r,
					f: function(t) {
						s._handleMouseMove(t)
					}
				}, i.dblclick = {
					t: r,
					f: function(t) {
						s._handleDoubleClick(t)
					}
				}, i.mousedown = {
					t: this.canvas,
					f: function(t) {
						s._handleMouseDown(t)
					}
				};
				for (e in i) n = i[e], n.t.addEventListener(e, n.f, !1)
			}
		}, e.clone = function() {
			var e = new t(null);
			return this.cloneProps(e), e
		}, e.toString = function() {
			return "[Stage (name=" + this.name + ")]"
		}, e._getElementRect = function(t) {
			var e;
			try {
				e = t.getBoundingClientRect()
			} catch (n) {
				e = {
					top: t.offsetTop,
					left: t.offsetLeft,
					width: t.offsetWidth,
					height: t.offsetHeight
				}
			}
			var i = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0),
				r = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0),
				s = window.getComputedStyle ? getComputedStyle(t) : t.currentStyle,
				a = parseInt(s.paddingLeft) + parseInt(s.borderLeftWidth),
				o = parseInt(s.paddingTop) + parseInt(s.borderTopWidth),
				l = parseInt(s.paddingRight) + parseInt(s.borderRightWidth),
				u = parseInt(s.paddingBottom) + parseInt(s.borderBottomWidth);
			return {
				left: e.left + i + a,
				right: e.right + i - l,
				top: e.top + r + o,
				bottom: e.bottom + r - u
			}
		}, e._getPointerData = function(t) {
			var e = this._pointerData[t];
			return e || (e = this._pointerData[t] = {
				x: 0,
				y: 0
			}, null == this._primaryPointerID && (this._primaryPointerID = t)), e
		}, e._handleMouseMove = function(t) {
			t || (t = window.event), this._handlePointerMove(-1, t, t.pageX, t.pageY)
		}, e._handlePointerMove = function(t, e, n, i) {
			if (this.canvas) {
				var r = this._getPointerData(t),
					s = r.inBounds;
				if (this._updatePointerPosition(t, e, n, i), s || r.inBounds || this.mouseMoveOutside) {
					-1 == t && r.inBounds == !s && this._dispatchMouseEvent(this, s ? "mouseleave" : "mouseenter", !1, t, r, e), this._dispatchMouseEvent(this, "stagemousemove", !1, t, r, e), this._dispatchMouseEvent(r.target, "pressmove", !0, t, r, e);
					var a = r.event;
					a && a.hasEventListener("mousemove") && a.dispatchEvent(new createjs.MouseEvent("mousemove", !1, !1, r.x, r.y, e, t, t == this._primaryPointerID, r.rawX, r.rawY), oTarget), this.nextStage && this.nextStage._handlePointerMove(t, e, n, i)
				}
			}
		}, e._updatePointerPosition = function(t, e, n, i) {
			var r = this._getElementRect(this.canvas);
			n -= r.left, i -= r.top;
			var s = this.canvas.width,
				a = this.canvas.height;
			n /= (r.right - r.left) / s, i /= (r.bottom - r.top) / a;
			var o = this._getPointerData(t);
			(o.inBounds = n >= 0 && i >= 0 && s - 1 >= n && a - 1 >= i) ? (o.x = n, o.y = i) : this.mouseMoveOutside && (o.x = 0 > n ? 0 : n > s - 1 ? s - 1 : n, o.y = 0 > i ? 0 : i > a - 1 ? a - 1 : i), o.posEvtObj = e, o.rawX = n, o.rawY = i, t == this._primaryPointerID && (this.mouseX = o.x, this.mouseY = o.y, this.mouseInBounds = o.inBounds)
		}, e._handleMouseUp = function(t) {
			this._handlePointerUp(-1, t, !1)
		}, e._handlePointerUp = function(t, e, n) {
			var i = this._getPointerData(t);
			this._dispatchMouseEvent(this, "stagemouseup", !1, t, i, e);
			var r = i.target;
			r && (this._getObjectsUnderPoint(i.x, i.y, null, !0) == r && this._dispatchMouseEvent(r, "click", !0, t, i, e), this._dispatchMouseEvent(r, "pressup", !0, t, i, e));
			var s = i.event;
			s && s.hasEventListener("mouseup") && s.dispatchEvent(new createjs.MouseEvent("mouseup", !1, !1, i.x, i.y, e, t, t == this._primaryPointerID, i.rawX, i.rawY), r), n ? (t == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[t]) : i.event = i.target = null, this.nextStage && this.nextStage._handlePointerUp(t, e, n)
		}, e._handleMouseDown = function(t) {
			this._handlePointerDown(-1, t)
		}, e._handlePointerDown = function(t, e, n, i) {
			null != i && this._updatePointerPosition(t, e, n, i);
			var r = this._getPointerData(t);
			this._dispatchMouseEvent(this, "stagemousedown", !1, t, r, e), r.target = this._getObjectsUnderPoint(r.x, r.y, null, !0), this._dispatchMouseEvent(r.target, "mousedown", !0, t, r, e), this.nextStage && this.nextStage._handlePointerDown(t, e, n, i)
		}, e._testMouseOver = function(t) {
			if (-1 == this._primaryPointerID && (t || this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
				var e, n, i, r, s = this._getPointerData(-1),
					a = s.posEvtObj,
					o = -1,
					l = "";
				(t || this.mouseInBounds && a && a.target == this.canvas) && (e = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, !0), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY);
				var u = this._mouseOverTarget || [],
					c = u[u.length - 1],
					h = this._mouseOverTarget = [];
				for (n = e; n;) h.unshift(n), null != n.cursor && (l = n.cursor), n = n.parent;
				for (this.canvas.style.cursor = l, i = 0, r = h.length; r > i && h[i] == u[i]; i++) o = i;
				for (c != e && this._dispatchMouseEvent(c, "mouseout", !0, -1, s, a), i = u.length - 1; i > o; i--) this._dispatchMouseEvent(u[i], "rollout", !1, -1, s, a);
				for (i = h.length - 1; i > o; i--) this._dispatchMouseEvent(h[i], "rollover", !1, -1, s, a);
				c != e && this._dispatchMouseEvent(e, "mouseover", !0, -1, s, a)
			}
		}, e._handleDoubleClick = function(t) {
			var e = this._getPointerData(-1),
				n = this._getObjectsUnderPoint(e.x, e.y, null, !0);
			this._dispatchMouseEvent(n, "dblclick", !0, -1, e, t), this.nextStage && this.nextStage._handleDoubleClick(t)
		}, e._dispatchMouseEvent = function(t, e, n, i, r, s) {
			if (t && (n || t.hasEventListener(e))) {
				var a = new createjs.MouseEvent(e, n, !1, r.x, r.y, s, i, i == this._primaryPointerID, r.rawX, r.rawY);
				t.dispatchEvent(a)
			}
		}, createjs.Stage = t
	}(), this.createjs = this.createjs || {},
	function() {
		var t = function(t) {
				this.initialize(t)
			},
			e = t.prototype = new createjs.DisplayObject;
		e.image = null, e.snapToPixel = !0, e.sourceRect = null, e.DisplayObject_initialize = e.initialize, e.initialize = function(t) {
			this.DisplayObject_initialize(), "string" == typeof t ? (this.image = new Image, this.image.src = t) : this.image = t
		}, e.isVisible = function() {
			var t = this.cacheCanvas || this.image && (this.image.complete || this.image.getContext || this.image.readyState >= 2);
			return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
		}, e.DisplayObject_draw = e.draw, e.draw = function(t, e) {
			if (this.DisplayObject_draw(t, e)) return !0;
			var n = this.sourceRect;
			return n ? t.drawImage(this.image, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height) : t.drawImage(this.image, 0, 0), !0
		}, e.DisplayObject_getBounds = e.getBounds, e.getBounds = function() {
			var t = this.DisplayObject_getBounds();
			if (t) return t;
			var e = this.sourceRect || this.image,
				n = this.image && (this.image.complete || this.image.getContext || this.image.readyState >= 2);
			return n ? this._rectangle.initialize(0, 0, e.width, e.height) : null
		}, e.clone = function() {
			var e = new t(this.image);
			return this.sourceRect && (e.sourceRect = this.sourceRect.clone()), this.cloneProps(e), e
		}, e.toString = function() {
			return "[Bitmap (name=" + this.name + ")]"
		}, createjs.Bitmap = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e) {
				this.initialize(t, e)
			},
			e = t.prototype = new createjs.DisplayObject;
		e.currentFrame = 0, e.currentAnimation = null, e.paused = !0, e.spriteSheet = null, e.snapToPixel = !0, e.offset = 0, e.currentAnimationFrame = 0, e.framerate = 0, e._advanceCount = 0, e._animation = null, e._currentFrame = null, e.DisplayObject_initialize = e.initialize, e.initialize = function(t, e) {
			this.DisplayObject_initialize(), this.spriteSheet = t, e && this.gotoAndPlay(e)
		}, e.isVisible = function() {
			var t = this.cacheCanvas || this.spriteSheet.complete;
			return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
		}, e.DisplayObject_draw = e.draw, e.draw = function(t, e) {
			if (this.DisplayObject_draw(t, e)) return !0;
			this._normalizeFrame();
			var n = this.spriteSheet.getFrame(0 | this._currentFrame);
			if (!n) return !1;
			var i = n.rect;
			return t.drawImage(n.image, i.x, i.y, i.width, i.height, -n.regX, -n.regY, i.width, i.height), !0
		}, e.play = function() {
			this.paused = !1
		}, e.stop = function() {
			this.paused = !0
		}, e.gotoAndPlay = function(t) {
			this.paused = !1, this._goto(t)
		}, e.gotoAndStop = function(t) {
			this.paused = !0, this._goto(t)
		}, e.advance = function(t) {
			var e = this._animation && this._animation.speed || 1,
				n = this.framerate || this.spriteSheet.framerate,
				i = n && null != t ? t / (1e3 / n) : 1;
			this._animation ? this.currentAnimationFrame += i * e : this._currentFrame += i * e, this._normalizeFrame()
		}, e.DisplayObject_getBounds = e.getBounds, e.getBounds = function() {
			return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle)
		}, e.clone = function() {
			var e = new t(this.spriteSheet);
			return this.cloneProps(e), e
		}, e.toString = function() {
			return "[Sprite (name=" + this.name + ")]"
		}, e.DisplayObject__tick = e._tick, e._tick = function(t) {
			this.paused || this.advance(t && t[0] && t[0].delta), this.DisplayObject__tick(t)
		}, e._normalizeFrame = function() {
			var t, e = this._animation,
				n = this.paused,
				i = this._currentFrame,
				r = this.currentAnimationFrame;
			if (e)
				if (t = e.frames.length, (0 | r) >= t) {
					var s = e.next;
					if (this._dispatchAnimationEnd(e, i, n, s, t - 1));
					else {
						if (s) return this._goto(s, r - t);
						this.paused = !0, r = this.currentAnimationFrame = e.frames.length - 1, this._currentFrame = e.frames[r]
					}
				} else this._currentFrame = e.frames[0 | r];
			else if (t = this.spriteSheet.getNumFrames(), i >= t && !this._dispatchAnimationEnd(e, i, n, t - 1) && (this._currentFrame -= t) >= t) return this._normalizeFrame();
			this.currentFrame = 0 | this._currentFrame
		}, e._dispatchAnimationEnd = function(t, e, n, i, r) {
			var s = t ? t.name : null;
			if (this.hasEventListener("animationend")) {
				var a = new createjs.Event("animationend");
				a.name = s, a.next = i, this.dispatchEvent(a)
			}
			return !n && this.paused && (this.currentAnimationFrame = r), this.paused != n || this._animation != t || this._currentFrame != e
		}, e.DisplayObject_cloneProps = e.cloneProps, e.cloneProps = function(t) {
			this.DisplayObject_cloneProps(t), t.currentFrame = this.currentFrame, t._currentFrame = this._currentFrame, t.currentAnimation = this.currentAnimation, t.paused = this.paused, t._animation = this._animation, t.currentAnimationFrame = this.currentAnimationFrame, t.framerate = this.framerate
		}, e._goto = function(t, e) {
			if (isNaN(t)) {
				var n = this.spriteSheet.getAnimation(t);
				n && (this.currentAnimationFrame = e || 0, this._animation = n, this.currentAnimation = t, this._normalizeFrame())
			} else this.currentAnimationFrame = 0, this.currentAnimation = this._animation = null, this._currentFrame = t, this._normalizeFrame()
		}, createjs.Sprite = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = "BitmapAnimation is deprecated in favour of Sprite. See VERSIONS file for info on changes.";
		if (!createjs.Sprite) throw t;
		(createjs.BitmapAnimation = function(e) {
			console.log(t), this.initialize(e)
		}).prototype = new createjs.Sprite
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t) {
				this.initialize(t)
			},
			e = t.prototype = new createjs.DisplayObject;
		e.graphics = null, e.DisplayObject_initialize = e.initialize, e.initialize = function(t) {
			this.DisplayObject_initialize(), this.graphics = t ? t : new createjs.Graphics
		}, e.isVisible = function() {
			var t = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
			return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
		}, e.DisplayObject_draw = e.draw, e.draw = function(t, e) {
			return this.DisplayObject_draw(t, e) ? !0 : (this.graphics.draw(t), !0)
		}, e.clone = function(e) {
			var n = new t(e && this.graphics ? this.graphics.clone() : this.graphics);
			return this.cloneProps(n), n
		}, e.toString = function() {
			return "[Shape (name=" + this.name + ")]"
		}, createjs.Shape = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e, n) {
				this.initialize(t, e, n)
			},
			e = t.prototype = new createjs.DisplayObject,
			n = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
		n.getContext && (t._workingContext = n.getContext("2d"), n.width = n.height = 1), t.H_OFFSETS = {
			start: 0,
			left: 0,
			center: -.5,
			end: -1,
			right: -1
		}, t.V_OFFSETS = {
			top: 0,
			hanging: -.01,
			middle: -.4,
			alphabetic: -.8,
			ideographic: -.85,
			bottom: -1
		}, e.text = "", e.font = null, e.color = null, e.textAlign = "left", e.textBaseline = "top", e.maxWidth = null, e.outline = 0, e.lineHeight = 0, e.lineWidth = null, e.DisplayObject_initialize = e.initialize, e.initialize = function(t, e, n) {
			this.DisplayObject_initialize(), this.text = t, this.font = e, this.color = n
		}, e.isVisible = function() {
			var t = this.cacheCanvas || null != this.text && "" !== this.text;
			return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
		}, e.DisplayObject_draw = e.draw, e.draw = function(t, e) {
			if (this.DisplayObject_draw(t, e)) return !0;
			var n = this.color || "#000";
			return this.outline ? (t.strokeStyle = n, t.lineWidth = 1 * this.outline) : t.fillStyle = n, this._drawText(this._prepContext(t)), !0
		}, e.getMeasuredWidth = function() {
			return this._prepContext(t._workingContext).measureText(this.text).width
		}, e.getMeasuredLineHeight = function() {
			return 1.2 * this._prepContext(t._workingContext).measureText("M").width
		}, e.getMeasuredHeight = function() {
			return this._drawText(null, {}).height
		}, e.DisplayObject_getBounds = e.getBounds, e.getBounds = function() {
			var e = this.DisplayObject_getBounds();
			if (e) return e;
			if (null == this.text || "" == this.text) return null;
			var n = this._drawText(null, {}),
				i = this.maxWidth && this.maxWidth < n.width ? this.maxWidth : n.width,
				r = i * t.H_OFFSETS[this.textAlign || "left"],
				s = this.lineHeight || this.getMeasuredLineHeight(),
				a = s * t.V_OFFSETS[this.textBaseline || "top"];
			return this._rectangle.initialize(r, a, i, n.height)
		}, e.clone = function() {
			var e = new t(this.text, this.font, this.color);
			return this.cloneProps(e), e
		}, e.toString = function() {
			return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]"
		}, e.DisplayObject_cloneProps = e.cloneProps, e.cloneProps = function(t) {
			this.DisplayObject_cloneProps(t), t.textAlign = this.textAlign, t.textBaseline = this.textBaseline, t.maxWidth = this.maxWidth, t.outline = this.outline, t.lineHeight = this.lineHeight, t.lineWidth = this.lineWidth
		}, e._prepContext = function(t) {
			return t.font = this.font, t.textAlign = this.textAlign || "left", t.textBaseline = this.textBaseline || "top", t
		}, e._drawText = function(e, n) {
			var i = !!e;
			i || (e = this._prepContext(t._workingContext));
			for (var r = this.lineHeight || this.getMeasuredLineHeight(), s = 0, a = 0, o = String(this.text).split(/(?:\r\n|\r|\n)/), l = 0, u = o.length; u > l; l++) {
				var c = o[l],
					h = null;
				if (null != this.lineWidth && (h = e.measureText(c).width) > this.lineWidth) {
					var d = c.split(/(\s)/);
					c = d[0], h = e.measureText(c).width;
					for (var f = 1, p = d.length; p > f; f += 2) {
						var g = e.measureText(d[f] + d[f + 1]).width;
						h + g > this.lineWidth ? (i && this._drawTextLine(e, c, a * r), h > s && (s = h), c = d[f + 1], h = e.measureText(c).width, a++) : (c += d[f] + d[f + 1], h += g)
					}
				}
				i && this._drawTextLine(e, c, a * r), n && null == h && (h = e.measureText(c).width), h > s && (s = h), a++
			}
			return n && (n.count = a, n.width = s, n.height = a * r), n
		}, e._drawTextLine = function(t, e, n) {
			this.outline ? t.strokeText(e, 0, n, this.maxWidth || 65535) : t.fillText(e, 0, n, this.maxWidth || 65535)
		}, createjs.Text = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";

		function t(t, e) {
			this.initialize(t, e)
		}
		var e = t.prototype = new createjs.DisplayObject;
		e.text = "", e.spriteSheet = null, e.lineHeight = 0, e.letterSpacing = 0, e.spaceWidth = 0, e.DisplayObject_initialize = e.initialize, e.initialize = function(t, e) {
			this.DisplayObject_initialize(), this.text = t, this.spriteSheet = e
		}, e.DisplayObject_draw = e.draw, e.draw = function(t, e) {
			return this.DisplayObject_draw(t, e) ? !0 : void this._drawText(t)
		}, e.isVisible = function() {
			var t = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
			return !!(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && t)
		}, e.getBounds = function() {
			var t = this._rectangle;
			return this._drawText(null, t), t.width ? t : null
		}, e._getFrame = function(t, e) {
			var n, i = e.getAnimation(t);
			return i || (t != (n = t.toUpperCase()) || t != (n = t.toLowerCase()) || (n = null), n && (i = e.getAnimation(n))), i && e.getFrame(i.frames[0])
		}, e._getLineHeight = function(t) {
			var e = this._getFrame("1", t) || this._getFrame("T", t) || this._getFrame("L", t) || t.getFrame(0);
			return e ? e.rect.height : 1
		}, e._getSpaceWidth = function(t) {
			var e = this._getFrame("1", t) || this._getFrame("l", t) || this._getFrame("e", t) || this._getFrame("a", t) || t.getFrame(0);
			return e ? e.rect.width : 1
		}, e._drawText = function(t, e) {
			var n, i, r, s = 0,
				a = 0,
				o = this.spaceWidth,
				l = this.lineHeight,
				u = this.spriteSheet,
				c = !!this._getFrame(" ", u);
			c || 0 != o || (o = this._getSpaceWidth(u)), 0 == l && (l = this._getLineHeight(u));
			for (var h = 0, d = 0, f = this.text.length; f > d; d++) {
				var p = this.text.charAt(d);
				if (c || " " != p)
					if ("\n" != p && "\r" != p) {
						var g = this._getFrame(p, u);
						if (g) {
							var m = g.rect;
							r = g.regX, n = m.width, t && t.drawImage(g.image, m.x, m.y, n, i = m.height, s - r, a - g.regY, n, i), s += n + this.letterSpacing
						}
					} else "\r" == p && "\n" == this.text.charAt(d + 1) && d++, s - r > h && (h = s - r), s = 0, a += l;
				else s += o
			}
			s - r > h && (h = s - r), e && (e.width = h - this.letterSpacing, e.height = a + l)
		}, createjs.BitmapText = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function() {
				throw "SpriteSheetUtils cannot be instantiated"
			},
			e = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
		e.getContext && (t._workingCanvas = e, t._workingContext = e.getContext("2d"), e.width = e.height = 1), t.addFlippedFrames = function(e, n, i, r) {
			if (n || i || r) {
				var s = 0;
				n && t._flip(e, ++s, !0, !1), i && t._flip(e, ++s, !1, !0), r && t._flip(e, ++s, !0, !0)
			}
		}, t.extractFrame = function(e, n) {
			isNaN(n) && (n = e.getAnimation(n).frames[0]);
			var i = e.getFrame(n);
			if (!i) return null;
			var r = i.rect,
				s = t._workingCanvas;
			s.width = r.width, s.height = r.height, t._workingContext.drawImage(i.image, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
			var a = new Image;
			return a.src = s.toDataURL("image/png"), a
		}, t.mergeAlpha = function(t, e, n) {
			n || (n = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), n.width = Math.max(e.width, t.width), n.height = Math.max(e.height, t.height);
			var i = n.getContext("2d");
			return i.save(), i.drawImage(t, 0, 0), i.globalCompositeOperation = "destination-in", i.drawImage(e, 0, 0), i.restore(), n
		}, t._flip = function(e, n, i, r) {
			for (var s = e._images, a = t._workingCanvas, o = t._workingContext, l = s.length / n, u = 0; l > u; u++) {
				var c = s[u];
				c.__tmp = u, o.setTransform(1, 0, 0, 1, 0, 0), o.clearRect(0, 0, a.width + 1, a.height + 1), a.width = c.width, a.height = c.height, o.setTransform(i ? -1 : 1, 0, 0, r ? -1 : 1, i ? c.width : 0, r ? c.height : 0), o.drawImage(c, 0, 0);
				var h = new Image;
				h.src = a.toDataURL("image/png"), h.width = c.width, h.height = c.height, s.push(h)
			}
			var d = e._frames,
				f = d.length / n;
			for (u = 0; f > u; u++) {
				c = d[u];
				var p = c.rect.clone();
				h = s[c.image.__tmp + l * n];
				var g = {
					image: h,
					rect: p,
					regX: c.regX,
					regY: c.regY
				};
				i && (p.x = h.width - p.x - p.width, g.regX = p.width - c.regX), r && (p.y = h.height - p.y - p.height, g.regY = p.height - c.regY), d.push(g)
			}
			var m = "_" + (i ? "h" : "") + (r ? "v" : ""),
				v = e._animations,
				_ = e._data,
				y = v.length / n;
			for (u = 0; y > u; u++) {
				var w = v[u];
				c = _[w];
				var b = {
					name: w + m,
					frequency: c.frequency,
					next: c.next,
					frames: []
				};
				c.next && (b.next += m), d = c.frames;
				for (var x = 0, S = d.length; S > x; x++) b.frames.push(d[x] + f * n);
				_[b.name] = b, v.push(b.name)
			}
		}, createjs.SpriteSheetUtils = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function() {
				this.initialize()
			},
			e = t.prototype = new createjs.EventDispatcher;
		t.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", t.ERR_RUNNING = "a build is already running", e.maxWidth = 2048, e.maxHeight = 2048, e.spriteSheet = null, e.scale = 1, e.padding = 1, e.timeSlice = .3, e.progress = -1, e._frames = null, e._animations = null, e._data = null, e._nextFrameIndex = 0, e._index = 0, e._timerID = null, e._scale = 1, e.initialize = function() {
			this._frames = [], this._animations = {}
		}, e.addFrame = function(e, n, i, r, s, a) {
			if (this._data) throw t.ERR_RUNNING;
			var o = n || e.bounds || e.nominalBounds;
			return !o && e.getBounds && (o = e.getBounds()), o ? (i = i || 1, this._frames.push({
				source: e,
				sourceRect: o,
				scale: i,
				funct: r,
				params: s,
				scope: a,
				index: this._frames.length,
				height: o.height * i
			}) - 1) : null
		}, e.addAnimation = function(e, n, i, r) {
			if (this._data) throw t.ERR_RUNNING;
			this._animations[e] = {
				frames: n,
				next: i,
				frequency: r
			}
		}, e.addMovieClip = function(e, n, i) {
			if (this._data) throw t.ERR_RUNNING;
			var r = e.frameBounds,
				s = n || e.bounds || e.nominalBounds;
			if (!s && e.getBounds && (s = e.getBounds()), !s && !r) return null;
			for (var a = this._frames.length, o = e.timeline.duration, l = 0; o > l; l++) {
				var u = r && r[l] ? r[l] : s;
				this.addFrame(e, u, i, function(t) {
					var e = this.actionsEnabled;
					this.actionsEnabled = !1, this.gotoAndStop(t), this.actionsEnabled = e
				}, [l], e)
			}
			var c = e.timeline._labels,
				h = [];
			for (var d in c) h.push({
				index: c[d],
				label: d
			});
			if (h.length) {
				h.sort(function(t, e) {
					return t.index - e.index
				});
				for (var l = 0, f = h.length; f > l; l++) {
					for (var p = h[l].label, g = a + h[l].index, m = a + (l == f - 1 ? o : h[l + 1].index), v = [], _ = g; m > _; _++) v.push(_);
					this.addAnimation(p, v, !0)
				}
			}
		}, e.build = function() {
			if (this._data) throw t.ERR_RUNNING;
			for (this._startBuild(); this._drawNext(););
			return this._endBuild(), this.spriteSheet
		}, e.buildAsync = function(e) {
			if (this._data) throw t.ERR_RUNNING;
			this.timeSlice = e, this._startBuild();
			var n = this;
			this._timerID = setTimeout(function() {
				n._run()
			}, 50 - 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)))
		}, e.stopAsync = function() {
			clearTimeout(this._timerID), this._data = null
		}, e.clone = function() {
			throw "SpriteSheetBuilder cannot be cloned."
		}, e.toString = function() {
			return "[SpriteSheetBuilder]"
		}, e._startBuild = function() {
			var e = this.padding || 0;
			this.progress = 0, this.spriteSheet = null, this._index = 0, this._scale = this.scale;
			var n = [];
			this._data = {
				images: [],
				frames: n,
				animations: this._animations
			};
			var i = this._frames.slice();
			if (i.sort(function(t, e) {
					return t.height <= e.height ? -1 : 1
				}), i[i.length - 1].height + 2 * e > this.maxHeight) throw t.ERR_DIMENSIONS;
			for (var r = 0, s = 0, a = 0; i.length;) {
				var o = this._fillRow(i, r, a, n, e);
				if (o.w > s && (s = o.w), r += o.h, !o.h || !i.length) {
					var l = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
					l.width = this._getSize(s, this.maxWidth), l.height = this._getSize(r, this.maxHeight), this._data.images[a] = l, o.h || (s = r = 0, a++)
				}
			}
		}, e._getSize = function(t, e) {
			for (var n = 4; Math.pow(2, ++n) < t;);
			return Math.min(e, Math.pow(2, n))
		}, e._fillRow = function(e, n, i, r, s) {
			var a = this.maxWidth,
				o = this.maxHeight;
			n += s;
			for (var l = o - n, u = s, c = 0, h = e.length - 1; h >= 0; h--) {
				var d = e[h],
					f = this._scale * d.scale,
					p = d.sourceRect,
					g = d.source,
					m = Math.floor(f * p.x - s),
					v = Math.floor(f * p.y - s),
					_ = Math.ceil(f * p.height + 2 * s),
					y = Math.ceil(f * p.width + 2 * s);
				if (y > a) throw t.ERR_DIMENSIONS;
				_ > l || u + y > a || (d.img = i, d.rect = new createjs.Rectangle(u, n, y, _), c = c || _, e.splice(h, 1), r[d.index] = [u, n, y, _, i, Math.round(-m + f * g.regX - s), Math.round(-v + f * g.regY - s)], u += y)
			}
			return {
				w: u,
				h: c
			}
		}, e._endBuild = function() {
			this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this.progress = 1, this.dispatchEvent("complete")
		}, e._run = function() {
			for (var t = 50 * Math.max(.01, Math.min(.99, this.timeSlice || .3)), e = (new Date).getTime() + t, n = !1; e > (new Date).getTime();)
				if (!this._drawNext()) {
					n = !0;
					break
				}
			if (n) this._endBuild();
			else {
				var i = this;
				this._timerID = setTimeout(function() {
					i._run()
				}, 50 - t)
			}
			var r = this.progress = this._index / this._frames.length;
			if (this.hasEventListener("progress")) {
				var s = new createjs.Event("progress");
				s.progress = r, this.dispatchEvent(s)
			}
		}, e._drawNext = function() {
			var t = this._frames[this._index],
				e = t.scale * this._scale,
				n = t.rect,
				i = t.sourceRect,
				r = this._data.images[t.img],
				s = r.getContext("2d");
			return t.funct && t.funct.apply(t.scope, t.params), s.save(), s.beginPath(), s.rect(n.x, n.y, n.width, n.height), s.clip(), s.translate(Math.ceil(n.x - i.x * e), Math.ceil(n.y - i.y * e)), s.scale(e, e), t.source.draw(s), s.restore(), ++this._index < this._frames.length
		}, createjs.SpriteSheetBuilder = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t) {
				this.initialize(t)
			},
			e = t.prototype = new createjs.DisplayObject;
		e.htmlElement = null, e._oldMtx = null, e._visible = !1, e.DisplayObject_initialize = e.initialize, e.initialize = function(t) {
			"string" == typeof t && (t = document.getElementById(t)), this.DisplayObject_initialize(), this.mouseEnabled = !1, this.htmlElement = t;
			var e = t.style;
			e.position = "absolute", e.transformOrigin = e.WebkitTransformOrigin = e.msTransformOrigin = e.MozTransformOrigin = e.OTransformOrigin = "0% 0%"
		}, e.isVisible = function() {
			return null != this.htmlElement
		}, e.draw = function() {
			return this.visible && (this._visible = !0), !0
		}, e.cache = function() {}, e.uncache = function() {}, e.updateCache = function() {}, e.hitTest = function() {}, e.localToGlobal = function() {}, e.globalToLocal = function() {}, e.localToLocal = function() {}, e.clone = function() {
			throw "DOMElement cannot be cloned."
		}, e.toString = function() {
			return "[DOMElement (name=" + this.name + ")]"
		}, e.DisplayObject__tick = e._tick, e._tick = function(t) {
			var e = this.getStage();
			this._visible = !1, e && e.on("drawend", this._handleDrawEnd, this, !0), this.DisplayObject__tick(t)
		}, e._handleDrawEnd = function() {
			var t = this.htmlElement;
			if (t) {
				var e = t.style,
					n = this._visible ? "visible" : "hidden";
				if (n != e.visibility && (e.visibility = n), this._visible) {
					var i = this.getConcatenatedMatrix(this._matrix),
						r = this._oldMtx,
						s = 1e4;
					if (r && r.alpha == i.alpha || (e.opacity = "" + (0 | i.alpha * s) / s, r && (r.alpha = i.alpha)), !r || r.tx != i.tx || r.ty != i.ty || r.a != i.a || r.b != i.b || r.c != i.c || r.d != i.d) {
						var a = "matrix(" + (0 | i.a * s) / s + "," + (0 | i.b * s) / s + "," + (0 | i.c * s) / s + "," + (0 | i.d * s) / s + "," + (0 | i.tx + .5);
						e.transform = e.WebkitTransform = e.OTransform = e.msTransform = a + "," + (0 | i.ty + .5) + ")", e.MozTransform = a + "px," + (0 | i.ty + .5) + "px)", this._oldMtx = r ? r.copy(i) : i.clone()
					}
				}
			}
		}, createjs.DOMElement = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function() {
				this.initialize()
			},
			e = t.prototype;
		e.initialize = function() {}, e.getBounds = function() {
			return null
		}, e.applyFilter = function() {}, e.toString = function() {
			return "[Filter]"
		}, e.clone = function() {
			return new t
		}, createjs.Filter = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e, n) {
				this.initialize(t, e, n)
			},
			e = t.prototype = new createjs.Filter;
		e.initialize = function(t, e, n) {
			(isNaN(t) || 0 > t) && (t = 0), this.blurX = 0 | t, (isNaN(e) || 0 > e) && (e = 0), this.blurY = 0 | e, (isNaN(n) || 1 > n) && (n = 1), this.quality = 0 | n
		}, e.blurX = 0, e.blurY = 0, e.quality = 1, e.mul_table = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1], e.shg_table = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9], e.getBounds = function() {
			var t = .5 * Math.pow(this.quality, .6);
			return new createjs.Rectangle(-this.blurX * t, -this.blurY * t, 2 * this.blurX * t, 2 * this.blurY * t)
		}, e.applyFilter = function(t, e, n, i, r, s, a, o) {
			s = s || t, null == a && (a = e), null == o && (o = n);
			try {
				var l = t.getImageData(e, n, i, r)
			} catch (u) {
				return !1
			}
			var c = this.blurX / 2;
			if (isNaN(c) || 0 > c) return !1;
			c |= 0;
			var h = this.blurY / 2;
			if (isNaN(h) || 0 > h) return !1;
			if (h |= 0, 0 == c && 0 == h) return !1;
			var d = this.quality;
			(isNaN(d) || 1 > d) && (d = 1), d |= 0, d > 3 && (d = 3), 1 > d && (d = 1);
			var e, n, f, p, g, m, v, _, y, w, b, x, S, T, E, L = l.data,
				j = c + c + 1,
				P = h + h + 1,
				I = i - 1,
				C = r - 1,
				N = c + 1,
				O = h + 1,
				A = {
					r: 0,
					b: 0,
					g: 0,
					a: 0,
					next: null
				},
				D = A;
			for (f = 1; j > f; f++) D = D.next = {
				r: 0,
				b: 0,
				g: 0,
				a: 0,
				next: null
			};
			D.next = A;
			var M = {
					r: 0,
					b: 0,
					g: 0,
					a: 0,
					next: null
				},
				k = M;
			for (f = 1; P > f; f++) k = k.next = {
				r: 0,
				b: 0,
				g: 0,
				a: 0,
				next: null
			};
			k.next = M;
			for (var R = null; d-- > 0;) {
				v = m = 0;
				var F = this.mul_table[c],
					B = this.shg_table[c];
				for (n = r; --n > -1;) {
					for (_ = N * (x = L[m]), y = N * (S = L[m + 1]), w = N * (T = L[m + 2]), b = N * (E = L[m + 3]), D = A, f = N; --f > -1;) D.r = x, D.g = S, D.b = T, D.a = E, D = D.next;
					for (f = 1; N > f; f++) p = m + ((f > I ? I : f) << 2), _ += D.r = L[p], y += D.g = L[p + 1], w += D.b = L[p + 2], b += D.a = L[p + 3], D = D.next;
					for (R = A, e = 0; i > e; e++) L[m++] = _ * F >>> B, L[m++] = y * F >>> B, L[m++] = w * F >>> B, L[m++] = b * F >>> B, p = v + ((p = e + c + 1) < I ? p : I) << 2, _ -= R.r - (R.r = L[p]), y -= R.g - (R.g = L[p + 1]), w -= R.b - (R.b = L[p + 2]), b -= R.a - (R.a = L[p + 3]), R = R.next;
					v += i
				}
				for (F = this.mul_table[h], B = this.shg_table[h], e = 0; i > e; e++) {
					for (m = e << 2, _ = O * (x = L[m]), y = O * (S = L[m + 1]), w = O * (T = L[m + 2]), b = O * (E = L[m + 3]), k = M, f = 0; O > f; f++) k.r = x, k.g = S, k.b = T, k.a = E, k = k.next;
					for (g = i, f = 1; h >= f; f++) m = g + e << 2, _ += k.r = L[m], y += k.g = L[m + 1], w += k.b = L[m + 2], b += k.a = L[m + 3], k = k.next, C > f && (g += i);
					if (m = e, R = M, d > 0)
						for (n = 0; r > n; n++) p = m << 2, L[p + 3] = E = b * F >>> B, E > 0 ? (L[p] = _ * F >>> B, L[p + 1] = y * F >>> B, L[p + 2] = w * F >>> B) : L[p] = L[p + 1] = L[p + 2] = 0, p = e + ((p = n + O) < C ? p : C) * i << 2, _ -= R.r - (R.r = L[p]), y -= R.g - (R.g = L[p + 1]), w -= R.b - (R.b = L[p + 2]), b -= R.a - (R.a = L[p + 3]), R = R.next, m += i;
					else
						for (n = 0; r > n; n++) p = m << 2, L[p + 3] = E = b * F >>> B, E > 0 ? (E = 255 / E, L[p] = (_ * F >>> B) * E, L[p + 1] = (y * F >>> B) * E, L[p + 2] = (w * F >>> B) * E) : L[p] = L[p + 1] = L[p + 2] = 0, p = e + ((p = n + O) < C ? p : C) * i << 2, _ -= R.r - (R.r = L[p]), y -= R.g - (R.g = L[p + 1]), w -= R.b - (R.b = L[p + 2]), b -= R.a - (R.a = L[p + 3]), R = R.next, m += i
				}
			}
			return s.putImageData(l, a, o), !0
		}, e.clone = function() {
			return new t(this.blurX, this.blurY, this.quality)
		}, e.toString = function() {
			return "[BlurFilter]"
		}, createjs.BlurFilter = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t) {
				this.initialize(t)
			},
			e = t.prototype = new createjs.Filter;
		e.initialize = function(t) {
			this.alphaMap = t
		}, e.alphaMap = null, e._alphaMap = null, e._mapData = null, e.applyFilter = function(t, e, n, i, r, s, a, o) {
			if (!this.alphaMap) return !0;
			if (!this._prepAlphaMap()) return !1;
			s = s || t, null == a && (a = e), null == o && (o = n);
			try {
				var l = t.getImageData(e, n, i, r)
			} catch (u) {
				return !1
			}
			for (var c = l.data, h = this._mapData, d = c.length, f = 0; d > f; f += 4) c[f + 3] = h[f] || 0;
			return l.data = c, s.putImageData(l, a, o), !0
		}, e.clone = function() {
			return new t(this.alphaMap)
		}, e.toString = function() {
			return "[AlphaMapFilter]"
		}, e._prepAlphaMap = function() {
			if (!this.alphaMap) return !1;
			if (this.alphaMap == this._alphaMap && this._mapData) return !0;
			this._mapData = null;
			var t, e = this._alphaMap = this.alphaMap,
				n = e;
			e instanceof HTMLCanvasElement ? t = n.getContext("2d") : (n = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), n.width = e.width, n.height = e.height, t = n.getContext("2d"), t.drawImage(e, 0, 0));
			try {
				var i = t.getImageData(0, 0, e.width, e.height)
			} catch (r) {
				return !1
			}
			return this._mapData = i.data, !0
		}, createjs.AlphaMapFilter = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t) {
				this.initialize(t)
			},
			e = t.prototype = new createjs.Filter;
		e.initialize = function(t) {
			this.mask = t
		}, e.mask = null, e.applyFilter = function(t, e, n, i, r, s, a, o) {
			return this.mask ? (s = s || t, null == a && (a = e), null == o && (o = n), s.save(), s.globalCompositeOperation = "destination-in", s.drawImage(this.mask, a, o), s.restore(), !0) : !0
		}, e.clone = function() {
			return new t(this.mask)
		}, e.toString = function() {
			return "[AlphaMaskFilter]"
		}, createjs.AlphaMaskFilter = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e, n, i, r, s, a, o) {
				this.initialize(t, e, n, i, r, s, a, o)
			},
			e = t.prototype = new createjs.Filter;
		e.redMultiplier = 1, e.greenMultiplier = 1, e.blueMultiplier = 1, e.alphaMultiplier = 1, e.redOffset = 0, e.greenOffset = 0, e.blueOffset = 0, e.alphaOffset = 0, e.initialize = function(t, e, n, i, r, s, a, o) {
			this.redMultiplier = null != t ? t : 1, this.greenMultiplier = null != e ? e : 1, this.blueMultiplier = null != n ? n : 1, this.alphaMultiplier = null != i ? i : 1, this.redOffset = r || 0, this.greenOffset = s || 0, this.blueOffset = a || 0, this.alphaOffset = o || 0
		}, e.applyFilter = function(t, e, n, i, r, s, a, o) {
			s = s || t, null == a && (a = e), null == o && (o = n);
			try {
				var l = t.getImageData(e, n, i, r)
			} catch (u) {
				return !1
			}
			for (var c = l.data, h = c.length, d = 0; h > d; d += 4) c[d] = c[d] * this.redMultiplier + this.redOffset, c[d + 1] = c[d + 1] * this.greenMultiplier + this.greenOffset, c[d + 2] = c[d + 2] * this.blueMultiplier + this.blueOffset, c[d + 3] = c[d + 3] * this.alphaMultiplier + this.alphaOffset;
			return s.putImageData(l, a, o), !0
		}, e.toString = function() {
			return "[ColorFilter]"
		}, e.clone = function() {
			return new t(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset)
		}, createjs.ColorFilter = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e, n, i) {
				this.initialize(t, e, n, i)
			},
			e = t.prototype = [];
		t.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10], t.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], t.LENGTH = t.IDENTITY_MATRIX.length, e.initialize = function(t, e, n, i) {
			return this.reset(), this.adjustColor(t, e, n, i), this
		}, e.reset = function() {
			return this.copyMatrix(t.IDENTITY_MATRIX)
		}, e.adjustColor = function(t, e, n, i) {
			return this.adjustHue(i), this.adjustContrast(e), this.adjustBrightness(t), this.adjustSaturation(n)
		}, e.adjustBrightness = function(t) {
			return 0 == t || isNaN(t) ? this : (t = this._cleanValue(t, 255), this._multiplyMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this)
		}, e.adjustContrast = function(e) {
			if (0 == e || isNaN(e)) return this;
			e = this._cleanValue(e, 100);
			var n;
			return 0 > e ? n = 127 + 127 * (e / 100) : (n = e % 1, n = 0 == n ? t.DELTA_INDEX[e] : t.DELTA_INDEX[e << 0] * (1 - n) + t.DELTA_INDEX[(e << 0) + 1] * n, n = 127 * n + 127), this._multiplyMatrix([n / 127, 0, 0, 0, .5 * (127 - n), 0, n / 127, 0, 0, .5 * (127 - n), 0, 0, n / 127, 0, .5 * (127 - n), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
		}, e.adjustSaturation = function(t) {
			if (0 == t || isNaN(t)) return this;
			t = this._cleanValue(t, 100);
			var e = 1 + (t > 0 ? 3 * t / 100 : t / 100),
				n = .3086,
				i = .6094,
				r = .082;
			return this._multiplyMatrix([n * (1 - e) + e, i * (1 - e), r * (1 - e), 0, 0, n * (1 - e), i * (1 - e) + e, r * (1 - e), 0, 0, n * (1 - e), i * (1 - e), r * (1 - e) + e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
		}, e.adjustHue = function(t) {
			if (0 == t || isNaN(t)) return this;
			t = this._cleanValue(t, 180) / 180 * Math.PI;
			var e = Math.cos(t),
				n = Math.sin(t),
				i = .213,
				r = .715,
				s = .072;
			return this._multiplyMatrix([i + e * (1 - i) + n * -i, r + e * -r + n * -r, s + e * -s + n * (1 - s), 0, 0, i + e * -i + .143 * n, r + e * (1 - r) + .14 * n, s + e * -s + n * -.283, 0, 0, i + e * -i + n * -(1 - i), r + e * -r + n * r, s + e * (1 - s) + n * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]), this
		}, e.concat = function(e) {
			return e = this._fixMatrix(e), e.length != t.LENGTH ? this : (this._multiplyMatrix(e), this)
		}, e.clone = function() {
			return new t(this)
		}, e.toArray = function() {
			return this.slice(0, t.LENGTH)
		}, e.copyMatrix = function(e) {
			for (var n = t.LENGTH, i = 0; n > i; i++) this[i] = e[i];
			return this
		}, e._multiplyMatrix = function(t) {
			for (var e = [], n = 0; 5 > n; n++) {
				for (var i = 0; 5 > i; i++) e[i] = this[i + 5 * n];
				for (var i = 0; 5 > i; i++) {
					for (var r = 0, s = 0; 5 > s; s++) r += t[i + 5 * s] * e[s];
					this[i + 5 * n] = r
				}
			}
		}, e._cleanValue = function(t, e) {
			return Math.min(e, Math.max(-e, t))
		}, e._fixMatrix = function(e) {
			return e instanceof t && (e = e.slice(0)), e.length < t.LENGTH ? e = e.slice(0, e.length).concat(t.IDENTITY_MATRIX.slice(e.length, t.LENGTH)) : e.length > t.LENGTH && (e = e.slice(0, t.LENGTH)), e
		}, createjs.ColorMatrix = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t) {
				this.initialize(t)
			},
			e = t.prototype = new createjs.Filter;
		e.matrix = null, e.initialize = function(t) {
			this.matrix = t
		}, e.applyFilter = function(t, e, n, i, r, s, a, o) {
			s = s || t, null == a && (a = e), null == o && (o = n);
			try {
				var l = t.getImageData(e, n, i, r)
			} catch (u) {
				return !1
			}
			for (var c, h, d, f, p = l.data, g = p.length, m = this.matrix, v = m[0], _ = m[1], y = m[2], w = m[3], b = m[4], x = m[5], S = m[6], T = m[7], E = m[8], L = m[9], j = m[10], P = m[11], I = m[12], C = m[13], N = m[14], O = m[15], A = m[16], D = m[17], M = m[18], k = m[19], R = 0; g > R; R += 4) c = p[R], h = p[R + 1], d = p[R + 2], f = p[R + 3], p[R] = c * v + h * _ + d * y + f * w + b, p[R + 1] = c * x + h * S + d * T + f * E + L, p[R + 2] = c * j + h * P + d * I + f * C + N, p[R + 3] = c * O + h * A + d * D + f * M + k;
			return s.putImageData(l, a, o), !0
		}, e.toString = function() {
			return "[ColorMatrixFilter]"
		}, e.clone = function() {
			return new t(this.matrix)
		}, createjs.ColorMatrixFilter = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function() {
			throw "Touch cannot be instantiated"
		};
		t.isSupported = function() {
			return "ontouchstart" in window || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0
		}, t.enable = function(e, n, i) {
			return e && e.canvas && t.isSupported() ? (e.__touch = {
				pointers: {},
				multitouch: !n,
				preventDefault: !i,
				count: 0
			}, "ontouchstart" in window ? t._IOS_enable(e) : window.navigator.msPointerEnabled && t._IE_enable(e), !0) : !1
		}, t.disable = function(e) {
			e && ("ontouchstart" in window ? t._IOS_disable(e) : window.navigator.msPointerEnabled && t._IE_disable(e))
		}, t._IOS_enable = function(e) {
			var n = e.canvas,
				i = e.__touch.f = function(n) {
					t._IOS_handleEvent(e, n)
				};
			n.addEventListener("touchstart", i, !1), n.addEventListener("touchmove", i, !1), n.addEventListener("touchend", i, !1), n.addEventListener("touchcancel", i, !1)
		}, t._IOS_disable = function(t) {
			var e = t.canvas;
			if (e) {
				var n = t.__touch.f;
				e.removeEventListener("touchstart", n, !1), e.removeEventListener("touchmove", n, !1), e.removeEventListener("touchend", n, !1), e.removeEventListener("touchcancel", n, !1)
			}
		}, t._IOS_handleEvent = function(t, e) {
			if (t) {
				t.__touch.preventDefault && e.preventDefault && e.preventDefault();
				for (var n = e.changedTouches, i = e.type, r = 0, s = n.length; s > r; r++) {
					var a = n[r],
						o = a.identifier;
					a.target == t.canvas && ("touchstart" == i ? this._handleStart(t, o, e, a.pageX, a.pageY) : "touchmove" == i ? this._handleMove(t, o, e, a.pageX, a.pageY) : ("touchend" == i || "touchcancel" == i) && this._handleEnd(t, o, e))
				}
			}
		}, t._IE_enable = function(e) {
			var n = e.canvas,
				i = e.__touch.f = function(n) {
					t._IE_handleEvent(e, n)
				};
			n.addEventListener("MSPointerDown", i, !1), window.addEventListener("MSPointerMove", i, !1), window.addEventListener("MSPointerUp", i, !1), window.addEventListener("MSPointerCancel", i, !1), e.__touch.preventDefault && (n.style.msTouchAction = "none"), e.__touch.activeIDs = {}
		}, t._IE_disable = function(t) {
			var e = t.__touch.f;
			window.removeEventListener("MSPointerMove", e, !1), window.removeEventListener("MSPointerUp", e, !1), window.removeEventListener("MSPointerCancel", e, !1), t.canvas && t.canvas.removeEventListener("MSPointerDown", e, !1)
		}, t._IE_handleEvent = function(t, e) {
			if (t) {
				t.__touch.preventDefault && e.preventDefault && e.preventDefault();
				var n = e.type,
					i = e.pointerId,
					r = t.__touch.activeIDs;
				if ("MSPointerDown" == n) {
					if (e.srcElement != t.canvas) return;
					r[i] = !0, this._handleStart(t, i, e, e.pageX, e.pageY)
				} else r[i] && ("MSPointerMove" == n ? this._handleMove(t, i, e, e.pageX, e.pageY) : ("MSPointerUp" == n || "MSPointerCancel" == n) && (delete r[i], this._handleEnd(t, i, e)))
			}
		}, t._handleStart = function(t, e, n, i, r) {
			var s = t.__touch;
			if (s.multitouch || !s.count) {
				var a = s.pointers;
				a[e] || (a[e] = !0, s.count++, t._handlePointerDown(e, n, i, r))
			}
		}, t._handleMove = function(t, e, n, i, r) {
			t.__touch.pointers[e] && t._handlePointerMove(e, n, i, r)
		}, t._handleEnd = function(t, e, n) {
			var i = t.__touch,
				r = i.pointers;
			r[e] && (i.count--, t._handlePointerUp(e, n, !0), delete r[e])
		}, createjs.Touch = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = createjs.EaselJS = createjs.EaselJS || {};
		t.version = "NEXT", t.buildDate = "Tue, 01 Oct 2013 16:03:38 GMT"
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = createjs.PreloadJS = createjs.PreloadJS || {};
		t.version = "NEXT", t.buildDate = "Tue, 01 Oct 2013 16:03:38 GMT"
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		createjs.proxy = function(t, e) {
			var n = Array.prototype.slice.call(arguments, 2);
			return function() {
				return t.apply(e, Array.prototype.slice.call(arguments, 0).concat(n))
			}
		}
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function() {
			this.init()
		};
		t.prototype = {};
		var e = t.prototype,
			n = t;
		n.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/, e.loaded = !1, e.canceled = !1, e.progress = 0, e._item = null, e._basePath = null, e.addEventListener = null, e.removeEventListener = null, e.removeAllEventListeners = null, e.dispatchEvent = null, e.hasEventListener = null, e._listeners = null, createjs.EventDispatcher.initialize(e), e.getItem = function() {
			return this._item
		}, e.init = function() {}, e.load = function() {}, e.close = function() {}, e._sendLoadStart = function() {
			this._isCanceled() || this.dispatchEvent("loadstart")
		}, e._sendProgress = function(t) {
			if (!this._isCanceled()) {
				var e = null;
				"number" == typeof t ? (this.progress = t, e = new createjs.Event("progress"), e.loaded = this.progress, e.total = 1) : (e = t, this.progress = t.loaded / t.total, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)), e.progress = this.progress, this.hasEventListener("progress") && this.dispatchEvent(e)
			}
		}, e._sendComplete = function() {
			this._isCanceled() || this.dispatchEvent("complete")
		}, e._sendError = function(t) {
			!this._isCanceled() && this.hasEventListener("error") && (null == t && (t = new createjs.Event("error")), this.dispatchEvent(t))
		}, e._isCanceled = function() {
			return null == window.createjs || this.canceled ? !0 : !1
		}, e._parseURI = function(t) {
			return t ? t.match(n.FILE_PATTERN) : null
		}, e._formatQueryString = function(t, e) {
			if (null == t) throw new Error("You must specify data.");
			var n = [];
			for (var i in t) n.push(i + "=" + escape(t[i]));
			return e && (n = n.concat(e)), n.join("&")
		}, e.buildPath = function(t, e, n) {
			if (null != e) {
				var i = this._parseURI(t);
				(null == i || null == i[1] || "" == i[1]) && (t = e + t)
			}
			if (null == n) return t;
			var r = [],
				s = t.indexOf("?");
			if (-1 != s) {
				var a = t.slice(s + 1);
				r = r.concat(a.split("&"))
			}
			return -1 != s ? t.slice(0, s) + "?" + this._formatQueryString(n, r) : t + "?" + this._formatQueryString(n, r)
		}, e.toString = function() {
			return "[PreloadJS AbstractLoader]"
		}, createjs.AbstractLoader = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e) {
				this.init(t, e)
			},
			e = t.prototype = new createjs.AbstractLoader,
			n = t;
		n.LOAD_TIMEOUT = 8e3, n.BINARY = "binary", n.CSS = "css", n.IMAGE = "image", n.JAVASCRIPT = "javascript", n.JSON = "json", n.JSONP = "jsonp", n.SOUND = "sound", n.SVG = "svg", n.TEXT = "text", n.XML = "xml", n.POST = "POST", n.GET = "GET", e.useXHR = !0, e.stopOnError = !1, e.maintainScriptOrder = !0, e.next = null, e._typeCallbacks = null, e._extensionCallbacks = null, e._loadStartWasDispatched = !1, e._maxConnections = 1, e._currentlyLoadingScript = null, e._currentLoads = null, e._loadQueue = null, e._loadQueueBackup = null, e._loadItemsById = null, e._loadItemsBySrc = null, e._loadedResults = null, e._loadedRawResults = null, e._numItems = 0, e._numItemsLoaded = 0, e._scriptOrder = null, e._loadedScripts = null, e.init = function(t, e) {
			this._numItems = this._numItemsLoaded = 0, this._paused = !1, this._loadStartWasDispatched = !1, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._scriptOrder = [], this._loadedScripts = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._typeCallbacks = {}, this._extensionCallbacks = {}, this._basePath = e, this.setUseXHR(t)
		}, e.setUseXHR = function(t) {
			return this.useXHR = 0 != t && null != window.XMLHttpRequest, this.useXHR
		}, e.removeAll = function() {
			this.remove()
		}, e.remove = function(t) {
			var e = null;
			if (!t || t instanceof Array) {
				if (t) e = t;
				else if (arguments.length > 0) return
			} else e = [t];
			var n = !1;
			if (e) {
				for (; e.length;) {
					var i = e.pop(),
						r = this.getResult(i);
					for (s = this._loadQueue.length - 1; s >= 0; s--)
						if (a = this._loadQueue[s].getItem(), a.id == i || a.src == i) {
							this._loadQueue.splice(s, 1)[0].cancel();
							break
						}
					for (s = this._loadQueueBackup.length - 1; s >= 0; s--)
						if (a = this._loadQueueBackup[s].getItem(), a.id == i || a.src == i) {
							this._loadQueueBackup.splice(s, 1)[0].cancel();
							break
						}
					if (r) delete this._loadItemsById[r.id], delete this._loadItemsBySrc[r.src], this._disposeItem(r);
					else
						for (var s = this._currentLoads.length - 1; s >= 0; s--) {
							var a = this._currentLoads[s].getItem();
							if (a.id == i || a.src == i) {
								this._currentLoads.splice(s, 1)[0].cancel(), n = !0;
								break
							}
						}
				}
				n && this._loadNext()
			} else {
				this.close();
				for (var o in this._loadItemsById) this._disposeItem(this._loadItemsById[o]);
				this.init(this.useXHR)
			}
		}, e.reset = function() {
			this.close();
			for (var t in this._loadItemsById) this._disposeItem(this._loadItemsById[t]);
			var e = [];
			for (i = 0, l = this._loadQueueBackup.length; l > i; i++) e.push(this._loadQueueBackup[i].getItem());
			this.loadManifest(e, !1)
		}, n.isBinary = function(t) {
			switch (t) {
				case createjs.LoadQueue.IMAGE:
				case createjs.LoadQueue.BINARY:
					return !0;
				default:
					return !1
			}
		}, e.installPlugin = function(t) {
			if (null != t && null != t.getPreloadHandlers) {
				var e = t.getPreloadHandlers();
				if (null != e.types)
					for (var n = 0, i = e.types.length; i > n; n++) this._typeCallbacks[e.types[n]] = e.callback;
				if (null != e.extensions)
					for (n = 0, i = e.extensions.length; i > n; n++) this._extensionCallbacks[e.extensions[n]] = e.callback
			}
		}, e.setMaxConnections = function(t) {
			this._maxConnections = t, !this._paused && this._loadQueue.length > 0 && this._loadNext()
		}, e.loadFile = function(t, e, n) {
			if (null == t) {
				var i = new createjs.Event("error");
				return i.text = "PRELOAD_NO_FILE", void this._sendError(i)
			}
			this._addItem(t, n), this.setPaused(e !== !1 ? !1 : !0)
		}, e.loadManifest = function(t, e, n) {
			var i = null;
			if (t instanceof Array) {
				if (0 == t.length) {
					var r = new createjs.Event("error");
					return r.text = "PRELOAD_MANIFEST_EMPTY", void this._sendError(r)
				}
				i = t
			} else {
				if (null == t) {
					var r = new createjs.Event("error");
					return r.text = "PRELOAD_MANIFEST_NULL", void this._sendError(r)
				}
				i = [t]
			}
			for (var s = 0, a = i.length; a > s; s++) this._addItem(i[s], n);
			this.setPaused(e !== !1 ? !1 : !0)
		}, e.load = function() {
			this.setPaused(!1)
		}, e.getItem = function(t) {
			return this._loadItemsById[t] || this._loadItemsBySrc[t]
		}, e.getResult = function(t, e) {
			var n = this._loadItemsById[t] || this._loadItemsBySrc[t];
			if (null == n) return null;
			var i = n.id;
			return e && this._loadedRawResults[i] ? this._loadedRawResults[i] : this._loadedResults[i]
		}, e.setPaused = function(t) {
			this._paused = t, this._paused || this._loadNext()
		}, e.close = function() {
			for (; this._currentLoads.length;) this._currentLoads.pop().cancel();
			this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1
		}, e._addItem = function(t, e) {
			var n = this._createLoadItem(t);
			if (null != n) {
				var i = this._createLoader(n, e);
				null != i && (this._loadQueue.push(i), this._loadQueueBackup.push(i), this._numItems++, this._updateProgress(), this.maintainScriptOrder && n.type == createjs.LoadQueue.JAVASCRIPT && i instanceof createjs.XHRLoader && (this._scriptOrder.push(n), this._loadedScripts.push(null)))
			}
		}, e._createLoadItem = function(t) {
			var e = null;
			switch (typeof t) {
				case "string":
					e = {
						src: t
					};
					break;
				case "object":
					e = window.HTMLAudioElement && t instanceof HTMLAudioElement ? {
						tag: t,
						src: e.tag.src,
						type: createjs.LoadQueue.SOUND
					} : t;
					break;
				default:
					return null
			}
			var n = this._parseURI(e.src);
			if (null != n && (e.ext = n[5]), null == e.type && (e.type = this._getTypeByExtension(e.ext)), e.type == createjs.LoadQueue.JSON && null != e.callback && (e.type = createjs.LoadQueue.JSONP), e.type == createjs.LoadQueue.JSONP && null == e.callback) throw new Error("callback is required for loading JSONP requests.");
			null == e.tag && (e.tag = this._createTag(e.type)), (null == e.id || "" == e.id) && (e.id = e.src);
			var i = this._typeCallbacks[e.type] || this._extensionCallbacks[e.ext];
			if (i) {
				var r = i(e.src, e.type, e.id, e.data);
				if (r === !1) return null;
				r === !0 || (null != r.src && (e.src = r.src), null != r.id && (e.id = r.id), null != r.tag && r.tag.load instanceof Function && (e.tag = r.tag), null != r.completeHandler && (e.completeHandler = r.completeHandler)), r.type && (e.type = r.type), n = this._parseURI(e.src), null != n && null != n[5] && (e.ext = n[5].toLowerCase())
			}
			return this._loadItemsById[e.id] = e, this._loadItemsBySrc[e.src] = e, e
		}, e._createLoader = function(t, e) {
			var n = this.useXHR;
			switch (t.type) {
				case createjs.LoadQueue.JSON:
				case createjs.LoadQueue.XML:
				case createjs.LoadQueue.TEXT:
					n = !0;
					break;
				case createjs.LoadQueue.SOUND:
				case createjs.LoadQueue.JSONP:
					n = !1;
					break;
				case null:
					return null
			}
			return null == e && (e = this._basePath), n ? new createjs.XHRLoader(t, e) : new createjs.TagLoader(t, e)
		}, e._loadNext = function() {
			if (!this._paused) {
				this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
				for (var t = 0; t < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); t++) {
					var e = this._loadQueue[t];
					if (this.maintainScriptOrder && e instanceof createjs.TagLoader && e.getItem().type == createjs.LoadQueue.JAVASCRIPT) {
						if (this._currentlyLoadingScript) continue;
						this._currentlyLoadingScript = !0
					}
					this._loadQueue.splice(t, 1), t--, this._loadItem(e)
				}
			}
		}, e._loadItem = function(t) {
			t.addEventListener("progress", createjs.proxy(this._handleProgress, this)), t.addEventListener("complete", createjs.proxy(this._handleFileComplete, this)), t.addEventListener("error", createjs.proxy(this._handleFileError, this)), this._currentLoads.push(t), this._sendFileStart(t.getItem()), t.load()
		}, e._handleFileError = function(t) {
			var e = t.target;
			this._numItemsLoaded++, this._updateProgress();
			var t = new createjs.Event("error");
			t.text = "FILE_LOAD_ERROR", t.item = e.getItem(), this._sendError(t), this.stopOnError || (this._removeLoadItem(e), this._loadNext())
		}, e._handleFileComplete = function(t) {
			var e = t.target,
				n = e.getItem();
			if (this._loadedResults[n.id] = e.getResult(), e instanceof createjs.XHRLoader && (this._loadedRawResults[n.id] = e.getResult(!0)), this._removeLoadItem(e), this.maintainScriptOrder && n.type == createjs.LoadQueue.JAVASCRIPT) {
				if (!(e instanceof createjs.TagLoader)) return this._loadedScripts[createjs.indexOf(this._scriptOrder, n)] = n, void this._checkScriptLoadOrder(e);
				this._currentlyLoadingScript = !1
			}
			this._processFinishedLoad(n, e)
		}, e._processFinishedLoad = function(t, e) {
			this._numItemsLoaded++, this._updateProgress(), this._sendFileComplete(t, e), this._loadNext()
		}, e._checkScriptLoadOrder = function() {
			for (var t = this._loadedScripts.length, e = 0; t > e; e++) {
				var n = this._loadedScripts[e];
				if (null === n) break;
				n !== !0 && (this._processFinishedLoad(n), this._loadedScripts[e] = !0, e--, t--)
			}
		}, e._removeLoadItem = function(t) {
			for (var e = this._currentLoads.length, n = 0; e > n; n++)
				if (this._currentLoads[n] == t) {
					this._currentLoads.splice(n, 1);
					break
				}
		}, e._handleProgress = function(t) {
			var e = t.target;
			this._sendFileProgress(e.getItem(), e.progress), this._updateProgress()
		}, e._updateProgress = function() {
			var t = this._numItemsLoaded / this._numItems,
				e = this._numItems - this._numItemsLoaded;
			if (e > 0) {
				for (var n = 0, i = 0, r = this._currentLoads.length; r > i; i++) n += this._currentLoads[i].progress;
				t += n / e * (e / this._numItems)
			}
			this._sendProgress(t)
		}, e._disposeItem = function(t) {
			delete this._loadedResults[t.id], delete this._loadedRawResults[t.id], delete this._loadItemsById[t.id], delete this._loadItemsBySrc[t.src]
		}, e._createTag = function(t) {
			var e = null;
			switch (t) {
				case createjs.LoadQueue.IMAGE:
					return document.createElement("img");
				case createjs.LoadQueue.SOUND:
					return e = document.createElement("audio"), e.autoplay = !1, e;
				case createjs.LoadQueue.JSONP:
				case createjs.LoadQueue.JAVASCRIPT:
					return e = document.createElement("script"), e.type = "text/javascript", e;
				case createjs.LoadQueue.CSS:
					return e = document.createElement(this.useXHR ? "style" : "link"), e.rel = "stylesheet", e.type = "text/css", e;
				case createjs.LoadQueue.SVG:
					return this.useXHR ? e = document.createElement("svg") : (e = document.createElement("object"), e.type = "image/svg+xml"), e
			}
			return null
		}, e._getTypeByExtension = function(t) {
			if (null == t) return createjs.LoadQueue.TEXT;
			switch (t.toLowerCase()) {
				case "jpeg":
				case "jpg":
				case "gif":
				case "png":
				case "webp":
				case "bmp":
					return createjs.LoadQueue.IMAGE;
				case "ogg":
				case "mp3":
				case "wav":
					return createjs.LoadQueue.SOUND;
				case "json":
					return createjs.LoadQueue.JSON;
				case "xml":
					return createjs.LoadQueue.XML;
				case "css":
					return createjs.LoadQueue.CSS;
				case "js":
					return createjs.LoadQueue.JAVASCRIPT;
				case "svg":
					return createjs.LoadQueue.SVG;
				default:
					return createjs.LoadQueue.TEXT
			}
		}, e._sendFileProgress = function(t, e) {
			if (this._isCanceled()) return void this._cleanUp();
			if (this.hasEventListener("fileprogress")) {
				var n = new createjs.Event("fileprogress");
				n.progress = e, n.loaded = e, n.total = 1, n.item = t, this.dispatchEvent(n)
			}
		}, e._sendFileComplete = function(t, e) {
			if (!this._isCanceled()) {
				var n = new createjs.Event("fileload");
				n.loader = e, n.item = t, n.result = this._loadedResults[t.id], n.rawResult = this._loadedRawResults[t.id], t.completeHandler && t.completeHandler(n), this.hasEventListener("fileload") && this.dispatchEvent(n)
			}
		}, e._sendFileStart = function(t) {
			var e = new createjs.Event("filestart");
			e.item = t, this.hasEventListener("filestart") && this.dispatchEvent(e)
		}, e.toString = function() {
			return "[PreloadJS LoadQueue]"
		}, createjs.LoadQueue = t;
		var r = function() {};
		r.init = function() {
			var t = navigator.userAgent;
			r.isFirefox = t.indexOf("Firefox") > -1, r.isOpera = null != window.opera, r.isChrome = t.indexOf("Chrome") > -1, r.isIOS = t.indexOf("iPod") > -1 || t.indexOf("iPhone") > -1 || t.indexOf("iPad") > -1
		}, r.init(), createjs.LoadQueue.BrowserDetect = r
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e) {
				this.init(t, e)
			},
			e = t.prototype = new createjs.AbstractLoader;
		e._loadTimeout = null, e._tagCompleteProxy = null, e._isAudio = !1, e._tag = null, e._jsonResult = null, e.init = function(t, e) {
			this._item = t, this._basePath = e, this._tag = t.tag, this._isAudio = window.HTMLAudioElement && t.tag instanceof HTMLAudioElement, this._tagCompleteProxy = createjs.proxy(this._handleLoad, this)
		}, e.getResult = function() {
			return this._item.type == createjs.LoadQueue.JSONP ? this._jsonResult : this._tag
		}, e.cancel = function() {
			this.canceled = !0, this._clean(), this.getItem()
		}, e.load = function() {
			var t = this._item,
				e = this._tag;
			clearTimeout(this._loadTimeout), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), createjs.LoadQueue.LOAD_TIMEOUT), this._isAudio && (e.src = null, e.preload = "auto"), e.onerror = createjs.proxy(this._handleError, this), this._isAudio ? (e.onstalled = createjs.proxy(this._handleStalled, this), e.addEventListener("canplaythrough", this._tagCompleteProxy, !1)) : (e.onload = createjs.proxy(this._handleLoad, this), e.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this));
			var n = this.buildPath(t.src, this._basePath, t.values);
			switch (t.type) {
				case createjs.LoadQueue.CSS:
					e.href = n;
					break;
				case createjs.LoadQueue.SVG:
					e.data = n;
					break;
				default:
					e.src = n
			}
			if (t.type == createjs.LoadQueue.JSONP) {
				if (null == t.callback) throw new Error("callback is required for loading JSONP requests.");
				if (null != window[t.callback]) throw new Error('JSONP callback "' + t.callback + '" already exists on window. You need to specify a different callback. Or re-name the current one.');
				window[t.callback] = createjs.proxy(this._handleJSONPLoad, this)
			}(t.type == createjs.LoadQueue.SVG || t.type == createjs.LoadQueue.JSONP || t.type == createjs.LoadQueue.JSON || t.type == createjs.LoadQueue.JAVASCRIPT || t.type == createjs.LoadQueue.CSS) && (this._startTagVisibility = e.style.visibility, e.style.visibility = "hidden", (document.body || document.getElementsByTagName("body")[0]).appendChild(e)), null != e.load && e.load()
		}, e._handleJSONPLoad = function(t) {
			this._jsonResult = t
		}, e._handleTimeout = function() {
			this._clean();
			var t = new createjs.Event("error");
			t.text = "PRELOAD_TIMEOUT", this._sendError(t)
		}, e._handleStalled = function() {}, e._handleError = function() {
			this._clean();
			var t = new createjs.Event("error");
			this._sendError(t)
		}, e._handleReadyStateChange = function() {
			clearTimeout(this._loadTimeout);
			var t = this.getItem().tag;
			("loaded" == t.readyState || "complete" == t.readyState) && this._handleLoad()
		}, e._handleLoad = function() {
			if (!this._isCanceled()) {
				var t = this.getItem(),
					e = t.tag;
				if (!(this.loaded || this.isAudio && 4 !== e.readyState)) {
					switch (this.loaded = !0, t.type) {
						case createjs.LoadQueue.SVG:
						case createjs.LoadQueue.JSONP:
							e.style.visibility = this._startTagVisibility, (document.body || document.getElementsByTagName("body")[0]).removeChild(e)
					}
					this._clean(), this._sendComplete()
				}
			}
		}, e._clean = function() {
			clearTimeout(this._loadTimeout);
			var t = this.getItem().tag;
			t.onload = null, t.removeEventListener && t.removeEventListener("canplaythrough", this._tagCompleteProxy, !1), t.onstalled = null, t.onprogress = null, t.onerror = null, t.parentNode && t.parentNode.removeChild(t);
			var e = this.getItem();
			e.type == createjs.LoadQueue.JSONP && (window[e.callback] = null)
		}, e.toString = function() {
			return "[PreloadJS TagLoader]"
		}, createjs.TagLoader = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e) {
				this.init(t, e)
			},
			e = t.prototype = new createjs.AbstractLoader;
		e._request = null, e._loadTimeout = null, e._xhrLevel = 1, e._response = null, e._rawResponse = null, e.init = function(t, e) {
			this._item = t, this._basePath = e, !this._createXHR(t)
		}, e.getResult = function(t) {
			return t && this._rawResponse ? this._rawResponse : this._response
		}, e.cancel = function() {
			this.canceled = !0, this._clean(), this._request.abort()
		}, e.load = function() {
			if (null == this._request) return void this._handleError();
			this._request.onloadstart = createjs.proxy(this._handleLoadStart, this), this._request.onprogress = createjs.proxy(this._handleProgress, this), this._request.onabort = createjs.proxy(this._handleAbort, this), this._request.onerror = createjs.proxy(this._handleError, this), this._request.ontimeout = createjs.proxy(this._handleTimeout, this), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), createjs.LoadQueue.LOAD_TIMEOUT)), this._request.onload = createjs.proxy(this._handleLoad, this), this._request.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
			try {
				this._item.values && this._item.method != createjs.LoadQueue.GET ? this._item.method == createjs.LoadQueue.POST && this._request.send(this._formatQueryString(this._item.values)) : this._request.send()
			} catch (t) {
				var e = new createjs.Event("error");
				e.error = t, this._sendError(e)
			}
		}, e.getAllResponseHeaders = function() {
			return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
		}, e.getResponseHeader = function(t) {
			return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(t) : null
		}, e._handleProgress = function(t) {
			if (t && !(t.loaded > 0 && 0 == t.total)) {
				var e = new createjs.Event("progress");
				e.loaded = t.loaded, e.total = t.total, this._sendProgress(e)
			}
		}, e._handleLoadStart = function() {
			clearTimeout(this._loadTimeout), this._sendLoadStart()
		}, e._handleAbort = function(t) {
			this._clean();
			var t = new createjs.Event("error");
			t.text = "XHR_ABORTED", this._sendError(t)
		}, e._handleError = function() {
			this._clean();
			var t = new createjs.Event("error");
			this._sendError(t)
		}, e._handleReadyStateChange = function() {
			4 == this._request.readyState && this._handleLoad()
		}, e._handleLoad = function() {
			if (!this.loaded) {
				if (this.loaded = !0, !this._checkError()) return void this._handleError();
				this._response = this._getResponse(), this._clean();
				var t = this._generateTag();
				t && this._sendComplete()
			}
		}, e._handleTimeout = function(t) {
			this._clean();
			var e = new createjs.Event("error");
			e.text = "PRELOAD_TIMEOUT", this._sendError(t)
		}, e._checkError = function() {
			var t = parseInt(this._request.status);
			switch (t) {
				case 404:
				case 0:
					return !1
			}
			return !0
		}, e._getResponse = function() {
			if (null != this._response) return this._response;
			if (null != this._request.response) return this._request.response;
			try {
				if (null != this._request.responseText) return this._request.responseText
			} catch (t) {}
			try {
				if (null != this._request.responseXML) return this._request.responseXML
			} catch (t) {}
			return null
		}, e._createXHR = function(t) {
			var e = document.createElement("a");
			e.href = this.buildPath(t.src, this._basePath);
			var n = document.createElement("a");
			n.href = location.href;
			var i = "" != e.hostname && (e.port != n.port || e.protocol != n.protocol || e.hostname != n.hostname),
				r = null;
			if (i && window.XDomainRequest) r = new XDomainRequest;
			else if (window.XMLHttpRequest) r = new XMLHttpRequest;
			else try {
				r = new ActiveXObject("Msxml2.XMLHTTP.6.0")
			} catch (s) {
				try {
					r = new ActiveXObject("Msxml2.XMLHTTP.3.0")
				} catch (s) {
					try {
						r = new ActiveXObject("Msxml2.XMLHTTP")
					} catch (s) {
						return !1
					}
				}
			}
			t.type == createjs.LoadQueue.TEXT && r.overrideMimeType && r.overrideMimeType("text/plain; charset=x-user-defined"), this._xhrLevel = "string" == typeof r.responseType ? 2 : 1;
			var a = null;
			return a = t.method == createjs.LoadQueue.GET ? this.buildPath(t.src, this._basePath, t.values) : this.buildPath(t.src, this._basePath), r.open(t.method || createjs.LoadQueue.GET, a, !0), i && r instanceof XMLHttpRequest && 1 == this._xhrLevel && r.setRequestHeader("Origin", location.origin), t.values && t.method == createjs.LoadQueue.POST && r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), createjs.LoadQueue.isBinary(t.type) && (r.responseType = "arraybuffer"), this._request = r, !0
		}, e._clean = function() {
			clearTimeout(this._loadTimeout);
			var t = this._request;
			t.onloadstart = null, t.onprogress = null, t.onabort = null, t.onerror = null, t.onload = null, t.ontimeout = null, t.onloadend = null, t.onreadystatechange = null
		}, e._generateTag = function() {
			var t = this._item.type,
				e = this._item.tag;
			switch (t) {
				case createjs.LoadQueue.IMAGE:
					return e.onload = createjs.proxy(this._handleTagReady, this), e.src = this.buildPath(this._item.src, this._basePath, this._item.values), this._rawResponse = this._response, this._response = e, !1;
				case createjs.LoadQueue.JAVASCRIPT:
					return e = document.createElement("script"), e.text = this._response, this._rawResponse = this._response, this._response = e, !0;
				case createjs.LoadQueue.CSS:
					var n = document.getElementsByTagName("head")[0];
					if (n.appendChild(e), e.styleSheet) e.styleSheet.cssText = this._response;
					else {
						var i = document.createTextNode(this._response);
						e.appendChild(i)
					}
					return this._rawResponse = this._response, this._response = e, !0;
				case createjs.LoadQueue.XML:
					var r = this._parseXML(this._response, "text/xml");
					return this._response = r, !0;
				case createjs.LoadQueue.SVG:
					var r = this._parseXML(this._response, "image/svg+xml");
					return this._rawResponse = this._response, null != r.documentElement ? (e.appendChild(r.documentElement), this._response = e) : this._response = r, !0;
				case createjs.LoadQueue.JSON:
					var s = {};
					try {
						s = JSON.parse(this._response)
					} catch (a) {
						s = a
					}
					return this._rawResponse = this._response, this._response = s, !0
			}
			return !0
		}, e._parseXML = function(t, e) {
			var n = null;
			if (window.DOMParser) {
				var i = new DOMParser;
				n = i.parseFromString(t, e)
			} else n = new ActiveXObject("Microsoft.XMLDOM"), n.async = !1, n.loadXML(t);
			return n
		}, e._handleTagReady = function() {
			this._sendComplete()
		}, e.toString = function() {
			return "[PreloadJS XHRLoader]"
		}, createjs.XHRLoader = t
	}(), "object" != typeof JSON && (JSON = {}),
	function() {
		"use strict";

		function f(t) {
			return 10 > t ? "0" + t : t
		}

		function quote(t) {
			return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
				var e = meta[t];
				return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
			}) + '"' : '"' + t + '"'
		}

		function str(t, e) {
			var n, i, r, s, a, o = gap,
				l = e[t];
			switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
				case "string":
					return quote(l);
				case "number":
					return isFinite(l) ? String(l) : "null";
				case "boolean":
				case "null":
					return String(l);
				case "object":
					if (!l) return "null";
					if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(l)) {
						for (s = l.length, n = 0; s > n; n += 1) a[n] = str(n, l) || "null";
						return r = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + o + "]" : "[" + a.join(",") + "]", gap = o, r
					}
					if (rep && "object" == typeof rep)
						for (s = rep.length, n = 0; s > n; n += 1) "string" == typeof rep[n] && (i = rep[n], r = str(i, l), r && a.push(quote(i) + (gap ? ": " : ":") + r));
					else
						for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (r = str(i, l), r && a.push(quote(i) + (gap ? ": " : ":") + r));
					return r = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + o + "}" : "{" + a.join(",") + "}", gap = o, r
			}
		}
		"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
		}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
			return this.valueOf()
		});
		var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			gap, indent, meta = {
				"\b": "\\b",
				" ": "\\t",
				"\n": "\\n",
				"\f": "\\f",
				"\r": "\\r",
				'"': '\\"',
				"\\": "\\\\"
			},
			rep;
		"function" != typeof JSON.stringify && (JSON.stringify = function(t, e, n) {
			var i;
			if (gap = "", indent = "", "number" == typeof n)
				for (i = 0; n > i; i += 1) indent += " ";
			else "string" == typeof n && (indent = n);
			if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
			return str("", {
				"": t
			})
		}), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
			function walk(t, e) {
				var n, i, r = t[e];
				if (r && "object" == typeof r)
					for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (i = walk(r, n), void 0 !== i ? r[n] = i : delete r[n]);
				return reviver.call(t, e, r)
			}
			var j;
			if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
					return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
				})), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
				"": j
			}, "") : j;
			throw new SyntaxError("JSON.parse")
		})
	}(), this.createjs = this.createjs || {},
	function() {
		var t = createjs.SoundJS = createjs.SoundJS || {};
		t.version = "NEXT", t.buildDate = "Tue, 01 Oct 2013 16:03:38 GMT"
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";

		function t() {
			throw "Sound cannot be instantiated"
		}

		function e(t, e) {
			this.init(t, e)
		}

		function n() {
			this.isDefault = !0, this.addEventListener = this.removeEventListener = this.removeAllEventListener = this.dispatchEvent = this.hasEventListener = this._listeners = this.interrupt = this.playFailed = this.pause = this.resume = this.play = this.beginPlaying = this.cleanUp = this.stop = this.setMasterVolume = this.setVolume = this.mute = this.setMute = this.getMute = this.setPan = this.getPosition = this.setPosition = function() {
				return !1
			}, this.getVolume = this.getPan = this.getDuration = function() {
				return 0
			}, this.playState = t.PLAY_FAILED, this.toString = function() {
				return "[Sound Default Sound Instance]"
			}
		}

		function i() {}
		var r = t;
		r.DELIMITER = "|", r.AUDIO_TIMEOUT = 8e3, r.INTERRUPT_ANY = "any", r.INTERRUPT_EARLY = "early", r.INTERRUPT_LATE = "late", r.INTERRUPT_NONE = "none", r.PLAY_INITED = "playInited", r.PLAY_SUCCEEDED = "playSucceeded", r.PLAY_INTERRUPTED = "playInterrupted", r.PLAY_FINISHED = "playFinished", r.PLAY_FAILED = "playFailed", r.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], r.EXTENSION_MAP = {
			m4a: "mp4"
		}, r.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/, r.defaultInterruptBehavior = r.INTERRUPT_NONE, r.lastId = 0, r.activePlugin = null, r.pluginsRegistered = !1, r.masterVolume = 1, r.masterMute = !1, r.instances = [], r.idHash = {}, r.preloadHash = {}, r.defaultSoundInstance = null, r.addEventListener = null, r.removeEventListener = null, r.removeAllEventListeners = null, r.dispatchEvent = null, r.hasEventListener = null, r._listeners = null, createjs.EventDispatcher.initialize(r), r.sendFileLoadEvent = function(t) {
			if (r.preloadHash[t])
				for (var e = 0, n = r.preloadHash[t].length; n > e; e++) {
					var i = r.preloadHash[t][e];
					if (r.preloadHash[t][e] = !0, r.hasEventListener("fileload")) {
						var s = new createjs.Event("fileload");
						s.src = i.src, s.id = i.id, s.data = i.data, r.dispatchEvent(s)
					}
				}
		}, r.getPreloadHandlers = function() {
			return {
				callback: createjs.proxy(r.initLoad, r),
				types: ["sound"],
				extensions: r.SUPPORTED_EXTENSIONS
			}
		}, r.registerPlugin = function(t) {
			return r.pluginsRegistered = !0, null == t ? !1 : t.isSupported() ? (r.activePlugin = new t, !0) : !1
		}, r.registerPlugins = function(t) {
			for (var e = 0, n = t.length; n > e; e++) {
				var i = t[e];
				if (r.registerPlugin(i)) return !0
			}
			return !1
		}, r.initializeDefaultPlugins = function() {
			return null != r.activePlugin ? !0 : r.pluginsRegistered ? !1 : r.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]) ? !0 : !1
		}, r.isReady = function() {
			return null != r.activePlugin
		}, r.getCapabilities = function() {
			return null == r.activePlugin ? null : r.activePlugin.capabilities
		}, r.getCapability = function(t) {
			return null == r.activePlugin ? null : r.activePlugin.capabilities[t]
		}, r.initLoad = function(t, e, n, i, s) {
			var a = r.registerSound(t, n, i, !1, s);
			return null == a ? !1 : a
		}, r.registerSound = function(t, n, i, s, a) {
			if (!r.initializeDefaultPlugins()) return !1;
			t instanceof Object && (a = n, n = t.id, i = t.data, t = t.src);
			var o = r.parsePath(t, "sound", n, i);
			if (null == o) return !1;
			null != n && (r.idHash[n] = o.src);
			var l = null;
			null != i && (isNaN(i.channels) ? isNaN(i) || (l = parseInt(i)) : l = parseInt(i.channels));
			var u = r.activePlugin.register(o.src, l);
			if (null != u && (null != u.numChannels && (l = u.numChannels), e.create(o.src, l), null != i && isNaN(i) ? i.channels = o.data.channels = l || e.maxPerChannel() : i = o.data = l || e.maxPerChannel(), null != u.tag ? o.tag = u.tag : u.src && (o.src = u.src), null != u.completeHandler && (o.completeHandler = u.completeHandler), u.type && (o.type = u.type)), 0 != s)
				if (r.preloadHash[o.src] || (r.preloadHash[o.src] = []), r.preloadHash[o.src].push({
						src: t,
						id: n,
						data: i
					}), 1 == r.preloadHash[o.src].length) null == a && (a = ""), r.activePlugin.preload(o.src, u, a);
				else if (1 == r.preloadHash[o.src][0]) return !0;
			return o
		}, r.registerManifest = function(t, e) {
			for (var n = [], i = 0, r = t.length; r > i; i++) n[i] = createjs.Sound.registerSound(t[i].src, t[i].id, t[i].data, t[i].preload, e);
			return n
		}, r.removeSound = function(t) {
			if (null == r.activePlugin) return !1;
			t instanceof Object && (t = t.src), t = r.getSrcById(t);
			var n = r.parsePath(t);
			if (null == n) return !1;
			t = n.src;
			for (var i in r.idHash) r.idHash[i] == t && delete r.idHash[i];
			return e.removeSrc(t), delete r.preloadHash[t], r.activePlugin.removeSound(t), !0
		}, r.removeManifest = function(t) {
			for (var e = [], n = 0, i = t.length; i > n; n++) e[n] = createjs.Sound.removeSound(t[n].src);
			return e
		}, r.removeAllSounds = function() {
			r.idHash = {}, r.preloadHash = {}, e.removeAll(), r.activePlugin.removeAllSounds()
		}, r.loadComplete = function(t) {
			var e = r.parsePath(t, "sound");
			return t = r.getSrcById(e ? e.src : t), 1 == r.preloadHash[t][0]
		}, r.parsePath = function(t, e, n, i) {
			"string" != typeof t && (t = t.toString());
			for (var s = t.split(r.DELIMITER), a = {
					type: e || "sound",
					id: n,
					data: i
				}, o = r.getCapabilities(), l = 0, u = s.length; u > l; l++) {
				var c = s[l],
					h = c.match(r.FILE_PATTERN);
				if (null == h) return !1;
				var d = h[4],
					f = h[5];
				if (o[f] && createjs.indexOf(r.SUPPORTED_EXTENSIONS, f) > -1) return a.name = d, a.src = c, a.extension = f, a
			}
			return null
		}, r.play = function(t, e, n, i, s, a, o) {
			var l = r.createInstance(t),
				u = r.playInstance(l, e, n, i, s, a, o);
			return u || l.playFailed(), l
		}, r.createInstance = function(n) {
			if (!r.initializeDefaultPlugins()) return r.defaultSoundInstance;
			n = r.getSrcById(n);
			var i = r.parsePath(n, "sound"),
				s = null;
			return null != i && null != i.src ? (e.create(i.src), s = r.activePlugin.create(i.src)) : s = t.defaultSoundInstance, s.uniqueId = r.lastId++, s
		}, r.setVolume = function(t) {
			if (null == Number(t)) return !1;
			if (t = Math.max(0, Math.min(1, t)), r.masterVolume = t, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(t))
				for (var e = this.instances, n = 0, i = e.length; i > n; n++) e[n].setMasterVolume(t)
		}, r.getVolume = function() {
			return r.masterVolume
		}, r.setMute = function(t) {
			if (null == t || void 0 == t) return !1;
			if (this.masterMute = t, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(t))
				for (var e = this.instances, n = 0, i = e.length; i > n; n++) e[n].setMasterMute(t);
			return !0
		}, r.getMute = function() {
			return this.masterMute
		}, r.stop = function() {
			for (var t = this.instances, e = t.length; e--;) t[e].stop()
		}, r.playInstance = function(t, e, n, i, s, a, o) {
			if (e instanceof Object && (n = e.delay, i = e.offset, s = e.loop, a = e.volume, o = e.pan), e = e || r.defaultInterruptBehavior, null == n && (n = 0), null == i && (i = t.getPosition()), null == s && (s = 0), null == a && (a = t.volume), null == o && (o = t.pan), 0 == n) {
				var l = r.beginPlaying(t, e, i, s, a, o);
				if (!l) return !1
			} else {
				var u = setTimeout(function() {
					r.beginPlaying(t, e, i, s, a, o)
				}, n);
				t.delayTimeoutId = u
			}
			return this.instances.push(t), !0
		}, r.beginPlaying = function(t, n, i, r, s, a) {
			if (!e.add(t, n)) return !1;
			var o = t.beginPlaying(i, r, s, a);
			if (!o) {
				var l = createjs.indexOf(this.instances, t);
				return l > -1 && this.instances.splice(l, 1), !1
			}
			return !0
		}, r.getSrcById = function(t) {
			return null == r.idHash || null == r.idHash[t] ? t : r.idHash[t]
		}, r.playFinished = function(t) {
			e.remove(t);
			var n = createjs.indexOf(this.instances, t);
			n > -1 && this.instances.splice(n, 1)
		}, createjs.Sound = t, e.channels = {}, e.create = function(t, n) {
			var i = e.get(t);
			return null == i ? (e.channels[t] = new e(t, n), !0) : !1
		}, e.removeSrc = function(t) {
			var n = e.get(t);
			return null == n ? !1 : (n.removeAll(), delete e.channels[t], !0)
		}, e.removeAll = function() {
			for (var t in e.channels) e.channels[t].removeAll();
			e.channels = {}
		}, e.add = function(t, n) {
			var i = e.get(t.src);
			return null == i ? !1 : i.add(t, n)
		}, e.remove = function(t) {
			var n = e.get(t.src);
			return null == n ? !1 : (n.remove(t), !0)
		}, e.maxPerChannel = function() {
			return s.maxDefault
		}, e.get = function(t) {
			return e.channels[t]
		};
		var s = e.prototype;
		s.src = null, s.max = null, s.maxDefault = 100, s.length = 0, s.init = function(t, e) {
			this.src = t, this.max = e || this.maxDefault, -1 == this.max && this.max == this.maxDefault, this.instances = []
		}, s.get = function(t) {
			return this.instances[t]
		}, s.add = function(t, e) {
			return this.getSlot(e, t) ? (this.instances.push(t), this.length++, !0) : !1
		}, s.remove = function(t) {
			var e = createjs.indexOf(this.instances, t);
			return -1 == e ? !1 : (this.instances.splice(e, 1), this.length--, !0)
		}, s.removeAll = function() {
			for (var t = this.length - 1; t >= 0; t--) this.instances[t].stop()
		}, s.getSlot = function(e) {
			for (var n, i, r = 0, s = this.max; s > r; r++) {
				if (n = this.get(r), null == n) return !0;
				(e != t.INTERRUPT_NONE || n.playState == t.PLAY_FINISHED) && (0 != r ? n.playState == t.PLAY_FINISHED || n.playState == t.PLAY_INTERRUPTED || n.playState == t.PLAY_FAILED ? i = n : (e == t.INTERRUPT_EARLY && n.getPosition() < i.getPosition() || e == t.INTERRUPT_LATE && n.getPosition() > i.getPosition()) && (i = n) : i = n)
			}
			return null != i ? (i.interrupt(), this.remove(i), !0) : !1
		}, s.toString = function() {
			return "[Sound SoundChannel]"
		}, t.defaultSoundInstance = new n, null == createjs.proxy && (createjs.proxy = function() {
			throw "Proxy has been moved to an external file, and must be included separately."
		}), i.init = function() {
			var t = window.navigator.userAgent;
			i.isFirefox = t.indexOf("Firefox") > -1, i.isOpera = null != window.opera, i.isChrome = t.indexOf("Chrome") > -1, i.isIOS = t.indexOf("iPod") > -1 || t.indexOf("iPhone") > -1 || t.indexOf("iPad") > -1, i.isAndroid = t.indexOf("Android") > -1, i.isBlackberry = t.indexOf("Blackberry") > -1
		}, i.init(), createjs.Sound.BrowserDetect = i
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";

		function t() {
			this.init()
		}
		var e = t;
		e.capabilities = null, e.isSupported = function() {
			var t = createjs.Sound.BrowserDetect.isIOS || createjs.Sound.BrowserDetect.isAndroid || createjs.Sound.BrowserDetect.isBlackberry;
			return "file:" != location.protocol || t || this.isFileXHRSupported() ? (e.generateCapabilities(), null == e.context ? !1 : !0) : !1
		}, e.isFileXHRSupported = function() {
			var t = !0,
				e = new XMLHttpRequest;
			try {
				e.open("GET", "fail.fail", !1)
			} catch (n) {
				return t = !1
			}
			e.onerror = function() {
				t = !1
			}, e.onload = function() {
				t = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response
			};
			try {
				e.send()
			} catch (n) {
				t = !1
			}
			return t
		}, e.generateCapabilities = function() {
			if (null == e.capabilities) {
				var t = document.createElement("audio");
				if (null == t.canPlayType) return null;
				if (window.AudioContext) e.context = new AudioContext;
				else {
					if (!window.AudioContext) return null;
					e.context = new AudioContext
				}
				e.compatibilitySetUp(), e.playEmptySound(), e.capabilities = {
					panning: !0,
					volume: !0,
					tracks: -1
				};
				for (var n = createjs.Sound.SUPPORTED_EXTENSIONS, i = createjs.Sound.EXTENSION_MAP, r = 0, s = n.length; s > r; r++) {
					var a = n[r],
						o = i[a] || a;
					e.capabilities[a] = "no" != t.canPlayType("audio/" + a) && "" != t.canPlayType("audio/" + a) || "no" != t.canPlayType("audio/" + o) && "" != t.canPlayType("audio/" + o)
				}
				e.context.destination.numberOfChannels < 2 && (e.capabilities.panning = !1), e.dynamicsCompressorNode = e.context.createDynamicsCompressor(), e.dynamicsCompressorNode.connect(e.context.destination), e.gainNode = e.context.createGain(), e.gainNode.connect(e.dynamicsCompressorNode)
			}
		}, e.compatibilitySetUp = function() {
			if (!e.context.createGain) {
				e.context.createGain = e.context.createGainNode;
				var t = e.context.createBufferSource();
				t.__proto__.start = t.__proto__.noteGrainOn, t.__proto__.stop = t.__proto__.noteOff, this.panningModel = 0
			}
		}, e.playEmptySound = function() {
			var t = this.context.createBuffer(1, 1, 22050),
				e = this.context.createBufferSource();
			e.buffer = t, e.connect(this.context.destination), e.start(0, 0, 0)
		};
		var n = t.prototype;
		n.capabilities = null, n.volume = 1, n.context = null, n.panningModel = "equalpower", n.dynamicsCompressorNode = null, n.gainNode = null, n.arrayBuffers = null, n.init = function() {
			this.capabilities = e.capabilities, this.arrayBuffers = {}, this.context = e.context, this.gainNode = e.gainNode, this.dynamicsCompressorNode = e.dynamicsCompressorNode
		}, n.register = function(t) {
			this.arrayBuffers[t] = !0;
			var e = new createjs.WebAudioPlugin.Loader(t, this);
			return {
				tag: e
			}
		}, n.isPreloadStarted = function(t) {
			return null != this.arrayBuffers[t]
		}, n.isPreloadComplete = function(t) {
			return !(null == this.arrayBuffers[t] || 1 == this.arrayBuffers[t])
		}, n.removeFromPreload = function(t) {
			delete this.arrayBuffers[t]
		}, n.removeSound = function(t) {
			delete this.arrayBuffers[t]
		}, n.removeAllSounds = function() {
			this.arrayBuffers = {}
		}, n.addPreloadResults = function(t, e) {
			this.arrayBuffers[t] = e
		}, n.handlePreloadComplete = function() {
			createjs.Sound.sendFileLoadEvent(this.src)
		}, n.preload = function(t, e, n) {
			this.arrayBuffers[t] = !0;
			var i = new createjs.WebAudioPlugin.Loader(t, this);
			i.onload = this.handlePreloadComplete, null != n && (i.src = n + i.src), i.load()
		}, n.create = function(t) {
			return this.isPreloadStarted(t) || this.preload(t), new createjs.WebAudioPlugin.SoundInstance(t, this)
		}, n.setVolume = function(t) {
			return this.volume = t, this.updateVolume(), !0
		}, n.updateVolume = function() {
			var t = createjs.Sound.masterMute ? 0 : this.volume;
			t != this.gainNode.gain.value && (this.gainNode.gain.value = t)
		}, n.getVolume = function() {
			return this.volume
		}, n.setMute = function() {
			return this.updateVolume(), !0
		}, n.toString = function() {
			return "[WebAudioPlugin]"
		}, createjs.WebAudioPlugin = t
	}(),
	function() {
		"use strict";

		function t(t, e) {
			this.init(t, e)
		}
		var e = t.prototype;
		e.src = null, e.uniqueId = -1, e.playState = null, e.owner = null, e.offset = 0, e.delay = 0, e._volume = 1, Object.defineProperty(e, "volume", {
			get: function() {
				return this._volume
			},
			set: function(t) {
				return null == Number(t) ? !1 : (t = Math.max(0, Math.min(1, t)), this._volume = t, void this.updateVolume())
			}
		}), e._pan = 0, Object.defineProperty(e, "pan", {
			get: function() {
				return this._pan
			},
			set: function(t) {
				return this.owner.capabilities.panning && null != Number(t) ? (t = Math.max(-1, Math.min(1, t)), this._pan = t, void this.panNode.setPosition(t, 0, -.5)) : !1
			}
		}), e.duration = 0, e.remainingLoops = 0, e.delayTimeoutId = null, e.soundCompleteTimeout = null, e.panNode = null, e.gainNode = null, e.sourceNode = null, e.sourceNodeNext = null, e.muted = !1, e.paused = !1, e.startTime = 0, e.addEventListener = null, e.removeEventListener = null, e.removeAllEventListeners = null, e.dispatchEvent = null, e.hasEventListener = null, e._listeners = null, e.endedHandler = null, e.readyHandler = null, e.stalledHandler = null, e.sendEvent = function(t) {
			var e = new createjs.Event(t);
			this.dispatchEvent(e)
		}, e.init = function(t, e) {
			this.owner = e, this.src = t, this.panNode = this.owner.context.createPanner(), this.panNode.panningModel = this.owner.panningModel, this.gainNode = this.owner.context.createGain(), this.gainNode.connect(this.panNode), this.owner.isPreloadComplete(this.src) && (this.duration = 1e3 * this.owner.arrayBuffers[this.src].duration), this.endedHandler = createjs.proxy(this.handleSoundComplete, this), this.readyHandler = createjs.proxy(this.handleSoundReady, this), this.stalledHandler = createjs.proxy(this.handleSoundStalled, this)
		}, e.cleanUp = function() {
			this.sourceNode && this.sourceNode.playbackState != this.sourceNode.UNSCHEDULED_STATE && (this.sourceNode = this.cleanUpAudioNode(this.sourceNode), this.sourceNodeNext = this.cleanUpAudioNode(this.sourceNodeNext)), 0 != this.panNode.numberOfOutputs && this.panNode.disconnect(0), clearTimeout(this.delayTimeoutId), clearTimeout(this.soundCompleteTimeout), this.startTime = 0, null != window.createjs && createjs.Sound.playFinished(this)
		}, e.cleanUpAudioNode = function(t) {
			return t && (t.stop(0), t.disconnect(this.gainNode), t = null), t
		}, e.interrupt = function() {
			this.playState = createjs.Sound.PLAY_INTERRUPTED, this.cleanUp(), this.paused = !1, this.sendEvent("interrupted")
		}, e.handleSoundStalled = function() {
			this.sendEvent("failed")
		}, e.handleSoundReady = function() {
			if (null != window.createjs) {
				if (1e3 * this.offset > this.getDuration()) return void this.playFailed();
				this.offset < 0 && (this.offset = 0), this.playState = createjs.Sound.PLAY_SUCCEEDED, this.paused = !1, this.panNode.connect(this.owner.gainNode);
				var t = this.owner.arrayBuffers[this.src].duration;
				this.sourceNode = this.createAndPlayAudioNode(this.owner.context.currentTime - t, this.offset), this.duration = 1e3 * t, this.startTime = this.sourceNode.startTime - this.offset, this.soundCompleteTimeout = setTimeout(this.endedHandler, 1e3 * (t - this.offset)), 0 != this.remainingLoops && (this.sourceNodeNext = this.createAndPlayAudioNode(this.startTime, 0))
			}
		}, e.createAndPlayAudioNode = function(t, e) {
			var n = this.owner.context.createBufferSource();
			return n.buffer = this.owner.arrayBuffers[this.src], n.connect(this.gainNode), this.owner.context.currentTime, n.startTime = t + n.buffer.duration, n.start(n.startTime, e, n.buffer.duration - e), n
		}, e.play = function(t, e, n, i, r, s) {
			this.cleanUp(), createjs.Sound.playInstance(this, t, e, n, i, r, s)
		}, e.beginPlaying = function(t, e, n, i) {
			return null != window.createjs && this.src ? (this.offset = t / 1e3, this.remainingLoops = e, this.volume = n, this.pan = i, this.owner.isPreloadComplete(this.src) ? (this.handleSoundReady(null), this.sendEvent("succeeded"), 1) : void this.playFailed()) : void 0
		}, e.pause = function() {
			return this.paused || this.playState != createjs.Sound.PLAY_SUCCEEDED ? !1 : (this.paused = !0, this.offset = this.owner.context.currentTime - this.startTime, this.cleanUpAudioNode(this.sourceNode), this.cleanUpAudioNode(this.sourceNodeNext), 0 != this.panNode.numberOfOutputs && this.panNode.disconnect(), clearTimeout(this.delayTimeoutId), clearTimeout(this.soundCompleteTimeout), !0)
		}, e.resume = function() {
			return this.paused ? (this.handleSoundReady(null), !0) : !1
		}, e.stop = function() {
			return this.playState = createjs.Sound.PLAY_FINISHED, this.cleanUp(), this.offset = 0, !0
		}, e.setVolume = function(t) {
			return this.volume = t, !0
		}, e.updateVolume = function() {
			var t = this.muted ? 0 : this._volume;
			return t != this.gainNode.gain.value ? (this.gainNode.gain.value = t, !0) : !1
		}, e.getVolume = function() {
			return this.volume
		}, e.setMute = function(t) {
			return null == t || void 0 == t ? !1 : (this.muted = t, this.updateVolume(), !0)
		}, e.getMute = function() {
			return this.muted
		}, e.setPan = function(t) {
			return this.pan = t, this.pan != t ? !1 : void 0
		}, e.getPan = function() {
			return this.pan
		}, e.getPosition = function() {
			if (this.paused || null == this.sourceNode) var t = this.offset;
			else var t = this.owner.context.currentTime - this.startTime;
			return 1e3 * t
		}, e.setPosition = function(t) {
			return this.offset = t / 1e3, this.sourceNode && this.sourceNode.playbackState != this.sourceNode.UNSCHEDULED_STATE && (this.cleanUpAudioNode(this.sourceNode), this.cleanUpAudioNode(this.sourceNodeNext), clearTimeout(this.soundCompleteTimeout)), this.paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || this.handleSoundReady(null), !0
		}, e.getDuration = function() {
			return this.duration
		}, e.handleSoundComplete = function() {
			return this.offset = 0, 0 != this.remainingLoops ? (this.remainingLoops--, this.sourceNodeNext ? (this.cleanUpAudioNode(this.sourceNode), this.sourceNode = this.sourceNodeNext, this.startTime = this.sourceNode.startTime, this.sourceNodeNext = this.createAndPlayAudioNode(this.startTime, 0), this.soundCompleteTimeout = setTimeout(this.endedHandler, this.duration)) : this.handleSoundReady(null), void this.sendEvent("loop")) : void(null != window.createjs && (this.playState = createjs.Sound.PLAY_FINISHED, this.cleanUp(), this.sendEvent("complete")))
		}, e.playFailed = function() {
			null != window.createjs && (this.playState = createjs.Sound.PLAY_FAILED, this.cleanUp(), this.sendEvent("failed"))
		}, e.toString = function() {
			return "[WebAudioPlugin SoundInstance]"
		}, createjs.EventDispatcher.initialize(t.prototype), createjs.WebAudioPlugin.SoundInstance = t
	}(),
	function() {
		"use strict";

		function t(t, e) {
			this.init(t, e)
		}
		var e = t.prototype;
		e.request = null, e.owner = null, e.progress = -1, e.src = null, e.originalSrc = null, e.result = null, e.onload = null, e.onprogress = null, e.onError = null, e.init = function(t, e) {
			this.src = t, this.originalSrc = t, this.owner = e
		}, e.load = function(t) {
			null != t && (this.src = t), this.request = new XMLHttpRequest, this.request.open("GET", this.src, !0), this.request.responseType = "arraybuffer", this.request.onload = createjs.proxy(this.handleLoad, this), this.request.onError = createjs.proxy(this.handleError, this), this.request.onprogress = createjs.proxy(this.handleProgress, this), this.request.send()
		}, e.handleProgress = function(t, e) {
			this.progress = t / e, null != this.onprogress && this.onprogress({
				loaded: t,
				total: e,
				progress: this.progress
			})
		}, e.handleLoad = function() {
			this.owner.context.decodeAudioData(this.request.response, createjs.proxy(this.handleAudioDecoded, this), createjs.proxy(this.handleError, this))
		}, e.handleAudioDecoded = function(t) {
			this.progress = 1, this.result = t, this.src = this.originalSrc, this.owner.addPreloadResults(this.src, this.result), this.onload && this.onload()
		}, e.handleError = function(t) {
			this.owner.removeSound(this.src), this.onerror && this.onerror(t)
		}, e.toString = function() {
			return "[WebAudioPlugin Loader]"
		}, createjs.WebAudioPlugin.Loader = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";

		function t() {
			this.init()
		}
		var e = t;
		e.MAX_INSTANCES = 30, e.capabilities = null, e.AUDIO_READY = "canplaythrough", e.AUDIO_ENDED = "ended", e.AUDIO_SEEKED = "seeked", e.AUDIO_ERROR = "error", e.AUDIO_STALLED = "stalled", e.enableIOS = !1, e.isSupported = function() {
			if (createjs.Sound.BrowserDetect.isIOS && !e.enableIOS) return !1;
			e.generateCapabilities();
			var t = e.tag;
			return null == t || null == e.capabilities ? !1 : !0
		}, e.generateCapabilities = function() {
			if (null == e.capabilities) {
				var t = e.tag = document.createElement("audio");
				if (null == t.canPlayType) return null;
				e.capabilities = {
					panning: !0,
					volume: !0,
					tracks: -1
				};
				for (var n = createjs.Sound.SUPPORTED_EXTENSIONS, i = createjs.Sound.EXTENSION_MAP, r = 0, s = n.length; s > r; r++) {
					var a = n[r],
						o = i[a] || a;
					e.capabilities[a] = "no" != t.canPlayType("audio/" + a) && "" != t.canPlayType("audio/" + a) || "no" != t.canPlayType("audio/" + o) && "" != t.canPlayType("audio/" + o)
				}
			}
		};
		var n = t.prototype;
		n.capabilities = null, n.audioSources = null, n.defaultNumChannels = 2, n.loadedHandler = null, n.init = function() {
			this.capabilities = e.capabilities, this.audioSources = {}
		}, n.register = function(t, e) {
			this.audioSources[t] = !0;
			for (var n = createjs.HTMLAudioPlugin.TagPool.get(t), i = null, r = e || this.defaultNumChannels, s = 0; r > s; s++) i = this.createTag(t), n.add(i);
			if (i.id = t, this.loadedHandler = createjs.proxy(this.handleTagLoad, this), i.addEventListener && i.addEventListener("canplaythrough", this.loadedHandler), null == i.onreadystatechange) i.onreadystatechange = this.loadedHandler;
			else {
				var a = i.onreadystatechange;
				i.onreadystatechange = function() {
					a(), this.loadedHandler()
				}
			}
			return {
				tag: i,
				numChannels: r
			}
		}, n.handleTagLoad = function(t) {
			t.target.removeEventListener && t.target.removeEventListener("canplaythrough", this.loadedHandler), t.target.onreadystatechange = null, t.target.src != t.target.id && createjs.HTMLAudioPlugin.TagPool.checkSrc(t.target.id)
		}, n.createTag = function(t) {
			var e = document.createElement("audio");
			return e.autoplay = !1, e.preload = "none", e.src = t, e
		}, n.removeSound = function(t) {
			delete this.audioSources[t], createjs.HTMLAudioPlugin.TagPool.remove(t)
		}, n.removeAllSounds = function() {
			this.audioSources = {}, createjs.HTMLAudioPlugin.TagPool.removeAll()
		}, n.create = function(t) {
			if (!this.isPreloadStarted(t)) {
				var e = createjs.HTMLAudioPlugin.TagPool.get(t),
					n = this.createTag(t);
				n.id = t, e.add(n), this.preload(t, {
					tag: n
				})
			}
			return new createjs.HTMLAudioPlugin.SoundInstance(t, this)
		}, n.isPreloadStarted = function(t) {
			return null != this.audioSources[t]
		}, n.preload = function(t, e, n) {
			this.audioSources[t] = !0, null != n && (e.tag.src = n + t), new createjs.HTMLAudioPlugin.Loader(t, e.tag)
		}, n.toString = function() {
			return "[HTMLAudioPlugin]"
		}, createjs.HTMLAudioPlugin = t
	}(),
	function() {
		"use strict";

		function t(t, e) {
			this.init(t, e)
		}
		var e = t.prototype;
		e.src = null, e.uniqueId = -1, e.playState = null, e.owner = null, e.loaded = !1, e.offset = 0, e.delay = 0, e._volume = 1, Object.defineProperty(e, "volume", {
			get: function() {
				return this._volume
			},
			set: function(t) {
				null != Number(t) && (t = Math.max(0, Math.min(1, t)), this._volume = t, this.updateVolume())
			}
		}), e.pan = 0, e.duration = 0, e.remainingLoops = 0, e.delayTimeoutId = null, e.tag = null, e.muted = !1, e.paused = !1, e.addEventListener = null, e.removeEventListener = null, e.removeAllEventListeners = null, e.dispatchEvent = null, e.hasEventListener = null, e._listeners = null, e.endedHandler = null, e.readyHandler = null, e.stalledHandler = null, e.loopHandler = null, e.init = function(t, e) {
			this.src = t, this.owner = e, this.endedHandler = createjs.proxy(this.handleSoundComplete, this), this.readyHandler = createjs.proxy(this.handleSoundReady, this), this.stalledHandler = createjs.proxy(this.handleSoundStalled, this), this.loopHandler = createjs.proxy(this.handleSoundLoop, this)
		}, e.sendEvent = function(t) {
			var e = new createjs.Event(t);
			this.dispatchEvent(e)
		}, e.cleanUp = function() {
			var t = this.tag;
			if (null != t) {
				t.pause(), t.removeEventListener(createjs.HTMLAudioPlugin.AUDIO_ENDED, this.endedHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin.AUDIO_READY, this.readyHandler, !1), t.removeEventListener(createjs.HTMLAudioPlugin.AUDIO_SEEKED, this.loopHandler, !1);
				try {
					t.currentTime = 0
				} catch (e) {}
				createjs.HTMLAudioPlugin.TagPool.setInstance(this.src, t), this.tag = null
			}
			clearTimeout(this.delayTimeoutId), null != window.createjs && createjs.Sound.playFinished(this)
		}, e.interrupt = function() {
			null != this.tag && (this.playState = createjs.Sound.PLAY_INTERRUPTED, this.cleanUp(), this.paused = !1, this.sendEvent("interrupted"))
		}, e.play = function(t, e, n, i, r, s) {
			this.cleanUp(), createjs.Sound.playInstance(this, t, e, n, i, r, s)
		}, e.beginPlaying = function(t, e, n, i) {
			if (null == window.createjs) return -1;
			var r = this.tag = createjs.HTMLAudioPlugin.TagPool.getInstance(this.src);
			return null == r ? (this.playFailed(), -1) : (r.addEventListener(createjs.HTMLAudioPlugin.AUDIO_ENDED, this.endedHandler, !1), this.offset = t, this.volume = n, this.pan = i, this.updateVolume(), this.remainingLoops = e, 4 !== r.readyState ? (r.addEventListener(createjs.HTMLAudioPlugin.AUDIO_READY, this.readyHandler, !1), r.addEventListener(createjs.HTMLAudioPlugin.AUDIO_STALLED, this.stalledHandler, !1), r.preload = "auto", r.load()) : this.handleSoundReady(null), this.sendEvent("succeeded"), 1)
		}, e.handleSoundStalled = function() {
			this.cleanUp(), this.sendEvent("failed")
		}, e.handleSoundReady = function() {
			if (null != window.createjs) {
				if (this.duration = 1e3 * this.tag.duration, this.playState = createjs.Sound.PLAY_SUCCEEDED, this.paused = !1, this.tag.removeEventListener(createjs.HTMLAudioPlugin.AUDIO_READY, this.readyHandler, !1), this.offset >= this.getDuration()) return void this.playFailed();
				this.offset > 0 && (this.tag.currentTime = .001 * this.offset), -1 == this.remainingLoops && (this.tag.loop = !0), 0 != this.remainingLoops && (this.tag.addEventListener(createjs.HTMLAudioPlugin.AUDIO_SEEKED, this.loopHandler, !1), this.tag.loop = !0), this.tag.play()
			}
		}, e.pause = function() {
			return this.paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || null == this.tag ? !1 : (this.paused = !0, this.tag.pause(), clearTimeout(this.delayTimeoutId), !0)
		}, e.resume = function() {
			return this.paused && null != this.tag ? (this.paused = !1, this.tag.play(), !0) : !1
		}, e.stop = function() {
			return this.offset = 0, this.pause(), this.playState = createjs.Sound.PLAY_FINISHED, this.cleanUp(), !0
		}, e.setMasterVolume = function() {
			return this.updateVolume(), !0
		}, e.setVolume = function(t) {
			return this.volume = t, !0
		}, e.updateVolume = function() {
			if (null != this.tag) {
				var t = this.muted || createjs.Sound.masterMute ? 0 : this._volume * createjs.Sound.masterVolume;
				return t != this.tag.volume && (this.tag.volume = t), !0
			}
			return !1
		}, e.getVolume = function() {
			return this.volume
		}, e.setMasterMute = function() {
			return this.updateVolume(), !0
		}, e.setMute = function(t) {
			return null == t || void 0 == t ? !1 : (this.muted = t, this.updateVolume(), !0)
		}, e.getMute = function() {
			return this.muted
		}, e.setPan = function() {
			return !1
		}, e.getPan = function() {
			return 0
		}, e.getPosition = function() {
			return null == this.tag ? this.offset : 1e3 * this.tag.currentTime
		}, e.setPosition = function(t) {
			if (null == this.tag) this.offset = t;
			else {
				this.tag.removeEventListener(createjs.HTMLAudioPlugin.AUDIO_SEEKED, this.loopHandler, !1);
				try {
					this.tag.currentTime = .001 * t
				} catch (e) {
					return !1
				}
				this.tag.addEventListener(createjs.HTMLAudioPlugin.AUDIO_SEEKED, this.loopHandler, !1)
			}
			return !0
		}, e.getDuration = function() {
			return this.duration
		}, e.handleSoundComplete = function() {
			this.offset = 0, null != window.createjs && (this.playState = createjs.Sound.PLAY_FINISHED, this.cleanUp(), this.sendEvent("complete"))
		}, e.handleSoundLoop = function() {
			this.offset = 0, this.remainingLoops--, 0 == this.remainingLoops && (this.tag.loop = !1, this.tag.removeEventListener(createjs.HTMLAudioPlugin.AUDIO_SEEKED, this.loopHandler, !1)), this.sendEvent("loop")
		}, e.playFailed = function() {
			null != window.createjs && (this.playState = createjs.Sound.PLAY_FAILED, this.cleanUp(), this.sendEvent("failed"))
		}, e.toString = function() {
			return "[HTMLAudioPlugin SoundInstance]"
		}, createjs.EventDispatcher.initialize(t.prototype), createjs.HTMLAudioPlugin.SoundInstance = t
	}(),
	function() {
		"use strict";

		function t(t, e) {
			this.init(t, e)
		}
		var e = t.prototype;
		e.src = null, e.tag = null, e.preloadTimer = null, e.loadedHandler = null, e.init = function(t, e) {
			if (this.src = t, this.tag = e, this.preloadTimer = setInterval(createjs.proxy(this.preloadTick, this), 200), this.loadedHandler = createjs.proxy(this.sendLoadedEvent, this), this.tag.addEventListener && this.tag.addEventListener("canplaythrough", this.loadedHandler), null == this.tag.onreadystatechange) this.tag.onreadystatechange = createjs.proxy(this.sendLoadedEvent, this);
			else {
				var n = this.tag.onreadystatechange;
				this.tag.onreadystatechange = function() {
					n(), this.tag.onreadystatechange = createjs.proxy(this.sendLoadedEvent, this)
				}
			}
			this.tag.preload = "auto", this.tag.load()
		}, e.preloadTick = function() {
			var t = this.tag.buffered,
				e = this.tag.duration;
			t.length > 0 && t.end(0) >= e - 1 && this.handleTagLoaded()
		}, e.handleTagLoaded = function() {
			clearInterval(this.preloadTimer)
		}, e.sendLoadedEvent = function() {
			this.tag.removeEventListener && this.tag.removeEventListener("canplaythrough", this.loadedHandler), this.tag.onreadystatechange = null, createjs.Sound.sendFileLoadEvent(this.src)
		}, e.toString = function() {
			return "[HTMLAudioPlugin Loader]"
		}, createjs.HTMLAudioPlugin.Loader = t
	}(),
	function() {
		"use strict";

		function t(t) {
			this.init(t)
		}
		var e = t;
		e.tags = {}, e.get = function(n) {
			var i = e.tags[n];
			return null == i && (i = e.tags[n] = new t(n)), i
		}, e.remove = function(t) {
			var n = e.tags[t];
			return null == n ? !1 : (n.removeAll(), delete e.tags[t], !0)
		}, e.removeAll = function() {
			for (var t in e.tags) e.tags[t].removeAll();
			e.tags = {}
		}, e.getInstance = function(t) {
			var n = e.tags[t];
			return null == n ? null : n.get()
		}, e.setInstance = function(t, n) {
			var i = e.tags[t];
			return null == i ? null : i.set(n)
		}, e.checkSrc = function(t) {
			var n = e.tags[t];
			return null == n ? null : void n.checkSrcChange()
		};
		var n = t.prototype;
		n.src = null, n.length = 0, n.available = 0, n.tags = null, n.init = function(t) {
			this.src = t, this.tags = []
		}, n.add = function(t) {
			this.tags.push(t), this.length++, this.available++
		}, n.removeAll = function() {
			for (; this.length--;) delete this.tags[this.length];
			this.src = null, this.tags.length = 0
		}, n.get = function() {
			if (0 == this.tags.length) return null;
			this.available = this.tags.length;
			var t = this.tags.pop();
			return null == t.parentNode && document.body.appendChild(t), t
		}, n.set = function(t) {
			var e = createjs.indexOf(this.tags, t); - 1 == e && this.tags.push(t), this.available = this.tags.length
		}, n.checkSrcChange = function() {
			for (var t = this.tags.length - 1, e = this.tags[t].src; t--;) this.tags[t].src = e
		}, n.toString = function() {
			return "[HTMLAudioPlugin TagPool]"
		}, createjs.HTMLAudioPlugin.TagPool = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e, n) {
				this.initialize(t, e, n)
			},
			e = t.prototype = new createjs.EventDispatcher;
		t.NONE = 0, t.LOOP = 1, t.REVERSE = 2, t.IGNORE = {}, t._tweens = [], t._plugins = {}, t.get = function(e, n, i, r) {
			return r && t.removeTweens(e), new t(e, n, i)
		}, t.tick = function(e, n) {
			for (var i = t._tweens.slice(), r = i.length - 1; r >= 0; r--) {
				var s = i[r];
				n && !s.ignoreGlobalPause || s._paused || s.tick(s._useTicks ? 1 : e)
			}
		}, t.handleEvent = function(t) {
			"tick" == t.type && this.tick(t.delta, t.paused)
		}, t.removeTweens = function(e) {
			if (e.tweenjs_count) {
				for (var n = t._tweens, i = n.length - 1; i >= 0; i--) n[i]._target == e && (n[i]._paused = !0, n.splice(i, 1));
				e.tweenjs_count = 0
			}
		}, t.removeAllTweens = function() {
			for (var e = t._tweens, n = 0, i = e.length; i > n; n++) {
				var r = e[n];
				r.paused = !0, r.target.tweenjs_count = 0
			}
			e.length = 0
		}, t.hasActiveTweens = function(e) {
			return e ? e.tweenjs_count : t._tweens && !!t._tweens.length
		}, t.installPlugin = function(e, n) {
			var i = e.priority;
			null == i && (e.priority = i = 0);
			for (var r = 0, s = n.length, a = t._plugins; s > r; r++) {
				var o = n[r];
				if (a[o]) {
					for (var l = a[o], u = 0, c = l.length; c > u && !(i < l[u].priority); u++);
					a[o].splice(u, 0, e)
				} else a[o] = [e]
			}
		}, t._register = function(e, n) {
			var i = e._target,
				r = t._tweens;
			if (n) i && (i.tweenjs_count = i.tweenjs_count ? i.tweenjs_count + 1 : 1), r.push(e), !t._inited && createjs.Ticker && (createjs.Ticker.addEventListener("tick", t), t._inited = !0);
			else {
				i && i.tweenjs_count--;
				for (var s = r.length; s--;)
					if (r[s] == e) return void r.splice(s, 1)
			}
		}, e.ignoreGlobalPause = !1, e.loop = !1, e.duration = 0, e.pluginData = null, e.target = null, e.position = null, e.passive = !1, e._paused = !1, e._curQueueProps = null, e._initQueueProps = null, e._steps = null, e._actions = null, e._prevPosition = 0, e._stepPosition = 0, e._prevPos = -1, e._target = null, e._useTicks = !1, e._inited = !1, e.initialize = function(e, n, i) {
			this.target = this._target = e, n && (this._useTicks = n.useTicks, this.ignoreGlobalPause = n.ignoreGlobalPause, this.loop = n.loop, n.onChange && this.addEventListener("change", n.onChange), n.override && t.removeTweens(e)), this.pluginData = i || {}, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], n && n.paused ? this._paused = !0 : t._register(this, !0), n && null != n.position && this.setPosition(n.position, t.NONE)
		}, e.wait = function(t, e) {
			if (null == t || 0 >= t) return this;
			var n = this._cloneProps(this._curQueueProps);
			return this._addStep({
				d: t,
				p0: n,
				e: this._linearEase,
				p1: n,
				v: e
			})
		}, e.to = function(t, e, n) {
			return (isNaN(e) || 0 > e) && (e = 0), this._addStep({
				d: e || 0,
				p0: this._cloneProps(this._curQueueProps),
				e: n,
				p1: this._cloneProps(this._appendQueueProps(t))
			})
		}, e.call = function(t, e, n) {
			return this._addAction({
				f: t,
				p: e ? e : [this],
				o: n ? n : this._target
			})
		}, e.set = function(t, e) {
			return this._addAction({
				f: this._set,
				o: this,
				p: [t, e ? e : this._target]
			})
		}, e.play = function(t) {
			return t || (t = this), this.call(t.setPaused, [!1], t)
		}, e.pause = function(t) {
			return t || (t = this), this.call(t.setPaused, [!0], t)
		}, e.setPosition = function(t, e) {
			0 > t && (t = 0), null == e && (e = 1);
			var n = t,
				i = !1;
			if (n >= this.duration && (this.loop ? n %= this.duration : (n = this.duration, i = !0)), n == this._prevPos) return i;
			var r = this._prevPos;
			if (this.position = this._prevPos = n, this._prevPosition = t, this._target)
				if (i) this._updateTargetProps(null, 1);
				else if (this._steps.length > 0) {
				for (var s = 0, a = this._steps.length; a > s && !(this._steps[s].t > n); s++);
				var o = this._steps[s - 1];
				this._updateTargetProps(o, (this._stepPosition = n - o.t) / o.d)
			}
			return 0 != e && this._actions.length > 0 && (this._useTicks ? this._runActions(n, n) : 1 == e && r > n ? (r != this.duration && this._runActions(r, this.duration), this._runActions(0, n, !0)) : this._runActions(r, n)), i && this.setPaused(!0), this.dispatchEvent("change"), i
		}, e.tick = function(t) {
			this._paused || this.setPosition(this._prevPosition + t)
		}, e.setPaused = function(e) {
			return this._paused = !!e, t._register(this, !e), this
		}, e.w = e.wait, e.t = e.to, e.c = e.call, e.s = e.set, e.toString = function() {
			return "[Tween]"
		}, e.clone = function() {
			throw "Tween can not be cloned."
		}, e._updateTargetProps = function(e, n) {
			var i, r, s, a, o, l;
			if (e || 1 != n) {
				if (this.passive = !!e.v, this.passive) return;
				e.e && (n = e.e(n, 0, 1, 1)), i = e.p0, r = e.p1
			} else this.passive = !1, i = r = this._curQueueProps;
			for (var u in this._initQueueProps) {
				null == (a = i[u]) && (i[u] = a = this._initQueueProps[u]), null == (o = r[u]) && (r[u] = o = a), s = a == o || 0 == n || 1 == n || "number" != typeof a ? 1 == n ? o : a : a + (o - a) * n;
				var c = !1;
				if (l = t._plugins[u])
					for (var h = 0, d = l.length; d > h; h++) {
						var f = l[h].tween(this, u, s, i, r, n, !!e && i == r, !e);
						f == t.IGNORE ? c = !0 : s = f
					}
				c || (this._target[u] = s)
			}
		}, e._runActions = function(t, e, n) {
			var i = t,
				r = e,
				s = -1,
				a = this._actions.length,
				o = 1;
			for (t > e && (i = e, r = t, s = a, a = o = -1);
				(s += o) != a;) {
				var l = this._actions[s],
					u = l.t;
				(u == r || u > i && r > u || n && u == t) && l.f.apply(l.o, l.p)
			}
		}, e._appendQueueProps = function(e) {
			var n, i, r, s, a;
			for (var o in e)
				if (void 0 === this._initQueueProps[o]) {
					if (i = this._target[o], n = t._plugins[o])
						for (r = 0, s = n.length; s > r; r++) i = n[r].init(this, o, i);
					this._initQueueProps[o] = this._curQueueProps[o] = void 0 === i ? null : i
				} else i = this._curQueueProps[o];
			for (var o in e) {
				if (i = this._curQueueProps[o], n = t._plugins[o])
					for (a = a || {}, r = 0, s = n.length; s > r; r++) n[r].step && n[r].step(this, o, i, e[o], a);
				this._curQueueProps[o] = e[o]
			}
			return a && this._appendQueueProps(a), this._curQueueProps
		}, e._cloneProps = function(t) {
			var e = {};
			for (var n in t) e[n] = t[n];
			return e
		}, e._addStep = function(t) {
			return t.d > 0 && (this._steps.push(t), t.t = this.duration, this.duration += t.d), this
		}, e._addAction = function(t) {
			return t.t = this.duration, this._actions.push(t), this
		}, e._set = function(t, e) {
			for (var n in t) e[n] = t[n]
		}, createjs.Tween = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function(t, e, n) {
				this.initialize(t, e, n)
			},
			e = t.prototype = new createjs.EventDispatcher;
		e.ignoreGlobalPause = !1, e.duration = 0, e.loop = !1, e.position = null, e._paused = !1, e._tweens = null, e._labels = null, e._labelList = null, e._prevPosition = 0, e._prevPos = -1, e._useTicks = !1, e.initialize = function(t, e, n) {
			this._tweens = [], n && (this._useTicks = n.useTicks, this.loop = n.loop, this.ignoreGlobalPause = n.ignoreGlobalPause, n.onChange && this.addEventListener("change", n.onChange)), t && this.addTween.apply(this, t), this.setLabels(e), n && n.paused ? this._paused = !0 : createjs.Tween._register(this, !0), n && null != n.position && this.setPosition(n.position, createjs.Tween.NONE)
		}, e.addTween = function(t) {
			var e = arguments.length;
			if (e > 1) {
				for (var n = 0; e > n; n++) this.addTween(arguments[n]);
				return arguments[0]
			}
			return 0 == e ? null : (this.removeTween(t), this._tweens.push(t), t.setPaused(!0), t._paused = !1, t._useTicks = this._useTicks, t.duration > this.duration && (this.duration = t.duration), this._prevPos >= 0 && t.setPosition(this._prevPos, createjs.Tween.NONE), t)
		}, e.removeTween = function(t) {
			var e = arguments.length;
			if (e > 1) {
				for (var n = !0, i = 0; e > i; i++) n = n && this.removeTween(arguments[i]);
				return n
			}
			if (0 == e) return !1;
			for (var r = this._tweens, i = r.length; i--;)
				if (r[i] == t) return r.splice(i, 1), t.duration >= this.duration && this.updateDuration(), !0;
			return !1
		}, e.addLabel = function(t, e) {
			this._labels[t] = e;
			var n = this._labelList;
			if (n) {
				for (var i = 0, r = n.length; r > i && !(e < n[i].position); i++);
				n.splice(i, 0, {
					label: t,
					position: e
				})
			}
		}, e.setLabels = function(t) {
			this._labels = t ? t : {}
		}, e.getLabels = function() {
			var t = this._labelList;
			if (!t) {
				t = this._labelList = [];
				var e = this._labels;
				for (var n in e) t.push({
					label: n,
					position: e[n]
				});
				t.sort(function(t, e) {
					return t.position - e.position
				})
			}
			return t
		}, e.getCurrentLabel = function() {
			var t = this.getLabels(),
				e = this.position,
				n = t.length;
			if (n) {
				for (var i = 0; n > i && !(e < t[i].position); i++);
				return 0 == i ? null : t[i - 1].label
			}
			return null
		}, e.gotoAndPlay = function(t) {
			this.setPaused(!1), this._goto(t)
		}, e.gotoAndStop = function(t) {
			this.setPaused(!0), this._goto(t)
		}, e.setPosition = function(t, e) {
			0 > t && (t = 0);
			var n = this.loop ? t % this.duration : t,
				i = !this.loop && t >= this.duration;
			if (n == this._prevPos) return i;
			this._prevPosition = t, this.position = this._prevPos = n;
			for (var r = 0, s = this._tweens.length; s > r; r++)
				if (this._tweens[r].setPosition(n, e), n != this._prevPos) return !1;
			return i && this.setPaused(!0), this.dispatchEvent("change"), i
		}, e.setPaused = function(t) {
			this._paused = !!t, createjs.Tween._register(this, !t)
		}, e.updateDuration = function() {
			this.duration = 0;
			for (var t = 0, e = this._tweens.length; e > t; t++) {
				var n = this._tweens[t];
				n.duration > this.duration && (this.duration = n.duration)
			}
		}, e.tick = function(t) {
			this.setPosition(this._prevPosition + t)
		}, e.resolve = function(t) {
			var e = parseFloat(t);
			return isNaN(e) && (e = this._labels[t]), e
		}, e.toString = function() {
			return "[Timeline]"
		}, e.clone = function() {
			throw "Timeline can not be cloned."
		}, e._goto = function(t) {
			var e = this.resolve(t);
			null != e && this.setPosition(e)
		}, createjs.Timeline = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function() {
			throw "Ease cannot be instantiated."
		};
		t.linear = function(t) {
			return t
		}, t.none = t.linear, t.get = function(t) {
			return -1 > t && (t = -1), t > 1 && (t = 1),
				function(e) {
					return 0 == t ? e : 0 > t ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
				}
		}, t.getPowIn = function(t) {
			return function(e) {
				return Math.pow(e, t)
			}
		}, t.getPowOut = function(t) {
			return function(e) {
				return 1 - Math.pow(1 - e, t)
			}
		}, t.getPowInOut = function(t) {
			return function(e) {
				return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t))
			}
		}, t.quadIn = t.getPowIn(2), t.quadOut = t.getPowOut(2), t.quadInOut = t.getPowInOut(2), t.cubicIn = t.getPowIn(3), t.cubicOut = t.getPowOut(3), t.cubicInOut = t.getPowInOut(3), t.quartIn = t.getPowIn(4), t.quartOut = t.getPowOut(4), t.quartInOut = t.getPowInOut(4), t.quintIn = t.getPowIn(5), t.quintOut = t.getPowOut(5), t.quintInOut = t.getPowInOut(5), t.sineIn = function(t) {
			return 1 - Math.cos(t * Math.PI / 2)
		}, t.sineOut = function(t) {
			return Math.sin(t * Math.PI / 2)
		}, t.sineInOut = function(t) {
			return -.5 * (Math.cos(Math.PI * t) - 1)
		}, t.getBackIn = function(t) {
			return function(e) {
				return e * e * ((t + 1) * e - t)
			}
		}, t.backIn = t.getBackIn(1.7), t.getBackOut = function(t) {
			return function(e) {
				return --e * e * ((t + 1) * e + t) + 1
			}
		}, t.backOut = t.getBackOut(1.7), t.getBackInOut = function(t) {
			return t *= 1.525,
				function(e) {
					return (e *= 2) < 1 ? .5 * e * e * ((t + 1) * e - t) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
				}
		}, t.backInOut = t.getBackInOut(1.7), t.circIn = function(t) {
			return -(Math.sqrt(1 - t * t) - 1)
		}, t.circOut = function(t) {
			return Math.sqrt(1 - --t * t)
		}, t.circInOut = function(t) {
			return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
		}, t.bounceIn = function(e) {
			return 1 - t.bounceOut(1 - e)
		}, t.bounceOut = function(t) {
			return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
		}, t.bounceInOut = function(e) {
			return .5 > e ? .5 * t.bounceIn(2 * e) : .5 * t.bounceOut(2 * e - 1) + .5
		}, t.getElasticIn = function(t, e) {
			var n = 2 * Math.PI;
			return function(i) {
				if (0 == i || 1 == i) return i;
				var r = e / n * Math.asin(1 / t);
				return -(t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - r) * n / e))
			}
		}, t.elasticIn = t.getElasticIn(1, .3), t.getElasticOut = function(t, e) {
			var n = 2 * Math.PI;
			return function(i) {
				if (0 == i || 1 == i) return i;
				var r = e / n * Math.asin(1 / t);
				return t * Math.pow(2, -10 * i) * Math.sin((i - r) * n / e) + 1
			}
		}, t.elasticOut = t.getElasticOut(1, .3), t.getElasticInOut = function(t, e) {
			var n = 2 * Math.PI;
			return function(i) {
				var r = e / n * Math.asin(1 / t);
				return (i *= 2) < 1 ? -.5 * t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - r) * n / e) : .5 * t * Math.pow(2, -10 * (i -= 1)) * Math.sin((i - r) * n / e) + 1
			}
		}, t.elasticInOut = t.getElasticInOut(1, .3 * 1.5), createjs.Ease = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = function() {
			throw "MotionGuidePlugin cannot be instantiated."
		};
		t.priority = 0, t._rotOffS, t._rotOffE, t._rotNormS, t._rotNormE, t.install = function() {
			return createjs.Tween.installPlugin(t, ["guide", "x", "y", "rotation"]), createjs.Tween.IGNORE
		}, t.init = function(t, e, n) {
			var i = t.target;
			return i.hasOwnProperty("x") || (i.x = 0), i.hasOwnProperty("y") || (i.y = 0), i.hasOwnProperty("rotation") || (i.rotation = 0), "rotation" == e && (t.__needsRot = !0), "guide" == e ? null : n
		}, t.step = function(e, n, i, r, s) {
			if ("rotation" == n && (e.__rotGlobalS = i, e.__rotGlobalE = r, t.testRotData(e, s)), "guide" != n) return r;
			var a, o = r;
			o.hasOwnProperty("path") || (o.path = []);
			var l = o.path;
			if (o.hasOwnProperty("end") || (o.end = 1), o.hasOwnProperty("start") || (o.start = i && i.hasOwnProperty("end") && i.path === l ? i.end : 0), o.hasOwnProperty("_segments") && o._length) return r;
			var u = l.length,
				c = 10;
			if (!(u >= 6 && 0 == (u - 2) % 4)) throw "invalid 'path' data, please see documentation for valid paths";
			o._segments = [], o._length = 0;
			for (var h = 2; u > h; h += 4) {
				for (var d, f, p = l[h - 2], g = l[h - 1], m = l[h + 0], v = l[h + 1], _ = l[h + 2], y = l[h + 3], w = p, b = g, x = 0, S = [], T = 1; c >= T; T++) {
					var E = T / c,
						L = 1 - E;
					d = L * L * p + 2 * L * E * m + E * E * _, f = L * L * g + 2 * L * E * v + E * E * y, x += S[S.push(Math.sqrt((a = d - w) * a + (a = f - b) * a)) - 1], w = d, b = f
				}
				o._segments.push(x), o._segments.push(S), o._length += x
			}
			a = o.orient, o.orient = !0;
			var j = {};
			return t.calc(o, o.start, j), e.__rotPathS = Number(j.rotation.toFixed(5)), t.calc(o, o.end, j), e.__rotPathE = Number(j.rotation.toFixed(5)), o.orient = !1, t.calc(o, o.end, s), o.orient = a, o.orient ? (e.__guideData = o, t.testRotData(e, s), r) : r
		}, t.testRotData = function(t, e) {
			if (void 0 === t.__rotGlobalS || void 0 === t.__rotGlobalE) {
				if (t.__needsRot) return;
				t.__rotGlobalS = t.__rotGlobalE = void 0 !== t._curQueueProps.rotation ? t._curQueueProps.rotation : e.rotation = t.target.rotation || 0
			}
			if (void 0 !== t.__guideData) {
				var n = t.__guideData,
					i = t.__rotGlobalE - t.__rotGlobalS,
					r = t.__rotPathE - t.__rotPathS,
					s = i - r;
				if ("auto" == n.orient) s > 180 ? s -= 360 : -180 > s && (s += 360);
				else if ("cw" == n.orient) {
					for (; 0 > s;) s += 360;
					0 == s && i > 0 && 180 != i && (s += 360)
				} else if ("ccw" == n.orient) {
					for (s = i - (r > 180 ? 360 - r : r); s > 0;) s -= 360;
					0 == s && 0 > i && -180 != i && (s -= 360)
				}
				n.rotDelta = s, n.rotOffS = t.__rotGlobalS - t.__rotPathS, t.__rotGlobalS = t.__rotGlobalE = t.__guideData = t.__needsRot = void 0
			}
		}, t.tween = function(e, n, i, r, s, a, o) {
			var l = s.guide;
			if (void 0 == l || l === r.guide) return i;
			if (l.lastRatio != a) {
				var u = (l.end - l.start) * (o ? l.end : a) + l.start;
				switch (t.calc(l, u, e.target), l.orient) {
					case "cw":
					case "ccw":
					case "auto":
						e.target.rotation += l.rotOffS + l.rotDelta * a;
						break;
					case "fixed":
					default:
						e.target.rotation += l.rotOffS
				}
				l.lastRatio = a
			}
			return "rotation" != n || l.orient && "false" != l.orient ? e.target[n] : i
		}, t.calc = function(e, n, i) {
			void 0 == e._segments && t.validate(e), void 0 == i && (i = {
				x: 0,
				y: 0,
				rotation: 0
			});
			for (var r = e._segments, s = e.path, a = e._length * n, o = r.length - 2, l = 0; a > r[l] && o > l;) a -= r[l], l += 2;
			var u = r[l + 1],
				c = 0;
			for (o = u.length - 1; a > u[c] && o > c;) a -= u[c], c++;
			var h = c / ++o + a / (o * u[c]);
			l = 2 * l + 2;
			var d = 1 - h;
			return i.x = d * d * s[l - 2] + 2 * d * h * s[l + 0] + h * h * s[l + 2], i.y = d * d * s[l - 1] + 2 * d * h * s[l + 1] + h * h * s[l + 3], e.orient && (i.rotation = 57.2957795 * Math.atan2((s[l + 1] - s[l - 1]) * d + (s[l + 3] - s[l + 1]) * h, (s[l + 0] - s[l - 2]) * d + (s[l + 2] - s[l + 0]) * h)), i
		}, createjs.MotionGuidePlugin = t
	}(), this.createjs = this.createjs || {},
	function() {
		"use strict";
		var t = createjs.TweenJS = createjs.TweenJS || {};
		t.version = "NEXT", t.buildDate = "Tue, 01 Oct 2013 16:03:38 GMT"
	}();
var i = (new Date).getTime() % 5,
	startGameTime, fontunit = Math.min(24, (window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth) / 320 * 10);
document.write('<style type="text/css">html,body {font-size:' + (30 > fontunit ? fontunit : "30") + "px;}" + (isDesktop ? "#welcome,#GameTimeLayer,#GameLayerBG,#GameScoreLayer.SHADE{position: absolute;}" : "#welcome,#GameTimeLayer,#GameLayerBG,#GameScoreLayer.SHADE{position:fixed;}@media screen and (orientation:landscape) {#landscape {display: box; display: -webkit-box; display: -moz-box; display: -ms-flexbox;} #GameLayerBG, #GameTimeLayer{display:none;}}") + "</style>");
var gameHtmls = (isDesktop && '<div id="gameBody">' || "") + createGameLayer() + (isDesktop && "</div>" || ""),
	body, blockSize, GameLayer = [],
	GameLayerBG, touchArea = [],
	GameTimeLayer, transform, transitionDuration, refreshSizeTime, _gameBBList = [],
	_gameBBListIndex = 0,
	_gameOver = !1,
	_gameStart = !1,
	_gameTime, _gameTimeNum, _gameScore, _ttreg = / t{1,2}(\d+)/,
	_clearttClsReg = / t{1,2}\d+| bad/,
	mebtnopenurl = "http://mp.weixin.qq.com/s?__biz=MjM5ODMzMjk5Nw==&mid=200442232&idx=1&sn=bb981cf0ec10bc9bf28f24179744f511&from=singlemessage&isappinstalled=0#rd";
document.write(gameHtmls);
var htmlLoading;
