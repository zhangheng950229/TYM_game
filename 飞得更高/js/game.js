
//egret
var egret;
(function(b) {
	b.egret_string_code = {};
	b.egret_string_code[-1] = "不存在的stringId:{0}";
	b.egret_string_code[1E3] = "Browser.isMobile接口参数已经变更，请尽快调整用法为 egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE";
	b.egret_string_code[1001] = "该方法目前不应传入 resolutionPolicy 参数，请在 docs/1.0_Final_ReleaseNote中查看如何升级";
	b.egret_string_code[1002] = "egret.Ticker是框架内部使用的单例，不允许在外部实例化，计时器请使用egret.Timer类！";
	b.egret_string_code[1003] = "Ticker#setTimeout方法即将废弃,请使用egret.setTimeout";
	b.egret_string_code[1004] = "ExternalInterface调用了js没有注册的方法: {0}";
	b.egret_string_code[1005] = "设置了已经存在的blendMode: {0}";
	b.egret_string_code[1006] = "child不在当前容器内";
	b.egret_string_code[1007] = "提供的索引超出范围";
	b.egret_string_code[1008] = "child未被addChild到该parent";
	b.egret_string_code[1009] = "设置了已经存在的适配模式:{0}";
	b.egret_string_code[1010] = "addEventListener侦听函数不能为空";
	b.egret_string_code[1011] = 'BitmapText找不到文字所对应的纹理:"{0}"';
	b.egret_string_code[1012] = "egret.BitmapTextSpriteSheet已废弃，请使用egret.BitmapFont代替。";
	b.egret_string_code[1013] = "TextField.setFocus 没有实现";
	b.egret_string_code[1014] = "Ease不能被实例化";
	b.egret_string_code[1015] = "xml not found!";
	b.egret_string_code[1016] = "{0}已经废弃";
	b.egret_string_code[1017] = "JSON文件格式不正确: {0}\ndata: {1}";
	b.egret_string_code[1018] = "egret_html5_localStorage.setItem保存失败,key={0}&value={1}";
	b.egret_string_code[1019] = "网络异常:{0}";
	b.egret_string_code[1020] = "无法初始化着色器";
	b.egret_string_code[1021] = "当前浏览器不支持webgl";
	b.egret_string_code[1022] = "{0} ArgumentError";
	b.egret_string_code[1023] = "此方法在ScrollView内不可用!";
	b.egret_string_code[1024] = "使用了尚未实现的ScaleMode";
	b.egret_string_code[1025] = "遇到文件尾";
	b.egret_string_code[1026] = "EncodingError! The code point {0} could not be encoded.";
	b.egret_string_code[1027] = "DecodingError";
	b.egret_string_code[1028] = "调用了未配置的注入规则:{0}。 请先在项目初始化里配置指定的注入规则，再调用对应单例。";
	b.egret_string_code[1029] = "Function.prototype.bind - what is trying to be bound is not callable";
	b.egret_string_code[1030] = "该API已废弃";
	b.egret_string_code[2E3] = "RES.createGroup()传入了配置中不存在的键值: {0}";
	b.egret_string_code[2001] = 'RES加载了不存在或空的资源组:"{0}"';
	b.egret_string_code[3E3] = "主题配置文件加载失败: {0}";
	b.egret_string_code[3001] = "找不到主题中所配置的皮肤类名: {0}";
	b.egret_string_code[3002] = '索引:"{0}"超出集合元素索引范围';
	b.egret_string_code[3003] = "在此组件中不可用，若此组件为容器类，请使用";
	b.egret_string_code[3004] = "addChild(){0}addElement()代替";
	b.egret_string_code[3005] = "addChildAt(){0}addElementAt()代替";
	b.egret_string_code[3006] = "removeChild(){0}removeElement()代替";
	b.egret_string_code[3007] = "removeChildAt(){0}removeElementAt()代替";
	b.egret_string_code[3008] = "setChildIndex(){0}setElementIndex()代替";
	b.egret_string_code[3009] = "swapChildren(){0}swapElements()代替";
	b.egret_string_code[3010] = "swapChildrenAt(){0}swapElementsAt()代替";
	b.egret_string_code[3011] = '索引:"{0}"超出可视元素索引范围';
	b.egret_string_code[3012] = "此方法在Scroller组件内不可用!";
	b.egret_string_code[3013] = "UIStage是GUI根容器，只能有一个此实例在显示列表中！";
	b.egret_string_code[4E3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)";
	b.egret_string_code[4001] = "Abstract class can not be instantiated!";
	b.egret_string_code[4002] = "Unnamed data!";
	b.egret_string_code[4003] = "Nonsupport version!";
	b.egret_string_code[3100] = "当前浏览器不支持WebSocket";
	b.egret_string_code[3101] = "请先连接WebSocket";
	b.egret_string_code[3102] = "请先设置type为二进制类型"
})(egret || (egret = {}));
(function(b) {
	function d(a) {
		for (var e = [], k = 1; k < arguments.length; k++) e[k - 1] = arguments[k];
		if (k = b.egret_string_code[a]) for (var m = e.length, h = 0; h < m; h++) k = k.replace("{" + h + "}", e[h]);
		return k
	}
	var c = function() {
			function a() {}
			a.fatal = function(e, a) {
				void 0 === a && (a = null);
				b.Logger.traceToConsole("Fatal", e, a);
				throw Error(b.Logger.getTraceCode("Fatal", e, a));
			};
			a.info = function(e, a) {
				void 0 === a && (a = null);
				b.Logger.traceToConsole("Info", e, a)
			};
			a.warning = function(e, a) {
				void 0 === a && (a = null);
				b.Logger.traceToConsole("Warning", e, a)
			};
			a.fatalWithErrorId = function(e) {
				for (var k = [], b = 1; b < arguments.length; b++) k[b - 1] = arguments[b];
				k.unshift(e);
				(k = d.apply(null, k)) ? a.fatal(k) : a.warning(d(-1, e))
			};
			a.infoWithErrorId = function(e) {
				for (var k = [], b = 1; b < arguments.length; b++) k[b - 1] = arguments[b];
				k.unshift(e);
				(k = d.apply(null, k)) ? a.info(k) : a.warning(d(-1, e))
			};
			a.warningWithErrorId = function(e) {
				for (var k = [], b = 1; b < arguments.length; b++) k[b - 1] = arguments[b];
				k.unshift(e);
				(k = d.apply(null, k)) ? a.warning(k) : a.warning(d(-1, e))
			};
			a.traceToConsole = function(e, a, m) {
				console.log(b.Logger.getTraceCode(e, a, m))
			};
			a.getTraceCode = function(e, a, b) {
				return "[" + e + "]" + a + (null == b ? "" : ":" + b)
			};
			return a
		}();
	b.Logger = c;
	c.prototype.__class__ = "egret.Logger";
	b.getString = d
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function b() {
				this._hashCode = b.hashCount++
			}
			Object.defineProperty(b.prototype, "hashCode", {
				get: function() {
					return this._hashCode
				},
				enumerable: !0,
				configurable: !0
			});
			b.hashCount = 1;
			return b
		}();
	b.HashObject = d;
	d.prototype.__class__ = "egret.HashObject"
})(egret || (egret = {}));
var __extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a(e) {
				void 0 === e && (e = 300);
				b.call(this);
				this.objectPool = [];
				this._length = 0;
				1 > e && (e = 1);
				this.autoDisposeTime = e;
				this.frameCount = 0
			}
			__extends(a, b);
			a.prototype._checkFrame = function() {
				this.frameCount--;
				0 >= this.frameCount && this.dispose()
			};
			Object.defineProperty(a.prototype, "length", {
				get: function() {
					return this._length
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.push = function(e) {
				var k = this.objectPool; - 1 == k.indexOf(e) && (k.push(e), e.__recycle && e.__recycle(), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, a._callBackList.push(this)))
			};
			a.prototype.pop = function() {
				if (0 == this._length) return null;
				this._length--;
				return this.objectPool.pop()
			};
			a.prototype.dispose = function() {
				0 < this._length && (this.objectPool = [], this._length = 0);
				this.frameCount = 0;
				var e = a._callBackList,
					k = e.indexOf(this); - 1 != k && e.splice(k, 1)
			};
			a._callBackList = [];
			return a
		}(b.HashObject);
	b.Recycler = d;
	d.prototype.__class__ = "egret.Recycler"
})(egret || (egret = {}));
(function(b) {
	b.__START_TIME;
	b.getTimer = function() {
		return Date.now() - b.__START_TIME
	}
})(egret || (egret = {}));
(function(b) {
	b.__callLaterFunctionList = [];
	b.__callLaterThisList = [];
	b.__callLaterArgsList = [];
	b.callLater = function(d, c) {
		for (var a = [], e = 2; e < arguments.length; e++) a[e - 2] = arguments[e];
		b.__callLaterFunctionList.push(d);
		b.__callLaterThisList.push(c);
		b.__callLaterArgsList.push(a)
	};
	b.__callAsyncFunctionList = [];
	b.__callAsyncThisList = [];
	b.__callAsyncArgsList = [];
	b.__callAsync = function(d, c) {
		for (var a = [], e = 2; e < arguments.length; e++) a[e - 2] = arguments[e];
		b.__callAsyncFunctionList.push(d);
		b.__callAsyncThisList.push(c);
		b.__callAsyncArgsList.push(a)
	}
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function c() {}
			c.prototype.call = function(a) {
				this.callback && this.callback.call(this.thisObject, a)
			};
			c.prototype.dispose = function() {
				this.thisObject = this.callback = null;
				c.__freeList.push(this)
			};
			c.push = function(a, e) {
				var k;
				k = c.__freeList.length ? c.__freeList.pop() : new b.RenderCommand;
				k.callback = a;
				k.thisObject = e;
				b.MainContext.__DRAW_COMMAND_LIST.push(k)
			};
			c.__freeList = [];
			return c
		}();
	b.RenderCommand = d;
	d.prototype.__class__ = "egret.RenderCommand"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(e, a, b) {
				void 0 === a && (a = !1);
				void 0 === b && (b = !1);
				c.call(this);
				this.data = null;
				this._type = "";
				this._cancelable = this._bubbles = !1;
				this._eventPhase = 2;
				this._target = this._currentTarget = null;
				this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
				this.isNew = !0;
				this._type = e;
				this._bubbles = a;
				this._cancelable = b
			}
			__extends(a, c);
			Object.defineProperty(a.prototype, "type", {
				get: function() {
					return this._type
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "bubbles", {
				get: function() {
					return this._bubbles
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "cancelable", {
				get: function() {
					return this._cancelable
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "eventPhase", {
				get: function() {
					return this._eventPhase
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "currentTarget", {
				get: function() {
					return this._currentTarget
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "target", {
				get: function() {
					return this._target
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.isDefaultPrevented = function() {
				return this._isDefaultPrevented
			};
			a.prototype.preventDefault = function() {
				this._cancelable && (this._isDefaultPrevented = !0)
			};
			a.prototype.stopPropagation = function() {
				this._bubbles && (this._isPropagationStopped = !0)
			};
			a.prototype.stopImmediatePropagation = function() {
				this._bubbles && (this._isPropagationImmediateStopped = !0)
			};
			a.prototype._reset = function() {
				this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target = null, this._eventPhase = 2)
			};
			a.prototype.__recycle = function() {
				this.data = this._target = this._currentTarget = null
			};
			a._dispatchByTarget = function(e, a, m, h, c, d) {
				void 0 === c && (c = !1);
				void 0 === d && (d = !1);
				var l = e.eventRecycler;
				l || (l = e.eventRecycler = new b.Recycler);
				var n = l.pop();
				n ? n._type = m : n = new e(m);
				n._bubbles = c;
				n._cancelable = d;
				if (h) for (var p in h) n[p] = h[p], null !== n[p] && (h[p] = null);
				e = a.dispatchEvent(n);
				l.push(n);
				return e
			};
			a._getPropertyData = function(e) {
				var a = e._props;
				a || (a = e._props = {});
				return a
			};
			a.dispatchEvent = function(e, k, b, h) {
				void 0 === b && (b = !1);
				var c = a._getPropertyData(a);
				h && (c.data = h);
				a._dispatchByTarget(a, e, k, c, b)
			};
			a.ADDED_TO_STAGE = "addedToStage";
			a.REMOVED_FROM_STAGE = "removedFromStage";
			a.ADDED = "added";
			a.REMOVED = "removed";
			a.COMPLETE = "complete";
			a.LOOP_COMPLETE = "loopcomplete";
			a.ENTER_FRAME = "enterFrame";
			a.RENDER = "render";
			a.FINISH_RENDER = "finishRender";
			a.FINISH_UPDATE_TRANSFORM = "finishUpdateTransform";
			a.LEAVE_STAGE = "leaveStage";
			a.RESIZE = "resize";
			a.CHANGE = "change";
			a.ACTIVATE = "activate";
			a.DEACTIVATE = "deactivate";
			a.CLOSE = "close";
			a.CONNECT = "connect";
			return a
		}(b.HashObject);
	b.Event = d;
	d.prototype.__class__ = "egret.Event"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a(e, a, m) {
				void 0 === a && (a = !1);
				void 0 === m && (m = !1);
				b.call(this, e, a, m);
				this._status = 0
			}
			__extends(a, b);
			Object.defineProperty(a.prototype, "status", {
				get: function() {
					return this._status
				},
				enumerable: !0,
				configurable: !0
			});
			a.dispatchHTTPStatusEvent = function(e, k) {
				null == a.httpStatusEvent && (a.httpStatusEvent = new a(a.HTTP_STATUS));
				a.httpStatusEvent._status = k;
				e.dispatchEvent(a.httpStatusEvent)
			};
			a.HTTP_STATUS = "httpStatus";
			a.httpStatusEvent = null;
			return a
		}(b.Event);
	b.HTTPStatusEvent = d;
	d.prototype.__class__ = "egret.HTTPStatusEvent"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(e, a, b) {
				void 0 === a && (a = !1);
				void 0 === b && (b = !1);
				c.call(this, e, a, b)
			}
			__extends(a, c);
			a.dispatchIOErrorEvent = function(e) {
				b.Event._dispatchByTarget(a, e, a.IO_ERROR)
			};
			a.IO_ERROR = "ioError";
			return a
		}(b.Event);
	b.IOErrorEvent = d;
	d.prototype.__class__ = "egret.IOErrorEvent"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(e, a, b, h, d, f, l, n, p, q) {
				void 0 === a && (a = !0);
				void 0 === b && (b = !0);
				void 0 === h && (h = 0);
				void 0 === d && (d = 0);
				void 0 === f && (f = 0);
				void 0 === l && (l = !1);
				void 0 === n && (n = !1);
				void 0 === q && (q = !1);
				c.call(this, e, a, b);
				this._stageY = this._stageX = 0;
				this.touchPointID = NaN;
				this.touchDown = this.altKey = this.shiftKey = this.ctrlKey = !1;
				this.touchPointID = h;
				this._stageX = d;
				this._stageY = f;
				this.ctrlKey = l;
				this.altKey = n;
				this.touchDown = q
			}
			__extends(a, c);
			Object.defineProperty(a.prototype, "stageX", {
				get: function() {
					return this._stageX
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "stageY", {
				get: function() {
					return this._stageY
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "localX", {
				get: function() {
					return this._currentTarget.globalToLocal(this._stageX, this._stageY, b.Point.identity).x
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "localY", {
				get: function() {
					return this._currentTarget.globalToLocal(this._stageX, this._stageY, b.Point.identity).y
				},
				enumerable: !0,
				configurable: !0
			});
			a.dispatchTouchEvent = function(e, k, m, h, c, d, l, n, p) {
				void 0 === m && (m = 0);
				void 0 === h && (h = 0);
				void 0 === c && (c = 0);
				void 0 === d && (d = !1);
				void 0 === l && (l = !1);
				void 0 === n && (n = !1);
				void 0 === p && (p = !1);
				var q = b.Event._getPropertyData(a);
				q.touchPointID = m;
				q._stageX = h;
				q._stageY = c;
				q.ctrlKey = d;
				q.altKey = l;
				q.shiftKey = n;
				q.touchDown = p;
				b.Event._dispatchByTarget(a, e, k, q, !0, !0)
			};
			a.TOUCH_TAP = "touchTap";
			a.TOUCH_MOVE = "touchMove";
			a.TOUCH_BEGIN = "touchBegin";
			a.TOUCH_END = "touchEnd";
			a.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside";
			a.TOUCH_ROLL_OUT = "touchRollOut";
			a.TOUCH_ROLL_OVER = "touchRollOver";
			a.TOUCH_OUT = "touchOut";
			a.TOUCH_OVER = "touchOver";
			return a
		}(b.Event);
	b.TouchEvent = d;
	d.prototype.__class__ = "egret.TouchEvent"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(e, a, b) {
				void 0 === a && (a = !1);
				void 0 === b && (b = !1);
				c.call(this, e, a, b)
			}
			__extends(a, c);
			a.dispatchTimerEvent = function(e, k) {
				b.Event._dispatchByTarget(a, e, k)
			};
			a.TIMER = "timer";
			a.TIMER_COMPLETE = "timerComplete";
			return a
		}(b.Event);
	b.TimerEvent = d;
	d.prototype.__class__ = "egret.TimerEvent"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(e, a, b, h) {
				void 0 === a && (a = !1);
				void 0 === b && (b = !1);
				void 0 === h && (h = "");
				c.call(this, e, a, b);
				this.text = h
			}
			__extends(a, c);
			a.dispatchTextEvent = function(e, k, m) {
				var h = b.Event._getPropertyData(a);
				h.text = m;
				b.Event._dispatchByTarget(a, e, k, h)
			};
			a.LINK = "link";
			return a
		}(b.Event);
	b.TextEvent = d;
	d.prototype.__class__ = "egret.TextEvent"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(e, a, b, h, d) {
				void 0 === a && (a = !1);
				void 0 === b && (b = !1);
				void 0 === h && (h = 0);
				void 0 === d && (d = 0);
				c.call(this, e, a, b);
				this.bytesTotal = this.bytesLoaded = 0;
				this.bytesLoaded = h;
				this.bytesTotal = d
			}
			__extends(a, c);
			a.dispatchProgressEvent = function(e, k, m, h) {
				void 0 === m && (m = 0);
				void 0 === h && (h = 0);
				b.Event._dispatchByTarget(a, e, k, {
					bytesLoaded: m,
					bytesTotal: h
				})
			};
			a.PROGRESS = "progress";
			a.SOCKET_DATA = "socketData";
			return a
		}(b.Event);
	b.ProgressEvent = d;
	d.prototype.__class__ = "egret.ProgressEvent"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function b() {}
			b.CAPTURING_PHASE = 1;
			b.AT_TARGET = 2;
			b.BUBBLING_PHASE = 3;
			return b
		}();
	b.EventPhase = d;
	d.prototype.__class__ = "egret.EventPhase"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(e) {
				void 0 === e && (e = null);
				c.call(this);
				this._captureEventsMap = this._eventsMap = this._eventTarget = null;
				this._eventTarget = e ? e : this
			}
			__extends(a, c);
			a.prototype.addEventListener = function(e, a, m, h, c) {
				void 0 === h && (h = !1);
				void 0 === c && (c = 0);
				"undefined" === typeof h && (h = !1);
				"undefined" === typeof c && (c = 0);
				a || b.Logger.fatalWithErrorId(1010);
				h ? (this._captureEventsMap || (this._captureEventsMap = {}), h = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), h = this._eventsMap);
				var d = h[e];
				d || (d = h[e] = []);
				this._insertEventBin(d, a, m, c)
			};
			a.prototype._insertEventBin = function(e, a, b, h, c) {
				void 0 === c && (c = void 0);
				for (var d = -1, l = e.length, n = 0; n < l; n++) {
					var p = e[n];
					if (p.listener === a && p.thisObject === b && p.display === c) return !1; - 1 == d && p.priority < h && (d = n)
				}
				a = {
					listener: a,
					thisObject: b,
					priority: h
				};
				c && (a.display = c); - 1 != d ? e.splice(d, 0, a) : e.push(a);
				return !0
			};
			a.prototype.removeEventListener = function(e, a, b, h) {
				void 0 === h && (h = !1);
				if (h = h ? this._captureEventsMap : this._eventsMap) {
					var c = h[e];
					c && (this._removeEventBin(c, a, b), 0 == c.length && delete h[e])
				}
			};
			a.prototype._removeEventBin = function(e, a, b, h, c) {
				void 0 === h && (h = void 0);
				void 0 === c && (c = 0);
				for (var d = e.length; c < d; c++) {
					var l = e[c];
					if (l.listener === a && l.thisObject === b && l.display == h) return e.splice(c, 1), !0
				}
				return !1
			};
			a.prototype.hasEventListener = function(e) {
				return this._eventsMap && this._eventsMap[e] || this._captureEventsMap && this._captureEventsMap[e]
			};
			a.prototype.willTrigger = function(e) {
				return this.hasEventListener(e)
			};
			a.prototype.dispatchEvent = function(e) {
				e._reset();
				e._target = this._eventTarget;
				e._currentTarget = this._eventTarget;
				return this._notifyListener(e)
			};
			a.prototype._notifyListener = function(e) {
				var a = 1 == e._eventPhase ? this._captureEventsMap : this._eventsMap;
				if (!a) return !0;
				a = a[e._type];
				if (!a) return !0;
				var b = a.length;
				if (0 == b) return !0;
				for (var a = a.concat(), c = 0; c < b; c++) {
					var d = a[c];
					d.listener.call(d.thisObject, e);
					if (e._isPropagationImmediateStopped) break
				}
				return !e._isDefaultPrevented
			};
			a.prototype.dispatchEventWith = function(e, a, m) {
				void 0 === a && (a = !1);
				b.Event.dispatchEvent(this, e, a, m)
			};
			return a
		}(b.HashObject);
	b.EventDispatcher = d;
	d.prototype.__class__ = "egret.EventDispatcher"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this.stage = this.deviceContext = this.netContext = this.touchContext = this.rendererContext = null;
				this.reuseEvent = new b.Event("")
			}
			__extends(a, c);
			a.prototype.run = function() {
				b.Ticker.getInstance().run();
				b.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
				b.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
				this.touchContext.run();
				this._profileInstance = b.Profiler.getInstance()
			};
			a.prototype.renderLoop = function(e) {
				if (0 < b.__callLaterFunctionList.length) {
					var k = b.__callLaterFunctionList;
					b.__callLaterFunctionList = [];
					var m = b.__callLaterThisList;
					b.__callLaterThisList = [];
					var c = b.__callLaterArgsList;
					b.__callLaterArgsList = []
				}
				e = this.stage;
				var d = a.cachedEvent;
				d._type = b.Event.RENDER;
				this.dispatchEvent(d);
				b.Stage._invalidateRenderFlag && (this.broadcastRender(), b.Stage._invalidateRenderFlag = !1);
				k && this.doCallLaterList(k, m, c);
				0 < b.__callAsyncFunctionList.length && this.doCallAsyncList();
				k = this.rendererContext;
				k.onRenderStart();
				k.clearScreen();
				a.__DRAW_COMMAND_LIST = [];
				a._renderLoopPhase = "updateTransform";
				e._updateTransform();
				a._renderLoopPhase = "draw";
				d._type = b.Event.FINISH_UPDATE_TRANSFORM;
				this.dispatchEvent(d);
				a.__use_new_draw ? this._draw(k) : e._draw(k);
				d._type = b.Event.FINISH_RENDER;
				this.dispatchEvent(d);
				this._profileInstance._isRunning && this._profileInstance._drawProfiler();
				k.onRenderFinish()
			};
			a.prototype._draw = function(e) {
				for (var k = a.__DRAW_COMMAND_LIST, b = k.length, c = 0; c < b; c++) {
					var d = k[c];
					d.call(e);
					d.dispose()
				}
			};
			a.prototype.broadcastEnterFrame = function(e) {
				e = this.reuseEvent;
				e._type = b.Event.ENTER_FRAME;
				this.dispatchEvent(e);
				for (var a = b.DisplayObject._enterFrameCallBackList.concat(), m = a.length, c = 0; c < m; c++) {
					var d = a[c];
					e._target = d.display;
					e._currentTarget = d.display;
					d.listener.call(d.thisObject, e)
				}
				a = b.Recycler._callBackList;
				for (c = a.length - 1; 0 <= c; c--) a[c]._checkFrame()
			};
			a.prototype.broadcastRender = function() {
				var e = this.reuseEvent;
				e._type = b.Event.RENDER;
				for (var a = b.DisplayObject._renderCallBackList.concat(), m = a.length, c = 0; c < m; c++) {
					var d = a[c],
						f = d.display;
					e._target = f;
					e._currentTarget = f;
					d.listener.call(d.thisObject, e)
				}
			};
			a.prototype.doCallLaterList = function(e, a, b) {
				for (var c = e.length, d = 0; d < c; d++) {
					var f = e[d];
					null != f && f.apply(a[d], b[d])
				}
			};
			a.prototype.doCallAsyncList = function() {
				var e = b.__callAsyncFunctionList.concat(),
					a = b.__callAsyncThisList.concat(),
					m = b.__callAsyncArgsList.concat();
				b.__callAsyncFunctionList.length = 0;
				b.__callAsyncThisList.length = 0;
				for (var c = b.__callAsyncArgsList.length = 0; c < e.length; c++) {
					var d = e[c];
					null != d && d.apply(a[c], m[c])
				}
			};
			a.deviceType = null;
			a.DEVICE_PC = "web";
			a.DEVICE_MOBILE = "native";
			a.RUNTIME_HTML5 = "runtime_html5";
			a.RUNTIME_NATIVE = "runtime_native";
			a.__DRAW_COMMAND_LIST = [];
			a.__use_new_draw = !0;
			a.cachedEvent = new b.Event("");
			return a
		}(b.EventDispatcher);
	b.MainContext = d;
	d.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));
var testDeviceType = function() {
		if (!this.navigator) return !0;
		var b = navigator.userAgent.toLowerCase();
		return -1 != b.indexOf("mobile") || -1 != b.indexOf("android")
	},
	testRuntimeType = function() {
		return this.navigator ? !0 : !1
	};
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC;
egret.MainContext.runtimeType = testRuntimeType() ? egret.MainContext.RUNTIME_HTML5 : egret.MainContext.RUNTIME_NATIVE;
delete testDeviceType;
delete testRuntimeType;
(function(b) {
	var d = function() {
			function c() {
				this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0;
				this._txt = null;
				this._tick = 0;
				this._maxDeltaTime = 500;
				this._totalDeltaTime = 0;
				this._isRunning = !1
			}
			c.getInstance = function() {
				null == c.instance && (c.instance = new c);
				return c.instance
			};
			c.prototype.stop = function() {
				if (this._isRunning) {
					this._isRunning = !1;
					b.Ticker.getInstance().unregister(this.update, this);
					var a = b.MainContext.instance;
					a.removeEventListener(b.Event.ENTER_FRAME, this.onEnterFrame, this);
					a.removeEventListener(b.Event.RENDER, this.onStartRender, this);
					a.removeEventListener(b.Event.FINISH_RENDER, this.onFinishRender, this);
					a.removeEventListener(b.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
				}
			};
			c.prototype.run = function() {
				null == this._txt && (this._txt = new b.TextField, this._txt.size = 28, this._txt.multiline = !0, this._txt._parent = new b.DisplayObjectContainer);
				if (!this._isRunning) {
					this._isRunning = !0;
					b.Ticker.getInstance().register(this.update, this);
					var a = b.MainContext.instance;
					a.addEventListener(b.Event.ENTER_FRAME, this.onEnterFrame, this);
					a.addEventListener(b.Event.RENDER, this.onStartRender, this);
					a.addEventListener(b.Event.FINISH_RENDER, this.onFinishRender, this);
					a.addEventListener(b.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
				}
			};
			c.prototype._drawProfiler = function() {
				this._txt._updateTransform();
				this._txt._draw(b.MainContext.instance.rendererContext)
			};
			c.prototype._setTxtFontSize = function(a) {
				this._txt.size = a
			};
			c.prototype.onEnterFrame = function(a) {
				this._lastTime = b.getTimer()
			};
			c.prototype.onStartRender = function(a) {
				a = b.getTimer();
				this._logicPerformanceCost = a - this._lastTime;
				this._lastTime = a
			};
			c.prototype.onFinishUpdateTransform = function(a) {
				a = b.getTimer();
				this._updateTransformPerformanceCost = a - this._lastTime;
				this._lastTime = a
			};
			c.prototype.onFinishRender = function(a) {
				a = b.getTimer();
				this._renderPerformanceCost = a - this._lastTime;
				this._lastTime = a
			};
			c.prototype.update = function(a) {
				this._tick++;
				this._totalDeltaTime += a;
				if (this._totalDeltaTime >= this._maxDeltaTime) {
					a = (this._preDrawCount - 3).toString();
					var e = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() + "," + Math.ceil(b.MainContext.instance.rendererContext.renderCost).toString();
					this._txt.text = "draw:" + a + "\ncost:" + e + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
					this._tick = this._totalDeltaTime = 0
				}
				this._preDrawCount = 0
			};
			c.prototype.onDrawImage = function() {
				this._preDrawCount++
			};
			return c
		}();
	b.Profiler = d;
	d.prototype.__class__ = "egret.Profiler"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this._timeScale = 1;
				this._paused = !1;
				this._callIndex = -1;
				this.callBackList = [];
				null != a.instance && b.Logger.fatalWithErrorId(1002)
			}
			__extends(a, c);
			a.prototype.run = function() {
				b.__START_TIME = (new Date).getTime();
				b.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
			};
			a.prototype.update = function(e) {
				if (!this._paused) {
					e *= this._timeScale;
					e *= this._timeScale;
					this._callList = this.callBackList.concat();
					for (this._callIndex = 0; this._callIndex < this._callList.length; this._callIndex++) {
						var a = this._callList[this._callIndex];
						a.listener.call(a.thisObject, e)
					}
					this._callIndex = -1;
					this._callList = null
				}
			};
			a.prototype.register = function(e, a, b) {
				void 0 === b && (b = 0);
				this._insertEventBin(this.callBackList, e, a, b)
			};
			a.prototype.unregister = function(e, a) {
				this._removeEventBin(this.callBackList, e, a);
				this._callList && -1 < this._callIndex && this._removeEventBin(this._callList, e, a, null, this._callIndex + 1)
			};
			a.prototype.setTimeout = function(e, a, m) {
				for (var c = [], d = 3; d < arguments.length; d++) c[d - 3] = arguments[d];
				b.Logger.warningWithErrorId(1003);
				b.setTimeout.apply(null, [e, a, m].concat(c))
			};
			a.prototype.setTimeScale = function(e) {
				this._timeScale = e
			};
			a.prototype.getTimeScale = function() {
				return this._timeScale
			};
			a.prototype.pause = function() {
				this._paused = !0
			};
			a.prototype.resume = function() {
				this._paused = !1
			};
			a.getInstance = function() {
				null == a.instance && (a.instance = new a);
				return a.instance
			};
			return a
		}(b.EventDispatcher);
	b.Ticker = d;
	d.prototype.__class__ = "egret.Ticker"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function b() {}
			b.LEFT = "left";
			b.RIGHT = "right";
			b.CENTER = "center";
			b.JUSTIFY = "justify";
			b.CONTENT_JUSTIFY = "contentJustify";
			return b
		}();
	b.HorizontalAlign = d;
	d.prototype.__class__ = "egret.HorizontalAlign"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function b() {}
			b.TOP = "top";
			b.BOTTOM = "bottom";
			b.MIDDLE = "middle";
			b.JUSTIFY = "justify";
			b.CONTENT_JUSTIFY = "contentJustify";
			return b
		}();
	b.VerticalAlign = d;
	d.prototype.__class__ = "egret.VerticalAlign"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(e, a) {
				void 0 === a && (a = 0);
				c.call(this);
				this._currentCount = 0;
				this._running = !1;
				this.lastTime = 0;
				this.delay = e;
				this.repeatCount = a
			}
			__extends(a, c);
			Object.defineProperty(a.prototype, "currentCount", {
				get: function() {
					return this._currentCount
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "running", {
				get: function() {
					return this._running
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.reset = function() {
				this.stop();
				this._currentCount = 0
			};
			a.prototype.start = function() {
				this._running || (this.lastTime = b.getTimer(), b.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
			};
			a.prototype.stop = function() {
				this._running && (b.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
			};
			a.prototype.onEnterFrame = function(e) {
				e = b.getTimer();
				e - this.lastTime > this.delay && (this.lastTime = e, this._currentCount++, b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER_COMPLETE)))
			};
			return a
		}(b.EventDispatcher);
	b.Timer = d;
	d.prototype.__class__ = "egret.Timer"
})(egret || (egret = {}));
(function(b) {
	function d(b) {
		b = b.prototype ? b.prototype : Object.getPrototypeOf(b);
		if (b.hasOwnProperty("__class__")) return b.__class__;
		var a = b.constructor.toString(),
			e = a.indexOf("("),
			a = a.substring(9, e);
		Object.defineProperty(b, "__class__", {
			value: a,
			enumerable: !1,
			writable: !0
		});
		return a
	}
	b.getQualifiedClassName = d;
	b.getQualifiedSuperclassName = function(b) {
		b = b.prototype ? b.prototype : Object.getPrototypeOf(b);
		if (b.hasOwnProperty("__superclass__")) return b.__superclass__;
		var a = Object.getPrototypeOf(b);
		if (null == a) return null;
		a = d(a.constructor);
		if (!a) return null;
		Object.defineProperty(b, "__superclass__", {
			value: a,
			enumerable: !1,
			writable: !0
		});
		return a
	}
})(egret || (egret = {}));
(function(b) {
	var d = {};
	b.getDefinitionByName = function(b) {
		if (!b) return null;
		var a = d[b];
		if (a) return a;
		for (var e = b.split("."), k = e.length, a = __global, m = 0; m < k; m++) if (a = a[e[m]], !a) return null;
		return d[b] = a
	}
})(egret || (egret = {}));
var __global = __global || this;
(function(b) {
	function d(e) {
		for (var a in c) {
			var b = c[a];
			b.delay -= e;
			0 >= b.delay && (b.listener.apply(b.thisObject, b.params), delete c[a])
		}
	}
	var c = {},
		a = 0;
	b.setTimeout = function(e, k, m) {
		for (var h = [], g = 3; g < arguments.length; g++) h[g - 3] = arguments[g];
		h = {
			listener: e,
			thisObject: k,
			delay: m,
			params: h
		};
		0 == a && b.Ticker.getInstance().register(d, null);
		a++;
		c[a] = h;
		return a
	};
	b.clearTimeout = function(e) {
		delete c[e]
	}
})(egret || (egret = {}));
(function(b) {
	b.hasDefinition = function(d) {
		return b.getDefinitionByName(d) ? !0 : !1
	}
})(egret || (egret = {}));
(function(b) {
	b.toColorString = function(b) {
		if (isNaN(b) || 0 > b) b = 0;
		16777215 < b && (b = 16777215);
		for (b = b.toString(16).toUpperCase(); 6 > b.length;) b = "0" + b;
		return "#" + b
	}
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(e, a, b, h, d, f) {
				void 0 === e && (e = 1);
				void 0 === a && (a = 0);
				void 0 === b && (b = 0);
				void 0 === h && (h = 1);
				void 0 === d && (d = 0);
				void 0 === f && (f = 0);
				c.call(this);
				this.a = e;
				this.b = a;
				this.c = b;
				this.d = h;
				this.tx = d;
				this.ty = f
			}
			__extends(a, c);
			a.prototype.prepend = function(e, a, b, c, d, f) {
				var l = this.tx;
				if (1 != e || 0 != a || 0 != b || 1 != c) {
					var n = this.a,
						p = this.c;
					this.a = n * e + this.b * b;
					this.b = n * a + this.b * c;
					this.c = p * e + this.d * b;
					this.d = p * a + this.d * c
				}
				this.tx = l * e + this.ty * b + d;
				this.ty = l * a + this.ty * c + f;
				return this
			};
			a.prototype.append = function(e, a, b, c, d, f) {
				var l = this.a,
					n = this.b,
					p = this.c,
					q = this.d;
				if (1 != e || 0 != a || 0 != b || 1 != c) this.a = e * l + a * p, this.b = e * n + a * q, this.c = b * l + c * p, this.d = b * n + c * q;
				this.tx = d * l + f * p + this.tx;
				this.ty = d * n + f * q + this.ty;
				return this
			};
			a.prototype.prependTransform = function(e, a, m, c, d, f, l, n, p) {
				if (d % 360) {
					var q = b.NumberUtils.cos(d);
					d = b.NumberUtils.sin(d)
				} else q = 1, d = 0;
				if (n || p) this.tx -= n, this.ty -= p;
				f || l ? (this.prepend(q * m, d * m, -d * c, q * c, 0, 0), this.prepend(b.NumberUtils.cos(l), b.NumberUtils.sin(l), -b.NumberUtils.sin(f), b.NumberUtils.cos(f), e, a)) : this.prepend(q * m, d * m, -d * c, q * c, e, a);
				return this
			};
			a.prototype.appendTransform = function(e, a, m, c, d, f, l, n, p) {
				if (d % 360) {
					var q = b.NumberUtils.cos(d);
					d = b.NumberUtils.sin(d)
				} else q = 1, d = 0;
				f || l ? (this.append(b.NumberUtils.cos(l), b.NumberUtils.sin(l), -b.NumberUtils.sin(f), b.NumberUtils.cos(f), e, a), this.append(q * m, d * m, -d * c, q * c, 0, 0)) : this.append(q * m, d * m, -d * c, q * c, e, a);
				if (n || p) this.tx -= n * this.a + p * this.c, this.ty -= n * this.b + p * this.d;
				return this
			};
			a.prototype.rotate = function(e) {
				var a = Math.cos(e);
				e = Math.sin(e);
				var b = this.a,
					c = this.c,
					d = this.tx;
				this.a = b * a - this.b * e;
				this.b = b * e + this.b * a;
				this.c = c * a - this.d * e;
				this.d = c * e + this.d * a;
				this.tx = d * a - this.ty * e;
				this.ty = d * e + this.ty * a;
				return this
			};
			a.prototype.skew = function(e, a) {
				this.append(b.NumberUtils.cos(a), b.NumberUtils.sin(a), -b.NumberUtils.sin(e), b.NumberUtils.cos(e), 0, 0);
				return this
			};
			a.prototype.scale = function(e, a) {
				this.a *= e;
				this.d *= a;
				this.c *= e;
				this.b *= a;
				this.tx *= e;
				this.ty *= a;
				return this
			};
			a.prototype.translate = function(e, a) {
				this.tx += e;
				this.ty += a;
				return this
			};
			a.prototype.identity = function() {
				this.a = this.d = 1;
				this.b = this.c = this.tx = this.ty = 0;
				return this
			};
			a.prototype.identityMatrix = function(e) {
				this.a = e.a;
				this.b = e.b;
				this.c = e.c;
				this.d = e.d;
				this.tx = e.tx;
				this.ty = e.ty;
				return this
			};
			a.prototype.invert = function() {
				var e = this.a,
					a = this.b,
					b = this.c,
					c = this.d,
					d = this.tx,
					f = e * c - a * b;
				this.a = c / f;
				this.b = -a / f;
				this.c = -b / f;
				this.d = e / f;
				this.tx = (b * this.ty - c * d) / f;
				this.ty = -(e * this.ty - a * d) / f;
				return this
			};
			a.transformCoords = function(e, a, m) {
				var c = b.Point.identity;
				c.x = e.a * a + e.c * m + e.tx;
				c.y = e.d * m + e.b * a + e.ty;
				return c
			};
			a.prototype.toArray = function(e) {
				this.array || (this.array = new Float32Array(9));
				e ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] = 0);
				this.array[8] = 1;
				return this.array
			};
			a.identity = new a;
			a.DEG_TO_RAD = Math.PI / 180;
			return a
		}(b.HashObject);
	b.Matrix = d;
	d.prototype.__class__ = "egret.Matrix"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a(e, a) {
				void 0 === e && (e = 0);
				void 0 === a && (a = 0);
				b.call(this);
				this.x = e;
				this.y = a
			}
			__extends(a, b);
			a.prototype.clone = function() {
				return new a(this.x, this.y)
			};
			a.prototype.equals = function(e) {
				return this.x == e.x && this.y == e.y
			};
			a.distance = function(e, a) {
				return Math.sqrt((e.x - a.x) * (e.x - a.x) + (e.y - a.y) * (e.y - a.y))
			};
			a.identity = new a(0, 0);
			return a
		}(b.HashObject);
	b.Point = d;
	d.prototype.__class__ = "egret.Point"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a(e, a, m, h) {
				void 0 === e && (e = 0);
				void 0 === a && (a = 0);
				void 0 === m && (m = 0);
				void 0 === h && (h = 0);
				b.call(this);
				this.x = e;
				this.y = a;
				this.width = m;
				this.height = h
			}
			__extends(a, b);
			Object.defineProperty(a.prototype, "right", {
				get: function() {
					return this.x + this.width
				},
				set: function(e) {
					this.width = e - this.x
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "bottom", {
				get: function() {
					return this.y + this.height
				},
				set: function(e) {
					this.height = e - this.y
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.initialize = function(e, a, b, c) {
				this.x = e;
				this.y = a;
				this.width = b;
				this.height = c;
				return this
			};
			a.prototype.contains = function(e, a) {
				return this.x <= e && this.x + this.width >= e && this.y <= a && this.y + this.height >= a
			};
			a.prototype.intersects = function(e) {
				return Math.max(this.x, e.x) <= Math.min(this.right, e.right) && Math.max(this.y, e.y) <= Math.min(this.bottom, e.bottom)
			};
			a.prototype.setEmpty = function() {
				this.height = this.width = this.y = this.x = 0
			};
			a.prototype.clone = function() {
				return new a(this.x, this.y, this.width, this.height)
			};
			a.prototype.containsPoint = function(e) {
				return this.x < e.x && this.x + this.width > e.x && this.y < e.y && this.y + this.height > e.y ? !0 : !1
			};
			a.identity = new a(0, 0, 0, 0);
			return a
		}(b.HashObject);
	b.Rectangle = d;
	d.prototype.__class__ = "egret.Rectangle"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this._isSupportDOMParser = this._xmlDict = this._parser = null;
				this._xmlDict = {};
				window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
			}
			__extends(a, c);
			a.getInstance = function() {
				a._instance || (a._instance = new a);
				return a._instance
			};
			a.prototype.parserXML = function(e) {
				for (var a = 0;
				"\n" == e.charAt(a) || "\t" == e.charAt(a) || "\r" == e.charAt(a) || " " == e.charAt(a);) a++;
				0 != a && (e = e.substring(a, e.length));
				this._isSupportDOMParser ? a = this._parser.parseFromString(e, "text/xml") : (a = new ActiveXObject("Microsoft.XMLDOM"), a.async = "false", a.loadXML(e));
				null == a && b.Logger.infoWithErrorId(1015);
				return a
			};
			a._instance = null;
			return a
		}(b.HashObject);
	b.SAXParser = d;
	d.prototype.__class__ = "egret.SAXParser"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(e) {
			function k() {
				e.call(this);
				this._designHeight = this._designWidth = 0;
				this._scaleY = this._scaleX = 1;
				this._stageHeight = this._stageWidth = this._offSetY = 0
			}
			__extends(k, e);
			k.getInstance = function() {
				null == k.instance && (a.initialize(), k.instance = new k);
				return k.instance
			};
			k.prototype.setDesignSize = function(e, a, k) {
				this._designWidth = e;
				this._designHeight = a;
				k && (b.Logger.warningWithErrorId(1001), this._setResolutionPolicy(k))
			};
			k.prototype._setResolutionPolicy = function(e) {
				this._resolutionPolicy = e;
				e.init(this);
				e._apply(this, this._designWidth, this._designHeight)
			};
			k.prototype.getScaleX = function() {
				return this._scaleX
			};
			k.prototype.getScaleY = function() {
				return this._scaleY
			};
			k.prototype.getOffSetY = function() {
				return this._offSetY
			};
			k.canvas_name = "egretCanvas";
			k.canvas_div_name = "gameDiv";
			return k
		}(b.HashObject);
	b.StageDelegate = d;
	d.prototype.__class__ = "egret.StageDelegate";
	var c = function() {
			function e(a, k) {
				this._containerStrategy = a;
				this._contentStrategy = k
			}
			e.prototype.init = function(e) {
				this._containerStrategy.init(e);
				this._contentStrategy.init(e)
			};
			e.prototype._apply = function(e, a, k) {
				this._containerStrategy._apply(e, a, k);
				this._contentStrategy._apply(e, a, k)
			};
			return e
		}();
	b.ResolutionPolicy = c;
	c.prototype.__class__ = "egret.ResolutionPolicy";
	var a = function() {
			function a() {}
			a.initialize = function() {
				a.EQUAL_TO_FRAME = new e
			};
			a.prototype.init = function(e) {};
			a.prototype._apply = function(e, a, k) {};
			a.prototype._setupContainer = function() {
				var e = document.body,
					a;
				e && (a = e.style) && (a.paddingTop = a.paddingTop || "0px", a.paddingRight = a.paddingRight || "0px", a.paddingBottom = a.paddingBottom || "0px", a.paddingLeft = a.paddingLeft || "0px", a.borderTop = a.borderTop || "0px", a.borderRight = a.borderRight || "0px", a.borderBottom = a.borderBottom || "0px", a.borderLeft = a.borderLeft || "0px", a.marginTop = a.marginTop || "0px", a.marginRight = a.marginRight || "0px", a.marginBottom = a.marginBottom || "0px", a.marginLeft = a.marginLeft || "0px")
			};
			return a
		}();
	b.ContainerStrategy = a;
	a.prototype.__class__ = "egret.ContainerStrategy";
	var e = function(e) {
			function a() {
				e.apply(this, arguments)
			}
			__extends(a, e);
			a.prototype._apply = function(e) {
				this._setupContainer()
			};
			return a
		}(a);
	b.EqualToFrame = e;
	e.prototype.__class__ = "egret.EqualToFrame";
	c = function() {
		function e() {}
		e.prototype.init = function(e) {};
		e.prototype._apply = function(e, a, k) {};
		e.prototype.setEgretSize = function(e, a, k, m, c, p) {
			void 0 === p && (p = 0);
			b.StageDelegate.getInstance()._stageWidth = Math.round(e);
			b.StageDelegate.getInstance()._stageHeight = Math.round(a);
			e = document.getElementById(d.canvas_div_name);
			e.style.width = k + "px";
			e.style.height = m + "px";
			e.style.top = p + "px"
		};
		e.prototype._getClientWidth = function() {
			return document.documentElement.clientWidth
		};
		e.prototype._getClientHeight = function() {
			return document.documentElement.clientHeight
		};
		return e
	}();
	b.ContentStrategy = c;
	c.prototype.__class__ = "egret.ContentStrategy";
	var k = function(e) {
			function a(k) {
				void 0 === k && (k = 0);
				e.call(this);
				this.minWidth = NaN;
				this.minWidth = k
			}
			__extends(a, e);
			a.prototype._apply = function(e, a, k) {
				a = this._getClientWidth();
				var b = this._getClientHeight(),
					m = b / k,
					c = a / m,
					d = 1;
				0 != this.minWidth && (d = Math.min(1, c / this.minWidth));
				this.setEgretSize(c / d, k, a, b * d);
				e._scaleX = m * d;
				e._scaleY = m * d
			};
			return a
		}(c);
	b.FixedHeight = k;
	k.prototype.__class__ = "egret.FixedHeight";
	k = function(e) {
		function a(k) {
			void 0 === k && (k = 0);
			e.call(this);
			this.minHeight = NaN;
			this.minHeight = k
		}
		__extends(a, e);
		a.prototype._apply = function(e, a, k) {
			k = this._getClientWidth();
			var b = this._getClientHeight(),
				m = k / a,
				c = b / m,
				d = 1;
			0 != this.minHeight && (d = Math.min(1, c / this.minHeight));
			this.setEgretSize(a, c / d, k * d, b, k * (1 - d) / 2);
			e._scaleX = m * d;
			e._scaleY = m * d
		};
		return a
	}(c);
	b.FixedWidth = k;
	k.prototype.__class__ = "egret.FixedWidth";
	k = function(e) {
		function a(k, b) {
			e.call(this);
			this.width = k;
			this.height = b
		}
		__extends(a, e);
		a.prototype._apply = function(e, a, k) {
			k = this.width;
			var b = this.height,
				m = k / a;
			this.setEgretSize(a, b / m, k, b);
			e._scaleX = m;
			e._scaleY = m
		};
		return a
	}(c);
	b.FixedSize = k;
	k.prototype.__class__ = "egret.FixedSize";
	k = function(e) {
		function a() {
			e.call(this)
		}
		__extends(a, e);
		a.prototype._apply = function(e, a, k) {
			this.setEgretSize(a, k, a, k, Math.floor((a - a) / 2));
			e._scaleX = 1;
			e._scaleY = 1
		};
		return a
	}(c);
	b.NoScale = k;
	k.prototype.__class__ = "egret.NoScale";
	k = function(e) {
		function a() {
			e.call(this)
		}
		__extends(a, e);
		a.prototype._apply = function(e, a, k) {
			var b = this._getClientWidth(),
				m = this._getClientHeight(),
				c = b,
				d = m,
				h = c / a < d / k ? c / a : d / k,
				c = a * h,
				d = k * h,
				b = Math.floor((b - c) / 2);
			e._offSetY = Math.floor((m - d) / 2);
			this.setEgretSize(a, k / 1, 1 * c, d, b, e._offSetY);
			e._scaleX = 1 * h;
			e._scaleY = 1 * h
		};
		return a
	}(c);
	b.ShowAll = k;
	k.prototype.__class__ = "egret.ShowAll";
	c = function(e) {
		function a() {
			e.call(this)
		}
		__extends(a, e);
		a.prototype._apply = function(e, a, k) {
			var b = this._getClientWidth(),
				m = this._getClientHeight(),
				b = b / a,
				m = m / k;
			this.setEgretSize(a, k, a * b, k * m);
			e._scaleX = b;
			e._scaleY = m
		};
		return a
	}(c);
	b.FullScreen = c;
	c.prototype.__class__ = "egret.FullScreen"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this._originalData = {};
				this._drawAreaList = []
			}
			__extends(a, c);
			a.getInstance = function() {
				null == a.instance && (a.instance = new a);
				return a.instance
			};
			a.prototype.addDrawArea = function(e) {
				this._drawAreaList.push(e)
			};
			a.prototype.clearDrawArea = function() {
				this._drawAreaList = []
			};
			a.prototype.drawImage = function(e, k, m, c, d, f, l, n, p, q, r) {
				void 0 === r && (r = void 0);
				l = l || 0;
				n = n || 0;
				var t = k._texture_to_render;
				if (null != t && 0 != f && 0 != d && 0 != p && 0 != q) {
					var s = b.MainContext.instance.rendererContext._texture_scale_factor;
					d /= s;
					f /= s;
					if (0 != this._drawAreaList.length && b.MainContext.instance.rendererContext._cacheCanvasContext) {
						s = b.DisplayObject.getTransformBounds(k._getSize(a.identityRectangle), k._worldTransform);
						k._worldBounds.initialize(s.x, s.y, s.width, s.height);
						s = this._originalData;
						s.sourceX = m;
						s.sourceY = c;
						s.sourceWidth = d;
						s.sourceHeight = f;
						s.destX = l;
						s.destY = n;
						s.destWidth = p;
						s.destHeight = q;
						for (var u = this.getDrawAreaList(), w = 0; w < u.length; w++) if (!this.ignoreRender(k, u[w], s.destX, s.destY)) {
							e.drawImage(t, m, c, d, f, l, n, p, q, r);
							break
						}
					} else e.drawImage(t, m, c, d, f, l, n, p, q, r)
				}
			};
			a.prototype.ignoreRender = function(e, a, b, c) {
				var d = e._worldBounds;
				b *= e._worldTransform.a;
				c *= e._worldTransform.d;
				return d.x + d.width + b <= a.x || d.x + b >= a.x + a.width || d.y + d.height + c <= a.y || d.y + c >= a.y + a.height ? !0 : !1
			};
			a.prototype.getDrawAreaList = function() {
				var e;
				0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new b.Rectangle(0, 0, b.MainContext.instance.stage.stageWidth, b.MainContext.instance.stage.stageHeight)], b.MainContext.instance.stage.addEventListener(b.Event.RESIZE, this.onResize, this)), e = this._defaultDrawAreaList) : e = this._drawAreaList;
				return e
			};
			a.prototype.onResize = function() {
				b.MainContext.instance.stage.removeEventListener(b.Event.RESIZE, this.onResize, this);
				this._defaultDrawAreaList = null
			};
			a.identityRectangle = new b.Rectangle;
			return a
		}(b.HashObject);
	b.RenderFilter = d;
	d.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function c() {}
			c.mapClass = function(a, e, k) {
				void 0 === k && (k = "");
				a = this.getKey(a) + "#" + k;
				this.mapClassDic[a] = e
			};
			c.getKey = function(a) {
				return "string" == typeof a ? a : b.getQualifiedClassName(a)
			};
			c.mapValue = function(a, e, k) {
				void 0 === k && (k = "");
				a = this.getKey(a) + "#" + k;
				this.mapValueDic[a] = e
			};
			c.hasMapRule = function(a, e) {
				void 0 === e && (e = "");
				var k = this.getKey(a) + "#" + e;
				return this.mapValueDic[k] || this.mapClassDic[k] ? !0 : !1
			};
			c.getInstance = function(a, e) {
				void 0 === e && (e = "");
				var k = this.getKey(a) + "#" + e;
				if (this.mapValueDic[k]) return this.mapValueDic[k];
				var m = this.mapClassDic[k];
				if (m) return m = new m, this.mapValueDic[k] = m, delete this.mapClassDic[k], m;
				throw Error(b.getString(1028, k));
			};
			c.mapClassDic = {};
			c.mapValueDic = {};
			return c
		}();
	b.Injector = d;
	d.prototype.__class__ = "egret.Injector"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			return function() {
				this.type = null
			}
		}();
	b.Filter = d;
	d.prototype.__class__ = "egret.Filter"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a(e, a) {
				b.call(this);
				this.blurX = e;
				this.blurY = a;
				this.type = "blur"
			}
			__extends(a, b);
			return a
		}(b.Filter);
	b.BlurFilter = d;
	d.prototype.__class__ = "egret.BlurFilter"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function b() {}
			b.NORMAL = "normal";
			b.ADD = "add";
			b.ERASE = "erase";
			b.ERASE_REVERSE = "erase_reverse";
			return b
		}();
	b.BlendMode = d;
	d.prototype.__class__ = "egret.BlendMode"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this.__hack_local_matrix = null;
				this._sizeDirty = this._normalDirty = !0;
				this._parent = this._texture_to_render = this.name = this._sizeChangeCallTarget = this._sizeChangeCallBack = null;
				this._y = this._x = 0;
				this._scaleY = this._scaleX = 1;
				this._anchorY = this._anchorX = this._anchorOffsetY = this._anchorOffsetX = 0;
				this._visible = !0;
				this._rotation = 0;
				this._alpha = 1;
				this._skewY = this._skewX = 0;
				this._touchEnabled = !1;
				this._scrollRect = this.blendMode = null;
				this._explicitHeight = this._explicitWidth = NaN;
				this._hasHeightSet = this._hasWidthSet = !1;
				this._worldBounds = this.mask = null;
				this.worldAlpha = 1;
				this.needDraw = this._isContainer = !1;
				this._hitTestPointTexture = null;
				this._rectH = this._rectW = 0;
				this._stage = null;
				this._cacheAsBitmap = !1;
				this.renderTexture = null;
				this._cacheDirty = !1;
				this._filter = this._colorTransform = null;
				this._worldTransform = new b.Matrix;
				this._worldBounds = new b.Rectangle(0, 0, 0, 0);
				this._cacheBounds = new b.Rectangle(0, 0, 0, 0)
			}
			__extends(a, c);
			a.prototype._setDirty = function() {
				this._normalDirty = !0
			};
			a.prototype.getDirty = function() {
				return this._normalDirty || this._sizeDirty
			};
			a.prototype._setParentSizeDirty = function() {
				var e = this._parent;
				!e || e._hasWidthSet || e._hasHeightSet || e._setSizeDirty()
			};
			a.prototype._setSizeDirty = function() {
				this._sizeDirty || (this._sizeDirty = !0, this._setDirty(), this._setCacheDirty(), this._setParentSizeDirty(), null != this._sizeChangeCallBack && (this._sizeChangeCallTarget == this._parent ? this._sizeChangeCallBack.call(this._sizeChangeCallTarget) : this._sizeChangeCallTarget = this._sizeChangeCallBack = null))
			};
			a.prototype._clearDirty = function() {
				this._normalDirty = !1
			};
			a.prototype._clearSizeDirty = function() {
				this._sizeDirty = !1
			};
			Object.defineProperty(a.prototype, "parent", {
				get: function() {
					return this._parent
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._parentChanged = function(e) {
				this._parent = e
			};
			Object.defineProperty(a.prototype, "x", {
				get: function() {
					return this._x
				},
				set: function(e) {
					this._setX(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setX = function(e) {
				b.NumberUtils.isNumber(e) && this._x != e && (this._x = e, this._setDirty(), this._setParentSizeDirty())
			};
			Object.defineProperty(a.prototype, "y", {
				get: function() {
					return this._y
				},
				set: function(e) {
					this._setY(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setY = function(e) {
				b.NumberUtils.isNumber(e) && this._y != e && (this._y = e, this._setDirty(), this._setParentSizeDirty())
			};
			Object.defineProperty(a.prototype, "scaleX", {
				get: function() {
					return this._scaleX
				},
				set: function(e) {
					b.NumberUtils.isNumber(e) && this._scaleX != e && (this._scaleX = e, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "scaleY", {
				get: function() {
					return this._scaleY
				},
				set: function(e) {
					b.NumberUtils.isNumber(e) && this._scaleY != e && (this._scaleY = e, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "anchorOffsetX", {
				get: function() {
					return this._anchorOffsetX
				},
				set: function(e) {
					b.NumberUtils.isNumber(e) && this._anchorOffsetX != e && (this._anchorOffsetX = e, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "anchorOffsetY", {
				get: function() {
					return this._anchorOffsetY
				},
				set: function(e) {
					b.NumberUtils.isNumber(e) && this._anchorOffsetY != e && (this._anchorOffsetY = e, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "anchorX", {
				get: function() {
					return this._anchorX
				},
				set: function(e) {
					this._setAnchorX(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setAnchorX = function(e) {
				b.NumberUtils.isNumber(e) && this._anchorX != e && (this._anchorX = e, this._setDirty(), this._setParentSizeDirty())
			};
			Object.defineProperty(a.prototype, "anchorY", {
				get: function() {
					return this._anchorY
				},
				set: function(e) {
					this._setAnchorY(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setAnchorY = function(e) {
				b.NumberUtils.isNumber(e) && this._anchorY != e && (this._anchorY = e, this._setDirty(), this._setParentSizeDirty())
			};
			Object.defineProperty(a.prototype, "visible", {
				get: function() {
					return this._visible
				},
				set: function(e) {
					this._setVisible(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setVisible = function(e) {
				this._visible != e && (this._visible = e, this._setSizeDirty())
			};
			Object.defineProperty(a.prototype, "rotation", {
				get: function() {
					return this._rotation
				},
				set: function(e) {
					b.NumberUtils.isNumber(e) && this._rotation != e && (this._rotation = e, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "alpha", {
				get: function() {
					return this._alpha
				},
				set: function(e) {
					b.NumberUtils.isNumber(e) && this._alpha != e && (this._alpha = e, this._setDirty(), this._setCacheDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "skewX", {
				get: function() {
					return this._skewX
				},
				set: function(e) {
					b.NumberUtils.isNumber(e) && this._skewX != e && (this._skewX = e, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "skewY", {
				get: function() {
					return this._skewY
				},
				set: function(e) {
					b.NumberUtils.isNumber(e) && this._skewY != e && (this._skewY = e, this._setDirty(), this._setParentSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "touchEnabled", {
				get: function() {
					return this._touchEnabled
				},
				set: function(e) {
					this._setTouchEnabled(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setTouchEnabled = function(e) {
				this._touchEnabled = e
			};
			Object.defineProperty(a.prototype, "scrollRect", {
				get: function() {
					return this._scrollRect
				},
				set: function(e) {
					this._setScrollRect(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setScrollRect = function(e) {
				this._scrollRect = e;
				this._setSizeDirty()
			};
			Object.defineProperty(a.prototype, "measuredWidth", {
				get: function() {
					return this._measureBounds().width
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "measuredHeight", {
				get: function() {
					return this._measureBounds().height
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "explicitWidth", {
				get: function() {
					return this._explicitWidth
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "explicitHeight", {
				get: function() {
					return this._explicitHeight
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "width", {
				get: function() {
					return this._getWidth()
				},
				set: function(e) {
					this._setWidth(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._getWidth = function() {
				return this._getSize(b.Rectangle.identity).width
			};
			Object.defineProperty(a.prototype, "height", {
				get: function() {
					return this._getHeight()
				},
				set: function(e) {
					this._setHeight(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._getHeight = function() {
				return this._getSize(b.Rectangle.identity).height
			};
			a.prototype._setWidth = function(e) {
				this._setSizeDirty();
				this._setCacheDirty();
				this._explicitWidth = e;
				this._hasWidthSet = b.NumberUtils.isNumber(e)
			};
			a.prototype._setHeight = function(e) {
				this._setSizeDirty();
				this._setCacheDirty();
				this._explicitHeight = e;
				this._hasHeightSet = b.NumberUtils.isNumber(e)
			};
			a.prototype._draw = function(e) {
				if (this._visible && !this.drawCacheTexture(e)) {
					var a = b.MainContext.__use_new_draw && this._isContainer;
					this._filter && !a && e.setGlobalFilter(this._filter);
					this._colorTransform && !a && e.setGlobalColorTransform(this._colorTransform.matrix);
					e.setAlpha(this.worldAlpha, this.blendMode);
					e.setTransform(this._worldTransform);
					var m = this.mask || this._scrollRect;
					m && !a && e.pushMask(m);
					this._render(e);
					m && !a && e.popMask();
					this._colorTransform && !a && e.setGlobalColorTransform(null);
					this._filter && !a && e.setGlobalFilter(null)
				}
				this.destroyCacheBounds()
			};
			a.prototype._setGlobalFilter = function(e) {
				e.setGlobalFilter(this._filter)
			};
			a.prototype._removeGlobalFilter = function(e) {
				e.setGlobalFilter(null)
			};
			a.prototype._setGlobalColorTransform = function(e) {
				e.setGlobalColorTransform(this._colorTransform.matrix)
			};
			a.prototype._removeGlobalColorTransform = function(e) {
				e.setGlobalColorTransform(null)
			};
			a.prototype._pushMask = function(e) {
				e.setTransform(this._worldTransform);
				var a = this.mask || this._scrollRect;
				a && e.pushMask(a)
			};
			a.prototype._popMask = function(e) {
				e.popMask()
			};
			a.prototype.drawCacheTexture = function(e) {
				if (!1 == this._cacheAsBitmap) return !1;
				var a = this.getBounds(b.Rectangle.identity),
					m = b.MainContext.instance.rendererContext._texture_scale_factor;
				if (this._cacheDirty || null == this._texture_to_render || Math.round(a.width) != Math.round(this._texture_to_render._sourceWidth * m) || Math.round(a.height) != Math.round(this._texture_to_render._sourceHeight * m)) this._cacheDirty = !this._makeBitmapCache();
				if (null == this._texture_to_render) return !1;
				var c = this._texture_to_render,
					a = c._offsetX,
					m = c._offsetY,
					d = c._textureWidth,
					c = c._textureHeight;
				this._updateTransform();
				e.setAlpha(this.worldAlpha, this.blendMode);
				e.setTransform(this._worldTransform);
				b.RenderFilter.getInstance().drawImage(e, this, 0, 0, d, c, a, m, d, c);
				return !0
			};
			a.prototype._updateTransform = function() {
				this._visible && (this._calculateWorldTransform(), "updateTransform" == b.MainContext._renderLoopPhase && (this.needDraw || this._texture_to_render || this._cacheAsBitmap) && b.RenderCommand.push(this._draw, this))
			};
			a.prototype._calculateWorldTransform = function() {
				var e = this._worldTransform,
					a = this._parent;
				e.identityMatrix(a._worldTransform);
				this._getMatrix(e);
				var b = this._scrollRect;
				b && e.append(1, 0, 0, 1, -b.x, -b.y);
				this.worldAlpha = a.worldAlpha * this._alpha
			};
			a.prototype._render = function(e) {};
			a.prototype.getBounds = function(e, a) {
				void 0 === a && (a = !0);
				var m = this._measureBounds(),
					c = this._hasWidthSet ? this._explicitWidth : m.width,
					d = this._hasHeightSet ? this._explicitHeight : m.height;
				this._rectW = m.width;
				this._rectH = m.height;
				this._clearSizeDirty();
				var f = m.x,
					m = m.y,
					l = 0,
					n = 0;
				a && (0 != this._anchorX || 0 != this._anchorY ? (l = c * this._anchorX, n = d * this._anchorY) : (l = this._anchorOffsetX, n = this._anchorOffsetY));
				this._cacheBounds.initialize(f - l, m - n, c, d);
				c = this._cacheBounds;
				e || (e = new b.Rectangle);
				return e.initialize(c.x, c.y, c.width, c.height)
			};
			a.prototype.destroyCacheBounds = function() {
				this._cacheBounds.x = 0;
				this._cacheBounds.y = 0;
				this._cacheBounds.width = 0;
				this._cacheBounds.height = 0
			};
			a.prototype._getConcatenatedMatrix = function() {
				for (var e = a.identityMatrixForGetConcatenated.identity(), k = this; null != k;) {
					if (0 != k._anchorX || 0 != k._anchorY) {
						var m = k._getSize(b.Rectangle.identity);
						e.prependTransform(k._x, k._y, k._scaleX, k._scaleY, k._rotation, k._skewX, k._skewY, m.width * k._anchorX, m.height * k._anchorY)
					} else e.prependTransform(k._x, k._y, k._scaleX, k._scaleY, k._rotation, k._skewX, k._skewY, k._anchorOffsetX, k._anchorOffsetY);
					k._scrollRect && e.prepend(1, 0, 0, 1, -k._scrollRect.x, -k._scrollRect.y);
					k = k._parent
				}
				return e
			};
			a.prototype.localToGlobal = function(e, a, m) {
				void 0 === e && (e = 0);
				void 0 === a && (a = 0);
				var c = this._getConcatenatedMatrix();
				c.append(1, 0, 0, 1, e, a);
				m || (m = new b.Point);
				m.x = c.tx;
				m.y = c.ty;
				return m
			};
			a.prototype.globalToLocal = function(e, a, m) {
				void 0 === e && (e = 0);
				void 0 === a && (a = 0);
				var c = this._getConcatenatedMatrix();
				c.invert();
				c.append(1, 0, 0, 1, e, a);
				m || (m = new b.Point);
				m.x = c.tx;
				m.y = c.ty;
				return m
			};
			a.prototype.hitTest = function(e, a, m) {
				void 0 === m && (m = !1);
				if (!this._visible || !m && !this._touchEnabled) return null;
				m = this.getBounds(b.Rectangle.identity, !1);
				e -= m.x;
				a -= m.y;
				return 0 <= e && e < m.width && 0 <= a && a < m.height ? this.mask || this._scrollRect ? this._scrollRect && e > this._scrollRect.x && a > this._scrollRect.y && e < this._scrollRect.x + this._scrollRect.width && a < this._scrollRect.y + this._scrollRect.height || this.mask && this.mask.x <= e && e < this.mask.x + this.mask.width && this.mask.y <= a && a < this.mask.y + this.mask.height ? this : null : this : null
			};
			a.prototype.hitTestPoint = function(e, a, m) {
				e = this.globalToLocal(e, a);
				return m ? (this._hitTestPointTexture || (this._hitTestPointTexture = new b.RenderTexture), m = this._hitTestPointTexture, m.drawToTexture(this), 0 != m.getPixel32(e.x - this._hitTestPointTexture._offsetX, e.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !! this.hitTest(e.x, e.y, !0)
			};
			a.prototype._getMatrix = function(e) {
				e || (e = b.Matrix.identity.identity());
				var a, m;
				m = this._getOffsetPoint();
				a = m.x;
				m = m.y;
				var c = this.__hack_local_matrix;
				c ? (e.append(c.a, c.b, c.c, c.d, c.tx, c.ty), e.append(1, 0, 0, 1, -a, -m)) : e.appendTransform(this._x, this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, a, m);
				return e
			};
			a.prototype._getSize = function(e) {
				if (this._hasHeightSet && this._hasWidthSet) return this._clearSizeDirty(), e.initialize(0, 0, this._explicitWidth, this._explicitHeight);
				this._measureSize(e);
				this._hasWidthSet && (e.width = this._explicitWidth);
				this._hasHeightSet && (e.height = this._explicitHeight);
				return e
			};
			a.prototype._measureSize = function(e) {
				this._sizeDirty ? (e = this._measureBounds(), this._rectW = e.width, this._rectH = e.height, this._clearSizeDirty()) : (e.width = this._rectW, e.height = this._rectH);
				e.x = 0;
				e.y = 0;
				return e
			};
			a.prototype._measureBounds = function() {
				return b.Rectangle.identity.initialize(0, 0, 0, 0)
			};
			a.prototype._getOffsetPoint = function() {
				var e = this._anchorOffsetX,
					a = this._anchorOffsetY;
				if (0 != this._anchorX || 0 != this._anchorY) a = this._getSize(b.Rectangle.identity), e = this._anchorX * a.width, a = this._anchorY * a.height;
				var m = b.Point.identity;
				m.x = e;
				m.y = a;
				return m
			};
			a.prototype._onAddToStage = function() {
				this._stage = b.MainContext.instance.stage;
				b.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
			};
			a.prototype._onRemoveFromStage = function() {
				b.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
			};
			Object.defineProperty(a.prototype, "stage", {
				get: function() {
					return this._stage
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.addEventListener = function(e, k, m, d, g) {
				void 0 === d && (d = !1);
				void 0 === g && (g = 0);
				c.prototype.addEventListener.call(this, e, k, m, d, g);
				((d = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._insertEventBin(d ? a._enterFrameCallBackList : a._renderCallBackList, k, m, g, this)
			};
			a.prototype.removeEventListener = function(e, k, m, d) {
				void 0 === d && (d = !1);
				c.prototype.removeEventListener.call(this, e, k, m, d);
				((d = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._removeEventBin(d ? a._enterFrameCallBackList : a._renderCallBackList, k, m, this)
			};
			a.prototype.dispatchEvent = function(e) {
				if (!e._bubbles) return c.prototype.dispatchEvent.call(this, e);
				for (var a = [], b = this; b;) a.push(b), b = b._parent;
				e._reset();
				this._dispatchPropagationEvent(e, a);
				return !e._isDefaultPrevented
			};
			a.prototype._dispatchPropagationEvent = function(e, a, b) {
				b = a.length;
				for (var c = 1, d = b - 1; 0 <= d; d--) {
					var f = a[d];
					e._currentTarget = f;
					e._target = this;
					e._eventPhase = c;
					f._notifyListener(e);
					if (e._isPropagationStopped || e._isPropagationImmediateStopped) return
				}
				f = a[0];
				e._currentTarget = f;
				e._target = this;
				e._eventPhase = 2;
				f._notifyListener(e);
				if (!e._isPropagationStopped && !e._isPropagationImmediateStopped) for (c = 3, d = 1; d < b && (f = a[d], e._currentTarget = f, e._target = this, e._eventPhase = c, f._notifyListener(e), !e._isPropagationStopped && !e._isPropagationImmediateStopped); d++);
			};
			a.prototype.willTrigger = function(e) {
				for (var a = this; a;) {
					if (a.hasEventListener(e)) return !0;
					a = a._parent
				}
				return !1
			};
			Object.defineProperty(a.prototype, "cacheAsBitmap", {
				get: function() {
					return this._cacheAsBitmap
				},
				set: function(e) {
					(this._cacheAsBitmap = e) ? b.callLater(this._makeBitmapCache, this) : this._texture_to_render = null
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._makeBitmapCache = function() {
				this.renderTexture || (this.renderTexture = new b.RenderTexture);
				var e = this.renderTexture.drawToTexture(this);
				this._texture_to_render = e ? this.renderTexture : null;
				return e
			};
			a.prototype._setCacheDirty = function(e) {
				void 0 === e && (e = !0);
				this._cacheDirty = e
			};
			a.getTransformBounds = function(e, a) {
				var b = e.x,
					c = e.y,
					d = e.width,
					f = e.height;
				(b || c) && a.appendTransform(0, 0, 1, 1, 0, 0, 0, -b, -c);
				var l = d * a.a,
					d = d * a.b,
					n = f * a.c,
					f = f * a.d,
					p = a.tx,
					q = a.ty,
					r = p,
					t = p,
					s = q,
					u = q;
				(b = l + p) < r ? r = b : b > t && (t = b);
				(b = l + n + p) < r ? r = b : b > t && (t = b);
				(b = n + p) < r ? r = b : b > t && (t = b);
				(c = d + q) < s ? s = c : c > u && (u = c);
				(c = d + f + q) < s ? s = c : c > u && (u = c);
				(c = f + q) < s ? s = c : c > u && (u = c);
				return e.initialize(r, s, t - r, u - s)
			};
			Object.defineProperty(a.prototype, "colorTransform", {
				get: function() {
					return this._colorTransform
				},
				set: function(e) {
					this._colorTransform = e
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "filter", {
				get: function() {
					return this._filter
				},
				set: function(e) {
					this._filter = e
				},
				enumerable: !0,
				configurable: !0
			});
			a.identityMatrixForGetConcatenated = new b.Matrix;
			a._enterFrameCallBackList = [];
			a._renderCallBackList = [];
			return a
		}(b.EventDispatcher);
	b.DisplayObject = d;
	d.prototype.__class__ = "egret.DisplayObject";
	d = function() {
		function b() {
			this.matrix = null
		}
		b.prototype.updateColor = function(a, e, b, m, c, d, f, l) {};
		return b
	}();
	b.ColorTransform = d;
	d.prototype.__class__ = "egret.ColorTransform"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this._touchChildren = !0;
				this._children = [];
				this._isContainer = !0
			}
			__extends(a, c);
			Object.defineProperty(a.prototype, "touchChildren", {
				get: function() {
					return this._touchChildren
				},
				set: function(e) {
					this._touchChildren = e
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "numChildren", {
				get: function() {
					return this._children.length
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.setChildIndex = function(e, a) {
				this.doSetChildIndex(e, a)
			};
			a.prototype.doSetChildIndex = function(e, a) {
				var m = this._children.indexOf(e);
				0 > m && b.Logger.fatalWithErrorId(1006);
				this._children.splice(m, 1);
				0 > a || this._children.length <= a ? this._children.push(e) : this._children.splice(a, 0, e)
			};
			a.prototype.addChild = function(e) {
				var a = this._children.length;
				e._parent == this && a--;
				return this._doAddChild(e, a)
			};
			a.prototype.addChildAt = function(e, a) {
				return this._doAddChild(e, a)
			};
			a.prototype._doAddChild = function(e, k, m) {
				void 0 === m && (m = !0);
				if (e == this) return e;
				if (0 > k || k > this._children.length) return b.Logger.fatalWithErrorId(1007), e;
				var c = e._parent;
				if (c == this) return this.doSetChildIndex(e, k), e;
				if (c) {
					var d = c._children.indexOf(e);
					0 <= d && c._doRemoveChild(d)
				}
				this._children.splice(k, 0, e);
				e._parentChanged(this);
				m && e.dispatchEventWith(b.Event.ADDED, !0);
				if (this._stage) for (e._onAddToStage(), k = a.__EVENT__ADD_TO_STAGE_LIST; 0 < k.length;) c = k.shift(), m && c.dispatchEventWith(b.Event.ADDED_TO_STAGE);
				e._setDirty();
				this._setSizeDirty();
				return e
			};
			a.prototype.removeChild = function(e) {
				e = this._children.indexOf(e);
				if (0 <= e) return this._doRemoveChild(e);
				b.Logger.fatalWithErrorId(1008);
				return null
			};
			a.prototype.removeChildAt = function(e) {
				if (0 <= e && e < this._children.length) return this._doRemoveChild(e);
				b.Logger.fatalWithErrorId(1007);
				return null
			};
			a.prototype._doRemoveChild = function(e, k) {
				void 0 === k && (k = !0);
				var m = this._children,
					c = m[e];
				k && c.dispatchEventWith(b.Event.REMOVED, !0);
				if (this._stage) {
					c._onRemoveFromStage();
					for (var d = a.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < d.length;) {
						var f = d.shift();
						k && f.dispatchEventWith(b.Event.REMOVED_FROM_STAGE);
						f._stage = null
					}
				}
				c._parentChanged(null);
				m.splice(e, 1);
				this._setSizeDirty();
				return c
			};
			a.prototype.getChildAt = function(e) {
				if (0 <= e && e < this._children.length) return this._children[e];
				b.Logger.fatalWithErrorId(1007);
				return null
			};
			a.prototype.contains = function(e) {
				for (; e;) {
					if (e == this) return !0;
					e = e._parent
				}
				return !1
			};
			a.prototype.swapChildrenAt = function(e, a) {
				0 <= e && e < this._children.length && 0 <= a && a < this._children.length ? this._swapChildrenAt(e, a) : b.Logger.fatalWithErrorId(1007)
			};
			a.prototype.swapChildren = function(e, a) {
				var m = this._children.indexOf(e),
					c = this._children.indexOf(a); - 1 == m || -1 == c ? b.Logger.fatalWithErrorId(1008) : this._swapChildrenAt(m, c)
			};
			a.prototype._swapChildrenAt = function(e, a) {
				if (e != a) {
					var b = this._children,
						c = b[e];
					b[e] = b[a];
					b[a] = c
				}
			};
			a.prototype.getChildIndex = function(e) {
				return this._children.indexOf(e)
			};
			a.prototype.removeChildren = function() {
				for (var e = this._children.length - 1; 0 <= e; e--) this._doRemoveChild(e)
			};
			a.prototype._updateTransform = function() {
				if (this._visible) {
					this._filter && b.RenderCommand.push(this._setGlobalFilter, this);
					this._colorTransform && b.RenderCommand.push(this._setGlobalColorTransform, this);
					var e = this.mask || this._scrollRect;
					e && b.RenderCommand.push(this._pushMask, this);
					c.prototype._updateTransform.call(this);
					if (!this._cacheAsBitmap || !this._texture_to_render) for (var a = 0, m = this._children, d = m.length; a < d; a++) m[a]._updateTransform();
					e && b.RenderCommand.push(this._popMask, this);
					this._colorTransform && b.RenderCommand.push(this._removeGlobalColorTransform, this);
					this._filter && b.RenderCommand.push(this._removeGlobalFilter, this)
				}
			};
			a.prototype._render = function(e) {
				if (!b.MainContext.__use_new_draw) for (var a = 0, m = this._children, c = m.length; a < c; a++) m[a]._draw(e)
			};
			a.prototype._measureBounds = function() {
				for (var e = 0, a = 0, m = 0, c = 0, d = this._children, f = d.length, l = 0; l < f; l++) {
					var n = d[l];
					if (n._visible) {
						var p = n.getBounds(b.Rectangle.identity, !1),
							q = p.x,
							r = p.y,
							t = p.width,
							p = p.height,
							n = n._getMatrix(),
							n = b.DisplayObject.getTransformBounds(b.Rectangle.identity.initialize(q, r, t, p), n),
							q = n.x,
							r = n.y,
							t = n.width + n.x,
							n = n.height + n.y;
						if (q < e || 0 == l) e = q;
						if (t > a || 0 == l) a = t;
						if (r < m || 0 == l) m = r;
						if (n > c || 0 == l) c = n
					}
				}
				return b.Rectangle.identity.initialize(e, m, a - e, c - m)
			};
			a.prototype.hitTest = function(e, a, m) {
				void 0 === m && (m = !1);
				var d;
				if (!this._visible) return null;
				if (this._scrollRect) {
					if (e < this._scrollRect.x || a < this._scrollRect.y || e > this._scrollRect.x + this._scrollRect.width || a > this._scrollRect.y + this._scrollRect.height) return null
				} else if (this.mask && (this.mask.x > e || e > this.mask.x + this.mask.width || this.mask.y > a || a > this.mask.y + this.mask.height)) return null;
				for (var g = this._children, f = this._touchChildren, l = g.length - 1; 0 <= l; l--) {
					var n = g[l],
						p = n._getMatrix(),
						q = n._scrollRect;
					q && p.append(1, 0, 0, 1, -q.x, -q.y);
					p.invert();
					p = b.Matrix.transformCoords(p, e, a);
					if (n = n.hitTest(p.x, p.y, !0)) {
						if (!f) return this;
						if (n._touchEnabled && f) return n;
						d = this
					}
				}
				return d ? d : this._texture_to_render ? c.prototype.hitTest.call(this, e, a, m) : null
			};
			a.prototype._onAddToStage = function() {
				c.prototype._onAddToStage.call(this);
				for (var e = this._children.length, a = 0; a < e; a++) this._children[a]._onAddToStage()
			};
			a.prototype._onRemoveFromStage = function() {
				c.prototype._onRemoveFromStage.call(this);
				for (var e = this._children, a = e.length, b = 0; b < a; b++) e[b]._onRemoveFromStage()
			};
			a.prototype.getChildByName = function(e) {
				for (var a = this._children, b = a.length, c, d = 0; d < b; d++) if (c = a[d], c.name == e) return c;
				return null
			};
			a.__EVENT__ADD_TO_STAGE_LIST = [];
			a.__EVENT__REMOVE_FROM_STAGE_LIST = [];
			return a
		}(b.DisplayObject);
	b.DisplayObjectContainer = d;
	d.prototype.__class__ = "egret.DisplayObjectContainer"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function b() {}
			b.NO_BORDER = "noBorder";
			b.NO_SCALE = "noScale";
			b.SHOW_ALL = "showAll";
			b.EXACT_FIT = "exactFit";
			return b
		}();
	b.StageScaleMode = d;
	d.prototype.__class__ = "egret.StageScaleMode"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(e, a) {
				void 0 === e && (e = 480);
				void 0 === a && (a = 800);
				c.call(this);
				this._changeSizeDispatchFlag = !0;
				this._scaleMode = "";
				this._stageHeight = this._stageWidth = NaN;
				this.touchEnabled = !0;
				this._stage = this;
				this._stageWidth = e;
				this._stageHeight = a
			}
			__extends(a, c);
			a.prototype.invalidate = function() {
				a._invalidateRenderFlag = !0
			};
			Object.defineProperty(a.prototype, "scaleMode", {
				get: function() {
					return this._scaleMode
				},
				set: function(e) {
					this._scaleMode != e && (this._scaleMode = e, this.setResolutionPolicy())
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.changeSize = function() {
				this._changeSizeDispatchFlag && (this.setResolutionPolicy(), this.dispatchEventWith(b.Event.RESIZE))
			};
			a.prototype.setResolutionPolicy = function() {
				var e = a.SCALE_MODE_ENUM[this._scaleMode];
				if (!e) throw Error(b.getString(1024));
				var k = new b.EqualToFrame,
					e = new b.ResolutionPolicy(k, e);
				b.StageDelegate.getInstance()._setResolutionPolicy(e);
				this._stageWidth = b.StageDelegate.getInstance()._stageWidth;
				this._stageHeight = b.StageDelegate.getInstance()._stageHeight
			};
			Object.defineProperty(a.prototype, "stageWidth", {
				get: function() {
					return this._stageWidth
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "stageHeight", {
				get: function() {
					return this._stageHeight
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.hitTest = function(e, a, m) {
				if (!this._touchEnabled) return null;
				var c;
				if (!this._touchChildren) return this;
				m = this._children;
				for (var d = m.length - 1; 0 <= d; d--) {
					c = m[d];
					var f = c._getMatrix(),
						l = c._scrollRect;
					l && f.append(1, 0, 0, 1, -l.x, -l.y);
					f.invert();
					f = b.Matrix.transformCoords(f, e, a);
					if ((c = c.hitTest(f.x, f.y, !0)) && c._touchEnabled) return c
				}
				return this
			};
			a.prototype.getBounds = function(e) {
				e || (e = new b.Rectangle);
				return e.initialize(0, 0, this._stageWidth, this._stageHeight)
			};
			a.prototype._updateTransform = function() {
				for (var e = 0, a = this._children.length; e < a; e++) this._children[e]._updateTransform()
			};
			Object.defineProperty(a.prototype, "focus", {
				get: function() {
					return null
				},
				enumerable: !0,
				configurable: !0
			});
			a.registerScaleMode = function(e, k, m) {
				a.SCALE_MODE_ENUM[e] && !m ? b.Logger.warningWithErrorId(1009, e) : a.SCALE_MODE_ENUM[e] = k
			};
			a._invalidateRenderFlag = !1;
			a.SCALE_MODE_ENUM = {};
			return a
		}(b.DisplayObjectContainer);
	b.Stage = d;
	d.prototype.__class__ = "egret.Stage"
})(egret || (egret = {}));
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.NO_SCALE] = new egret.NoScale;
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.SHOW_ALL] = new egret.ShowAll;
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.NO_BORDER] = new egret.FixedWidth;
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.EXACT_FIT] = new egret.FullScreen;
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(e) {
				void 0 === e && (e = null);
				c.call(this);
				this._lastTouchPosition = new b.Point(0, 0);
				this._touchStartPosition = new b.Point(0, 0);
				this._scrollStarted = !1;
				this._lastTouchTime = 0;
				this._lastTouchEvent = null;
				this._velocitys = [];
				this._isVTweenPlaying = this._isHTweenPlaying = !1;
				this._vScrollTween = this._hScrollTween = null;
				this.scrollBeginThreshold = 10;
				this.scrollSpeed = 1;
				this._content = null;
				this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto";
				this._scrollTop = this._scrollLeft = 0;
				this._vCanScroll = this._hCanScroll = !1;
				this.touchBeginTimer = this.delayTouchBeginEvent = null;
				this.touchEnabled = !0;
				e && this.setContent(e)
			}
			__extends(a, c);
			a.prototype.setContent = function(e) {
				this._content !== e && (this.removeContent(), e && (this._content = e, c.prototype.addChild.call(this, e), this._addEvents()))
			};
			a.prototype.removeContent = function() {
				this._content && (this._removeEvents(), c.prototype.removeChildAt.call(this, 0));
				this._content = null
			};
			Object.defineProperty(a.prototype, "verticalScrollPolicy", {
				get: function() {
					return this._verticalScrollPolicy
				},
				set: function(e) {
					e != this._verticalScrollPolicy && (this._verticalScrollPolicy = e)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "horizontalScrollPolicy", {
				get: function() {
					return this._horizontalScrollPolicy
				},
				set: function(e) {
					e != this._horizontalScrollPolicy && (this._horizontalScrollPolicy = e)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "scrollLeft", {
				get: function() {
					return this._scrollLeft
				},
				set: function(e) {
					e != this._scrollLeft && (this._scrollLeft = e, this._validatePosition(!1, !0), this._updateContentPosition())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "scrollTop", {
				get: function() {
					return this._scrollTop
				},
				set: function(e) {
					e != this._scrollTop && (this._scrollTop = e, this._validatePosition(!0, !1), this._updateContentPosition())
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.setScrollPosition = function(e, a, b) {
				void 0 === b && (b = !1);
				if (!b || 0 != e || 0 != a) if (b || this._scrollTop != e || this._scrollLeft != a) {
					if (b) {
						b = this._isOnTheEdge(!0);
						var c = this._isOnTheEdge(!1);
						this._scrollTop += b ? e / 2 : e;
						this._scrollLeft += c ? a / 2 : a
					} else this._scrollTop = e, this._scrollLeft = a;
					this._validatePosition(!0, !0);
					this._updateContentPosition()
				}
			};
			a.prototype._isOnTheEdge = function(e) {
				void 0 === e && (e = !0);
				var a = this._scrollTop,
					b = this._scrollLeft;
				return e ? 0 > a || a > this.getMaxScrollTop() : 0 > b || b > this.getMaxScrollLeft()
			};
			a.prototype._validatePosition = function(e, a) {
				void 0 === e && (e = !1);
				void 0 === a && (a = !1);
				if (e) {
					var b = this.height,
						c = this._getContentHeight();
					this._scrollTop = Math.max(this._scrollTop, (0 - b) / 2);
					this._scrollTop = Math.min(this._scrollTop, c > b ? c - b / 2 : b / 2)
				}
				a && (b = this.width, c = this._getContentWidth(), this._scrollLeft = Math.max(this._scrollLeft, (0 - b) / 2), this._scrollLeft = Math.min(this._scrollLeft, c > b ? c - b / 2 : b / 2))
			};
			a.prototype._setWidth = function(e) {
				this._explicitWidth != e && (c.prototype._setWidth.call(this, e), this._updateContentPosition())
			};
			a.prototype._setHeight = function(e) {
				this._explicitHeight != e && (c.prototype._setHeight.call(this, e), this._updateContentPosition())
			};
			a.prototype._updateContentPosition = function() {
				var e = this.getBounds(b.Rectangle.identity);
				this.scrollRect = new b.Rectangle(this._scrollLeft, this._scrollTop, e.width, e.height);
				this.dispatchEvent(new b.Event(b.Event.CHANGE))
			};
			a.prototype._checkScrollPolicy = function() {
				var e = this.__checkScrollPolicy(this._horizontalScrollPolicy, this._getContentWidth(), this.width);
				this._hCanScroll = e;
				var a = this.__checkScrollPolicy(this._verticalScrollPolicy, this._getContentHeight(), this.height);
				this._vCanScroll = a;
				return e || a
			};
			a.prototype.__checkScrollPolicy = function(e, a, b) {
				return "on" == e ? !0 : "off" == e ? !1 : a > b
			};
			a.prototype._addEvents = function() {
				this.addEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
				this.addEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
				this.addEventListener(b.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
			};
			a.prototype._removeEvents = function() {
				this.removeEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
				this.removeEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
				this.removeEventListener(b.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
			};
			a.prototype._onTouchBegin = function(e) {
				!e._isDefaultPrevented && this._checkScrollPolicy() && (this._touchStartPosition.x = e.stageX, this._touchStartPosition.y = e.stageY, (this._isHTweenPlaying || this._isVTweenPlaying) && this._onScrollFinished(), this.stage.addEventListener(b.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this.stage.addEventListener(b.TouchEvent.TOUCH_END, this._onTouchEnd, this), this.stage.addEventListener(b.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.addEventListener(b.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(e), e.preventDefault())
			};
			a.prototype._onTouchBeginCapture = function(e) {
				var a = this._checkScrollPolicy();
				if (a) {
					for (var m = e.target; m != this;) {
						if ("_checkScrollPolicy" in m && (a = m._checkScrollPolicy())) return;
						m = m.parent
					}
					e.stopPropagation();
					this.delayTouchBeginEvent = this.cloneTouchEvent(e);
					this.touchBeginTimer || (this.touchBeginTimer = new b.Timer(100, 1), this.touchBeginTimer.addEventListener(b.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this));
					this.touchBeginTimer.start();
					this._onTouchBegin(e)
				}
			};
			a.prototype._onTouchEndCapture = function(e) {
				this.delayTouchBeginEvent && this._onTouchBeginTimer()
			};
			a.prototype._onTouchBeginTimer = function() {
				this.touchBeginTimer.stop();
				var e = this.delayTouchBeginEvent;
				this.delayTouchBeginEvent = null;
				this.stage && this.dispatchPropagationEvent(e)
			};
			a.prototype.dispatchPropagationEvent = function(e) {
				for (var a = [], b = e._target, c = 0; b;) b == this && (c = a.length), a.push(b), b = b.parent;
				b = a.slice(0, c);
				b = b.reverse();
				a = b.concat(a);
				this._dispatchPropagationEvent(e, a, c)
			};
			a.prototype._dispatchPropagationEvent = function(e, a, b) {
				for (var c = a.length, d = 0; d < c; d++) {
					var f = a[d];
					e._currentTarget = f;
					e._eventPhase = d < b ? 1 : d == b ? 2 : 3;
					f._notifyListener(e);
					if (e._isPropagationStopped || e._isPropagationImmediateStopped) break
				}
			};
			a.prototype._onTouchMove = function(e) {
				if (this._lastTouchPosition.x != e.stageX || this._lastTouchPosition.y != e.stageY) {
					if (!this._scrollStarted) {
						var a = e.stageX - this._touchStartPosition.x,
							b = e.stageY - this._touchStartPosition.y;
						if (Math.sqrt(a * a + b * b) < this.scrollBeginThreshold) {
							this._logTouchEvent(e);
							return
						}
					}
					this._scrollStarted = !0;
					this.delayTouchBeginEvent && (this.delayTouchBeginEvent = null, this.touchBeginTimer.stop());
					this.touchChildren = !1;
					a = this._getPointChange(e);
					this.setScrollPosition(a.y, a.x, !0);
					this._calcVelocitys(e);
					this._logTouchEvent(e)
				}
			};
			a.prototype._onTouchEnd = function(e) {
				this.touchChildren = !0;
				this._scrollStarted = !1;
				b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
				b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_END, this._onTouchEnd, this);
				b.MainContext.instance.stage.removeEventListener(b.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this);
				this.removeEventListener(b.Event.ENTER_FRAME, this._onEnterFrame, this);
				this._moveAfterTouchEnd()
			};
			a.prototype._onEnterFrame = function(e) {
				e = b.getTimer();
				100 < e - this._lastTouchTime && 300 > e - this._lastTouchTime && this._calcVelocitys(this._lastTouchEvent)
			};
			a.prototype._logTouchEvent = function(e) {
				this._lastTouchPosition.x = e.stageX;
				this._lastTouchPosition.y = e.stageY;
				this._lastTouchEvent = this.cloneTouchEvent(e);
				this._lastTouchTime = b.getTimer()
			};
			a.prototype._getPointChange = function(e) {
				return {
					x: !1 === this._hCanScroll ? 0 : this._lastTouchPosition.x - e.stageX,
					y: !1 === this._vCanScroll ? 0 : this._lastTouchPosition.y - e.stageY
				}
			};
			a.prototype._calcVelocitys = function(e) {
				var a = b.getTimer();
				if (0 == this._lastTouchTime) this._lastTouchTime = a;
				else {
					var m = this._getPointChange(e),
						a = a - this._lastTouchTime;
					m.x /= a;
					m.y /= a;
					this._velocitys.push(m);
					5 < this._velocitys.length && this._velocitys.shift();
					this._lastTouchPosition.x = e.stageX;
					this._lastTouchPosition.y = e.stageY
				}
			};
			a.prototype._getContentWidth = function() {
				return this._content.explicitWidth || this._content.width
			};
			a.prototype._getContentHeight = function() {
				return this._content.explicitHeight || this._content.height
			};
			a.prototype.getMaxScrollLeft = function() {
				var e = this._getContentWidth() - this.width;
				return Math.max(0, e)
			};
			a.prototype.getMaxScrollTop = function() {
				var e = this._getContentHeight() - this.height;
				return Math.max(0, e)
			};
			a.prototype._moveAfterTouchEnd = function() {
				if (0 != this._velocitys.length) {
					for (var e = 0, b = 0, m = 0, c = 0; c < this._velocitys.length; c++) var d = this._velocitys[c],
						f = a.weight[c],
						e = e + d.x * f,
						b = b + d.y * f,
						m = m + f;
					this._velocitys.length = 0;
					0 >= this.scrollSpeed && (this.scrollSpeed = 1);
					e = e / m * this.scrollSpeed;
					b = b / m * this.scrollSpeed;
					d = Math.abs(e);
					m = Math.abs(b);
					f = this.getMaxScrollLeft();
					c = this.getMaxScrollTop();
					e = 0.02 < d ? this.getAnimationDatas(e, this._scrollLeft, f) : {
						position: this._scrollLeft,
						duration: 1
					};
					b = 0.02 < m ? this.getAnimationDatas(b, this._scrollTop, c) : {
						position: this._scrollTop,
						duration: 1
					};
					this.setScrollLeft(e.position, e.duration);
					this.setScrollTop(b.position, b.duration)
				}
			};
			a.prototype._onTweenFinished = function(e) {
				e == this._vScrollTween && (this._isVTweenPlaying = !1);
				e == this._hScrollTween && (this._isHTweenPlaying = !1);
				!1 == this._isHTweenPlaying && !1 == this._isVTweenPlaying && this._onScrollFinished()
			};
			a.prototype._onScrollStarted = function() {};
			a.prototype._onScrollFinished = function() {
				b.Tween.removeTweens(this);
				this._vScrollTween = this._hScrollTween = null;
				this._isVTweenPlaying = this._isHTweenPlaying = !1;
				this.dispatchEvent(new b.Event(b.Event.COMPLETE))
			};
			a.prototype.setScrollTop = function(e, a) {
				void 0 === a && (a = 0);
				var c = Math.min(this.getMaxScrollTop(), Math.max(e, 0));
				if (0 == a) return this.scrollTop = c, null;
				var d = b.Tween.get(this).to({
					scrollTop: e
				}, a, b.Ease.quartOut);
				c != e && d.to({
					scrollTop: c
				}, 300, b.Ease.quintOut);
				this._isVTweenPlaying = !0;
				this._vScrollTween = d;
				d.call(this._onTweenFinished, this, [d]);
				this._isHTweenPlaying || this._onScrollStarted();
				return d
			};
			a.prototype.setScrollLeft = function(e, a) {
				void 0 === a && (a = 0);
				var c = Math.min(this.getMaxScrollLeft(), Math.max(e, 0));
				if (0 == a) return this.scrollLeft = c, null;
				var d = b.Tween.get(this).to({
					scrollLeft: e
				}, a, b.Ease.quartOut);
				c != e && d.to({
					scrollLeft: c
				}, 300, b.Ease.quintOut);
				this._isHTweenPlaying = !0;
				this._hScrollTween = d;
				d.call(this._onTweenFinished, this, [d]);
				this._isVTweenPlaying || this._onScrollStarted();
				return d
			};
			a.prototype.getAnimationDatas = function(e, a, b) {
				var c = Math.abs(e),
					d = 0,
					f = a + 500 * e;
				if (0 > f || f > b) for (f = a; Infinity != Math.abs(e) && 0.02 < Math.abs(e);) f += e, e = 0 > f || f > b ? 0.998 * e * 0.95 : 0.998 * e, d++;
				else d = 500 * -Math.log(0.02 / c);
				return {
					position: Math.min(b + 50, Math.max(f, -50)),
					duration: d
				}
			};
			a.prototype.cloneTouchEvent = function(e) {
				var a = new b.TouchEvent(e._type, e._bubbles, e.cancelable);
				a.touchPointID = e.touchPointID;
				a._stageX = e._stageX;
				a._stageY = e._stageY;
				a.ctrlKey = e.ctrlKey;
				a.altKey = e.altKey;
				a.shiftKey = e.shiftKey;
				a.touchDown = e.touchDown;
				a._isDefaultPrevented = !1;
				a._target = e._target;
				return a
			};
			a.prototype.throwNotSupportedError = function() {
				throw Error(b.getString(1023));
			};
			a.prototype.addChild = function(e) {
				this.throwNotSupportedError();
				return null
			};
			a.prototype.addChildAt = function(e, a) {
				this.throwNotSupportedError();
				return null
			};
			a.prototype.removeChild = function(e) {
				this.throwNotSupportedError();
				return null
			};
			a.prototype.removeChildAt = function(e) {
				this.throwNotSupportedError();
				return null
			};
			a.prototype.setChildIndex = function(e, a) {
				this.throwNotSupportedError()
			};
			a.prototype.swapChildren = function(e, a) {
				this.throwNotSupportedError()
			};
			a.prototype.swapChildrenAt = function(e, a) {
				this.throwNotSupportedError()
			};
			a.prototype.hitTest = function(e, a, m) {
				void 0 === m && (m = !1);
				var d = c.prototype.hitTest.call(this, e, a, m);
				return d ? d : b.DisplayObject.prototype.hitTest.call(this, e, a, m)
			};
			a.weight = [1, 1.33, 1.66, 2, 2.33];
			return a
		}(b.DisplayObjectContainer);
	b.ScrollView = d;
	d.prototype.__class__ = "egret.ScrollView"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function b() {}
			b.REPEAT = "repeat";
			b.SCALE = "scale";
			return b
		}();
	b.BitmapFillMode = d;
	d.prototype.__class__ = "egret.BitmapFillMode"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(e) {
				c.call(this);
				this.scale9Grid = this._texture = null;
				this.fillMode = "scale";
				e && (this._texture = e, this._setSizeDirty());
				this.needDraw = !0
			}
			__extends(a, c);
			Object.defineProperty(a.prototype, "texture", {
				get: function() {
					return this._texture
				},
				set: function(e) {
					e != this._texture && (this._setSizeDirty(), this._texture = e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._render = function(e) {
				var b = this._texture;
				b ? (this._texture_to_render = b, a._drawBitmap(e, this._hasWidthSet ? this._explicitWidth : b._textureWidth, this._hasHeightSet ? this._explicitHeight : b._textureHeight, this)) : this._texture_to_render = null
			};
			a._drawBitmap = function(e, b, c, d) {
				var g = d._texture_to_render;
				if (g) {
					var f = g._textureWidth,
						l = g._textureHeight;
					if ("scale" == d.fillMode) {
						var n = d.scale9Grid || g.scale9Grid;
						if (n && f - n.width < b && l - n.height < c) a.drawScale9GridImage(e, d, n, b, c);
						else {
							var n = g._offsetX,
								p = g._offsetY,
								q = g._bitmapWidth || f,
								r = g._bitmapHeight || l;
							b /= f;
							n = Math.round(n * b);
							b = Math.round(q * b);
							c /= l;
							p = Math.round(p * c);
							c = Math.round(r * c);
							a.renderFilter.drawImage(e, d, g._bitmapX, g._bitmapY, q, r, n, p, b, c)
						}
					} else a.drawRepeatImage(e, d, b, c, d.fillMode)
				}
			};
			a.drawRepeatImage = function(e, a, c, d, g) {
				var f = a._texture_to_render;
				if (f) {
					var l = f._textureWidth,
						n = f._textureHeight,
						p = f._bitmapX,
						q = f._bitmapY,
						l = f._bitmapWidth || l,
						n = f._bitmapHeight || n,
						r = f._offsetX,
						f = f._offsetY;
					b.RenderFilter.getInstance().drawImage(e, a, p, q, l, n, r, f, c, d, g)
				}
			};
			a.drawScale9GridImage = function(e, a, c, d, g) {
				var f = b.MainContext.instance.rendererContext._texture_scale_factor,
					l = a._texture_to_render;
				if (l && c) {
					var n = l._textureWidth,
						p = l._textureHeight,
						q = l._bitmapX,
						r = l._bitmapY,
						t = l._bitmapWidth || n,
						s = l._bitmapHeight || p;
					d -= n - t;
					g -= p - s;
					if (!e.drawImageScale9(l, q, r, t, s, l._offsetX, l._offsetY, d, g, c)) {
						n = l._offsetX / f;
						p = l._offsetY / f;
						l = b.RenderFilter.getInstance();
						c = b.Rectangle.identity.initialize(c.x - Math.round(n), c.y - Math.round(n), c.width, c.height);
						n = Math.round(n);
						p = Math.round(p);
						c.y == c.bottom && (c.bottom < s ? c.bottom++ : c.y--);
						c.x == c.right && (c.right < t ? c.right++ : c.x--);
						var u = q + c.x / f,
							w = q + c.right / f,
							v = t - c.right,
							y = r + c.y / f,
							f = r + c.bottom / f,
							x = s - c.bottom,
							z = n + c.x,
							A = p + c.y,
							s = g - (s - c.bottom),
							t = d - (t - c.right);
						l.drawImage(e, a, q, r, c.x, c.y, n, p, c.x, c.y);
						l.drawImage(e, a, u, r, c.width, c.y, z, p, t - c.x, c.y);
						l.drawImage(e, a, w, r, v, c.y, n + t, p, d - t, c.y);
						l.drawImage(e, a, q, y, c.x, c.height, n, A, c.x, s - c.y);
						l.drawImage(e, a, u, y, c.width, c.height, z, A, t - c.x, s - c.y);
						l.drawImage(e, a, w, y, v, c.height, n + t, A, d - t, s - c.y);
						l.drawImage(e, a, q, f, c.x, x, n, p + s, c.x, g - s);
						l.drawImage(e, a, u, f, c.width, x, z, p + s, t - c.x, g - s);
						l.drawImage(e, a, w, f, v, x, n + t, p + s, d - t, g - s)
					}
				}
			};
			a.prototype._measureBounds = function() {
				var e = this._texture;
				return e ? b.Rectangle.identity.initialize(0, 0, e._textureWidth, e._textureHeight) : c.prototype._measureBounds.call(this)
			};
			a.renderFilter = b.RenderFilter.getInstance();
			return a
		}(b.DisplayObject);
	b.Bitmap = d;
	d.prototype.__class__ = "egret.Bitmap"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this._text = "";
				this._textChanged = !1;
				this._font = null;
				this._fontChanged = !1;
				this._textOffsetY = this._textOffsetX = this._textHeight = this._textWidth = 0;
				this.textLinesChange = !0;
				this._lineHeights = [];
				this.needDraw = this.cacheAsBitmap = !0
			}
			__extends(a, c);
			Object.defineProperty(a.prototype, "text", {
				get: function() {
					return this._text
				},
				set: function(e) {
					this._text != e && (this._textChanged = !0, this._text = e, this._setSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "font", {
				get: function() {
					return this._font
				},
				set: function(e) {
					this._font != e && (this._font = e, this._fontChanged = !0, this._setSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setSizeDirty = function() {
				c.prototype._setSizeDirty.call(this);
				this.textLinesChange = !0
			};
			a.prototype._render = function(e) {
				var k = this._getTextLines(),
					c = k.length;
				if (0 != c) {
					for (var d = this._font, g = d._getFirstCharHeight(), g = Math.ceil(g * a.EMPTY_FACTOR), f = 0, l = this._hasHeightSet ? this._explicitHeight : Number.POSITIVE_INFINITY, n = this._lineHeights, p = 0; p < c; p++) {
						var q = n[p];
						if (0 < p && f + q > l) break;
						for (var r = k[p], t = r.length, s = 0, u = 0; u < t; u++) {
							var w = r.charAt(u),
								v = d.getTexture(w);
							if (v) {
								var w = v._bitmapWidth || v._textureWidth,
									y = v._bitmapHeight || v._textureHeight;
								this._texture_to_render = v;
								b.RenderFilter.getInstance().drawImage(e, this, v._bitmapX, v._bitmapY, w, y, s + v._offsetX, f + v._offsetY, w, y);
								s += v._textureWidth
							} else " " == w ? s += g : b.Logger.warningWithErrorId(1011, w)
						}
						f += q
					}
					this._texture_to_render = null
				}
			};
			a.prototype._measureBounds = function() {
				return 0 == this._getTextLines().length ? b.Rectangle.identity.initialize(0, 0, 0, 0) : b.Rectangle.identity.initialize(this._textOffsetX, this._textOffsetY, this._textWidth - this._textOffsetX, this._textHeight - this._textOffsetY)
			};
			a.prototype._getTextLines = function() {
				if (!this.textLinesChange) return this._textLines;
				var e = [];
				this._textLines = e;
				this.textLinesChange = !1;
				var k = [];
				this._lineHeights = k;
				if (!this._text || !this._font) return e;
				for (var c = 0, d = 0, g = 0, f = 0, l = this._hasWidthSet, n = this._hasWidthSet ? this._explicitWidth : Number.POSITIVE_INFINITY, p = this._font, q = p._getFirstCharHeight(), r = Math.ceil(q * a.EMPTY_FACTOR), t = this._text.split(/(?:\r\n|\r|\n)/), s = t.length, u = !0, w = 0; w < s; w++) {
					for (var v = t[w], y = v.length, x = 0, z = 0, A = !0, C = 0; C < y; C++) {
						var B = v.charAt(C),
							E, F = 0,
							G = 0,
							D = p.getTexture(B);
						if (D) B = D._textureWidth, E = D._textureHeight, F = D._offsetX, G = D._offsetY;
						else if (" " == B) B = r, E = q;
						else {
							b.Logger.warningWithErrorId(1011, B);
							A && (A = !1);
							continue
						}
						A && (A = !1, g = Math.min(F, g));
						u && (f = Math.min(G, f));
						l && 0 < C && z + B > n ? (e.push(v.substring(0, C)), k.push(x), d += x, c = Math.max(z, c), v = v.substring(C), y = v.length, C = 0, z = B, x = E) : (z += B, x = Math.max(E, x))
					}
					u && (u = !1);
					e.push(v);
					k.push(x);
					d += x;
					c = Math.max(z, c)
				}
				this._textWidth = c;
				this._textHeight = d;
				this._textOffsetX = g;
				this._textOffsetY = f;
				return e
			};
			a.EMPTY_FACTOR = 0.33;
			return a
		}(b.DisplayObject);
	b.BitmapText = d;
	d.prototype.__class__ = "egret.BitmapText"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function c() {
				this.fillStyleColor = this.strokeStyleColor = this.renderContext = this.commandQueue = this.canvasContext = null;
				this._dirty = !1;
				this.lineY = this.lineX = 0;
				this._firstCheck = !0;
				this._lastY = this._lastX = this._maxY = this._maxX = this._minY = this._minX = 0;
				this.commandQueue = []
			}
			c.prototype.beginFill = function(a, e) {};
			c.prototype._setStyle = function(a) {};
			c.prototype.drawRect = function(a, e, b, c) {
				this.checkRect(a, e, b, c)
			};
			c.prototype.drawCircle = function(a, e, b) {
				this.checkRect(a - b, e - b, 2 * b, 2 * b)
			};
			c.prototype.drawRoundRect = function(a, e, b, c, d, g) {
				this.checkRect(a, e, b, c)
			};
			c.prototype.drawEllipse = function(a, e, b, c) {
				this.checkRect(a - b, e - c, 2 * b, 2 * c)
			};
			c.prototype.lineStyle = function(a, e, b, c, d, g, f, l) {};
			c.prototype.lineTo = function(a, e) {
				this.checkPoint(a, e)
			};
			c.prototype.curveTo = function(a, e, b, c) {
				this.checkPoint(a, e);
				this.checkPoint(b, c)
			};
			c.prototype.moveTo = function(a, e) {
				this.checkPoint(a, e)
			};
			c.prototype.clear = function() {
				this._maxY = this._maxX = this._minY = this._minX = 0;
				this._firstCheck = !0
			};
			c.prototype.endFill = function() {};
			c.prototype._draw = function(a) {};
			c.prototype.checkRect = function(a, e, b, c) {
				this._firstCheck ? (this._firstCheck = !1, this._minX = a, this._minY = e, this._maxX = a + b, this._maxY = e + c) : (this._minX = Math.min(this._minX, a), this._minY = Math.min(this._minY, e), this._maxX = Math.max(this._maxX, a + b), this._maxY = Math.max(this._maxY, e + c))
			};
			c.prototype.checkPoint = function(a, e) {
				this._firstCheck ? (this._firstCheck = !1, this._minX = a, this._minY = e, this._maxX = a, this._maxY = e) : (this._minX = Math.min(this._minX, a), this._minY = Math.min(this._minY, e), this._maxX = Math.max(this._maxX, a), this._maxY = Math.max(this._maxY, e));
				this._lastX = a;
				this._lastY = e
			};
			c.prototype._measureBounds = function() {
				return b.Rectangle.identity.initialize(this._minX, this._minY, this._maxX - this._minX, this._maxY - this._minY)
			};
			return c
		}();
	b.Graphics = d;
	d.prototype.__class__ = "egret.Graphics";
	var _fff = (function() {
		return function(b, a, e) {
			this.method = b;
			this.thisObject = a;
			this.args = e
		}
	})();
	_fff.prototype.__class__ = "egret.Command"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this._graphics = null
			}
			__extends(a, c);
			Object.defineProperty(a.prototype, "graphics", {
				get: function() {
					this._graphics || (this._graphics = new b.Graphics, this.needDraw = !0);
					return this._graphics
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._render = function(e) {
				this._graphics && this._graphics._draw(e)
			};
			a.prototype._measureBounds = function() {
				var e = this._graphics;
				return e ? e._measureBounds() : c.prototype._measureBounds.call(this)
			};
			return a
		}(b.DisplayObject);
	b.Shape = d;
	d.prototype.__class__ = "egret.Shape"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this._graphics = null
			}
			__extends(a, c);
			Object.defineProperty(a.prototype, "graphics", {
				get: function() {
					this._graphics || (this._graphics = new b.Graphics, this.needDraw = !0);
					return this._graphics
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._render = function(e) {
				this._graphics && this._graphics._draw(e);
				c.prototype._render.call(this, e)
			};
			a.prototype._measureBounds = function() {
				for (var e = 0, a = 0, c = 0, d = 0, g = this._children.length, f = 0; f < g; f++) {
					var l = this._children[f];
					if (l._visible) {
						var n = l.getBounds(b.Rectangle.identity, !1),
							p = n.x,
							q = n.y,
							r = n.width,
							n = n.height,
							l = l._getMatrix(),
							l = b.DisplayObject.getTransformBounds(b.Rectangle.identity.initialize(p, q, r, n), l),
							p = l.x,
							q = l.y,
							r = l.width + l.x,
							l = l.height + l.y;
						if (p < e || 0 == f) e = p;
						if (r > a || 0 == f) a = r;
						if (q < c || 0 == f) c = q;
						if (l > d || 0 == f) d = l
					}
				}
				if (this._graphics) {
					g = this._graphics._measureBounds();
					p = g.x;
					q = g.y;
					r = g.width + g.x;
					l = g.height + g.y;
					if (p < e || 0 == f) e = p;
					if (r > a || 0 == f) a = r;
					if (q < c || 0 == f) c = q;
					if (l > d || 0 == f) d = l
				}
				return b.Rectangle.identity.initialize(e, c, a - e, d - c)
			};
			a.prototype.hitTest = function(e, a, d) {
				void 0 === d && (d = !1);
				var h = c.prototype.hitTest.call(this, e, a, d);
				return h ? h : this._graphics ? b.DisplayObject.prototype.hitTest.call(this, e, a, d) : null
			};
			return a
		}(b.DisplayObjectContainer);
	b.Sprite = d;
	d.prototype.__class__ = "egret.Sprite"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this._inputEnabled = !1;
				this._type = "";
				this._inputUtils = null;
				this._text = "";
				this._displayAsPassword = !1;
				this._fontFamily = a.default_fontFamily;
				this._size = 30;
				this._bold = this._italic = !1;
				this._textColorString = "#FFFFFF";
				this._textColor = 16777215;
				this._strokeColorString = "#000000";
				this._stroke = this._strokeColor = 0;
				this._textAlign = "left";
				this._verticalAlign = "top";
				this._maxChars = 0;
				this._scrollV = -1;
				this._numLines = this._lineSpacing = this._maxScrollV = 0;
				this._isFlow = this._multiline = !1;
				this._textArr = [];
				this._isArrayChanged = !1;
				this._textMaxHeight = this._textMaxWidth = 0;
				this._linesArr = [];
				this.needDraw = !0
			}
			__extends(a, c);
			a.prototype.isInput = function() {
				return this._type == b.TextFieldType.INPUT
			};
			a.prototype._setTouchEnabled = function(e) {
				c.prototype._setTouchEnabled.call(this, e);
				this.isInput() && (this._inputEnabled = !0)
			};
			Object.defineProperty(a.prototype, "type", {
				get: function() {
					return this._type
				},
				set: function(e) {
					this._setType(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setType = function(e) {
				this._type != e && (this._type = e, this._type == b.TextFieldType.INPUT ? (this._hasWidthSet || this._setWidth(100), this._hasHeightSet || this._setHeight(30), null == this._inputUtils && (this._inputUtils = new b.InputController), this._inputUtils.init(this), this._setDirty(), this._stage && this._inputUtils._addStageText()) : this._inputUtils && (this._inputUtils._removeStageText(), this._inputUtils = null))
			};
			Object.defineProperty(a.prototype, "text", {
				get: function() {
					return this._getText()
				},
				set: function(e) {
					this._setText(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._getText = function() {
				return this._type == b.TextFieldType.INPUT ? this._inputUtils._getText() : this._text
			};
			a.prototype._setSizeDirty = function() {
				c.prototype._setSizeDirty.call(this);
				this._isArrayChanged = !0
			};
			a.prototype._setTextDirty = function() {
				this._setSizeDirty()
			};
			a.prototype._setBaseText = function(e) {
				null == e && (e = "");
				this._isFlow = !1;
				this._text != e && (this._setTextDirty(), this._text = e, e = "", e = this._displayAsPassword ? this.changeToPassText(this._text) : this._text, this.setMiddleStyle([{
					text: e
				}]))
			};
			a.prototype._setText = function(e) {
				null == e && (e = "");
				this._setBaseText(e);
				this._inputUtils && this._inputUtils._setText(this._text)
			};
			Object.defineProperty(a.prototype, "displayAsPassword", {
				get: function() {
					return this._displayAsPassword
				},
				set: function(e) {
					this._setDisplayAsPassword(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setDisplayAsPassword = function(e) {
				this._displayAsPassword != e && (this._displayAsPassword = e, this._setTextDirty(), e = "", e = this._displayAsPassword ? this.changeToPassText(this._text) : this._text, this.setMiddleStyle([{
					text: e
				}]))
			};
			Object.defineProperty(a.prototype, "fontFamily", {
				get: function() {
					return this._fontFamily
				},
				set: function(e) {
					this._setFontFamily(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setFontFamily = function(e) {
				this._fontFamily != e && (this._setTextDirty(), this._fontFamily = e)
			};
			Object.defineProperty(a.prototype, "size", {
				get: function() {
					return this._size
				},
				set: function(e) {
					this._setSize(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setSize = function(e) {
				this._size != e && (this._setTextDirty(), this._size = e)
			};
			Object.defineProperty(a.prototype, "italic", {
				get: function() {
					return this._italic
				},
				set: function(e) {
					this._setItalic(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setItalic = function(e) {
				this._italic != e && (this._setTextDirty(), this._italic = e)
			};
			Object.defineProperty(a.prototype, "bold", {
				get: function() {
					return this._bold
				},
				set: function(e) {
					this._setBold(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setBold = function(e) {
				this._bold != e && (this._setTextDirty(), this._bold = e)
			};
			Object.defineProperty(a.prototype, "textColor", {
				get: function() {
					return this._textColor
				},
				set: function(e) {
					this._setTextColor(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setTextColor = function(e) {
				this._textColor != e && (this._setTextDirty(), this._textColor = e, this._textColorString = b.toColorString(e))
			};
			Object.defineProperty(a.prototype, "strokeColor", {
				get: function() {
					return this._strokeColor
				},
				set: function(e) {
					this._setStrokeColor(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setStrokeColor = function(e) {
				this._strokeColor != e && (this._setTextDirty(), this._strokeColor = e, this._strokeColorString = b.toColorString(e))
			};
			Object.defineProperty(a.prototype, "stroke", {
				get: function() {
					return this._stroke
				},
				set: function(e) {
					this._setStroke(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setStroke = function(e) {
				this._stroke != e && (this._setTextDirty(), this._stroke = e)
			};
			Object.defineProperty(a.prototype, "textAlign", {
				get: function() {
					return this._textAlign
				},
				set: function(e) {
					this._setTextAlign(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setTextAlign = function(e) {
				this._textAlign != e && (this._setTextDirty(), this._textAlign = e)
			};
			Object.defineProperty(a.prototype, "verticalAlign", {
				get: function() {
					return this._verticalAlign
				},
				set: function(e) {
					this._setVerticalAlign(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setVerticalAlign = function(e) {
				this._verticalAlign != e && (this._setTextDirty(), this._verticalAlign = e)
			};
			Object.defineProperty(a.prototype, "maxChars", {
				get: function() {
					return this._maxChars
				},
				set: function(e) {
					this._setMaxChars(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setMaxChars = function(e) {
				this._maxChars != e && (this._maxChars = e)
			};
			Object.defineProperty(a.prototype, "scrollV", {
				set: function(e) {
					this._scrollV = e;
					this._setDirty()
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "maxScrollV", {
				get: function() {
					return this._maxScrollV
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "selectionBeginIndex", {
				get: function() {
					return 0
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "selectionEndIndex", {
				get: function() {
					return 0
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "caretIndex", {
				get: function() {
					return 0
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setSelection = function(e, a) {};
			Object.defineProperty(a.prototype, "lineSpacing", {
				get: function() {
					return this._lineSpacing
				},
				set: function(e) {
					this._setLineSpacing(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setLineSpacing = function(e) {
				this._lineSpacing != e && (this._setTextDirty(), this._lineSpacing = e)
			};
			a.prototype._getLineHeight = function() {
				return this._lineSpacing + this._size
			};
			Object.defineProperty(a.prototype, "numLines", {
				get: function() {
					return this._numLines
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "multiline", {
				get: function() {
					return this._multiline
				},
				set: function(e) {
					this._setMultiline(e)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setMultiline = function(e) {
				this._multiline = e;
				this._setDirty()
			};
			a.prototype.setFocus = function() {
				b.Logger.warningWithErrorId(1013)
			};
			a.prototype._onRemoveFromStage = function() {
				c.prototype._onRemoveFromStage.call(this);
				this._removeEvent();
				this._type == b.TextFieldType.INPUT && this._inputUtils._removeStageText()
			};
			a.prototype._onAddToStage = function() {
				c.prototype._onAddToStage.call(this);
				this._addEvent();
				this._type == b.TextFieldType.INPUT && this._inputUtils._addStageText()
			};
			a.prototype._updateBaseTransform = function() {
				this._getLinesArr();
				0 != this._textMaxWidth && c.prototype._updateTransform.call(this)
			};
			a.prototype._updateTransform = function() {
				this._type == b.TextFieldType.INPUT ? this._normalDirty ? this._inputUtils._updateProperties() : this._inputUtils._updateTransform() : this._updateBaseTransform()
			};
			a.prototype._draw = function(e) {
				0 != this._textMaxWidth && c.prototype._draw.call(this, e)
			};
			a.prototype._render = function(e) {
				this.drawText(e);
				this._clearDirty()
			};
			a.prototype._measureBounds = function() {
				this._getLinesArr();
				return 0 == this._textMaxWidth ? b.Rectangle.identity.initialize(0, 0, 0, 0) : b.Rectangle.identity.initialize(0, 0, this._textMaxWidth, this._textMaxHeight + (this._numLines - 1) * this._lineSpacing)
			};
			Object.defineProperty(a.prototype, "textFlow", {
				get: function() {
					return this._textArr
				},
				set: function(e) {
					this._isFlow = !0;
					var a = "";
					null == e && (e = []);
					for (var b = 0; b < e.length; b++) a += e[b].text;
					this._displayAsPassword ? this._setBaseText(a) : (this._text = a, this.setMiddleStyle(e))
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.changeToPassText = function(e) {
				if (this._displayAsPassword) {
					for (var a = "", b = 0, c = e.length; b < c; b++) switch (e.charAt(b)) {
					case "\n":
						a += "\n";
						break;
					case "\r":
						break;
					default:
						a += "*"
					}
					return a
				}
				return e
			};
			a.prototype.setMiddleStyle = function(e) {
				this._isArrayChanged = !0;
				this._textArr = e;
				this._setSizeDirty()
			};
			Object.defineProperty(a.prototype, "textWidth", {
				get: function() {
					return this._textMaxWidth
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "textHeight", {
				get: function() {
					return this._textMaxHeight
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.appendText = function(e) {
				this.appendElement({
					text: e
				})
			};
			a.prototype.appendElement = function(e) {
				this._textArr.push(e);
				this.setMiddleStyle(this._textArr)
			};
			a.prototype._getLinesArr = function() {
				if (!this._isArrayChanged) return this._linesArr;
				this._isArrayChanged = !1;
				var e = this._textArr,
					a = b.MainContext.instance.rendererContext;
				this._linesArr = [];
				this._textMaxWidth = this._textMaxHeight = 0;
				if (this._hasWidthSet && 0 == this._explicitWidth) return this._numLines = 0, [{
					width: 0,
					height: 0,
					elements: []
				}];
				var c = this._linesArr,
					d = 0,
					g = 0,
					f = 0,
					l;
				this._isFlow || a.setupFont(this);
				for (var n = 0, p = e.length; n < p; n++) {
					var q = e[n];
					q.style = q.style || {};
					for (var r = q.text.toString().split(/(?:\r\n|\r|\n)/), t = 0, s = r.length; t < s; t++) {
						null == c[f] && (l = {
							width: 0,
							height: 0,
							elements: []
						}, c[f] = l, g = d = 0);
						g = this._type == b.TextFieldType.INPUT ? this._size : Math.max(g, q.style.size || this._size);
						if ("" != r[t]) {
							this._isFlow && a.setupFont(this, q.style);
							var u = a.measureText(r[t]);
							if (this._hasWidthSet) if (d + u <= this._explicitWidth) l.elements.push({
								width: u,
								text: r[t],
								style: q.style
							}), d += u;
							else {
								for (var w = 0, v = 0, y = r[t], x = y.length; w < x; w++) {
									u = a.measureText(y.charAt(w));
									if (d + u > this._explicitWidth && 0 != d + w) break;
									v += u;
									d += u
								}
								0 < w && (l.elements.push({
									width: v,
									text: y.substring(0, w),
									style: q.style
								}), r[t] = y.substring(w));
								t--
							} else d += u, l.elements.push({
								width: u,
								text: r[t],
								style: q.style
							})
						}
						if (t < r.length - 1) {
							l.width = d;
							l.height = g;
							this._textMaxWidth = Math.max(this._textMaxWidth, d);
							this._textMaxHeight += g;
							if (this._type == b.TextFieldType.INPUT && !this._multiline) return this._numLines = c.length, c;
							f++
						}
					}
					n == e.length - 1 && l && (l.width = d, l.height = g, this._textMaxWidth = Math.max(this._textMaxWidth, d), this._textMaxHeight += g)
				}
				this._numLines = c.length;
				return c
			};
			a.prototype.drawText = function(e) {
				var a = this._getLinesArr();
				if (0 != this._textMaxWidth) {
					var c = this._hasWidthSet ? this._explicitWidth : this._textMaxWidth,
						d = this._textMaxHeight + (this._numLines - 1) * this._lineSpacing,
						g = 0,
						f = 0;
					if (this._hasHeightSet) if (d < this._explicitHeight) {
						var l = 0;
						this._verticalAlign == b.VerticalAlign.MIDDLE ? l = 0.5 : this._verticalAlign == b.VerticalAlign.BOTTOM && (l = 1);
						g += l * (this._explicitHeight - d)
					} else d > this._explicitHeight && (f = Math.max(this._scrollV - 1, 0), f = Math.min(this._numLines - 1, f));
					g = Math.round(g);
					d = 0;
					this._textAlign == b.HorizontalAlign.CENTER ? d = 0.5 : this._textAlign == b.HorizontalAlign.RIGHT && (d = 1);
					for (var l = 0, n = this._numLines; f < n; f++) {
						var p = a[f],
							q = p.height,
							g = g + q / 2;
						if (0 != f && this._hasHeightSet && g > this._explicitHeight) break;
						for (var l = Math.round((c - p.width) * d), r = 0, t = p.elements.length; r < t; r++) {
							var s = p.elements[r],
								u = s.style.size || this._size;
							this._type == b.TextFieldType.INPUT ? e.drawText(this, s.text, l, g + (q - u) / 2, s.width) : e.drawText(this, s.text, l, g + (q - u) / 2, s.width, s.style);
							l += s.width
						}
						g += q / 2 + this._lineSpacing
					}
				}
			};
			a.prototype._addEvent = function() {
				this.addEventListener(b.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
			};
			a.prototype._removeEvent = function() {
				this.removeEventListener(b.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
			};
			a.prototype.onTapHandler = function(e) {
				if (this._type != b.TextFieldType.INPUT && (e = this._getTextElement(e.localX, e.localY), null != e && (e = e.style) && e.href && e.href.match(/^event:/))) {
					var a = e.href.match(/^event:/)[0];
					b.TextEvent.dispatchTextEvent(this, b.TextEvent.LINK, e.href.substring(a.length))
				}
			};
			a.prototype._getTextElement = function(e, a) {
				var b = this._getHit(e, a),
					c = this._getLinesArr();
				return b && c[b.lineIndex] && c[b.lineIndex].elements[b.textElementIndex] ? c[b.lineIndex].elements[b.textElementIndex] : null
			};
			a.prototype._getHit = function(e, a) {
				var b = this._getLinesArr();
				if (0 == this._textMaxWidth) return null;
				for (var c = 0, d = 0, f = 0; f < b.length; f++) {
					var l = b[f];
					if (d + l.height >= a) {
						c = f + 1;
						break
					} else d += l.height;
					if (d + this._lineSpacing > a) return null;
					d += this._lineSpacing
				}
				if (0 === c) return null;
				b = b[c - 1];
				for (f = d = 0; f < b.elements.length; f++) if (l = b.elements[f], d + l.width < e) d += l.width;
				else return {
					lineIndex: c - 1,
					textElementIndex: f
				};
				return null
			};
			a.default_fontFamily = "Arial";
			return a
		}(b.DisplayObject);
	b.TextField = d;
	d.prototype.__class__ = "egret.TextField"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function b() {
				this.resutlArr = []
			}
			b.prototype.parser = function(a) {
				this.stackArray = [];
				this.resutlArr = [];
				for (var e = 0, b = a.length; e < b;) {
					var c = a.indexOf("<", e);
					0 > c ? (this.addToResultArr(a.substring(e)), e = b) : (this.addToResultArr(a.substring(e, c)), e = a.indexOf(">", c), "/" == a.charAt(c + 1) ? this.stackArray.pop() : this.addToArray(a.substring(c + 1, e)), e += 1)
				}
				return this.resutlArr
			};
			b.prototype.addToResultArr = function(a) {
				if ("" != a) {
					var e = [];
					e.push(["&lt;", "<"]);
					e.push(["&gt;", ">"]);
					e.push(["&amp;", "&"]);
					e.push(["&quot;", '"']);
					e.push(["&apos;;", "'"]);
					for (var b = 0; b < e.length; b++) a.replace(new RegExp(e[b][0], "g"), e[b][1]);
					0 < this.stackArray.length ? this.resutlArr.push({
						text: a,
						style: this.stackArray[this.stackArray.length - 1]
					}) : this.resutlArr.push({
						text: a
					})
				}
			};
			b.prototype.changeStringToObject = function(a) {
				var e = {};
				a = a.replace(/( )+/g, " ").split(" ");
				for (var b = 0; b < a.length; b++) this.addProperty(e, a[b]);
				return e
			};
			b.prototype.addProperty = function(a, e) {
				var b = e.replace(/( )*=( )*/g, "=").split("=");
				b[1] && (b[1] = b[1].replace(/(\"|\')/g, ""));
				switch (b[0].toLowerCase()) {
				case "color":
					a.textColor = parseInt(b[1]);
					break;
				case "strokecolor":
					a.strokeColor = parseInt(b[1]);
					break;
				case "stroke":
					a.stroke = parseInt(b[1]);
					break;
				case "b":
					a.bold = "true" == (b[1] || "true");
					break;
				case "i":
					a.italic = "true" == (b[1] || "true");
					break;
				case "size":
					a.size = parseInt(b[1]);
					break;
				case "fontFamily":
					a.fontFamily = b[1];
					break;
				case "href":
					a.href = b[1]
				}
			};
			b.prototype.addToArray = function(a) {
				a = this.changeStringToObject(a);
				if (0 != this.stackArray.length) {
					var e = this.stackArray[this.stackArray.length - 1],
						b;
					for (b in e) null == a[b] && (a[b] = e[b])
				}
				this.stackArray.push(a)
			};
			return b
		}();
	b.HtmlTextParser = d;
	d.prototype.__class__ = "egret.HtmlTextParser"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function b() {}
			b.DYNAMIC = "dynamic";
			b.INPUT = "input";
			return b
		}();
	b.TextFieldType = d;
	d.prototype.__class__ = "egret.TextFieldType"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(e) {
				c.call(this);
				this.bitmapData = this._bitmapY = this._bitmapX = this._sourceHeight = this._sourceWidth = 0;
				this._textureMap = {};
				var a = e.bitmapData;
				this.bitmapData = a;
				this._sourceWidth = a.width;
				this._sourceHeight = a.height;
				this._bitmapX = e._bitmapX - e._offsetX;
				this._bitmapY = e._bitmapY - e._offsetY
			}
			__extends(a, c);
			a.prototype.getTexture = function(e) {
				return this._textureMap[e]
			};
			a.prototype.createTexture = function(e, a, c, d, g, f, l, n, p) {
				void 0 === f && (f = 0);
				void 0 === l && (l = 0);
				"undefined" === typeof n && (n = f + d);
				"undefined" === typeof p && (p = l + g);
				var q = new b.Texture,
					r = b.MainContext.instance.rendererContext._texture_scale_factor;
				q._bitmapData = this.bitmapData;
				q._bitmapX = this._bitmapX + a;
				q._bitmapY = this._bitmapY + c;
				q._bitmapWidth = d * r;
				q._bitmapHeight = g * r;
				q._offsetX = f;
				q._offsetY = l;
				q._textureWidth = n * r;
				q._textureHeight = p * r;
				q._sourceWidth = this._sourceWidth;
				q._sourceHeight = this._sourceHeight;
				return this._textureMap[e] = q
			};
			return a
		}(b.HashObject);
	b.SpriteSheet = d;
	d.prototype.__class__ = "egret.SpriteSheet"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this._isFocus = !1;
				this._text = null;
				this._isFirst = this._isFirst = !0
			}
			__extends(a, c);
			a.prototype.init = function(e) {
				this._text = e;
				this.stageText = b.StageText.create();
				e = this._text.localToGlobal();
				this.stageText._open(e.x, e.y, this._text._explicitWidth, this._text._explicitHeight)
			};
			a.prototype._addStageText = function() {
				this._text._inputEnabled || (this._text._touchEnabled = !0);
				this.stageText._add();
				this.stageText._addListeners();
				this.stageText.addEventListener("blur", this.onBlurHandler, this);
				this.stageText.addEventListener("focus", this.onFocusHandler, this);
				this.stageText.addEventListener("updateText", this.updateTextHandler, this);
				this._text.addEventListener(b.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
				b.MainContext.instance.stage.addEventListener(b.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this);
				b.MainContext.instance.stage.addEventListener(b.Event.RESIZE, this.onResize, this)
			};
			a.prototype._removeStageText = function() {
				this.stageText._remove();
				this.stageText._removeListeners();
				this._text._inputEnabled || (this._text._touchEnabled = !1);
				this.stageText.removeEventListener("blur", this.onBlurHandler, this);
				this.stageText.removeEventListener("focus", this.onFocusHandler, this);
				this.stageText.removeEventListener("updateText", this.updateTextHandler, this);
				this._text.removeEventListener(b.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
				b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this);
				b.MainContext.instance.stage.removeEventListener(b.Event.RESIZE, this.onResize, this)
			};
			a.prototype.onResize = function() {
				this._isFirst = !0
			};
			a.prototype._getText = function() {
				return this.stageText._getText()
			};
			a.prototype._setText = function(e) {
				this.stageText._setText(e)
			};
			a.prototype.onFocusHandler = function(e) {
				this.hideText()
			};
			a.prototype.onBlurHandler = function(e) {
				this.showText()
			};
			a.prototype.onMouseDownHandler = function(e) {
				e.stopPropagation();
				this._text._visible && (this._isFirst = !0, this._updateTransform(), this.stageText._show())
			};
			a.prototype.onStageDownHandler = function(e) {
				this.stageText._hide();
				this.showText()
			};
			a.prototype.showText = function() {
				this._isFocus && (this._isFocus = !1, this.resetText())
			};
			a.prototype.hideText = function() {
				this._isFocus || (this._text._setBaseText(""), this._isFocus = !0)
			};
			a.prototype.updateTextHandler = function(e) {
				this.resetText();
				this._text.dispatchEvent(new b.Event(b.Event.CHANGE))
			};
			a.prototype.resetText = function() {
				this._text._setBaseText(this.stageText._getText())
			};
			a.prototype._updateTransform = function() {
				var e = this._text._worldTransform.a,
					a = this._text._worldTransform.b,
					c = this._text._worldTransform.c,
					d = this._text._worldTransform.d,
					g = this._text._worldTransform.tx,
					f = this._text._worldTransform.ty;
				this._text._updateBaseTransform();
				var l = this._text._worldTransform;
				if (this._isFirst || e != l.a || a != l.b || c != l.c || d != l.d || g != l.tx || f != l.ty) {
					this._isFirst = !1;
					e = this._text.localToGlobal();
					this.stageText.changePosition(e.x, e.y);
					var n = this;
					b.callLater(function() {
						n.stageText._setScale(n._text._worldTransform.a, n._text._worldTransform.d)
					}, this)
				}
			};
			a.prototype._updateProperties = function() {
				var e = this._text._stage;
				if (null == e) this.stageText._setVisible(!1);
				else {
					for (var a = this._text, c = a._visible; c;) {
						a = a.parent;
						if (a == e) break;
						c = a._visible
					}
					this.stageText._setVisible(c)
				}
				this.stageText._setMultiline(this._text._multiline);
				this.stageText._setMaxChars(this._text._maxChars);
				this.stageText._setSize(this._text._size);
				this.stageText._setTextColor(this._text._textColorString);
				this.stageText._setTextFontFamily(this._text._fontFamily);
				this.stageText._setBold(this._text._bold);
				this.stageText._setItalic(this._text._italic);
				this.stageText._setTextAlign(this._text._textAlign);
				this.stageText._setWidth(this._text._getSize(b.Rectangle.identity).width);
				this.stageText._setHeight(this._text._getSize(b.Rectangle.identity).height);
				this.stageText._setTextType(this._text._displayAsPassword ? "password" : "text");
				this.stageText._setText(this._text._text);
				this.stageText._resetStageText();
				this._updateTransform()
			};
			return a
		}(b.HashObject);
	b.InputController = d;
	d.prototype.__class__ = "egret.InputController"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a(e, a) {
				b.call(this, e);
				this.firstCharHeight = 0;
				"string" == typeof a ? this.charList = this.parseConfig(a) : a && a.hasOwnProperty("frames") ? this.charList = a.frames : this.charList = {}
			}
			__extends(a, b);
			a.prototype.getTexture = function(e) {
				var a = this._textureMap[e];
				if (!a) {
					a = this.charList[e];
					if (!a) return null;
					a = this.createTexture(e, a.x, a.y, a.w, a.h, a.offX, a.offY, a.sourceW, a.sourceH);
					this._textureMap[e] = a
				}
				return a
			};
			a.prototype._getFirstCharHeight = function() {
				if (0 == this.firstCharHeight) for (var e in this.charList) {
					var a = this.charList[e];
					if (a) {
						var b = a.sourceH;
						void 0 === b && (b = a.h, void 0 === b && (b = 0), a = a.offY, void 0 === a && (a = 0), b += a);
						if (!(0 >= b)) {
							this.firstCharHeight = b;
							break
						}
					}
				}
				return this.firstCharHeight
			};
			a.prototype.parseConfig = function(e) {
				e = e.split("\r\n").join("\n");
				e = e.split("\n");
				for (var a = this.getConfigByKey(e[3], "count"), b = {}, c = 4; c < 4 + a; c++) {
					var d = e[c],
						f = String.fromCharCode(this.getConfigByKey(d, "id")),
						l = {};
					b[f] = l;
					l.x = this.getConfigByKey(d, "x");
					l.y = this.getConfigByKey(d, "y");
					l.w = this.getConfigByKey(d, "width");
					l.h = this.getConfigByKey(d, "height");
					l.offX = this.getConfigByKey(d, "xoffset");
					l.offY = this.getConfigByKey(d, "yoffset")
				}
				return b
			};
			a.prototype.getConfigByKey = function(e, a) {
				for (var b = e.split(" "), c = 0, d = b.length; c < d; c++) {
					var f = b[c];
					if (a == f.substring(0, a.length)) return b = f.substring(a.length + 1), parseInt(b)
				}
				return 0
			};
			return a
		}(b.SpriteSheet);
	b.BitmapFont = d;
	d.prototype.__class__ = "egret.BitmapFont"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(e) {
				c.call(this);
				this._isAddedToStage = !1;
				this._frames = this._movieClipData = this._textureToRender = null;
				this._totalFrames = 0;
				this._frameLabels = null;
				this._frameIntervalTime = 0;
				this._eventPool = null;
				this._isPlaying = !1;
				this._isStopped = !0;
				this._passedTime = this._displayedKeyFrameNum = this._nextFrameNum = this._currentFrameNum = this._playTimes = 0;
				this._setMovieClipData(e);
				this.needDraw = !0
			}
			__extends(a, c);
			a.prototype._init = function() {
				this._reset();
				var e = this._movieClipData;
				e && e._isDataValid() && (this._frames = e.frames, this._totalFrames = e.numFrames, this._frameLabels = e.labels, this._frameIntervalTime = 1E3 / e.frameRate, this._initFrame())
			};
			a.prototype._reset = function() {
				this._frames = null;
				this._playTimes = 0;
				this._isPlaying = !1;
				this.setIsStopped(!0);
				this._currentFrameNum = 0;
				this._nextFrameNum = 1;
				this._passedTime = this._displayedKeyFrameNum = 0;
				this._eventPool = []
			};
			a.prototype._initFrame = function() {
				this._movieClipData._isTextureValid() && (this._advanceFrame(), this._constructFrame())
			};
			a.prototype._render = function(e) {
				var b = this._textureToRender;
				if (this._texture_to_render = b) {
					var c = Math.round(b._offsetX),
						d = Math.round(b._offsetY),
						g = b._bitmapWidth || b._textureWidth,
						f = b._bitmapHeight || b._textureHeight,
						l = Math.round(g),
						n = Math.round(f);
					a.renderFilter.drawImage(e, this, b._bitmapX, b._bitmapY, g, f, c, d, l, n)
				}
			};
			a.prototype._measureBounds = function() {
				var e = this._textureToRender;
				return e ? b.Rectangle.identity.initialize(e._offsetX, e._offsetY, e._textureWidth, e._textureHeight) : c.prototype._measureBounds.call(this)
			};
			a.prototype._onAddToStage = function() {
				c.prototype._onAddToStage.call(this);
				this._isAddedToStage = !0;
				this._isPlaying && 1 < this._totalFrames && this.setIsStopped(!1)
			};
			a.prototype._onRemoveFromStage = function() {
				c.prototype._onRemoveFromStage.call(this);
				this._isAddedToStage = !1;
				this.setIsStopped(!0)
			};
			a.prototype._getFrameLabelByName = function(e, a) {
				void 0 === a && (a = !1);
				a && (e = e.toLowerCase());
				var b = this._frameLabels;
				if (b) for (var c = null, d = 0; d < b.length; d++) if (c = b[d], a ? c.name.toLowerCase() === e : c.name === e) return c;
				return null
			};
			a.prototype._getFrameLabelByFrame = function(a) {
				var b = this._frameLabels;
				if (b) for (var c = null, d = 0; d < b.length; d++) if (c = b[d], c.frame === a) return c;
				return null
			};
			a.prototype._getFrameLabelForFrame = function(a) {
				var b = null,
					c = null,
					d = this._frameLabels;
				if (d) for (var g = 0; g < d.length; g++) {
					c = d[g];
					if (c.frame > a) break;
					b = c
				}
				return b
			};
			a.prototype.play = function(a) {
				void 0 === a && (a = 0);
				this._isPlaying = !0;
				this.setPlayTimes(a);
				1 < this._totalFrames && this._isAddedToStage && this.setIsStopped(!1)
			};
			a.prototype.stop = function() {
				this._isPlaying = !1;
				this.setIsStopped(!0)
			};
			a.prototype.prevFrame = function() {
				this.gotoAndStop(this._currentFrameNum - 1)
			};
			a.prototype.nextFrame = function() {
				this.gotoAndStop(this._currentFrameNum + 1)
			};
			a.prototype.gotoAndPlay = function(a, k) {
				void 0 === k && (k = 0);
				if (0 === arguments.length || 2 < arguments.length) throw Error(b.getString(1022, "MovieClip.gotoAndPlay()"));
				this.play(k);
				this._gotoFrame(a)
			};
			a.prototype.gotoAndStop = function(a) {
				if (1 != arguments.length) throw Error(b.getString(1022, "MovieClip.gotoAndStop()"));
				this.stop();
				this._gotoFrame(a)
			};
			a.prototype._gotoFrame = function(a) {
				var k;
				if ("string" === typeof a) k = this._getFrameLabelByName(a).frame;
				else if (k = parseInt(a + "", 10), k != a) throw Error(b.getString(1022, "Frame Label Not Found"));
				1 > k ? k = 1 : k > this._totalFrames && (k = this._totalFrames);
				k !== this._nextFrameNum && (this._nextFrameNum = k, this._advanceFrame(), this._constructFrame(), this._handlePendingEvent())
			};
			a.prototype._advanceTime = function(a) {
				var k = this._frameIntervalTime;
				a = this._passedTime + a;
				this._passedTime = a % k;
				k = a / k;
				if (!(1 > k)) {
					for (; 1 <= k;) {
						k--;
						this._nextFrameNum++;
						if (this._nextFrameNum > this._totalFrames) if (-1 == this._playTimes) this._eventPool.push(b.Event.LOOP_COMPLETE), this._nextFrameNum = 1;
						else if (this._playTimes--, 0 < this._playTimes) this._eventPool.push(b.Event.LOOP_COMPLETE), this._nextFrameNum = 1;
						else {
							this._nextFrameNum = this._totalFrames;
							this._eventPool.push(b.Event.COMPLETE);
							this.stop();
							break
						}
						this._advanceFrame()
					}
					this._constructFrame();
					this._handlePendingEvent()
				}
			};
			a.prototype._advanceFrame = function() {
				this._currentFrameNum = this._nextFrameNum
			};
			a.prototype._constructFrame = function() {
				var a = this._currentFrameNum;
				this._displayedKeyFrameNum != a && (this._textureToRender = this._movieClipData.getTextureByFrame(a), this._displayedKeyFrameNum = a)
			};
			a.prototype._handlePendingEvent = function() {
				if (0 != this._eventPool.length) {
					this._eventPool.reverse();
					for (var a = this._eventPool, k = a.length, c = !1, d = !1, g = 0; g < k; g++) {
						var f = a.pop();
						f == b.Event.LOOP_COMPLETE ? d = !0 : f == b.Event.COMPLETE ? c = !0 : this.dispatchEventWith(f)
					}
					d && this.dispatchEventWith(b.Event.LOOP_COMPLETE);
					c && this.dispatchEventWith(b.Event.COMPLETE)
				}
			};
			Object.defineProperty(a.prototype, "totalFrames", {
				get: function() {
					return this._totalFrames
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "currentFrame", {
				get: function() {
					return this._currentFrameNum
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "currentFrameLabel", {
				get: function() {
					var a = this._getFrameLabelByFrame(this._currentFrameNum);
					return a && a.name
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "currentLabel", {
				get: function() {
					var a = this._getFrameLabelForFrame(this._currentFrameNum);
					return a ? a.name : null
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "frameRate", {
				get: function() {
					return this.movieClipData.frameRate
				},
				set: function(a) {
					a != this._movieClipData.frameRate && (this._movieClipData.frameRate = a, this._frameIntervalTime = 1E3 / this._movieClipData.frameRate)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "isPlaying", {
				get: function() {
					return this._isPlaying
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "movieClipData", {
				get: function() {
					return this._movieClipData
				},
				set: function(a) {
					this._setMovieClipData(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setMovieClipData = function(a) {
				this._movieClipData != a && (this._movieClipData = a, this._init())
			};
			a.prototype.setPlayTimes = function(a) {
				if (0 > a || 1 <= a) this._playTimes = 0 > a ? -1 : Math.floor(a)
			};
			a.prototype.setIsStopped = function(a) {
				this._isStopped != a && ((this._isStopped = a) ? (this._playTimes = 0, b.Ticker.getInstance().unregister(this._advanceTime, this)) : (this._playTimes = 0 == this._playTimes ? 1 : this._playTimes, b.Ticker.getInstance().register(this._advanceTime, this)))
			};
			a.renderFilter = b.RenderFilter.getInstance();
			return a
		}(b.DisplayObject);
	b.MovieClip = d;
	d.prototype.__class__ = "egret.MovieClip"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a(a, k) {
				b.call(this);
				this._name = a;
				this._frame = k | 0
			}
			__extends(a, b);
			Object.defineProperty(a.prototype, "name", {
				get: function() {
					return this._name
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "frame", {
				get: function() {
					return this._frame
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.clone = function() {
				return new a(this._name, this._frame)
			};
			return a
		}(b.EventDispatcher);
	b.FrameLabel = d;
	d.prototype.__class__ = "egret.FrameLabel"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this._mcData = null;
				this.numFrames = 1;
				this.frames = [];
				this.labels = null;
				this.frameRate = 0;
				this.spriteSheet = this.textureData = null
			}
			__extends(a, c);
			a.prototype._init = function(a, b, c) {
				this.textureData = b;
				this.spriteSheet = c;
				this._setMCData(a)
			};
			a.prototype.getKeyFrameData = function(a) {
				a = this.frames[a - 1];
				a.frame && (a = this.frames[a.frame - 1]);
				return a
			};
			a.prototype.getTextureByFrame = function(a) {
				a = this.getKeyFrameData(a);
				if (a.res) {
					var b = this.getTextureByResName(a.res);
					b._offsetX = a.x | 0;
					b._offsetY = a.y | 0;
					return b
				}
				return null
			};
			a.prototype.getTextureByResName = function(a) {
				var b = this.spriteSheet.getTexture(a);
				b || (b = this.textureData[a], b = this.spriteSheet.createTexture(a, b.x, b.y, b.w, b.h));
				return b
			};
			a.prototype._isDataValid = function() {
				return 0 < this.frames.length
			};
			a.prototype._isTextureValid = function() {
				return null != this.textureData && null != this.spriteSheet
			};
			a.prototype._fillMCData = function(a) {
				this.frameRate = a.frameRate || 24;
				this._fillFramesData(a.frames);
				this._fillFrameLabelsData(a.labels)
			};
			a.prototype._fillFramesData = function(a) {
				for (var b = this.frames, c = a ? a.length : 0, d, g = 0; g < c; g++) if (d = a[g], b.push(d), d.duration) {
					var f = parseInt(d.duration);
					if (1 < f) {
						d = b.length;
						for (var l = 1; l < f; l++) b.push({
							frame: d
						})
					}
				}
				this.numFrames = b.length
			};
			a.prototype._fillFrameLabelsData = function(a) {
				if (a) {
					var c = a.length;
					if (0 < c) {
						this.labels = [];
						for (var d = 0; d < c; d++) {
							var h = a[d];
							this.labels.push(new b.FrameLabel(h.name, h.frame))
						}
					}
				}
			};
			Object.defineProperty(a.prototype, "mcData", {
				get: function() {
					return this._mcData
				},
				set: function(a) {
					this._setMCData(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setMCData = function(a) {
				this._mcData != a && (this._mcData = a) && this._fillMCData(a)
			};
			return a
		}(b.HashObject);
	b.MovieClipData = d;
	d.prototype.__class__ = "egret.MovieClipData"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(a, b) {
				c.call(this);
				this.enableCache = !0;
				this._mcDataCache = {};
				this._mcDataSet = a;
				this.setTexture(b)
			}
			__extends(a, c);
			a.prototype.clearCache = function() {
				this._mcDataCache = {}
			};
			a.prototype.generateMovieClipData = function(a) {
				void 0 === a && (a = "");
				if ("" == a && this._mcDataSet) for (a in this._mcDataSet.mc) break;
				if ("" == a) return null;
				var c = this._findFromCache(a, this._mcDataCache);
				c || (c = new b.MovieClipData, this._fillData(a, c, this._mcDataCache));
				return c
			};
			a.prototype._findFromCache = function(a, b) {
				return this.enableCache && b[a] ? b[a] : null
			};
			a.prototype._fillData = function(a, b, c) {
				if (this._mcDataSet) {
					var d = this._mcDataSet.mc[a];
					d && (b._init(d, this._mcDataSet.res, this._spriteSheet), this.enableCache && (c[a] = b))
				}
			};
			Object.defineProperty(a.prototype, "mcDataSet", {
				get: function() {
					return this._mcDataSet
				},
				set: function(a) {
					this._mcDataSet = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "texture", {
				set: function(a) {
					this.setTexture(a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "spriteSheet", {
				get: function() {
					return this._spriteSheet
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.setTexture = function(a) {
				this._spriteSheet = a ? new b.SpriteSheet(a) : null
			};
			return a
		}(b.EventDispatcher);
	b.MovieClipDataFactory = d;
	d.prototype.__class__ = "egret.MovieClipDataFactory"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a() {
				b.call(this);
				this._scaleY = this._scaleX = 1;
				this._size = 30;
				this._color = "#FFFFFF";
				this._fontFamily = "Arial";
				this._italic = this._bold = !1;
				this._textAlign = "left";
				this._multiline = this._visible = !1;
				this._maxChars = 0
			}
			__extends(a, b);
			a.prototype._getText = function() {
				return null
			};
			a.prototype._setText = function(a) {};
			a.prototype._setTextType = function(a) {};
			a.prototype._getTextType = function() {
				return null
			};
			a.prototype._open = function(a, b, c, d) {};
			a.prototype._show = function() {};
			a.prototype._add = function() {};
			a.prototype._remove = function() {};
			a.prototype._hide = function() {};
			a.prototype._addListeners = function() {};
			a.prototype._removeListeners = function() {};
			a.prototype._setScale = function(a, b) {
				this._scaleX = a;
				this._scaleY = b
			};
			a.prototype.changePosition = function(a, b) {};
			a.prototype._setSize = function(a) {
				this._size = a
			};
			a.prototype._setTextColor = function(a) {
				this._color = a
			};
			a.prototype._setTextFontFamily = function(a) {
				this._fontFamily = a
			};
			a.prototype._setBold = function(a) {
				this._bold = a
			};
			a.prototype._setItalic = function(a) {
				this._italic = a
			};
			a.prototype._setTextAlign = function(a) {
				this._textAlign = a
			};
			a.prototype._setVisible = function(a) {
				this._visible = a
			};
			a.prototype._setWidth = function(a) {};
			a.prototype._setHeight = function(a) {};
			a.prototype._setMultiline = function(a) {
				this._multiline = a
			};
			a.prototype._setMaxChars = function(a) {
				this._maxChars = a
			};
			a.prototype._resetStageText = function() {};
			a.create = function() {
				return null
			};
			return a
		}(b.EventDispatcher);
	b.StageText = d;
	d.prototype.__class__ = "egret.StageText"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function b() {}
			b.GET = "get";
			b.POST = "post";
			return b
		}();
	b.URLRequestMethod = d;
	d.prototype.__class__ = "egret.URLRequestMethod"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function b() {}
			b.BINARY = "binary";
			b.TEXT = "text";
			b.VARIABLES = "variables";
			b.TEXTURE = "texture";
			b.SOUND = "sound";
			return b
		}();
	b.URLLoaderDataFormat = d;
	d.prototype.__class__ = "egret.URLLoaderDataFormat"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a(a) {
				void 0 === a && (a = null);
				b.call(this);
				this.variables = null;
				null !== a && this.decode(a)
			}
			__extends(a, b);
			a.prototype.decode = function(a) {
				this.variables || (this.variables = {});
				a = a.split("+").join(" ");
				for (var b, c = /[?&]?([^=]+)=([^&]*)/g; b = c.exec(a);) {
					var d = decodeURIComponent(b[1]);
					b = decodeURIComponent(b[2]);
					if (!1 == d in this.variables) this.variables[d] = b;
					else {
						var g = this.variables[d];
						g instanceof Array ? g.push(b) : this.variables[d] = [g, b]
					}
				}
			};
			a.prototype.toString = function() {
				if (!this.variables) return "";
				var a = this.variables,
					b = [],
					c;
				for (c in a) b.push(this.encodeValue(c, a[c]));
				return b.join("&")
			};
			a.prototype.encodeValue = function(a, b) {
				return b instanceof Array ? this.encodeArray(a, b) : encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
			a.prototype.encodeArray = function(a, b) {
				return a ? 0 == b.length ? encodeURIComponent(a) + "=" : b.map(function(b) {
					return encodeURIComponent(a) + "=" + encodeURIComponent(b)
				}).join("&") : ""
			};
			return a
		}(b.HashObject);
	b.URLVariables = d;
	d.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			return function(b, a) {
				this.value = this.name = "";
				this.name = b;
				this.value = a
			}
		}();
	b.URLRequestHeader = d;
	d.prototype.__class__ = "egret.URLRequestHeader"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(a) {
				void 0 === a && (a = null);
				c.call(this);
				this.data = null;
				this.method = b.URLRequestMethod.GET;
				this.url = "";
				this.url = a
			}
			__extends(a, c);
			return a
		}(b.HashObject);
	b.URLRequest = d;
	d.prototype.__class__ = "egret.URLRequest"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(a) {
				void 0 === a && (a = null);
				c.call(this);
				this.dataFormat = b.URLLoaderDataFormat.TEXT;
				this._request = this.data = null;
				this._status = -1;
				a && this.load(a)
			}
			__extends(a, c);
			a.prototype.load = function(a) {
				this._request = a;
				this.data = null;
				b.MainContext.instance.netContext.proceed(this)
			};
			a.prototype.__recycle = function() {
				this.data = this._request = null
			};
			return a
		}(b.EventDispatcher);
	b.URLLoader = d;
	d.prototype.__class__ = "egret.URLLoader"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this._sourceHeight = this._sourceWidth = this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0;
				this._bitmapData = null
			}
			__extends(a, c);
			Object.defineProperty(a.prototype, "textureWidth", {
				get: function() {
					return this._textureWidth
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "textureHeight", {
				get: function() {
					return this._textureHeight
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "bitmapData", {
				get: function() {
					return this._bitmapData
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setBitmapData = function(a) {
				var c = b.MainContext.instance.rendererContext._texture_scale_factor;
				this._bitmapData = a;
				this._sourceWidth = a.width;
				this._sourceHeight = a.height;
				this._textureWidth = this._sourceWidth * c;
				this._textureHeight = this._sourceHeight * c;
				this._bitmapWidth = this._textureWidth;
				this._bitmapHeight = this._textureHeight;
				this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
			};
			a.prototype.getPixel32 = function(a, b) {
				return this._bitmapData.getContext("2d").getImageData(a, b, 1, 1).data
			};
			return a
		}(b.HashObject);
	b.Texture = d;
	d.prototype.__class__ = "egret.Texture"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this)
			}
			__extends(a, c);
			a.prototype.init = function() {
				this._bitmapData = document.createElement("canvas");
				this.renderContext = b.RendererContext.createRendererContext(this._bitmapData)
			};
			a.prototype.drawToTexture = function(e, c, d) {
				var h = c || e.getBounds(b.Rectangle.identity);
				if (0 == h.width || 0 == h.height) return !1;
				this._bitmapData || this.init();
				var g = h.x,
					f = h.y;
				c = h.width;
				var h = h.height,
					l = b.MainContext.instance.rendererContext._texture_scale_factor,
					h = h / l;
				c = Math.round(c / l);
				h = Math.round(h);
				this.setSize(c, h);
				this.begin();
				e._worldTransform.identity();
				e._worldTransform.a = 1 / l;
				e._worldTransform.d = 1 / l;
				d && (e._worldTransform.a *= d, e._worldTransform.d *= d);
				d = e._anchorOffsetX;
				var n = e._anchorOffsetY;
				if (0 != e._anchorX || 0 != e._anchorY) d = e._anchorX * c, n = e._anchorY * h;
				this._offsetX = g + d;
				this._offsetY = f + n;
				e._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
				e.worldAlpha = 1;
				if (e instanceof b.DisplayObjectContainer) for (g = e._children, f = 0, d = g.length; f < d; f++) g[f]._updateTransform();
				this.renderContext.setTransform(e._worldTransform);
				g = b.RenderFilter.getInstance();
				f = g._drawAreaList.concat();
				g._drawAreaList.length = 0;
				this.renderContext.clearScreen();
				this.renderContext.onRenderStart();
				b.RendererContext.deleteTexture(this);
				e._filter && this.renderContext.setGlobalFilter(e._filter);
				e._colorTransform && this.renderContext.setGlobalColorTransform(e._colorTransform.matrix);
				(d = e.mask || e._scrollRect) && this.renderContext.pushMask(d);
				n = b.MainContext.__use_new_draw;
				b.MainContext.__use_new_draw = !1;
				e._render(this.renderContext);
				b.MainContext.__use_new_draw = n;
				d && this.renderContext.popMask();
				e._colorTransform && this.renderContext.setGlobalColorTransform(null);
				e._filter && this.renderContext.setGlobalFilter(null);
				a.identityRectangle.width = c;
				a.identityRectangle.height = h;
				g.addDrawArea(a.identityRectangle);
				this.renderContext.onRenderFinish();
				g._drawAreaList = f;
				this._sourceWidth = c;
				this._sourceHeight = h;
				this._textureWidth = this._sourceWidth * l;
				this._textureHeight = this._sourceHeight * l;
				this.end();
				return !0
			};
			a.prototype.setSize = function(a, b) {
				var c = this._bitmapData;
				c.width = a;
				c.height = b;
				c.style.width = a + "px";
				c.style.height = b + "px";
				this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = a, this.renderContext._cacheCanvas.height = b)
			};
			a.prototype.begin = function() {};
			a.prototype.end = function() {};
			a.prototype.dispose = function() {
				this._bitmapData && (this.renderContext = this._bitmapData = null)
			};
			a.identityRectangle = new b.Rectangle;
			return a
		}(b.Texture);
	b.RenderTexture = d;
	d.prototype.__class__ = "egret.RenderTexture"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this.renderCost = 0;
				this._texture_scale_factor = 1;
				this.profiler = b.Profiler.getInstance();
				a.blendModesForGL || a.initBlendMode()
			}
			__extends(a, c);
			Object.defineProperty(a.prototype, "texture_scale_factor", {
				get: function() {
					return this._texture_scale_factor
				},
				set: function(a) {
					this._setTextureScaleFactor(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._setTextureScaleFactor = function(a) {
				this._texture_scale_factor = a
			};
			a.prototype.clearScreen = function() {};
			a.prototype.clearRect = function(a, b, c, d) {};
			a.prototype.drawImage = function(a, b, c, d, g, f, l, n, p, q) {
				this.profiler.onDrawImage()
			};
			a.prototype.drawImageScale9 = function(a, b, c, d, g, f, l, n, p, q) {
				return !1
			};
			a.prototype._addOneDraw = function() {
				this.profiler.onDrawImage()
			};
			a.prototype.setTransform = function(a) {};
			a.prototype.setAlpha = function(a, b) {};
			a.prototype.setupFont = function(a, b) {};
			a.prototype.measureText = function(a) {
				return 0
			};
			a.prototype.drawText = function(a, b, c, d, g, f) {
				this.profiler.onDrawImage()
			};
			a.prototype.strokeRect = function(a, b, c, d, g) {};
			a.prototype.pushMask = function(a) {};
			a.prototype.popMask = function() {};
			a.prototype.onRenderStart = function() {};
			a.prototype.onRenderFinish = function() {};
			a.prototype.setGlobalColorTransform = function(a) {};
			a.prototype.setGlobalFilter = function(a) {};
			a.createRendererContext = function(a) {
				return null
			};
			a.deleteTexture = function(a) {
				var c = b.MainContext.instance.rendererContext.gl;
				if (a = a._bitmapData) {
					var d = a.webGLTexture;
					if (d && c) for (var h in d) c.deleteTexture(d[h]);
					a.webGLTexture = null
				}
			};
			a.initBlendMode = function() {
				a.blendModesForGL = {};
				a.blendModesForGL[b.BlendMode.NORMAL] = [1, 771];
				a.blendModesForGL[b.BlendMode.ADD] = [770, 1];
				a.blendModesForGL[b.BlendMode.ERASE] = [0, 771];
				a.blendModesForGL[b.BlendMode.ERASE_REVERSE] = [0, 770]
			};
			a.registerBlendModeForGL = function(e, c, d, h) {
				a.blendModesForGL[e] && !h ? b.Logger.warningWithErrorId(1005, e) : a.blendModesForGL[e] = [c, d]
			};
			a.imageSmoothingEnabled = !0;
			a.blendModesForGL = null;
			return a
		}(b.HashObject);
	b.RendererContext = d;
	d.prototype.__class__ = "egret.RendererContext"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function b() {}
			b.MOUSE = "mouse";
			b.TOUCH = "touch";
			b.mode = "touch";
			return b
		}();
	b.InteractionMode = d;
	d.prototype.__class__ = "egret.InteractionMode"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this._currentTouchTarget = {};
				this.maxTouches = 2;
				this.touchDownTarget = {};
				this.touchingIdentifiers = [];
				this.lastTouchY = this.lastTouchX = -1
			}
			__extends(a, c);
			a.prototype.run = function() {};
			a.prototype.getTouchData = function(a, b, c) {
				var d = this._currentTouchTarget[a];
				null == d && (d = {}, this._currentTouchTarget[a] = d);
				d.stageX = b;
				d.stageY = c;
				d.identifier = a;
				return d
			};
			a.prototype.dispatchEvent = function(a, c) {
				b.TouchEvent.dispatchTouchEvent(c.target, a, c.identifier, c.stageX, c.stageY, !1, !1, !1, !0 == this.touchDownTarget[c.identifier])
			};
			a.prototype.onTouchBegan = function(a, c, d) {
				if (this.touchingIdentifiers.length != this.maxTouches) {
					var h = b.MainContext.instance.stage.hitTest(a, c);
					h && (a = this.getTouchData(d, a, c), this.touchDownTarget[d] = !0, a.target = h, a.beginTarget = h, this.dispatchEvent(b.TouchEvent.TOUCH_BEGIN, a));
					this.touchingIdentifiers.push(d)
				}
			};
			a.prototype.onTouchMove = function(a, c, d) {
				if (-1 != this.touchingIdentifiers.indexOf(d) && (a != this.lastTouchX || c != this.lastTouchY)) {
					this.lastTouchX = a;
					this.lastTouchY = c;
					var h = b.MainContext.instance.stage.hitTest(a, c);
					h && (a = this.getTouchData(d, a, c), a.target = h, this.dispatchEvent(b.TouchEvent.TOUCH_MOVE, a))
				}
			};
			a.prototype.onTouchEnd = function(a, c, d) {
				var h = this.touchingIdentifiers.indexOf(d); - 1 != h && (this.touchingIdentifiers.splice(h, 1), h = b.MainContext.instance.stage.hitTest(a, c)) && (a = this.getTouchData(d, a, c), delete this.touchDownTarget[d], d = a.beginTarget, a.target = h, this.dispatchEvent(b.TouchEvent.TOUCH_END, a), d == h ? this.dispatchEvent(b.TouchEvent.TOUCH_TAP, a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(b.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
			};
			return a
		}(b.HashObject);
	b.TouchContext = d;
	d.prototype.__class__ = "egret.TouchContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this)
			}
			__extends(a, c);
			a.prototype.proceed = function(a) {};
			a._getUrl = function(a) {
				var c = a.url; - 1 == c.indexOf("?") && a.method == b.URLRequestMethod.GET && a.data && a.data instanceof b.URLVariables && (c = c + "?" + a.data.toString());
				return c
			};
			a.prototype.getChangeList = function() {
				return []
			};
			return a
		}(b.HashObject);
	b.NetContext = d;
	d.prototype.__class__ = "egret.NetContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a() {
				b.call(this);
				this.frameRate = 60
			}
			__extends(a, b);
			a.prototype.executeMainLoop = function(a, b) {};
			return a
		}(b.HashObject);
	b.DeviceContext = d;
	d.prototype.__class__ = "egret.DeviceContext"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function b() {}
			b.call = function(a, e) {};
			b.addCallback = function(a, e) {};
			return b
		}();
	b.ExternalInterface = d;
	d.prototype.__class__ = "egret.ExternalInterface"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this.trans = null;
				this.ua = navigator.userAgent.toLowerCase();
				this.trans = this._getTrans()
			}
			__extends(a, c);
			a.getInstance = function() {
				null == a.instance && (a.instance = new a);
				return a.instance
			};
			Object.defineProperty(a.prototype, "isMobile", {
				get: function() {
					b.Logger.warningWithErrorId(1E3);
					return b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype._getHeader = function(a) {
				if ("transform" in a) return "";
				for (var b = ["webkit", "ms", "Moz", "O"], c = 0; c < b.length; c++) if (b[c] + "Transform" in a) return b[c];
				return ""
			};
			a.prototype._getTrans = function() {
				var a = document.createElement("div").style,
					a = this._getHeader(a);
				return "" == a ? "transform" : a + "Transform"
			};
			a.prototype.$new = function(a) {
				return this.$(document.createElement(a))
			};
			a.prototype.$ = function(e) {
				var c = document;
				if (e = e instanceof HTMLElement ? e : c.querySelector(e)) e.find = e.find || this.$, e.hasClass = e.hasClass ||
				function(a) {
					return this.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
				}, e.addClass = e.addClass ||
				function(a) {
					this.hasClass(a) || (this.className && (this.className += " "), this.className += a);
					return this
				}, e.removeClass = e.removeClass ||
				function(a) {
					this.hasClass(a) && (this.className = this.className.replace(a, ""));
					return this
				}, e.remove = e.remove ||
				function() {}, e.appendTo = e.appendTo ||
				function(a) {
					a.appendChild(this);
					return this
				}, e.prependTo = e.prependTo ||
				function(a) {
					a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
					return this
				}, e.transforms = e.transforms ||
				function() {
					this.style[a.getInstance().trans] = a.getInstance().translate(this.position) + a.getInstance().rotate(this.rotation) + a.getInstance().scale(this.scale) + a.getInstance().skew(this.skew);
					return this
				}, e.position = e.position || {
					x: 0,
					y: 0
				}, e.rotation = e.rotation || 0, e.scale = e.scale || {
					x: 1,
					y: 1
				}, e.skew = e.skew || {
					x: 0,
					y: 0
				}, e.translates = function(a, e) {
					this.position.x = a;
					this.position.y = e - b.MainContext.instance.stage.stageHeight;
					this.transforms();
					return this
				}, e.rotate = function(a) {
					this.rotation = a;
					this.transforms();
					return this
				}, e.resize = function(a, e) {
					this.scale.x = a;
					this.scale.y = e;
					this.transforms();
					return this
				}, e.setSkew = function(a, e) {
					this.skew.x = a;
					this.skew.y = e;
					this.transforms();
					return this
				};
				return e
			};
			a.prototype.translate = function(a) {
				return "translate(" + a.x + "px, " + a.y + "px) "
			};
			a.prototype.rotate = function(a) {
				return "rotate(" + a + "deg) "
			};
			a.prototype.scale = function(a) {
				return "scale(" + a.x + ", " + a.y + ") "
			};
			a.prototype.skew = function(a) {
				return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
			};
			return a
		}(b.HashObject);
	b.Browser = d;
	d.prototype.__class__ = "egret.Browser"
})(egret || (egret = {}));
(function(b) {
	(function(b) {
		b.getItem = function(b) {
			return null
		};
		b.setItem = function(b, a) {
			return !1
		};
		b.removeItem = function(b) {};
		b.clear = function() {}
	})(b.localStorage || (b.localStorage = {}))
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function c() {}
			c.parse = function(a) {
				a = b.SAXParser.getInstance().parserXML(a);
				if (!a || !a.childNodes) return null;
				for (var e = a.childNodes.length, d = !1, m = 0; m < e; m++) {
					var h = a.childNodes[m];
					if (1 == h.nodeType) {
						d = !0;
						break
					}
				}
				return d ? c.parseNode(h) : null
			};
			c.parseNode = function(a) {
				if (!a || 1 != a.nodeType) return null;
				var e = {};
				e.localName = a.localName;
				e.name = a.nodeName;
				a.namespaceURI && (e.namespace = a.namespaceURI);
				a.prefix && (e.prefix = a.prefix);
				for (var b = a.attributes, d = b.length, h = 0; h < d; h++) {
					var g = b[h],
						f = g.name;
					0 != f.indexOf("xmlns:") && (e["$" + f] = g.value)
				}
				b = a.childNodes;
				d = b.length;
				for (h = 0; h < d; h++) if (g = c.parseNode(b[h])) e.children || (e.children = []), g.parent = e, e.children.push(g);
				!e.children && (a = a.textContent.trim()) && (e.text = a);
				return e
			};
			c.findChildren = function(a, e, b) {
				b ? b.length = 0 : b = [];
				c.findByPath(a, e, b);
				return b
			};
			c.findByPath = function(a, e, b) {
				var d = e.indexOf("."),
					h; - 1 == d ? (h = e, d = !0) : (h = e.substring(0, d), e = e.substring(d + 1), d = !1);
				if (a = a.children) for (var g = a.length, f = 0; f < g; f++) {
					var l = a[f];
					l.localName == h && (d ? b.push(l) : c.findByPath(l, e, b))
				}
			};
			c.getAttributes = function(a, e) {
				e ? e.length = 0 : e = [];
				for (var b in a)"$" == b.charAt(0) && e.push(b.substring(1));
				return e
			};
			return c
		}();
	b.XML = d;
	d.prototype.__class__ = "egret.XML"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function a() {}
			a.LITTLE_ENDIAN = "LITTLE_ENDIAN";
			a.BIG_ENDIAN = "BIG_ENDIAN";
			return a
		}();
	b.Endian = d;
	d.prototype.__class__ = "egret.Endian";
	var c = function() {
			function a(a) {
				this.BUFFER_EXT_SIZE = 0;
				this.EOF_code_point = this.EOF_byte = -1;
				this._setArrayBuffer(a || new ArrayBuffer(this.BUFFER_EXT_SIZE));
				this.endian = d.BIG_ENDIAN
			}
			a.prototype._setArrayBuffer = function(a) {
				this.write_position = a.byteLength;
				this.data = new DataView(a);
				this._position = 0
			};
			a.prototype.setArrayBuffer = function(a) {};
			Object.defineProperty(a.prototype, "buffer", {
				get: function() {
					return this.data.buffer
				},
				set: function(a) {
					this.data = new DataView(a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "dataView", {
				get: function() {
					return this.data
				},
				set: function(a) {
					this.data = a;
					this.write_position = a.byteLength
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "bufferOffset", {
				get: function() {
					return this.data.byteOffset
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "position", {
				get: function() {
					return this._position
				},
				set: function(a) {
					this._position < a && !this.validate(a - this._position) || (this._position = a, this.write_position = a > this.write_position ? a : this.write_position)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "length", {
				get: function() {
					return this.write_position
				},
				set: function(a) {
					this.validateBuffer(a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a.prototype, "bytesAvailable", {
				get: function() {
					return this.data.byteLength - this._position
				},
				enumerable: !0,
				configurable: !0
			});
			a.prototype.clear = function() {
				this._setArrayBuffer(new ArrayBuffer(this.BUFFER_EXT_SIZE))
			};
			a.prototype.readBoolean = function() {
				return this.validate(a.SIZE_OF_BOOLEAN) ? 0 != this.data.getUint8(this.position++) : null
			};
			a.prototype.readByte = function() {
				return this.validate(a.SIZE_OF_INT8) ? this.data.getInt8(this.position++) : null
			};
			a.prototype.readBytes = function(e, b, c) {
				void 0 === b && (b = 0);
				void 0 === c && (c = 0);
				if (0 == c) c = this.bytesAvailable;
				else if (!this.validate(c)) return null;
				e ? e.validateBuffer(c) : e = new a(new ArrayBuffer(c));
				for (var d = 0; d < c; d++) e.data.setUint8(d + b, this.data.getUint8(this.position++))
			};
			a.prototype.readDouble = function() {
				if (!this.validate(a.SIZE_OF_FLOAT64)) return null;
				var e = this.data.getFloat64(this.position, this.endian == d.LITTLE_ENDIAN);
				this.position += a.SIZE_OF_FLOAT64;
				return e
			};
			a.prototype.readFloat = function() {
				if (!this.validate(a.SIZE_OF_FLOAT32)) return null;
				var e = this.data.getFloat32(this.position, this.endian == d.LITTLE_ENDIAN);
				this.position += a.SIZE_OF_FLOAT32;
				return e
			};
			a.prototype.readInt = function() {
				if (!this.validate(a.SIZE_OF_INT32)) return null;
				var e = this.data.getInt32(this.position, this.endian == d.LITTLE_ENDIAN);
				this.position += a.SIZE_OF_INT32;
				return e
			};
			a.prototype.readMultiByte = function(a, b) {
				return this.validate(a) ? "" : null
			};
			a.prototype.readShort = function() {
				if (!this.validate(a.SIZE_OF_INT16)) return null;
				var e = this.data.getInt16(this.position, this.endian == d.LITTLE_ENDIAN);
				this.position += a.SIZE_OF_INT16;
				return e
			};
			a.prototype.readUnsignedByte = function() {
				return this.validate(a.SIZE_OF_UINT8) ? this.data.getUint8(this.position++) : null
			};
			a.prototype.readUnsignedInt = function() {
				if (!this.validate(a.SIZE_OF_UINT32)) return null;
				var e = this.data.getUint32(this.position, this.endian == d.LITTLE_ENDIAN);
				this.position += a.SIZE_OF_UINT32;
				return e
			};
			a.prototype.readUnsignedShort = function() {
				if (!this.validate(a.SIZE_OF_UINT16)) return null;
				var e = this.data.getUint16(this.position, this.endian == d.LITTLE_ENDIAN);
				this.position += a.SIZE_OF_UINT16;
				return e
			};
			a.prototype.readUTF = function() {
				if (!this.validate(a.SIZE_OF_UINT16)) return null;
				var e = this.data.getUint16(this.position, this.endian == d.LITTLE_ENDIAN);
				this.position += a.SIZE_OF_UINT16;
				return 0 < e ? this.readUTFBytes(e) : ""
			};
			a.prototype.readUTFBytes = function(a) {
				if (!this.validate(a)) return null;
				var b = new Uint8Array(this.buffer, this.bufferOffset + this.position, a);
				this.position += a;
				return this.decodeUTF8(b)
			};
			a.prototype.writeBoolean = function(e) {
				this.validateBuffer(a.SIZE_OF_BOOLEAN);
				this.data.setUint8(this.position++, e ? 1 : 0)
			};
			a.prototype.writeByte = function(e) {
				this.validateBuffer(a.SIZE_OF_INT8);
				this.data.setInt8(this.position++, e)
			};
			a.prototype.writeBytes = function(a, b, c) {
				void 0 === b && (b = 0);
				void 0 === c && (c = 0);
				if (!(0 > b || 0 > c) && (c = 0 == c ? a.length - b : Math.min(a.length - b, c), 0 < c)) {
					this.validateBuffer(c);
					a = new DataView(a.buffer);
					for (var d = b; d < c + b; d++) this.data.setUint8(this.position++, a.getUint8(d))
				}
			};
			a.prototype.writeDouble = function(e) {
				this.validateBuffer(a.SIZE_OF_FLOAT64);
				this.data.setFloat64(this.position, e, this.endian == d.LITTLE_ENDIAN);
				this.position += a.SIZE_OF_FLOAT64
			};
			a.prototype.writeFloat = function(e) {
				this.validateBuffer(a.SIZE_OF_FLOAT32);
				this.data.setFloat32(this.position, e, this.endian == d.LITTLE_ENDIAN);
				this.position += a.SIZE_OF_FLOAT32
			};
			a.prototype.writeInt = function(e) {
				this.validateBuffer(a.SIZE_OF_INT32);
				this.data.setInt32(this.position, e, this.endian == d.LITTLE_ENDIAN);
				this.position += a.SIZE_OF_INT32
			};
			a.prototype.writeShort = function(e) {
				this.validateBuffer(a.SIZE_OF_INT16);
				this.data.setInt16(this.position, e, this.endian == d.LITTLE_ENDIAN);
				this.position += a.SIZE_OF_INT16
			};
			a.prototype.writeUnsignedInt = function(e) {
				this.validateBuffer(a.SIZE_OF_UINT32);
				this.data.setUint32(this.position, e, this.endian == d.LITTLE_ENDIAN);
				this.position += a.SIZE_OF_UINT32
			};
			a.prototype.writeUTF = function(e) {
				e = this.encodeUTF8(e);
				var b = e.length;
				this.validateBuffer(a.SIZE_OF_UINT16 + b);
				this.data.setUint16(this.position, b, this.endian === d.LITTLE_ENDIAN);
				this.position += a.SIZE_OF_UINT16;
				this._writeUint8Array(e, !1)
			};
			a.prototype.writeUTFBytes = function(a) {
				this._writeUint8Array(this.encodeUTF8(a))
			};
			a.prototype.toString = function() {
				return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable
			};
			a.prototype._writeUint8Array = function(a, b) {
				void 0 === b && (b = !0);
				b && this.validateBuffer(this.position + a.length);
				for (var c = 0; c < a.length; c++) this.data.setUint8(this.position++, a[c])
			};
			a.prototype.validate = function(a) {
				if (0 < this.data.byteLength && this._position + a <= this.data.byteLength) return !0;
				throw b.getString(1025);
			};
			a.prototype.validateBuffer = function(a) {
				this.write_position = a > this.write_position ? a : this.write_position;
				a += this._position;
				this.data.byteLength < a && (a = new Uint8Array(new ArrayBuffer(a + this.BUFFER_EXT_SIZE)), a.set(new Uint8Array(this.data.buffer)), this.buffer = a.buffer)
			};
			a.prototype.encodeUTF8 = function(a) {
				var b = 0;
				a = this.stringToCodePoints(a);
				for (var c = []; a.length > b;) {
					var d = a[b++];
					if (this.inRange(d, 55296, 57343)) this.encoderError(d);
					else if (this.inRange(d, 0, 127)) c.push(d);
					else {
						var g, f;
						this.inRange(d, 128, 2047) ? (g = 1, f = 192) : this.inRange(d, 2048, 65535) ? (g = 2, f = 224) : this.inRange(d, 65536, 1114111) && (g = 3, f = 240);
						for (c.push(this.div(d, Math.pow(64, g)) + f); 0 < g;) {
							var l = this.div(d, Math.pow(64, g - 1));
							c.push(128 + l % 64);
							g -= 1
						}
					}
				}
				return new Uint8Array(c)
			};
			a.prototype.decodeUTF8 = function(a) {
				for (var b = 0, c = "", d, g = 0, f = 0, l = 0, n = 0; a.length > b;) {
					d = a[b++];
					if (d === this.EOF_byte) d = 0 !== f ? this.decoderError(!1) : this.EOF_code_point;
					else if (0 === f) this.inRange(d, 0, 127) || (this.inRange(d, 194, 223) ? (f = 1, n = 128, g = d - 192) : this.inRange(d, 224, 239) ? (f = 2, n = 2048, g = d - 224) : this.inRange(d, 240, 244) ? (f = 3, n = 65536, g = d - 240) : this.decoderError(!1), g *= Math.pow(64, f), d = null);
					else if (this.inRange(d, 128, 191)) if (l += 1, g += (d - 128) * Math.pow(64, f - l), l !== f) d = null;
					else {
						var p = g,
							q = n,
							n = l = f = g = 0;
						d = this.inRange(p, q, 1114111) && !this.inRange(p, 55296, 57343) ? p : this.decoderError(!1, d)
					} else n = l = f = g = 0, b--, d = this.decoderError(!1, d);
					null !== d && d !== this.EOF_code_point && (65535 >= d ? 0 < d && (c += String.fromCharCode(d)) : (d -= 65536, c += String.fromCharCode(55296 + (d >> 10 & 1023)), c += String.fromCharCode(56320 + (d & 1023))))
				}
				return c
			};
			a.prototype.encoderError = function(a) {
				throw b.getString(1026, a);
			};
			a.prototype.decoderError = function(a, c) {
				if (a) throw b.getString(1027);
				return c || 65533
			};
			a.prototype.inRange = function(a, b, c) {
				return b <= a && a <= c
			};
			a.prototype.div = function(a, b) {
				return Math.floor(a / b)
			};
			a.prototype.stringToCodePoints = function(a) {
				for (var b = [], c = 0, d = a.length; c < a.length;) {
					var g = a.charCodeAt(c);
					if (this.inRange(g, 55296, 57343)) if (this.inRange(g, 56320, 57343)) b.push(65533);
					else if (c === d - 1) b.push(65533);
					else {
						var f = a.charCodeAt(c + 1);
						this.inRange(f, 56320, 57343) ? (g &= 1023, f &= 1023, c += 1, b.push(65536 + (g << 10) + f)) : b.push(65533)
					} else b.push(g);
					c += 1
				}
				return b
			};
			a.SIZE_OF_BOOLEAN = 1;
			a.SIZE_OF_INT8 = 1;
			a.SIZE_OF_INT16 = 2;
			a.SIZE_OF_INT32 = 4;
			a.SIZE_OF_UINT8 = 1;
			a.SIZE_OF_UINT16 = 2;
			a.SIZE_OF_UINT32 = 4;
			a.SIZE_OF_FLOAT32 = 4;
			a.SIZE_OF_FLOAT64 = 8;
			return a
		}();
	b.ByteArray = c;
	c.prototype.__class__ = "egret.ByteArray"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(a, b, d) {
				c.call(this);
				this._target = null;
				this.loop = this.ignoreGlobalPause = this._useTicks = !1;
				this._actions = this._steps = this.pluginData = null;
				this.paused = !1;
				this.duration = 0;
				this._prevPos = -1;
				this.position = null;
				this._stepPosition = this._prevPosition = 0;
				this.passive = !1;
				this.initialize(a, b, d)
			}
			__extends(a, c);
			a.get = function(e, b, c, d) {
				void 0 === b && (b = null);
				void 0 === c && (c = null);
				void 0 === d && (d = !1);
				d && a.removeTweens(e);
				return new a(e, b, c)
			};
			a.removeTweens = function(e) {
				if (e.tween_count) {
					for (var b = a._tweens, c = b.length - 1; 0 <= c; c--) b[c]._target == e && (b[c].paused = !0, b.splice(c, 1));
					e.tween_count = 0
				}
			};
			a.pauseTweens = function(a) {
				if (a.tween_count) for (var c = b.Tween._tweens, d = c.length - 1; 0 <= d; d--) c[d]._target == a && (c[d].paused = !0)
			};
			a.resumeTweens = function(a) {
				if (a.tween_count) for (var c = b.Tween._tweens, d = c.length - 1; 0 <= d; d--) c[d]._target == a && (c[d].paused = !1)
			};
			a.tick = function(e, b) {
				void 0 === b && (b = !1);
				for (var c = a._tweens.concat(), d = c.length - 1; 0 <= d; d--) {
					var g = c[d];
					b && !g.ignoreGlobalPause || g.paused || g.tick(g._useTicks ? 1 : e)
				}
			};
			a._register = function(e, c) {
				var d = e._target,
					h = a._tweens;
				if (c) d && (d.tween_count = 0 < d.tween_count ? d.tween_count + 1 : 1), h.push(e), a._inited || (b.Ticker.getInstance().register(a.tick, null), a._inited = !0);
				else for (d && d.tween_count--, d = h.length; d--;) if (h[d] == e) {
					h.splice(d, 1);
					break
				}
			};
			a.removeAllTweens = function() {
				for (var e = a._tweens, b = 0, c = e.length; b < c; b++) {
					var d = e[b];
					d.paused = !0;
					d._target.tweenjs_count = 0
				}
				e.length = 0
			};
			a.prototype.initialize = function(e, b, c) {
				this._target = e;
				b && (this._useTicks = b.useTicks, this.ignoreGlobalPause = b.ignoreGlobalPause, this.loop = b.loop, b.onChange && this.addEventListener("change", b.onChange, b.onChangeObj), b.override && a.removeTweens(e));
				this.pluginData = c || {};
				this._curQueueProps = {};
				this._initQueueProps = {};
				this._steps = [];
				this._actions = [];
				b && b.paused ? this.paused = !0 : a._register(this, !0);
				b && null != b.position && this.setPosition(b.position, a.NONE)
			};
			a.prototype.setPosition = function(a, b) {
				void 0 === b && (b = 1);
				0 > a && (a = 0);
				var c = a,
					d = !1;
				c >= this.duration && (this.loop ? c %= this.duration : (c = this.duration, d = !0));
				if (c == this._prevPos) return d;
				var g = this._prevPos;
				this.position = this._prevPos = c;
				this._prevPosition = a;
				if (this._target) if (d) this._updateTargetProps(null, 1);
				else if (0 < this._steps.length) {
					for (var f = 0, l = this._steps.length; f < l && !(this._steps[f].t > c); f++);
					f = this._steps[f - 1];
					this._updateTargetProps(f, (this._stepPosition = c - f.t) / f.d)
				}
				0 != b && 0 < this._actions.length && (this._useTicks ? this._runActions(c, c) : 1 == b && c < g ? (g != this.duration && this._runActions(g, this.duration), this._runActions(0, c, !0)) : this._runActions(g, c));
				d && this.setPaused(!0);
				this.dispatchEventWith("change");
				return d
			};
			a.prototype._runActions = function(a, b, c) {
				void 0 === c && (c = !1);
				var d = a,
					g = b,
					f = -1,
					l = this._actions.length,
					n = 1;
				a > b && (d = b, g = a, f = l, l = n = -1);
				for (;
				(f += n) != l;) {
					b = this._actions[f];
					var p = b.t;
					(p == g || p > d && p < g || c && p == a) && b.f.apply(b.o, b.p)
				}
			};
			a.prototype._updateTargetProps = function(e, b) {
				var c, d, g, f;
				if (e || 1 != b) {
					if (this.passive = !! e.v) return;
					e.e && (b = e.e(b, 0, 1, 1));
					c = e.p0;
					d = e.p1
				} else this.passive = !1, c = d = this._curQueueProps;
				for (var l in this._initQueueProps) {
					null == (g = c[l]) && (c[l] = g = this._initQueueProps[l]);
					null == (f = d[l]) && (d[l] = f = g);
					g = g == f || 0 == b || 1 == b || "number" != typeof g ? 1 == b ? f : g : g + (f - g) * b;
					var n = !1;
					if (f = a._plugins[l]) for (var p = 0, q = f.length; p < q; p++) {
						var r = f[p].tween(this, l, g, c, d, b, !! e && c == d, !e);
						r == a.IGNORE ? n = !0 : g = r
					}
					n || (this._target[l] = g)
				}
			};
			a.prototype.setPaused = function(e) {
				this.paused = e;
				a._register(this, !e);
				return this
			};
			a.prototype._cloneProps = function(a) {
				var b = {},
					c;
				for (c in a) b[c] = a[c];
				return b
			};
			a.prototype._addStep = function(a) {
				0 < a.d && (this._steps.push(a), a.t = this.duration, this.duration += a.d);
				return this
			};
			a.prototype._appendQueueProps = function(e) {
				var b, c, d, g, f, l;
				for (l in e) if (void 0 === this._initQueueProps[l]) {
					c = this._target[l];
					if (b = a._plugins[l]) for (d = 0, g = b.length; d < g; d++) c = b[d].init(this, l, c);
					this._initQueueProps[l] = this._curQueueProps[l] = void 0 === c ? null : c
				}
				for (l in e) {
					c = this._curQueueProps[l];
					if (b = a._plugins[l]) for (f = f || {}, d = 0, g = b.length; d < g; d++) b[d].step && b[d].step(this, l, c, e[l], f);
					this._curQueueProps[l] = e[l]
				}
				f && this._appendQueueProps(f);
				return this._curQueueProps
			};
			a.prototype._addAction = function(a) {
				a.t = this.duration;
				this._actions.push(a);
				return this
			};
			a.prototype._set = function(a, b) {
				for (var c in a) b[c] = a[c]
			};
			a.prototype.wait = function(a, b) {
				if (null == a || 0 >= a) return this;
				var c = this._cloneProps(this._curQueueProps);
				return this._addStep({
					d: a,
					p0: c,
					p1: c,
					v: b
				})
			};
			a.prototype.to = function(a, b, c) {
				void 0 === c && (c = void 0);
				if (isNaN(b) || 0 > b) b = 0;
				return this._addStep({
					d: b || 0,
					p0: this._cloneProps(this._curQueueProps),
					e: c,
					p1: this._cloneProps(this._appendQueueProps(a))
				})
			};
			a.prototype.call = function(a, b, c) {
				void 0 === b && (b = void 0);
				void 0 === c && (c = void 0);
				return this._addAction({
					f: a,
					p: c ? c : [],
					o: b ? b : this._target
				})
			};
			a.prototype.set = function(a, b) {
				void 0 === b && (b = null);
				return this._addAction({
					f: this._set,
					o: this,
					p: [a, b ? b : this._target]
				})
			};
			a.prototype.play = function(a) {
				a || (a = this);
				return this.call(a.setPaused, a, [!1])
			};
			a.prototype.pause = function(a) {
				a || (a = this);
				return this.call(a.setPaused, a, [!0])
			};
			a.prototype.tick = function(a) {
				this.paused || this.setPosition(this._prevPosition + a)
			};
			a.NONE = 0;
			a.LOOP = 1;
			a.REVERSE = 2;
			a._tweens = [];
			a.IGNORE = {};
			a._plugins = {};
			a._inited = !1;
			return a
		}(b.EventDispatcher);
	b.Tween = d;
	d.prototype.__class__ = "egret.Tween"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function c() {
				b.Logger.fatalWithErrorId(1014)
			}
			c.get = function(a) {
				-1 > a && (a = -1);
				1 < a && (a = 1);
				return function(e) {
					return 0 == a ? e : 0 > a ? e * (e * -a + 1 + a) : e * ((2 - e) * a + (1 - a))
				}
			};
			c.getPowIn = function(a) {
				return function(e) {
					return Math.pow(e, a)
				}
			};
			c.getPowOut = function(a) {
				return function(e) {
					return 1 - Math.pow(1 - e, a)
				}
			};
			c.getPowInOut = function(a) {
				return function(e) {
					return 1 > (e *= 2) ? 0.5 * Math.pow(e, a) : 1 - 0.5 * Math.abs(Math.pow(2 - e, a))
				}
			};
			c.sineIn = function(a) {
				return 1 - Math.cos(a * Math.PI / 2)
			};
			c.sineOut = function(a) {
				return Math.sin(a * Math.PI / 2)
			};
			c.sineInOut = function(a) {
				return -0.5 * (Math.cos(Math.PI * a) - 1)
			};
			c.getBackIn = function(a) {
				return function(e) {
					return e * e * ((a + 1) * e - a)
				}
			};
			c.getBackOut = function(a) {
				return function(e) {
					return --e * e * ((a + 1) * e + a) + 1
				}
			};
			c.getBackInOut = function(a) {
				a *= 1.525;
				return function(e) {
					return 1 > (e *= 2) ? 0.5 * e * e * ((a + 1) * e - a) : 0.5 * ((e -= 2) * e * ((a + 1) * e + a) + 2)
				}
			};
			c.circIn = function(a) {
				return -(Math.sqrt(1 - a * a) - 1)
			};
			c.circOut = function(a) {
				return Math.sqrt(1 - --a * a)
			};
			c.circInOut = function(a) {
				return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
			};
			c.bounceIn = function(a) {
				return 1 - c.bounceOut(1 - a)
			};
			c.bounceOut = function(a) {
				return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
			};
			c.bounceInOut = function(a) {
				return 0.5 > a ? 0.5 * c.bounceIn(2 * a) : 0.5 * c.bounceOut(2 * a - 1) + 0.5
			};
			c.getElasticIn = function(a, e) {
				var b = 2 * Math.PI;
				return function(c) {
					if (0 == c || 1 == c) return c;
					var d = e / b * Math.asin(1 / a);
					return -(a * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - d) * b / e))
				}
			};
			c.getElasticOut = function(a, e) {
				var b = 2 * Math.PI;
				return function(c) {
					if (0 == c || 1 == c) return c;
					var d = e / b * Math.asin(1 / a);
					return a * Math.pow(2, -10 * c) * Math.sin((c - d) * b / e) + 1
				}
			};
			c.getElasticInOut = function(a, e) {
				var b = 2 * Math.PI;
				return function(c) {
					var d = e / b * Math.asin(1 / a);
					return 1 > (c *= 2) ? -0.5 * a * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - d) * b / e) : a * Math.pow(2, -10 * (c -= 1)) * Math.sin((c - d) * b / e) * 0.5 + 1
				}
			};
			c.quadIn = c.getPowIn(2);
			c.quadOut = c.getPowOut(2);
			c.quadInOut = c.getPowInOut(2);
			c.cubicIn = c.getPowIn(3);
			c.cubicOut = c.getPowOut(3);
			c.cubicInOut = c.getPowInOut(3);
			c.quartIn = c.getPowIn(4);
			c.quartOut = c.getPowOut(4);
			c.quartInOut = c.getPowInOut(4);
			c.quintIn = c.getPowIn(5);
			c.quintOut = c.getPowOut(5);
			c.quintInOut = c.getPowInOut(5);
			c.backIn = c.getBackIn(1.7);
			c.backOut = c.getBackOut(1.7);
			c.backInOut = c.getBackInOut(1.7);
			c.elasticIn = c.getElasticIn(1, 0.3);
			c.elasticOut = c.getElasticOut(1, 0.3);
			c.elasticInOut = c.getElasticInOut(1, 0.3 * 1.5);
			return c
		}();
	b.Ease = d;
	d.prototype.__class__ = "egret.Ease"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function b() {
				this.path = "";
				this.audio = null;
				this.type = b.EFFECT
			}
			b.prototype.play = function(a) {
				void 0 === a && (a = !1);
				var e = this.audio;
				e && (isNaN(e.duration) || (e.currentTime = 0), e.loop = a, e.play())
			};
			b.prototype.pause = function() {
				var a = this.audio;
				a && a.pause()
			};
			b.prototype.load = function() {
				var a = this.audio;
				a && a.load()
			};
			b.prototype.addEventListener = function(a, e) {
				this.audio && this.audio.addEventListener(a, e, !1)
			};
			b.prototype.removeEventListener = function(a, e) {
				this.audio && this.audio.removeEventListener(a, e, !1)
			};
			b.prototype.setVolume = function(a) {
				var e = this.audio;
				e && (e.volume = a)
			};
			b.prototype.getVolume = function() {
				return this.audio ? this.audio.volume : 0
			};
			b.prototype.preload = function(a) {
				this.type = a
			};
			b.prototype._setAudio = function(a) {
				this.audio = a
			};
			b.MUSIC = "music";
			b.EFFECT = "effect";
			return b
		}();
	b.Sound = d;
	d.prototype.__class__ = "egret.Sound"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function b() {}
			b.isNumber = function(a) {
				return "number" === typeof a && !isNaN(a)
			};
			b.sin = function(a) {
				a = Math.round(a);
				a %= 360;
				0 > a && (a += 360);
				return 90 > a ? egret_sin_map[a] : 180 > a ? egret_cos_map[a - 90] : 270 > a ? -egret_sin_map[a - 180] : -egret_cos_map[a - 270]
			};
			b.cos = function(a) {
				a = Math.round(a);
				a %= 360;
				0 > a && (a += 360);
				return 90 > a ? egret_cos_map[a] : 180 > a ? -egret_sin_map[a - 90] : 270 > a ? -egret_cos_map[a - 180] : egret_sin_map[a - 270]
			};
			return b
		}();
	b.NumberUtils = d;
	d.prototype.__class__ = "egret.NumberUtils"
})(egret || (egret = {}));
for (var egret_sin_map = {}, egret_cos_map = {}, i = 0; 90 >= i; i++) egret_sin_map[i] = Math.sin(i * egret.Matrix.DEG_TO_RAD), egret_cos_map[i] = Math.cos(i * egret.Matrix.DEG_TO_RAD);
Function.prototype.bind || (Function.prototype.bind = function(b) {
	if ("function" !== typeof this) throw new TypeError(egret.getString(1029));
	var d = Array.prototype.slice.call(arguments, 1),
		c = this,
		a = function() {},
		e = function() {
			return c.apply(this instanceof a && b ? this : b, d.concat(Array.prototype.slice.call(arguments)))
		};
	a.prototype = this.prototype;
	e.prototype = new a;
	return e
});
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(e) {
				void 0 === e && (e = 60);
				c.call(this);
				this.frameRate = e;
				this._time = 0;
				this._requestAnimationId = NaN;
				this._isActivate = !0;
				60 == e && (a.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, a.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
				a.requestAnimationFrame || (a.requestAnimationFrame = function(a) {
					return window.setTimeout(a, 1E3 / e)
				});
				a.cancelAnimationFrame || (a.cancelAnimationFrame = function(a) {
					return window.clearTimeout(a)
				});
				a.instance = this;
				this.registerListener()
			}
			__extends(a, c);
			a.prototype.enterFrame = function() {
				var e = a.instance,
					c = a._thisObject,
					d = a._callback,
					h = b.getTimer(),
					g = h - e._time;
				e._requestAnimationId = a.requestAnimationFrame.call(window, a.prototype.enterFrame);
				d.call(c, g);
				e._time = h
			};
			a.prototype.executeMainLoop = function(e, b) {
				a._callback = e;
				a._thisObject = b;
				this.enterFrame()
			};
			a.prototype.reset = function() {
				var e = a.instance;
				e._requestAnimationId && (e._time = b.getTimer(), a.cancelAnimationFrame.call(window, e._requestAnimationId), e.enterFrame())
			};
			a.prototype.registerListener = function() {
				var e = this,
					c = function() {
						e._isActivate && (e._isActivate = !1, b.MainContext.instance.stage.dispatchEvent(new b.Event(b.Event.DEACTIVATE)))
					},
					d = function() {
						e._isActivate || (e._isActivate = !0, a.instance.reset(), b.MainContext.instance.stage.dispatchEvent(new b.Event(b.Event.ACTIVATE)))
					},
					h = function() {
						document[g] ? c() : d()
					};
				window.addEventListener("focus", d, !1);
				window.addEventListener("blur", c, !1);
				var g, f;
				"undefined" !== typeof document.hidden ? (g = "hidden", f = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (g = "mozHidden", f = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (g = "msHidden", f = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden ? (g = "webkitHidden", f = "webkitvisibilitychange") : "undefined" !== typeof document.oHidden && (g = "oHidden", f = "ovisibilitychange");
				"onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", d, !1), window.addEventListener("pagehide", c, !1));
				g && f && document.addEventListener(f, h, !1)
			};
			a.instance = null;
			a.requestAnimationFrame = null;
			a.cancelAnimationFrame = null;
			a._thisObject = null;
			a._callback = null;
			return a
		}(b.DeviceContext);
	b.HTML5DeviceContext = d;
	d.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));
var egret_html5_localStorage;
(function(b) {
	b.getItem = function(b) {
		return window.localStorage.getItem(b)
	};
	b.setItem = function(b, c) {
		try {
			return window.localStorage.setItem(b, c), !0
		} catch (a) {
			return egret.Logger.infoWithErrorId(1018, b, c), !1
		}
	};
	b.removeItem = function(b) {
		window.localStorage.removeItem(b)
	};
	b.clear = function() {
		window.localStorage.clear()
	};
	b.init = function() {
		for (var d in b) egret.localStorage[d] = b[d]
	}
})(egret_html5_localStorage || (egret_html5_localStorage = {}));
egret_html5_localStorage.init();
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(a, b) {
				void 0 === b && (b = !0);
				c.call(this);
				this.useCacheCanvas = b;
				this.canvas = a || this.createCanvas();
				this.canvasContext = this.canvas.getContext("2d");
				b ? (this._cacheCanvas = document.createElement("canvas"), this._cacheCanvas.width = this.canvas.width, this._cacheCanvas.height = this.canvas.height, this.drawCanvasContext = this._cacheCanvasContext = this._cacheCanvas.getContext("2d")) : this.drawCanvasContext = this.canvasContext;
				this.onResize();
				var d = this.drawCanvasContext.setTransform,
					h = this;
				this.drawCanvasContext.setTransform = function(a, e, b, c, k, q) {
					h._matrixA = a;
					h._matrixB = e;
					h._matrixC = b;
					h._matrixD = c;
					h._matrixTx = k;
					h._matrixTy = q;
					d.call(h.drawCanvasContext, a, e, b, c, k, q)
				};
				this._matrixA = 1;
				this._matrixC = this._matrixB = 0;
				this._matrixD = 1;
				this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
				this.initBlendMode()
			}
			__extends(a, c);
			a.prototype.createCanvas = function() {
				var a = b.Browser.getInstance().$("#egretCanvas");
				if (!a) {
					var c = document.getElementById(b.StageDelegate.canvas_div_name),
						a = b.Browser.getInstance().$new("canvas");
					a.id = "egretCanvas";
					c.appendChild(a)
				}
				b.MainContext.instance.stage.addEventListener(b.Event.RESIZE, this.onResize, this);
				return a
			};
			a.prototype.onResize = function() {
				if (this.canvas) {
					var a = document.getElementById(b.StageDelegate.canvas_div_name);
					this.canvas.width = b.MainContext.instance.stage.stageWidth;
					this.canvas.height = b.MainContext.instance.stage.stageHeight;
					this.canvas.style.width = a.style.width;
					this.canvas.style.height = a.style.height;
					this.useCacheCanvas && (this._cacheCanvas.width = this.canvas.width, this._cacheCanvas.height = this.canvas.height);
					this.drawCanvasContext.imageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
					this.drawCanvasContext.webkitImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
					this.drawCanvasContext.mozImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
					this.drawCanvasContext.msImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled
				}
			};
			a.prototype.clearScreen = function() {
				for (var a = b.RenderFilter.getInstance().getDrawAreaList(), c = 0, d = a.length; c < d; c++) {
					var h = a[c];
					this.clearRect(h.x, h.y, h.width, h.height)
				}
				a = b.MainContext.instance.stage;
				this.useCacheCanvas && this._cacheCanvasContext.clearRect(0, 0, a.stageWidth, a.stageHeight);
				this.renderCost = 0
			};
			a.prototype.clearRect = function(a, b, c, d) {
				this.canvasContext.clearRect(a, b, c, d)
			};
			a.prototype.drawImage = function(a, d, m, h, g, f, l, n, p, q) {
				void 0 === q && (q = void 0);
				var r = a._bitmapData;
				f += this._transformTx;
				l += this._transformTy;
				var t = b.getTimer();
				void 0 === q ? this.drawCanvasContext.drawImage(r, d, m, h, g, f, l, n, p) : this.drawRepeatImage(a, d, m, h, g, f, l, n, p, q);
				c.prototype.drawImage.call(this, a, d, m, h, g, f, l, n, p, q);
				this.renderCost += b.getTimer() - t
			};
			a.prototype.drawRepeatImage = function(a, c, d, h, g, f, l, n, p, q) {
				if (void 0 === a.pattern) {
					var r = b.MainContext.instance.rendererContext._texture_scale_factor,
						t = a._bitmapData,
						s = t;
					if (t.width != h || t.height != g || 1 != r) s = document.createElement("canvas"), s.width = h * r, s.height = g * r, s.getContext("2d").drawImage(t, c, d, h, g, 0, 0, h * r, g * r);
					c = this.drawCanvasContext.createPattern(s, q);
					a.pattern = c
				}
				this.drawCanvasContext.fillStyle = a.pattern;
				this.drawCanvasContext.translate(f, l);
				this.drawCanvasContext.fillRect(0, 0, n, p);
				this.drawCanvasContext.translate(-f, -l)
			};
			a.prototype.setTransform = function(a) {
				1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this.drawCanvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
			};
			a.prototype.setAlpha = function(a, c) {
				this.drawCanvasContext.globalAlpha = a;
				c ? (this.blendValue = this.blendModes[c], this.drawCanvasContext.globalCompositeOperation = this.blendValue) : this.blendValue != b.BlendMode.NORMAL && (this.blendValue = this.blendModes[b.BlendMode.NORMAL], this.drawCanvasContext.globalCompositeOperation = this.blendValue)
			};
			a.prototype.initBlendMode = function() {
				this.blendModes = {};
				this.blendModes[b.BlendMode.NORMAL] = "source-over";
				this.blendModes[b.BlendMode.ADD] = "lighter";
				this.blendModes[b.BlendMode.ERASE] = "destination-out";
				this.blendModes[b.BlendMode.ERASE_REVERSE] = "destination-in"
			};
			a.prototype.setupFont = function(a, b) {
				void 0 === b && (b = null);
				b = b || {};
				var c = null == b.size ? a._size : b.size,
					d = null == b.fontFamily ? a._fontFamily : b.fontFamily,
					g = this.drawCanvasContext,
					f = (null == b.italic ? a._italic : b.italic) ? "italic " : "normal ",
					f = f + ((null == b.bold ? a._bold : b.bold) ? "bold " : "normal ");
				g.font = f + (c + "px " + d);
				g.textAlign = "left";
				g.textBaseline = "middle"
			};
			a.prototype.measureText = function(a) {
				return this.drawCanvasContext.measureText(a).width
			};
			a.prototype.drawText = function(a, d, m, h, g, f) {
				void 0 === f && (f = null);
				this.setupFont(a, f);
				f = f || {};
				var l;
				l = null != f.textColor ? b.toColorString(f.textColor) : a._textColorString;
				var n;
				n = null != f.strokeColor ? b.toColorString(f.strokeColor) : a._strokeColorString;
				var p;
				p = null != f.stroke ? f.stroke : a._stroke;
				var q = this.drawCanvasContext;
				q.fillStyle = l;
				q.strokeStyle = n;
				p && (q.lineWidth = 2 * p, q.strokeText(d, m + this._transformTx, h + this._transformTy, g || 65535));
				q.fillText(d, m + this._transformTx, h + this._transformTy, g || 65535);
				c.prototype.drawText.call(this, a, d, m, h, g, f)
			};
			a.prototype.strokeRect = function(a, b, c, d, g) {
				this.drawCanvasContext.strokeStyle = g;
				this.drawCanvasContext.strokeRect(a, b, c, d)
			};
			a.prototype.pushMask = function(a) {
				this.drawCanvasContext.save();
				this.drawCanvasContext.beginPath();
				this.drawCanvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height);
				this.drawCanvasContext.clip();
				this.drawCanvasContext.closePath()
			};
			a.prototype.popMask = function() {
				this.drawCanvasContext.restore();
				this.drawCanvasContext.setTransform(1, 0, 0, 1, 0, 0)
			};
			a.prototype.onRenderStart = function() {
				this.drawCanvasContext.save()
			};
			a.prototype.onRenderFinish = function() {
				this.drawCanvasContext.restore();
				this.drawCanvasContext.setTransform(1, 0, 0, 1, 0, 0);
				if (this.useCacheCanvas) for (var a = this._cacheCanvas.width, c = this._cacheCanvas.height, d = b.RenderFilter.getInstance().getDrawAreaList(), h = 0, g = d.length; h < g; h++) {
					var f = d[h],
						l = f.x,
						n = f.y,
						p = f.width,
						f = f.height;
					l + p > a && (p = a - l);
					n + f > c && (f = c - n);
					0 < p && 0 < f && this.canvasContext.drawImage(this._cacheCanvas, l, n, p, f, l, n, p, f)
				}
			};
			return a
		}(b.RendererContext);
	b.HTML5CanvasRenderer = d;
	d.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));
var egret_h5_graphics;
(function(b) {
	b.beginFill = function(b, a) {
		void 0 === a && (a = 1);
		var e = "rgba(" + (b >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + a + ")";
		this.fillStyleColor = e;
		this._pushCommand(new d(this._setStyle, this, [e]))
	};
	b.drawRect = function(b, a, e, k) {
		this._pushCommand(new d(function(a, e, b, c) {
			var d = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.rect(d._transformTx + a, d._transformTy + e, b, c);
			this.canvasContext.closePath()
		}, this, [b, a, e, k]));
		this._fill();
		this.checkRect(b, a, e, k)
	};
	b.drawCircle = function(b, a, e) {
		this._pushCommand(new d(function(a, e, b) {
			var c = this.renderContext;
			this.canvasContext.beginPath();
			this.canvasContext.arc(c._transformTx + a, c._transformTy + e, b, 0, 2 * Math.PI);
			this.canvasContext.closePath()
		}, this, [b, a, e]));
		this._fill();
		this.checkRect(b - e, a - e, 2 * e, 2 * e)
	};
	b.drawRoundRect = function(b, a, e, k, m, h) {
		this._pushCommand(new d(function(a, e, b, c, d, k) {
			var m = this.renderContext;
			a = m._transformTx + a;
			e = m._transformTy + e;
			d /= 2;
			k = k ? k / 2 : d;
			b = a + b;
			c = e + c;
			m = c - k;
			this.canvasContext.beginPath();
			this.canvasContext.moveTo(b, m);
			this.canvasContext.quadraticCurveTo(b, c, b - d, c);
			this.canvasContext.lineTo(a + d, c);
			this.canvasContext.quadraticCurveTo(a, c, a, c - k);
			this.canvasContext.lineTo(a, e + k);
			this.canvasContext.quadraticCurveTo(a, e, a + d, e);
			this.canvasContext.lineTo(b - d, e);
			this.canvasContext.quadraticCurveTo(b, e, b, e + k);
			this.canvasContext.lineTo(b, m);
			this.canvasContext.closePath()
		}, this, [b, a, e, k, m, h]));
		this._fill();
		this.checkRect(b, a, e, k)
	};
	b.drawEllipse = function(b, a, e, k) {
		this._pushCommand(new d(function(a, e, b, c) {
			var d = this.renderContext;
			this.canvasContext.save();
			a = d._transformTx + a;
			e = d._transformTy + e;
			var d = b > c ? b : c,
				k = b / d;
			c /= d;
			this.canvasContext.scale(k, c);
			this.canvasContext.beginPath();
			this.canvasContext.moveTo((a + b) / k, e / c);
			this.canvasContext.arc(a / k, e / c, d, 0, 2 * Math.PI);
			this.canvasContext.closePath();
			this.canvasContext.restore();
			this.canvasContext.stroke()
		}, this, [b, a, e, k]));
		this._fill();
		this.checkRect(b - e, a - k, 2 * e, 2 * k)
	};
	b.lineStyle = function(b, a, e, k, m, h, g, f) {
		void 0 === b && (b = NaN);
		void 0 === a && (a = 0);
		void 0 === e && (e = 1);
		void 0 === k && (k = !1);
		void 0 === m && (m = "normal");
		void 0 === h && (h = null);
		void 0 === g && (g = null);
		void 0 === f && (f = 3);
		this.strokeStyleColor && (this.createEndLineCommand(), this._pushCommand(this.endLineCommand));
		this.strokeStyleColor = a = "rgba(" + (a >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + e + ")";
		this._pushCommand(new d(function(a, e) {
			this.canvasContext.lineWidth = a;
			this.canvasContext.strokeStyle = e;
			this.canvasContext.beginPath()
		}, this, [b, a]));
		this.moveTo(this.lineX, this.lineY)
	};
	b.lineTo = function(b, a) {
		this._pushCommand(new d(function(a, b) {
			var c = this.renderContext;
			this.canvasContext.lineTo(c._transformTx + a, c._transformTy + b)
		}, this, [b, a]));
		this.checkPoint(this.lineX, this.lineY);
		this.lineX = b;
		this.lineY = a;
		this.checkPoint(b, a)
	};
	b.curveTo = function(b, a, e, k) {
		this._pushCommand(new d(function(a, e, b, c) {
			var d = this.renderContext;
			this.canvasContext.quadraticCurveTo(d._transformTx + a, d._transformTy + e, d._transformTx + b, d._transformTy + c)
		}, this, [b, a, e, k]));
		this.checkPoint(this.lineX, this.lineY);
		this.lineX = e;
		this.lineY = k;
		this.checkPoint(b, a);
		this.checkPoint(e, k)
	};
	b.moveTo = function(b, a) {
		this._pushCommand(new d(function(a, b) {
			var c = this.renderContext;
			this.canvasContext.moveTo(c._transformTx + a, c._transformTy + b)
		}, this, [b, a]))
	};
	b.clear = function() {
		this.lineY = this.lineX = this.commandQueue.length = 0;
		this.fillStyleColor = this.strokeStyleColor = null;
		this._dirty = !1;
		this._maxY = this._maxX = this._minY = this._minX = 0;
		this._firstCheck = !0
	};
	b.createEndFillCommand = function() {
		this.endFillCommand || (this.endFillCommand = new d(function() {
			this.canvasContext.fill();
			this.canvasContext.closePath()
		}, this, null))
	};
	b.endFill = function() {
		null != this.fillStyleColor && this._fill()
	};
	b._fill = function() {
		this.fillStyleColor && (this.createEndFillCommand(), this._pushCommand(this.endFillCommand), this.fillStyleColor = null)
	};
	b.createEndLineCommand = function() {
		this.endLineCommand || (this.endLineCommand = new d(function() {
			this.canvasContext.stroke();
			this.canvasContext.closePath()
		}, this, null))
	};
	b._pushCommand = function(b) {
		this.commandQueue.push(b);
		this._dirty = !0
	};
	b._draw = function(b) {
		var a = this.commandQueue.length;
		if (0 != a) {
			this.renderContext = b;
			b = this.canvasContext = this.renderContext.drawCanvasContext;
			b.save();
			this.strokeStyleColor && 0 < a && this.commandQueue[a - 1] != this.endLineCommand && (this.createEndLineCommand(), this._pushCommand(this.endLineCommand), a = this.commandQueue.length);
			for (var e = 0; e < a; e++) {
				var d = this.commandQueue[e];
				d.method.apply(d.thisObject, d.args)
			}
			b.restore();
			this._dirty = !1
		}
	};
	var d = function() {
			return function(b, a, e) {
				this.method = b;
				this.thisObject = a;
				this.args = e
			}
		}();
	d.prototype.__class__ = "egret_h5_graphics.Command";
	b._setStyle = function(b) {
		this.canvasContext.fillStyle = b;
		this.canvasContext.beginPath()
	};
	b.init = function() {
		for (var c in b) egret.Graphics.prototype[c] = b[c];
		egret.RendererContext.createRendererContext = function(a) {
			return new egret.HTML5CanvasRenderer(a, !1)
		}
	}
})(egret_h5_graphics || (egret_h5_graphics = {}));
egret_h5_graphics.init();
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a(a) {
				c.call(this);
				this.glID = this.gl = this.canvas = null;
				this.size = 2E3;
				this.vertices = null;
				this.vertSize = 5;
				this.indices = null;
				this.projectionY = this.projectionX = NaN;
				this.shaderManager = null;
				this.contextLost = !1;
				this.glContextId = 0;
				this.currentBlendMode = "";
				this.currentBaseTexture = null;
				this.currentBatchSize = 0;
				this.worldTransform = null;
				this.worldAlpha = 1;
				this.maskList = [];
				this.maskDataFreeList = [];
				this.graphicsIndexBuffer = this.graphicsBuffer = this.graphicsIndices = this.graphicsPoints = this.filterType = this.colorTransformMatrix = null;
				this.graphicsStyle = {};
				this.canvas = a || this.createCanvas();
				this.canvas.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1);
				this.canvas.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), !1);
				this.html5Canvas = document.createElement("canvas");
				this.canvasContext = new b.HTML5CanvasRenderer(this.html5Canvas);
				this.onResize();
				this.projectionX = this.canvas.width / 2;
				this.projectionY = -this.canvas.height / 2;
				a = 6 * this.size;
				this.vertices = new Float32Array(4 * this.size * this.vertSize);
				this.indices = new Uint16Array(a);
				for (var d = 0, m = 0; d < a; d += 6, m += 4) this.indices[d + 0] = m + 0, this.indices[d + 1] = m + 1, this.indices[d + 2] = m + 2, this.indices[d + 3] = m + 0, this.indices[d + 4] = m + 2, this.indices[d + 5] = m + 3;
				this.initWebGL();
				this.shaderManager = new b.WebGLShaderManager(this.gl);
				this.worldTransform = new b.Matrix;
				this.initAll()
			}
			__extends(a, c);
			a.prototype.onRenderFinish = function() {
				this._draw()
			};
			a.prototype.initAll = function() {
				a.isInit || (a.isInit = !0, egret_webgl_graphics.init(), b.TextField.prototype._makeBitmapCache = function() {
					this.renderTexture || (this.renderTexture = new b.RenderTexture);
					var a = this.getBounds(b.Rectangle.identity);
					if (0 == a.width || 0 == a.height) return this._texture_to_render = null, !1;
					this._bitmapData || (this._bitmapData = document.createElement("canvas"), this.renderContext = b.RendererContext.createRendererContext(this._bitmapData));
					var c = a.width,
						a = a.height,
						d = b.MainContext.instance.rendererContext._texture_scale_factor,
						a = a / d,
						c = Math.round(c / d),
						a = Math.round(a),
						h = this._bitmapData;
					h.width = c;
					h.height = a;
					h.style.width = c + "px";
					h.style.height = a + "px";
					this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = c, this.renderContext._cacheCanvas.height = a);
					this._worldTransform.identity();
					this._worldTransform.a = 1 / d;
					this._worldTransform.d = 1 / d;
					this.renderContext.setTransform(this._worldTransform);
					this.worldAlpha = 1;
					var h = b.RenderFilter.getInstance(),
						g = h._drawAreaList.concat();
					h._drawAreaList.length = 0;
					this.renderContext.clearScreen();
					this.renderContext.onRenderStart();
					b.RendererContext.deleteTexture(this.renderTexture);
					this._colorTransform && this.renderContext.setGlobalColorTransform(this._colorTransform.matrix);
					var f = this.mask || this._scrollRect;
					f && this.renderContext.pushMask(f);
					this._render(this.renderContext);
					f && this.renderContext.popMask();
					this._colorTransform && this.renderContext.setGlobalColorTransform(null);
					b.RenderTexture.identityRectangle.width = c;
					b.RenderTexture.identityRectangle.height = a;
					h.addDrawArea(b.RenderTexture.identityRectangle);
					this.renderContext.onRenderFinish();
					h._drawAreaList = g;
					this.renderTexture._bitmapData = this._bitmapData;
					this.renderTexture._sourceWidth = c;
					this.renderTexture._sourceHeight = a;
					this.renderTexture._textureWidth = this.renderTexture._sourceWidth * d;
					this.renderTexture._textureHeight = this.renderTexture._sourceHeight * d;
					this._texture_to_render = this.renderTexture;
					return !0
				}, b.TextField.prototype._draw = function(a) {
					this.getDirty() && (this._texture_to_render = this.renderTexture, this._cacheAsBitmap = !0);
					b.DisplayObject.prototype._draw.call(this, a)
				}, b.RenderTexture.prototype.init = function() {
					this._bitmapData = document.createElement("canvas");
					this.canvasContext = this._bitmapData.getContext("2d");
					this._webglBitmapData = document.createElement("canvas");
					this.renderContext = new b.WebGLRenderer(this._webglBitmapData)
				}, b.RenderTexture.prototype.setSize = function(a, c) {
					if (this._webglBitmapData) {
						var d = this._webglBitmapData;
						d.width = a;
						d.height = c;
						d.style.width = a + "px";
						d.style.height = c + "px";
						this.renderContext.projectionX = a / 2;
						this.renderContext.projectionY = -c / 2;
						this.renderContext.viewportScale = b.MainContext.instance.rendererContext._texture_scale_factor
					}
				}, b.RenderTexture.prototype.end = function() {}, b.RenderTexture.prototype.drawToTexture = function(a, c, d) {
					var h = c || a.getBounds(b.Rectangle.identity);
					if (0 == h.width || 0 == h.height || c && (0 == c.width || 0 == c.height)) return !1;
					"undefined" == typeof d && (d = 1);
					this._bitmapData || (this._bitmapData = document.createElement("canvas"), this.canvasContext = this._bitmapData.getContext("2d"), b.RenderTexture.WebGLCanvas || (b.RenderTexture.WebGLCanvas = document.createElement("canvas"), b.RenderTexture.WebGLRenderer = new b.WebGLRenderer(b.RenderTexture.WebGLCanvas)), this._webglBitmapData = b.RenderTexture.WebGLCanvas, this.renderContext = b.RenderTexture.WebGLRenderer);
					var g = h.x,
						f = h.y;
					c = h.width;
					var h = h.height,
						h = h / d,
						l = b.MainContext.instance.rendererContext._texture_scale_factor;
					c = Math.round(c / d);
					h = Math.round(h);
					this.setSize(c, h);
					var n = this._bitmapData,
						p = c / l * d,
						q = h / l * d;
					n.width = p;
					n.height = q;
					n.style.width = p + "px";
					n.style.height = q + "px";
					this.begin();
					a._worldTransform.identity();
					n = a._anchorOffsetX;
					p = a._anchorOffsetY;
					if (0 != a._anchorX || 0 != a._anchorY) n = a._anchorX * c, p = a._anchorY * h;
					this._offsetX = g + n;
					this._offsetY = f + p;
					a._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
					a.worldAlpha = 1;
					g = b.MainContext.__use_new_draw;
					b.MainContext.__use_new_draw = !1;
					if (a instanceof b.DisplayObjectContainer) for (f = a._children, n = 0, p = f.length; n < p; n++) f[n]._updateTransform();
					this.renderContext.setTransform(a._worldTransform);
					f = b.RenderFilter.getInstance();
					n = f._drawAreaList.concat();
					f._drawAreaList.length = 0;
					p = this.renderContext.gl;
					p.viewport(0, 0, c, h);
					p.bindFramebuffer(p.FRAMEBUFFER, null);
					p.clearColor(0, 0, 0, 0);
					p.clear(p.COLOR_BUFFER_BIT);
					this.renderContext.onRenderStart();
					b.RendererContext.deleteTexture(this);
					a._filter && this.renderContext.setGlobalFilter(a._filter);
					a._colorTransform && this.renderContext.setGlobalColorTransform(a._colorTransform.matrix);
					(p = a.mask || a._scrollRect) && this.renderContext.pushMask(p);
					a._render(this.renderContext);
					this.renderContext._draw();
					b.MainContext.__use_new_draw = g;
					p && this.renderContext.popMask();
					a._colorTransform && this.renderContext.setGlobalColorTransform(null);
					a._filter && this.renderContext.setGlobalFilter(null);
					b.RenderTexture.identityRectangle.width = c;
					b.RenderTexture.identityRectangle.height = h;
					f.addDrawArea(b.RenderTexture.identityRectangle);
					this.renderContext.onRenderFinish();
					f._drawAreaList = n;
					this._sourceWidth = c / l * d;
					this._sourceHeight = h / l * d;
					this._textureWidth = c * d;
					this._textureHeight = h * d;
					this.canvasContext.drawImage(this._webglBitmapData, 0, 0, c, h, 0, 0, this._sourceWidth, this._sourceHeight);
					return !0
				})
			};
			a.prototype.createCanvas = function() {
				var a = b.Browser.getInstance().$("#egretCanvas");
				if (!a) {
					var c = document.getElementById(b.StageDelegate.canvas_div_name),
						a = b.Browser.getInstance().$new("canvas");
					a.id = "egretCanvas";
					c.appendChild(a)
				}
				b.MainContext.instance.stage.addEventListener(b.Event.RESIZE, this.onResize, this);
				return a
			};
			a.prototype.onResize = function() {
				var a = document.getElementById(b.StageDelegate.canvas_div_name);
				this.canvas && (this.canvas.width = b.MainContext.instance.stage.stageWidth, this.canvas.height = b.MainContext.instance.stage.stageHeight, this.canvas.style.width = a.style.width, this.canvas.style.height = a.style.height, this.projectionX = this.canvas.width / 2, this.projectionY = -this.canvas.height / 2);
				this.html5Canvas && (this.html5Canvas.width = b.MainContext.instance.stage.stageWidth, this.html5Canvas.height = b.MainContext.instance.stage.stageHeight, this.html5Canvas.style.width = a.style.width, this.html5Canvas.style.height = a.style.height)
			};
			a.prototype.handleContextLost = function() {
				this.contextLost = !0
			};
			a.prototype.handleContextRestored = function() {
				this.initWebGL();
				this.shaderManager.setContext(this.gl);
				this.contextLost = !1
			};
			a.prototype.initWebGL = function() {
				for (var e = {}, c, d = ["experimental-webgl", "webgl"], h = 0; h < d.length; h++) {
					try {
						c = this.canvas.getContext(d[h], e)
					} catch (g) {}
					if (c) break
				}
				if (!c) throw Error(b.getString(1021));
				a.glID++;
				this.glID = a.glID;
				this.setContext(c)
			};
			a.prototype.setContext = function(a) {
				this.gl = a;
				a.id = this.glContextId++;
				this.vertexBuffer = a.createBuffer();
				this.indexBuffer = a.createBuffer();
				a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
				a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW);
				a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
				a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW);
				a.disable(a.DEPTH_TEST);
				a.disable(a.CULL_FACE);
				a.enable(a.BLEND);
				a.colorMask(!0, !0, !0, !0)
			};
			a.prototype.start = function() {
				if (!this.contextLost) {
					var a = this.gl;
					a.activeTexture(a.TEXTURE0);
					a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
					a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
					var b;
					b = this.colorTransformMatrix ? this.shaderManager.colorTransformShader : "blur" == this.filterType ? this.shaderManager.blurShader : this.shaderManager.defaultShader;
					this.shaderManager.activateShader(b);
					b.syncUniforms();
					a.uniform2f(b.projectionVector, this.projectionX, this.projectionY);
					var c = 4 * this.vertSize;
					a.vertexAttribPointer(b.aVertexPosition, 2, a.FLOAT, !1, c, 0);
					a.vertexAttribPointer(b.aTextureCoord, 2, a.FLOAT, !1, c, 8);
					a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, c, 16)
				}
			};
			a.prototype.clearScreen = function() {
				var a = this.gl;
				a.colorMask(!0, !0, !0, !0);
				for (var c = b.RenderFilter.getInstance().getDrawAreaList(), d = 0, h = c.length; d < h; d++) {
					var g = c[d];
					a.viewport(g.x, g.y, g.width, g.height);
					a.bindFramebuffer(a.FRAMEBUFFER, null);
					a.clearColor(0, 0, 0, 0);
					a.clear(a.COLOR_BUFFER_BIT)
				}
				c = b.MainContext.instance.stage;
				a.viewport(0, 0, c.stageWidth, c.stageHeight);
				this.renderCost = 0
			};
			a.prototype.setBlendMode = function(a) {
				a || (a = b.BlendMode.NORMAL);
				if (this.currentBlendMode != a) {
					var c = b.RendererContext.blendModesForGL[a];
					c && (this._draw(), this.gl.blendFunc(c[0], c[1]), this.currentBlendMode = a)
				}
			};
			a.prototype.drawRepeatImage = function(a, c, d, h, g, f, l, n, p, q) {
				q = b.MainContext.instance.rendererContext._texture_scale_factor;
				h *= q;
				for (g *= q; f < n; f += h) for (var r = l; r < p; r += g) {
					var t = Math.min(h, n - f),
						s = Math.min(g, p - r);
					this.drawImage(a, c, d, t / q, s / q, f, r, t, s)
				}
			};
			a.prototype.drawImage = function(a, b, c, d, g, f, l, n, p, q) {
				void 0 === q && (q = void 0);
				if (!this.contextLost) if (void 0 !== q) this.drawRepeatImage(a, b, c, d, g, f, l, n, p, q);
				else {
					this.createWebGLTexture(a);
					q = a._bitmapData.webGLTexture[this.glID];
					if (q !== this.currentBaseTexture || this.currentBatchSize >= this.size - 1) this._draw(), this.currentBaseTexture = q;
					var r = this.worldTransform,
						t = r.a,
						s = r.b,
						u = r.c,
						w = r.d,
						v = r.tx,
						y = r.ty;
					0 == f && 0 == l || r.append(1, 0, 0, 1, f, l);
					1 == d / n && 1 == g / p || r.append(n / d, 0, 0, p / g, 0, 0);
					f = r.a;
					l = r.b;
					n = r.c;
					p = r.d;
					q = r.tx;
					var x = r.ty;
					r.a = t;
					r.b = s;
					r.c = u;
					r.d = w;
					r.tx = v;
					r.ty = y;
					t = a._sourceWidth;
					s = a._sourceHeight;
					a = d;
					r = g;
					b /= t;
					c /= s;
					d /= t;
					g /= s;
					t = this.vertices;
					s = 4 * this.currentBatchSize * this.vertSize;
					u = this.worldAlpha;
					t[s++] = q;
					t[s++] = x;
					t[s++] = b;
					t[s++] = c;
					t[s++] = u;
					t[s++] = f * a + q;
					t[s++] = l * a + x;
					t[s++] = d + b;
					t[s++] = c;
					t[s++] = u;
					t[s++] = f * a + n * r + q;
					t[s++] = p * r + l * a + x;
					t[s++] = d + b;
					t[s++] = g + c;
					t[s++] = u;
					t[s++] = n * r + q;
					t[s++] = p * r + x;
					t[s++] = b;
					t[s++] = g + c;
					t[s++] = u;
					this.currentBatchSize++
				}
			};
			a.prototype._draw = function() {
				if (0 != this.currentBatchSize && !this.contextLost) {
					var a = b.getTimer();
					this.start();
					var c = this.gl;
					c.bindTexture(c.TEXTURE_2D, this.currentBaseTexture);
					var d = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
					c.bufferSubData(c.ARRAY_BUFFER, 0, d);
					c.drawElements(c.TRIANGLES, 6 * this.currentBatchSize, c.UNSIGNED_SHORT, 0);
					this.currentBatchSize = 0;
					this.renderCost += b.getTimer() - a;
					b.Profiler.getInstance().onDrawImage()
				}
			};
			a.prototype.setTransform = function(a) {
				var b = this.worldTransform;
				b.a = a.a;
				b.b = a.b;
				b.c = a.c;
				b.d = a.d;
				b.tx = a.tx;
				b.ty = a.ty
			};
			a.prototype.setAlpha = function(a, b) {
				this.worldAlpha = a;
				this.setBlendMode(b)
			};
			a.prototype.createWebGLTexture = function(a) {
				a = a._bitmapData;
				a.webGLTexture || (a.webGLTexture = {});
				if (!a.webGLTexture[this.glID]) {
					var b = this.gl;
					a.webGLTexture[this.glID] = b.createTexture();
					b.bindTexture(b.TEXTURE_2D, a.webGLTexture[this.glID]);
					b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
					b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a);
					b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
					b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
					b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
					b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
					b.bindTexture(b.TEXTURE_2D, null)
				}
			};
			a.prototype.pushMask = function(a) {
				this._draw();
				var b = this.gl;
				0 == this.maskList.length && b.enable(b.SCISSOR_TEST);
				a = this.getScissorRect(a);
				this.maskList.push(a);
				this.scissor(a.x, a.y, a.width, a.height)
			};
			a.prototype.getScissorRect = function(a) {
				var c = this.maskList[this.maskList.length - 1],
					d, h, g;
				c ? c.intersects(c) ? (d = Math.max(a.x + this.worldTransform.tx, c.x), h = Math.max(a.y + this.worldTransform.ty, c.y), g = Math.min(a.x + this.worldTransform.tx + a.width, c.x + c.width) - d, a = Math.min(a.y + this.worldTransform.ty + a.height, c.y + c.height) - h) : a = g = h = d = 0 : (d = a.x + this.worldTransform.tx, h = a.y + this.worldTransform.ty, g = a.width, a = a.height);
				(c = this.maskDataFreeList.pop()) ? (c.x = d, c.y = h, c.width = g, c.height = a) : c = new b.Rectangle(d, h, g, a);
				return c
			};
			a.prototype.popMask = function() {
				this._draw();
				var a = this.gl,
					b = this.maskList.pop();
				this.maskDataFreeList.push(b);
				b = this.maskList.length;
				0 != b ? (b = this.maskList[b - 1], (0 < b.width || 0 < b.height) && this.scissor(b.x, b.y, b.width, b.height)) : a.disable(a.SCISSOR_TEST)
			};
			a.prototype.scissor = function(a, c, d, h) {
				var g = this.gl;
				0 > d && (d = 0);
				0 > h && (h = 0);
				g.scissor(a, -c + b.MainContext.instance.stage.stageHeight - h, d, h)
			};
			a.prototype.setGlobalColorTransform = function(a) {
				if (this.colorTransformMatrix != a && (this._draw(), this.colorTransformMatrix = a)) {
					a = a.concat();
					var b = this.shaderManager.colorTransformShader;
					b.uniforms.colorAdd.value.w = a.splice(19, 1)[0] / 255;
					b.uniforms.colorAdd.value.z = a.splice(14, 1)[0] / 255;
					b.uniforms.colorAdd.value.y = a.splice(9, 1)[0] / 255;
					b.uniforms.colorAdd.value.x = a.splice(4, 1)[0] / 255;
					b.uniforms.matrix.value = a
				}
			};
			a.prototype.setGlobalFilter = function(a) {
				this._draw();
				this.setFilterProperties(a)
			};
			a.prototype.setFilterProperties = function(a) {
				if (a) switch (this.filterType = a.type, a.type) {
				case "blur":
					var b = this.shaderManager.blurShader;
					b.uniforms.blur.value.x = a.blurX;
					b.uniforms.blur.value.y = a.blurY
				} else this.filterType = null
			};
			a.prototype.setupFont = function(a, b) {
				void 0 === b && (b = null);
				this.canvasContext.setupFont(a, b)
			};
			a.prototype.measureText = function(a) {
				return this.canvasContext.measureText(a)
			};
			a.prototype.renderGraphics = function(a) {
				this._draw();
				var b = this.gl,
					c = this.shaderManager.primitiveShader;
				this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints = [], this.graphicsIndices = [], this.graphicsBuffer = b.createBuffer(), this.graphicsIndexBuffer = b.createBuffer());
				this.updateGraphics(a);
				this.shaderManager.activateShader(c);
				b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
				b.uniformMatrix3fv(c.translationMatrix, !1, this.worldTransform.toArray(!0));
				b.uniform2f(c.projectionVector, this.projectionX, -this.projectionY);
				b.uniform2f(c.offsetVector, 0, 0);
				b.uniform3fv(c.tintColor, [1, 1, 1]);
				b.uniform1f(c.alpha, this.worldAlpha);
				b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
				b.vertexAttribPointer(c.aVertexPosition, 2, b.FLOAT, !1, 24, 0);
				b.vertexAttribPointer(c.colorAttribute, 4, b.FLOAT, !1, 24, 8);
				b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
				b.drawElements(b.TRIANGLE_STRIP, this.graphicsIndices.length, b.UNSIGNED_SHORT, 0);
				this.shaderManager.activateShader(this.shaderManager.defaultShader)
			};
			a.prototype.updateGraphics = function(a) {
				var b = this.gl;
				this.buildRectangle(a);
				b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
				b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), b.STATIC_DRAW);
				b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
				b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
			};
			a.prototype.buildRectangle = function(a) {
				var b = a.x,
					c = a.y,
					d = a.w;
				a = a.h;
				var g = this.graphicsStyle.a,
					f = this.graphicsStyle.r * g,
					l = this.graphicsStyle.g * g,
					n = this.graphicsStyle.b * g,
					p = this.graphicsPoints,
					q = this.graphicsIndices,
					r = p.length / 6;
				p.push(b, c);
				p.push(f, l, n, g);
				p.push(b + d, c);
				p.push(f, l, n, g);
				p.push(b, c + a);
				p.push(f, l, n, g);
				p.push(b + d, c + a);
				p.push(f, l, n, g);
				q.push(r, r, r + 1, r + 2, r + 3, r + 3)
			};
			a.prototype.setGraphicsStyle = function(a, b, c, d) {
				this.graphicsStyle.r = a;
				this.graphicsStyle.g = b;
				this.graphicsStyle.b = c;
				this.graphicsStyle.a = d
			};
			a.glID = 0;
			a.isInit = !1;
			return a
		}(b.RendererContext);
	b.WebGLRenderer = d;
	d.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {}));
var egret_webgl_graphics;
(function(b) {
	b.beginFill = function(b, a) {
		void 0 === a && (a = 1);
		this._pushCommand(new d(this._setStyle, this, [(b >> 16) / 255, ((b & 65280) >> 8) / 255, (b & 255) / 255, a]))
	};
	b.drawRect = function(b, a, e, k) {
		this._pushCommand(new d(function(a) {
			this.renderContext.renderGraphics(a)
		}, this, [{
			x: b,
			y: a,
			w: e,
			h: k
		}]));
		this.checkRect(b, a, e, k)
	};
	b.drawCircle = function(b, a, e) {};
	b.drawRoundRect = function(b, a, e, d, m, h) {};
	b.drawEllipse = function(b, a, e, d) {};
	b.lineStyle = function(b, a, e, d, m, h, g, f) {};
	b.lineTo = function(b, a) {};
	b.curveTo = function(b, a, e, d) {};
	b.moveTo = function(b, a) {};
	b.clear = function() {
		this._maxY = this._maxX = this._minY = this._minX = this.commandQueue.length = 0
	};
	b.endFill = function() {};
	b._pushCommand = function(b) {
		this.commandQueue.push(b)
	};
	b._draw = function(b) {
		var a = this.commandQueue.length;
		if (0 != a) for (this.renderContext = b, b = 0; b < a; b++) {
			var e = this.commandQueue[b];
			e.method.apply(e.thisObject, e.args)
		}
	};
	var d = function() {
			return function(b, a, e) {
				this.method = b;
				this.thisObject = a;
				this.args = e
			}
		}();
	d.prototype.__class__ = "egret_webgl_graphics.Command";
	b._setStyle = function(b, a, e, d) {
		this.renderContext.setGraphicsStyle(b, a, e, d)
	};
	b.init = function() {
		for (var c in b) egret.Graphics.prototype[c] = b[c]
	}
})(egret_webgl_graphics || (egret_webgl_graphics = {}));
(function(b) {
	var d = function() {
			function c() {}
			c.compileProgram = function(a, e, d) {
				d = c.compileFragmentShader(a, d);
				e = c.compileVertexShader(a, e);
				var m = a.createProgram();
				a.attachShader(m, e);
				a.attachShader(m, d);
				a.linkProgram(m);
				a.getProgramParameter(m, a.LINK_STATUS) || b.Logger.infoWithErrorId(1020);
				return m
			};
			c.compileFragmentShader = function(a, b) {
				return c._compileShader(a, b, a.FRAGMENT_SHADER)
			};
			c.compileVertexShader = function(a, b) {
				return c._compileShader(a, b, a.VERTEX_SHADER)
			};
			c._compileShader = function(a, e, c) {
				c = a.createShader(c);
				a.shaderSource(c, e);
				a.compileShader(c);
				return a.getShaderParameter(c, a.COMPILE_STATUS) ? c : (b.Logger.info(a.getShaderInfoLog(c)), null)
			};
			c.checkCanUseWebGL = function() {
				if (void 0 == c.canUseWebGL) try {
					var a = document.createElement("canvas");
					c.canUseWebGL = !! window.WebGLRenderingContext && !(!a.getContext("webgl") && !a.getContext("experimental-webgl"))
				} catch (b) {
					c.canUseWebGL = !1
				}
				return c.canUseWebGL
			};
			return c
		}();
	b.WebGLUtils = d;
	d.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function c(a) {
				this.defaultVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}";
				this.program = this.gl = null;
				this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\ngl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
				this.uniforms = null;
				this.gl = a;
				this.init()
			}
			c.prototype.init = function() {
				var a = this.gl,
					e = b.WebGLUtils.compileProgram(a, this.defaultVertexSrc, this.fragmentSrc);
				a.useProgram(e);
				this.uSampler = a.getUniformLocation(e, "uSampler");
				this.projectionVector = a.getUniformLocation(e, "projectionVector");
				this.offsetVector = a.getUniformLocation(e, "offsetVector");
				this.dimensions = a.getUniformLocation(e, "dimensions");
				this.aVertexPosition = a.getAttribLocation(e, "aVertexPosition");
				this.aTextureCoord = a.getAttribLocation(e, "aTextureCoord");
				this.colorAttribute = a.getAttribLocation(e, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
				this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
				for (var c in this.uniforms) this.uniforms[c].uniformLocation = a.getUniformLocation(e, c);
				this.initUniforms();
				this.program = e
			};
			c.prototype.initUniforms = function() {
				if (this.uniforms) {
					var a = this.gl,
						b, c;
					for (c in this.uniforms) {
						b = this.uniforms[c];
						var d = b.type;
						"mat2" === d || "mat3" === d || "mat4" === d ? (b.glMatrix = !0, b.glValueLength = 1, "mat2" === d ? b.glFunc = a.uniformMatrix2fv : "mat3" === d ? b.glFunc = a.uniformMatrix3fv : "mat4" === d && (b.glFunc = a.uniformMatrix4fv)) : (b.glFunc = a["uniform" + d], b.glValueLength = "2f" === d || "2i" === d ? 2 : "3f" === d || "3i" === d ? 3 : "4f" === d || "4i" === d ? 4 : 1)
					}
				}
			};
			c.prototype.syncUniforms = function() {
				if (this.uniforms) {
					var a, b = this.gl,
						c;
					for (c in this.uniforms) a = this.uniforms[c], 1 === a.glValueLength ? !0 === a.glMatrix ? a.glFunc.call(b, a.uniformLocation, a.transpose, a.value) : a.glFunc.call(b, a.uniformLocation, a.value) : 2 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y) : 3 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z) : 4 === a.glValueLength && a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z, a.value.w)
				}
			};
			return c
		}();
	b.EgretShader = d;
	d.prototype.__class__ = "egret.EgretShader"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a(a) {
				b.call(this, a);
				this.fragmentSrc = "precision mediump float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform float invert;\nuniform mat4 matrix;\nuniform vec4 colorAdd;\nuniform sampler2D uSampler;\nvoid main(void) {\nvec4 locColor = texture2D(uSampler, vTextureCoord) * matrix;\nif(locColor.a != 0.0){\nlocColor += colorAdd;\n}\ngl_FragColor = locColor;\n}";
				this.uniforms = {
					matrix: {
						type: "mat4",
						value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
					},
					colorAdd: {
						type: "4f",
						value: {
							x: 0,
							y: 0,
							z: 0,
							w: 0
						}
					}
				};
				this.init()
			}
			__extends(a, b);
			return a
		}(b.EgretShader);
	b.ColorTransformShader = d;
	d.prototype.__class__ = "egret.ColorTransformShader"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a(a) {
				b.call(this, a);
				this.fragmentSrc = "precision mediump float;uniform vec2 blur;uniform sampler2D uSampler;varying vec2 vTextureCoord;void main(){gl_FragColor = vec4(0.0);gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.028 * blur.x, -0.028 * blur.y))) * 0.0044299121055113265;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.024 * blur.x, -0.024 * blur.y))) * 0.00895781211794;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.020 * blur.x, -0.020 * blur.y))) * 0.0215963866053;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.016 * blur.x, -0.016 * blur.y))) * 0.0443683338718;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.012 * blur.x, -0.012 * blur.y))) * 0.0776744219933;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.008 * blur.x, -0.008 * blur.y))) * 0.115876621105;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.004 * blur.x, -0.004 * blur.y))) * 0.147308056121;gl_FragColor += texture2D(uSampler, vTextureCoord) * 0.159576912161;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.004 * blur.x,  0.004 * blur.y))) * 0.147308056121;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.008 * blur.x,  0.008 * blur.y))) * 0.115876621105;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.012 * blur.x,  0.012 * blur.y))) * 0.0776744219933;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.016 * blur.x,  0.016 * blur.y))) * 0.0443683338718;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.020 * blur.x,  0.020 * blur.y))) * 0.0215963866053;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.024 * blur.x,  0.024 * blur.y))) * 0.00895781211794;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.028 * blur.x,  0.028 * blur.y))) * 0.0044299121055113265;}";
				this.uniforms = {
					blur: {
						type: "2f",
						value: {
							x: 2,
							y: 2
						}
					}
				};
				this.init()
			}
			__extends(a, b);
			return a
		}(b.EgretShader);
	b.BlurShader = d;
	d.prototype.__class__ = "egret.BlurShader"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function c(a) {
				this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = this.gl = null;
				this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
				this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
				this.gl = a;
				this.init()
			}
			c.prototype.init = function() {
				var a = this.gl,
					e = b.WebGLUtils.compileProgram(a, this.vertexSrc, this.fragmentSrc);
				a.useProgram(e);
				this.projectionVector = a.getUniformLocation(e, "projectionVector");
				this.offsetVector = a.getUniformLocation(e, "offsetVector");
				this.tintColor = a.getUniformLocation(e, "tint");
				this.aVertexPosition = a.getAttribLocation(e, "aVertexPosition");
				this.colorAttribute = a.getAttribLocation(e, "aColor");
				this.attributes = [this.aVertexPosition, this.colorAttribute];
				this.translationMatrix = a.getUniformLocation(e, "translationMatrix");
				this.alpha = a.getUniformLocation(e, "alpha");
				this.program = e
			};
			return c
		}();
	b.PrimitiveShader = d;
	d.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {}));
(function(b) {
	var d = function() {
			function c(a) {
				this.gl = null;
				this.maxAttibs = 10;
				this.attribState = [];
				this.tempAttribState = [];
				this.blurShader = this.colorTransformShader = this.primitiveShader = this.defaultShader = this.currentShader = null;
				for (var b = 0; b < this.maxAttibs; b++) this.attribState[b] = !1;
				this.setContext(a)
			}
			c.prototype.setContext = function(a) {
				this.gl = a;
				this.primitiveShader = new b.PrimitiveShader(a);
				this.defaultShader = new b.EgretShader(a);
				this.colorTransformShader = new b.ColorTransformShader(a);
				this.blurShader = new b.BlurShader(a);
				this.activateShader(this.defaultShader)
			};
			c.prototype.activateShader = function(a) {
				this.currentShader != a && (this.gl.useProgram(a.program), this.setAttribs(a.attributes), this.currentShader = a)
			};
			c.prototype.setAttribs = function(a) {
				var b, c;
				c = this.tempAttribState.length;
				for (b = 0; b < c; b++) this.tempAttribState[b] = !1;
				c = a.length;
				for (b = 0; b < c; b++) this.tempAttribState[a[b]] = !0;
				a = this.gl;
				c = this.attribState.length;
				for (b = 0; b < c; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? a.enableVertexAttribArray(b) : a.disableVertexAttribArray(b))
			};
			return c
		}();
	b.WebGLShaderManager = d;
	d.prototype.__class__ = "egret.WebGLShaderManager"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this)
			}
			__extends(a, c);
			a.prototype.proceed = function(a) {
				function c() {
					if (4 == h.readyState) if (h.status != a._status && (a._status = h.status, b.HTTPStatusEvent.dispatchHTTPStatusEvent(a, h.status)), 400 <= h.status || 0 == h.status) b.IOErrorEvent.dispatchIOErrorEvent(a);
					else {
						switch (a.dataFormat) {
						case b.URLLoaderDataFormat.TEXT:
							a.data = h.responseText;
							break;
						case b.URLLoaderDataFormat.VARIABLES:
							a.data = new b.URLVariables(h.responseText);
							break;
						case b.URLLoaderDataFormat.BINARY:
							a.data = h.response;
							break;
						default:
							a.data = h.responseText
						}
						b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
					}
				}
				if (a.dataFormat == b.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
				else if (a.dataFormat == b.URLLoaderDataFormat.SOUND) this.loadSound(a);
				else {
					var d = a._request,
						h = this.getXHR();
					h.onreadystatechange = c;
					var g = b.NetContext._getUrl(d);
					h.open(d.method, g, !0);
					this.setResponseType(h, a.dataFormat);
					d.method != b.URLRequestMethod.GET && d.data ? d.data instanceof b.URLVariables ? (h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), h.send(d.data.toString())) : (h.setRequestHeader("Content-Type", "multipart/form-data"), h.send(d.data)) : h.send()
				}
			};
			a.prototype.loadSound = function(a) {
				function c(g) {
					b.clearTimeout(h.__timeoutId);
					h.removeEventListener("canplaythrough", c, !1);
					h.removeEventListener("error", d, !1);
					g = new b.Sound;
					g._setAudio(h);
					a.data = g;
					b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
				}

				function d(g) {
					b.clearTimeout(h.__timeoutId);
					h.removeEventListener("canplaythrough", c, !1);
					h.removeEventListener("error", d, !1);
					b.IOErrorEvent.dispatchIOErrorEvent(a)
				}
				var h = new Audio(a._request.url);
				h.__timeoutId = b.setTimeout(c, this, 100);
				h.addEventListener("canplaythrough", c, !1);
				h.addEventListener("error", d, !1);
				h.load()
			};
			a.prototype.getXHR = function() {
				return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
			};
			a.prototype.setResponseType = function(a, c) {
				switch (c) {
				case b.URLLoaderDataFormat.TEXT:
				case b.URLLoaderDataFormat.VARIABLES:
					a.responseType = b.URLLoaderDataFormat.TEXT;
					break;
				case b.URLLoaderDataFormat.BINARY:
					a.responseType = "arraybuffer";
					break;
				default:
					a.responseType = c
				}
			};
			a.prototype.loadTexture = function(a) {
				var c = a._request,
					d = new Image;
				d.onload = function(c) {
					d.onerror = null;
					d.onload = null;
					c = new b.Texture;
					c._setBitmapData(d);
					a.data = c;
					b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
				};
				d.onerror = function(c) {
					d.onerror = null;
					d.onload = null;
					b.IOErrorEvent.dispatchIOErrorEvent(a)
				};
				d.src = c.url
			};
			return a
		}(b.NetContext);
	b.HTML5NetContext = d;
	d.prototype.__class__ = "egret.HTML5NetContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this._isTouchDown = !1;
				this.rootDiv = null;
				this.rootDiv = document.getElementById(b.StageDelegate.canvas_div_name)
			}
			__extends(a, c);
			a.prototype.prevent = function(a) {
				a.stopPropagation();
				!0 != a.isScroll && a.preventDefault()
			};
			a.prototype.run = function() {
				var a = this;
				window.navigator.msPointerEnabled ? (this.rootDiv.addEventListener("MSPointerDown", function(b) {
					a._onTouchBegin(b);
					a.prevent(b)
				}, !1), this.rootDiv.addEventListener("MSPointerMove", function(b) {
					a._onTouchMove(b);
					a.prevent(b)
				}, !1), this.rootDiv.addEventListener("MSPointerUp", function(b) {
					a._onTouchEnd(b);
					a.prevent(b)
				}, !1)) : b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE ? this.addTouchListener() : b.MainContext.deviceType == b.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
				window.addEventListener("mousedown", function(b) {
					a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
				});
				window.addEventListener("mouseup", function(b) {
					a._isTouchDown && (a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._onTouchEnd(b));
					a._isTouchDown = !1
				})
			};
			a.prototype.addMouseListener = function() {
				var a = this;
				this.rootDiv.addEventListener("mousedown", function(b) {
					a._onTouchBegin(b)
				});
				this.rootDiv.addEventListener("mousemove", function(b) {
					a._onTouchMove(b)
				});
				this.rootDiv.addEventListener("mouseup", function(b) {
					a._onTouchEnd(b)
				})
			};
			a.prototype.addTouchListener = function() {
				var a = this;
				this.rootDiv.addEventListener("touchstart", function(b) {
					for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchBegin(b.changedTouches[d]);
					a.prevent(b)
				}, !1);
				this.rootDiv.addEventListener("touchmove", function(b) {
					for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchMove(b.changedTouches[d]);
					a.prevent(b)
				}, !1);
				this.rootDiv.addEventListener("touchend", function(b) {
					for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
					a.prevent(b)
				}, !1);
				this.rootDiv.addEventListener("touchcancel", function(b) {
					for (var c = b.changedTouches.length, d = 0; d < c; d++) a._onTouchEnd(b.changedTouches[d]);
					a.prevent(b)
				}, !1)
			};
			a.prototype.inOutOfCanvas = function(a) {
				var c = this.getLocation(this.rootDiv, a);
				a = c.x;
				var c = c.y,
					d = b.MainContext.instance.stage;
				return 0 > a || 0 > c || a > d.stageWidth || c > d.stageHeight ? !0 : !1
			};
			a.prototype.dispatchLeaveStageEvent = function() {
				this.touchingIdentifiers.length = 0;
				b.MainContext.instance.stage.dispatchEventWith(b.Event.LEAVE_STAGE)
			};
			a.prototype._onTouchBegin = function(a) {
				var b = this.getLocation(this.rootDiv, a),
					c = -1;
				a.hasOwnProperty("identifier") && (c = a.identifier);
				this.onTouchBegan(b.x, b.y, c)
			};
			a.prototype._onTouchMove = function(a) {
				var b = this.getLocation(this.rootDiv, a),
					c = -1;
				a.hasOwnProperty("identifier") && (c = a.identifier);
				this.onTouchMove(b.x, b.y, c)
			};
			a.prototype._onTouchEnd = function(a) {
				var b = this.getLocation(this.rootDiv, a),
					c = -1;
				a.hasOwnProperty("identifier") && (c = a.identifier);
				this.onTouchEnd(b.x, b.y, c)
			};
			a.prototype.getLocation = function(a, c) {
				var d = document.documentElement,
					h = window,
					g, f;
				"function" === typeof a.getBoundingClientRect ? (f = a.getBoundingClientRect(), g = f.left, f = f.top) : f = g = 0;
				g += h.pageXOffset - d.clientLeft;
				f += h.pageYOffset - d.clientTop;
				null != c.pageX ? (d = c.pageX, h = c.pageY) : (g -= document.body.scrollLeft, f -= document.body.scrollTop, d = c.clientX, h = c.clientY);
				var l = b.Point.identity;
				l.x = (d - g) / b.StageDelegate.getInstance().getScaleX();
				l.y = (h - f) / b.StageDelegate.getInstance().getScaleY();
				return l
			};
			return a
		}(b.TouchContext);
	b.HTML5TouchContext = d;
	d.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this.inputElement = this.div = null;
				this._hasListeners = !1;
				this._inputType = "";
				this._isShow = !1;
				this.textValue = "";
				this._height = this._width = 0;
				this._styleInfoes = {};
				var e = b.StageDelegate.getInstance().getScaleX(),
					d = b.StageDelegate.getInstance().getScaleY(),
					m = b.Browser.getInstance().$new("div");
				m.position.x = 0;
				m.position.y = 0;
				m.scale.x = e;
				m.scale.y = d;
				m.transforms();
				m.style[a.getTrans("transformOrigin")] = "0% 0% 0px";
				this.div = m;
				d = b.MainContext.instance.stage;
				e = d.stageWidth;
				d = d.stageHeight;
				m = new b.Shape;
				m.width = e;
				m.height = d;
				m.touchEnabled = !0;
				this._shape = m;
				this.getStageDelegateDiv().appendChild(this.div)
			}
			__extends(a, c);
			a.getTrans = function(b) {
				"" == a.header && (a.header = a.getHeader());
				return a.header + b.substring(1, b.length)
			};
			a.getHeader = function() {
				for (var a = document.createElement("div").style, b = ["t", "webkitT", "msT", "MozT", "OT"], c = 0; c < b.length; c++) if (b[c] + "ransform" in a) return b[c];
				return b[0]
			};
			a.prototype.getStageDelegateDiv = function() {
				var a = b.Browser.getInstance().$("#StageDelegateDiv");
				a || (a = b.Browser.getInstance().$new("div"), a.id = "StageDelegateDiv", document.getElementById(b.StageDelegate.canvas_div_name).appendChild(a), a.transforms());
				return a
			};
			a.prototype._setMultiline = function(a) {
				c.prototype._setMultiline.call(this, a);
				this.createInput()
			};
			a.prototype.callHandler = function(a) {
				a.stopPropagation()
			};
			a.prototype._add = function() {
				this.div && null == this.div.parentNode && this.getStageDelegateDiv().appendChild(this.div)
			};
			a.prototype._remove = function() {
				this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape);
				this.div && this.div.parentNode && this.div.parentNode.removeChild(this.div)
			};
			a.prototype._addListeners = function() {
				this.inputElement && !this._hasListeners && (this._hasListeners = !0, this.inputElement.addEventListener("mousedown", this.callHandler), this.inputElement.addEventListener("touchstart", this.callHandler), this.inputElement.addEventListener("MSPointerDown", this.callHandler))
			};
			a.prototype._removeListeners = function() {
				this.inputElement && this._hasListeners && (this._hasListeners = !1, this.inputElement.removeEventListener("mousedown", this.callHandler), this.inputElement.removeEventListener("touchstart", this.callHandler), this.inputElement.removeEventListener("MSPointerDown", this.callHandler))
			};
			a.prototype.createInput = function() {
				var a = this._multiline ? "textarea" : "input";
				this._inputType != a && (this._inputType = a, null != this.inputElement && (this._removeListeners(), this.div.removeChild(this.inputElement)), this._multiline ? (a = document.createElement("textarea"), a.style.resize = "none") : a = document.createElement("input"), this._styleInfoes = {}, a.type = "text", this.inputElement = a, this.inputElement.value = "", this.div.appendChild(a), this._addListeners(), this.setElementStyle("width", "0px"), this.setElementStyle("border", "none"), this.setElementStyle("margin", "0"), this.setElementStyle("padding", "0"), this.setElementStyle("outline", "medium"), this.setElementStyle("verticalAlign", "top"), this.setElementStyle("wordBreak", "break-all"), this.setElementStyle("overflow", "hidden"))
			};
			a.prototype._open = function(a, b, c, d) {};
			a.prototype._setScale = function(a, d) {
				c.prototype._setScale.call(this, a, d);
				var m = b.StageDelegate.getInstance().getScaleX(),
					h = b.StageDelegate.getInstance().getScaleY();
				this.div.scale.x = m * a;
				this.div.scale.y = h * d;
				this.div.transforms()
			};
			a.prototype.changePosition = function(a, c) {
				var d = b.StageDelegate.getInstance().getScaleX(),
					h = b.StageDelegate.getInstance().getScaleY();
				this.div.position.x = a * d;
				this.div.position.y = c * h;
				this.div.transforms()
			};
			a.prototype.setStyles = function() {
				this.setElementStyle("fontStyle", this._italic ? "italic" : "normal");
				this.setElementStyle("fontWeight", this._bold ? "bold" : "normal");
				this.setElementStyle("textAlign", this._textAlign);
				this.setElementStyle("fontSize", this._size + "px");
				this.setElementStyle("color", "#000000");
				this.setElementStyle("width", this._width + "px");
				this.setElementStyle("height", this._height + "px");
				this.setElementStyle("display", "block")
			};
			a.prototype._show = function() {
				b.MainContext.instance.stage._changeSizeDispatchFlag = !1;
				0 < this._maxChars ? this.inputElement.setAttribute("maxlength", this._maxChars) : this.inputElement.removeAttribute("maxlength");
				this._isShow = !0;
				var a = this._getText();
				this.inputElement.value = a;
				var c = this;
				this.inputElement.oninput = function() {
					c.textValue = c.inputElement.value;
					c.dispatchEvent(new b.Event("updateText"))
				};
				this.setStyles();
				this.inputElement.focus();
				this.inputElement.selectionStart = a.length;
				this.inputElement.selectionEnd = a.length;
				this._shape && null == this._shape.parent && b.MainContext.instance.stage.addChild(this._shape)
			};
			a.prototype._hide = function() {
				b.MainContext.instance.stage._changeSizeDispatchFlag = !0;
				if (null != this.inputElement) {
					this._isShow = !1;
					this.inputElement.oninput = function() {};
					this.setElementStyle("border", "none");
					this.setElementStyle("display", "none");
					this.inputElement.value = "";
					this.setElementStyle("width", "0px");
					window.scrollTo(0, 0);
					var a = this;
					b.setTimeout(function() {
						a.inputElement.blur();
						window.scrollTo(0, 0)
					}, this, 50);
					this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape)
				}
			};
			a.prototype._getText = function() {
				this.textValue || (this.textValue = "");
				return this.textValue
			};
			a.prototype._setText = function(a) {
				this.textValue = a;
				this.resetText()
			};
			a.prototype.resetText = function() {
				this.inputElement && (this.inputElement.value = this.textValue)
			};
			a.prototype._setWidth = function(a) {
				this._width = a
			};
			a.prototype._setHeight = function(a) {
				this._height = a
			};
			a.prototype.setElementStyle = function(a, b) {
				this.inputElement && this._styleInfoes[a] != b && (this.inputElement.style[a] = b, this._styleInfoes[a] = b)
			};
			a.header = "";
			return a
		}(b.StageText);
	b.HTML5StageText = d;
	d.prototype.__class__ = "egret.HTML5StageText"
})(egret || (egret = {}));
egret.StageText.create = function() {
	return new egret.HTML5StageText
};
var __extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
}, RES;
(function(b) {
	var d = function(b) {
			function a(a, d, m) {
				void 0 === d && (d = !1);
				void 0 === m && (m = !1);
				b.call(this, a, d, m);
				this.itemsTotal = this.itemsLoaded = 0;
				this.groupName = "";
				this.resItem = null
			}
			__extends(a, b);
			a.dispatchResourceEvent = function(b, c, d, h, g, f) {
				void 0 === d && (d = "");
				void 0 === h && (h = null);
				void 0 === g && (g = 0);
				void 0 === f && (f = 0);
				var l = egret.Event._getPropertyData(a);
				l.groupName = d;
				l.resItem = h;
				l.itemsLoaded = g;
				l.itemsTotal = f;
				egret.Event._dispatchByTarget(a, b, c, l)
			};
			a.ITEM_LOAD_ERROR = "itemLoadError";
			a.CONFIG_COMPLETE = "configComplete";
			a.CONFIG_LOAD_ERROR = "configLoadError";
			a.GROUP_PROGRESS = "groupProgress";
			a.GROUP_COMPLETE = "groupComplete";
			a.GROUP_LOAD_ERROR = "groupLoadError";
			return a
		}(egret.Event);
	b.ResourceEvent = d;
	d.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {}));
(function(b) {
	var d = function() {
			function b(a, e, c) {
				this.groupName = "";
				this.data = null;
				this._loaded = !1;
				this.name = a;
				this.url = e;
				this.type = c
			}
			Object.defineProperty(b.prototype, "loaded", {
				get: function() {
					return this.data ? this.data.loaded : this._loaded
				},
				set: function(a) {
					this.data && (this.data.loaded = a);
					this._loaded = a
				},
				enumerable: !0,
				configurable: !0
			});
			b.prototype.toString = function() {
				return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]'
			};
			b.TYPE_XML = "xml";
			b.TYPE_IMAGE = "image";
			b.TYPE_BIN = "bin";
			b.TYPE_TEXT = "text";
			b.TYPE_JSON = "json";
			b.TYPE_SHEET = "sheet";
			b.TYPE_FONT = "font";
			b.TYPE_SOUND = "sound";
			return b
		}();
	b.ResourceItem = d;
	d.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {}));
(function(b) {
	var d = function() {
			function c() {
				this.keyMap = {};
				this.groupDic = {};
				b.configInstance = this
			}
			c.prototype.getGroupByName = function(a) {
				var b = [];
				if (!this.groupDic[a]) return b;
				a = this.groupDic[a];
				for (var c = a.length, d = 0; d < c; d++) b.push(this.parseResourceItem(a[d]));
				return b
			};
			c.prototype.getRawGroupByName = function(a) {
				return this.groupDic[a] ? this.groupDic[a] : []
			};
			c.prototype.createGroup = function(a, b, c) {
				void 0 === c && (c = !1);
				if (!c && this.groupDic[a] || !b || 0 == b.length) return !1;
				c = this.groupDic;
				for (var d = [], h = b.length, g = 0; g < h; g++) {
					var f = b[g],
						l = c[f];
					if (l) for (var f = l.length, n = 0; n < f; n++) {
						var p = l[n]; - 1 == d.indexOf(p) && d.push(p)
					} else(p = this.keyMap[f]) ? -1 == d.indexOf(p) && d.push(p) : egret.Logger.warningWithErrorId(2E3, f)
				}
				if (0 == d.length) return !1;
				this.groupDic[a] = d;
				return !0
			};
			c.prototype.parseConfig = function(a, b) {
				if (a) {
					var c = a.resources;
					if (c) for (var d = c.length, h = 0; h < d; h++) {
						var g = c[h],
							f = g.url;
						f && -1 == f.indexOf("://") && (g.url = b + f);
						this.addItemToKeyMap(g)
					}
					if (c = a.groups) for (d = c.length, h = 0; h < d; h++) {
						for (var f = c[h], l = [], n = f.keys.split(","), p = n.length, q = 0; q < p; q++) g = n[q].trim(), (g = this.keyMap[g]) && -1 == l.indexOf(g) && l.push(g);
						this.groupDic[f.name] = l
					}
				}
			};
			c.prototype.addSubkey = function(a, b) {
				var c = this.keyMap[b];
				c && !this.keyMap[a] && (this.keyMap[a] = c)
			};
			c.prototype.addItemToKeyMap = function(a) {
				this.keyMap[a.name] || (this.keyMap[a.name] = a);
				if (a.hasOwnProperty("subkeys")) {
					var b = a.subkeys.split(",");
					a.subkeys = b;
					for (var c = b.length, d = 0; d < c; d++) {
						var h = b[d];
						null == this.keyMap[h] && (this.keyMap[h] = a)
					}
				}
			};
			c.prototype.getName = function(a) {
				return (a = this.keyMap[a]) ? a.name : ""
			};
			c.prototype.getType = function(a) {
				return (a = this.keyMap[a]) ? a.type : ""
			};
			c.prototype.getRawResourceItem = function(a) {
				return this.keyMap[a]
			};
			c.prototype.getResourceItem = function(a) {
				return (a = this.keyMap[a]) ? this.parseResourceItem(a) : null
			};
			c.prototype.parseResourceItem = function(a) {
				var e = new b.ResourceItem(a.name, a.url, a.type);
				e.data = a;
				return e
			};
			return c
		}();
	b.ResourceConfig = d;
	d.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this.thread = 2;
				this.loadingCount = 0;
				this.resInstance = this.callBack = null;
				this.groupTotalDic = {};
				this.numLoadedDic = {};
				this.itemListDic = {};
				this.groupErrorDic = {};
				this.retryTimesDic = {};
				this.maxRetryTimes = 3;
				this.failedList = [];
				this.priorityQueue = {};
				this.lazyLoadList = [];
				this.analyzerDic = {};
				this.queueIndex = 0
			}
			__extends(a, c);
			a.prototype.isGroupInLoading = function(a) {
				return void 0 !== this.itemListDic[a]
			};
			a.prototype.loadGroup = function(a, c, d) {
				void 0 === d && (d = 0);
				if (!this.itemListDic[c] && c) if (a && 0 != a.length) {
					this.priorityQueue[d] ? this.priorityQueue[d].push(c) : this.priorityQueue[d] = [c];
					this.itemListDic[c] = a;
					d = a.length;
					for (var h = 0; h < d; h++) a[h].groupName = c;
					this.groupTotalDic[c] = a.length;
					this.numLoadedDic[c] = 0;
					this.next()
				} else egret.Logger.warningWithErrorId(2001, c), a = new b.ResourceEvent(b.ResourceEvent.GROUP_LOAD_ERROR), a.groupName = c, this.dispatchEvent(a)
			};
			a.prototype.loadItem = function(a) {
				this.lazyLoadList.push(a);
				a.groupName = "";
				this.next()
			};
			a.prototype.next = function() {
				for (; this.loadingCount < this.thread;) {
					var a = this.getOneResourceItem();
					if (!a) break;
					this.loadingCount++;
					if (a.loaded) this.onItemComplete(a);
					else {
						var c = this.analyzerDic[a.type];
						c || (c = this.analyzerDic[a.type] = egret.Injector.getInstance(b.AnalyzerBase, a.type));
						c.loadFile(a, this.onItemComplete, this)
					}
				}
			};
			a.prototype.getOneResourceItem = function() {
				if (0 < this.failedList.length) return this.failedList.shift();
				var a = Number.NEGATIVE_INFINITY,
					b;
				for (b in this.priorityQueue) a = Math.max(a, b);
				a = this.priorityQueue[a];
				if (!a || 0 == a.length) return 0 == this.lazyLoadList.length ? null : this.lazyLoadList.pop();
				b = a.length;
				for (var c, d = 0; d < b; d++) {
					this.queueIndex >= b && (this.queueIndex = 0);
					c = this.itemListDic[a[this.queueIndex]];
					if (0 < c.length) break;
					this.queueIndex++
				}
				return 0 == c.length ? null : c.shift()
			};
			a.prototype.onItemComplete = function(a) {
				this.loadingCount--;
				var c = a.groupName;
				if (!a.loaded) {
					var d = this.retryTimesDic[a.name] || 1;
					if (d > this.maxRetryTimes) delete this.retryTimesDic[a.name], b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.ITEM_LOAD_ERROR, c, a);
					else {
						this.retryTimesDic[a.name] = d + 1;
						this.failedList.push(a);
						this.next();
						return
					}
				}
				if (c) {
					this.numLoadedDic[c]++;
					var d = this.numLoadedDic[c],
						h = this.groupTotalDic[c];
					a.loaded || (this.groupErrorDic[c] = !0);
					b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.GROUP_PROGRESS, c, a, d, h);
					d == h && (a = this.groupErrorDic[c], this.removeGroupName(c), delete this.groupTotalDic[c], delete this.numLoadedDic[c], delete this.itemListDic[c], delete this.groupErrorDic[c], a ? b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_LOAD_ERROR, c) : b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_COMPLETE, c))
				} else this.callBack.call(this.resInstance, a);
				this.next()
			};
			a.prototype.removeGroupName = function(a) {
				for (var b in this.priorityQueue) {
					for (var c = this.priorityQueue[b], d = c.length, g = 0, f = !1, d = c.length, l = 0; l < d; l++) {
						if (c[l] == a) {
							c.splice(g, 1);
							f = !0;
							break
						}
						g++
					}
					if (f) {
						0 == c.length && delete this.priorityQueue[b];
						break
					}
				}
			};
			return a
		}(egret.EventDispatcher);
	b.ResourceLoader = d;
	d.prototype.__class__ = "RES.ResourceLoader"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this.resourceConfig = null;
				this.resourceConfig = b.configInstance
			}
			__extends(a, c);
			a.prototype.addSubkey = function(a, b) {
				this.resourceConfig.addSubkey(a, b)
			};
			a.prototype.loadFile = function(a, b, c) {};
			a.prototype.getRes = function(a) {};
			a.prototype.destroyRes = function(a) {
				return !1
			};
			a.getStringPrefix = function(a) {
				if (!a) return "";
				var b = a.indexOf(".");
				return -1 != b ? a.substring(0, b) : ""
			};
			a.getStringTail = function(a) {
				if (!a) return "";
				var b = a.indexOf(".");
				return -1 != b ? a.substring(b + 1) : ""
			};
			return a
		}(egret.HashObject);
	b.AnalyzerBase = d;
	d.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a() {
				b.call(this);
				this.fileDic = {};
				this.resItemDic = [];
				this._dataFormat = egret.URLLoaderDataFormat.BINARY;
				this.recycler = new egret.Recycler
			}
			__extends(a, b);
			a.prototype.loadFile = function(a, b, c) {
				if (this.fileDic[a.name]) b.call(c, a);
				else {
					var d = this.getLoader();
					this.resItemDic[d.hashCode] = {
						item: a,
						func: b,
						thisObject: c
					};
					d.load(new egret.URLRequest(a.url))
				}
			};
			a.prototype.getLoader = function() {
				var a = this.recycler.pop();
				a || (a = new egret.URLLoader, a.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
				a.dataFormat = this._dataFormat;
				return a
			};
			a.prototype.onLoadFinish = function(a) {
				var b = a.target,
					c = this.resItemDic[b.hashCode];
				delete this.resItemDic[b.hashCode];
				var d = c.item,
					g = c.func;
				d.loaded = a.type == egret.Event.COMPLETE;
				d.loaded && this.analyzeData(d, b.data);
				this.recycler.push(b);
				g.call(c.thisObject, d)
			};
			a.prototype.analyzeData = function(a, b) {
				var c = a.name;
				!this.fileDic[c] && b && (this.fileDic[c] = b)
			};
			a.prototype.getRes = function(a) {
				return this.fileDic[a]
			};
			a.prototype.hasRes = function(a) {
				return null != this.getRes(a)
			};
			a.prototype.destroyRes = function(a) {
				return this.fileDic[a] ? (delete this.fileDic[a], !0) : !1
			};
			return a
		}(b.AnalyzerBase);
	b.BinAnalyzer = d;
	d.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a() {
				b.call(this);
				this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
			}
			__extends(a, b);
			a.prototype.analyzeData = function(a, b) {
				var c = a.name;
				!this.fileDic[c] && b && (this.fileDic[c] = b, (c = a.data) && c.scale9grid && (c = c.scale9grid.split(","), b.scale9Grid = new egret.Rectangle(parseInt(c[0]), parseInt(c[1]), parseInt(c[2]), parseInt(c[3]))))
			};
			return a
		}(b.BinAnalyzer);
	b.ImageAnalyzer = d;
	d.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a() {
				b.call(this);
				this._dataFormat = egret.URLLoaderDataFormat.TEXT
			}
			__extends(a, b);
			a.prototype.analyzeData = function(a, b) {
				var c = a.name;
				if (!this.fileDic[c] && b) try {
					this.fileDic[c] = JSON.parse(b)
				} catch (d) {
					egret.Logger.warningWithErrorId(1017, a.url, b)
				}
			};
			return a
		}(b.BinAnalyzer);
	b.JsonAnalyzer = d;
	d.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a() {
				b.call(this);
				this._dataFormat = egret.URLLoaderDataFormat.TEXT
			}
			__extends(a, b);
			return a
		}(b.BinAnalyzer);
	b.TextAnalyzer = d;
	d.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(c) {
			function a() {
				c.call(this);
				this.sheetMap = {};
				this.textureMap = {};
				this._dataFormat = egret.URLLoaderDataFormat.TEXT
			}
			__extends(a, c);
			a.prototype.getRes = function(a) {
				var c = this.fileDic[a];
				c || (c = this.textureMap[a]);
				!c && (c = b.AnalyzerBase.getStringPrefix(a), c = this.fileDic[c]) && (a = b.AnalyzerBase.getStringTail(a), c = c.getTexture(a));
				return c
			};
			a.prototype.onLoadFinish = function(a) {
				var b = a.target,
					c = this.resItemDic[b.hashCode];
				delete this.resItemDic[b.hashCode];
				var d = c.item,
					g = c.func;
				d.loaded = a.type == egret.Event.COMPLETE;
				if (d.loaded) if ("string" == typeof b.data) {
					if (d.loaded = !1, a = this.analyzeConfig(d, b.data)) {
						d.url = a;
						this._dataFormat = egret.URLLoaderDataFormat.TEXTURE;
						this.loadFile(d, g, c.thisObject);
						this._dataFormat = egret.URLLoaderDataFormat.TEXT;
						return
					}
				} else this.analyzeBitmap(d, b.data);
				d.url = d.data.url;
				this.recycler.push(b);
				g.call(c.thisObject, d)
			};
			a.prototype.analyzeConfig = function(a, b) {
				var c = a.name,
					d, g = "";
				try {
					d = JSON.parse(b)
				} catch (f) {
					egret.Logger.warningWithErrorId(1017, a.url, b)
				}
				d && (this.sheetMap[c] = d, g = this.getRelativePath(a.url, d.file));
				return g
			};
			a.prototype.analyzeBitmap = function(a, b) {
				var c = a.name;
				if (!this.fileDic[c] && b) {
					var d = this.sheetMap[c];
					delete this.sheetMap[c];
					d = this.parseSpriteSheet(b, d, a.data && a.data.subkeys ? "" : c);
					this.fileDic[c] = d
				}
			};
			a.prototype.getRelativePath = function(a, b) {
				a = a.split("\\").join("/");
				var c = a.lastIndexOf("/");
				return a = -1 != c ? a.substring(0, c + 1) + b : b
			};
			a.prototype.parseSpriteSheet = function(a, b, c) {
				b = b.frames;
				if (!b) return null;
				var d = new egret.SpriteSheet(a),
					g = this.textureMap,
					f;
				for (f in b) {
					var l = b[f];
					a = d.createTexture(f, l.x, l.y, l.w, l.h, l.offX, l.offY, l.sourceW, l.sourceH);
					l.scale9grid && (l = l.scale9grid.split(","), a.scale9Grid = new egret.Rectangle(parseInt(l[0]), parseInt(l[1]), parseInt(l[2]), parseInt(l[3])));
					null == g[f] && (g[f] = a, c && this.addSubkey(f, c))
				}
				return d
			};
			a.prototype.destroyRes = function(a) {
				var b = this.fileDic[a];
				if (b) {
					delete this.fileDic[a];
					for (var c in b._textureMap) this.textureMap[c] && delete this.textureMap[c];
					return !0
				}
				return !1
			};
			return a
		}(b.BinAnalyzer);
	b.SheetAnalyzer = d;
	d.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a() {
				b.call(this)
			}
			__extends(a, b);
			a.prototype.analyzeConfig = function(a, b) {
				var c = a.name,
					d, g = "";
				try {
					d = JSON.parse(b)
				} catch (f) {}
				d ? g = this.getRelativePath(a.url, d.file) : (d = b, g = this.getTexturePath(a.url, d));
				this.sheetMap[c] = d;
				return g
			};
			a.prototype.analyzeBitmap = function(a, b) {
				var c = a.name;
				if (!this.fileDic[c] && b) {
					var d = this.sheetMap[c];
					delete this.sheetMap[c];
					d = new egret.BitmapFont(b, d);
					this.fileDic[c] = d
				}
			};
			a.prototype.getTexturePath = function(a, b) {
				var c = "",
					d = b.split("\n")[2],
					g = d.indexOf('file="'); - 1 != g && (d = d.substring(g + 6), g = d.indexOf('"'), c = d.substring(0, g));
				a = a.split("\\").join("/");
				g = a.lastIndexOf("/");
				return a = -1 != g ? a.substring(0, g + 1) + c : c
			};
			a.prototype.destroyRes = function(a) {
				return this.fileDic[a] ? (delete this.fileDic[a], !0) : !1
			};
			return a
		}(b.SheetAnalyzer);
	b.FontAnalyzer = d;
	d.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a() {
				b.call(this);
				this._dataFormat = egret.URLLoaderDataFormat.SOUND
			}
			__extends(a, b);
			a.prototype.analyzeData = function(a, b) {
				var c = a.name;
				!this.fileDic[c] && b && (this.fileDic[c] = b, (c = a.data) && c.soundType ? b.preload(c.soundType) : b.preload(egret.Sound.EFFECT))
			};
			return a
		}(b.BinAnalyzer);
	b.SoundAnalyzer = d;
	d.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	var d = function(b) {
			function a() {
				b.call(this);
				this._dataFormat = egret.URLLoaderDataFormat.TEXT
			}
			__extends(a, b);
			a.prototype.analyzeData = function(a, b) {
				var c = a.name;
				if (!this.fileDic[c] && b) try {
					var d = egret.XML.parse(b);
					this.fileDic[c] = d
				} catch (g) {}
			};
			return a
		}(b.BinAnalyzer);
	b.XMLAnalyzer = d;
	d.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {}));
__extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
};
(function(b) {
	b.loadConfig = function(a, b, d) {
		void 0 === b && (b = "");
		void 0 === d && (d = "json");
		c.loadConfig(a, b, d)
	};
	b.loadGroup = function(a, b) {
		void 0 === b && (b = 0);
		c.loadGroup(a, b)
	};
	b.isGroupLoaded = function(a) {
		return c.isGroupLoaded(a)
	};
	b.getGroupByName = function(a) {
		return c.getGroupByName(a)
	};
	b.createGroup = function(a, b, d) {
		void 0 === d && (d = !1);
		return c.createGroup(a, b, d)
	};
	b.hasRes = function(a) {
		return c.hasRes(a)
	};
	b.parseConfig = function(a, b) {
		void 0 === b && (b = "");
		c.parseConfig(a, b)
	};
	b.getRes = function(a) {
		return c.getRes(a)
	};
	b.getResAsync = function(a, b, d) {
		c.getResAsync(a, b, d)
	};
	b.getResByUrl = function(a, b, d, m) {
		void 0 === m && (m = "");
		c.getResByUrl(a, b, d, m)
	};
	b.destroyRes = function(a) {
		return c.destroyRes(a)
	};
	b.setMaxLoadingThread = function(a) {
		c.setMaxLoadingThread(a)
	};
	b.setMaxRetryTimes = function(a) {
		c.setMaxRetryTimes(a)
	};
	b.addEventListener = function(a, b, d, m, h) {
		void 0 === m && (m = !1);
		void 0 === h && (h = 0);
		c.addEventListener(a, b, d, m, h)
	};
	b.removeEventListener = function(a, b, d, m) {
		void 0 === m && (m = !1);
		c.removeEventListener(a, b, d, m)
	};
	var d = function(a) {
			function c() {
				a.call(this);
				this.analyzerDic = {};
				this.configItemList = [];
				this.configComplete = this.callLaterFlag = !1;
				this.loadedGroups = [];
				this.groupNameList = [];
				this.asyncDic = {};
				this.init()
			}
			__extends(c, a);
			c.prototype.getAnalyzerByType = function(a) {
				var c = this.analyzerDic[a];
				c || (c = this.analyzerDic[a] = egret.Injector.getInstance(b.AnalyzerBase, a));
				return c
			};
			c.prototype.init = function() {
				egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(b.AnalyzerBase, b.BinAnalyzer, b.ResourceItem.TYPE_BIN);
				egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(b.AnalyzerBase, b.ImageAnalyzer, b.ResourceItem.TYPE_IMAGE);
				egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(b.AnalyzerBase, b.TextAnalyzer, b.ResourceItem.TYPE_TEXT);
				egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(b.AnalyzerBase, b.JsonAnalyzer, b.ResourceItem.TYPE_JSON);
				egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(b.AnalyzerBase, b.SheetAnalyzer, b.ResourceItem.TYPE_SHEET);
				egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(b.AnalyzerBase, b.FontAnalyzer, b.ResourceItem.TYPE_FONT);
				egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(b.AnalyzerBase, b.SoundAnalyzer, b.ResourceItem.TYPE_SOUND);
				egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_XML) || egret.Injector.mapClass(b.AnalyzerBase, b.XMLAnalyzer, b.ResourceItem.TYPE_XML);
				this.resConfig = new b.ResourceConfig;
				this.resLoader = new b.ResourceLoader;
				this.resLoader.callBack = this.onResourceItemComp;
				this.resLoader.resInstance = this;
				this.resLoader.addEventListener(b.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
				this.resLoader.addEventListener(b.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupError, this)
			};
			c.prototype.loadConfig = function(a, b, c) {
				void 0 === c && (c = "json");
				this.configItemList.push({
					url: a,
					resourceRoot: b,
					type: c
				});
				this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
			};
			c.prototype.startLoadConfig = function() {
				this.callLaterFlag = !1;
				var a = this.configItemList;
				this.configItemList = [];
				this.loadingConfigList = a;
				for (var d = a.length, h = [], g = 0; g < d; g++) {
					var f = a[g],
						f = new b.ResourceItem(f.url, f.url, f.type);
					h.push(f)
				}
				this.resLoader.loadGroup(h, c.GROUP_CONFIG, Number.MAX_VALUE)
			};
			c.prototype.isGroupLoaded = function(a) {
				return -1 != this.loadedGroups.indexOf(a)
			};
			c.prototype.getGroupByName = function(a) {
				return this.resConfig.getGroupByName(a)
			};
			c.prototype.loadGroup = function(a, c) {
				void 0 === c && (c = 0);
				if (-1 != this.loadedGroups.indexOf(a)) b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_COMPLETE, a);
				else if (!this.resLoader.isGroupInLoading(a)) if (this.configComplete) {
					var e = this.resConfig.getGroupByName(a);
					this.resLoader.loadGroup(e, a, c)
				} else this.groupNameList.push({
					name: a,
					priority: c
				})
			};
			c.prototype.createGroup = function(a, b, c) {
				void 0 === c && (c = !1);
				if (c) {
					var e = this.loadedGroups.indexOf(a); - 1 != e && this.loadedGroups.splice(e, 1)
				}
				return this.resConfig.createGroup(a, b, c)
			};
			c.prototype.onGroupComp = function(a) {
				if (a.groupName == c.GROUP_CONFIG) {
					a = this.loadingConfigList.length;
					for (var d = 0; d < a; d++) {
						var h = this.loadingConfigList[d],
							g = this.getAnalyzerByType(h.type),
							f = g.getRes(h.url);
						g.destroyRes(h.url);
						//this.resConfig.parseConfig(f, h.resourceRoot);
						this.resConfig.parseConfig(res_config, h.resourceRoot);
					}
					this.configComplete = !0;
					this.loadingConfigList = null;
					b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.CONFIG_COMPLETE);
					this.loadDelayGroups()
				} else this.loadedGroups.push(a.groupName), this.dispatchEvent(a)
			};
			c.prototype.loadDelayGroups = function() {
				var a = this.groupNameList;
				this.groupNameList = [];
				for (var b = a.length, c = 0; c < b; c++) {
					var e = a[c];
					this.loadGroup(e.name, e.priority)
				}
			};
			c.prototype.onGroupError = function(a) {
				a.groupName == c.GROUP_CONFIG ? (this.loadingConfigList = null, b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.CONFIG_LOAD_ERROR)) : this.dispatchEvent(a)
			};
			c.prototype.hasRes = function(a) {
				var c = this.resConfig.getType(a);
				return "" == c && (a = b.AnalyzerBase.getStringPrefix(a), c = this.resConfig.getType(a), "" == c) ? !1 : !0
			};
			c.prototype.parseConfig = function(a, b) {
				
				this.resConfig.parseConfig(a, b);
				this.configComplete || this.loadingConfigList || (this.configComplete = !0, this.loadDelayGroups())
			};
			c.prototype.getRes = function(a) {
				var c = this.resConfig.getType(a);
				return "" == c && (c = b.AnalyzerBase.getStringPrefix(a), c = this.resConfig.getType(c), "" == c) ? null : this.getAnalyzerByType(c).getRes(a)
			};
			c.prototype.getResAsync = function(a, c, e) {
				var d = this.resConfig.getType(a),
					f = this.resConfig.getName(a);
				if ("" == d && (f = b.AnalyzerBase.getStringPrefix(a), d = this.resConfig.getType(f), "" == d)) {
					c.call(e, null);
					return
				}(d = this.getAnalyzerByType(d).getRes(a)) ? c.call(e, d) : (a = {
					key: a,
					compFunc: c,
					thisObject: e
				}, this.asyncDic[f] ? this.asyncDic[f].push(a) : (this.asyncDic[f] = [a], f = this.resConfig.getResourceItem(f), this.resLoader.loadItem(f)))
			};
			c.prototype.getResByUrl = function(a, c, e, d) {
				void 0 === d && (d = "");
				if (a) {
					d || (d = this.getTypeByUrl(a));
					var f = this.getAnalyzerByType(d).getRes(a);
					f ? c.call(e, f) : (c = {
						key: a,
						compFunc: c,
						thisObject: e
					}, this.asyncDic[a] ? this.asyncDic[a].push(c) : (this.asyncDic[a] = [c], a = new b.ResourceItem(a, a, d), this.resLoader.loadItem(a)))
				} else c.call(e, null)
			};
			c.prototype.getTypeByUrl = function(a) {
				(a = a.substr(a.lastIndexOf(".") + 1)) && (a = a.toLowerCase());
				switch (a) {
				case b.ResourceItem.TYPE_XML:
				case b.ResourceItem.TYPE_JSON:
				case b.ResourceItem.TYPE_SHEET:
					break;
				case "png":
				case "jpg":
				case "gif":
				case "jpeg":
				case "bmp":
					a = b.ResourceItem.TYPE_IMAGE;
					break;
				case "fnt":
					a = b.ResourceItem.TYPE_FONT;
					break;
				case "txt":
					a = b.ResourceItem.TYPE_TEXT;
					break;
				case "mp3":
				case "ogg":
				case "mpeg":
				case "wav":
				case "m4a":
				case "mp4":
				case "aiff":
				case "wma":
				case "mid":
					a = b.ResourceItem.TYPE_SOUND;
					break;
				default:
					a = b.ResourceItem.TYPE_BIN
				}
				return a
			};
			c.prototype.onResourceItemComp = function(a) {
				var b = this.asyncDic[a.name];
				delete this.asyncDic[a.name];
				a = this.getAnalyzerByType(a.type);
				for (var c = b.length, e = 0; e < c; e++) {
					var d = b[e],
						l = a.getRes(d.key);
					d.compFunc.call(d.thisObject, l, d.key)
				}
			};
			c.prototype.destroyRes = function(a) {
				var b = this.resConfig.getRawGroupByName(a);
				if (b) {
					var c = this.loadedGroups.indexOf(a); - 1 != c && this.loadedGroups.splice(c, 1);
					a = b.length;
					for (var e = 0; e < a; e++) {
						c = b[e];
						c.loaded = !1;
						var d = this.getAnalyzerByType(c.type);
						d.destroyRes(c.name)
					}
					return !0
				}
				b = this.resConfig.getType(a);
				if ("" == b) return !1;
				c = this.resConfig.getRawResourceItem(a);
				c.loaded = !1;
				d = this.getAnalyzerByType(b);
				return d.destroyRes(a)
			};
			c.prototype.setMaxLoadingThread = function(a) {
				1 > a && (a = 1);
				this.resLoader.thread = a
			};
			c.prototype.setMaxRetryTimes = function(a) {
				a = Math.max(a, 0);
				this.resLoader.maxRetryTimes = a
			};
			c.GROUP_CONFIG = "RES__CONFIG";
			return c
		}(egret.EventDispatcher);
	d.prototype.__class__ = "RES.Resource";
	var c = new d
})(RES || (RES = {}));


/**
 * [游戏逻辑]
 */
var version = 3, VERSION;

(function(b) {
	b[b.autobox = 0] = "autobox";
	b[b.single = 1] = "single";
	b[b.market = 2] = "market";
	b[b.weixin = 3] = "weixin"
})(VERSION || (VERSION = {}));

var sizeOffset = 1,
	speedOffset = 1,
	lastTime = 0,
	speed = 0,
	speedH = 0,
	acc = 0.4,
	accH = 0,
	resis = 0.95,
	cubeW = 30,
	jumpSpeed = -12,
	jumpSpeedH = 5,
	barDistance = 700,
	barCuDis = 150,
	obsCubeW = 50,
	barGap = 200,
	barHeight = 60,
	barNum = 3,
	gameScore = 0,
	tweenT = 20,
	tweenR = 10,
	bounceSpeed = 30,
	rotationS = 0,
	floatHeight = 150,
	color = "#10afb0 #27ae61 #f6a0bb #ff983b #fe6553 #999999".split(" ");

function setData() {
	speedOffset = sizeOffset = 1;
	speedH = speed = lastTime = 0;
	acc = 0.4;
	accH = 0;
	resis = 0.95;
	cubeW = 30;
	jumpSpeed = -12;
	jumpSpeedH = 5;
	barDistance = 700;
	barCuDis = 150;
	obsCubeW = 50;
	barGap = 200;
	barHeight = 60;
	barNum = 3;
	gameScore = 0;
	tweenT = 20;
	tweenR = 10;
	bounceSpeed = 30;
	rotationS = 0;
	floatHeight = 150
}

function initData() {
	speed = -50;
	rotationS = gameScore = speedH = 0
}

function reSize() {
	cubeW *= sizeOffset;
	barDistance *= sizeOffset;
	barCuDis *= sizeOffset;
	obsCubeW *= sizeOffset;
	barGap *= sizeOffset;
	barHeight *= sizeOffset;
	acc *= sizeOffset;
	bounceSpeed *= sizeOffset;
	floatHeight *= sizeOffset;
	jumpSpeed *= sizeOffset;
	jumpSpeedH *= sizeOffset
}



var __extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c;
}, CrazyView = function(b) {
	function d() {
		b.call(this);

		this.startBg = SpriteControl.startBg;
		this.startTitle = SpriteControl.startTitle;
		this.startBtn = SpriteControl.startBtn;

		this.gameBg = SpriteControl.gameBg;
		this.juese = SpriteControl.juese;

		this.intro = SpriteControl.introduction;

		this.obstacles = [];
	}
	__extends(d, b);
	var p = d.prototype;
	p.createStartUI = function() {
		this.addChild(this.startBg);
		this.addChild(this.startTitle);
		this.addChild(this.startBtn);

		Effects.buttonScaleLoop(this.startBtn);
	};
	p.removeStartUI = function() {
		this.removeChild(this.startBg);
		this.removeChild(this.startTitle);
		this.removeChild(this.startBtn);
	};
	p.createObstacles = function() {
		this.obstacles = [];
		for (var i = 0; i < barNum; i++) {
			// 原來的
			//var a = new ObstaclesBar(this.screenW, -i * barDistance - barHeight / 2);
			var a = new ObstaclesBar(this.screenW, -i * barDistance - SpriteControl.clouds01.height / 2);
			this.obstacles.push(a);
			this.addChild(a);
		}
	};
	p.createJuese = function() {
		// 原來的
		//this.juese.width = this.juese.height = cubeW;
		this.juese.x = this.centerX;
		this.juese.y = this.centerY;
		// 原來的
		//this.juese.rotation = 45;
		this.juese.rotation = 0;
	};
	p.createScoreBoard = function() {
		var sb, res = userConfig.scoreBarColor;
		var bgColor = j2ime.RES.colorHex2Number(res.value);

		sb = this.scoreBoard = new egret.Sprite;
		sb.scaleX = sb.scaleY = sizeOffset;
		/*.width = 130;
		sb.height = 80;
		sb.graphics.beginFill(16777215, 0.5);
		sb.graphics.drawRoundRect(0, 0, sb.width, sb.height, 20);
		sb.graphics.endFill();
		sb.x = this.centerX;
		sb.y = 100 * sizeOffset;
		sb.anchorX = sb.anchorY = 0.5;*/
		j2ime.RES.setResAll({
			name: 'scoreBarColor',
			res: sb
		});
		sb.graphics.beginFill( bgColor, 0.5 );
		sb.graphics.drawRoundRect(0, 0, sb.width, sb.height, 20);
		sb.graphics.endFill();


		/*var b = new egret.TextField;
		b.size = 60;
		b.text = "0";
		b.x = 65;
		b.y = 40;
		b.anchorX = b.anchorY = 0.5;
		b.textColor = 0;*/
		var b = SpriteControl.scoreText;
		b.text = "0";
		b.x = b.x - sb.x + sb.width / 2;
		b.y = b.y - sb.y + sb.height / 2;

		this.scoreField = b;
		this.scoreBoard.addChild(this.scoreField);
	};
	return d
}(egret.DisplayObjectContainer);
CrazyView.prototype.__class__ = "CrazyView";



var __extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
}, CrazyLogic = function(b) {
	function d() {
		b.call(this);
		this.boom = this.playing = false;
		this.minFPS = 1;
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
	}
	__extends(d, b);
	var p = d.prototype;
	p.onAddToStage = function(b) {
		this.touchEnabled = true;
		this.width = this.stage.stageWidth;
		this.height = this.stage.stageHeight;
		this.screenW = this.stage.stageWidth;
		this.screenH = this.stage.stageHeight;
		this.centerX = this.screenW / 2;
		this.centerY = this.screenH / 2;
		this.lastObs = new egret.DisplayObject;
		this.lastObs.y = this.screenH;
		sizeOffset = this.screenW / 640;

		reSize();
		this.createStartUI();
		this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnStart, this)
	};
	p.onBtnStart = function() {
		this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnStart, this);
		egret.Tween.removeTweens(this.startBtn);
		
		egret.Tween.get(this.startBtn)
			.to({
				scaleX: 1.3,
				scaleY: 1.3
			}, 200, egret.Ease.sineOut)
			.to({
				scaleX: 0.3,
				scaleY: 0.3
			}, 200, egret.Ease.sineIn).call( this.showUserGuide, this );
		//Effects.buttonScale( this.startBtn, this.showUserGuide, this );
	};
	p.showUserGuide = function() {
		this.removeStartUI();

		initData();

		this.addChild(this.gameBg);

		this.createObstacles();
		this.createJuese();
		this.createScoreBoard();

		this.addChild(this.intro);
		this.addChild(this.juese);
		this.addChild(this.scoreBoard);

		this.intro.scaleX = 1.2;
		this.intro.scaleY = 1.2;
		this.intro.alpha = 0;
		egret.Tween.get(this.intro).to({
			scaleX: 1,
			scaleY: 1,
			alpha: 1
		}, 150, egret.Ease.sineIn).call( function(){
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameStart, this);
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
		}, this );
	};
	p.onGameStart = function() {
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGameStart, this);
		if( this.intro ) {
			this.intro.parent && this.intro.parent.removeChild(this.intro);
			this.intro = null;
		}

		j2ime.GAME.start();

		this.boom = false;
		this.playing = true;
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);

		lastTime = egret.getTimer();
		this.dispatchEvent(new egret.Event("getOder"));
	};
	p.onGameOver = function() {

		j2ime.GAME.over( gameScore );

		this.playing = false;
		this.boom || this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
		this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
	};
	p.onEnterFrame = function() {
		if (this.playing) {
			var b = egret.getTimer(),
				a = Math.floor(1E3 / (b - lastTime));
			lastTime = b;
			speedOffset = 60 / a;
			2 < speedOffset && (speedOffset = 2);
			speed += acc * speedOffset;
			b = speed * speedOffset;
			b = this.cubeMoving(b);
			this.boom || this.collisionTest(b)
		}
	};
	p.onTouch = function(b) {

		j2ime.GAME.gameData.tapScreenCount++;

		speed = jumpSpeed;
		b.stageX > this.centerX ? (speedH = jumpSpeedH, accH = -resis) : (speedH = -jumpSpeedH, accH = resis)
	};
	p.cubeMoving = function(b) {
		// 原來的
		/*if( this.juese.x <= this.screenW - cubeW && this.juese.x >= cubeW ) {
			0.05 > speedH && -0.05 < speedH && (speedH = 0);
			speedH *= resis;
			this.juese.x += speedH;
		}
		else {
			this.boom || (b = this.juese.y > this.lastObs.y - floatHeight ? 0 : 3);
			this.juese.x < this.centerX ? 0 < speedH && (this.juese.x += speedH) : 0 > speedH && (this.juese.x += speedH);
		}
		if (this.juese.y >= this.screenH + cubeW) this.onGameOver();*/
		if( this.juese.x <= this.screenW - this.juese.width && this.juese.x >= this.juese.width ) {
			0.05 > speedH && -0.05 < speedH && (speedH = 0);
			speedH *= resis;
			this.juese.x += speedH;
		}
		else {
			this.boom || (b = this.juese.y > this.lastObs.y - floatHeight ? 0 : 3);
			this.juese.x < this.centerX ? 0 < speedH && (this.juese.x += speedH) : 0 > speedH && (this.juese.x += speedH);
		}
		if (this.juese.y >= this.screenH + this.juese.height) this.onGameOver();
		this.juese.y < this.centerY ? 0 < b ? this.juese.y += b : this.updateObstacles(b) : (this.juese.y += b, this.juese.rotation += rotationS);
		return b
	};
	p.collisionTest = function(b) {
		var a = Math.abs(b);
		for (var i = 0, len = this.obstacles.length; i < len; i++) {
			for (var j = 0, m = this.obstacles[i].numChildren; j < m; j++) {
				var obsChild = this.obstacles[i].getChildAt(j);

				var g = this.juese.x - obsChild.x;
				0 > g && (g = -g);
				var f = this.juese.y - obsChild.y;
				0 > f && (f = -f);

				var l = ( 1.2 * this.juese.width + obsChild.width ) / 2,
					n = ( 1.3 * this.juese.height + obsChild.height ) / 2;
				if( g <= l && f <= n + a ) {
					0 < b && f >= n && (this.juese.y = obsChild.y - n);
					0 >= b && f >= n && (this.juese.y = obsChild.y + n);
					this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
					this.boom = true;
					speed = bounceSpeed;
					rotationS = 10;
					g = egret.Tween.get(this);
					g.to({
						y: tweenR
					}, tweenT).to({
						y: 0
					}, tweenT).to({
						y: tweenR
					}, tweenT).to({
						y: 0
					}, tweenT), g.to({
						x: tweenR
					}, tweenT).to({
						x: 0
					}, tweenT).to({
						x: tweenR
					}, tweenT).to({
						x: 0
					}, tweenT);
				}
			}
		}
	};
	p.updateObstacles = function(b) {
		for (var i = 0, len = this.obstacles.length; i < len; i++) {
			var obsChild = this.obstacles[i];
			var cnum = obsChild.numChildren;

			for (var j = 0; j < cnum; j++) {
				obsChild.getChildAt(j).y -= b;
			}
			if( !obsChild.passed && obsChild.getChildAt(0).y >= this.juese.y ) {
				gameScore++;
				this.lastObs = obsChild.getChildAt(0);
				this.scoreField.text = "" + gameScore;
				obsChild.passed = true;
			}
			var child = obsChild.getChildAt(cnum - 1);
			// 原來的
			//if( child.y > this.screenH + obsCubeW ) {
			if( child.y > this.screenH + child.height ) {
				obsChild.resetObstacles(obsChild.getChildAt(0).y - barNum * barDistance);
			}
		}
	};
	return d
}(CrazyView);
CrazyLogic.prototype.__class__ = "CrazyLogic";

/**
 * 障礙物
 */
var __extends = this.__extends ||
function(b, d) {
	function c() {
		this.constructor = b
	}
	for (var a in d) d.hasOwnProperty(a) && (b[a] = d[a]);
	c.prototype = d.prototype;
	b.prototype = new c
}, ObstaclesBar = function(b) {
	function d(c, a) {
		b.call(this);
		this.screenWidth = c;
		this.shrink = 0.2 * c;

		var myColor = window.userConfig["barColor"].value;
		myColor = "0x" + myColor.substring(1, myColor.length);
		//console.log(myColor);

		this.barR = this.getBlockObstacle( c, myColor );
		this.barL = this.getBlockObstacle( c, myColor );
		this.barL.rotation = 180;

		this.cubeDown = this.getCubeObstacle( myColor );
		this.cubeUp = this.getCubeObstacle( myColor );

		this.resetObstacles(a);

		this.addChild(this.barL);
		this.addChild(this.barR);
		this.addChild(this.cubeDown);
		this.addChild(this.cubeUp);
	}
	__extends(d, b);
	var p = d.prototype;
	p.getBlockObstacle = function( width, myColor ) {
		// 原來的
		/*var a = new egret.Shape;
		a.graphics.beginFill( myColor );
		a.graphics.drawRect(0, 0, width, barHeight);
		a.graphics.endFill();
		a.height = barHeight;
		a.anchorX = a.anchorY = 0.5;*/

		var cloud = SpriteControl.clouds01;
		var a = new egret.Bitmap();
		a.texture = cloud.texture;
		a.anchorY = a.anchorX = 0.5;
		a.width = cloud.width;
		a.height = cloud.height;
/*
		// 测试
		var cloud = SpriteControl.clouds01;
		var a = new egret.Shape;
		a.width = cloud.width;
		a.height = cloud.height;
		a.anchorX = a.anchorY = 0.5;
		a.graphics.beginFill( myColor );
		a.graphics.drawRect(0, 0, a.width, a.height);
		a.graphics.endFill();
*/
		return a;
	};
	p.getCubeObstacle = function( myColor ) {
		// 原來的
		/*var a = new egret.Shape();
		a.graphics.beginFill( myColor );
		a.graphics.drawRect(0, 0, obsCubeW, obsCubeW);
		a.graphics.endFill();
		a.anchorY = a.anchorX = 0.5;
		a.width = a.height = obsCubeW;*/

		var cloud = SpriteControl.clouds02;
		var a = new egret.Bitmap();
		a.texture = cloud.texture;
		a.anchorY = a.anchorX = 0.5;
		a.width = cloud.width;
		a.height = cloud.height;
/*
		// 测试
		var cloud = SpriteControl.clouds02;
		var a = new egret.Shape;
		a.width = cloud.width;
		a.height = cloud.height;
		a.anchorX = a.anchorY = 0.5;
		a.graphics.beginFill( myColor );
		a.graphics.drawRect(0, 0, a.width, a.height);
		a.graphics.endFill();
*/
		return a;
	};
	p.resetObstacles = function(b) {
		this.passed = !1;
		this.basePointX = (this.screenWidth - barGap - this.shrink) * Math.random() + (barGap + this.shrink) / 2;

		// 原來的
		//this.barL.width = this.basePointX - barGap / 2;
		this.barL.x = -(this.barL.width + barGap) / 2 + this.basePointX;
		this.barL.y = b;
		// 原來的
		//this.barR.width = this.screenWidth - this.basePointX - 0.5 * barGap;
		this.barR.x = (barGap + this.barR.width) / 2 + this.basePointX;
		this.barR.y = b;

		// 原來的
		//this.cubeDown.x = (0.5 - Math.random()) * (barGap + obsCubeW) + this.basePointX;
		this.cubeDown.x = (0.5 - Math.random()) * (barGap + this.cubeDown.width) + this.basePointX;
		this.cubeDown.y = -barCuDis + b;
		// 原來的
		//this.cubeUp.x = (0.5 - Math.random()) * (barGap + obsCubeW) + this.basePointX;
		this.cubeUp.x = (0.5 - Math.random()) * (barGap + this.cubeDown.width) + this.basePointX;
		this.cubeUp.y = -barDistance + barCuDis + b;
	};
	return d
}(egret.DisplayObjectContainer);
ObstaclesBar.prototype.__class__ = "ObstaclesBar";


var __extends = this.__extends || function(b, c) {
		function d() {
			this.constructor = b
		}
		for (var a in c) c.hasOwnProperty(a) && (b[a] = c[a]);
		d.prototype = c.prototype;
		b.prototype = new d
	},
	Main = function(b) {
		function c() {
			b.call(this);
			/*
			this.htmlLoading = GameLoading({
				"end": function() {return false}
			});
			window.home = this.shit;
			window.pause = this.pause;
			window.resume = this.resume;
			*/

			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
		}
		__extends(c, b);
		var p = c.prototype;
		p.onAddToStage = function(b) {
			//egret.Injector.mapClass(RES.AnalyzerBase, RES.PropertiesAnalyzer, RES.PropertiesAnalyzer.TYPE);
			RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			RES.loadConfig("", "/");
		};
		p.onConfigComplete = function(b) {
			RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
			RES.loadGroup("preload");
		};
		p.onResourceLoadComplete = function(b) {
			if("preload" == b.groupName) {
				RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
				RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
				this.createGameScene();

				// 再玩一次
				var self = this;
				tymsdk.replay(function(){
					self.createGameScene( true );
				});
			}
		};
		p.onResourceProgress = function(b) {
			//console.log(b.groupName);
			if ('preload' == b.groupName) {
				//document.querySelector('.loadingContent p').innerHTML = '游戏加载中...' + b.itemsLoaded + '/' + b.itemsTotal;
				/*if (b.itemsLoaded == b.itemsTotal) {
					var loading = document.querySelector('#loading');
					if(loading.parentElement) loading.parentElement.removeChild(loading);
				}*/
				//this.htmlLoading.progress(b.itemsLoaded, b.itemsTotal);
				global_loading.progress(b.itemsLoaded, b.itemsTotal);
			}
		};
		p.createGameScene = function( isReplay ) {
			if( isReplay ) {
				this.destroy();
			}

			SpriteControl.SpriteGameInit();

			this.crazyLogic = new CrazyLogic();
			this.addChild(this.crazyLogic);
			//this.htmlLoading.end(true);
		};
		/**
		 * 释放资源
		 */
		p.destroy = function () {
			egret.Tween.removeAllTweens();

			this.removeChildren();
		};
		p.shit = function() {
			this.removeChildren();

			setData();
			this.createGameScene();
		};
		p.pause = function() {
			egret.Ticker.getInstance().pause();
		};
		p.resume = function() {
			egret.Ticker.getInstance().resume();
		};
		return c
	}(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";

