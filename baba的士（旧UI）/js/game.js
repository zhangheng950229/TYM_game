var egret;
(function(b) {
    var c = function() {
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
    }
    ();
    b.HashObject = c;
    c.prototype.__class__ = "egret.HashObject"
}
)(egret || (egret = {}));
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(b) {
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
        }
        ;
        Object.defineProperty(a.prototype, "length", {
            get: function() {
                return this._length
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.push = function(e) {
            var k = this.objectPool;
            -1 == k.indexOf(e) && (k.push(e),
            this._length++,
            0 == this.frameCount && (this.frameCount = 
            this.autoDisposeTime,
            a._callBackList.push(this)))
        }
        ;
        a.prototype.pop = function() {
            if (0 == this._length)
                return null ;
            this._length--;
            return this.objectPool.pop()
        }
        ;
        a.prototype.dispose = function() {
            0 < this._length && (this.objectPool = [],
            this._length = 0);
            this.frameCount = 0;
            var e = a._callBackList
              , k = e.indexOf(this);
            -1 != k && e.splice(k, 1)
        }
        ;
        a._callBackList = [];
        return a
    }
    (b.HashObject);
    b.Recycler = c;
    c.prototype.__class__ = "egret.Recycler"
}
)(egret || (egret = {}));
(function(b) {
    b.__START_TIME;
    b.getTimer = function() {
        return Date.now() - b.__START_TIME
    }
}
)(egret || (egret = {}));
(function(b) {
    b.__callLaterFunctionList = [];
    b.__callLaterThisList = [];
    b.__callLaterArgsList = [];
    b.callLater = function(c, d) {
        for (var a = [], e = 2; e < arguments.length; e++)
            a[e - 2] = arguments[e];
        b.__callLaterFunctionList.push(c);
        b.__callLaterThisList.push(d);
        b.__callLaterArgsList.push(a)
    }
    ;
    b.__callAsyncFunctionList = [];
    b.__callAsyncThisList = [];
    b.__callAsyncArgsList = [];
    b.__callAsync = function(c, d) {
        for (var a = [], e = 2; e < arguments.length; e++)
            a[e - 2] = arguments[e];
        b.__callAsyncFunctionList.push(c);
        b.__callAsyncThisList.push(d);
        b.__callAsyncArgsList.push(a)
    }
}
)(egret || (egret = {}));
var egret_dom;
(function(b) {
    function c() {
        for (var b = document.createElement("div").style, a = ["t", "webkitT", "msT", "MozT", "OT"], e = 0; e < a.length; e++)
            if (a[e] + "ransform" in b)
                return a[e];
        return a[0]
    }
    b.header = "";
    b.getHeader = c;
    b.getTrans = function(d) {
        "" == b.header && (b.header = c());
        return b.header + d.substring(1, d.length)
    }
}
)(egret_dom || (egret_dom = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(e, a, b) {
            void 0 === a && (a = !1);
            void 0 === b && (b = !1);
            d.call(this);
            this._eventPhase = 2;
            this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
            this.isNew = !0;
            this._type = e;
            this._bubbles = a;
            this._cancelable = b
        }
        __extends(a, d);
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
        a.prototype.isDefaultPrevented = 
        function() {
            return this._isDefaultPrevented
        }
        ;
        a.prototype.preventDefault = function() {
            this._cancelable && (this._isDefaultPrevented = !0)
        }
        ;
        a.prototype.stopPropagation = function() {
            this._bubbles && (this._isPropagationStopped = !0)
        }
        ;
        a.prototype.stopImmediatePropagation = function() {
            this._bubbles && (this._isPropagationImmediateStopped = !0)
        }
        ;
        a.prototype._reset = function() {
            this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1,
            this._currentTarget = this._target = 
            null ,
            this._eventPhase = 2)
        }
        ;
        a._dispatchByTarget = function(e, a, d, c, f, h) {
            void 0 === f && (f = !1);
            void 0 === h && (h = !1);
            var l = e.eventRecycler;
            l || (l = e.eventRecycler = new b.Recycler);
            var n = l.pop();
            n ? n._type = d : n = new e(d);
            n._bubbles = f;
            n._cancelable = h;
            if (c)
                for (var p in c)
                    n[p] = c[p],
                    null  !== n[p] && (c[p] = null );
            e = a.dispatchEvent(n);
            l.push(n);
            return e
        }
        ;
        a._getPropertyData = function(e) {
            var a = e._props;
            a || (a = e._props = {});
            return a
        }
        ;
        a.dispatchEvent = function(e, k, b, d) {
            void 0 === b && (b = !1);
            var c = a._getPropertyData(a);
            d && (c.data = d);
            a._dispatchByTarget(a, 
            e, k, c, b)
        }
        ;
        a.ADDED_TO_STAGE = "addedToStage";
        a.REMOVED_FROM_STAGE = "removedFromStage";
        a.ADDED = "added";
        a.REMOVED = "removed";
        a.COMPLETE = "complete";
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
    }
    (b.HashObject);
    b.Event = c;
    c.prototype.__class__ = "egret.Event"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(b) {
        function a(e, a, c) {
            void 0 === a && (a = !1);
            void 0 === c && (c = !1);
            b.call(this, e, a, c);
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
            null  == a.httpStatusEvent && (a.httpStatusEvent = new a(a.HTTP_STATUS));
            a.httpStatusEvent._status = k;
            e.dispatchEvent(a.httpStatusEvent)
        }
        ;
        a.HTTP_STATUS = "httpStatus";
        a.httpStatusEvent = null ;
        return a
    }
    (b.Event);
    b.HTTPStatusEvent = 
    c;
    c.prototype.__class__ = "egret.HTTPStatusEvent"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(e, a, b) {
            void 0 === a && (a = !1);
            void 0 === b && (b = !1);
            d.call(this, e, a, b)
        }
        __extends(a, d);
        a.dispatchIOErrorEvent = function(e) {
            b.Event._dispatchByTarget(a, e, a.IO_ERROR)
        }
        ;
        a.IO_ERROR = "ioError";
        return a
    }
    (b.Event);
    b.IOErrorEvent = c;
    c.prototype.__class__ = "egret.IOErrorEvent"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(e, a, b, c, f, h, l, n, p, q) {
            void 0 === a && (a = !0);
            void 0 === b && (b = !0);
            void 0 === c && (c = 0);
            void 0 === f && (f = 0);
            void 0 === h && (h = 0);
            void 0 === l && (l = !1);
            void 0 === n && (n = !1);
            void 0 === q && (q = !1);
            d.call(this, e, a, b);
            this._stageY = this._stageX = 0;
            this.touchPointID = c;
            this._stageX = f;
            this._stageY = h;
            this.ctrlKey = l;
            this.altKey = n;
            this.touchDown = q
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "stageX", {
            get: function() {
                return this._stageX
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, 
        "stageY", {
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
        a.dispatchTouchEvent = function(e, k, d, c, f, h, l, n, p) {
            void 0 === d && (d = 0);
            void 0 === c && (c = 0);
            void 0 === f && (f = 0);
            void 0 === h && (h = !1);
            void 0 === l && (l = !1);
            void 0 === n && (n = !1);
            void 0 === p && (p = !1);
            var q = b.Event._getPropertyData(a);
            q.touchPointID = d;
            q._stageX = c;
            q._stageY = f;
            q.ctrlKey = h;
            q.altKey = l;
            q.shiftKey = n;
            q.touchDown = p;
            b.Event._dispatchByTarget(a, e, k, q, !0, !0)
        }
        ;
        a.TOUCH_TAP = "touchTap";
        a.TOUCH_MOVE = "touchMove";
        a.TOUCH_BEGIN = "touchBegin";
        a.TOUCH_END = "touchEnd";
        a.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside";
        a.TOUCH_ROLL_OUT = "touchRollOut";
        a.TOUCH_ROLL_OVER = "touchRollOver";
        a.TOUCH_OUT = 
        "touchOut";
        a.TOUCH_OVER = "touchOver";
        return a
    }
    (b.Event);
    b.TouchEvent = c;
    c.prototype.__class__ = "egret.TouchEvent"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(e, a, b) {
            void 0 === a && (a = !1);
            void 0 === b && (b = !1);
            d.call(this, e, a, b)
        }
        __extends(a, d);
        a.dispatchTimerEvent = function(e, k) {
            b.Event._dispatchByTarget(a, e, k)
        }
        ;
        a.TIMER = "timer";
        a.TIMER_COMPLETE = "timerComplete";
        return a
    }
    (b.Event);
    b.TimerEvent = c;
    c.prototype.__class__ = "egret.TimerEvent"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(e, a, b, c, f) {
            void 0 === a && (a = !1);
            void 0 === b && (b = !1);
            void 0 === c && (c = 0);
            void 0 === f && (f = 0);
            d.call(this, e, a, b);
            this.bytesLoaded = c;
            this.bytesTotal = f
        }
        __extends(a, d);
        a.dispatchProgressEvent = function(e, k, d, c) {
            void 0 === d && (d = 0);
            void 0 === c && (c = 0);
            b.Event._dispatchByTarget(a, e, k, {
                bytesLoaded: d,
                bytesTotal: c
            })
        }
        ;
        a.PROGRESS = "progress";
        a.SOCKET_DATA = "socketData";
        return a
    }
    (b.Event);
    b.ProgressEvent = c;
    c.prototype.__class__ = "egret.ProgressEvent"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.CAPTURING_PHASE = 1;
        b.AT_TARGET = 2;
        b.BUBBLING_PHASE = 3;
        return b
    }
    ();
    b.EventPhase = c;
    c.prototype.__class__ = "egret.EventPhase"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(e) {
            void 0 === e && (e = null );
            d.call(this);
            this._eventTarget = e ? e : this
        }
        __extends(a, d);
        a.prototype.addEventListener = function(e, a, d, c, f) {
            void 0 === c && (c = !1);
            void 0 === f && (f = 0);
            "undefined" === typeof c && (c = !1);
            "undefined" === typeof f && (f = 0);
            a || b.Logger.fatal("addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a");
            c ? (this._captureEventsMap || (this._captureEventsMap = {}),
            c = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}),
            c = this._eventsMap);
            var h = c[e];
            h || (h = c[e] = []);
            this._insertEventBin(h, a, d, f)
        }
        ;
        a.prototype._insertEventBin = function(e, a, b, d, c) {
            void 0 === c && (c = void 0);
            for (var h = -1, l = e.length, n = 0; n < l; n++) {
                var p = e[n];
                if (p.listener === a && p.thisObject === b && p.display === c)
                    return !1;
                -1 == h && p.priority < d && (h = n)
            }
            a = {
                listener: a,
                thisObject: b,
                priority: d
            };
            c && (a.display = c);
            -1 != h ? e.splice(h, 0, a) : e.push(a);
            return !0
        }
        ;
        a.prototype.removeEventListener = function(e, a, b, d) {
            void 0 === d && (d = !1);
            if (d = d ? this._captureEventsMap : this._eventsMap) {
                var c = d[e];
                c && (this._removeEventBin(c, 
                a, b),
                0 == c.length && delete d[e])
            }
        }
        ;
        a.prototype._removeEventBin = function(e, a, b, d) {
            void 0 === d && (d = void 0);
            for (var c = e.length, h = 0; h < c; h++) {
                var l = e[h];
                if (l.listener === a && l.thisObject === b && l.display === d)
                    return e.splice(h, 1),
                    !0
            }
            return !1
        }
        ;
        a.prototype.hasEventListener = function(e) {
            return this._eventsMap && this._eventsMap[e] || this._captureEventsMap && this._captureEventsMap[e]
        }
        ;
        a.prototype.willTrigger = function(e) {
            return this.hasEventListener(e)
        }
        ;
        a.prototype.dispatchEvent = function(e) {
            e._reset();
            e._target = this._eventTarget;
            e._currentTarget = this._eventTarget;
            return this._notifyListener(e)
        }
        ;
        a.prototype._notifyListener = function(e) {
            var a = 1 == e._eventPhase ? this._captureEventsMap : this._eventsMap;
            if (!a)
                return !0;
            a = a[e._type];
            if (!a)
                return !0;
            var b = a.length;
            if (0 == b)
                return !0;
            for (var a = a.concat(), d = 0; d < b; d++) {
                var c = a[d];
                c.listener.call(c.thisObject, e);
                if (e._isPropagationImmediateStopped)
                    break
            }
            return !e._isDefaultPrevented
        }
        ;
        a.prototype.dispatchEventWith = function(e, a, d) {
            void 0 === a && (a = !1);
            b.Event.dispatchEvent(this, e, a, d)
        }
        ;
        return a
    }
    (b.HashObject);
    b.EventDispatcher = c;
    c.prototype.__class__ = "egret.EventDispatcher"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.reuseEvent = new b.Event("")
        }
        __extends(a, d);
        a.prototype.run = function() {
            b.Ticker.getInstance().run();
            b.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
            b.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
            this.touchContext.run()
        }
        ;
        a.prototype.renderLoop = function(e) {
            if (0 < b.__callLaterFunctionList.length) {
                var k = b.__callLaterFunctionList;
                b.__callLaterFunctionList = [];
                var d = b.__callLaterThisList;
                b.__callLaterThisList = [];
                var c = b.__callLaterArgsList;
                b.__callLaterArgsList = []
            }
            e = this.stage;
            var f = a.cachedEvent;
            f._type = b.Event.RENDER;
            this.dispatchEvent(f);
            b.Stage._invalidateRenderFlag && (this.broadcastRender(),
            b.Stage._invalidateRenderFlag = !1);
            k && this.doCallLaterList(k, d, c);
            0 < b.__callAsyncFunctionList.length && this.doCallAsyncList();
            k = this.rendererContext;
            k.onRenderStart();
            k.clearScreen();
            e._updateTransform();
            f._type = b.Event.FINISH_UPDATE_TRANSFORM;
            this.dispatchEvent(f);
            e._draw(k);
            f._type = b.Event.FINISH_RENDER;
            this.dispatchEvent(f);
            k.onRenderFinish()
        }
        ;
        a.prototype.broadcastEnterFrame = function(e) {
            e = this.reuseEvent;
            e._type = b.Event.ENTER_FRAME;
            this.dispatchEvent(e);
            for (var a = b.DisplayObject._enterFrameCallBackList.concat(), d = a.length, c = 0; c < d; c++) {
                var f = a[c];
                e._target = f.display;
                e._currentTarget = f.display;
                f.listener.call(f.thisObject, e)
            }
            a = b.Recycler._callBackList;
            for (c = a.length - 1; 0 <= c; c--)
                a[c]._checkFrame()
        }
        ;
        a.prototype.broadcastRender = function() {
            var e = this.reuseEvent;
            e._type = b.Event.RENDER;
            for (var a = b.DisplayObject._renderCallBackList.concat(), 
            d = a.length, c = 0; c < d; c++) {
                var f = a[c]
                  , h = f.display;
                e._target = h;
                e._currentTarget = h;
                f.listener.call(f.thisObject, e)
            }
        }
        ;
        a.prototype.doCallLaterList = function(e, a, b) {
            for (var d = e.length, c = 0; c < d; c++) {
                var h = e[c];
                null  != h && h.apply(a[c], b[c])
            }
        }
        ;
        a.prototype.doCallAsyncList = function() {
            var e = b.__callAsyncFunctionList.concat()
              , a = b.__callAsyncThisList.concat()
              , d = b.__callAsyncArgsList.concat();
            b.__callAsyncFunctionList.length = 0;
            b.__callAsyncThisList.length = 0;
            for (var c = b.__callAsyncArgsList.length = 0; c < e.length; c++) {
                var f = 
                e[c];
                null  != f && f.apply(a[c], d[c])
            }
        }
        ;
        a.DEVICE_PC = "web";
        a.DEVICE_MOBILE = "native";
        a.RUNTIME_HTML5 = "runtime_html5";
        a.RUNTIME_NATIVE = "runtime_native";
        a.cachedEvent = new b.Event("");
        return a
    }
    (b.EventDispatcher);
    b.MainContext = c;
    c.prototype.__class__ = "egret.MainContext"
}
)(egret || (egret = {}));
var testDeviceType = function() {
    if (!this.navigator)
        return !0;
    var b = navigator.userAgent.toLowerCase();
    return -1 != b.indexOf("mobile") || -1 != b.indexOf("android")
}
  , testRuntimeType = function() {
    return this.navigator ? !0 : !1
}
;
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE : egret.MainContext.DEVICE_PC;
egret.MainContext.runtimeType = testRuntimeType() ? egret.MainContext.RUNTIME_HTML5 : egret.MainContext.RUNTIME_NATIVE;
delete testDeviceType;
delete testRuntimeType;
(function(b) {
    var c = function() {
        function d() {
            this._tick = this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0;
            this._maxDeltaTime = 500;
            this._totalDeltaTime = 0
        }
        d.getInstance = function() {
            null  == d.instance && (d.instance = new d);
            return d.instance
        }
        ;
        d.prototype.run = function() {
            b.Ticker.getInstance().register(this.update, this);
            null  == this._txt && (this._txt = new b.TextField,
            this._txt.size = 28,
            this._txt.multiline = !0,
            b.MainContext.instance.stage.addChild(this._txt));
            var a = b.MainContext.instance;
            a.addEventListener(b.Event.ENTER_FRAME, this.onEnterFrame, this);
            a.addEventListener(b.Event.RENDER, this.onStartRender, this);
            a.addEventListener(b.Event.FINISH_RENDER, this.onFinishRender, this);
            a.addEventListener(b.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
        }
        ;
        d.prototype.onEnterFrame = function(a) {
            this._lastTime = b.getTimer()
        }
        ;
        d.prototype.onStartRender = function(a) {
            a = b.getTimer();
            this._logicPerformanceCost = a - this._lastTime;
            this._lastTime = a
        }
        ;
        d.prototype.onFinishUpdateTransform = 
        function(a) {
            a = b.getTimer();
            this._updateTransformPerformanceCost = a - this._lastTime;
            this._lastTime = a
        }
        ;
        d.prototype.onFinishRender = function(a) {
            a = b.getTimer();
            this._renderPerformanceCost = a - this._lastTime;
            this._lastTime = a
        }
        ;
        d.prototype.update = function(a) {
            this._tick++;
            this._totalDeltaTime += a;
            if (this._totalDeltaTime >= this._maxDeltaTime) {
                a = (this._preDrawCount - 1).toString();
                var e = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() + 
                "," + Math.ceil(b.MainContext.instance.rendererContext.renderCost).toString();
                this._txt.text = "draw:" + a + "\ncost:" + e + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
                this._tick = this._totalDeltaTime = 0
            }
            this._preDrawCount = 0
        }
        ;
        d.prototype.onDrawImage = function() {
            this._preDrawCount++
        }
        ;
        return d
    }
    ();
    b.Profiler = c;
    c.prototype.__class__ = "egret.Profiler"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._timeScale = 1;
            this._paused = !1;
            this.callBackList = [];
            null  != a.instance && b.Logger.fatal("egret.Ticker\u662f\u6846\u67b6\u5185\u90e8\u4f7f\u7528\u7684\u5355\u4f8b\uff0c\u4e0d\u5141\u8bb8\u5728\u5916\u90e8\u5b9e\u4f8b\u5316\uff0c\u8ba1\u65f6\u5668\u8bf7\u4f7f\u7528egret.Timer\u7c7b\uff01")
        }
        __extends(a, d);
        a.prototype.run = function() {
            b.__START_TIME = (new Date).getTime();
            b.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
        }
        ;
        a.prototype.update = 
        function(e) {
            if (!this._paused) {
                var a = this.callBackList.concat()
                  , b = a.length;
                e *= this._timeScale;
                e *= this._timeScale;
                for (var d = 0; d < b; d++) {
                    var c = a[d];
                    c.listener.call(c.thisObject, e)
                }
            }
        }
        ;
        a.prototype.register = function(e, a, b) {
            void 0 === b && (b = 0);
            this._insertEventBin(this.callBackList, e, a, b)
        }
        ;
        a.prototype.unregister = function(e, a) {
            this._removeEventBin(this.callBackList, e, a)
        }
        ;
        a.prototype.setTimeout = function(e, a, d) {
            for (var c = [], f = 3; f < arguments.length; f++)
                c[f - 3] = arguments[f];
            b.Logger.warning("Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout");
            b.setTimeout.apply(null , [e, a, d].concat(c))
        }
        ;
        a.prototype.setTimeScale = function(e) {
            this._timeScale = e
        }
        ;
        a.prototype.getTimeScale = function() {
            return this._timeScale
        }
        ;
        a.prototype.pause = function() {
            this._paused = !0
        }
        ;
        a.prototype.resume = function() {
            this._paused = !1
        }
        ;
        a.getInstance = function() {
            null  == a.instance && (a.instance = new a);
            return a.instance
        }
        ;
        return a
    }
    (b.EventDispatcher);
    b.Ticker = c;
    c.prototype.__class__ = "egret.Ticker"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.LEFT = "left";
        b.RIGHT = "right";
        b.CENTER = "center";
        b.JUSTIFY = "justify";
        b.CONTENT_JUSTIFY = "contentJustify";
        return b
    }
    ();
    b.HorizontalAlign = c;
    c.prototype.__class__ = "egret.HorizontalAlign"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.TOP = "top";
        b.BOTTOM = "bottom";
        b.MIDDLE = "middle";
        b.JUSTIFY = "justify";
        b.CONTENT_JUSTIFY = "contentJustify";
        return b
    }
    ();
    b.VerticalAlign = c;
    c.prototype.__class__ = "egret.VerticalAlign"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(e, a) {
            void 0 === a && (a = 0);
            d.call(this);
            this._currentCount = 0;
            this.delay = e;
            this.repeatCount = a
        }
        __extends(a, d);
        a.prototype.currentCount = function() {
            return this._currentCount
        }
        ;
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
        }
        ;
        a.prototype.start = function() {
            this._running || (this.lastTime = b.getTimer(),
            0 != this._currentCount && (this._currentCount = 
            0),
            b.Ticker.getInstance().register(this.onEnterFrame, this),
            this._running = !0)
        }
        ;
        a.prototype.stop = function() {
            this._running && (b.Ticker.getInstance().unregister(this.onEnterFrame, this),
            this._running = !1)
        }
        ;
        a.prototype.onEnterFrame = function(e) {
            e = b.getTimer();
            e - this.lastTime > this.delay && (this.lastTime = e,
            this._currentCount++,
            b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER),
            0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(),
            b.TimerEvent.dispatchTimerEvent(this, b.TimerEvent.TIMER_COMPLETE)))
        }
        ;
        return a
    }
    (b.EventDispatcher);
    b.Timer = c;
    c.prototype.__class__ = "egret.Timer"
}
)(egret || (egret = {}));
(function(b) {
    function c(b) {
        b = b.prototype ? b.prototype : Object.getPrototypeOf(b);
        if (b.hasOwnProperty("__class__"))
            return b.__class__;
        var a = b.constructor.toString()
          , e = a.indexOf("(")
          , a = a.substring(9, e);
        Object.defineProperty(b, "__class__", {
            value: a,
            enumerable: !1,
            writable: !0
        });
        return a
    }
    b.getQualifiedClassName = c;
    b.getQualifiedSuperclassName = function(b) {
        b = b.prototype ? b.prototype : Object.getPrototypeOf(b);
        if (b.hasOwnProperty("__superclass__"))
            return b.__superclass__;
        var a = Object.getPrototypeOf(b);
        if (null  == a)
            return null ;
        a = c(a.constructor);
        if (!a)
            return null ;
        Object.defineProperty(b, "__superclass__", {
            value: a,
            enumerable: !1,
            writable: !0
        });
        return a
    }
}
)(egret || (egret = {}));
(function(b) {
    var c = {};
    b.getDefinitionByName = function(b) {
        if (!b)
            return null ;
        var a = c[b];
        if (a)
            return a;
        for (var e = b.split("."), k = e.length, a = __global, m = 0; m < k; m++)
            if (a = a[e[m]],
            !a)
                return null ;
        return c[b] = a
    }
}
)(egret || (egret = {}));
var __global = __global || this;
(function(b) {
    function c(e) {
        for (var a in d) {
            var b = d[a];
            b.delay -= e;
            0 >= b.delay && (b.listener.apply(b.thisObject, b.params),
            delete d[a])
        }
    }
    var d = {}
      , a = 0;
    b.setTimeout = function(e, k, m) {
        for (var g = [], f = 3; f < arguments.length; f++)
            g[f - 3] = arguments[f];
        g = {
            listener: e,
            thisObject: k,
            delay: m,
            params: g
        };
        0 == a && b.Ticker.getInstance().register(c, null );
        a++;
        d[a] = g;
        return a
    }
    ;
    b.clearTimeout = function(e) {
        delete d[e]
    }
}
)(egret || (egret = {}));
(function(b) {
    b.hasDefinition = function(c) {
        return b.getDefinitionByName(c) ? !0 : !1
    }
}
)(egret || (egret = {}));
(function(b) {
    b.toColorString = function(b) {
        if (isNaN(b) || 0 > b)
            b = 0;
        16777215 < b && (b = 16777215);
        for (b = b.toString(16).toUpperCase(); 6 > b.length; )
            b = "0" + b;
        return "#" + b
    }
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(e, a, b, c, f, h) {
            void 0 === e && (e = 1);
            void 0 === a && (a = 0);
            void 0 === b && (b = 0);
            void 0 === c && (c = 1);
            void 0 === f && (f = 0);
            void 0 === h && (h = 0);
            d.call(this);
            this.a = e;
            this.b = a;
            this.c = b;
            this.d = c;
            this.tx = f;
            this.ty = h
        }
        __extends(a, d);
        a.prototype.prepend = function(e, a, b, d, c, h) {
            var l = this.tx;
            if (1 != e || 0 != a || 0 != b || 1 != d) {
                var n = this.a
                  , p = this.c;
                this.a = n * e + this.b * b;
                this.b = n * a + this.b * d;
                this.c = p * e + this.d * b;
                this.d = p * a + this.d * d
            }
            this.tx = l * e + this.ty * b + c;
            this.ty = l * a + this.ty * d + h;
            return this
        }
        ;
        a.prototype.append = 
        function(e, a, b, d, c, h) {
            var l = this.a
              , n = this.b
              , p = this.c
              , q = this.d;
            if (1 != e || 0 != a || 0 != b || 1 != d)
                this.a = e * l + a * p,
                this.b = e * n + a * q,
                this.c = b * l + d * p,
                this.d = b * n + d * q;
            this.tx = c * l + h * p + this.tx;
            this.ty = c * n + h * q + this.ty;
            return this
        }
        ;
        a.prototype.prependTransform = function(a, k, d, c, f, h, l, n, p) {
            if (f % 360) {
                var q = b.NumberUtils.cos(f);
                f = b.NumberUtils.sin(f)
            } else
                q = 1,
                f = 0;
            if (n || p)
                this.tx -= n,
                this.ty -= p;
            h || l ? (this.prepend(q * d, f * d, -f * c, q * c, 0, 0),
            this.prepend(b.NumberUtils.cos(l), b.NumberUtils.sin(l), -b.NumberUtils.sin(h), b.NumberUtils.cos(h), 
            a, k)) : this.prepend(q * d, f * d, -f * c, q * c, a, k);
            return this
        }
        ;
        a.prototype.appendTransform = function(a, k, d, c, f, h, l, n, p) {
            if (f % 360) {
                var q = b.NumberUtils.cos(f);
                f = b.NumberUtils.sin(f)
            } else
                q = 1,
                f = 0;
            h || l ? (this.append(b.NumberUtils.cos(l), b.NumberUtils.sin(l), -b.NumberUtils.sin(h), b.NumberUtils.cos(h), a, k),
            this.append(q * d, f * d, -f * c, q * c, 0, 0)) : this.append(q * d, f * d, -f * c, q * c, a, k);
            if (n || p)
                this.tx -= n * this.a + p * this.c,
                this.ty -= n * this.b + p * this.d;
            return this
        }
        ;
        a.prototype.rotate = function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            var d = 
            this.a
              , c = this.c
              , f = this.tx;
            this.a = d * b - this.b * a;
            this.b = d * a + this.b * b;
            this.c = c * b - this.d * a;
            this.d = c * a + this.d * b;
            this.tx = f * b - this.ty * a;
            this.ty = f * a + this.ty * b;
            return this
        }
        ;
        a.prototype.skew = function(a, k) {
            this.append(b.NumberUtils.cos(k), b.NumberUtils.sin(k), -b.NumberUtils.sin(a), b.NumberUtils.cos(a), 0, 0);
            return this
        }
        ;
        a.prototype.scale = function(a, b) {
            this.a *= a;
            this.d *= b;
            this.c *= a;
            this.b *= b;
            this.tx *= a;
            this.ty *= b;
            return this
        }
        ;
        a.prototype.translate = function(a, b) {
            this.tx += a;
            this.ty += b;
            return this
        }
        ;
        a.prototype.identity = 
        function() {
            this.a = this.d = 1;
            this.b = this.c = this.tx = this.ty = 0;
            return this
        }
        ;
        a.prototype.identityMatrix = function(a) {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.d = a.d;
            this.tx = a.tx;
            this.ty = a.ty;
            return this
        }
        ;
        a.prototype.invert = function() {
            var a = this.a
              , b = this.b
              , d = this.c
              , c = this.d
              , f = this.tx
              , h = a * c - b * d;
            this.a = c / h;
            this.b = -b / h;
            this.c = -d / h;
            this.d = a / h;
            this.tx = (d * this.ty - c * f) / h;
            this.ty = -(a * this.ty - b * f) / h;
            return this
        }
        ;
        a.transformCoords = function(a, d, c) {
            var g = b.Point.identity;
            g.x = a.a * d + a.c * c + a.tx;
            g.y = a.d * c + a.b * d + a.ty;
            return g
        }
        ;
        a.prototype.toArray = function(a) {
            this.array || (this.array = new Float32Array(9));
            a ? (this.array[0] = this.a,
            this.array[1] = this.b,
            this.array[2] = 0,
            this.array[3] = this.c,
            this.array[4] = this.d,
            this.array[5] = 0,
            this.array[6] = this.tx,
            this.array[7] = this.ty) : (this.array[0] = this.a,
            this.array[1] = this.b,
            this.array[2] = this.tx,
            this.array[3] = this.c,
            this.array[4] = this.d,
            this.array[5] = this.ty,
            this.array[6] = 0,
            this.array[7] = 0);
            this.array[8] = 1;
            return this.array
        }
        ;
        a.identity = new a;
        a.DEG_TO_RAD = Math.PI / 180;
        return a
    }
    (b.HashObject);
    b.Matrix = c;
    c.prototype.__class__ = "egret.Matrix"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(b) {
        function a(a, k) {
            void 0 === a && (a = 0);
            void 0 === k && (k = 0);
            b.call(this);
            this.x = a;
            this.y = k
        }
        __extends(a, b);
        a.prototype.clone = function() {
            return new a(this.x,this.y)
        }
        ;
        a.prototype.equals = function(a) {
            return this.x == a.x && this.y == a.y
        }
        ;
        a.distance = function(a, b) {
            return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y))
        }
        ;
        a.identity = new a(0,0);
        return a
    }
    (b.HashObject);
    b.Point = c;
    c.prototype.__class__ = "egret.Point"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(b) {
        function a(a, k, c, g) {
            void 0 === a && (a = 0);
            void 0 === k && (k = 0);
            void 0 === c && (c = 0);
            void 0 === g && (g = 0);
            b.call(this);
            this.x = a;
            this.y = k;
            this.width = c;
            this.height = g
        }
        __extends(a, b);
        Object.defineProperty(a.prototype, "right", {
            get: function() {
                return this.x + this.width
            },
            set: function(a) {
                this.width = a - this.x
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "bottom", {
            get: function() {
                return this.y + this.height
            },
            set: function(a) {
                this.height = a - this.y
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.initialize = function(a, b, d, c) {
            this.x = a;
            this.y = b;
            this.width = d;
            this.height = c;
            return this
        }
        ;
        a.prototype.contains = function(a, b) {
            return this.x <= a && this.x + this.width >= a && this.y <= b && this.y + this.height >= b
        }
        ;
        a.prototype.intersects = function(a) {
            return Math.max(this.x, a.x) <= Math.min(this.right, a.right) && Math.max(this.y, a.y) <= Math.min(this.bottom, a.bottom)
        }
        ;
        a.prototype.setEmpty = function() {
            this.height = this.width = this.y = this.x = 0
        }
        ;
        a.prototype.clone = function() {
            return new a(this.x,this.y,this.width,this.height)
        }
        ;
        a.prototype.containsPoint = function(a) {
            return this.x < a.x && this.x + this.width > a.x && this.y < a.y && this.y + this.height > a.y ? !0 : !1
        }
        ;
        a.identity = new a(0,0,0,0);
        return a
    }
    (b.HashObject);
    b.Rectangle = c;
    c.prototype.__class__ = "egret.Rectangle"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function d() {}
        d.fatal = function(a, e) {
            void 0 === e && (e = null );
            b.Logger.traceToConsole("Fatal", a, e);
            throw Error(b.Logger.getTraceCode("Fatal", a, e));
        }
        ;
        d.info = function(a, e) {
            void 0 === e && (e = null );
            b.Logger.traceToConsole("Info", a, e)
        }
        ;
        d.warning = function(a, e) {
            void 0 === e && (e = null );
            b.Logger.traceToConsole("Warning", a, e)
        }
        ;
        d.traceToConsole = function(a, e, d) {
            console.log(b.Logger.getTraceCode(a, e, d))
        }
        ;
        d.getTraceCode = function(a, e, b) {
            return "[" + a + "]" + e + ":" + (null  == b ? "" : b)
        }
        ;
        return d
    }
    ();
    b.Logger = 
    c;
    c.prototype.__class__ = "egret.Logger"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._isSupportDOMParser = this._xmlDict = this._parser = null ;
            this._xmlDict = {};
            window.DOMParser ? (this._isSupportDOMParser = !0,
            this._parser = new DOMParser) : this._isSupportDOMParser = !1
        }
        __extends(a, d);
        a.getInstance = function() {
            a._instance || (a._instance = new a);
            return a._instance
        }
        ;
        a.prototype.parserXML = function(a) {
            for (var d = 0; "\n" == a.charAt(d) || "\t" == a.charAt(d) || "\r" == a.charAt(d) || " " == a.charAt(d); )
                d++;
            0 != d && (a = a.substring(d, a.length));
            this._isSupportDOMParser ? 
            d = this._parser.parseFromString(a, "text/xml") : (d = new ActiveXObject("Microsoft.XMLDOM"),
            d.async = "false",
            d.loadXML(a));
            null  == d && b.Logger.info("xml not found!");
            return d
        }
        ;
        a._instance = null ;
        return a
    }
    (b.HashObject);
    b.SAXParser = c;
    c.prototype.__class__ = "egret.SAXParser"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(e) {
        function d() {
            e.call(this);
            this._designHeight = this._designWidth = 0;
            this._scaleY = this._scaleX = 1;
            this._stageHeight = this._stageWidth = this._offSetY = 0
        }
        __extends(d, e);
        d.getInstance = function() {
            null  == d.instance && (a.initialize(),
            d.instance = new d);
            return d.instance
        }
        ;
        d.prototype.setDesignSize = function(a, e, d) {
            this._designWidth = a;
            this._designHeight = e;
            d && (b.Logger.warning("\u8be5\u65b9\u6cd5\u76ee\u524d\u4e0d\u5e94\u4f20\u5165 resolutionPolicy \u53c2\u6570\uff0c\u8bf7\u5728 docs/1.0_Final_ReleaseNote\u4e2d\u67e5\u770b\u5982\u4f55\u5347\u7ea7"),
            this._setResolutionPolicy(d))
        }
        ;
        d.prototype._setResolutionPolicy = function(a) {
            this._resolutionPolicy = a;
            a.init(this);
            a._apply(this, this._designWidth, this._designHeight)
        }
        ;
        d.prototype.getScaleX = function() {
            return this._scaleX
        }
        ;
        d.prototype.getScaleY = function() {
            return this._scaleY
        }
        ;
        d.prototype.getOffSetY = function() {
            return this._offSetY
        }
        ;
        d.canvas_name = "egretCanvas";
        d.canvas_div_name = "gameDiv";
        return d
    }
    (b.HashObject);
    b.StageDelegate = c;
    c.prototype.__class__ = "egret.StageDelegate";
    var d = function() {
        function a(e, 
        b) {
            this._containerStrategy = e;
            this._contentStrategy = b
        }
        a.prototype.init = function(a) {
            this._containerStrategy.init(a);
            this._contentStrategy.init(a)
        }
        ;
        a.prototype._apply = function(a, e, b) {
            this._containerStrategy._apply(a, e, b);
            this._contentStrategy._apply(a, e, b)
        }
        ;
        return a
    }
    ();
    b.ResolutionPolicy = d;
    d.prototype.__class__ = "egret.ResolutionPolicy";
    var a = function() {
        function a() {}
        a.initialize = function() {
            a.EQUAL_TO_FRAME = new e
        }
        ;
        a.prototype.init = function(a) {}
        ;
        a.prototype._apply = function(a, e, b) {}
        ;
        a.prototype._setupContainer = 
        function() {
            var a = document.body, e;
            a && (e = a.style) && (e.paddingTop = e.paddingTop || "0px",
            e.paddingRight = e.paddingRight || "0px",
            e.paddingBottom = e.paddingBottom || "0px",
            e.paddingLeft = e.paddingLeft || "0px",
            e.borderTop = e.borderTop || "0px",
            e.borderRight = e.borderRight || "0px",
            e.borderBottom = e.borderBottom || "0px",
            e.borderLeft = e.borderLeft || "0px",
            e.marginTop = e.marginTop || "0px",
            e.marginRight = e.marginRight || "0px",
            e.marginBottom = e.marginBottom || "0px",
            e.marginLeft = e.marginLeft || "0px")
        }
        ;
        return a
    }
    ();
    b.ContainerStrategy = a;
    a.prototype.__class__ = "egret.ContainerStrategy";
    var e = function(a) {
        function e() {
            a.apply(this, arguments)
        }
        __extends(e, a);
        e.prototype._apply = function(a) {
            this._setupContainer()
        }
        ;
        return e
    }
    (a);
    b.EqualToFrame = e;
    e.prototype.__class__ = "egret.EqualToFrame";
    d = function() {
        function a() {}
        a.prototype.init = function(a) {}
        ;
        a.prototype._apply = function(a, e, b) {}
        ;
        a.prototype.setEgretSize = function(a, e, d, k, m, p) {
            void 0 === p && (p = 0);
            b.StageDelegate.getInstance()._stageWidth = Math.round(a);
            b.StageDelegate.getInstance()._stageHeight = 
            Math.round(e);
            a = document.getElementById(c.canvas_div_name);
            a.style.width = d + "px";
            a.style.height = k + "px";
            a.style.top = p + "px"
        }
        ;
        a.prototype._getClientWidth = function() {
            return document.documentElement.clientWidth
        }
        ;
        a.prototype._getClientHeight = function() {
            return document.documentElement.clientHeight
        }
        ;
        return a
    }
    ();
    b.ContentStrategy = d;
    d.prototype.__class__ = "egret.ContentStrategy";
    var k = function(a) {
        function e(b) {
            void 0 === b && (b = 0);
            a.call(this);
            this.minWidth = b
        }
        __extends(e, a);
        e.prototype._apply = function(a, e, b) {
            e = 
            this._getClientWidth();
            var d = this._getClientHeight()
              , k = d / b
              , c = e / k
              , m = 1;
            0 != this.minWidth && (m = Math.min(1, c / this.minWidth));
            this.setEgretSize(c / m, b, e, d * m);
            a._scaleX = k * m;
            a._scaleY = k * m
        }
        ;
        return e
    }
    (d);
    b.FixedHeight = k;
    k.prototype.__class__ = "egret.FixedHeight";
    k = function(a) {
        function e(b) {
            void 0 === b && (b = 0);
            a.call(this);
            this.minHeight = b
        }
        __extends(e, a);
        e.prototype._apply = function(a, e, b) {
            b = this._getClientWidth();
            var d = this._getClientHeight()
              , k = b / e
              , c = d / k
              , m = 1;
            0 != this.minHeight && (m = Math.min(1, c / this.minHeight));
            this.setEgretSize(e, 
            c / m, b * m, d, b * (1 - m) / 2);
            a._scaleX = k * m;
            a._scaleY = k * m
        }
        ;
        return e
    }
    (d);
    b.FixedWidth = k;
    k.prototype.__class__ = "egret.FixedWidth";
    k = function(a) {
        function e(b, d) {
            a.call(this);
            this.width = b;
            this.height = d
        }
        __extends(e, a);
        e.prototype._apply = function(a, e, b) {
            b = this.width;
            var d = this.height
              , k = b / e;
            this.setEgretSize(e, d / k, b, d);
            a._scaleX = k;
            a._scaleY = k
        }
        ;
        return e
    }
    (d);
    b.FixedSize = k;
    k.prototype.__class__ = "egret.FixedSize";
    k = function(a) {
        function e() {
            a.call(this)
        }
        __extends(e, a);
        e.prototype._apply = function(a, e, b) {
            this.setEgretSize(e, 
            b, e, b, Math.floor((e - e) / 2));
            a._scaleX = 1;
            a._scaleY = 1
        }
        ;
        return e
    }
    (d);
    b.NoScale = k;
    k.prototype.__class__ = "egret.NoScale";
    k = function(a) {
        function e() {
            a.call(this)
        }
        __extends(e, a);
        e.prototype._apply = function(a, e, b) {
            var d = this._getClientWidth()
              , k = this._getClientHeight()
              , c = d
              , m = k
              , g = c / e < m / b ? c / e : m / b
              , c = e * g
              , m = b * g
              , d = Math.floor((d - c) / 2);
            a._offSetY = Math.floor((k - m) / 2);
            this.setEgretSize(e, b / 1, 1 * c, m, d, a._offSetY);
            a._scaleX = 1 * g;
            a._scaleY = 1 * g
        }
        ;
        return e
    }
    (d);
    b.ShowAll = k;
    k.prototype.__class__ = "egret.ShowAll";
    d = function(a) {
        function e() {
            a.call(this)
        }
        __extends(e, a);
        e.prototype._apply = function(a, e, b) {
            var d = this._getClientWidth()
              , k = this._getClientHeight()
              , d = d / e
              , k = k / b;
            this.setEgretSize(e, b, e * d, b * k);
            a._scaleX = d;
            a._scaleY = k
        }
        ;
        return e
    }
    (d);
    b.FullScreen = d;
    d.prototype.__class__ = "egret.FullScreen"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._originalData = {};
            this._drawAreaList = []
        }
        __extends(a, d);
        a.getInstance = function() {
            null  == a.instance && (a.instance = new a);
            return a.instance
        }
        ;
        a.prototype.addDrawArea = function(a) {
            this._drawAreaList.push(a)
        }
        ;
        a.prototype.clearDrawArea = function() {
            this._drawAreaList = []
        }
        ;
        a.prototype.drawImage = function(a, d, c, g, f, h, l, n, p, q, r) {
            void 0 === r && (r = void 0);
            l = l || 0;
            n = n || 0;
            var t = d._texture_to_render;
            if (null  != t && 0 != h && 0 != f && 0 != p && 0 != q) {
                var s = b.MainContext.instance.rendererContext.texture_scale_factor;
                f /= s;
                h /= s;
                if (0 != this._drawAreaList.length && b.MainContext.instance.rendererContext._cacheCanvasContext) {
                    s = b.DisplayObject.getTransformBounds(d._getSize(b.Rectangle.identity), d._worldTransform);
                    d._worldBounds.initialize(s.x, s.y, s.width, s.height);
                    s = this._originalData;
                    s.sourceX = c;
                    s.sourceY = g;
                    s.sourceWidth = f;
                    s.sourceHeight = h;
                    s.destX = l;
                    s.destY = n;
                    s.destWidth = p;
                    s.destHeight = q;
                    for (var u = this.getDrawAreaList(), v = 0; v < u.length; v++)
                        if (!this.ignoreRender(d, u[v], s.destX, s.destY)) {
                            a.drawImage(t, c, g, f, h, l, n, p, q, r);
                            break
                        }
                } else
                    a.drawImage(t, c, g, f, h, l, n, p, q, r)
            }
        }
        ;
        a.prototype.ignoreRender = function(a, b, d, c) {
            var f = a._worldBounds;
            d *= a._worldTransform.a;
            c *= a._worldTransform.d;
            return f.x + f.width + d <= b.x || f.x + d >= b.x + b.width || f.y + f.height + c <= b.y || f.y + c >= b.y + b.height ? !0 : !1
        }
        ;
        a.prototype.getDrawAreaList = function() {
            var a;
            0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new b.Rectangle(0,0,b.MainContext.instance.stage.stageWidth,b.MainContext.instance.stage.stageHeight)],
            b.MainContext.instance.stage.addEventListener(b.Event.RESIZE, 
            this.onResize, this)),
            a = this._defaultDrawAreaList) : a = this._drawAreaList;
            return a
        }
        ;
        a.prototype.onResize = function() {
            b.MainContext.instance.stage.removeEventListener(b.Event.RESIZE, this.onResize, this);
            this._defaultDrawAreaList = null 
        }
        ;
        return a
    }
    (b.HashObject);
    b.RenderFilter = c;
    c.prototype.__class__ = "egret.RenderFilter"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function d() {}
        d.mapClass = function(a, e, b) {
            void 0 === b && (b = "");
            a = this.getKey(a) + "#" + b;
            this.mapClassDic[a] = e
        }
        ;
        d.getKey = function(a) {
            return "string" == typeof a ? a : b.getQualifiedClassName(a)
        }
        ;
        d.mapValue = function(a, e, b) {
            void 0 === b && (b = "");
            a = this.getKey(a) + "#" + b;
            this.mapValueDic[a] = e
        }
        ;
        d.hasMapRule = function(a, e) {
            void 0 === e && (e = "");
            var b = this.getKey(a) + "#" + e;
            return this.mapValueDic[b] || this.mapClassDic[b] ? !0 : !1
        }
        ;
        d.getInstance = function(a, e) {
            void 0 === e && (e = "");
            var b = this.getKey(a) + "#" + 
            e;
            if (this.mapValueDic[b])
                return this.mapValueDic[b];
            var d = this.mapClassDic[b];
            if (d)
                return d = new d,
                this.mapValueDic[b] = d,
                delete this.mapClassDic[b],
                d;
            throw Error("\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:" + b + "\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002");
        }
        ;
        d.mapClassDic = {};
        d.mapValueDic = {};
        return d
    }
    ();
    b.Injector = c;
    c.prototype.__class__ = "egret.Injector"
}
)(egret || 
(egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.NORMAL = "normal";
        b.ADD = "add";
        return b
    }
    ();
    b.BlendMode = c;
    c.prototype.__class__ = "egret.BlendMode"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.__hack_local_matrix = null ;
            this._sizeDirty = this._normalDirty = !0;
            this._parent = this._texture_to_render = null ;
            this._y = this._x = 0;
            this._scaleY = this._scaleX = 1;
            this._anchorY = this._anchorX = this._anchorOffsetY = this._anchorOffsetX = 0;
            this._visible = !0;
            this._rotation = 0;
            this._alpha = 1;
            this._skewY = this._skewX = 0;
            this._touchEnabled = !1;
            this._scrollRect = this.blendMode = null ;
            this._hasHeightSet = this._hasWidthSet = !1;
            this._worldBounds = this.mask = null ;
            this.worldAlpha = 
            1;
            this._rectH = this._rectW = 0;
            this._stage = null ;
            this._cacheDirty = this._cacheAsBitmap = !1;
            this._colorTransform = null ;
            this._worldTransform = new b.Matrix;
            this._worldBounds = new b.Rectangle(0,0,0,0);
            this._cacheBounds = new b.Rectangle(0,0,0,0)
        }
        __extends(a, d);
        a.prototype._setDirty = function() {
            this._normalDirty = !0
        }
        ;
        a.prototype.getDirty = function() {
            return this._normalDirty || this._sizeDirty
        }
        ;
        a.prototype._setParentSizeDirty = function() {
            var a = this._parent;
            !a || a._hasWidthSet || a._hasHeightSet || a._setSizeDirty()
        }
        ;
        a.prototype._setSizeDirty = 
        function() {
            this._sizeDirty || (this._sizeDirty = !0,
            this._setDirty(),
            this._setCacheDirty(),
            this._setParentSizeDirty())
        }
        ;
        a.prototype._clearDirty = function() {
            this._normalDirty = !1
        }
        ;
        a.prototype._clearSizeDirty = function() {
            this._sizeDirty = !1
        }
        ;
        Object.defineProperty(a.prototype, "parent", {
            get: function() {
                return this._parent
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._parentChanged = function(a) {
            this._parent = a
        }
        ;
        Object.defineProperty(a.prototype, "x", {
            get: function() {
                return this._x
            },
            set: function(a) {
                this._setX(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setX = function(a) {
            b.NumberUtils.isNumber(a) && this._x != a && (this._x = a,
            this._setDirty(),
            this._setParentSizeDirty())
        }
        ;
        Object.defineProperty(a.prototype, "y", {
            get: function() {
                return this._y
            },
            set: function(a) {
                this._setY(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setY = function(a) {
            b.NumberUtils.isNumber(a) && this._y != a && (this._y = a,
            this._setDirty(),
            this._setParentSizeDirty())
        }
        ;
        Object.defineProperty(a.prototype, "scaleX", {
            get: function() {
                return this._scaleX
            },
            set: function(a) {
                b.NumberUtils.isNumber(a) && 
                this._scaleX != a && (this._scaleX = a,
                this._setDirty(),
                this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "scaleY", {
            get: function() {
                return this._scaleY
            },
            set: function(a) {
                b.NumberUtils.isNumber(a) && this._scaleY != a && (this._scaleY = a,
                this._setDirty(),
                this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "anchorOffsetX", {
            get: function() {
                return this._anchorOffsetX
            },
            set: function(a) {
                b.NumberUtils.isNumber(a) && this._anchorOffsetX != 
                a && (this._anchorOffsetX = a,
                this._setDirty(),
                this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "anchorOffsetY", {
            get: function() {
                return this._anchorOffsetY
            },
            set: function(a) {
                b.NumberUtils.isNumber(a) && this._anchorOffsetY != a && (this._anchorOffsetY = a,
                this._setDirty(),
                this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "anchorX", {
            get: function() {
                return this._anchorX
            },
            set: function(a) {
                this._setAnchorX(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setAnchorX = function(a) {
            b.NumberUtils.isNumber(a) && this._anchorX != a && (this._anchorX = a,
            this._setDirty(),
            this._setParentSizeDirty())
        }
        ;
        Object.defineProperty(a.prototype, "anchorY", {
            get: function() {
                return this._anchorY
            },
            set: function(a) {
                this._setAnchorY(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setAnchorY = function(a) {
            b.NumberUtils.isNumber(a) && this._anchorY != a && (this._anchorY = a,
            this._setDirty(),
            this._setParentSizeDirty())
        }
        ;
        Object.defineProperty(a.prototype, "visible", {
            get: function() {
                return this._visible
            },
            set: function(a) {
                this._setVisible(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setVisible = function(a) {
            this._visible != a && (this._visible = a,
            this._setSizeDirty())
        }
        ;
        Object.defineProperty(a.prototype, "rotation", {
            get: function() {
                return this._rotation
            },
            set: function(a) {
                b.NumberUtils.isNumber(a) && this._rotation != a && (this._rotation = a,
                this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "alpha", {
            get: function() {
                return this._alpha
            },
            set: function(a) {
                b.NumberUtils.isNumber(a) && 
                this._alpha != a && (this._alpha = a,
                this._setDirty(),
                this._setCacheDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "skewX", {
            get: function() {
                return this._skewX
            },
            set: function(a) {
                b.NumberUtils.isNumber(a) && this._skewX != a && (this._skewX = a,
                this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "skewY", {
            get: function() {
                return this._skewY
            },
            set: function(a) {
                b.NumberUtils.isNumber(a) && this._skewY != a && (this._skewY = a,
                this._setParentSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "touchEnabled", {
            get: function() {
                return this._touchEnabled
            },
            set: function(a) {
                this._setTouchEnabled(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setTouchEnabled = function(a) {
            this._touchEnabled = a
        }
        ;
        Object.defineProperty(a.prototype, "scrollRect", {
            get: function() {
                return this._scrollRect
            },
            set: function(a) {
                this._setScrollRect(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setScrollRect = function(a) {
            this._scrollRect = a;
            this._setSizeDirty()
        }
        ;
        Object.defineProperty(a.prototype, 
        "measuredWidth", {
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
        Object.defineProperty(a.prototype, 
        "width", {
            get: function() {
                return this._getSize(b.Rectangle.identity).width
            },
            set: function(a) {
                this._setWidth(a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "height", {
            get: function() {
                return this._getSize(b.Rectangle.identity).height
            },
            set: function(a) {
                this._setHeight(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setWidth = function(a) {
            this._setSizeDirty();
            this._setCacheDirty();
            this._explicitWidth = a;
            this._hasWidthSet = b.NumberUtils.isNumber(a)
        }
        ;
        a.prototype._setHeight = function(a) {
            this._setSizeDirty();
            this._setCacheDirty();
            this._explicitHeight = a;
            this._hasHeightSet = b.NumberUtils.isNumber(a)
        }
        ;
        a.prototype._draw = function(a) {
            if (this._visible && !this.drawCacheTexture(a)) {
                this._colorTransform && a.setGlobalColorTransform(this._colorTransform.matrix);
                a.setAlpha(this.worldAlpha, this.blendMode);
                a.setTransform(this._worldTransform);
                var b = this.mask || this._scrollRect;
                b && a.pushMask(b);
                this._render(a);
                b && a.popMask();
                this._colorTransform && a.setGlobalColorTransform(null )
            }
            this.destroyCacheBounds()
        }
        ;
        a.prototype.drawCacheTexture = 
        function(a) {
            if (!1 == this._cacheAsBitmap)
                return !1;
            if (this._cacheDirty || null  == this._texture_to_render || Math.round(this.width) != Math.round(this._texture_to_render._sourceWidth) || Math.round(this.height) != Math.round(this._texture_to_render._sourceHeight))
                this._cacheDirty = !this._makeBitmapCache();
            if (null  == this._texture_to_render)
                return !1;
            var d = this._texture_to_render
              , c = d._offsetX
              , g = d._offsetY
              , f = d._textureWidth
              , d = d._textureHeight;
            this._updateTransform();
            a.setAlpha(this.worldAlpha, this.blendMode);
            a.setTransform(this._worldTransform);
            b.RenderFilter.getInstance().drawImage(a, this, 0, 0, f, d, c, g, f, d);
            return !0
        }
        ;
        a.prototype._updateTransform = function() {
            this._calculateWorldTransform()
        }
        ;
        a.prototype._calculateWorldTransform = function() {
            var a = this._worldTransform
              , b = this._parent;
            a.identityMatrix(b._worldTransform);
            this._getMatrix(a);
            var d = this._scrollRect;
            d && a.append(1, 0, 0, 1, -d.x, -d.y);
            this.worldAlpha = b.worldAlpha * this._alpha
        }
        ;
        a.prototype._render = function(a) {}
        ;
        a.prototype.getBounds = function(a, d) {
            void 0 === d && (d = !0);
            var c = this._measureBounds()
              , 
            g = this._hasWidthSet ? this._explicitWidth : c.width
              , f = this._hasHeightSet ? this._explicitHeight : c.height;
            this._rectW = c.width;
            this._rectH = c.height;
            this._clearSizeDirty();
            var h = c.x
              , c = c.y
              , l = 0
              , n = 0;
            d && (0 != this._anchorX || 0 != this._anchorY ? (l = g * this._anchorX,
            n = f * this._anchorY) : (l = this._anchorOffsetX,
            n = this._anchorOffsetY));
            this._cacheBounds.initialize(h - l, c - n, g, f);
            g = this._cacheBounds;
            a || (a = new b.Rectangle);
            return a.initialize(g.x, g.y, g.width, g.height)
        }
        ;
        a.prototype.destroyCacheBounds = function() {
            this._cacheBounds.x = 
            0;
            this._cacheBounds.y = 0;
            this._cacheBounds.width = 0;
            this._cacheBounds.height = 0
        }
        ;
        a.prototype._getConcatenatedMatrix = function() {
            for (var e = a.identityMatrixForGetConcatenated.identity(), d = this; null  != d; ) {
                if (0 != d._anchorX || 0 != d._anchorY) {
                    var c = d._getSize(b.Rectangle.identity);
                    e.prependTransform(d._x, d._y, d._scaleX, d._scaleY, d._rotation, d._skewX, d._skewY, c.width * d._anchorX, c.height * d._anchorY)
                } else
                    e.prependTransform(d._x, d._y, d._scaleX, d._scaleY, d._rotation, d._skewX, d._skewY, d._anchorOffsetX, d._anchorOffsetY);
                d._scrollRect && e.prepend(1, 0, 0, 1, -d._scrollRect.x, -d._scrollRect.y);
                d = d._parent
            }
            return e
        }
        ;
        a.prototype.localToGlobal = function(a, d, c) {
            void 0 === a && (a = 0);
            void 0 === d && (d = 0);
            var g = this._getConcatenatedMatrix();
            g.append(1, 0, 0, 1, a, d);
            c || (c = new b.Point);
            c.x = g.tx;
            c.y = g.ty;
            return c
        }
        ;
        a.prototype.globalToLocal = function(a, d, c) {
            void 0 === a && (a = 0);
            void 0 === d && (d = 0);
            var g = this._getConcatenatedMatrix();
            g.invert();
            g.append(1, 0, 0, 1, a, d);
            c || (c = new b.Point);
            c.x = g.tx;
            c.y = g.ty;
            return c
        }
        ;
        a.prototype.hitTest = function(a, d, c) {
            void 0 === 
            c && (c = !1);
            if (!this._visible || !c && !this._touchEnabled)
                return null ;
            c = this._getSize(b.Rectangle.identity);
            return 0 <= a && a < c.width && 0 <= d && d < c.height ? this.mask || this._scrollRect ? this._scrollRect && a > this._scrollRect.x && d > this._scrollRect.y && a < this._scrollRect.x + this._scrollRect.width && d < this._scrollRect.y + this._scrollRect.height || this.mask && this.mask.x <= a && a < this.mask.x + this.mask.width && this.mask.y <= d && d < this.mask.y + this.mask.height ? this : null  : this : null 
        }
        ;
        a.prototype.hitTestPoint = function(a, d, c) {
            a = this.globalToLocal(a, 
            d);
            return c ? (this._hitTestPointTexture || (this._hitTestPointTexture = new b.RenderTexture),
            c = this._hitTestPointTexture,
            c.drawToTexture(this),
            0 != c.getPixel32(a.x - this._hitTestPointTexture._offsetX, a.y - this._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(a.x, a.y, !0)
        }
        ;
        a.prototype._getMatrix = function(a) {
            a || (a = b.Matrix.identity.identity());
            var d, c;
            c = this._getOffsetPoint();
            d = c.x;
            c = c.y;
            var g = this.__hack_local_matrix;
            g ? (a.append(g.a, g.b, g.c, g.d, g.tx, g.ty),
            a.append(1, 0, 0, 1, -d, -c)) : a.appendTransform(this._x, 
            this._y, this._scaleX, this._scaleY, this._rotation, this._skewX, this._skewY, d, c);
            return a
        }
        ;
        a.prototype._getSize = function(a) {
            if (this._hasHeightSet && this._hasWidthSet)
                return this._clearSizeDirty(),
                a.initialize(0, 0, this._explicitWidth, this._explicitHeight);
            this._measureSize(a);
            this._hasWidthSet && (a.width = this._explicitWidth);
            this._hasHeightSet && (a.height = this._explicitHeight);
            return a
        }
        ;
        a.prototype._measureSize = function(a) {
            this._sizeDirty ? (a = this._measureBounds(),
            this._rectW = a.width,
            this._rectH = a.height,
            this._clearSizeDirty()) : (a.width = this._rectW,
            a.height = this._rectH);
            a.x = 0;
            a.y = 0;
            return a
        }
        ;
        a.prototype._measureBounds = function() {
            return b.Rectangle.identity.initialize(0, 0, 0, 0)
        }
        ;
        a.prototype._getOffsetPoint = function() {
            var a = this._anchorOffsetX
              , d = this._anchorOffsetY;
            if (0 != this._anchorX || 0 != this._anchorY)
                d = this._getSize(b.Rectangle.identity),
                a = this._anchorX * d.width,
                d = this._anchorY * d.height;
            var c = b.Point.identity;
            c.x = a;
            c.y = d;
            return c
        }
        ;
        a.prototype._onAddToStage = function() {
            this._stage = b.MainContext.instance.stage;
            b.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
        }
        ;
        a.prototype._onRemoveFromStage = function() {
            b.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
        }
        ;
        Object.defineProperty(a.prototype, "stage", {
            get: function() {
                return this._stage
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.addEventListener = function(e, c, m, g, f) {
            void 0 === g && (g = !1);
            void 0 === f && (f = 0);
            d.prototype.addEventListener.call(this, e, c, m, g, f);
            ((g = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._insertEventBin(g ? a._enterFrameCallBackList : 
            a._renderCallBackList, c, m, f, this)
        }
        ;
        a.prototype.removeEventListener = function(e, c, m, g) {
            void 0 === g && (g = !1);
            d.prototype.removeEventListener.call(this, e, c, m, g);
            ((g = e == b.Event.ENTER_FRAME) || e == b.Event.RENDER) && this._removeEventBin(g ? a._enterFrameCallBackList : a._renderCallBackList, c, m, this)
        }
        ;
        a.prototype.dispatchEvent = function(a) {
            if (!a._bubbles)
                return d.prototype.dispatchEvent.call(this, a);
            for (var b = [], c = this; c; )
                b.push(c),
                c = c._parent;
            a._reset();
            this._dispatchPropagationEvent(a, b);
            return !a._isDefaultPrevented
        }
        ;
        a.prototype._dispatchPropagationEvent = function(a, b, d) {
            d = b.length;
            for (var c = 1, f = d - 1; 0 <= f; f--) {
                var h = b[f];
                a._currentTarget = h;
                a._target = this;
                a._eventPhase = c;
                h._notifyListener(a);
                if (a._isPropagationStopped || a._isPropagationImmediateStopped)
                    return
            }
            h = b[0];
            a._currentTarget = h;
            a._target = this;
            a._eventPhase = 2;
            h._notifyListener(a);
            if (!a._isPropagationStopped && !a._isPropagationImmediateStopped)
                for (c = 3,
                f = 1; f < d && (h = b[f],
                a._currentTarget = h,
                a._target = this,
                a._eventPhase = c,
                h._notifyListener(a),
                !a._isPropagationStopped && 
                !a._isPropagationImmediateStopped); f++)
                    ;
        }
        ;
        a.prototype.willTrigger = function(a) {
            for (var b = this; b; ) {
                if (b.hasEventListener(a))
                    return !0;
                b = b._parent
            }
            return !1
        }
        ;
        Object.defineProperty(a.prototype, "cacheAsBitmap", {
            get: function() {
                return this._cacheAsBitmap
            },
            set: function(a) {
                (this._cacheAsBitmap = a) ? b.callLater(this._makeBitmapCache, this) : this._texture_to_render = null 
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._makeBitmapCache = function() {
            this.renderTexture || (this.renderTexture = new b.RenderTexture);
            var a = this.renderTexture.drawToTexture(this);
            this._texture_to_render = a ? this.renderTexture : null ;
            return a
        }
        ;
        a.prototype._setCacheDirty = function(a) {
            void 0 === a && (a = !0);
            this._cacheDirty = a
        }
        ;
        a.getTransformBounds = function(a, b) {
            var d = a.x
              , c = a.y
              , f = a.width
              , h = a.height;
            (d || c) && b.appendTransform(0, 0, 1, 1, 0, 0, 0, -d, -c);
            var l = f * b.a
              , f = f * b.b
              , n = h * b.c
              , h = h * b.d
              , p = b.tx
              , q = b.ty
              , r = p
              , t = p
              , s = q
              , u = q;
            (d = l + p) < r ? r = d : d > t && (t = d);
            (d = l + n + p) < r ? r = d : d > t && (t = d);
            (d = n + p) < r ? r = d : d > t && (t = d);
            (c = f + q) < s ? s = c : c > u && (u = c);
            (c = f + h + q) < s ? s = c : c > u && (u = c);
            (c = h + q) < s ? s = c : c > u && (u = c);
            return a.initialize(r, s, 
            t - r, u - s)
        }
        ;
        Object.defineProperty(a.prototype, "colorTransform", {
            get: function() {
                return this._colorTransform
            },
            set: function(a) {
                this._colorTransform = a
            },
            enumerable: !0,
            configurable: !0
        });
        a.identityMatrixForGetConcatenated = new b.Matrix;
        a._enterFrameCallBackList = [];
        a._renderCallBackList = [];
        return a
    }
    (b.EventDispatcher);
    b.DisplayObject = c;
    c.prototype.__class__ = "egret.DisplayObject";
    c = function() {
        function b() {
            this.matrix = null 
        }
        b.prototype.updateColor = function(a, e, b, d, c, f, h, l) {}
        ;
        return b
    }
    ();
    b.ColorTransform = c;
    c.prototype.__class__ = "egret.ColorTransform";
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._touchChildren = !0;
            this._children = []
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "touchChildren", {
            get: function() {
                return this._touchChildren
            },
            set: function(a) {
                this._touchChildren = a
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
        a.prototype.setChildIndex = function(a, b) {
            this.doSetChildIndex(a, b)
        }
        ;
        a.prototype.doSetChildIndex = function(a, 
        d) {
            var c = this._children.indexOf(a);
            0 > c && b.Logger.fatal("child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185");
            this._children.splice(c, 1);
            0 > d || this._children.length <= d ? this._children.push(a) : this._children.splice(d, 0, a)
        }
        ;
        a.prototype.addChild = function(a) {
            var b = this._children.length;
            a._parent == this && b--;
            return this._doAddChild(a, b)
        }
        ;
        a.prototype.addChildAt = function(a, b) {
            return this._doAddChild(a, b)
        }
        ;
        a.prototype._doAddChild = function(e, d, c) {
            void 0 === c && (c = !0);
            if (e == this)
                return e;
            if (0 > d || d > this._children.length)
                return b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4"),
                e;
            var g = e._parent;
            if (g == this)
                return this.doSetChildIndex(e, d),
                e;
            g && (d = g._children.indexOf(e),
            0 <= d && g._doRemoveChild(d));
            this._children.splice(d, 0, e);
            e._parentChanged(this);
            c && e.dispatchEventWith(b.Event.ADDED, !0);
            if (this._stage)
                for (e._onAddToStage(),
                d = a.__EVENT__ADD_TO_STAGE_LIST; 0 < d.length; )
                    d.shift().dispatchEventWith(b.Event.ADDED_TO_STAGE);
            e._setDirty();
            this._setSizeDirty();
            return e
        }
        ;
        a.prototype.removeChild = function(a) {
            a = this._children.indexOf(a);
            if (0 <= a)
                return this._doRemoveChild(a);
            b.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent");
            return null 
        }
        ;
        a.prototype.removeChildAt = function(a) {
            if (0 <= a && a < this._children.length)
                return this._doRemoveChild(a);
            b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
            return null 
        }
        ;
        a.prototype._doRemoveChild = function(e, d) {
            void 0 === d && (d = !0);
            var c = this._children
              , g = c[e];
            d && g.dispatchEventWith(b.Event.REMOVED, !0);
            if (this._stage) {
                g._onRemoveFromStage();
                for (var f = a.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < f.length; ) {
                    var h = f.shift();
                    h.dispatchEventWith(b.Event.REMOVED_FROM_STAGE);
                    h._stage = null 
                }
            }
            g._parentChanged(null );
            c.splice(e, 1);
            this._setSizeDirty();
            return g
        }
        ;
        a.prototype.getChildAt = function(a) {
            if (0 <= a && a < this._children.length)
                return this._children[a];
            b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4");
            return null 
        }
        ;
        a.prototype.contains = function(a) {
            for (; a; ) {
                if (a == this)
                    return !0;
                a = a._parent
            }
            return !1
        }
        ;
        a.prototype.swapChildrenAt = function(a, d) {
            0 <= a && a < this._children.length && 0 <= d && d < this._children.length ? this._swapChildrenAt(a, d) : b.Logger.fatal("\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4")
        }
        ;
        a.prototype.swapChildren = function(a, d) {
            var c = this._children.indexOf(a)
              , g = this._children.indexOf(d);
            -1 == c || -1 == g ? b.Logger.fatal("child\u672a\u88abaddChild\u5230\u8be5parent") : this._swapChildrenAt(c, g)
        }
        ;
        a.prototype._swapChildrenAt = function(a, b) {
            if (a != b) {
                var d = this._children
                  , c = d[a];
                d[a] = d[b];
                d[b] = c
            }
        }
        ;
        a.prototype.getChildIndex = function(a) {
            return this._children.indexOf(a)
        }
        ;
        a.prototype.removeChildren = function() {
            for (var a = this._children.length - 1; 0 <= a; a--)
                this._doRemoveChild(a)
        }
        ;
        a.prototype._updateTransform = 
        function() {
            if (this._visible) {
                d.prototype._updateTransform.call(this);
                for (var a = 0, b = this._children.length; a < b; a++)
                    this._children[a]._updateTransform()
            }
        }
        ;
        a.prototype._render = function(a) {
            for (var b = 0, d = this._children.length; b < d; b++)
                this._children[b]._draw(a)
        }
        ;
        a.prototype._measureBounds = function() {
            for (var a = 0, d = 0, c = 0, g = 0, f = this._children.length, h = 0; h < f; h++) {
                var l = this._children[h];
                if (l._visible) {
                    var n = l.getBounds(b.Rectangle.identity, !1)
                      , p = n.x
                      , q = n.y
                      , r = n.width
                      , n = n.height
                      , l = l._getMatrix()
                      , l = b.DisplayObject.getTransformBounds(b.Rectangle.identity.initialize(p, 
                    q, r, n), l)
                      , p = l.x
                      , q = l.y
                      , r = l.width + l.x
                      , l = l.height + l.y;
                    if (p < a || 0 == h)
                        a = p;
                    if (r > d || 0 == h)
                        d = r;
                    if (q < c || 0 == h)
                        c = q;
                    if (l > g || 0 == h)
                        g = l
                }
            }
            return b.Rectangle.identity.initialize(a, c, d - a, g - c)
        }
        ;
        a.prototype.hitTest = function(a, c, m) {
            void 0 === m && (m = !1);
            var g;
            if (!this._visible)
                return null ;
            if (this._scrollRect) {
                if (a < this._scrollRect.x || c < this._scrollRect.y || a > this._scrollRect.x + this._scrollRect.width || c > this._scrollRect.y + this._scrollRect.height)
                    return null 
            } else if (this.mask && (this.mask.x > a || a > this.mask.x + this.mask.width || this.mask.y > 
            c || c > this.mask.y + this.mask.height))
                return null ;
            for (var f = this._children, h = this._touchChildren, l = f.length - 1; 0 <= l; l--) {
                var n = f[l]
                  , p = n._getMatrix()
                  , q = n._scrollRect;
                q && p.append(1, 0, 0, 1, -q.x, -q.y);
                p.invert();
                p = b.Matrix.transformCoords(p, a, c);
                if (n = n.hitTest(p.x, p.y, !0)) {
                    if (!h)
                        return this;
                    if (n._touchEnabled && h)
                        return n;
                    g = this
                }
            }
            return g ? g : this._texture_to_render || this.graphics ? d.prototype.hitTest.call(this, a, c, m) : null 
        }
        ;
        a.prototype._onAddToStage = function() {
            d.prototype._onAddToStage.call(this);
            for (var a = this._children.length, 
            b = 0; b < a; b++)
                this._children[b]._onAddToStage()
        }
        ;
        a.prototype._onRemoveFromStage = function() {
            d.prototype._onRemoveFromStage.call(this);
            for (var a = this._children.length, b = 0; b < a; b++)
                this._children[b]._onRemoveFromStage()
        }
        ;
        a.prototype.getChildByName = function(a) {
            for (var b = this._children, d = b.length, c, f = 0; f < d; f++)
                if (c = b[f],
                c.name == a)
                    return c;
            return null 
        }
        ;
        a.__EVENT__ADD_TO_STAGE_LIST = [];
        a.__EVENT__REMOVE_FROM_STAGE_LIST = [];
        return a
    }
    (b.DisplayObject);
    b.DisplayObjectContainer = c;
    c.prototype.__class__ = "egret.DisplayObjectContainer";
}
)(egret || 
(egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(a, b) {
            void 0 === a && (a = 480);
            void 0 === b && (b = 800);
            d.call(this);
            this.touchEnabled = this._changeSizeDispatchFlag = !0;
            this._stage = this;
            this._stageWidth = a;
            this._stageHeight = b
        }
        __extends(a, d);
        a.prototype.invalidate = function() {
            a._invalidateRenderFlag = !0
        }
        ;
        Object.defineProperty(a.prototype, "scaleMode", {
            get: function() {
                return this._scaleMode
            },
            set: function(a) {
                this._scaleMode != a && (this._scaleMode = a,
                this.setResolutionPolicy())
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.changeSize = 
        function() {
            this._changeSizeDispatchFlag && (this.setResolutionPolicy(),
            this.dispatchEventWith(b.Event.RESIZE))
        }
        ;
        a.prototype.setResolutionPolicy = function() {
            var a = {};
            a[b.StageScaleMode.NO_SCALE] = new b.NoScale;
            a[b.StageScaleMode.SHOW_ALL] = new b.ShowAll;
            a[b.StageScaleMode.NO_BORDER] = new b.FixedWidth;
            a[b.StageScaleMode.EXACT_FIT] = new b.FullScreen;
            a = a[this._scaleMode];
            if (!a)
                throw Error("\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode");
            var d = new b.EqualToFrame
              , a = new b.ResolutionPolicy(d,a);
            b.StageDelegate.getInstance()._setResolutionPolicy(a);
            this._stageWidth = b.StageDelegate.getInstance()._stageWidth;
            this._stageHeight = b.StageDelegate.getInstance()._stageHeight
        }
        ;
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
        a.prototype.hitTest = function(a, d, c) {
            if (!this._touchEnabled)
                return null ;
            var g;
            if (!this._touchChildren)
                return this;
            c = this._children;
            for (var f = 
            c.length - 1; 0 <= f; f--) {
                g = c[f];
                var h = g._getMatrix()
                  , l = g._scrollRect;
                l && h.append(1, 0, 0, 1, -l.x, -l.y);
                h.invert();
                h = b.Matrix.transformCoords(h, a, d);
                if ((g = g.hitTest(h.x, h.y, !0)) && g._touchEnabled)
                    return g
            }
            return this
        }
        ;
        a.prototype.getBounds = function(a) {
            a || (a = new b.Rectangle);
            return a.initialize(0, 0, this._stageWidth, this._stageHeight)
        }
        ;
        a.prototype._updateTransform = function() {
            for (var a = 0, b = this._children.length; a < b; a++)
                this._children[a]._updateTransform()
        }
        ;
        Object.defineProperty(a.prototype, "focus", {
            get: function() {
                return null 
            },
            enumerable: !0,
            configurable: !0
        });
        a._invalidateRenderFlag = !1;
        return a
    }
    (b.DisplayObjectContainer);
    b.Stage = c;
    c.prototype.__class__ = "egret.Stage"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.NO_BORDER = "noBorder";
        b.NO_SCALE = "noScale";
        b.SHOW_ALL = "showAll";
        b.EXACT_FIT = "exactFit";
        return b
    }
    ();
    b.StageScaleMode = c;
    c.prototype.__class__ = "egret.StageScaleMode"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(a) {
            void 0 === a && (a = null );
            d.call(this);
            this._lastTouchPosition = new b.Point(0,0);
            this._lastTouchTime = 0;
            this._lastTouchEvent = null ;
            this._velocitys = [];
            this._content = null ;
            this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto";
            this._scrollTop = this._scrollLeft = 0;
            this._vCanScroll = this._hCanScroll = !1;
            this.touchEnabled = !0;
            a && this.setContent(a)
        }
        __extends(a, d);
        a.prototype.setContent = function(a) {
            this._content !== a && (this.removeContent(),
            a && (this._content = a,
            d.prototype.addChild.call(this, 
            a),
            this._addEvents()))
        }
        ;
        a.prototype.removeContent = function() {
            this._content && (this._removeEvents(),
            d.prototype.removeChildAt.call(this, 0));
            this._content = null 
        }
        ;
        Object.defineProperty(a.prototype, "verticalScrollPolicy", {
            get: function() {
                return this._verticalScrollPolicy
            },
            set: function(a) {
                a != this._verticalScrollPolicy && (this._verticalScrollPolicy = a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "horizontalScrollPolicy", {
            get: function() {
                return this._horizontalScrollPolicy
            },
            set: function(a) {
                a != 
                this._horizontalScrollPolicy && (this._horizontalScrollPolicy = a)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "scrollLeft", {
            get: function() {
                return this._scrollLeft
            },
            set: function(a) {
                a != this._scrollLeft && (this._scrollLeft = a,
                this._validatePosition(!1, !0),
                this._updateContentPosition())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "scrollTop", {
            get: function() {
                return this._scrollTop
            },
            set: function(a) {
                a != this._scrollTop && (this._scrollTop = a,
                this._validatePosition(!0, 
                !1),
                this._updateContentPosition())
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.setScrollPosition = function(a, b, d) {
            void 0 === d && (d = !1);
            if (!d || 0 != a || 0 != b)
                if (d || this._scrollTop != a || this._scrollLeft != b) {
                    if (d) {
                        d = this._isOnTheEdge(!0);
                        var c = this._isOnTheEdge(!1);
                        this._scrollTop += d ? a / 2 : a;
                        this._scrollLeft += c ? b / 2 : b
                    } else
                        this._scrollTop = a,
                        this._scrollLeft = b;
                    this._validatePosition(!0, !0);
                    this._updateContentPosition()
                }
        }
        ;
        a.prototype._isOnTheEdge = function(a) {
            void 0 === a && (a = !0);
            var b = this._scrollTop
              , d = this._scrollLeft;
            return a ? 0 > b || b > this.getMaxScrollTop() : 0 > d || d > this.getMaxScrollLeft()
        }
        ;
        a.prototype._validatePosition = function(a, b) {
            void 0 === a && (a = !1);
            void 0 === b && (b = !1);
            if (a) {
                var d = this.height
                  , c = this._getContentHeight();
                this._scrollTop = Math.max(this._scrollTop, (0 - d) / 2);
                this._scrollTop = Math.min(this._scrollTop, c > d ? c - d / 2 : d / 2)
            }
            b && (d = this.width,
            c = this._getContentWidth(),
            this._scrollLeft = Math.max(this._scrollLeft, (0 - d) / 2),
            this._scrollLeft = Math.min(this._scrollLeft, c > d ? c - d / 2 : d / 2))
        }
        ;
        a.prototype._setWidth = function(a) {
            this._explicitWidth != 
            a && (d.prototype._setWidth.call(this, a),
            this._updateContentPosition())
        }
        ;
        a.prototype._setHeight = function(a) {
            this._explicitHeight != a && (d.prototype._setHeight.call(this, a),
            this._updateContentPosition())
        }
        ;
        a.prototype._updateContentPosition = function() {
            var a = this.getBounds(b.Rectangle.identity);
            this.scrollRect = new b.Rectangle(this._scrollLeft,this._scrollTop,a.width,a.height);
            this.dispatchEvent(new b.Event(b.Event.CHANGE))
        }
        ;
        a.prototype._checkScrollPolicy = function() {
            var a = this.__checkScrollPolicy(this._horizontalScrollPolicy, 
            this._getContentWidth(), this.width);
            this._hCanScroll = a;
            var b = this.__checkScrollPolicy(this._verticalScrollPolicy, this._getContentHeight(), this.height);
            this._vCanScroll = b;
            return a || b
        }
        ;
        a.prototype.__checkScrollPolicy = function(a, b, d) {
            return "on" == a ? !0 : "off" == a ? !1 : b > d
        }
        ;
        a.prototype._addEvents = function() {
            this.addEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
            this.addEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
            this.addEventListener(b.TouchEvent.TOUCH_END, this._onTouchEndCapture, 
            this, !0)
        }
        ;
        a.prototype._removeEvents = function() {
            this.removeEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
            this.removeEventListener(b.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
            this.removeEventListener(b.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
        }
        ;
        a.prototype._onTouchBegin = function(a) {
            !a._isDefaultPrevented && this._checkScrollPolicy() && (b.Tween.removeTweens(this),
            this.stage.addEventListener(b.TouchEvent.TOUCH_MOVE, this._onTouchMove, this),
            this.stage.addEventListener(b.TouchEvent.TOUCH_END, 
            this._onTouchEnd, this),
            this.stage.addEventListener(b.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this),
            this.addEventListener(b.Event.ENTER_FRAME, this._onEnterFrame, this),
            this._logTouchEvent(a),
            a.preventDefault())
        }
        ;
        a.prototype._onTouchBeginCapture = function(e) {
            var d = this._checkScrollPolicy();
            if (d) {
                for (var c = e.target; c != this; ) {
                    if (c instanceof a && (d = c._checkScrollPolicy()))
                        return;
                    c = c.parent
                }
                e.stopPropagation();
                this.delayTouchBeginEvent = this.cloneTouchEvent(e);
                this.touchBeginTimer || (this.touchBeginTimer = new b.Timer(100,
                1),
                this.touchBeginTimer.addEventListener(b.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this));
                this.touchBeginTimer.start();
                this._onTouchBegin(e)
            }
        }
        ;
        a.prototype._onTouchEndCapture = function(a) {
            this.delayTouchBeginEvent && this._onTouchBeginTimer()
        }
        ;
        a.prototype._onTouchBeginTimer = function() {
            this.touchBeginTimer.stop();
            var a = this.delayTouchBeginEvent;
            this.delayTouchBeginEvent = null ;
            this.dispatchPropagationEvent(a)
        }
        ;
        a.prototype.dispatchPropagationEvent = function(a) {
            for (var b = [], d = a._target; d; )
                b.push(d),
                d = d.parent;
            for (var c = this._content, f = 1; ; f += 2) {
                d = b[f];
                if (!d || d === c)
                    break;
                b.unshift(d)
            }
            this._dispatchPropagationEvent(a, b)
        }
        ;
        a.prototype._dispatchPropagationEvent = function(a, b, d) {
            for (var c = b.length, f = 0; f < c; f++) {
                var h = b[f];
                a._currentTarget = h;
                a._target = this;
                a._eventPhase = f < d ? 1 : f == d ? 2 : 3;
                h._notifyListener(a);
                if (a._isPropagationStopped || a._isPropagationImmediateStopped)
                    break
            }
        }
        ;
        a.prototype._onTouchMove = function(a) {
            if (this._lastTouchPosition.x != a.stageX || this._lastTouchPosition.y != a.stageY) {
                this.delayTouchBeginEvent && 
                (this.delayTouchBeginEvent = null ,
                this.touchBeginTimer.stop());
                this.touchChildren = !1;
                var b = this._getPointChange(a);
                this.setScrollPosition(b.y, b.x, !0);
                this._calcVelocitys(a);
                this._logTouchEvent(a)
            }
        }
        ;
        a.prototype._onTouchEnd = function(a) {
            this.touchChildren = !0;
            b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
            b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_END, this._onTouchEnd, this);
            b.MainContext.instance.stage.removeEventListener(b.TouchEvent.LEAVE_STAGE, 
            this._onTouchEnd, this);
            this.removeEventListener(b.Event.ENTER_FRAME, this._onEnterFrame, this);
            this._moveAfterTouchEnd()
        }
        ;
        a.prototype._onEnterFrame = function(a) {
            a = b.getTimer();
            100 < a - this._lastTouchTime && 300 > a - this._lastTouchTime && this._calcVelocitys(this._lastTouchEvent)
        }
        ;
        a.prototype._logTouchEvent = function(a) {
            this._lastTouchPosition.x = a.stageX;
            this._lastTouchPosition.y = a.stageY;
            this._lastTouchEvent = this.cloneTouchEvent(a);
            this._lastTouchTime = b.getTimer()
        }
        ;
        a.prototype._getPointChange = function(a) {
            return {
                x: !1 === 
                this._hCanScroll ? 0 : this._lastTouchPosition.x - a.stageX,
                y: !1 === this._vCanScroll ? 0 : this._lastTouchPosition.y - a.stageY
            }
        }
        ;
        a.prototype._calcVelocitys = function(a) {
            var d = b.getTimer();
            if (0 == this._lastTouchTime)
                this._lastTouchTime = d;
            else {
                var c = this._getPointChange(a)
                  , d = d - this._lastTouchTime;
                c.x /= d;
                c.y /= d;
                this._velocitys.push(c);
                5 < this._velocitys.length && this._velocitys.shift();
                this._lastTouchPosition.x = a.stageX;
                this._lastTouchPosition.y = a.stageY
            }
        }
        ;
        a.prototype._getContentWidth = function() {
            return this._content.explicitWidth || 
            this._content.width
        }
        ;
        a.prototype._getContentHeight = function() {
            return this._content.explicitHeight || this._content.height
        }
        ;
        a.prototype.getMaxScrollLeft = function() {
            var a = this._getContentWidth() - this.width;
            return Math.max(0, a)
        }
        ;
        a.prototype.getMaxScrollTop = function() {
            var a = this._getContentHeight() - this.height;
            return Math.max(0, a)
        }
        ;
        a.prototype._moveAfterTouchEnd = function() {
            if (0 != this._velocitys.length) {
                for (var e = 0, b = 0, d = 0, c = 0; c < this._velocitys.length; c++)
                    var f = this._velocitys[c]
                      , h = a.weight[c]
                      , e = e + f.x * h
                      , 
                    b = b + f.y * h
                      , d = d + h;
                this._velocitys.length = 0;
                e /= d;
                b /= d;
                f = Math.abs(e);
                d = Math.abs(b);
                h = this.getMaxScrollLeft();
                c = this.getMaxScrollTop();
                e = 0.02 < f ? this.getAnimationDatas(e, this._scrollLeft, h) : {
                    position: this._scrollLeft,
                    duration: 1
                };
                b = 0.02 < d ? this.getAnimationDatas(b, this._scrollTop, c) : {
                    position: this._scrollTop,
                    duration: 1
                };
                this.setScrollLeft(e.position, e.duration);
                this.setScrollTop(b.position, b.duration)
            }
        }
        ;
        a.prototype.setScrollTop = function(a, d) {
            void 0 === d && (d = 0);
            var c = Math.min(this.getMaxScrollTop(), Math.max(a, 
            0));
            if (0 == d)
                return this.scrollTop = c,
                null ;
            var g = b.Tween.get(this).to({
                scrollTop: a
            }, d, b.Ease.quartOut);
            c != a && g.to({
                scrollTop: c
            }, 300, b.Ease.quintOut)
        }
        ;
        a.prototype.setScrollLeft = function(a, d) {
            void 0 === d && (d = 0);
            var c = Math.min(this.getMaxScrollLeft(), Math.max(a, 0));
            if (0 == d)
                return this.scrollLeft = c,
                null ;
            var g = b.Tween.get(this).to({
                scrollLeft: a
            }, d, b.Ease.quartOut);
            c != a && g.to({
                scrollLeft: c
            }, 300, b.Ease.quintOut)
        }
        ;
        a.prototype.getAnimationDatas = function(a, b, d) {
            var c = Math.abs(a)
              , f = 0
              , h = b + 500 * a;
            if (0 > h || h > d)
                for (h = 
                b; Infinity != Math.abs(a) && 0.02 < Math.abs(a); )
                    h += a,
                    a = 0 > h || h > d ? 0.998 * a * 0.95 : 0.998 * a,
                    f++;
            else
                f = 500 * -Math.log(0.02 / c);
            return {
                position: Math.min(d + 50, Math.max(h, -50)),
                duration: f
            }
        }
        ;
        a.prototype.cloneTouchEvent = function(a) {
            var d = new b.TouchEvent(a._type,a._bubbles,a.cancelable);
            d.touchPointID = a.touchPointID;
            d._stageX = a._stageX;
            d._stageY = a._stageY;
            d.ctrlKey = a.ctrlKey;
            d.altKey = a.altKey;
            d.shiftKey = a.shiftKey;
            d.touchDown = a.touchDown;
            d._isDefaultPrevented = !1;
            d._target = a._target;
            return d
        }
        ;
        a.prototype.throwNotSupportedError = 
        function() {
            throw Error("\u6b64\u65b9\u6cd5\u5728ScrollView\u5185\u4e0d\u53ef\u7528!");
        }
        ;
        a.prototype.addChild = function(a) {
            this.throwNotSupportedError();
            return null 
        }
        ;
        a.prototype.addChildAt = function(a, b) {
            this.throwNotSupportedError();
            return null 
        }
        ;
        a.prototype.removeChild = function(a) {
            this.throwNotSupportedError();
            return null 
        }
        ;
        a.prototype.removeChildAt = function(a) {
            this.throwNotSupportedError();
            return null 
        }
        ;
        a.prototype.setChildIndex = function(a, b) {
            this.throwNotSupportedError()
        }
        ;
        a.prototype.swapChildren = function(a, 
        b) {
            this.throwNotSupportedError()
        }
        ;
        a.prototype.swapChildrenAt = function(a, b) {
            this.throwNotSupportedError()
        }
        ;
        a.prototype.hitTest = function(a, c, m) {
            void 0 === m && (m = !1);
            var g = d.prototype.hitTest.call(this, a, c, m);
            return g ? g : b.DisplayObject.prototype.hitTest.call(this, a, c, m)
        }
        ;
        a.weight = [1, 1.33, 1.66, 2, 2.33];
        return a
    }
    (b.DisplayObjectContainer);
    b.ScrollView = c;
    c.prototype.__class__ = "egret.ScrollView"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.REPEAT = "repeat";
        b.SCALE = "scale";
        return b
    }
    ();
    b.BitmapFillMode = c;
    c.prototype.__class__ = "egret.BitmapFillMode"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(a) {
            d.call(this);
            this.debug = !1;
            this.debugColor = 16711680;
            this.scale9Grid = null ;
            this.fillMode = "scale";
            a && (this._texture = a,
            this._setSizeDirty())
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "texture", {
            get: function() {
                return this._texture
            },
            set: function(a) {
                a != this._texture && (this._setSizeDirty(),
                this._texture = a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._render = function(e) {
            var b = this._texture;
            b ? (this._texture_to_render = b,
            a._drawBitmap(e, this._hasWidthSet ? this._explicitWidth : 
            b._textureWidth, this._hasHeightSet ? this._explicitHeight : b._textureHeight, this)) : this._texture_to_render = null 
        }
        ;
        a._drawBitmap = function(e, b, d, c) {
            var f = c._texture_to_render;
            if (f) {
                var h = f._textureWidth
                  , l = f._textureHeight;
                if ("scale" == c.fillMode) {
                    var n = c.scale9Grid || f.scale9Grid;
                    if (n && h - n.width < b && l - n.height < d)
                        a.drawScale9GridImage(e, c, n, b, d);
                    else {
                        var n = f._offsetX
                          , p = f._offsetY
                          , q = f._bitmapWidth || h
                          , r = f._bitmapHeight || l;
                        b /= h;
                        n = Math.round(n * b);
                        b = Math.round(q * b);
                        d /= l;
                        p = Math.round(p * d);
                        d = Math.round(r * d);
                        a.renderFilter.drawImage(e, 
                        c, f._bitmapX, f._bitmapY, q, r, n, p, b, d)
                    }
                } else
                    a.drawRepeatImage(e, c, b, d, c.fillMode)
            }
        }
        ;
        a.drawRepeatImage = function(a, d, c, g, f) {
            var h = d._texture_to_render;
            if (h) {
                var l = h._textureWidth
                  , n = h._textureHeight
                  , p = h._bitmapX
                  , q = h._bitmapY
                  , l = h._bitmapWidth || l
                  , n = h._bitmapHeight || n
                  , r = h._offsetX
                  , h = h._offsetY;
                b.RenderFilter.getInstance().drawImage(a, d, p, q, l, n, r, h, c, g, f)
            }
        }
        ;
        a.drawScale9GridImage = function(a, d, c, g, f) {
            var h = b.MainContext.instance.rendererContext.texture_scale_factor
              , l = d._texture_to_render;
            if (l && c) {
                var n = b.RenderFilter.getInstance()
                  , 
                p = l._textureWidth
                  , q = l._textureHeight
                  , r = l._bitmapX
                  , t = l._bitmapY
                  , s = l._bitmapWidth || p
                  , u = l._bitmapHeight || q
                  , v = l._offsetX / h
                  , l = l._offsetY / h;
                c = b.Rectangle.identity.initialize(c.x - Math.round(v), c.y - Math.round(v), c.width, c.height);
                v = Math.round(v);
                l = Math.round(l);
                g -= p - s;
                f -= q - u;
                c.y == c.bottom && (c.bottom < u ? c.bottom++ : c.y--);
                c.x == c.right && (c.right < s ? c.right++ : c.x--);
                var p = r + c.x / h
                  , q = r + c.right / h
                  , w = s - c.right
                  , y = t + c.y / h
                  , h = t + c.bottom / h
                  , x = u - c.bottom
                  , z = v + c.x
                  , A = l + c.y
                  , u = f - (u - c.bottom)
                  , s = g - (s - c.right);
                n.drawImage(a, d, r, t, 
                c.x, c.y, v, l, c.x, c.y);
                n.drawImage(a, d, p, t, c.width, c.y, z, l, s - c.x, c.y);
                n.drawImage(a, d, q, t, w, c.y, v + s, l, g - s, c.y);
                n.drawImage(a, d, r, y, c.x, c.height, v, A, c.x, u - c.y);
                n.drawImage(a, d, p, y, c.width, c.height, z, A, s - c.x, u - c.y);
                n.drawImage(a, d, q, y, w, c.height, v + s, A, g - s, u - c.y);
                n.drawImage(a, d, r, h, c.x, x, v, l + u, c.x, f - u);
                n.drawImage(a, d, p, h, c.width, x, z, l + u, s - c.x, f - u);
                n.drawImage(a, d, q, h, w, x, v + s, l + u, g - s, f - u)
            }
        }
        ;
        a.prototype._measureBounds = function() {
            var a = this._texture;
            return a ? b.Rectangle.identity.initialize(a._offsetX, a._offsetY, 
            a._textureWidth, a._textureHeight) : d.prototype._measureBounds.call(this)
        }
        ;
        a.debug = !1;
        a.renderFilter = b.RenderFilter.getInstance();
        return a
    }
    (b.DisplayObject);
    b.Bitmap = c;
    c.prototype.__class__ = "egret.Bitmap"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._text = "";
            this._textChanged = !1;
            this._font = null ;
            this._fontChanged = !1;
            this._textHeight = this._textWidth = 0;
            this.textLinesChange = !0;
            this._lineHeights = [];
            this.cacheAsBitmap = !0
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "text", {
            get: function() {
                return this._text
            },
            set: function(a) {
                this._textChanged = !0;
                this._text = a;
                this._setSizeDirty()
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "font", {
            get: function() {
                return this._font
            },
            set: function(a) {
                this._font != a && (this._font = a,
                this._fontChanged = !0,
                this._setSizeDirty())
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(a.prototype, "spriteSheet", {
            get: function() {
                return this._font
            },
            set: function(a) {
                this.font = a
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setSizeDirty = function() {
            d.prototype._setSizeDirty.call(this);
            this.textLinesChange = !0
        }
        ;
        a.prototype._render = function(a) {
            var d = this.getTextLines()
              , c = d.length;
            if (0 != c) {
                for (var g = this._font, f = g._getFirstCharHeight(), f = Math.ceil(0.7 * 
                f), h = 0, l = this._hasHeightSet ? this._explicitHeight : Number.POSITIVE_INFINITY, n = this._lineHeights, p = 0; p < c; p++) {
                    var q = n[p];
                    if (0 < p && h + q > l)
                        break;
                    for (var r = d[p], t = r.length, s = 0, u = 0; u < t; u++) {
                        var v = r.charAt(u)
                          , w = g.getTexture(v);
                        if (w) {
                            var v = w._bitmapWidth || w._textureWidth
                              , y = w._bitmapHeight || w._textureHeight;
                            this._texture_to_render = w;
                            b.RenderFilter.getInstance().drawImage(a, this, w._bitmapX, w._bitmapY, v, y, s + w._offsetX, h + w._offsetY, v, y);
                            s += w._textureWidth
                        } else
                            " " == v ? s += f : b.Logger.warning('BitmapText\u627e\u4e0d\u5230\u6587\u5b57\u6240\u5bf9\u5e94\u7684\u7eb9\u7406\uff1a"' + 
                            v + '"')
                    }
                    h += q
                }
                this._texture_to_render = null 
            }
        }
        ;
        a.prototype._measureBounds = function() {
            return 0 == this.getTextLines().length ? b.Rectangle.identity.initialize(0, 0, 0, 0) : b.Rectangle.identity.initialize(0, 0, this._textWidth, this._textHeight)
        }
        ;
        a.prototype.getTextLines = function() {
            if (!this.textLinesChange)
                return this._textLines;
            var a = [];
            this._textLines = a;
            this.textLinesChange = !1;
            var d = [];
            this._lineHeights = d;
            if (!this._text || !this._font)
                return a;
            for (var c = 0, g = 0, f = this._hasWidthSet, h = this._hasWidthSet ? this._explicitWidth : 
            Number.POSITIVE_INFINITY, l = this._font, n = l._getFirstCharHeight(), p = Math.ceil(0.7 * n), q = this._text.split(/(?:\r\n|\r|\n)/), r = q.length, t = 0; t < r; t++) {
                for (var s = q[t], u = s.length, v = 0, w = 0, y = 0; y < u; y++) {
                    var x = s.charAt(y), z;
                    if (z = l.getTexture(x))
                        x = z._textureWidth,
                        z = z._textureHeight;
                    else if (" " == x)
                        x = p,
                        z = n;
                    else {
                        b.Logger.warning('BitmapText\u627e\u4e0d\u5230\u6587\u5b57\u6240\u5bf9\u5e94\u7684\u7eb9\u7406\uff1a"' + x + '"');
                        continue
                    }
                    f && 0 < y && w + x > h ? (a.push(s.substring(0, y)),
                    d.push(v),
                    g += v,
                    c = Math.max(w, c),
                    s = s.substring(y),
                    u = s.length,
                    y = 0,
                    w = x,
                    v = z) : (w += x,
                    v = Math.max(z, v))
                }
                a.push(s);
                d.push(v);
                g += v;
                c = Math.max(w, c)
            }
            this._textWidth = c;
            this._textHeight = g;
            return a
        }
        ;
        return a
    }
    (b.DisplayObject);
    b.BitmapText = c;
    c.prototype.__class__ = "egret.BitmapText"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {
            this._lastY = this._lastX = this._maxY = this._maxX = this._minY = this._minX = 0;
            this.commandQueue = []
        }
        b.prototype.beginFill = function(a, b) {}
        ;
        b.prototype._setStyle = function(a) {}
        ;
        b.prototype.drawRect = function(a, b, d, c) {
            this.checkRect(a, b, d, c)
        }
        ;
        b.prototype.drawCircle = function(a, b, d) {
            this.checkRect(a - d, b - d, 2 * d, 2 * d)
        }
        ;
        b.prototype.drawRoundRect = function(a, b, d, c, g, f) {
            this.checkRect(a, b, d, c)
        }
        ;
        b.prototype.drawEllipse = function(a, b, d, c) {
            this.checkRect(a - d, b - c, 2 * d, 2 * c)
        }
        ;
        b.prototype.lineStyle = 
        function(a, b, d, c, g, f, h, l) {}
        ;
        b.prototype.lineTo = function(a, b) {
            this.checkPoint(a, b)
        }
        ;
        b.prototype.curveTo = function(a, b, d, c) {
            this.checkPoint(a, b);
            this.checkPoint(d, c)
        }
        ;
        b.prototype.moveTo = function(a, b) {
            this.checkPoint(a, b)
        }
        ;
        b.prototype.clear = function() {
            this._maxY = this._maxX = this._minY = this._minX = 0
        }
        ;
        b.prototype.endFill = function() {}
        ;
        b.prototype._draw = function(a) {}
        ;
        b.prototype.checkRect = function(a, b, d, c) {
            this._minX = Math.min(this._minX, a);
            this._minY = Math.min(this._minY, b);
            this._maxX = Math.max(this._maxX, a + 
            d);
            this._maxY = Math.max(this._maxY, b + c)
        }
        ;
        b.prototype.checkPoint = function(a, b) {
            this._minX = Math.min(this._minX, a);
            this._minY = Math.min(this._minY, b);
            this._maxX = Math.max(this._maxX, a);
            this._maxY = Math.max(this._maxY, b);
            this._lastX = a;
            this._lastY = b
        }
        ;
        return b
    }
    ();
    b.Graphics = c;
    c.prototype.__class__ = "egret.Graphics";
    (function() {
        return function(b, a, e) {
            this.method = b;
            this.thisObject = a;
            this.args = e
        }
    }
    )().prototype.__class__ = "egret.Command"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "graphics", {
            get: function() {
                this._graphics || (this._graphics = new b.Graphics);
                return this._graphics
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._render = function(a) {
            this._graphics && this._graphics._draw(a)
        }
        ;
        return a
    }
    (b.DisplayObject);
    b.Shape = c;
    c.prototype.__class__ = "egret.Shape"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
        Object.defineProperty(a.prototype, "graphics", {
            get: function() {
                this._graphics || (this._graphics = new b.Graphics);
                return this._graphics
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._render = function(a) {
            this._graphics && this._graphics._draw(a);
            d.prototype._render.call(this, a)
        }
        ;
        return a
    }
    (b.DisplayObjectContainer);
    b.Sprite = c;
    c.prototype.__class__ = "egret.Sprite"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._inputEnabled = !1;
            this._text = this._type = "";
            this._displayAsPassword = !1;
            this._fontFamily = a.default_fontFamily;
            this._size = 30;
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
            this._isArrayChanged = 
            !1;
            this._textMaxHeight = this._textMaxWidth = 0;
            this._linesArr = []
        }
        __extends(a, d);
        a.prototype.isInput = function() {
            return this._type == b.TextFieldType.INPUT
        }
        ;
        a.prototype._setTouchEnabled = function(a) {
            d.prototype._setTouchEnabled.call(this, a);
            this.isInput() && (this._inputEnabled = !0)
        }
        ;
        Object.defineProperty(a.prototype, "type", {
            get: function() {
                return this._type
            },
            set: function(a) {
                this._setType(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setType = function(a) {
            this._type != a && (this._type = a,
            this._type == b.TextFieldType.INPUT ? 
            (this._hasWidthSet || this._setWidth(100),
            this._hasHeightSet || this._setHeight(30),
            null  == this._inputUtils && (this._inputUtils = new b.InputController),
            this._inputUtils.init(this),
            this._setDirty(),
            this._stage && this._inputUtils._addStageText()) : this._inputUtils && (this._inputUtils._removeStageText(),
            this._inputUtils = null ))
        }
        ;
        Object.defineProperty(a.prototype, "text", {
            get: function() {
                return this._getText()
            },
            set: function(a) {
                this._setText(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._getText = function() {
            return this._type == 
            b.TextFieldType.INPUT ? this._inputUtils._getText() : this._text
        }
        ;
        a.prototype._setSizeDirty = function() {
            d.prototype._setSizeDirty.call(this);
            this._isArrayChanged = !0
        }
        ;
        a.prototype._setTextDirty = function() {
            this._setSizeDirty()
        }
        ;
        a.prototype._setBaseText = function(a) {
            null  == a && (a = "");
            this._isFlow = !1;
            this._text != a && (this._setTextDirty(),
            this._text = a,
            a = "",
            a = this._displayAsPassword ? this.changeToPassText(this._text) : this._text,
            this.setMiddleStyle([{
                text: a
            }]))
        }
        ;
        a.prototype._setText = function(a) {
            null  == a && (a = "");
            this._setBaseText(a);
            this._inputUtils && this._inputUtils._setText(this._text)
        }
        ;
        Object.defineProperty(a.prototype, "displayAsPassword", {
            get: function() {
                return this._displayAsPassword
            },
            set: function(a) {
                this._setDisplayAsPassword(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setDisplayAsPassword = function(a) {
            this._displayAsPassword != a && (this._displayAsPassword = a,
            this._setTextDirty(),
            a = "",
            a = this._displayAsPassword ? this.changeToPassText(this._text) : this._text,
            this.setMiddleStyle([{
                text: a
            }]))
        }
        ;
        Object.defineProperty(a.prototype, 
        "fontFamily", {
            get: function() {
                return this._fontFamily
            },
            set: function(a) {
                this._setFontFamily(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setFontFamily = function(a) {
            this._fontFamily != a && (this._setTextDirty(),
            this._fontFamily = a)
        }
        ;
        Object.defineProperty(a.prototype, "size", {
            get: function() {
                return this._size
            },
            set: function(a) {
                this._setSize(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setSize = function(a) {
            this._size != a && (this._setTextDirty(),
            this._size = a)
        }
        ;
        Object.defineProperty(a.prototype, "italic", {
            get: function() {
                return this._italic
            },
            set: function(a) {
                this._setItalic(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setItalic = function(a) {
            this._italic != a && (this._setTextDirty(),
            this._italic = a)
        }
        ;
        Object.defineProperty(a.prototype, "bold", {
            get: function() {
                return this._bold
            },
            set: function(a) {
                this._setBold(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setBold = function(a) {
            this._bold != a && (this._setTextDirty(),
            this._bold = a)
        }
        ;
        Object.defineProperty(a.prototype, "textColor", {
            get: function() {
                return this._textColor
            },
            set: function(a) {
                this._setTextColor(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setTextColor = function(a) {
            this._textColor != a && (this._setTextDirty(),
            this._textColor = a,
            this._textColorString = b.toColorString(a))
        }
        ;
        Object.defineProperty(a.prototype, "strokeColor", {
            get: function() {
                return this._strokeColor
            },
            set: function(a) {
                this._setStrokeColor(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setStrokeColor = function(a) {
            this._strokeColor != a && (this._setTextDirty(),
            this._strokeColor = a,
            this._strokeColorString = b.toColorString(a))
        }
        ;
        Object.defineProperty(a.prototype, 
        "stroke", {
            get: function() {
                return this._stroke
            },
            set: function(a) {
                this._setStroke(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setStroke = function(a) {
            this._stroke != a && (this._setTextDirty(),
            this._stroke = a)
        }
        ;
        Object.defineProperty(a.prototype, "textAlign", {
            get: function() {
                return this._textAlign
            },
            set: function(a) {
                this._setTextAlign(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setTextAlign = function(a) {
            this._textAlign != a && (this._setTextDirty(),
            this._textAlign = a)
        }
        ;
        Object.defineProperty(a.prototype, "verticalAlign", 
        {
            get: function() {
                return this._verticalAlign
            },
            set: function(a) {
                this._setVerticalAlign(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setVerticalAlign = function(a) {
            this._verticalAlign != a && (this._setTextDirty(),
            this._verticalAlign = a)
        }
        ;
        Object.defineProperty(a.prototype, "maxChars", {
            get: function() {
                return this._maxChars
            },
            set: function(a) {
                this._setMaxChars(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setMaxChars = function(a) {
            this._maxChars != a && (this._maxChars = a)
        }
        ;
        Object.defineProperty(a.prototype, "scrollV", 
        {
            set: function(a) {
                this._scrollV = a;
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
        a.prototype._setSelection = function(a, b) {}
        ;
        Object.defineProperty(a.prototype, "lineSpacing", {
            get: function() {
                return this._lineSpacing
            },
            set: function(a) {
                this._setLineSpacing(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setLineSpacing = function(a) {
            this._lineSpacing != a && (this._setTextDirty(),
            this._lineSpacing = a)
        }
        ;
        a.prototype._getLineHeight = function() {
            return this._lineSpacing + this._size
        }
        ;
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
            set: function(a) {
                this._setMultiline(a)
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setMultiline = function(a) {
            this._multiline = a;
            this._setDirty()
        }
        ;
        a.prototype.setFocus = function() {
            b.Logger.warning("TextField.setFocus \u6ca1\u6709\u5b9e\u73b0")
        }
        ;
        a.prototype._onRemoveFromStage = function() {
            d.prototype._onRemoveFromStage.call(this);
            this._type == b.TextFieldType.INPUT && this._inputUtils._removeStageText()
        }
        ;
        a.prototype._onAddToStage = function() {
            d.prototype._onAddToStage.call(this);
            this._type == b.TextFieldType.INPUT && this._inputUtils._addStageText()
        }
        ;
        a.prototype._updateBaseTransform = function() {
            d.prototype._updateTransform.call(this)
        }
        ;
        a.prototype._updateTransform = function() {
            this._type == b.TextFieldType.INPUT ? this._normalDirty ? (this._clearDirty(),
            this._inputUtils._updateProperties()) : this._inputUtils._updateTransform() : this._updateBaseTransform()
        }
        ;
        a.prototype._render = function(a) {
            this.drawText(a);
            this._clearDirty()
        }
        ;
        a.prototype._measureBounds = function() {
            return this._getLinesArr() ? b.Rectangle.identity.initialize(0, 0, this._textMaxWidth, this._textMaxHeight) : b.Rectangle.identity.initialize(0, 0, 0, 0)
        }
        ;
        Object.defineProperty(a.prototype, "textFlow", {
            get: function() {
                return this._textArr
            },
            set: function(a) {
                this._isFlow = !0;
                var b = "";
                null  == a && (a = []);
                for (var d = 0; d < a.length; d++)
                    b += a[d].text;
                this._displayAsPassword ? this._setBaseText(b) : (this._text = b,
                this.setMiddleStyle(a))
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.changeToPassText = 
        function(a) {
            if (this._displayAsPassword) {
                for (var b = "", d = 0, c = a.length; d < c; d++)
                    switch (a.charAt(d)) {
                    case "\n":
                        b += "\n";
                        break;
                    case "\r":
                        break;
                    default:
                        b += "*"
                    }
                return b
            }
            return a
        }
        ;
        a.prototype.setMiddleStyle = function(a) {
            this._isArrayChanged = !0;
            this._textArr = a;
            this._setSizeDirty()
        }
        ;
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
        a.prototype.appendText = function(a) {
            this.appendElement({
                text: a
            })
        }
        ;
        a.prototype.appendElement = function(a) {
            this._textArr.push(a);
            this.setMiddleStyle(this._textArr)
        }
        ;
        a.prototype._getLinesArr = function() {
            if (!this._isArrayChanged)
                return this._linesArr;
            this._isArrayChanged = !1;
            var a = this._textArr
              , d = b.MainContext.instance.rendererContext;
            this._linesArr = [];
            this._textMaxWidth = this._textMaxHeight = 0;
            if (this._hasWidthSet && 0 == this._explicitWidth)
                return console.warn("\u6587\u672c\u5bbd\u5ea6\u88ab\u8bbe\u7f6e\u4e3a0"),
                this._numLines = 0,
                [{
                    width: 0,
                    height: 0,
                    elements: []
                }];
            var c = this._linesArr, g = 0, f = 0, h = 0, l;
            this._isFlow || d.setupFont(this);
            for (var n = 0; n < a.length; n++) {
                var p = a[n];
                p.style = p.style || {};
                for (var q = p.text.toString().split(/(?:\r\n|\r|\n)/), r = 0; r < q.length; r++) {
                    null  == c[h] && (l = {
                        width: 0,
                        height: 0,
                        elements: []
                    },
                    c[h] = l,
                    f = g = 0);
                    f = this._type == b.TextFieldType.INPUT ? this._size : Math.max(f, p.style.size || this._size);
                    if ("" != q[r]) {
                        this._isFlow && d.setupFont(this, p.style);
                        var t = d.measureText(q[r]);
                        if (this._hasWidthSet)
                            if (g + t <= this._explicitWidth)
                                l.elements.push({
                                    width: t,
                                    text: q[r],
                                    style: p.style
                                }),
                                g += t;
                            else {
                                for (var s = 0, u = 0, v = q[r]; s < v.length; s++) {
                                    t = d.measureText(v.charAt(s));
                                    if (g + t > this._explicitWidth)
                                        break;
                                    u += t;
                                    g += t
                                }
                                0 < s && (l.elements.push({
                                    width: u,
                                    text: v.substring(0, s),
                                    style: p.style
                                }),
                                q[r] = v.substring(s));
                                r--
                            }
                        else
                            g += t,
                            l.elements.push({
                                width: t,
                                text: q[r],
                                style: p.style
                            })
                    }
                    if (r < q.length - 1) {
                        l.width = g;
                        l.height = f;
                        this._textMaxWidth = Math.max(this._textMaxWidth, g);
                        this._textMaxHeight += f;
                        if (this._type == b.TextFieldType.INPUT && !this._multiline)
                            return this._numLines = c.length,
                            c;
                        h++
                    }
                }
                n == a.length - 1 && l && (l.width = g,
                l.height = f,
                this._textMaxWidth = Math.max(this._textMaxWidth, g),
                this._textMaxHeight += f)
            }
            this._numLines = c.length;
            return c
        }
        ;
        a.prototype.drawText = function(a) {
            var d = this._getLinesArr();
            if (d) {
                this._isFlow || a.setupFont(this);
                var c = this._hasWidthSet ? this._explicitWidth : this._textMaxWidth
                  , g = this._textMaxHeight + (this._numLines - 1) * this._lineSpacing
                  , f = 0
                  , h = 0;
                if (this._hasHeightSet)
                    if (g < this._explicitHeight) {
                        var l = 0;
                        this._verticalAlign == b.VerticalAlign.MIDDLE ? l = 0.5 : this._verticalAlign == 
                        b.VerticalAlign.BOTTOM && (l = 1);
                        f += l * (this._explicitHeight - g)
                    } else
                        g > this._explicitHeight && (h = Math.max(this._scrollV - 1, 0),
                        h = Math.min(this._numLines - 1, h));
                f = Math.round(f);
                g = 0;
                this._textAlign == b.HorizontalAlign.CENTER ? g = 0.5 : this._textAlign == b.HorizontalAlign.RIGHT && (g = 1);
                for (l = 0; h < this._numLines; h++) {
                    var n = d[h]
                      , p = n.height
                      , f = f + p / 2;
                    if (0 != h && this._hasHeightSet && f > this._explicitHeight)
                        break;
                    for (var l = Math.round((c - n.width) * g), q = 0; q < n.elements.length; q++) {
                        var r = n.elements[q]
                          , t = r.style.size || this._size;
                        this._type == 
                        b.TextFieldType.INPUT ? a.drawText(this, r.text, l, f + (p - t) / 2, r.width) : (this._isFlow && a.setupFont(this, r.style),
                        a.drawText(this, r.text, l, f + (p - t) / 2, r.width, r.style));
                        l += r.width
                    }
                    f += p / 2 + this._lineSpacing
                }
            }
        }
        ;
        a.default_fontFamily = "Arial";
        return a
    }
    (b.DisplayObject);
    b.TextField = c;
    c.prototype.__class__ = "egret.TextField"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {
            this.resutlArr = []
        }
        b.prototype.parser = function(a) {
            this.stackArray = [];
            this.resutlArr = [];
            for (var b = 0, d = a.length; b < d; ) {
                var c = a.indexOf("<", b);
                0 > c ? (this.addToResultArr(a.substring(b)),
                b = d) : (this.addToResultArr(a.substring(b, c)),
                b = a.indexOf(">", c),
                "/" == a.charAt(c + 1) ? this.stackArray.pop() : this.addToArray(a.substring(c + 1, b)),
                b += 1)
            }
            return this.resutlArr
        }
        ;
        b.prototype.addToResultArr = function(a) {
            if ("" != a) {
                var b = [];
                b.push(["&lt;", "<"]);
                b.push(["&gt;", ">"]);
                b.push(["&amp;", 
                "&"]);
                b.push(["&quot;", '"']);
                b.push(["&apos;;", "'"]);
                for (var d = 0; d < b.length; d++)
                    a.replace(new RegExp(b[d][0],"g"), b[d][1]);
                0 < this.stackArray.length ? this.resutlArr.push({
                    text: a,
                    style: this.stackArray[this.stackArray.length - 1]
                }) : this.resutlArr.push({
                    text: a
                })
            }
        }
        ;
        b.prototype.changeStringToObject = function(a) {
            var b = {};
            a = a.replace(/( )+/g, " ").split(" ");
            for (var d = 0; d < a.length; d++)
                this.addProperty(b, a[d]);
            return b
        }
        ;
        b.prototype.addProperty = function(a, b) {
            var d = b.replace(/( )*=( )*/g, "=").split("=");
            d[1] && (d[1] = 
            d[1].replace(/(\"|\')/g, ""));
            switch (d[0].toLowerCase()) {
            case "color":
                a.textColor = parseInt(d[1]);
                break;
            case "b":
                a.bold = "true" == (d[1] || "true");
                break;
            case "i":
                a.italic = "true" == (d[1] || "true");
                break;
            case "size":
                a.size = parseInt(d[1]);
                break;
            case "fontFamily":
                a.fontFamily = d[1]
            }
        }
        ;
        b.prototype.addToArray = function(a) {
            a = this.changeStringToObject(a);
            if (0 != this.stackArray.length) {
                var b = this.stackArray[this.stackArray.length - 1], d;
                for (d in b)
                    null  == a[d] && (a[d] = b[d])
            }
            this.stackArray.push(a)
        }
        ;
        return b
    }
    ();
    b.HtmlTextParser = 
    c;
    c.prototype.__class__ = "egret.HtmlTextParser"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.DYNAMIC = "dynamic";
        b.INPUT = "input";
        return b
    }
    ();
    b.TextFieldType = c;
    c.prototype.__class__ = "egret.TextFieldType"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(a) {
            d.call(this);
            var b = a.bitmapData;
            this.bitmapData = b;
            this._textureMap = {};
            this._sourceWidth = b.width;
            this._sourceHeight = b.height;
            this._bitmapX = a._bitmapX - a._offsetX;
            this._bitmapY = a._bitmapY - a._offsetY
        }
        __extends(a, d);
        a.prototype.getTexture = function(a) {
            return this._textureMap[a]
        }
        ;
        a.prototype.createTexture = function(a, d, c, g, f, h, l, n, p) {
            void 0 === h && (h = 0);
            void 0 === l && (l = 0);
            "undefined" === typeof n && (n = h + g);
            "undefined" === typeof p && (p = l + f);
            var q = new b.Texture
              , r = b.MainContext.instance.rendererContext.texture_scale_factor;
            q._bitmapData = this.bitmapData;
            q._bitmapX = this._bitmapX + d;
            q._bitmapY = this._bitmapY + c;
            q._bitmapWidth = g * r;
            q._bitmapHeight = f * r;
            q._offsetX = h;
            q._offsetY = l;
            q._textureWidth = n * r;
            q._textureHeight = p * r;
            q._sourceWidth = this._sourceWidth;
            q._sourceHeight = this._sourceHeight;
            return this._textureMap[a] = q
        }
        ;
        return a
    }
    (b.HashObject);
    b.SpriteSheet = c;
    c.prototype.__class__ = "egret.SpriteSheet"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._isFocus = !1;
            this._isFirst = this._isFirst = !0
        }
        __extends(a, d);
        a.prototype.init = function(a) {
            this._text = a;
            this.stageText = b.StageText.create();
            a = this._text.localToGlobal();
            this.stageText._open(a.x, a.y, this._text._explicitWidth, this._text._explicitHeight)
        }
        ;
        a.prototype._addStageText = function() {
            this._text._inputEnabled || (this._text._touchEnabled = !0);
            this.stageText._add();
            this.stageText._addListeners();
            this.stageText.addEventListener("blur", this.onBlurHandler, 
            this);
            this.stageText.addEventListener("focus", this.onFocusHandler, this);
            this.stageText.addEventListener("updateText", this.updateTextHandler, this);
            this._text.addEventListener(b.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
            b.MainContext.instance.stage.addEventListener(b.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this);
            b.MainContext.instance.stage.addEventListener(b.Event.RESIZE, this.onResize, this)
        }
        ;
        a.prototype._removeStageText = function() {
            this.stageText._remove();
            this.stageText._removeListeners();
            this._text._inputEnabled || (this._text._touchEnabled = !1);
            this.stageText.removeEventListener("blur", this.onBlurHandler, this);
            this.stageText.removeEventListener("focus", this.onFocusHandler, this);
            this.stageText.removeEventListener("updateText", this.updateTextHandler, this);
            this._text.removeEventListener(b.TouchEvent.TOUCH_TAP, this.onMouseDownHandler, this);
            b.MainContext.instance.stage.removeEventListener(b.TouchEvent.TOUCH_TAP, this.onStageDownHandler, this);
            b.MainContext.instance.stage.removeEventListener(b.Event.RESIZE, 
            this.onResize, this)
        }
        ;
        a.prototype.onResize = function() {
            this._isFirst = !0
        }
        ;
        a.prototype._getText = function() {
            return this.stageText._getText()
        }
        ;
        a.prototype._setText = function(a) {
            this.stageText._setText(a)
        }
        ;
        a.prototype.onFocusHandler = function(a) {
            this.hideText()
        }
        ;
        a.prototype.onBlurHandler = function(a) {
            this.showText()
        }
        ;
        a.prototype.onMouseDownHandler = function(a) {
            a.stopPropagation();
            this._text._visible && this.stageText._show()
        }
        ;
        a.prototype.onStageDownHandler = function(a) {
            this.stageText._hide();
            this.showText()
        }
        ;
        a.prototype.showText = 
        function() {
            this._isFocus && (this._isFocus = !1,
            this.resetText())
        }
        ;
        a.prototype.hideText = function() {
            this._isFocus || (this._text._setBaseText(""),
            this._isFocus = !0)
        }
        ;
        a.prototype.updateTextHandler = function(a) {
            this.resetText();
            this._text.dispatchEvent(new b.Event(b.Event.CHANGE))
        }
        ;
        a.prototype.resetText = function() {
            this._text._setBaseText(this.stageText._getText())
        }
        ;
        a.prototype._updateTransform = function() {
            var a = this._text._worldTransform.a
              , d = this._text._worldTransform.b
              , c = this._text._worldTransform.c
              , g = this._text._worldTransform.d
              , 
            f = this._text._worldTransform.tx
              , h = this._text._worldTransform.ty;
            this._text._updateBaseTransform();
            var l = this._text._worldTransform;
            if (this._isFirst || a != l.a || d != l.b || c != l.c || g != l.d || f != l.tx || h != l.ty) {
                this._isFirst = !1;
                a = this._text.localToGlobal();
                this.stageText.changePosition(a.x, a.y);
                var n = this;
                b.callLater(function() {
                    n.stageText._setScale(n._text._worldTransform.a, n._text._worldTransform.d)
                }
                , this)
            }
        }
        ;
        a.prototype._updateProperties = function() {
            var a = this._text._stage;
            if (null  == a)
                this.stageText._setVisible(!1);
            else {
                for (var d = this._text, c = d._visible; c; ) {
                    d = d.parent;
                    if (d == a)
                        break;
                    c = d._visible
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
        }
        ;
        return a
    }
    (b.HashObject);
    b.InputController = c;
    c.prototype.__class__ = "egret.InputController"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(b) {
        function a(a, c) {
            b.call(this, a);
            this.firstCharHeight = 0;
            "string" == typeof c ? this.charList = this.parseConfig(c) : c && c.hasOwnProperty("frames") ? this.charList = c.frames : this.charList = {}
        }
        __extends(a, b);
        a.prototype.getTexture = function(a) {
            var b = this._textureMap[a];
            if (!b) {
                b = this.charList[a];
                if (!b)
                    return null ;
                b = this.createTexture(a, b.x, b.y, b.w, b.h, b.offX, b.offY, b.sourceW, b.sourceH);
                this._textureMap[a] = b
            }
            return b
        }
        ;
        a.prototype._getFirstCharHeight = function() {
            if (0 != this.firstCharHeight)
                return this.firstCharHeight;
            for (var a in this.charList) {
                var b = this.charList[a];
                if (b) {
                    var d = b.sourceH;
                    void 0 === d && (d = b.h,
                    void 0 === d && (d = 0),
                    b = b.offY,
                    void 0 === b && (b = 0),
                    d += b);
                    if (!(0 >= d)) {
                        this.firstCharHeight = d;
                        break
                    }
                }
            }
        }
        ;
        a.prototype.parseConfig = function(a) {
            a = a.split("\r\n").join("\n");
            a = a.split("\n");
            for (var b = this.getConfigByKey(a[3], "count"), d = {}, c = 4; c < 4 + b; c++) {
                var f = a[c]
                  , h = String.fromCharCode(this.getConfigByKey(f, "id"))
                  , l = {};
                d[h] = l;
                l.x = this.getConfigByKey(f, "x");
                l.y = this.getConfigByKey(f, "y");
                l.w = this.getConfigByKey(f, "width");
                l.h = this.getConfigByKey(f, "height");
                l.offX = this.getConfigByKey(f, "xoffset");
                l.offY = this.getConfigByKey(f, "yoffset")
            }
            return d
        }
        ;
        a.prototype.getConfigByKey = function(a, b) {
            for (var d = a.split(" "), c = 0, f = d.length; c < f; c++) {
                var h = d[c];
                if (b == h.substring(0, b.length))
                    return d = h.substring(b.length + 1),
                    parseInt(d)
            }
            return 0
        }
        ;
        return a
    }
    (b.SpriteSheet);
    b.BitmapFont = c;
    c.prototype.__class__ = "egret.BitmapFont"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(a, c) {
            d.call(this, a, c);
            b.Logger.warning("egret.BitmapTextSpriteSheet\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528egret.BitmapFont\u4ee3\u66ff\u3002")
        }
        __extends(a, d);
        return a
    }
    (b.BitmapFont);
    b.BitmapTextSpriteSheet = c;
    c.prototype.__class__ = "egret.BitmapTextSpriteSheet"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(a) {
        function c(e, m) {
            a.call(this);
            this.frameRate = 60;
            e instanceof d ? (b.Logger.warning("MovieClip#constructor\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a new MovieClip(data,texture)"),
            this.delegate = e) : this.delegate = new d(e,m);
            this.delegate.setMovieClip(this)
        }
        __extends(c, a);
        c.prototype.gotoAndPlay = function(a) {
            this.delegate.gotoAndPlay(a)
        }
        ;
        c.prototype.gotoAndStop = function(a) {
            this.delegate.gotoAndStop(a)
        }
        ;
        c.prototype.stop = 
        function() {
            this.delegate.stop()
        }
        ;
        c.prototype.dispose = function() {
            this.delegate.dispose()
        }
        ;
        c.prototype.release = function() {
            b.Logger.warning("MovieClip#release\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
            this.dispose()
        }
        ;
        c.prototype.getCurrentFrameIndex = function() {
            b.Logger.warning("MovieClip#getCurrentFrameIndex\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
            return this.delegate._currentFrameIndex
        }
        ;
        c.prototype.getTotalFrame = function() {
            b.Logger.warning("MovieClip#getTotalFrame\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
            return this.delegate._totalFrame
        }
        ;
        c.prototype.setInterval = function(a) {
            b.Logger.warning("MovieClip#setInterval\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528MovieClip#frameRate\u4ee3\u66ff");
            this.frameRate = 60 / a
        }
        ;
        c.prototype.getIsPlaying = function() {
            b.Logger.warning("MovieClip#getIsPlaying\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03");
            return this.delegate.isPlaying
        }
        ;
        return c
    }
    (b.DisplayObjectContainer);
    b.MovieClip = c;
    c.prototype.__class__ = "egret.MovieClip";
    var d = function() {
        function a(a, d) {
            this.data = a;
            this._currentFrameIndex = this._passTime = 
            this._totalFrame = 0;
            this._isPlaying = !1;
            this._frameData = a;
            this._spriteSheet = new b.SpriteSheet(d)
        }
        a.prototype.setMovieClip = function(a) {
            this.movieClip = a;
            this.bitmap = new b.Bitmap;
            this.movieClip.addChild(this.bitmap)
        }
        ;
        a.prototype.gotoAndPlay = function(a) {
            this.checkHasFrame(a);
            this._isPlaying = !0;
            this._currentFrameIndex = 0;
            this._currentFrameName = a;
            this._totalFrame = this._frameData.frames[a].totalFrame;
            this.playNextFrame();
            this._passTime = 0;
            b.Ticker.getInstance().register(this.update, this)
        }
        ;
        a.prototype.gotoAndStop = 
        function(a) {
            this.checkHasFrame(a);
            this.stop();
            this._currentFrameIndex = this._passTime = 0;
            this._currentFrameName = a;
            this._totalFrame = this._frameData.frames[a].totalFrame;
            this.playNextFrame()
        }
        ;
        a.prototype.stop = function() {
            this._isPlaying = !1;
            b.Ticker.getInstance().unregister(this.update, this)
        }
        ;
        a.prototype.dispose = function() {}
        ;
        a.prototype.checkHasFrame = function(a) {
            void 0 == this._frameData.frames[a] && b.Logger.fatal("MovieClip\u6ca1\u6709\u5bf9\u5e94\u7684frame\uff1a", a)
        }
        ;
        a.prototype.update = function(a) {
            for (var b = 
            1E3 / this.movieClip.frameRate, b = Math.floor((this._passTime % b + a) / b); 1 <= b; )
                1 == b ? this.playNextFrame() : this.playNextFrame(!1),
                b--;
            this._passTime += a
        }
        ;
        a.prototype.playNextFrame = function(a) {
            void 0 === a && (a = !0);
            var d = this._frameData.frames[this._currentFrameName].childrenFrame[this._currentFrameIndex];
            if (a) {
                a = this.getTexture(d.res);
                var c = this.bitmap;
                c.x = d.x;
                c.y = d.y;
                c.texture = a
            }
            null  != d.action && this.movieClip.dispatchEventWith(d.action);
            this._currentFrameIndex++;
            this._currentFrameIndex == this._totalFrame && (this._currentFrameIndex = 
            0,
            d.action != b.Event.COMPLETE && this.movieClip.dispatchEventWith(b.Event.COMPLETE))
        }
        ;
        a.prototype.getTexture = function(a) {
            var b = this._frameData.res[a]
              , d = this._spriteSheet.getTexture(a);
            d || (d = this._spriteSheet.createTexture(a, b.x, b.y, b.w, b.h));
            return d
        }
        ;
        return a
    }
    ();
    b.DefaultMovieClipDelegate = d;
    d.prototype.__class__ = "egret.DefaultMovieClipDelegate"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(b) {
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
        }
        ;
        a.prototype._setText = function(a) {}
        ;
        a.prototype._setTextType = function(a) {}
        ;
        a.prototype._getTextType = function() {
            return null 
        }
        ;
        a.prototype._open = function(a, b, d, c) {}
        ;
        a.prototype._show = function() {}
        ;
        a.prototype._add = 
        function() {}
        ;
        a.prototype._remove = function() {}
        ;
        a.prototype._hide = function() {}
        ;
        a.prototype._addListeners = function() {}
        ;
        a.prototype._removeListeners = function() {}
        ;
        a.prototype._setScale = function(a, b) {
            this._scaleX = a;
            this._scaleY = b
        }
        ;
        a.prototype.changePosition = function(a, b) {}
        ;
        a.prototype._setSize = function(a) {
            this._size = a
        }
        ;
        a.prototype._setTextColor = function(a) {
            this._color = a
        }
        ;
        a.prototype._setTextFontFamily = function(a) {
            this._fontFamily = a
        }
        ;
        a.prototype._setBold = function(a) {
            this._bold = a
        }
        ;
        a.prototype._setItalic = 
        function(a) {
            this._italic = a
        }
        ;
        a.prototype._setTextAlign = function(a) {
            this._textAlign = a
        }
        ;
        a.prototype._setVisible = function(a) {
            this._visible = a
        }
        ;
        a.prototype._setWidth = function(a) {}
        ;
        a.prototype._setHeight = function(a) {}
        ;
        a.prototype._setMultiline = function(a) {
            this._multiline = a
        }
        ;
        a.prototype._setMaxChars = function(a) {
            this._maxChars = a
        }
        ;
        a.prototype._resetStageText = function() {}
        ;
        a.create = function() {
            return null 
        }
        ;
        return a
    }
    (b.EventDispatcher);
    b.StageText = c;
    c.prototype.__class__ = "egret.StageText"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.GET = "get";
        b.POST = "post";
        return b
    }
    ();
    b.URLRequestMethod = c;
    c.prototype.__class__ = "egret.URLRequestMethod"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.BINARY = "binary";
        b.TEXT = "text";
        b.VARIABLES = "variables";
        b.TEXTURE = "texture";
        b.SOUND = "sound";
        return b
    }
    ();
    b.URLLoaderDataFormat = c;
    c.prototype.__class__ = "egret.URLLoaderDataFormat"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(b) {
        function a(a) {
            void 0 === a && (a = null );
            b.call(this);
            null  !== a && this.decode(a)
        }
        __extends(a, b);
        a.prototype.decode = function(a) {
            this.variables || (this.variables = {});
            a = a.split("+").join(" ");
            for (var b, d = /[?&]?([^=]+)=([^&]*)/g; b = d.exec(a); ) {
                var c = decodeURIComponent(b[1]);
                b = decodeURIComponent(b[2]);
                if (!1 == c in this.variables)
                    this.variables[c] = b;
                else {
                    var f = this.variables[c];
                    f instanceof Array ? f.push(b) : this.variables[c] = [f, b]
                }
            }
        }
        ;
        a.prototype.toString = function() {
            if (!this.variables)
                return "";
            var a = this.variables, b = [], d;
            for (d in a)
                b.push(this.encodeValue(d, a[d]));
            return b.join("&")
        }
        ;
        a.prototype.encodeValue = function(a, b) {
            return b instanceof Array ? this.encodeArray(a, b) : encodeURIComponent(a) + "=" + encodeURIComponent(b)
        }
        ;
        a.prototype.encodeArray = function(a, b) {
            return a ? 0 == b.length ? encodeURIComponent(a) + "=" : b.map(function(b) {
                return encodeURIComponent(a) + "=" + encodeURIComponent(b)
            }
            ).join("&") : ""
        }
        ;
        return a
    }
    (b.HashObject);
    b.URLVariables = c;
    c.prototype.__class__ = "egret.URLVariables"
}
)(egret || (egret = 
{}));
(function(b) {
    var c = function() {
        return function(b, a) {
            this.name = b;
            this.value = a
        }
    }
    ();
    b.URLRequestHeader = c;
    c.prototype.__class__ = "egret.URLRequestHeader"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(a) {
            void 0 === a && (a = null );
            d.call(this);
            this.method = b.URLRequestMethod.GET;
            this.url = a
        }
        __extends(a, d);
        return a
    }
    (b.HashObject);
    b.URLRequest = c;
    c.prototype.__class__ = "egret.URLRequest"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(a) {
            void 0 === a && (a = null );
            d.call(this);
            this.dataFormat = b.URLLoaderDataFormat.TEXT;
            this._status = -1;
            a && this.load(a)
        }
        __extends(a, d);
        a.prototype.load = function(a) {
            this._request = a;
            this.data = null ;
            b.MainContext.instance.netContext.proceed(this)
        }
        ;
        return a
    }
    (b.EventDispatcher);
    b.URLLoader = c;
    c.prototype.__class__ = "egret.URLLoader"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0
        }
        __extends(a, d);
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
        Object.defineProperty(a.prototype, "bitmapData", 
        {
            get: function() {
                return this._bitmapData
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._setBitmapData = function(a) {
            var d = b.MainContext.instance.rendererContext.texture_scale_factor;
            this._bitmapData = a;
            this._sourceWidth = a.width;
            this._sourceHeight = a.height;
            this._textureWidth = this._sourceWidth * d;
            this._textureHeight = this._sourceHeight * d;
            this._bitmapWidth = this._textureWidth;
            this._bitmapHeight = this._textureHeight;
            this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
        }
        ;
        a.prototype.getPixel32 = function(a, b) {
            return this._bitmapData.getContext("2d").getImageData(a, 
            b, 1, 1).data
        }
        ;
        return a
    }
    (b.HashObject);
    b.Texture = c;
    c.prototype.__class__ = "egret.Texture"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.init()
        }
        __extends(a, d);
        a.prototype.init = function() {
            this._bitmapData = document.createElement("canvas");
            this.renderContext = b.RendererContext.createRendererContext(this._bitmapData)
        }
        ;
        a.prototype.drawToTexture = function(d, c, m) {
            var g = c || d.getBounds(b.Rectangle.identity);
            if (0 == g.width || 0 == g.height)
                return !1;
            var f = g.x
              , h = g.y;
            c = g.width;
            var g = g.height
              , l = b.MainContext.instance.rendererContext.texture_scale_factor
              , g = g / l;
            c = Math.round(c / l);
            g = Math.round(g);
            this.setSize(c, g);
            this.begin();
            d._worldTransform.identity();
            d._worldTransform.a = 1 / l;
            d._worldTransform.d = 1 / l;
            m && (d._worldTransform.a *= m,
            d._worldTransform.d *= m);
            this.renderContext.setTransform(d._worldTransform);
            d.worldAlpha = 1;
            if (d instanceof b.DisplayObjectContainer) {
                m = d._anchorOffsetX;
                var n = d._anchorOffsetY;
                if (0 != d._anchorX || 0 != d._anchorY)
                    m = d._anchorX * c,
                    n = d._anchorY * g;
                this._offsetX = f + m;
                this._offsetY = h + n;
                d._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
                0 < this._offsetX && (this._offsetX = 
                0);
                0 < this._offsetY && (this._offsetY = 0);
                f = d._children;
                h = 0;
                for (m = f.length; h < m; h++)
                    f[h]._updateTransform()
            }
            f = b.RenderFilter.getInstance();
            h = f._drawAreaList.concat();
            f._drawAreaList.length = 0;
            this.renderContext.clearScreen();
            this.renderContext.onRenderStart();
            this.webGLTexture = null ;
            (m = d.mask || d._scrollRect) && this.renderContext.pushMask(m);
            d._render(this.renderContext);
            m && this.renderContext.popMask();
            a.identityRectangle.width = c;
            a.identityRectangle.height = g;
            f.addDrawArea(a.identityRectangle);
            this.renderContext.onRenderFinish();
            this.end();
            f._drawAreaList = h;
            this._sourceWidth = c;
            this._sourceHeight = g;
            this._textureWidth = this._sourceWidth * l;
            this._textureHeight = this._sourceHeight * l;
            return !0
        }
        ;
        a.prototype.setSize = function(a, b) {
            var d = this._bitmapData;
            d.width = a;
            d.height = b;
            d.style.width = a + "px";
            d.style.height = b + "px";
            this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = a,
            this.renderContext._cacheCanvas.height = b)
        }
        ;
        a.prototype.begin = function() {}
        ;
        a.prototype.end = function() {}
        ;
        a.identityRectangle = new b.Rectangle;
        return a
    }
    (b.Texture);
    b.RenderTexture = c;
    c.prototype.__class__ = "egret.RenderTexture"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.renderCost = 0;
            this.texture_scale_factor = 1;
            this.profiler = b.Profiler.getInstance()
        }
        __extends(a, d);
        a.prototype.clearScreen = function() {}
        ;
        a.prototype.clearRect = function(a, b, d, c) {}
        ;
        a.prototype.drawImage = function(a, b, d, c, f, h, l, n, p, q) {
            this.profiler.onDrawImage()
        }
        ;
        a.prototype.setTransform = function(a) {}
        ;
        a.prototype.setAlpha = function(a, b) {}
        ;
        a.prototype.setupFont = function(a, b) {}
        ;
        a.prototype.measureText = function(a) {
            return 0
        }
        ;
        a.prototype.drawText = function(a, 
        b, d, c, f, h) {
            this.profiler.onDrawImage()
        }
        ;
        a.prototype.strokeRect = function(a, b, d, c, f) {}
        ;
        a.prototype.pushMask = function(a) {}
        ;
        a.prototype.popMask = function() {}
        ;
        a.prototype.onRenderStart = function() {}
        ;
        a.prototype.onRenderFinish = function() {}
        ;
        a.prototype.setGlobalColorTransform = function(a) {}
        ;
        a.createRendererContext = function(a) {
            return null 
        }
        ;
        a.imageSmoothingEnabled = !0;
        return a
    }
    (b.HashObject);
    b.RendererContext = c;
    c.prototype.__class__ = "egret.RendererContext"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.MOUSE = "mouse";
        b.TOUCH = "touch";
        b.mode = "touch";
        return b
    }
    ();
    b.InteractionMode = c;
    c.prototype.__class__ = "egret.InteractionMode"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._currentTouchTarget = {};
            this.maxTouches = 2;
            this.touchDownTarget = {};
            this.touchingIdentifiers = [];
            this.lastTouchY = this.lastTouchX = -1
        }
        __extends(a, d);
        a.prototype.run = function() {}
        ;
        a.prototype.getTouchData = function(a, b, d) {
            var c = this._currentTouchTarget[a];
            null  == c && (c = {},
            this._currentTouchTarget[a] = c);
            c.stageX = b;
            c.stageY = d;
            c.identifier = a;
            return c
        }
        ;
        a.prototype.dispatchEvent = function(a, d) {
            b.TouchEvent.dispatchTouchEvent(d.target, a, d.identifier, d.stageX, 
            d.stageY, !1, !1, !1, !0 == this.touchDownTarget[d.identifier])
        }
        ;
        a.prototype.onTouchBegan = function(a, d, c) {
            if (this.touchingIdentifiers.length != this.maxTouches) {
                var g = b.MainContext.instance.stage.hitTest(a, d);
                g && (a = this.getTouchData(c, a, d),
                this.touchDownTarget[c] = !0,
                a.target = g,
                a.beginTarget = g,
                this.dispatchEvent(b.TouchEvent.TOUCH_BEGIN, a));
                this.touchingIdentifiers.push(c)
            }
        }
        ;
        a.prototype.onTouchMove = function(a, d, c) {
            if (-1 != this.touchingIdentifiers.indexOf(c) && (a != this.lastTouchX || d != this.lastTouchY)) {
                this.lastTouchX = 
                a;
                this.lastTouchY = d;
                var g = b.MainContext.instance.stage.hitTest(a, d);
                g && (a = this.getTouchData(c, a, d),
                a.target = g,
                this.dispatchEvent(b.TouchEvent.TOUCH_MOVE, a))
            }
        }
        ;
        a.prototype.onTouchEnd = function(a, d, c) {
            var g = this.touchingIdentifiers.indexOf(c);
            -1 != g && (this.touchingIdentifiers.splice(g, 1),
            g = b.MainContext.instance.stage.hitTest(a, d)) && (a = this.getTouchData(c, a, d),
            delete this.touchDownTarget[c],
            c = a.beginTarget,
            a.target = g,
            this.dispatchEvent(b.TouchEvent.TOUCH_END, a),
            c == g ? this.dispatchEvent(b.TouchEvent.TOUCH_TAP, 
            a) : a.beginTarget && (a.target = a.beginTarget,
            this.dispatchEvent(b.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)),
            delete this._currentTouchTarget[a.identifier])
        }
        ;
        return a
    }
    (b.HashObject);
    b.TouchContext = c;
    c.prototype.__class__ = "egret.TouchContext"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
        a.prototype.proceed = function(a) {}
        ;
        a._getUrl = function(a) {
            var d = a.url;
            -1 == d.indexOf("?") && a.method == b.URLRequestMethod.GET && a.data && a.data instanceof b.URLVariables && (d = d + "?" + a.data.toString());
            return d
        }
        ;
        a.prototype.getChangeList = function() {
            return []
        }
        ;
        return a
    }
    (b.HashObject);
    b.NetContext = c;
    c.prototype.__class__ = "egret.NetContext"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this.frameRate = 60
        }
        __extends(a, b);
        a.prototype.executeMainLoop = function(a, b) {}
        ;
        return a
    }
    (b.HashObject);
    b.DeviceContext = c;
    c.prototype.__class__ = "egret.DeviceContext"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.call = function(a, b) {}
        ;
        b.addCallback = function(a, b) {}
        ;
        return b
    }
    ();
    b.ExternalInterface = c;
    c.prototype.__class__ = "egret.ExternalInterface"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.ua = navigator.userAgent.toLowerCase();
            this.trans = this._getTrans()
        }
        __extends(a, d);
        a.getInstance = function() {
            null  == a.instance && (a.instance = new a);
            return a.instance
        }
        ;
        Object.defineProperty(a.prototype, "isMobile", {
            get: function() {
                b.Logger.warning("Browser.isMobile\u63a5\u53e3\u53c2\u6570\u5df2\u7ecf\u53d8\u66f4\uff0c\u8bf7\u5c3d\u5feb\u8c03\u6574\u7528\u6cd5\u4e3a egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ");
                return b.MainContext.deviceType == 
                b.MainContext.DEVICE_MOBILE
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype._getHeader = function(a) {
            if ("transform" in a)
                return "";
            for (var b = ["webkit", "ms", "Moz", "O"], d = 0; d < b.length; d++)
                if (b[d] + "Transform" in a)
                    return b[d];
            return ""
        }
        ;
        a.prototype._getTrans = function() {
            var a = document.createElement("div").style
              , a = this._getHeader(a);
            return "" == a ? "transform" : a + "Transform"
        }
        ;
        a.prototype.$new = function(a) {
            return this.$(document.createElement(a))
        }
        ;
        a.prototype.$ = function(d) {
            var c = document;
            if (d = d instanceof HTMLElement ? 
            d : c.querySelector(d))
                d.find = d.find || this.$,
                d.hasClass = d.hasClass || function(a) {
                    return this.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)"))
                }
                ,
                d.addClass = d.addClass || function(a) {
                    this.hasClass(a) || (this.className && (this.className += " "),
                    this.className += a);
                    return this
                }
                ,
                d.removeClass = d.removeClass || function(a) {
                    this.hasClass(a) && (this.className = this.className.replace(a, ""));
                    return this
                }
                ,
                d.remove = d.remove || function() {}
                ,
                d.appendTo = d.appendTo || function(a) {
                    a.appendChild(this);
                    return this
                }
                ,
                d.prependTo = d.prependTo || 
                function(a) {
                    a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
                    return this
                }
                ,
                d.transforms = d.transforms || function() {
                    this.style[a.getInstance().trans] = a.getInstance().translate(this.position) + a.getInstance().rotate(this.rotation) + a.getInstance().scale(this.scale) + a.getInstance().skew(this.skew);
                    return this
                }
                ,
                d.position = d.position || {
                    x: 0,
                    y: 0
                },
                d.rotation = d.rotation || 0,
                d.scale = d.scale || {
                    x: 1,
                    y: 1
                },
                d.skew = d.skew || {
                    x: 0,
                    y: 0
                },
                d.translates = function(a, d) {
                    this.position.x = a;
                    this.position.y = d - 
                    b.MainContext.instance.stage.stageHeight;
                    this.transforms();
                    return this
                }
                ,
                d.rotate = function(a) {
                    this.rotation = a;
                    this.transforms();
                    return this
                }
                ,
                d.resize = function(a, b) {
                    this.scale.x = a;
                    this.scale.y = b;
                    this.transforms();
                    return this
                }
                ,
                d.setSkew = function(a, b) {
                    this.skew.x = a;
                    this.skew.y = b;
                    this.transforms();
                    return this
                }
                ;
            return d
        }
        ;
        a.prototype.translate = function(a) {
            return "translate(" + a.x + "px, " + a.y + "px) "
        }
        ;
        a.prototype.rotate = function(a) {
            return "rotate(" + a + "deg) "
        }
        ;
        a.prototype.scale = function(a) {
            return "scale(" + a.x + ", " + 
            a.y + ") "
        }
        ;
        a.prototype.skew = function(a) {
            return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
        }
        ;
        return a
    }
    (b.HashObject);
    b.Browser = c;
    c.prototype.__class__ = "egret.Browser"
}
)(egret || (egret = {}));
(function(b) {
    (function(b) {
        b.getItem = function(b) {
            return null 
        }
        ;
        b.setItem = function(b, a) {
            return !1
        }
        ;
        b.removeItem = function(b) {}
        ;
        b.clear = function() {}
    }
    )(b.localStorage || (b.localStorage = {}))
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function d() {}
        d.parse = function(a) {
            a = b.SAXParser.getInstance().parserXML(a);
            if (!a || !a.childNodes)
                return null ;
            for (var c = a.childNodes.length, k = !1, m = 0; m < c; m++) {
                var g = a.childNodes[m];
                if (1 == g.nodeType) {
                    k = !0;
                    break
                }
            }
            return k ? d.parseNode(g) : null 
        }
        ;
        d.parseNode = function(a) {
            if (!a || 1 != a.nodeType)
                return null ;
            var b = {};
            b.localName = a.localName;
            b.name = a.nodeName;
            a.namespaceURI && (b.namespace = a.namespaceURI);
            a.prefix && (b.prefix = a.prefix);
            for (var c = a.attributes, m = c.length, g = 0; g < m; g++) {
                var f = 
                c[g]
                  , h = f.name;
                0 != h.indexOf("xmlns:") && (b["$" + h] = f.value)
            }
            c = a.childNodes;
            m = c.length;
            for (g = 0; g < m; g++)
                if (f = d.parseNode(c[g]))
                    b.children || (b.children = []),
                    f.parent = b,
                    b.children.push(f);
            !b.children && (a = a.textContent.trim()) && (b.text = a);
            return b
        }
        ;
        d.findChildren = function(a, b, c) {
            c ? c.length = 0 : c = [];
            d.findByPath(a, b, c);
            return c
        }
        ;
        d.findByPath = function(a, b, c) {
            var m = b.indexOf("."), g;
            -1 == m ? (g = b,
            m = !0) : (g = b.substring(0, m),
            b = b.substring(m + 1),
            m = !1);
            if (a = a.children)
                for (var f = a.length, h = 0; h < f; h++) {
                    var l = a[h];
                    l.localName == 
                    g && (m ? c.push(l) : d.findByPath(l, b, c))
                }
        }
        ;
        d.getAttributes = function(a, b) {
            b ? b.length = 0 : b = [];
            for (var d in a)
                "$" == d.charAt(0) && b.push(d.substring(1));
            return b
        }
        ;
        return d
    }
    ();
    b.XML = c;
    c.prototype.__class__ = "egret.XML"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function a() {}
        a.LITTLE_ENDIAN = "LITTLE_ENDIAN";
        a.BIG_ENDIAN = "BIG_ENDIAN";
        return a
    }
    ();
    b.Endian = c;
    c.prototype.__class__ = "egret.Endian";
    var d = function() {
        function a() {
            this.length = this.position = 0;
            this._mode = "";
            this.maxlength = 0;
            this._endian = c.LITTLE_ENDIAN;
            this.isLittleEndian = !1;
            this._mode = "Typed array";
            this.maxlength = 4;
            this.arraybytes = new ArrayBuffer(this.maxlength);
            this.unalignedarraybytestemp = new ArrayBuffer(16);
            this.endian = a.DEFAULT_ENDIAN
        }
        Object.defineProperty(a.prototype, 
        "endian", {
            get: function() {
                return this._endian
            },
            set: function(a) {
                this._endian = a;
                this.isLittleEndian = a == c.LITTLE_ENDIAN
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.ensureWriteableSpace = function(a) {
            this.ensureSpace(a + this.position)
        }
        ;
        a.prototype.setArrayBuffer = function(a) {
            this.ensureSpace(a.byteLength);
            this.length = a.byteLength;
            a = new Int8Array(a);
            (new Int8Array(this.arraybytes,0,this.length)).set(a);
            this.position = 0
        }
        ;
        Object.defineProperty(a.prototype, "bytesAvailable", {
            get: function() {
                return this.length - this.position
            },
            enumerable: !0,
            configurable: !0
        });
        a.prototype.ensureSpace = function(a) {
            if (a > this.maxlength) {
                a = a + 255 & -256;
                var b = new ArrayBuffer(a)
                  , d = new Uint8Array(this.arraybytes,0,this.length);
                (new Uint8Array(b,0,this.length)).set(d);
                this.arraybytes = b;
                this.maxlength = a
            }
        }
        ;
        a.prototype.writeByte = function(a) {
            this.ensureWriteableSpace(1);
            (new Int8Array(this.arraybytes))[this.position++] = ~~a;
            this.position > this.length && (this.length = this.position)
        }
        ;
        a.prototype.readByte = function() {
            if (this.position >= this.length)
                throw "ByteArray out of bounds read. Positon=" + 
                this.position + ", Length=" + this.length;
            return (new Int8Array(this.arraybytes))[this.position++]
        }
        ;
        a.prototype.readBytes = function(a, b, d) {
            void 0 === b && (b = 0);
            void 0 === d && (d = 0);
            null  == d && (d = a.length);
            a.ensureWriteableSpace(b + d);
            var c = new Int8Array(a.arraybytes)
              , f = new Int8Array(this.arraybytes);
            c.set(f.subarray(this.position, this.position + d), b);
            this.position += d;
            d + b > a.length && (a.length += d + b - a.length)
        }
        ;
        a.prototype.writeUnsignedByte = function(a) {
            this.ensureWriteableSpace(1);
            (new Uint8Array(this.arraybytes))[this.position++] = 
            ~~a & 255;
            this.position > this.length && (this.length = this.position)
        }
        ;
        a.prototype.readUnsignedByte = function() {
            if (this.position >= this.length)
                throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + this.length;
            return (new Uint8Array(this.arraybytes))[this.position++]
        }
        ;
        a.prototype.writeUnsignedShort = function(a) {
            this.ensureWriteableSpace(2);
            if (0 == (this.position & 1)) {
                var b = new Uint16Array(this.arraybytes);
                b[this.position >> 1] = ~~a & 65535
            } else
                b = new Uint16Array(this.unalignedarraybytestemp,0,1),
                b[0] = 
                ~~a & 65535,
                a = new Uint8Array(this.arraybytes,this.position,2),
                b = new Uint8Array(this.unalignedarraybytestemp,0,2),
                a.set(b);
            this.position += 2;
            this.position > this.length && (this.length = this.position)
        }
        ;
        a.prototype.readUTFBytes = function(a) {
            var b = "";
            a = this.position + a;
            for (var d = new DataView(this.arraybytes); this.position < a; ) {
                var c = d.getUint8(this.position++);
                if (128 > c) {
                    if (0 == c)
                        break;
                    b += String.fromCharCode(c)
                } else if (224 > c)
                    b += String.fromCharCode((c & 63) << 6 | d.getUint8(this.position++) & 127);
                else if (240 > c)
                    var f = d.getUint8(this.position++)
                      , 
                    b = b + String.fromCharCode((c & 31) << 12 | (f & 127) << 6 | d.getUint8(this.position++) & 127);
                else
                    var f = d.getUint8(this.position++)
                      , h = d.getUint8(this.position++)
                      , b = b + String.fromCharCode((c & 15) << 18 | (f & 127) << 12 | h << 6 & 127 | d.getUint8(this.position++) & 127)
            }
            return b
        }
        ;
        a.prototype.readInt = function() {
            var a = (new DataView(this.arraybytes)).getInt32(this.position, this.isLittleEndian);
            this.position += 4;
            return a
        }
        ;
        a.prototype.readShort = function() {
            var a = (new DataView(this.arraybytes)).getInt16(this.position, this.isLittleEndian);
            this.position += 2;
            return a
        }
        ;
        a.prototype.readDouble = function() {
            var a = (new DataView(this.arraybytes)).getFloat64(this.position, this.isLittleEndian);
            this.position += 8;
            return a
        }
        ;
        a.prototype.readUnsignedShort = function() {
            if (this.position > this.length + 2)
                throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
            if (0 == (this.position & 1)) {
                var a = new Uint16Array(this.arraybytes)
                  , b = this.position >> 1;
                this.position += 2;
                return a[b]
            }
            a = new Uint16Array(this.unalignedarraybytestemp,0,1);
            b = new Uint8Array(this.arraybytes,
            this.position,2);
            (new Uint8Array(this.unalignedarraybytestemp,0,2)).set(b);
            this.position += 2;
            return a[0]
        }
        ;
        a.prototype.writeUnsignedInt = function(a) {
            this.ensureWriteableSpace(4);
            if (0 == (this.position & 3)) {
                var b = new Uint32Array(this.arraybytes);
                b[this.position >> 2] = ~~a & 4294967295
            } else
                b = new Uint32Array(this.unalignedarraybytestemp,0,1),
                b[0] = ~~a & 4294967295,
                a = new Uint8Array(this.arraybytes,this.position,4),
                b = new Uint8Array(this.unalignedarraybytestemp,0,4),
                a.set(b);
            this.position += 4;
            this.position > this.length && 
            (this.length = this.position)
        }
        ;
        a.prototype.readUnsignedInt = function() {
            if (this.position > this.length + 4)
                throw "ByteArray out of bounds read. Position=" + this.position + ", Length=" + this.length;
            if (0 == (this.position & 3)) {
                var a = new Uint32Array(this.arraybytes)
                  , b = this.position >> 2;
                this.position += 4;
                return a[b]
            }
            a = new Uint32Array(this.unalignedarraybytestemp,0,1);
            b = new Uint8Array(this.arraybytes,this.position,4);
            (new Uint8Array(this.unalignedarraybytestemp,0,4)).set(b);
            this.position += 4;
            return a[0]
        }
        ;
        a.prototype.writeFloat = 
        function(a) {
            this.ensureWriteableSpace(4);
            if (0 == (this.position & 3)) {
                var b = new Float32Array(this.arraybytes);
                b[this.position >> 2] = a
            } else
                b = new Float32Array(this.unalignedarraybytestemp,0,1),
                b[0] = a,
                a = new Uint8Array(this.arraybytes,this.position,4),
                b = new Uint8Array(this.unalignedarraybytestemp,0,4),
                a.set(b);
            this.position += 4;
            this.position > this.length && (this.length = this.position)
        }
        ;
        a.prototype.readFloat = function() {
            if (this.position > this.length + 4)
                throw "ByteArray out of bounds read. Positon=" + this.position + ", Length=" + 
                this.length;
            if (0 == (this.position & 3)) {
                var a = new Float32Array(this.arraybytes)
                  , b = this.position >> 2;
                this.position += 4;
                return a[b]
            }
            a = new Float32Array(this.unalignedarraybytestemp,0,1);
            b = new Uint8Array(this.arraybytes,this.position,4);
            (new Uint8Array(this.unalignedarraybytestemp,0,4)).set(b);
            this.position += 4;
            return a[0]
        }
        ;
        a.DEFAULT_ENDIAN = c.BIG_ENDIAN;
        return a
    }
    ();
    b.ByteArray = d;
    d.prototype.__class__ = "egret.ByteArray"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(a, b, c) {
            d.call(this);
            this._target = null ;
            this.loop = this.ignoreGlobalPause = this._useTicks = !1;
            this._actions = this._steps = this.pluginData = null ;
            this.paused = !1;
            this.duration = 0;
            this._prevPos = -1;
            this.position = null ;
            this._stepPosition = this._prevPosition = 0;
            this.passive = !1;
            this.initialize(a, b, c)
        }
        __extends(a, d);
        a.get = function(b, d, c, g) {
            void 0 === d && (d = null );
            void 0 === c && (c = null );
            void 0 === g && (g = !1);
            g && a.removeTweens(b);
            return new a(b,d,c)
        }
        ;
        a.removeTweens = function(b) {
            if (b.tween_count) {
                for (var d = 
                a._tweens, c = d.length - 1; 0 <= c; c--)
                    d[c]._target == b && (d[c].paused = !0,
                    d.splice(c, 1));
                b.tween_count = 0
            }
        }
        ;
        a.pauseTweens = function(a) {
            if (a.tween_count)
                for (var d = b.Tween._tweens, c = d.length - 1; 0 <= c; c--)
                    d[c]._target == a && (d[c].paused = !0)
        }
        ;
        a.resumeTweens = function(a) {
            if (a.tween_count)
                for (var d = b.Tween._tweens, c = d.length - 1; 0 <= c; c--)
                    d[c]._target == a && (d[c].paused = !1)
        }
        ;
        a.tick = function(b, d) {
            void 0 === d && (d = !1);
            for (var c = a._tweens.concat(), g = c.length - 1; 0 <= g; g--) {
                var f = c[g];
                d && !f.ignoreGlobalPause || f.paused || f.tick(f._useTicks ? 
                1 : b)
            }
        }
        ;
        a._register = function(d, c) {
            var m = d._target
              , g = a._tweens;
            if (c)
                m && (m.tween_count = m.tween_count ? m.tween_count + 1 : 1),
                g.push(d),
                a._inited || (b.Ticker.getInstance().register(a.tick, null ),
                a._inited = !0);
            else
                for (m && m.tween_count--,
                m = g.length; m--; )
                    if (g[m] == d) {
                        g.splice(m, 1);
                        break
                    }
        }
        ;
        a.removeAllTweens = function() {
            for (var b = a._tweens, d = 0, c = b.length; d < c; d++) {
                var g = b[d];
                g.paused = !0;
                g._target.tweenjs_count = 0
            }
            b.length = 0
        }
        ;
        a.prototype.initialize = function(b, d, c) {
            this._target = b;
            d && (this._useTicks = d.useTicks,
            this.ignoreGlobalPause = 
            d.ignoreGlobalPause,
            this.loop = d.loop,
            d.onChange && this.addEventListener("change", d.onChange, d.onChangeObj),
            d.override && a.removeTweens(b));
            this.pluginData = c || {};
            this._curQueueProps = {};
            this._initQueueProps = {};
            this._steps = [];
            this._actions = [];
            d && d.paused ? this.paused = !0 : a._register(this, !0);
            d && null  != d.position && this.setPosition(d.position, a.NONE)
        }
        ;
        a.prototype.setPosition = function(a, b) {
            void 0 === b && (b = 1);
            0 > a && (a = 0);
            var d = a
              , c = !1;
            d >= this.duration && (this.loop ? d %= this.duration : (d = this.duration,
            c = !0));
            if (d == this._prevPos)
                return c;
            var f = this._prevPos;
            this.position = this._prevPos = d;
            this._prevPosition = a;
            if (this._target)
                if (c)
                    this._updateTargetProps(null , 1);
                else if (0 < this._steps.length) {
                    for (var h = 0, l = this._steps.length; h < l && !(this._steps[h].t > d); h++)
                        ;
                    h = this._steps[h - 1];
                    this._updateTargetProps(h, (this._stepPosition = d - h.t) / h.d)
                }
            0 != b && 0 < this._actions.length && (this._useTicks ? this._runActions(d, d) : 1 == b && d < f ? (f != this.duration && this._runActions(f, this.duration),
            this._runActions(0, d, !0)) : this._runActions(f, d));
            c && this.setPaused(!0);
            this.dispatchEventWith("change");
            return c
        }
        ;
        a.prototype._runActions = function(a, b, d) {
            void 0 === d && (d = !1);
            var c = a
              , f = b
              , h = -1
              , l = this._actions.length
              , n = 1;
            a > b && (c = b,
            f = a,
            h = l,
            l = n = -1);
            for (; (h += n) != l; ) {
                b = this._actions[h];
                var p = b.t;
                (p == f || p > c && p < f || d && p == a) && b.f.apply(b.o, b.p)
            }
        }
        ;
        a.prototype._updateTargetProps = function(b, d) {
            var c, g, f, h;
            if (b || 1 != d) {
                if (this.passive = !!b.v)
                    return;
                b.e && (d = b.e(d, 0, 1, 1));
                c = b.p0;
                g = b.p1
            } else
                this.passive = !1,
                c = g = this._curQueueProps;
            for (var l in this._initQueueProps) {
                null  == (f = c[l]) && (c[l] = f = this._initQueueProps[l]);
                null  == 
                (h = g[l]) && (g[l] = h = f);
                f = f == h || 0 == d || 1 == d || "number" != typeof f ? 1 == d ? h : f : f + (h - f) * d;
                var n = !1;
                if (h = a._plugins[l])
                    for (var p = 0, q = h.length; p < q; p++) {
                        var r = h[p].tween(this, l, f, c, g, d, !!b && c == g, !b);
                        r == a.IGNORE ? n = !0 : f = r
                    }
                n || (this._target[l] = f)
            }
        }
        ;
        a.prototype.setPaused = function(b) {
            this.paused = b;
            a._register(this, !b);
            return this
        }
        ;
        a.prototype._cloneProps = function(a) {
            var b = {}, d;
            for (d in a)
                b[d] = a[d];
            return b
        }
        ;
        a.prototype._addStep = function(a) {
            0 < a.d && (this._steps.push(a),
            a.t = this.duration,
            this.duration += a.d);
            return this
        }
        ;
        a.prototype._appendQueueProps = function(b) {
            var d, c, g, f, h, l;
            for (l in b)
                if (void 0 === this._initQueueProps[l]) {
                    c = this._target[l];
                    if (d = a._plugins[l])
                        for (g = 0,
                        f = d.length; g < f; g++)
                            c = d[g].init(this, l, c);
                    this._initQueueProps[l] = this._curQueueProps[l] = void 0 === c ? null  : c
                }
            for (l in b) {
                c = this._curQueueProps[l];
                if (d = a._plugins[l])
                    for (h = h || {},
                    g = 0,
                    f = d.length; g < f; g++)
                        d[g].step && d[g].step(this, l, c, b[l], h);
                this._curQueueProps[l] = b[l]
            }
            h && this._appendQueueProps(h);
            return this._curQueueProps
        }
        ;
        a.prototype._addAction = function(a) {
            a.t = 
            this.duration;
            this._actions.push(a);
            return this
        }
        ;
        a.prototype._set = function(a, b) {
            for (var d in a)
                b[d] = a[d]
        }
        ;
        a.prototype.wait = function(a, b) {
            if (null  == a || 0 >= a)
                return this;
            var d = this._cloneProps(this._curQueueProps);
            return this._addStep({
                d: a,
                p0: d,
                p1: d,
                v: b
            })
        }
        ;
        a.prototype.to = function(a, b, d) {
            void 0 === d && (d = void 0);
            if (isNaN(b) || 0 > b)
                b = 0;
            return this._addStep({
                d: b || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: d,
                p1: this._cloneProps(this._appendQueueProps(a))
            })
        }
        ;
        a.prototype.call = function(a, b, d) {
            void 0 === b && (b = void 0);
            void 0 === d && (d = void 0);
            return this._addAction({
                f: a,
                p: d ? d : [],
                o: b ? b : this._target
            })
        }
        ;
        a.prototype.set = function(a, b) {
            void 0 === b && (b = null );
            return this._addAction({
                f: this._set,
                o: this,
                p: [a, b ? b : this._target]
            })
        }
        ;
        a.prototype.play = function(a) {
            a || (a = this);
            return this.call(a.setPaused, a, [!1])
        }
        ;
        a.prototype.pause = function(a) {
            a || (a = this);
            return this.call(a.setPaused, a, [!0])
        }
        ;
        a.prototype.tick = function(a) {
            this.paused || this.setPosition(this._prevPosition + a)
        }
        ;
        a.NONE = 0;
        a.LOOP = 1;
        a.REVERSE = 2;
        a._tweens = [];
        a.IGNORE = {};
        a._plugins = 
        {};
        a._inited = !1;
        return a
    }
    (b.EventDispatcher);
    b.Tween = c;
    c.prototype.__class__ = "egret.Tween"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function d() {
            b.Logger.fatal("Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316")
        }
        d.get = function(a) {
            -1 > a && (a = -1);
            1 < a && (a = 1);
            return function(b) {
                return 0 == a ? b : 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
            }
        }
        ;
        d.getPowIn = function(a) {
            return function(b) {
                return Math.pow(b, a)
            }
        }
        ;
        d.getPowOut = function(a) {
            return function(b) {
                return 1 - Math.pow(1 - b, a)
            }
        }
        ;
        d.getPowInOut = function(a) {
            return function(b) {
                return 1 > (b *= 2) ? 0.5 * Math.pow(b, a) : 1 - 0.5 * Math.abs(Math.pow(2 - b, a))
            }
        }
        ;
        d.sineIn = function(a) {
            return 1 - Math.cos(a * 
            Math.PI / 2)
        }
        ;
        d.sineOut = function(a) {
            return Math.sin(a * Math.PI / 2)
        }
        ;
        d.sineInOut = function(a) {
            return -0.5 * (Math.cos(Math.PI * a) - 1)
        }
        ;
        d.getBackIn = function(a) {
            return function(b) {
                return b * b * ((a + 1) * b - a)
            }
        }
        ;
        d.getBackOut = function(a) {
            return function(b) {
                return --b * b * ((a + 1) * b + a) + 1
            }
        }
        ;
        d.getBackInOut = function(a) {
            a *= 1.525;
            return function(b) {
                return 1 > (b *= 2) ? 0.5 * b * b * ((a + 1) * b - a) : 0.5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
            }
        }
        ;
        d.circIn = function(a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }
        ;
        d.circOut = function(a) {
            return Math.sqrt(1 - --a * a)
        }
        ;
        d.circInOut = function(a) {
            return 1 > 
            (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        }
        ;
        d.bounceIn = function(a) {
            return 1 - d.bounceOut(1 - a)
        }
        ;
        d.bounceOut = function(a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        }
        ;
        d.bounceInOut = function(a) {
            return 0.5 > a ? 0.5 * d.bounceIn(2 * a) : 0.5 * d.bounceOut(2 * a - 1) + 0.5
        }
        ;
        d.getElasticIn = function(a, b) {
            var d = 2 * Math.PI;
            return function(c) {
                if (0 == c || 1 == c)
                    return c;
                var g = b / d * Math.asin(1 / a);
                return -(a * Math.pow(2, 10 * 
                (c -= 1)) * Math.sin((c - g) * d / b))
            }
        }
        ;
        d.getElasticOut = function(a, b) {
            var d = 2 * Math.PI;
            return function(c) {
                if (0 == c || 1 == c)
                    return c;
                var g = b / d * Math.asin(1 / a);
                return a * Math.pow(2, -10 * c) * Math.sin((c - g) * d / b) + 1
            }
        }
        ;
        d.getElasticInOut = function(a, b) {
            var d = 2 * Math.PI;
            return function(c) {
                var g = b / d * Math.asin(1 / a);
                return 1 > (c *= 2) ? -0.5 * a * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - g) * d / b) : a * Math.pow(2, -10 * (c -= 1)) * Math.sin((c - g) * d / b) * 0.5 + 1
            }
        }
        ;
        d.quadIn = d.getPowIn(2);
        d.quadOut = d.getPowOut(2);
        d.quadInOut = d.getPowInOut(2);
        d.cubicIn = d.getPowIn(3);
        d.cubicOut = d.getPowOut(3);
        d.cubicInOut = d.getPowInOut(3);
        d.quartIn = d.getPowIn(4);
        d.quartOut = d.getPowOut(4);
        d.quartInOut = d.getPowInOut(4);
        d.quintIn = d.getPowIn(5);
        d.quintOut = d.getPowOut(5);
        d.quintInOut = d.getPowInOut(5);
        d.backIn = d.getBackIn(1.7);
        d.backOut = d.getBackOut(1.7);
        d.backInOut = d.getBackInOut(1.7);
        d.elasticIn = d.getElasticIn(1, 0.3);
        d.elasticOut = d.getElasticOut(1, 0.3);
        d.elasticInOut = d.getElasticInOut(1, 0.3 * 1.5);
        return d
    }
    ();
    b.Ease = c;
    c.prototype.__class__ = "egret.Ease"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {
            this.type = b.EFFECT
        }
        b.prototype.play = function(a) {
            void 0 === a && (a = !1);
            var b = this.audio;
            b && (isNaN(b.duration) || (b.currentTime = 0),
            b.loop = a,
            b.play())
        }
        ;
        b.prototype.pause = function() {
            var a = this.audio;
            a && a.pause()
        }
        ;
        b.prototype.load = function() {
            var a = this.audio;
            a && a.load()
        }
        ;
        b.prototype.addEventListener = function(a, b) {
            this.audio && this.audio.addEventListener(a, b, !1)
        }
        ;
        b.prototype.removeEventListener = function(a, b) {
            this.audio && this.audio.removeEventListener(a, b, !1)
        }
        ;
        b.prototype.setVolume = 
        function(a) {
            var b = this.audio;
            b && (b.volume = a)
        }
        ;
        b.prototype.getVolume = function() {
            return this.audio ? this.audio.volume : 0
        }
        ;
        b.prototype.preload = function(a) {
            this.type = a
        }
        ;
        b.prototype._setAudio = function(a) {
            this.audio = a
        }
        ;
        b.MUSIC = "music";
        b.EFFECT = "effect";
        return b
    }
    ();
    b.Sound = c;
    c.prototype.__class__ = "egret.Sound"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.isNumber = function(a) {
            return "number" === typeof a && !isNaN(a)
        }
        ;
        b.sin = function(a) {
            a = Math.round(a);
            a %= 360;
            0 > a && (a += 360);
            return 90 > a ? egret_sin_map[a] : 180 > a ? egret_cos_map[a - 90] : 270 > a ? -egret_sin_map[a - 180] : -egret_cos_map[a - 270]
        }
        ;
        b.cos = function(a) {
            a = Math.round(a);
            a %= 360;
            0 > a && (a += 360);
            return 90 > a ? egret_cos_map[a] : 180 > a ? -egret_sin_map[a - 90] : 270 > a ? -egret_cos_map[a - 180] : egret_sin_map[a - 270]
        }
        ;
        return b
    }
    ();
    b.NumberUtils = c;
    c.prototype.__class__ = "egret.NumberUtils"
}
)(egret || 
(egret = {}));
for (var egret_sin_map = {}, egret_cos_map = {}, i = 0; 90 >= i; i++)
    egret_sin_map[i] = Math.sin(i * egret.Matrix.DEG_TO_RAD),
    egret_cos_map[i] = Math.cos(i * egret.Matrix.DEG_TO_RAD);
Function.prototype.bind || (Function.prototype.bind = function(b) {
    if ("function" !== typeof this)
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var c = Array.prototype.slice.call(arguments, 1)
      , d = this
      , a = function() {}
      , e = function() {
        return d.apply(this instanceof a && b ? this : b, c.concat(Array.prototype.slice.call(arguments)))
    }
    ;
    a.prototype = this.prototype;
    e.prototype = new a;
    return e
}
);
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
, RES;
(function(b) {
    var c = function(b) {
        function a(a, c, m) {
            void 0 === c && (c = !1);
            void 0 === m && (m = !1);
            b.call(this, a, c, m);
            this.itemsTotal = this.itemsLoaded = 0
        }
        __extends(a, b);
        a.dispatchResourceEvent = function(b, d, c, g, f, h) {
            void 0 === c && (c = "");
            void 0 === g && (g = null );
            void 0 === f && (f = 0);
            void 0 === h && (h = 0);
            var l = egret.Event._getPropertyData(a);
            l.groupName = c;
            l.resItem = g;
            l.itemsLoaded = f;
            l.itemsTotal = h;
            egret.Event._dispatchByTarget(a, b, d, l)
        }
        ;
        a.ITEM_LOAD_ERROR = "itemLoadError";
        a.CONFIG_COMPLETE = "configComplete";
        a.CONFIG_LOAD_ERROR = 
        "configLoadError";
        a.GROUP_PROGRESS = "groupProgress";
        a.GROUP_COMPLETE = "groupComplete";
        a.GROUP_LOAD_ERROR = "groupLoadError";
        return a
    }
    (egret.Event);
    b.ResourceEvent = c;
    c.prototype.__class__ = "RES.ResourceEvent"
}
)(RES || (RES = {}));
(function(b) {
    var c = function() {
        function b(a, d, c) {
            this._loaded = !1;
            this.name = a;
            this.url = d;
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
        }
        ;
        b.TYPE_XML = "xml";
        b.TYPE_IMAGE = "image";
        b.TYPE_BIN = "bin";
        b.TYPE_TEXT = "text";
        b.TYPE_JSON = 
        "json";
        b.TYPE_SHEET = "sheet";
        b.TYPE_FONT = "font";
        b.TYPE_SOUND = "sound";
        return b
    }
    ();
    b.ResourceItem = c;
    c.prototype.__class__ = "RES.ResourceItem"
}
)(RES || (RES = {}));
(function(b) {
    var c = function() {
        function d() {
            this.keyMap = {};
            this.groupDic = {};
            b.configInstance = this
        }
        d.prototype.getGroupByName = function(a) {
            var b = [];
            if (!this.groupDic[a])
                return b;
            a = this.groupDic[a];
            for (var d = a.length, c = 0; c < d; c++)
                b.push(this.parseResourceItem(a[c]));
            return b
        }
        ;
        d.prototype.getRawGroupByName = function(a) {
            return this.groupDic[a] ? this.groupDic[a] : []
        }
        ;
        d.prototype.createGroup = function(a, b, d) {
            void 0 === d && (d = !1);
            if (!d && this.groupDic[a] || !b || 0 == b.length)
                return !1;
            d = this.groupDic;
            for (var c = [], g = b.length, 
            f = 0; f < g; f++) {
                var h = b[f]
                  , l = d[h];
                if (l)
                    for (var h = l.length, n = 0; n < h; n++) {
                        var p = l[n];
                        -1 == c.indexOf(p) && c.push(p)
                    }
                else
                    (p = this.keyMap[h]) ? -1 == c.indexOf(p) && c.push(p) : egret.Logger.warning("RES.createGroup()\u4f20\u5165\u4e86\u914d\u7f6e\u4e2d\u4e0d\u5b58\u5728\u7684\u952e\u503c:" + h)
            }
            if (0 == c.length)
                return !1;
            this.groupDic[a] = c;
            return !0
        }
        ;
        d.prototype.parseConfig = function(a, b) {
            if (a) {
                var d = a.resources;
                if (d)
                    for (var c = d.length, g = 0; g < c; g++) {
                        var f = d[g]
                          , h = f.url;
                        h && -1 == h.indexOf("://") && (f.url = b + h);
                        this.addItemToKeyMap(f)
                    }
                if (d = 
                a.groups)
                    for (c = d.length,
                    g = 0; g < c; g++) {
                        for (var h = d[g], l = [], n = h.keys.split(","), p = n.length, q = 0; q < p; q++)
                            f = n[q].trim(),
                            (f = this.keyMap[f]) && -1 == l.indexOf(f) && l.push(f);
                        this.groupDic[h.name] = l
                    }
            }
        }
        ;
        d.prototype.addSubkey = function(a, b) {
            var d = this.keyMap[b];
            d && !this.keyMap[a] && (this.keyMap[a] = d)
        }
        ;
        d.prototype.addItemToKeyMap = function(a) {
            this.keyMap[a.name] || (this.keyMap[a.name] = a);
            if (a.hasOwnProperty("subkeys")) {
                var b = a.subkeys.split(",");
                a.subkeys = b;
                for (var d = b.length, c = 0; c < d; c++) {
                    var g = b[c];
                    null  == this.keyMap[g] && 
                    (this.keyMap[g] = a)
                }
            }
        }
        ;
        d.prototype.getName = function(a) {
            return (a = this.keyMap[a]) ? a.name : ""
        }
        ;
        d.prototype.getType = function(a) {
            return (a = this.keyMap[a]) ? a.type : ""
        }
        ;
        d.prototype.getRawResourceItem = function(a) {
            return this.keyMap[a]
        }
        ;
        d.prototype.getResourceItem = function(a) {
            return (a = this.keyMap[a]) ? this.parseResourceItem(a) : null 
        }
        ;
        d.prototype.parseResourceItem = function(a) {
            var d = new b.ResourceItem(a.name,a.url,a.type);
            d.data = a;
            return d
        }
        ;
        return d
    }
    ();
    b.ResourceConfig = c;
    c.prototype.__class__ = "RES.ResourceConfig"
}
)(RES || 
(RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.thread = 2;
            this.loadingCount = 0;
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
        __extends(a, d);
        a.prototype.isGroupInLoading = function(a) {
            return void 0 !== this.itemListDic[a]
        }
        ;
        a.prototype.loadGroup = function(a, d, c) {
            void 0 === c && (c = 0);
            if (!this.itemListDic[d] && d)
                if (a && 
                0 != a.length) {
                    this.priorityQueue[c] ? this.priorityQueue[c].push(d) : this.priorityQueue[c] = [d];
                    this.itemListDic[d] = a;
                    c = a.length;
                    for (var g = 0; g < c; g++)
                        a[g].groupName = d;
                    this.groupTotalDic[d] = a.length;
                    this.numLoadedDic[d] = 0;
                    this.next()
                } else
                    egret.Logger.warning('RES\u52a0\u8f7d\u4e86\u4e0d\u5b58\u5728\u6216\u7a7a\u7684\u8d44\u6e90\u7ec4\uff1a"' + d + '"'),
                    a = new b.ResourceEvent(b.ResourceEvent.GROUP_LOAD_ERROR),
                    a.groupName = d,
                    this.dispatchEvent(a)
        }
        ;
        a.prototype.loadItem = function(a) {
            this.lazyLoadList.push(a);
            a.groupName = 
            "";
            this.next()
        }
        ;
        a.prototype.next = function() {
            for (; this.loadingCount < this.thread; ) {
                var a = this.getOneResourceItem();
                if (!a)
                    break;
                this.loadingCount++;
                if (a.loaded)
                    this.onItemComplete(a);
                else {
                    var d = this.analyzerDic[a.type];
                    d || (d = this.analyzerDic[a.type] = egret.Injector.getInstance(b.AnalyzerBase, a.type));
                    d.loadFile(a, this.onItemComplete, this)
                }
            }
        }
        ;
        a.prototype.getOneResourceItem = function() {
            if (0 < this.failedList.length)
                return this.failedList.shift();
            var a = Number.NEGATIVE_INFINITY, b;
            for (b in this.priorityQueue)
                a = 
                Math.max(a, b);
            a = this.priorityQueue[a];
            if (!a || 0 == a.length)
                return 0 == this.lazyLoadList.length ? null  : this.lazyLoadList.pop();
            b = a.length;
            for (var d, c = 0; c < b; c++) {
                this.queueIndex >= b && (this.queueIndex = 0);
                d = this.itemListDic[a[this.queueIndex]];
                if (0 < d.length)
                    break;
                this.queueIndex++
            }
            return 0 == d.length ? null  : d.shift()
        }
        ;
        a.prototype.onItemComplete = function(a) {
            this.loadingCount--;
            var d = a.groupName;
            if (!a.loaded) {
                var c = this.retryTimesDic[a.name] || 1;
                if (c > this.maxRetryTimes)
                    delete this.retryTimesDic[a.name],
                    b.ResourceEvent.dispatchResourceEvent(this.resInstance, 
                    b.ResourceEvent.ITEM_LOAD_ERROR, d, a);
                else {
                    this.retryTimesDic[a.name] = c + 1;
                    this.failedList.push(a);
                    this.next();
                    return
                }
            }
            if (d) {
                this.numLoadedDic[d]++;
                var c = this.numLoadedDic[d]
                  , g = this.groupTotalDic[d];
                a.loaded || (this.groupErrorDic[d] = !0);
                b.ResourceEvent.dispatchResourceEvent(this.resInstance, b.ResourceEvent.GROUP_PROGRESS, d, a, c, g);
                c == g && (a = this.groupErrorDic[d],
                this.removeGroupName(d),
                delete this.groupTotalDic[d],
                delete this.numLoadedDic[d],
                delete this.itemListDic[d],
                delete this.groupErrorDic[d],
                a ? b.ResourceEvent.dispatchResourceEvent(this, 
                b.ResourceEvent.GROUP_LOAD_ERROR, d) : b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_COMPLETE, d))
            } else
                this.callBack.call(this.resInstance, a);
            this.next()
        }
        ;
        a.prototype.removeGroupName = function(a) {
            for (var b in this.priorityQueue) {
                for (var d = this.priorityQueue[b], c = d.length, f = 0, h = !1, c = d.length, l = 0; l < c; l++) {
                    if (d[l] == a) {
                        d.splice(f, 1);
                        h = !0;
                        break
                    }
                    f++
                }
                if (h) {
                    0 == d.length && delete this.priorityQueue[b];
                    break
                }
            }
        }
        ;
        return a
    }
    (egret.EventDispatcher);
    b.ResourceLoader = c;
    c.prototype.__class__ = "RES.ResourceLoader"
}
)(RES || 
(RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.resourceConfig = b.configInstance
        }
        __extends(a, d);
        a.prototype.addSubkey = function(a, b) {
            this.resourceConfig.addSubkey(a, b)
        }
        ;
        a.prototype.loadFile = function(a, b, d) {}
        ;
        a.prototype.getRes = function(a) {}
        ;
        a.prototype.destroyRes = function(a) {
            return !1
        }
        ;
        a.getStringPrefix = function(a) {
            if (!a)
                return "";
            var b = a.indexOf(".");
            return -1 != b ? a.substring(0, b) : ""
        }
        ;
        a.getStringTail = function(a) {
            if (!a)
                return "";
            var b = a.indexOf(".");
            return -1 != b ? a.substring(b + 1) : ""
        }
        ;
        return a
    }
    (egret.HashObject);
    b.AnalyzerBase = c;
    c.prototype.__class__ = "RES.AnalyzerBase"
}
)(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this.fileDic = {};
            this.resItemDic = [];
            this._dataFormat = egret.URLLoaderDataFormat.BINARY;
            this.recycler = new egret.Recycler
        }
        __extends(a, b);
        a.prototype.loadFile = function(a, b, d) {
            if (this.fileDic[a.name])
                b.call(d, a);
            else {
                var c = this.getLoader();
                this.resItemDic[c.hashCode] = {
                    item: a,
                    func: b,
                    thisObject: d
                };
                c.load(new egret.URLRequest(a.url))
            }
        }
        ;
        a.prototype.getLoader = function() {
            var a = this.recycler.pop();
            a || (a = new egret.URLLoader,
            a.addEventListener(egret.Event.COMPLETE, 
            this.onLoadFinish, this),
            a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
            a.dataFormat = this._dataFormat;
            return a
        }
        ;
        a.prototype.onLoadFinish = function(a) {
            var b = a.target
              , d = this.resItemDic[b.hashCode];
            delete this.resItemDic[b.hashCode];
            this.recycler.push(b);
            var c = d.item
              , f = d.func;
            c.loaded = a.type == egret.Event.COMPLETE;
            c.loaded && this.analyzeData(c, b.data);
            f.call(d.thisObject, c)
        }
        ;
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            !this.fileDic[d] && b && (this.fileDic[d] = b)
        }
        ;
        a.prototype.getRes = 
        function(a) {
            return this.fileDic[a]
        }
        ;
        a.prototype.hasRes = function(a) {
            return null  != this.getRes(a)
        }
        ;
        a.prototype.destroyRes = function(a) {
            return this.fileDic[a] ? (delete this.fileDic[a],
            !0) : !1
        }
        ;
        return a
    }
    (b.AnalyzerBase);
    b.BinAnalyzer = c;
    c.prototype.__class__ = "RES.BinAnalyzer"
}
)(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            !this.fileDic[d] && b && (this.fileDic[d] = b,
            (d = a.data) && d.scale9grid && (d = d.scale9grid.split(","),
            b.scale9Grid = new egret.Rectangle(parseInt(d[0]),parseInt(d[1]),parseInt(d[2]),parseInt(d[3]))))
        }
        ;
        return a
    }
    (b.BinAnalyzer);
    b.ImageAnalyzer = c;
    c.prototype.__class__ = "RES.ImageAnalyzer"
}
)(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            if (!this.fileDic[d] && b)
                try {
                    this.fileDic[d] = JSON.parse(b)
                } catch (c) {
                    egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url + "\ndata:" + b)
                }
        }
        ;
        return a
    }
    (b.BinAnalyzer);
    b.JsonAnalyzer = c;
    c.prototype.__class__ = "RES.JsonAnalyzer"
}
)(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        return a
    }
    (b.BinAnalyzer);
    b.TextAnalyzer = c;
    c.prototype.__class__ = "RES.TextAnalyzer"
}
)(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this.sheetMap = {};
            this.textureMap = {};
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, d);
        a.prototype.getRes = function(a) {
            var d = this.fileDic[a];
            d || (d = this.textureMap[a]);
            !d && (d = b.AnalyzerBase.getStringPrefix(a),
            d = this.fileDic[d]) && (a = b.AnalyzerBase.getStringTail(a),
            d = d.getTexture(a));
            return d
        }
        ;
        a.prototype.onLoadFinish = function(a) {
            var b = a.target
              , d = this.resItemDic[b.hashCode];
            delete this.resItemDic[b.hashCode];
            this.recycler.push(b);
            var c = 
            d.item
              , f = d.func;
            c.loaded = a.type == egret.Event.COMPLETE;
            c.loaded && this.analyzeData(c, b.data);
            "string" == typeof b.data ? (this._dataFormat = egret.URLLoaderDataFormat.TEXTURE,
            this.loadFile(c, f, d.thisObject),
            this._dataFormat = egret.URLLoaderDataFormat.TEXT) : f.call(d.thisObject, c)
        }
        ;
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            if (!this.fileDic[d] && b) {
                var c;
                if ("string" == typeof b) {
                    try {
                        c = JSON.parse(b)
                    } catch (f) {
                        egret.Logger.warning("JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: " + a.url)
                    }
                    c && (this.sheetMap[d] = 
                    c,
                    a.loaded = !1,
                    a.url = this.getRelativePath(a.url, c.file))
                } else
                    c = this.sheetMap[d],
                    delete this.sheetMap[d],
                    b && (c = this.parseSpriteSheet(b, c, a.data && a.data.subkeys ? "" : d),
                    this.fileDic[d] = c)
            }
        }
        ;
        a.prototype.getRelativePath = function(a, b) {
            a = a.split("\\").join("/");
            var d = a.lastIndexOf("/");
            return a = -1 != d ? a.substring(0, d + 1) + b : b
        }
        ;
        a.prototype.parseSpriteSheet = function(a, b, d) {
            b = b.frames;
            if (!b)
                return null ;
            var c = new egret.SpriteSheet(a), f = this.textureMap, h;
            for (h in b) {
                var l = b[h];
                a = c.createTexture(h, l.x, l.y, l.w, l.h, 
                l.offX, l.offY, l.sourceW, l.sourceH);
                l.scale9grid && (l = l.scale9grid.split(","),
                a.scale9Grid = new egret.Rectangle(parseInt(l[0]),parseInt(l[1]),parseInt(l[2]),parseInt(l[3])));
                null  == f[h] && (f[h] = a,
                d && this.addSubkey(h, d))
            }
            return c
        }
        ;
        return a
    }
    (b.BinAnalyzer);
    b.SheetAnalyzer = c;
    c.prototype.__class__ = "RES.SheetAnalyzer"
}
)(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this)
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            if (!this.fileDic[d] && b) {
                var c;
                if ("string" == typeof b) {
                    try {
                        c = JSON.parse(b)
                    } catch (f) {}
                    a.loaded = !1;
                    c ? a.url = this.getRelativePath(a.url, c.file) : (c = b,
                    a.url = this.getTexturePath(a.url, c));
                    this.sheetMap[d] = c
                } else
                    c = this.sheetMap[d],
                    delete this.sheetMap[d],
                    b && (c = new egret.BitmapFont(b,c),
                    this.fileDic[d] = c)
            }
        }
        ;
        a.prototype.getTexturePath = function(a, b) {
            var d = ""
              , c = b.split("\n")[2]
              , f = c.indexOf('file="');
            -1 != f && (c = c.substring(f + 6),
            f = c.indexOf('"'),
            d = c.substring(0, f));
            a = a.split("\\").join("/");
            f = a.lastIndexOf("/");
            return a = -1 != f ? a.substring(0, f + 1) + d : d
        }
        ;
        return a
    }
    (b.SheetAnalyzer);
    b.FontAnalyzer = c;
    c.prototype.__class__ = "RES.FontAnalyzer"
}
)(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.SOUND
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            !this.fileDic[d] && b && (this.fileDic[d] = b,
            (d = a.data) && d.soundType ? b.preload(d.soundType) : b.preload(egret.Sound.EFFECT))
        }
        ;
        return a
    }
    (b.BinAnalyzer);
    b.SoundAnalyzer = c;
    c.prototype.__class__ = "RES.SoundAnalyzer"
}
)(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(b) {
        function a() {
            b.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, b);
        a.prototype.analyzeData = function(a, b) {
            var d = a.name;
            if (!this.fileDic[d] && b)
                try {
                    var c = egret.XML.parse(b);
                    this.fileDic[d] = c
                } catch (f) {}
        }
        ;
        return a
    }
    (b.BinAnalyzer);
    b.XMLAnalyzer = c;
    c.prototype.__class__ = "RES.XMLAnalyzer"
}
)(RES || (RES = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    b.loadConfig = function(a, b, c) {
        void 0 === b && (b = "");
        void 0 === c && (c = "json");
        d.loadConfig(a, b, c)
    }
    ;
    b.loadGroup = function(a, b) {
        void 0 === b && (b = 0);
        d.loadGroup(a, b)
    }
    ;
    b.isGroupLoaded = function(a) {
        return d.isGroupLoaded(a)
    }
    ;
    b.getGroupByName = function(a) {
        return d.getGroupByName(a)
    }
    ;
    b.createGroup = function(a, b, c) {
        void 0 === c && (c = !1);
        return d.createGroup(a, b, c)
    }
    ;
    b.hasRes = function(a) {
        return d.hasRes(a)
    }
    ;
    b.getRes = function(a) {
        return d.getRes(a)
    }
    ;
    b.getResAsync = function(a, b, c) {
        d.getResAsync(a, b, c)
    }
    ;
    b.getResByUrl = 
    function(a, b, c, m) {
        void 0 === m && (m = "");
        d.getResByUrl(a, b, c, m)
    }
    ;
    b.destroyRes = function(a) {
        return d.destroyRes(a)
    }
    ;
    b.setMaxLoadingThread = function(a) {
        d.setMaxLoadingThread(a)
    }
    ;
    b.addEventListener = function(a, b, c, m, g) {
        void 0 === m && (m = !1);
        void 0 === g && (g = 0);
        d.addEventListener(a, b, c, m, g)
    }
    ;
    b.removeEventListener = function(a, b, c, m) {
        void 0 === m && (m = !1);
        d.removeEventListener(a, b, c, m)
    }
    ;
    var c = function(a) {
        function d() {
            a.call(this);
            this.analyzerDic = {};
            this.configItemList = [];
            this.configComplete = this.callLaterFlag = !1;
            this.loadedGroups = 
            [];
            this.groupNameList = [];
            this.asyncDic = {};
            this.init()
        }
        __extends(d, a);
        d.prototype.getAnalyzerByType = function(a) {
            var d = this.analyzerDic[a];
            d || (d = this.analyzerDic[a] = egret.Injector.getInstance(b.AnalyzerBase, a));
            return d
        }
        ;
        d.prototype.init = function() {
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(b.AnalyzerBase, b.BinAnalyzer, b.ResourceItem.TYPE_BIN);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(b.AnalyzerBase, b.ImageAnalyzer, 
            b.ResourceItem.TYPE_IMAGE);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(b.AnalyzerBase, b.TextAnalyzer, b.ResourceItem.TYPE_TEXT);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(b.AnalyzerBase, b.JsonAnalyzer, b.ResourceItem.TYPE_JSON);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(b.AnalyzerBase, b.SheetAnalyzer, b.ResourceItem.TYPE_SHEET);
            egret.Injector.hasMapRule(b.AnalyzerBase, 
            b.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(b.AnalyzerBase, b.FontAnalyzer, b.ResourceItem.TYPE_FONT);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(b.AnalyzerBase, b.SoundAnalyzer, b.ResourceItem.TYPE_SOUND);
            egret.Injector.hasMapRule(b.AnalyzerBase, b.ResourceItem.TYPE_XML) || egret.Injector.mapClass(b.AnalyzerBase, b.XMLAnalyzer, b.ResourceItem.TYPE_XML);
            this.resConfig = new b.ResourceConfig;
            this.resLoader = new b.ResourceLoader;
            this.resLoader.callBack = this.onResourceItemComp;
            this.resLoader.resInstance = this;
            this.resLoader.addEventListener(b.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
            this.resLoader.addEventListener(b.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupError, this)
        }
        ;
        d.prototype.loadConfig = function(a, b, d) {
            void 0 === d && (d = "json");
            this.configItemList.push({
                url: a,
                resourceRoot: b,
                type: d
            });
            this.callLaterFlag || (egret.callLater(this.startLoadConfig, this),
            this.callLaterFlag = !0)
        }
        ;
        d.prototype.startLoadConfig = function() {
            this.callLaterFlag = !1;
            var a = this.configItemList;
            this.configItemList = [];
            this.loadingConfigList = a;
            for (var c = a.length, g = [], f = 0; f < c; f++) {
                var h = a[f]
                  , h = new b.ResourceItem(h.url,h.url,h.type);
                g.push(h)
            }
            this.resLoader.loadGroup(g, d.GROUP_CONFIG, Number.MAX_VALUE)
        }
        ;
        d.prototype.isGroupLoaded = function(a) {
            return -1 != this.loadedGroups.indexOf(a)
        }
        ;
        d.prototype.getGroupByName = function(a) {
            return this.resConfig.getGroupByName(a)
        }
        ;
        d.prototype.loadGroup = function(a, d) {
            void 0 === d && (d = 0);
            if (-1 != this.loadedGroups.indexOf(a))
                b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.GROUP_COMPLETE, 
                a);
            else if (!this.resLoader.isGroupInLoading(a))
                if (this.configComplete) {
                    var c = this.resConfig.getGroupByName(a);
                    this.resLoader.loadGroup(c, a, d)
                } else
                    this.groupNameList.push({
                        name: a,
                        priority: d
                    })
        }
        ;
        d.prototype.createGroup = function(a, b, d) {
            void 0 === d && (d = !1);
            if (d) {
                var c = this.loadedGroups.indexOf(a);
                -1 != c && this.loadedGroups.splice(c, 1)
            }
            return this.resConfig.createGroup(a, b, d)
        }
        ;
        d.prototype.onGroupComp = function(a) {
            if (a.groupName == d.GROUP_CONFIG) {
                a = this.loadingConfigList.length;
                for (var c = 0; c < a; c++) {
                    var g = this.loadingConfigList[c]
                      , 
                    f = this.getAnalyzerByType(g.type)
                      , h = f.getRes(g.url);
                    f.destroyRes(g.url);
                    //this.resConfig.parseConfig(h, g.resourceRoot);
                    this.resConfig.parseConfig(res_config, g.resourceRoot);
                }
                this.configComplete = !0;
                this.loadingConfigList = null ;
                b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.CONFIG_COMPLETE);
                g = this.groupNameList;
                a = g.length;
                for (c = 0; c < a; c++)
                    f = g[c],
                    this.loadGroup(f.name, f.priority);
                this.groupNameList = []
            } else
                this.loadedGroups.push(a.groupName),
                this.dispatchEvent(a)
        }
        ;
        d.prototype.onGroupError = function(a) {
            a.groupName == d.GROUP_CONFIG ? (this.loadingConfigList = 
            null ,
            b.ResourceEvent.dispatchResourceEvent(this, b.ResourceEvent.CONFIG_LOAD_ERROR)) : this.dispatchEvent(a)
        }
        ;
        d.prototype.hasRes = function(a) {
            var d = this.resConfig.getType(a);
            return "" == d && (a = b.AnalyzerBase.getStringPrefix(a),
            d = this.resConfig.getType(a),
            "" == d) ? !1 : !0
        }
        ;
        d.prototype.getRes = function(a) {
            var d = this.resConfig.getType(a);
            return "" == d && (d = b.AnalyzerBase.getStringPrefix(a),
            d = this.resConfig.getType(d),
            "" == d) ? null  : this.getAnalyzerByType(d).getRes(a)
        }
        ;
        d.prototype.getResAsync = function(a, d, c) {
            var e = this.resConfig.getType(a)
              , 
            h = this.resConfig.getName(a);
            if ("" == e && (h = b.AnalyzerBase.getStringPrefix(a),
            e = this.resConfig.getType(h),
            "" == e)) {
                d.call(c, null );
                return
            }
            (e = this.getAnalyzerByType(e).getRes(a)) ? d.call(c, e) : (a = {
                key: a,
                compFunc: d,
                thisObject: c
            },
            this.asyncDic[h] ? this.asyncDic[h].push(a) : (this.asyncDic[h] = [a],
            h = this.resConfig.getResourceItem(h),
            this.resLoader.loadItem(h)))
        }
        ;
        d.prototype.getResByUrl = function(a, d, c, e) {
            void 0 === e && (e = "");
            if (a) {
                e || (e = this.getTypeByUrl(a));
                var h = this.getAnalyzerByType(e).getRes(a);
                h ? d.call(c, h) : 
                (d = {
                    key: a,
                    compFunc: d,
                    thisObject: c
                },
                this.asyncDic[a] ? this.asyncDic[a].push(d) : (this.asyncDic[a] = [d],
                a = new b.ResourceItem(a,a,e),
                this.resLoader.loadItem(a)))
            } else
                d.call(c, null )
        }
        ;
        d.prototype.getTypeByUrl = function(a) {
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
        }
        ;
        d.prototype.onResourceItemComp = function(a) {
            var b = this.asyncDic[a.name];
            delete this.asyncDic[a.name];
            a = this.getAnalyzerByType(a.type);
            for (var d = b.length, c = 0; c < d; c++) {
                var e = b[c]
                  , l = a.getRes(e.key);
                e.compFunc.call(e.thisObject, l, e.key)
            }
        }
        ;
        d.prototype.destroyRes = function(a) {
            var b = 
            this.resConfig.getRawGroupByName(a);
            if (b) {
                var d = this.loadedGroups.indexOf(a);
                -1 != d && this.loadedGroups.splice(d, 1);
                a = b.length;
                for (var c = 0; c < a; c++) {
                    d = b[c];
                    d.loaded = !1;
                    var e = this.getAnalyzerByType(d.type);
                    e.destroyRes(d.name)
                }
                return !0
            }
            b = this.resConfig.getType(a);
            if ("" == b)
                return !1;
            d = this.resConfig.getRawResourceItem(a);
            d.loaded = !1;
            e = this.getAnalyzerByType(b);
            return e.destroyRes(a)
        }
        ;
        d.prototype.setMaxLoadingThread = function(a) {
            1 > a && (a = 1);
            this.resLoader.thread = a
        }
        ;
        d.GROUP_CONFIG = "RES__CONFIG";
        return d
    }
    (egret.EventDispatcher);
    c.prototype.__class__ = "RES.Resource";
    var d = new c
}
)(RES || (RES = {}));
(function(b) {
    var c = function() {
        function d() {
            window.WebSocket || b.Logger.fatal("\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301WebSocket")
        }
        d.prototype.addCallBacks = function(a, b, d, c, g) {
            this.onConnect = a;
            this.onClose = b;
            this.onSocketData = d;
            this.onError = c;
            this.thisObject = g
        }
        ;
        d.prototype.connect = function(a, b) {
            this.host = a;
            this.port = b;
            this.socket = new window.WebSocket("ws://" + this.host + ":" + this.port);
            this._bindEvent()
        }
        ;
        d.prototype._bindEvent = function() {
            var a = this
              , b = this.socket;
            b.onopen = function() {
                a.onConnect && 
                a.onConnect.call(a.thisObject)
            }
            ;
            b.onclose = function(b) {
                a.onClose && a.onClose.call(a.thisObject)
            }
            ;
            b.onerror = function(b) {
                a.onError && a.onError.call(a.thisObject)
            }
            ;
            b.onmessage = function(b) {
                a.onSocketData && a.onSocketData.call(a.thisObject, b.data)
            }
        }
        ;
        d.prototype.send = function(a) {
            this.socket.send(a)
        }
        ;
        d.prototype.close = function() {
            this.socket.close()
        }
        ;
        return d
    }
    ();
    b.HTML5WebSocket = c;
    c.prototype.__class__ = "egret.HTML5WebSocket"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.prototype.addCallBacks = function(a, b, d, c, g) {
            this.onConnect = a;
            this.onClose = b;
            this.onSocketData = d;
            this.onError = c;
            this.thisObject = g
        }
        ;
        b.prototype.connect = function(a, b) {
            this.host = a;
            this.port = b;
            this.socket = new __global.egret_native.WebSocket("ws://" + this.host + ":" + this.port);
            this._bindEvent()
        }
        ;
        b.prototype._bindEvent = function() {
            var a = this
              , b = this.socket;
            b.onOpen = function() {
                a.onConnect && a.onConnect.call(a.thisObject)
            }
            ;
            b.onClose = function() {
                a.onClose && a.onClose.call(a.thisObject)
            }
            ;
            b.onError = function(b) {
                a.onError && a.onError.call(a.thisObject)
            }
            ;
            b.onMessage = function(b) {
                a.onSocketData && a.onSocketData.call(a.thisObject, b)
            }
        }
        ;
        b.prototype.send = function(a) {
            this.socket.send(a)
        }
        ;
        b.prototype.close = function() {
            this.socket.close()
        }
        ;
        return b
    }
    ();
    b.NativeSocket = c;
    c.prototype.__class__ = "egret.NativeSocket"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(a, c) {
            d.call(this);
            this._readMessage = this._writeMessage = "";
            this._connected = this._isReadySend = this._connected = !1;
            this._readMessage = this._writeMessage = "";
            this.socket = b.MainContext.runtimeType == b.MainContext.RUNTIME_HTML5 ? new b.HTML5WebSocket : new b.NativeSocket;
            this.socket.addCallBacks(this.onConnect, this.onClose, this.onSocketData, this.onError, this)
        }
        __extends(a, d);
        a.prototype.connect = function(a, b) {
            this.socket.connect(a, b)
        }
        ;
        a.prototype.close = function() {
            this.socket.close()
        }
        ;
        a.prototype.onConnect = function() {
            this._connected = !0;
            this.dispatchEventWith(b.Event.CONNECT)
        }
        ;
        a.prototype.onClose = function() {
            this._connected = !1;
            this.dispatchEventWith(b.Event.CLOSE)
        }
        ;
        a.prototype.onError = function() {
            this.dispatchEventWith(b.IOErrorEvent.IO_ERROR)
        }
        ;
        a.prototype.onSocketData = function(a) {
            this._readMessage += a;
            b.ProgressEvent.dispatchProgressEvent(this, b.ProgressEvent.SOCKET_DATA)
        }
        ;
        a.prototype.flush = function() {
            this._connected ? (this.socket.send(this._writeMessage),
            this._writeMessage = "",
            this._isReadySend = 
            !1) : b.Logger.warning("\u8bf7\u5148\u8fde\u63a5Socket")
        }
        ;
        a.prototype.writeUTF = function(a) {
            this._connected ? (this._writeMessage += a,
            this.flush()) : b.Logger.warning("\u8bf7\u5148\u8fde\u63a5Socket")
        }
        ;
        a.prototype.readUTF = function() {
            var a = this._readMessage;
            this._readMessage = "";
            return a
        }
        ;
        Object.defineProperty(a.prototype, "connected", {
            get: function() {
                return this._connected
            },
            enumerable: !0,
            configurable: !0
        });
        return a
    }
    (b.EventDispatcher);
    b.WebSocket = c;
    c.prototype.__class__ = "egret.WebSocket"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(b) {
            void 0 === b && (b = 60);
            d.call(this);
            this.frameRate = b;
            this._time = 0;
            this._isActivate = !0;
            60 == b && (a.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame,
            a.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame || 
            window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
            a.requestAnimationFrame || (a.requestAnimationFrame = function(a) {
                return window.setTimeout(a, 1E3 / b)
            }
            );
            a.cancelAnimationFrame || (a.cancelAnimationFrame = function(a) {
                return window.clearTimeout(a)
            }
            );
            a.instance = this;
            this.registerListener()
        }
        __extends(a, d);
        a.prototype.enterFrame = function() {
            var d = a.instance
              , c = a._thisObject
              , m = a._callback
              , g = b.getTimer()
              , f = g - 
            d._time;
            d._requestAnimationId = a.requestAnimationFrame.call(window, a.prototype.enterFrame);
            m.call(c, f);
            d._time = g
        }
        ;
        a.prototype.executeMainLoop = function(b, d) {
            a._callback = b;
            a._thisObject = d;
            this.enterFrame()
        }
        ;
        a.prototype.reset = function() {
            var d = a.instance;
            d._requestAnimationId && (d._time = b.getTimer(),
            a.cancelAnimationFrame.call(window, d._requestAnimationId),
            d.enterFrame())
        }
        ;
        a.prototype.registerListener = function() {
            var d = this
              , c = function() {
                d._isActivate && (d._isActivate = !1,
                b.MainContext.instance.stage.dispatchEvent(new b.Event(b.Event.DEACTIVATE)))
            }
              , 
            m = function() {
                d._isActivate || (d._isActivate = !0,
                a.instance.reset(),
                b.MainContext.instance.stage.dispatchEvent(new b.Event(b.Event.ACTIVATE)))
            }
              , g = function() {
                document[f] ? c() : m()
            }
            ;
            window.addEventListener("focus", m, !1);
            window.addEventListener("blur", c, !1);
            var f, h;
            "undefined" !== typeof document.hidden ? (f = "hidden",
            h = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (f = "mozHidden",
            h = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (f = "msHidden",
            h = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden ? 
            (f = "webkitHidden",
            h = "webkitvisibilitychange") : "undefined" !== typeof document.oHidden && (f = "oHidden",
            h = "ovisibilitychange");
            "onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", m, !1),
            window.addEventListener("pagehide", c, !1));
            f && h && document.addEventListener(h, g, !1)
        }
        ;
        return a
    }
    (b.DeviceContext);
    b.HTML5DeviceContext = c;
    c.prototype.__class__ = "egret.HTML5DeviceContext"
}
)(egret || (egret = {}));
var egret_html5_localStorage;
(function(b) {
    b.getItem = function(b) {
        return window.localStorage.getItem(b)
    }
    ;
    b.setItem = function(b, d) {
        try {
            return window.localStorage.setItem(b, d),
            !0
        } catch (a) {
            return console.log("egret_html5_localStorage.setItem\u4fdd\u5b58\u5931\u8d25,key=" + b + "&value=" + d),
            !1
        }
    }
    ;
    b.removeItem = function(b) {
        window.localStorage.removeItem(b)
    }
    ;
    b.clear = function() {
        window.localStorage.clear()
    }
    ;
    b.init = function() {
        for (var c in b)
            egret.localStorage[c] = b[c]
    }
}
)(egret_html5_localStorage || (egret_html5_localStorage = {}));
egret_html5_localStorage.init();
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(a) {
            d.call(this);
            this.globalAlpha = 1;
            this.canvas = a || this.createCanvas();
            this.canvasContext = this.canvas.getContext("2d");
            this._cacheCanvas = document.createElement("canvas");
            this._cacheCanvas.width = this.canvas.width;
            this._cacheCanvas.height = this.canvas.height;
            this._cacheCanvasContext = this._cacheCanvas.getContext("2d");
            this.onResize();
            var b = this.canvasContext.setTransform
              , c = this;
            this._cacheCanvasContext.setTransform = function(a, d, e, l, n, p) {
                c._matrixA = a;
                c._matrixB = 
                d;
                c._matrixC = e;
                c._matrixD = l;
                c._matrixTx = n;
                c._matrixTy = p;
                b.call(c._cacheCanvasContext, a, d, e, l, n, p)
            }
            ;
            this._matrixA = 1;
            this._matrixC = this._matrixB = 0;
            this._matrixD = 1;
            this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
            this.initBlendMode()
        }
        __extends(a, d);
        a.prototype.createCanvas = function() {
            var a = b.Browser.getInstance().$("#egretCanvas");
            if (!a) {
                var d = document.getElementById(b.StageDelegate.canvas_div_name)
                  , a = b.Browser.getInstance().$new("canvas");
                a.id = "egretCanvas";
                d.appendChild(a)
            }
            b.MainContext.instance.stage.addEventListener(b.Event.RESIZE, 
            this.onResize, this);
            return a
        }
        ;
        a.prototype.onResize = function() {
            if (this.canvas) {
                var a = document.getElementById(b.StageDelegate.canvas_div_name);
                this.canvas.width = b.MainContext.instance.stage.stageWidth;
                this.canvas.height = b.MainContext.instance.stage.stageHeight;
                this.canvas.style.width = a.style.width;
                this.canvas.style.height = a.style.height;
                this._cacheCanvas.width = this.canvas.width;
                this._cacheCanvas.height = this.canvas.height;
                this._cacheCanvasContext.imageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
                this._cacheCanvasContext.webkitImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
                this._cacheCanvasContext.mozImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled;
                this._cacheCanvasContext.msImageSmoothingEnabled = b.RendererContext.imageSmoothingEnabled
            }
        }
        ;
        a.prototype.clearScreen = function() {
            for (var a = b.RenderFilter.getInstance().getDrawAreaList(), d = 0, c = a.length; d < c; d++) {
                var g = a[d];
                this.clearRect(g.x, g.y, g.width, g.height)
            }
            a = b.MainContext.instance.stage;
            this._cacheCanvasContext.clearRect(0, 
            0, a.stageWidth, a.stageHeight);
            this.renderCost = 0
        }
        ;
        a.prototype.clearRect = function(a, b, d, c) {
            this.canvasContext.clearRect(a, b, d, c)
        }
        ;
        a.prototype.drawImage = function(a, c, m, g, f, h, l, n, p, q) {
            void 0 === q && (q = void 0);
            var r = a._bitmapData;
            h += this._transformTx;
            l += this._transformTy;
            var t = b.getTimer();
            void 0 === q ? this._cacheCanvasContext.drawImage(r, c, m, g, f, h, l, n, p) : this.drawRepeatImage(a, c, m, g, f, h, l, n, p, q);
            d.prototype.drawImage.call(this, a, c, m, g, f, h, l, n, p, q);
            this.renderCost += b.getTimer() - t
        }
        ;
        a.prototype.drawRepeatImage = 
        function(a, d, c, g, f, h, l, n, p, q) {
            if (void 0 === a.pattern) {
                var r = b.MainContext.instance.rendererContext.texture_scale_factor
                  , t = a._bitmapData
                  , s = t;
                if (t.width != g || t.height != f || 1 != r)
                    s = document.createElement("canvas"),
                    s.width = g * r,
                    s.height = f * r,
                    s.getContext("2d").drawImage(t, d, c, g, f, 0, 0, g * r, f * r);
                d = this._cacheCanvasContext.createPattern(s, q);
                a.pattern = d
            }
            this._cacheCanvasContext.fillStyle = a.pattern;
            this._cacheCanvasContext.translate(h, l);
            this._cacheCanvasContext.fillRect(0, 0, n, p);
            this._cacheCanvasContext.translate(-h, 
            -l)
        }
        ;
        a.prototype.setTransform = function(a) {
            1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx,
            this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0,
            this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this._cacheCanvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
        }
        ;
        a.prototype.setAlpha = function(a, d) {
            a != this.globalAlpha && 
            (this._cacheCanvasContext.globalAlpha = this.globalAlpha = a);
            d ? (this.blendValue = this.blendModes[d],
            this._cacheCanvasContext.globalCompositeOperation = this.blendValue) : this.blendValue != b.BlendMode.NORMAL && (this.blendValue = this.blendModes[b.BlendMode.NORMAL],
            this._cacheCanvasContext.globalCompositeOperation = this.blendValue)
        }
        ;
        a.prototype.initBlendMode = function() {
            this.blendModes = {};
            this.blendModes[b.BlendMode.NORMAL] = "source-over";
            this.blendModes[b.BlendMode.ADD] = "lighter"
        }
        ;
        a.prototype.setupFont = function(a, 
        b) {
            void 0 === b && (b = null );
            b = b || {};
            var d = null  == b.size ? a._size : b.size
              , c = null  == b.fontFamily ? a._fontFamily : b.fontFamily
              , f = this._cacheCanvasContext
              , h = (null  == b.italic ? a._italic : b.italic) ? "italic " : "normal "
              , h = h + ((null  == b.bold ? a._bold : b.bold) ? "bold " : "normal ");
            f.font = h + (d + "px " + c);
            f.textAlign = "left";
            f.textBaseline = "middle"
        }
        ;
        a.prototype.measureText = function(a) {
            return this._cacheCanvasContext.measureText(a).width
        }
        ;
        a.prototype.drawText = function(a, c, m, g, f, h) {
            void 0 === h && (h = null );
            this.setupFont(a, h);
            h = h || {};
            var l;
            l = null  != h.textColor ? b.toColorString(h.textColor) : a._textColorString;
            var n;
            n = null  != h.strokeColor ? b.toColorString(h.strokeColor) : a._strokeColorString;
            var p;
            p = null  != h.stroke ? h.stroke : a._stroke;
            var q = this._cacheCanvasContext;
            q.fillStyle = l;
            q.strokeStyle = n;
            p && (q.lineWidth = 2 * p,
            q.strokeText(c, m + this._transformTx, g + this._transformTy, f || 65535));
            q.fillText(c, m + this._transformTx, g + this._transformTy, f || 65535);
            d.prototype.drawText.call(this, a, c, m, g, f, h)
        }
        ;
        a.prototype.strokeRect = function(a, b, d, c, f) {
            this._cacheCanvasContext.strokeStyle = 
            f;
            this._cacheCanvasContext.strokeRect(a, b, d, c)
        }
        ;
        a.prototype.pushMask = function(a) {
            this._cacheCanvasContext.save();
            this._cacheCanvasContext.beginPath();
            this._cacheCanvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height);
            this._cacheCanvasContext.clip();
            this._cacheCanvasContext.closePath()
        }
        ;
        a.prototype.popMask = function() {
            this._cacheCanvasContext.restore();
            this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0)
        }
        ;
        a.prototype.onRenderStart = function() {
            this._cacheCanvasContext.save()
        }
        ;
        a.prototype.onRenderFinish = 
        function() {
            this._cacheCanvasContext.restore();
            this._cacheCanvasContext.setTransform(1, 0, 0, 1, 0, 0);
            for (var a = this._cacheCanvas.width, d = this._cacheCanvas.height, c = b.RenderFilter.getInstance().getDrawAreaList(), g = 0, f = c.length; g < f; g++) {
                var h = c[g]
                  , l = h.x
                  , n = h.y
                  , p = h.width
                  , h = h.height;
                l + p > a && (p = a - l);
                n + h > d && (h = d - n);
                0 < p && 0 < h && this.canvasContext.drawImage(this._cacheCanvas, l, n, p, h, l, n, p, h)
            }
        }
        ;
        return a
    }
    (b.RendererContext);
    b.HTML5CanvasRenderer = c;
    c.prototype.__class__ = "egret.HTML5CanvasRenderer"
}
)(egret || (egret = {}));
var egret_h5_graphics;
(function(b) {
    b.beginFill = function(b, a) {
        void 0 === a && (a = 1);
        var e = "rgba(" + (b >> 16) + "," + ((b & 65280) >> 8) + "," + (b & 255) + "," + a + ")";
        this.fillStyleColor = e;
        this.commandQueue.push(new c(this._setStyle,this,[e]))
    }
    ;
    b.drawRect = function(b, a, e, k) {
        this.commandQueue.push(new c(function(a, b, d, c) {
            var e = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.rect(e._transformTx + a, e._transformTy + b, d, c);
            this.canvasContext.closePath()
        }
        ,this,[b, a, e, k]));
        this._fill()
    }
    ;
    b.drawCircle = function(b, a, e) {
        this.commandQueue.push(new c(function(a, 
        b, d) {
            var c = this.renderContext;
            this.canvasContext.beginPath();
            this.canvasContext.arc(c._transformTx + a, c._transformTy + b, d, 0, 2 * Math.PI);
            this.canvasContext.closePath()
        }
        ,this,[b, a, e]));
        this._fill()
    }
    ;
    b.drawRoundRect = function(b, a, e, k, m, g) {
        this.commandQueue.push(new c(function(a, b, d, c, e, k) {
            var g = this.renderContext;
            a = g._transformTx + a;
            b = g._transformTy + b;
            e /= 2;
            k = k ? k / 2 : e;
            d = a + d;
            c = b + c;
            g = c - k;
            this.canvasContext.beginPath();
            this.canvasContext.moveTo(d, g);
            this.canvasContext.quadraticCurveTo(d, c, d - e, c);
            this.canvasContext.lineTo(a + 
            e, c);
            this.canvasContext.quadraticCurveTo(a, c, a, c - k);
            this.canvasContext.lineTo(a, b + k);
            this.canvasContext.quadraticCurveTo(a, b, a + e, b);
            this.canvasContext.lineTo(d - e, b);
            this.canvasContext.quadraticCurveTo(d, b, d, b + k);
            this.canvasContext.lineTo(d, g);
            this.canvasContext.closePath()
        }
        ,this,[b, a, e, k, m, g]));
        this._fill()
    }
    ;
    b.drawEllipse = function(b, a, e, k) {
        this.commandQueue.push(new c(function(a, b, d, c) {
            var e = this.renderContext;
            this.canvasContext.save();
            a = e._transformTx + a;
            b = e._transformTy + b;
            var e = d > c ? d : c
              , k = d / e;
            c /= 
            e;
            this.canvasContext.scale(k, c);
            this.canvasContext.beginPath();
            this.canvasContext.moveTo((a + d) / k, b / c);
            this.canvasContext.arc(a / k, b / c, e, 0, 2 * Math.PI);
            this.canvasContext.closePath();
            this.canvasContext.restore();
            this.canvasContext.stroke()
        }
        ,this,[b, a, e, k]));
        this._fill()
    }
    ;
    b.lineStyle = function(b, a, e, k, m, g, f, h) {
        void 0 === b && (b = NaN);
        void 0 === a && (a = 0);
        void 0 === e && (e = 1);
        void 0 === k && (k = !1);
        void 0 === m && (m = "normal");
        void 0 === g && (g = null );
        void 0 === f && (f = null );
        void 0 === h && (h = 3);
        this.strokeStyleColor && (this.createEndLineCommand(),
        this.commandQueue.push(this.endLineCommand));
        this.strokeStyleColor = a = "rgba(" + (a >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + e + ")";
        this.commandQueue.push(new c(function(a, b) {
            this.canvasContext.lineWidth = a;
            this.canvasContext.strokeStyle = b;
            this.canvasContext.beginPath()
        }
        ,this,[b, a]));
        "undefined" === typeof this.lineX && (this.lineY = this.lineX = 0);
        this.moveTo(this.lineX, this.lineY)
    }
    ;
    b.lineTo = function(b, a) {
        this.commandQueue.push(new c(function(a, b) {
            var d = this.renderContext;
            this.canvasContext.lineTo(d._transformTx + 
            a, d._transformTy + b)
        }
        ,this,[b, a]));
        this.lineX = b;
        this.lineY = a
    }
    ;
    b.curveTo = function(b, a, e, k) {
        this.commandQueue.push(new c(function(a, b, d, c) {
            var e = this.renderContext;
            this.canvasContext.quadraticCurveTo(e._transformTx + a, e._transformTy + b, e._transformTx + d, e._transformTy + c)
        }
        ,this,[b, a, e, k]));
        this.lineX = e;
        this.lineY = k
    }
    ;
    b.moveTo = function(b, a) {
        this.commandQueue.push(new c(function(a, b) {
            var d = this.renderContext;
            this.canvasContext.moveTo(d._transformTx + a, d._transformTy + b)
        }
        ,this,[b, a]))
    }
    ;
    b.clear = function() {
        this.lineY = 
        this.lineX = this.commandQueue.length = 0;
        this.fillStyleColor = this.strokeStyleColor = null 
    }
    ;
    b.createEndFillCommand = function() {
        this.endFillCommand || (this.endFillCommand = new c(function() {
            this.canvasContext.fill();
            this.canvasContext.closePath()
        }
        ,this,null ))
    }
    ;
    b.endFill = function() {
        null  != this.fillStyleColor && this._fill();
        this.fillStyleColor = null 
    }
    ;
    b._fill = function() {
        this.fillStyleColor && (this.createEndFillCommand(),
        this.commandQueue.push(this.endFillCommand))
    }
    ;
    b.createEndLineCommand = function() {
        this.endLineCommand || 
        (this.endLineCommand = new c(function() {
            this.canvasContext.stroke();
            this.canvasContext.closePath()
        }
        ,this,null ))
    }
    ;
    b._draw = function(b) {
        var a = this.commandQueue.length;
        if (0 != a) {
            this.renderContext = b;
            b = this.canvasContext = this.renderContext._cacheCanvasContext || this.renderContext.canvasContext;
            b.save();
            this.strokeStyleColor && 0 < a && this.commandQueue[a - 1] != this.endLineCommand && (this.createEndLineCommand(),
            this.commandQueue.push(this.endLineCommand),
            a = this.commandQueue.length);
            for (var c = 0; c < a; c++) {
                var k = this.commandQueue[c];
                k.method.apply(k.thisObject, k.args)
            }
            b.restore()
        }
    }
    ;
    var c = function() {
        return function(b, a, c) {
            this.method = b;
            this.thisObject = a;
            this.args = c
        }
    }
    ();
    c.prototype.__class__ = "egret_h5_graphics.Command";
    b._setStyle = function(b) {
        this.canvasContext.fillStyle = b;
        this.canvasContext.beginPath()
    }
    ;
    b.init = function() {
        for (var d in b)
            egret.Graphics.prototype[d] = b[d];
        egret.RendererContext.createRendererContext = function(a) {
            return new egret.HTML5CanvasRenderer(a)
        }
    }
}
)(egret_h5_graphics || (egret_h5_graphics = {}));
egret_h5_graphics.init();
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a(a) {
            d.call(this);
            this.size = 2E3;
            this.vertSize = 5;
            this.contextLost = !1;
            this.glContextId = 0;
            this.currentBlendMode = "";
            this.currentBaseTexture = null ;
            this.currentBatchSize = 0;
            this.maskList = [];
            this.maskDataFreeList = [];
            this.canvasContext = document.createElement("canvas").getContext("2d");
            console.log("\u4f7f\u7528WebGL\u6a21\u5f0f");
            this.canvas = a || this.createCanvas();
            this.canvas.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1);
            this.canvas.addEventListener("webglcontextrestored", 
            this.handleContextRestored.bind(this), !1);
            this.onResize();
            this.projectionX = this.canvas.width / 2;
            this.projectionY = -this.canvas.height / 2;
            a = 6 * this.size;
            this.vertices = new Float32Array(4 * this.size * this.vertSize);
            this.indices = new Uint16Array(a);
            for (var c = 0, m = 0; c < a; c += 6,
            m += 4)
                this.indices[c + 0] = m + 0,
                this.indices[c + 1] = m + 1,
                this.indices[c + 2] = m + 2,
                this.indices[c + 3] = m + 0,
                this.indices[c + 4] = m + 2,
                this.indices[c + 5] = m + 3;
            this.initWebGL();
            this.shaderManager = new b.WebGLShaderManager(this.gl);
            this.worldTransform = new b.Matrix;
            this.initBlendMode();
            b.MainContext.instance.addEventListener(b.Event.FINISH_RENDER, this._draw, this);
            b.TextField.prototype._draw = function(a) {
                this.getDirty() && (this.cacheAsBitmap = !0);
                b.DisplayObject.prototype._draw.call(this, a)
            }
        }
        __extends(a, d);
        a.prototype.createCanvas = function() {
            var a = b.Browser.getInstance().$("#egretCanvas");
            if (!a) {
                var d = document.getElementById(b.StageDelegate.canvas_div_name)
                  , a = b.Browser.getInstance().$new("canvas");
                a.id = "egretCanvas";
                d.appendChild(a)
            }
            b.MainContext.instance.stage.addEventListener(b.Event.RESIZE, 
            this.onResize, this);
            return a
        }
        ;
        a.prototype.onResize = function() {
            if (this.canvas) {
                var a = document.getElementById(b.StageDelegate.canvas_div_name);
                this.canvas.width = b.MainContext.instance.stage.stageWidth;
                this.canvas.height = b.MainContext.instance.stage.stageHeight;
                this.canvas.style.width = a.style.width;
                this.canvas.style.height = a.style.height;
                this.projectionX = this.canvas.width / 2;
                this.projectionY = -this.canvas.height / 2
            }
        }
        ;
        a.prototype.handleContextLost = function() {
            this.contextLost = !0
        }
        ;
        a.prototype.handleContextRestored = 
        function() {
            this.initWebGL();
            this.shaderManager.setContext(this.gl);
            this.contextLost = !1
        }
        ;
        a.prototype.initWebGL = function() {
            for (var a = {
                stencil: !0
            }, b, d = ["experimental-webgl", "webgl"], c = 0; c < d.length; c++) {
                try {
                    b = this.canvas.getContext(d[c], a)
                } catch (f) {}
                if (b)
                    break
            }
            if (!b)
                throw Error("\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301webgl");
            this.setContext(b)
        }
        ;
        a.prototype.setContext = function(a) {
            this.gl = a;
            a.id = this.glContextId++;
            this.vertexBuffer = a.createBuffer();
            this.indexBuffer = a.createBuffer();
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, 
            this.indexBuffer);
            a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW);
            a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
            a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW);
            a.disable(a.DEPTH_TEST);
            a.disable(a.CULL_FACE);
            a.enable(a.BLEND);
            a.colorMask(!0, !0, !0, !0)
        }
        ;
        a.prototype.initBlendMode = function() {
            this.blendModesWebGL = {};
            this.blendModesWebGL[b.BlendMode.NORMAL] = [this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA];
            this.blendModesWebGL[b.BlendMode.ADD] = [this.gl.SRC_ALPHA, this.gl.ONE]
        }
        ;
        a.prototype.start = 
        function() {
            if (!this.contextLost) {
                var a = this.gl;
                a.activeTexture(a.TEXTURE0);
                a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
                a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                var b;
                b = this.colorTransformMatrix ? this.shaderManager.colorTransformShader : this.shaderManager.defaultShader;
                this.shaderManager.activateShader(b);
                b.syncUniforms();
                a.uniform2f(b.projectionVector, this.projectionX, this.projectionY);
                var d = 4 * this.vertSize;
                a.vertexAttribPointer(b.aVertexPosition, 2, a.FLOAT, !1, d, 0);
                a.vertexAttribPointer(b.aTextureCoord, 
                2, a.FLOAT, !1, d, 8);
                a.vertexAttribPointer(b.colorAttribute, 2, a.FLOAT, !1, d, 16)
            }
        }
        ;
        a.prototype.clearScreen = function() {
            var a = this.gl;
            a.colorMask(!0, !0, !0, !0);
            for (var d = b.RenderFilter.getInstance().getDrawAreaList(), c = 0, g = d.length; c < g; c++) {
                var f = d[c];
                a.viewport(f.x, f.y, f.width, f.height);
                a.bindFramebuffer(a.FRAMEBUFFER, null );
                a.clearColor(0, 0, 0, 0);
                a.clear(a.COLOR_BUFFER_BIT)
            }
            d = b.MainContext.instance.stage;
            a.viewport(0, 0, d.stageWidth, d.stageHeight);
            this.renderCost = 0
        }
        ;
        a.prototype.setBlendMode = function(a) {
            a || 
            (a = b.BlendMode.NORMAL);
            if (this.currentBlendMode != a) {
                var d = this.blendModesWebGL[a];
                d && (this._draw(),
                this.gl.blendFunc(d[0], d[1]),
                this.currentBlendMode = a)
            }
        }
        ;
        a.prototype.drawRepeatImage = function(a, d, c, g, f, h, l, n, p, q) {
            q = b.MainContext.instance.rendererContext.texture_scale_factor;
            g *= q;
            for (f *= q; h < n; h += g)
                for (var r = l; r < p; r += f) {
                    var t = Math.min(g, n - h)
                      , s = Math.min(f, p - r);
                    this.drawImage(a, d, c, t / q, s / q, h, r, t, s)
                }
        }
        ;
        a.prototype.drawImage = function(a, b, d, c, f, h, l, n, p, q) {
            void 0 === q && (q = void 0);
            if (!this.contextLost)
                if (void 0 !== 
                q)
                    this.drawRepeatImage(a, b, d, c, f, h, l, n, p, q);
                else {
                    this.createWebGLTexture(a);
                    if (a.webGLTexture !== this.currentBaseTexture || this.currentBatchSize >= this.size - 1)
                        this._draw(),
                        this.currentBaseTexture = a.webGLTexture;
                    var r = this.worldTransform
                      , t = r.a
                      , s = r.b
                      , u = r.c
                      , v = r.d
                      , w = r.tx
                      , y = r.ty;
                    0 == h && 0 == l || r.append(1, 0, 0, 1, h, l);
                    1 == c / n && 1 == f / p || r.append(n / c, 0, 0, p / f, 0, 0);
                    h = r.a;
                    l = r.b;
                    n = r.c;
                    p = r.d;
                    q = r.tx;
                    var x = r.ty;
                    r.a = t;
                    r.b = s;
                    r.c = u;
                    r.d = v;
                    r.tx = w;
                    r.ty = y;
                    t = a._sourceWidth;
                    s = a._sourceHeight;
                    a = c;
                    r = f;
                    b /= t;
                    d /= s;
                    c /= t;
                    f /= s;
                    t = this.vertices;
                    s = 4 * this.currentBatchSize * this.vertSize;
                    u = this.worldAlpha;
                    t[s++] = q;
                    t[s++] = x;
                    t[s++] = b;
                    t[s++] = d;
                    t[s++] = u;
                    t[s++] = h * a + q;
                    t[s++] = l * a + x;
                    t[s++] = c + b;
                    t[s++] = d;
                    t[s++] = u;
                    t[s++] = h * a + n * r + q;
                    t[s++] = p * r + l * a + x;
                    t[s++] = c + b;
                    t[s++] = f + d;
                    t[s++] = u;
                    t[s++] = n * r + q;
                    t[s++] = p * r + x;
                    t[s++] = b;
                    t[s++] = f + d;
                    t[s++] = u;
                    this.currentBatchSize++
                }
        }
        ;
        a.prototype._draw = function() {
            if (0 != this.currentBatchSize && !this.contextLost) {
                var a = b.getTimer();
                this.start();
                var d = this.gl;
                d.bindTexture(d.TEXTURE_2D, this.currentBaseTexture);
                var c = this.vertices.subarray(0, 
                4 * this.currentBatchSize * this.vertSize);
                d.bufferSubData(d.ARRAY_BUFFER, 0, c);
                d.drawElements(d.TRIANGLES, 6 * this.currentBatchSize, d.UNSIGNED_SHORT, 0);
                this.currentBatchSize = 0;
                this.renderCost += b.getTimer() - a;
                b.Profiler.getInstance().onDrawImage()
            }
        }
        ;
        a.prototype.setTransform = function(a) {
            var b = this.worldTransform;
            b.a = a.a;
            b.b = a.b;
            b.c = a.c;
            b.d = a.d;
            b.tx = a.tx;
            b.ty = a.ty
        }
        ;
        a.prototype.setAlpha = function(a, b) {
            this.worldAlpha = a;
            this.setBlendMode(b)
        }
        ;
        a.prototype.createWebGLTexture = function(a) {
            if (!a.webGLTexture) {
                var b = 
                this.gl;
                a.webGLTexture = b.createTexture();
                b.bindTexture(b.TEXTURE_2D, a.webGLTexture);
                b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a._bitmapData);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                b.bindTexture(b.TEXTURE_2D, null )
            }
        }
        ;
        a.prototype.pushMask = 
        function(a) {
            this._draw();
            var b = this.gl;
            0 == this.maskList.length && (b.enable(b.STENCIL_TEST),
            b.stencilFunc(b.ALWAYS, 1, 1));
            var d = this.maskDataFreeList.pop();
            d ? (d.x = a.x,
            d.y = a.y,
            d.w = a.width,
            d.h = a.height) : d = {
                x: a.x,
                y: a.y,
                w: a.width,
                h: a.height
            };
            this.maskList.push(d);
            b.colorMask(!1, !1, !1, !1);
            b.stencilOp(b.KEEP, b.KEEP, b.INCR);
            this.renderGraphics(d);
            b.colorMask(!0, !0, !0, !0);
            b.stencilFunc(b.NOTEQUAL, 0, this.maskList.length);
            b.stencilOp(b.KEEP, b.KEEP, b.KEEP)
        }
        ;
        a.prototype.popMask = function() {
            this._draw();
            var a = this.gl
              , 
            b = this.maskList.pop();
            b && (a.colorMask(!1, !1, !1, !1),
            a.stencilOp(a.KEEP, a.KEEP, a.DECR),
            this.renderGraphics(b),
            a.colorMask(!0, !0, !0, !0),
            a.stencilFunc(a.NOTEQUAL, 0, this.maskList.length),
            a.stencilOp(a.KEEP, a.KEEP, a.KEEP),
            this.maskDataFreeList.push(b));
            0 == this.maskList.length && a.disable(a.STENCIL_TEST)
        }
        ;
        a.prototype.setGlobalColorTransform = function(a) {
            if (this.colorTransformMatrix != a && (this._draw(),
            this.colorTransformMatrix = a)) {
                a = a.concat();
                var b = this.shaderManager.colorTransformShader;
                b.uniforms.colorAdd.value.w = 
                a.splice(19, 1)[0] / 255;
                b.uniforms.colorAdd.value.z = a.splice(14, 1)[0] / 255;
                b.uniforms.colorAdd.value.y = a.splice(9, 1)[0] / 255;
                b.uniforms.colorAdd.value.x = a.splice(4, 1)[0] / 255;
                b.uniforms.matrix.value = a
            }
        }
        ;
        a.prototype.setupFont = function(a, b) {
            var d = this.canvasContext
              , c = a.italic ? "italic " : "normal "
              , c = c + (a.bold ? "bold " : "normal ")
              , c = c + (a.size + "px " + a.fontFamily);
            d.font = c;
            d.textAlign = "left";
            d.textBaseline = "middle"
        }
        ;
        a.prototype.measureText = function(a) {
            return this.canvasContext.measureText(a).width
        }
        ;
        a.prototype.renderGraphics = 
        function(a) {
            var b = this.gl
              , d = this.shaderManager.primitiveShader;
            this.graphicsPoints ? (this.graphicsPoints.length = 0,
            this.graphicsIndices.length = 0) : (this.graphicsPoints = [],
            this.graphicsIndices = [],
            this.graphicsBuffer = b.createBuffer(),
            this.graphicsIndexBuffer = b.createBuffer());
            this.updateGraphics(a);
            this.shaderManager.activateShader(d);
            b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
            b.uniformMatrix3fv(d.translationMatrix, !1, this.worldTransform.toArray(!0));
            b.uniform2f(d.projectionVector, this.projectionX, -this.projectionY);
            b.uniform2f(d.offsetVector, 0, 0);
            b.uniform3fv(d.tintColor, [1, 1, 1]);
            b.uniform1f(d.alpha, this.worldAlpha);
            b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
            b.vertexAttribPointer(d.aVertexPosition, 2, b.FLOAT, !1, 24, 0);
            b.vertexAttribPointer(d.colorAttribute, 4, b.FLOAT, !1, 24, 8);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
            b.drawElements(b.TRIANGLE_STRIP, this.graphicsIndices.length, b.UNSIGNED_SHORT, 0);
            this.shaderManager.activateShader(this.shaderManager.defaultShader)
        }
        ;
        a.prototype.updateGraphics = 
        function(a) {
            var b = this.gl;
            this.buildRectangle(a);
            b.bindBuffer(b.ARRAY_BUFFER, this.graphicsBuffer);
            b.bufferData(b.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), b.STATIC_DRAW);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
            b.bufferData(b.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), b.STATIC_DRAW)
        }
        ;
        a.prototype.buildRectangle = function(a) {
            var b = a.x
              , d = a.y
              , c = a.w;
            a = a.h;
            var f = this.graphicsPoints
              , h = this.graphicsIndices
              , l = f.length / 6;
            f.push(b, d);
            f.push(0, 0, 0, 1);
            f.push(b + c, d);
            f.push(0, 0, 0, 1);
            f.push(b, d + a);
            f.push(0, 0, 0, 1);
            f.push(b + c, d + a);
            f.push(0, 0, 0, 1);
            h.push(l, l, l + 1, l + 2, l + 3, l + 3)
        }
        ;
        return a
    }
    (b.RendererContext);
    b.WebGLRenderer = c;
    c.prototype.__class__ = "egret.WebGLRenderer"
}
)(egret || (egret = {}));
(function(b) {
    var c = function() {
        function b() {}
        b.compileProgram = function(a, c, k) {
            k = b.compileFragmentShader(a, k);
            c = b.compileVertexShader(a, c);
            var m = a.createProgram();
            a.attachShader(m, c);
            a.attachShader(m, k);
            a.linkProgram(m);
            a.getProgramParameter(m, a.LINK_STATUS) || console.log("\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668");
            return m
        }
        ;
        b.compileFragmentShader = function(a, c) {
            return b._compileShader(a, c, a.FRAGMENT_SHADER)
        }
        ;
        b.compileVertexShader = function(a, c) {
            return b._compileShader(a, c, a.VERTEX_SHADER)
        }
        ;
        b._compileShader = 
        function(a, b, d) {
            d = a.createShader(d);
            a.shaderSource(d, b);
            a.compileShader(d);
            return a.getShaderParameter(d, a.COMPILE_STATUS) ? d : (console.log(a.getShaderInfoLog(d)),
            null )
        }
        ;
        b.checkCanUseWebGL = function() {
            if (void 0 == b.canUseWebGL)
                try {
                    var a = document.createElement("canvas");
                    b.canUseWebGL = !!window.WebGLRenderingContext && !(!a.getContext("webgl") && !a.getContext("experimental-webgl"))
                } catch (c) {
                    b.canUseWebGL = !1
                }
            return b.canUseWebGL
        }
        ;
        return b
    }
    ();
    b.WebGLUtils = c;
    c.prototype.__class__ = "egret.WebGLUtils"
}
)(egret || (egret = 
{}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function() {
        function b(a) {
            this.maxAttibs = 10;
            this.attribState = [];
            this.tempAttribState = [];
            for (var d = 0; d < this.maxAttibs; d++)
                this.attribState[d] = !1;
            this.setContext(a)
        }
        b.prototype.setContext = function(b) {
            this.gl = b;
            this.primitiveShader = new e(b);
            this.defaultShader = new d(b);
            this.colorTransformShader = new a(b);
            this.activateShader(this.defaultShader)
        }
        ;
        b.prototype.activateShader = function(a) {
            this.currentShader != a && (this.gl.useProgram(a.program),
            this.setAttribs(a.attributes),
            this.currentShader = 
            a)
        }
        ;
        b.prototype.setAttribs = function(a) {
            var b, d;
            d = this.tempAttribState.length;
            for (b = 0; b < d; b++)
                this.tempAttribState[b] = !1;
            d = a.length;
            for (b = 0; b < d; b++)
                this.tempAttribState[a[b]] = !0;
            a = this.gl;
            d = this.attribState.length;
            for (b = 0; b < d; b++)
                this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b],
                this.tempAttribState[b] ? a.enableVertexAttribArray(b) : a.disableVertexAttribArray(b))
        }
        ;
        return b
    }
    ();
    b.WebGLShaderManager = c;
    c.prototype.__class__ = "egret.WebGLShaderManager";
    var d = function() {
        function a(b) {
            this.defaultVertexSrc = 
            "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}";
            this.program = null ;
            this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\ngl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
            this.gl = b;
            this.init()
        }
        a.prototype.init = function() {
            var a = this.gl
              , d = b.WebGLUtils.compileProgram(a, this.defaultVertexSrc, this.fragmentSrc);
            a.useProgram(d);
            this.uSampler = a.getUniformLocation(d, "uSampler");
            this.projectionVector = a.getUniformLocation(d, "projectionVector");
            this.offsetVector = a.getUniformLocation(d, "offsetVector");
            this.dimensions = a.getUniformLocation(d, "dimensions");
            this.aVertexPosition = a.getAttribLocation(d, "aVertexPosition");
            this.aTextureCoord = a.getAttribLocation(d, "aTextureCoord");
            this.colorAttribute = 
            a.getAttribLocation(d, "aColor");
            -1 === this.colorAttribute && (this.colorAttribute = 2);
            this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
            for (var c in this.uniforms)
                this.uniforms[c].uniformLocation = a.getUniformLocation(d, c);
            this.initUniforms();
            this.program = d
        }
        ;
        a.prototype.initUniforms = function() {
            if (this.uniforms) {
                var a = this.gl, b, d;
                for (d in this.uniforms) {
                    b = this.uniforms[d];
                    var c = b.type;
                    "mat2" === c || "mat3" === c || "mat4" === c ? (b.glMatrix = !0,
                    b.glValueLength = 1,
                    "mat2" === c ? b.glFunc = a.uniformMatrix2fv : 
                    "mat3" === c ? b.glFunc = a.uniformMatrix3fv : "mat4" === c && (b.glFunc = a.uniformMatrix4fv)) : (b.glFunc = a["uniform" + c],
                    b.glValueLength = "2f" === c || "2i" === c ? 2 : "3f" === c || "3i" === c ? 3 : "4f" === c || "4i" === c ? 4 : 1)
                }
            }
        }
        ;
        a.prototype.syncUniforms = function() {
            if (this.uniforms) {
                var a, b = this.gl, d;
                for (d in this.uniforms)
                    a = this.uniforms[d],
                    1 === a.glValueLength ? !0 === a.glMatrix ? a.glFunc.call(b, a.uniformLocation, a.transpose, a.value) : a.glFunc.call(b, a.uniformLocation, a.value) : 2 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, 
                    a.value.y) : 3 === a.glValueLength ? a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z) : 4 === a.glValueLength && a.glFunc.call(b, a.uniformLocation, a.value.x, a.value.y, a.value.z, a.value.w)
            }
        }
        ;
        return a
    }
    ();
    b.EgretShader = d;
    d.prototype.__class__ = "egret.EgretShader";
    var a = function(a) {
        function b(d) {
            a.call(this, d);
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
        __extends(b, a);
        return b
    }
    (d);
    b.ColorTransformShader = a;
    a.prototype.__class__ = "egret.ColorTransformShader";
    var e = function() {
        function a(b) {
            this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = null ;
            this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
            this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
            this.gl = b;
            this.init()
        }
        a.prototype.init = function() {
            var a = this.gl
              , d = b.WebGLUtils.compileProgram(a, this.vertexSrc, this.fragmentSrc);
            a.useProgram(d);
            this.projectionVector = a.getUniformLocation(d, "projectionVector");
            this.offsetVector = a.getUniformLocation(d, "offsetVector");
            this.tintColor = a.getUniformLocation(d, "tint");
            this.aVertexPosition = a.getAttribLocation(d, "aVertexPosition");
            this.colorAttribute = a.getAttribLocation(d, "aColor");
            this.attributes = [this.aVertexPosition, this.colorAttribute];
            this.translationMatrix = a.getUniformLocation(d, 
            "translationMatrix");
            this.alpha = a.getUniformLocation(d, "alpha");
            this.program = d
        }
        ;
        return a
    }
    ();
    b.PrimitiveShader = e;
    e.prototype.__class__ = "egret.PrimitiveShader"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this)
        }
        __extends(a, d);
        a.prototype.proceed = function(a) {
            function d() {
                if (4 == g.readyState)
                    if (g.status != a._status && (a._status = g.status,
                    b.HTTPStatusEvent.dispatchHTTPStatusEvent(a, g.status)),
                    400 <= g.status || 0 == g.status)
                        b.IOErrorEvent.dispatchIOErrorEvent(a);
                    else {
                        switch (a.dataFormat) {
                        case b.URLLoaderDataFormat.TEXT:
                            a.data = g.responseText;
                            break;
                        case b.URLLoaderDataFormat.VARIABLES:
                            a.data = new b.URLVariables(g.responseText);
                            break;
                        case b.URLLoaderDataFormat.BINARY:
                            a.data = 
                            g.response;
                            break;
                        default:
                            a.data = g.responseText
                        }
                        b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
                    }
            }
            if (a.dataFormat == b.URLLoaderDataFormat.TEXTURE)
                this.loadTexture(a);
            else if (a.dataFormat == b.URLLoaderDataFormat.SOUND)
                this.loadSound(a);
            else {
                var c = a._request
                  , g = this.getXHR();
                g.onreadystatechange = d;
                var f = b.NetContext._getUrl(c);
                g.open(c.method, f, !0);
                this.setResponseType(g, a.dataFormat);
                c.method != b.URLRequestMethod.GET && c.data ? c.data instanceof b.URLVariables ? (g.setRequestHeader("Content-Type", 
                "application/x-www-form-urlencoded"),
                g.send(c.data.toString())) : (g.setRequestHeader("Content-Type", "multipart/form-data"),
                g.send(c.data)) : g.send()
            }
        }
        ;
        a.prototype.loadSound = function(a) {
            function d(f) {
                window.clearTimeout(g.__timeoutId);
                g.removeEventListener("canplaythrough", d, !1);
                g.removeEventListener("error", c, !1);
                f = new b.Sound;
                f._setAudio(g);
                a.data = f;
                b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
            }
            function c(f) {
                window.clearTimeout(g.__timeoutId);
                g.removeEventListener("canplaythrough", 
                d, !1);
                g.removeEventListener("error", c, !1);
                b.IOErrorEvent.dispatchIOErrorEvent(a)
            }
            var g = new Audio(a._request.url);
            g.__timeoutId = window.setTimeout(d, 100);
            g.addEventListener("canplaythrough", d, !1);
            g.addEventListener("error", c, !1);
            g.load()
        }
        ;
        a.prototype.getXHR = function() {
            return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
        }
        ;
        a.prototype.setResponseType = function(a, d) {
            switch (d) {
            case b.URLLoaderDataFormat.TEXT:
            case b.URLLoaderDataFormat.VARIABLES:
                a.responseType = b.URLLoaderDataFormat.TEXT;
                break;
            case b.URLLoaderDataFormat.BINARY:
                a.responseType = "arraybuffer";
                break;
            default:
                a.responseType = d
            }
        }
        ;
        a.prototype.loadTexture = function(a) {
            var d = a._request
              , c = new Image;
            c.onload = function(d) {
                c.onerror = null ;
                c.onload = null ;
                d = new b.Texture;
                d._setBitmapData(c);
                a.data = d;
                b.__callAsync(b.Event.dispatchEvent, b.Event, a, b.Event.COMPLETE)
            }
            ;
            c.onerror = function(d) {
                c.onerror = null ;
                c.onload = null ;
                b.IOErrorEvent.dispatchIOErrorEvent(a)
            }
            ;
            c.src = d.url
        }
        ;
        return a
    }
    (b.NetContext);
    b.HTML5NetContext = c;
    c.prototype.__class__ = "egret.HTML5NetContext"
}
)(egret || 
(egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._isTouchDown = !1;
            this.rootDiv = document.getElementById(b.StageDelegate.canvas_div_name)
        }
        __extends(a, d);
        a.prototype.prevent = function(a) {
            a.stopPropagation();
            !0 != a.isScroll && a.preventDefault()
        }
        ;
        a.prototype.run = function() {
            var a = this;
            window.navigator.msPointerEnabled ? (this.rootDiv.addEventListener("MSPointerDown", function(b) {
                a._onTouchBegin(b);
                a.prevent(b)
            }
            , !1),
            this.rootDiv.addEventListener("MSPointerMove", function(b) {
                a._onTouchMove(b);
                a.prevent(b)
            }
            , 
            !1),
            this.rootDiv.addEventListener("MSPointerUp", function(b) {
                a._onTouchEnd(b);
                a.prevent(b)
            }
            , !1)) : b.MainContext.deviceType == b.MainContext.DEVICE_MOBILE ? this.addTouchListener() : b.MainContext.deviceType == b.MainContext.DEVICE_PC && (this.addTouchListener(),
            this.addMouseListener());
            window.addEventListener("mousedown", function(b) {
                a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
            }
            );
            window.addEventListener("mouseup", function(b) {
                a._isTouchDown && (a.inOutOfCanvas(b) ? a.dispatchLeaveStageEvent() : a._onTouchEnd(b));
                a._isTouchDown = !1
            }
            )
        }
        ;
        a.prototype.addMouseListener = function() {
            var a = this;
            this.rootDiv.addEventListener("mousedown", function(b) {
                a._onTouchBegin(b)
            }
            );
            this.rootDiv.addEventListener("mousemove", function(b) {
                a._onTouchMove(b)
            }
            );
            this.rootDiv.addEventListener("mouseup", function(b) {
                a._onTouchEnd(b)
            }
            )
        }
        ;
        a.prototype.addTouchListener = function() {
            var a = this;
            this.rootDiv.addEventListener("touchstart", function(b) {
                for (var d = b.changedTouches.length, c = 0; c < d; c++)
                    a._onTouchBegin(b.changedTouches[c]);
                a.prevent(b)
            }
            , !1);
            this.rootDiv.addEventListener("touchmove", 
            function(b) {
                for (var d = b.changedTouches.length, c = 0; c < d; c++)
                    a._onTouchMove(b.changedTouches[c]);
                a.prevent(b)
            }
            , !1);
            this.rootDiv.addEventListener("touchend", function(b) {
                for (var d = b.changedTouches.length, c = 0; c < d; c++)
                    a._onTouchEnd(b.changedTouches[c]);
                a.prevent(b)
            }
            , !1);
            this.rootDiv.addEventListener("touchcancel", function(b) {
                for (var d = b.changedTouches.length, c = 0; c < d; c++)
                    a._onTouchEnd(b.changedTouches[c]);
                a.prevent(b)
            }
            , !1)
        }
        ;
        a.prototype.inOutOfCanvas = function(a) {
            var d = this.getLocation(this.rootDiv, a);
            a = d.x;
            var d = d.y
              , c = b.MainContext.instance.stage;
            return 0 > a || 0 > d || a > c.stageWidth || d > c.stageHeight ? !0 : !1
        }
        ;
        a.prototype.dispatchLeaveStageEvent = function() {
            this.touchingIdentifiers.length = 0;
            b.MainContext.instance.stage.dispatchEventWith(b.Event.LEAVE_STAGE)
        }
        ;
        a.prototype._onTouchBegin = function(a) {
            var b = this.getLocation(this.rootDiv, a)
              , d = -1;
            a.hasOwnProperty("identifier") && (d = a.identifier);
            this.onTouchBegan(b.x, b.y, d)
        }
        ;
        a.prototype._onTouchMove = function(a) {
            var b = this.getLocation(this.rootDiv, a)
              , d = -1;
            a.hasOwnProperty("identifier") && 
            (d = a.identifier);
            this.onTouchMove(b.x, b.y, d)
        }
        ;
        a.prototype._onTouchEnd = function(a) {
            var b = this.getLocation(this.rootDiv, a)
              , d = -1;
            a.hasOwnProperty("identifier") && (d = a.identifier);
            this.onTouchEnd(b.x, b.y, d)
        }
        ;
        a.prototype.getLocation = function(a, d) {
            var c = document.documentElement, g = window, f, h;
            "function" === typeof a.getBoundingClientRect ? (h = a.getBoundingClientRect(),
            f = h.left,
            h = h.top) : h = f = 0;
            f += g.pageXOffset - c.clientLeft;
            h += g.pageYOffset - c.clientTop;
            null  != d.pageX ? (c = d.pageX,
            g = d.pageY) : (f -= document.body.scrollLeft,
            h -= document.body.scrollTop,
            c = d.clientX,
            g = d.clientY);
            var l = b.Point.identity;
            l.x = (c - f) / b.StageDelegate.getInstance().getScaleX();
            l.y = (g - h) / b.StageDelegate.getInstance().getScaleY();
            return l
        }
        ;
        return a
    }
    (b.TouchContext);
    b.HTML5TouchContext = c;
    c.prototype.__class__ = "egret.HTML5TouchContext"
}
)(egret || (egret = {}));
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(d) {
        function a() {
            d.call(this);
            this._hasListeners = !1;
            this._inputType = "";
            this._isShow = !1;
            this.textValue = "";
            this._height = this._width = 0;
            this._styleInfoes = {};
            var a = b.StageDelegate.getInstance().getScaleX()
              , c = b.StageDelegate.getInstance().getScaleY()
              , m = b.Browser.getInstance().$new("div");
            m.position.x = 0;
            m.position.y = 0;
            m.scale.x = a;
            m.scale.y = c;
            m.transforms();
            m.style[egret_dom.getTrans("transformOrigin")] = "0% 0% 0px";
            this.div = m;
            c = b.MainContext.instance.stage;
            a = c.stageWidth;
            c = c.stageHeight;
            m = new b.Shape;
            m.width = a;
            m.height = c;
            m.touchEnabled = !0;
            this._shape = m;
            this.getStageDelegateDiv().appendChild(this.div)
        }
        __extends(a, d);
        a.prototype.getStageDelegateDiv = function() {
            var a = b.Browser.getInstance().$("#StageDelegateDiv");
            a || (a = b.Browser.getInstance().$new("div"),
            a.id = "StageDelegateDiv",
            document.getElementById(b.StageDelegate.canvas_div_name).appendChild(a),
            a.transforms());
            return a
        }
        ;
        a.prototype._setMultiline = function(a) {
            d.prototype._setMultiline.call(this, a);
            this.createInput()
        }
        ;
        a.prototype.callHandler = 
        function(a) {
            a.stopPropagation()
        }
        ;
        a.prototype._add = function() {
            this.div && null  == this.div.parentNode && this.getStageDelegateDiv().appendChild(this.div)
        }
        ;
        a.prototype._remove = function() {
            this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape);
            this.div && this.div.parentNode && this.div.parentNode.removeChild(this.div)
        }
        ;
        a.prototype._addListeners = function() {
            this.inputElement && !this._hasListeners && (this._hasListeners = !0,
            this.inputElement.addEventListener("mousedown", this.callHandler),
            this.inputElement.addEventListener("touchstart", 
            this.callHandler),
            this.inputElement.addEventListener("MSPointerDown", this.callHandler))
        }
        ;
        a.prototype._removeListeners = function() {
            this.inputElement && this._hasListeners && (this._hasListeners = !1,
            this.inputElement.removeEventListener("mousedown", this.callHandler),
            this.inputElement.removeEventListener("touchstart", this.callHandler),
            this.inputElement.removeEventListener("MSPointerDown", this.callHandler))
        }
        ;
        a.prototype.createInput = function() {
            var a = this._multiline ? "textarea" : "input";
            this._inputType != a && (this._inputType = 
            a,
            null  != this.inputElement && (this._removeListeners(),
            this.div.removeChild(this.inputElement)),
            this._multiline ? (a = document.createElement("textarea"),
            a.style.resize = "none") : a = document.createElement("input"),
            this._styleInfoes = {},
            a.type = "text",
            this.inputElement = a,
            this.inputElement.value = "",
            this.div.appendChild(a),
            this._addListeners(),
            this.setElementStyle("width", "0px"),
            this.setElementStyle("border", "none"),
            this.setElementStyle("margin", "0"),
            this.setElementStyle("padding", "0"),
            this.setElementStyle("outline", 
            "medium"),
            this.setElementStyle("verticalAlign", "top"),
            this.setElementStyle("wordBreak", "break-all"),
            this.setElementStyle("overflow", "hidden"))
        }
        ;
        a.prototype._open = function(a, b, d, c) {}
        ;
        a.prototype._setScale = function(a, c) {
            d.prototype._setScale.call(this, a, c);
            var m = b.StageDelegate.getInstance().getScaleX()
              , g = b.StageDelegate.getInstance().getScaleY();
            this.div.scale.x = m * a;
            this.div.scale.y = g * c;
            this.div.transforms()
        }
        ;
        a.prototype.changePosition = function(a, d) {
            var c = b.StageDelegate.getInstance().getScaleX()
              , 
            g = b.StageDelegate.getInstance().getScaleY();
            this.div.position.x = a * c;
            this.div.position.y = d * g;
            this.div.transforms()
        }
        ;
        a.prototype.setStyles = function() {
            this.setElementStyle("fontStyle", this._italic ? "italic" : "normal");
            this.setElementStyle("fontWeight", this._bold ? "bold" : "normal");
            this.setElementStyle("textAlign", this._textAlign);
            this.setElementStyle("fontSize", this._size + "px");
            this.setElementStyle("color", "#000000");
            this.setElementStyle("width", this._width + "px");
            this.setElementStyle("height", this._height + 
            "px");
            this.setElementStyle("border", "1px solid red");
            this.setElementStyle("display", "block")
        }
        ;
        a.prototype._show = function() {
            b.MainContext.instance.stage._changeSizeDispatchFlag = !1;
            0 < this._maxChars ? this.inputElement.setAttribute("maxlength", this._maxChars) : this.inputElement.removeAttribute("maxlength");
            this._isShow = !0;
            var a = this._getText();
            this.inputElement.value = a;
            var d = this;
            this.inputElement.oninput = function() {
                d.textValue = d.inputElement.value;
                d.dispatchEvent(new b.Event("updateText"))
            }
            ;
            this.setStyles();
            this.inputElement.focus();
            this.inputElement.selectionStart = a.length;
            this.inputElement.selectionEnd = a.length;
            this._shape && null  == this._shape.parent && b.MainContext.instance.stage.addChild(this._shape)
        }
        ;
        a.prototype._hide = function() {
            b.MainContext.instance.stage._changeSizeDispatchFlag = !0;
            if (null  != this.inputElement) {
                this._isShow = !1;
                this.inputElement.oninput = function() {}
                ;
                this.setElementStyle("border", "none");
                this.setElementStyle("display", "none");
                this.inputElement.value = "";
                this.setElementStyle("width", "0px");
                window.scrollTo(0, 0);
                var a = this;
                b.setTimeout(function() {
                    a.inputElement.blur();
                    window.scrollTo(0, 0)
                }
                , this, 50);
                this._shape && this._shape.parent && this._shape.parent.removeChild(this._shape)
            }
        }
        ;
        a.prototype._getText = function() {
            this.textValue || (this.textValue = "");
            return this.textValue
        }
        ;
        a.prototype._setText = function(a) {
            this.textValue = a;
            this.resetText()
        }
        ;
        a.prototype.resetText = function() {
            this.inputElement && (this.inputElement.value = this.textValue)
        }
        ;
        a.prototype._setWidth = function(a) {
            this._width = a
        }
        ;
        a.prototype._setHeight = 
        function(a) {
            this._height = a
        }
        ;
        a.prototype.setElementStyle = function(a, b) {
            this.inputElement && this._styleInfoes[a] != b && (this.inputElement.style[a] = b,
            this._styleInfoes[a] = b)
        }
        ;
        return a
    }
    (b.StageText);
    b.HTML5StageText = c;
    c.prototype.__class__ = "egret.HTML5StageText"
}
)(egret || (egret = {}));
egret.StageText.create = function() {
    return new egret.HTML5StageText
}
;
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , BasePanel = function(b) {
    function c(d, a) {
        void 0 === d && (d = "assets");
        void 0 === a && (a = null );
        b.call(this);
        this.h = this.w = 0;
        this.assets = RES.getRes(d);
        this.w = GameConfig.curWidth();
        this.h = GameConfig.curHeight();
        this.initPanel(a)
    }
    __extends(c, b);
    c.prototype.initPanel = function(b) {}
    ;
    c.prototype.initData = function() {}
    ;
    c.prototype.onEnter = function() {}
    ;
    c.prototype.onExit = function() {}
    ;
    c.prototype.closePanel = function() {
        PopUpManager.removePopUp(this)
    }
    ;
    c.prototype.getWidth = function() {
        return this.width
    }
    ;
    c.prototype.getHeight = function() {
        return this.height
    }
    ;
    return c
}
(egret.DisplayObjectContainer);
BasePanel.prototype.__class__ = "BasePanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , WaitPanel = function(b) {
    function c(d) {
        void 0 === d && (d = 1);
        b.call(this);
        this.bg = new egret.Sprite;
        this.cartoonType = "loadingCircle1";
        this.h = this.w = 0;
        switch (d) {
        case 1:
            this.cartoonType = "loadingCircle1";
            break;
        case 2:
            this.cartoonType = "loadingCircle2"
        }
        //this.mySheet = RES.getRes("reward");
        this.createView()
    }
    __extends(c, b);
    c.prototype.createView = function() {
        this.w = 
        egret.MainContext.instance.stage.stageWidth;
        this.h = egret.MainContext.instance.stage.stageHeight;
        this.bg.graphics.beginFill(0, 0.2);
        this.bg.graphics.drawRect(0, 0, this.w, this.h);
        this.bg.graphics.endFill();
        this.bg.width = this.w;
        this.bg.height = this.h;
        this.addChild(this.bg);
        this.touchEnabled = !0;
        this.waitImg = new egret.Bitmap;
        this.waitImg.anchorX = 0.5;
        this.waitImg.anchorY = 0.5;
        this.waitImg.texture = RES.getRes("waiting");//this.mySheet.getTexture(this.cartoonType);
        this.waitImg.x = this.w / 2;
        this.waitImg.y = this.h / 2;
        this.addChild(this.waitImg);
        EffectUtils.rotationEffect(this.waitImg, 1E3)
    }
    ;
    return c
}
(egret.Sprite);
WaitPanel.prototype.__class__ = "WaitPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , VerticalTipsPanel = function(b) {
    function c(d) {
        void 0 === d && (d = !1);
        b.call(this);
        this.bg = new egret.Sprite;
        this.h = this.w = 0;
        this.needExchange = !1;
        this.needExchange = d;
        this.createView()
    }
    __extends(c, b);
    c.prototype.createView = function() {
        this.w = egret.MainContext.instance.stage.stageWidth;
        this.h = egret.MainContext.instance.stage.stageHeight;
        this.textField = 
        new egret.TextField;
        this.textField.size = 36;
        this.textField.textColor = 16777215;
        this.textField.bold = !0;
        this.textField.stroke = 1;
        this.textField.strokeColor = 0;
        this.addChild(this.textField);
        this.textField.width = 480;
        this.textField.textAlign = "center";
        this.textField.text = "\u4eb2\uff0c\u8bf7\u5f00\u542f\u624b\u673a\u6a2a\u5c4f\u4f53\u9a8c\u54e6\uff01";
        this.textField.x = this.needExchange ? 4 : this.w / 2 - this.textField.width / 2;
        this.textField.y = this.h / 2 - this.textField.height / 2 - 10
    }
    ;
    return c
}
(egret.Sprite);
VerticalTipsPanel.prototype.__class__ = "VerticalTipsPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , AlertPanel = function(b) {
    function c(d, a, c, k, m) {
        void 0 === d && (d = "");
        void 0 === a && (a = "");
        void 0 === c && (c = null );
        void 0 === k && (k = null );
        void 0 === m && (m = 1);
        b.call(this);
        this.descStr = this.titleStr = "";
        this.type = 1;
        this.titleStr = d;
        this.descStr = a;
        this.cancelFun = c;
        this.acceptFun = k;
        this.type = m;
        this.initUI()
    }
    __extends(c, b);
    c.prototype.initUI = function() {
        this.bg = 
        new egret.Bitmap;
        this.bg.texture = this.assets.getTexture("alertBg");
        this.addChild(this.bg);
        this.bg.touchEnabled = !0;
        "" != this.titleStr && (this.titleTF = new egret.TextField,
        this.addChild(this.titleTF),
        this.titleTF.textColor = 0,
        this.titleTF.size = 24,
        this.titleTF.width = this.bg.width,
        this.titleTF.height = 24,
        this.titleTF.y = 23,
        this.titleTF.textAlign = "center",
        this.titleTF.text = this.titleStr);
        "" != this.descStr && (this.descTF = new egret.TextField,
        this.addChild(this.descTF),
        this.descTF.textColor = 0,
        this.descTF.size = 20,
        this.descTF.width = this.bg.width,
        this.descTF.height = 24,
        this.descTF.y = this.bg.height / 2 - this.descTF.height / 2 + 10,
        this.descTF.textAlign = "center",
        this.descTF.text = this.descStr);
        var b = this
          , a = function(a) {
            null  != b.cancelFun && b.cancelFun();
            Global.dispatchEvent(MainNotify.closeAlertNotify)
        }
        ;
        this.acceptBtn = new EButton(this,"acceptBtn",function(a) {
            null  != b.acceptFun && b.acceptFun();
            Global.dispatchEvent(MainNotify.closeAlertNotify)
        }
        );
        this.addChild(this.acceptBtn);
        1 == this.type ? this.acceptBtn.x = this.bg.width / 2 - this.acceptBtn.width / 
        2 : (this.cancelBtn = new EButton(this,"cancelBtn",a),
        this.cancelBtn.x = 110,
        this.cancelBtn.y = this.bg.height - this.cancelBtn.height / 2 - 10,
        this.addChild(this.cancelBtn),
        this.acceptBtn.x = this.bg.width - this.acceptBtn.width - 60 - 50);
        this.acceptBtn.y = this.bg.height - this.acceptBtn.height / 2 - 10
    }
    ;
    c.prototype.getWidth = function() {
        return this.bg.width
    }
    ;
    c.prototype.getHeight = function() {
        return this.bg.height
    }
    ;
    return c
}
(BasePanel);
AlertPanel.prototype.__class__ = "AlertPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , ShareIconPanel = function(b) {
    function c() {
        b.call(this, "socialIcon");
        this.bg = new egret.Sprite;
        this.shareIconRender = new ShareIconRender;
        this.initUI()
    }
    __extends(c, b);
    c.prototype.initUI = function() {
        this.bg.graphics.beginFill(0, 0.5);
        this.bg.graphics.drawRect(0, 0, this.w, this.h);
        this.bg.graphics.endFill();
        this.bg.width = this.w;
        this.bg.height = this.h;
        this.addChild(this.bg);
        this.bg.alpha = 0;
        this.bg.touchEnabled = !0;
        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBgBtnTouchTap, this);
        egret.Tween.get(this.bg).to({
            alpha: 1
        }, 300);
        this.shareIconRender = new ShareIconRender;
        this.shareIconRender.y = this.h;
        this.addChild(this.shareIconRender);
        egret.Tween.get(this.shareIconRender).to({
            y: this.h - this.shareIconRender.height + 60
        }, 300, egret.Ease.backOut);
        this.descTF = new egret.TextField;
        this.descTF.size = 24;
        this.descTF.height = 140;
        this.descTF.width = 230;
        this.descTF.lineSpacing = 
        10;
        this.descTF.text = "\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2\n\u5c06\u5b83\u53d1\u9001\u7ed9\u6307\u5b9a\u670b\u53cb\n\u6216\u5206\u4eab\u5230\u670b\u53cb\u5708";
        this.descTF.x = this.w - this.descTF.width - 40;
        this.descTF.y = 120;
        this.descTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.descTF);
        this.descTF.alpha = 0;
        this.arrowImg = new egret.Bitmap;
        this.arrowImg.texture = this.assets.getTexture("arrow");
        this.arrowImg.x = this.w - this.arrowImg.width - 30;
        this.arrowImg.y = 20;
        this.addChild(this.arrowImg);
        this.arrowImg.alpha = 
        0;
        Global.addEventListener(MainNotify.updateShareNotify, this.onUpdateShare, this)
    }
    ;
    c.prototype.onBgBtnTouchTap = function() {
        this.descTF.alpha = 0;
        this.arrowImg.alpha = 0;
        egret.Tween.get(this.bg).to({
            alpha: 0
        }, 150).call(function() {
            Global.dispatchEvent(MainNotify.closeShareNotify)
        }
        , this);
        egret.Tween.get(this.shareIconRender).to({
            y: this.h
        }, 300)
    }
    ;
    c.prototype.onUpdateShare = function(b) {
        var a = GameConfig.platformType();
        b = b.param;
        switch (a) {
        case "micromessenger":
            "micromessenger" == b ? (this.descTF.text = "\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2\n\u5c06\u5b83\u53d1\u9001\u7ed9\u6307\u5b9a\u670b\u53cb\n\u6216\u5206\u4eab\u5230\u670b\u53cb\u5708",
            this.descTF.x = this.w - this.descTF.width - 40,
            this.descTF.y = 120,
            egret.Tween.get(this.descTF).to({
                alpha: 1
            }, 150),
            egret.Tween.get(this.arrowImg).to({
                alpha: 1
            }, 150)) : (Global.shareUtils(b),
            egret.Tween.get(this.bg).to({
                alpha: 0
            }, 150));
            break;
        case "qzone":
            "micromessenger" == b ? (EffectUtils.showTips("\u62b1\u6b49\uff0c\u6682\u4e0d\u652f\u6301\u4ece\u7a7a\u95f4\u76f4\u63a5\u5206\u4eab\u5230\u5fae\u4fe1\uff01"),
            egret.Tween.get(this.bg).to({
                alpha: 0
            }, 150)) : "qzone" == b ? (this.descTF.text = "\u9000\u51fa\u5e94\u7528\u540e\n\u4ece\u5168\u90e8\u52a8\u6001\u4e2d\u8f6c\u53d1\u5427",
            this.descTF.x = this.w / 2 - this.descTF.width / 2,
            this.descTF.y = this.h / 2 - this.descTF.height / 2,
            egret.Tween.get(this.descTF).to({
                alpha: 1
            }, 150)) : (Global.shareUtils(b),
            egret.Tween.get(this.bg).to({
                alpha: 0
            }, 150));
            break;
        case "weibo":
            "micromessenger" == b ? (this.descTF.text = "\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2\n\u5c06\u5b83\u53d1\u9001\u7ed9\u6307\u5b9a\u670b\u53cb\n\u6216\u5206\u4eab\u5230\u670b\u53cb\u5708",
            this.descTF.x = this.w - this.descTF.width - 40,
            this.descTF.y = 120,
            egret.Tween.get(this.descTF).to({
                alpha: 1
            }, 150),
            egret.Tween.get(this.arrowImg).to({
                alpha: 1
            }, 150)) : "weibo" == b ? (this.descTF.text = "\u9000\u51fa\u5e94\u7528\u540e\n\u8f6c\u53d1\u6b63\u6587\n\u4e0e\u670b\u53cb\u4e00\u5757\u73a9\u5427",
            this.descTF.x = this.w / 2 - this.descTF.width / 2,
            this.descTF.y = this.h / 2 - this.descTF.height / 2,
            egret.Tween.get(this.descTF).to({
                alpha: 1
            }, 150)) : (Global.shareUtils(b),
            egret.Tween.get(this.bg).to({
                alpha: 0
            }, 150));
            break;
        case "qq":
            "micromessenger" == b || "qzone" == b || "qq" == b ? (this.descTF.text = "\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2\n\u5c06\u5b83\u53d1\u9001\u7ed9\u670b\u53cb\n\u4e0e\u670b\u53cb\u4e00\u5757\u73a9\u5427",
            this.descTF.x = this.w - this.descTF.width - 40,
            this.descTF.y = 120,
            egret.Tween.get(this.descTF).to({
                alpha: 1
            }, 150),
            egret.Tween.get(this.arrowImg).to({
                alpha: 1
            }, 150)) : (Global.shareUtils(b),
            egret.Tween.get(this.bg).to({
                alpha: 0
            }, 150));
            break;
        case "renren":
            "micromessenger" == b ? (EffectUtils.showTips("\u62b1\u6b49\uff0c\u6682\u4e0d\u652f\u6301\u4ece\u7a7a\u95f4\u76f4\u63a5\u5206\u4eab\u5230\u5fae\u4fe1\uff01"),
            egret.Tween.get(this.bg).to({
                alpha: 0
            }, 150)) : "renren" == b ? (this.descTF.text = "\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2\n\u5c06\u5b83\u53d1\u9001\u7ed9\u670b\u53cb\n\u4e0e\u670b\u53cb\u4e00\u5757\u73a9\u5427",
            this.descTF.x = this.w - this.descTF.width - 40,
            this.descTF.y = 120,
            egret.Tween.get(this.descTF).to({
                alpha: 1
            }, 150),
            egret.Tween.get(this.arrowImg).to({
                alpha: 1
            }, 150)) : (Global.shareUtils(b),
            egret.Tween.get(this.bg).to({
                alpha: 0
            }, 150));
            break;
        case "txmicroblog":
            "micromessenger" == b || "qzone" == b || "qq" == b ? (this.descTF.text = "\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2\n\u5c06\u5b83\u53d1\u9001\u7ed9\u670b\u53cb\n\u4e0e\u670b\u53cb\u4e00\u5757\u73a9\u5427",
            this.descTF.x = this.w - this.descTF.width - 40,
            this.descTF.y = 120,
            egret.Tween.get(this.descTF).to({
                alpha: 1
            }, 
            150),
            egret.Tween.get(this.arrowImg).to({
                alpha: 1
            }, 150)) : (Global.shareUtils(b),
            egret.Tween.get(this.bg).to({
                alpha: 0
            }, 150));
            break;
        case "douban":
            "micromessenger" == b ? (EffectUtils.showTips("\u62b1\u6b49\uff0c\u6682\u4e0d\u652f\u6301\u4ece\u7a7a\u95f4\u76f4\u63a5\u5206\u4eab\u5230\u5fae\u4fe1\uff01"),
            egret.Tween.get(this.bg).to({
                alpha: 0
            }, 150)) : (this.descTF.text = "\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2\n\u5c06\u5b83\u53d1\u9001\u7ed9\u670b\u53cb\n\u4e0e\u670b\u53cb\u4e00\u5757\u73a9\u5427",
            this.descTF.x = this.w - 
            this.descTF.width - 40,
            this.descTF.y = 120,
            egret.Tween.get(this.descTF).to({
                alpha: 1
            }, 150),
            egret.Tween.get(this.arrowImg).to({
                alpha: 1
            }, 150));
            break;
        case "other":
            Global.shareUtils(b),
            egret.Tween.get(this.bg).to({
                alpha: 0
            }, 150)
        }
        egret.Tween.get(this.shareIconRender).to({
            y: this.h
        }, 300)
    }
    ;
    return c
}
(BasePanel);
ShareIconPanel.prototype.__class__ = "ShareIconPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , GameScene = function(b) {
    function c() {
        b.call(this);
        this.uiLayer = new egret.DisplayObjectContainer;
        this.topLayer = new egret.DisplayObjectContainer;
        this.effectLayer = new egret.DisplayObjectContainer;
        this.mainUILayer = new egret.DisplayObjectContainer;
        this.maskLayer = new egret.DisplayObjectContainer;
        this.rotationTipsLayer = new egret.DisplayObjectContainer;
        this.init()
    }
    __extends(c, b);
    c.prototype.init = function() {
        this.addChild(this.uiLayer);
        this.addChild(this.topLayer);
        this.addChild(this.effectLayer);
        this.addChild(this.mainUILayer);
        this.addChild(this.maskLayer);
        this.addChild(this.rotationTipsLayer)
    }
    ;
    return c
}
(egret.DisplayObjectContainer);
GameScene.prototype.__class__ = "GameScene";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , CFormAlertPanel = function(b) {
    function c(d) {
        void 0 === d && (d = "");
        b.call(this, "reward", d)
    }
    __extends(c, b);
    c.prototype.initPanel = function(b) {
        this._str = b;
        this.bg = new egret.Sprite;
        this.bg.graphics.beginFill(0, 0);
        this.bg.graphics.drawRect(0, 0, 298, 200);
        this.bg.graphics.endFill();
        this.bg.width = 298;
        this.bg.height = 200;
        this.addChild(this.bg);
        this.touchEnabled = 
        !0;
        this.alertBgImg = new egret.Bitmap;
        this.alertBgImg.texture = this.assets.getTexture("alertBgImg");
        this.alertBgImg.x = this.bg.width / 2 - this.alertBgImg.width / 2;
        this.alertBgImg.y = 33;
        this.addChild(this.alertBgImg);
        this.alertTitleImg = new egret.Bitmap;
        this.alertTitleImg.texture = this.assets.getTexture("alertTitleImg");
        this.alertTitleImg.x = this.bg.width / 2 - this.alertTitleImg.width / 2;
        this.alertTitleImg.y = 0;
        this.addChild(this.alertTitleImg);
        this.descTF = new ETextField;
        this.descTF.size = 22;
        this.descTF.textAlign = egret.HorizontalAlign.CENTER;
        this.descTF.width = 290;
        this.descTF.setText("" + b);
        this.descTF.x = this.bg.width / 2 - this.descTF.width / 2;
        this.descTF.y = 90;
        this.addChild(this.descTF);
        this.sureBtn = new EButton(this,"sureBtn",null ,"",30,1,"reward");
        this.sureBtn.x = this.bg.width / 2 - this.sureBtn.width / 2;
        this.sureBtn.y = 150;
        this.addChild(this.sureBtn);
        this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSureBtnTouchTap, this)
    }
    ;
    c.prototype.onSureBtnTouchTap = function(b) {
        Global.dispatchEvent(PlatformNotify.closeCFormAlertPanelNotify, this._str, 
        !1)
    }
    ;
    return c
}
(BasePanel);
CFormAlertPanel.prototype.__class__ = "CFormAlertPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , CSelectAgePanel = function(b) {
    function c() {
        b.call(this, "reward")
    }
    __extends(c, b);
    c.prototype.initPanel = function() {
        this.bg = new egret.Sprite;
        this.bg.graphics.beginFill(0, 0);
        this.bg.graphics.drawRect(0, 0, 409, 495);
        this.bg.graphics.endFill();
        this.bg.width = 409;
        this.bg.height = 495;
        this.addChild(this.bg);
        this.touchEnabled = !0;
        this.ageBgImg = new egret.Bitmap;
        this.ageBgImg.texture = this.assets.getTexture("ageBgImg");
        this.ageBgImg.x = this.bg.width / 2 - this.ageBgImg.width / 2;
        this.ageBgImg.y = 0;
        this.addChild(this.ageBgImg);
        var b = new egret.Sprite;
        b.x = 16;
        b.y = 20;
        this.addChild(b);
        var a = new egret.Sprite;
        a.x = 182;
        a.y = 20;
        this.addChild(a);
        var c = new egret.Sprite;
        c.x = 290;
        c.y = 20;
        this.addChild(c);
        for (var k = "", m = 0; 66 > m; m++)
            k = 65 != m ? k + ("" + (1950 + m) + "\n") : k + ("" + (1950 + m));
        for (var g = "", m = 0; 12 > m; m++)
            g = 12 != m ? g + ("" + (1 + m) + "\n") : g + ("" + (1 + m));
        for (var f = "", m = 0; 31 > m; m++)
            f = 30 != m ? f + ("" + (1 + 
            m) + "\n") : f + ("" + (1 + m));
        this.timeTF1 = new ETextField;
        this.timeTF1.size = 28;
        this.timeTF1.textColor = 3261687;
        this.timeTF1.width = 119;
        this.timeTF1.multiline = !0;
        this.timeTF1.lineSpacing = 17;
        this.timeTF1.setText(k);
        this.timeTF1.textAlign = egret.HorizontalAlign.CENTER;
        b.addChild(this.timeTF1);
        this.year = 1991;
        this.timeTF1.y = this.getTime1Y(this.year);
        this.timeTF2 = new ETextField;
        this.timeTF2.size = 28;
        this.timeTF2.textColor = 3261687;
        this.timeTF2.width = 68;
        this.timeTF2.multiline = !0;
        this.timeTF2.lineSpacing = 17;
        this.timeTF2.setText(g);
        this.timeTF2.textAlign = egret.HorizontalAlign.CENTER;
        a.addChild(this.timeTF2);
        this.month = 8;
        this.timeTF2.y = this.getTime2Y(this.month);
        this.timeTF3 = new ETextField;
        this.timeTF3.size = 28;
        this.timeTF3.textColor = 3261687;
        this.timeTF3.width = 68;
        this.timeTF3.multiline = !0;
        this.timeTF3.lineSpacing = 17;
        this.timeTF3.setText(f);
        this.timeTF3.textAlign = egret.HorizontalAlign.CENTER;
        c.addChild(this.timeTF3);
        this.day = 30;
        this.timeTF3.y = this.getTime3Y(this.day);
        this.sureBtn = new EButton(this,"sureBtn",null ,"",30,1,"reward");
        this.sureBtn.x = this.bg.width / 2 - this.sureBtn.width / 2;
        this.sureBtn.y = 430;
        this.addChild(this.sureBtn);
        this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSureBtnTouchTap, this);
        k = new egret.Rectangle(0,0,480,395);
        b.mask = k;
        a.mask = k;
        c.mask = k;
        b.touchEnabled = !0;
        a.touchEnabled = !0;
        c.touchEnabled = !0;
        b.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onSp1TouchBegin, this);
        b.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onSp1TouchMove, this);
        b.addEventListener(egret.TouchEvent.TOUCH_END, this.onSp1TouchEnd, 
        this);
        b.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onSp1TouchEnd, this);
        a.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onSp2TouchBegin, this);
        a.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onSp2TouchMove, this);
        a.addEventListener(egret.TouchEvent.TOUCH_END, this.onSp2TouchEnd, this);
        a.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onSp2TouchEnd, this);
        c.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onSp3TouchBegin, this);
        c.addEventListener(egret.TouchEvent.TOUCH_MOVE, 
        this.onSp3TouchMove, this);
        c.addEventListener(egret.TouchEvent.TOUCH_END, this.onSp3TouchEnd, this);
        c.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onSp3TouchEnd, this)
    }
    ;
    c.prototype.onSp1TouchBegin = function(b) {
        this.beginY1 = b.stageY;
        this.startY1 = this.timeTF1.y
    }
    ;
    c.prototype.onSp1TouchMove = function(b) {
        b = b.stageY - this.beginY1;
        var a = this.startY1 + b;
        a < this.getTime1Y(2015) ? this.timeTF1.y = this.getTime1Y(2015) : a > this.getTime1Y(1950) ? this.timeTF1.y = this.getTime1Y(1950) : this.timeTF1.y = this.startY1 + 
        b
    }
    ;
    c.prototype.onSp1TouchEnd = function(b) {
        this.year = 1950;
        for (b = 0; 66 > b; b++) {
            var a = 1950 + b, c, k;
            c = Math.abs(this.getTime1Y(a) - this.timeTF1.y);
            k = Math.abs(this.getTime1Y(this.year) - this.timeTF1.y);
            c <= k && (this.year = a)
        }
        egret.Tween.get(this.timeTF1).to({
            y: this.getTime1Y(this.year)
        }, 300)
    }
    ;
    c.prototype.getTime1Y = function(b) {
        void 0 === b && (b = 1950);
        return 180 - 45 * (b - 1950)
    }
    ;
    c.prototype.onSp2TouchBegin = function(b) {
        this.beginY2 = b.stageY;
        this.startY2 = this.timeTF2.y
    }
    ;
    c.prototype.onSp2TouchMove = function(b) {
        b = b.stageY - this.beginY2;
        var a = this.startY2 + b;
        a < this.getTime2Y(12) ? this.timeTF2.y = this.getTime2Y(12) : a > this.getTime2Y(1) ? this.timeTF2.y = this.getTime2Y(1) : this.timeTF2.y = this.startY2 + b
    }
    ;
    c.prototype.onSp2TouchEnd = function(b) {
        this.month = 1;
        for (b = 0; 12 > b; b++) {
            var a = 1 + b, c, k;
            c = Math.abs(this.getTime2Y(a) - this.timeTF2.y);
            k = Math.abs(this.getTime2Y(this.month) - this.timeTF2.y);
            c <= k && (this.month = a)
        }
        egret.Tween.get(this.timeTF2).to({
            y: this.getTime2Y(this.month)
        }, 300)
    }
    ;
    c.prototype.getTime2Y = function(b) {
        void 0 === b && (b = 1);
        return 180 - 45 * (b - 
        1)
    }
    ;
    c.prototype.onSp3TouchBegin = function(b) {
        this.beginY3 = b.stageY;
        this.startY3 = this.timeTF3.y
    }
    ;
    c.prototype.onSp3TouchMove = function(b) {
        b = b.stageY - this.beginY3;
        var a = this.startY3 + b;
        a < this.getTime3Y(31) ? this.timeTF3.y = this.getTime3Y(31) : a > this.getTime3Y(1) ? this.timeTF3.y = this.getTime3Y(1) : this.timeTF3.y = this.startY3 + b
    }
    ;
    c.prototype.onSp3TouchEnd = function(b) {
        this.day = 1;
        for (b = 0; 31 > b; b++) {
            var a = 1 + b, c, k;
            c = Math.abs(this.getTime3Y(a) - this.timeTF3.y);
            k = Math.abs(this.getTime3Y(this.day) - this.timeTF3.y);
            c <= k && 
            (this.day = a)
        }
        egret.Tween.get(this.timeTF3).to({
            y: this.getTime3Y(this.day)
        }, 300)
    }
    ;
    c.prototype.getTime3Y = function(b) {
        void 0 === b && (b = 1);
        return 180 - 45 * (b - 1)
    }
    ;
    c.prototype.onSureBtnTouchTap = function(b) {
        b = this.year + "\u5e74" + this.month + "\u6708" + this.day + "\u65e5";
        Global.dispatchEvent(PlatformNotify.closeCSelectAgePanelNotify, null , !1);
        Global.dispatchEvent("updateFormAge", b, !1)
    }
    ;
    return c
}
(BasePanel);
CSelectAgePanel.prototype.__class__ = "CSelectAgePanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , FialedPanel = function(b) {
    function c() {
        b.call(this, "reward")
    }
    __extends(c, b);
    c.prototype.initPanel = function() {
        this.bg = new egret.Bitmap;
        this.bg.texture = this.assets.getTexture("failedImg");
        this.addChild(this.bg);
        this.tipsTF = new ETextField;
        this.tipsTF.size = 30;
        this.tipsTF.width = 350;
        this.tipsTF.textAlign = egret.HorizontalAlign.CENTER;
        this.tipsTF.setText(PlatformData.notGetGiftTips);
        this.tipsTF.x = this.bg.width / 2 - this.tipsTF.width / 2;
        this.tipsTF.y = 48;
        this.tipsTF.strokeColor = 0;
        this.tipsTF.stroke = 1;
        this.tipsTF.lineSpacing = 10;
        this.addChild(this.tipsTF);
        this.sureBtn = new EButton(this,"sureBtn",null ,"",30,1,"reward");
        this.sureBtn.x = this.bg.width / 2 - this.sureBtn.width / 2;
        this.sureBtn.y = 138;
        this.addChild(this.sureBtn);
        this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSureBtnTouchTap, this)
    }
    ;
    c.prototype.initEffect = function() {}
    ;
    c.prototype.onSureBtnTouchTap = function(b) {
        Global.dispatchEvent(PlatformNotify.closeFialedPanelNotify, 
        null , !1)
    }
    ;
    return c
}
(BasePanel);
FialedPanel.prototype.__class__ = "FialedPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , PrizePanel = function(b) {
    function c(d) {
        b.call(this, "reward", d);
        this.data = 0;
        this.bg = new egret.Sprite
    }
    __extends(c, b);
    c.prototype.initPanel = function(b) {
        this.data = b;
        this.bg = new egret.Sprite;
        this.bg.graphics.beginFill(16083318, 1);
        this.bg.graphics.drawRect(0, 0, this.w, this.h);
        this.bg.graphics.endFill();
        this.bg.width = this.w;
        this.bg.height = this.h;
        this.addChild(this.bg);
        this.touchEnabled = !0;
        this.choujiangBG = new egret.Bitmap;
        this.choujiangBG.texture = this.assets.getTexture("choujiangBG");
        this.addChild(this.choujiangBG);
        this.prizeTitleTF = new ETextField;
        this.prizeTitleTF.size = 40;
        this.prizeTitleTF.width = 350;
        this.prizeTitleTF.setText("");
        this.prizeTitleTF.x = this.w / 2 - this.prizeTitleTF.width / 2;
        this.prizeTitleTF.y = 58;
        this.prizeTitleTF.strokeColor = 0;
        this.prizeTitleTF.stroke = 1;
        this.prizeTitleTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.prizeTitleTF);
        this.prizeBg = new egret.Bitmap;
        this.prizeBg.texture = this.assets.getTexture("prizeBg");
        this.prizeBg.x = this.w / 2 - this.prizeBg.width / 2;
        this.prizeBg.y = 160;
        this.addChild(this.prizeBg);
        this.prizeImg = new egret.Bitmap;
        this.addChild(this.prizeImg);
        this.duiBtn = new EButton(this,"duiBtn",null ,"",30,1,"reward");
        this.duiBtn.x = this.w / 2 - this.duiBtn.width / 2;
        this.duiBtn.y = this.h - this.duiBtn.height - 50;
        this.addChild(this.duiBtn);
        this.duiBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDuiBtnTouchTap, this);
        this.prizeNameTF = 
        new ETextField;
        this.prizeNameTF.size = 24;
        this.prizeNameTF.width = 400;
        this.prizeNameTF.setText("");
        this.prizeNameTF.x = this.w / 2 - this.prizeNameTF.width / 2;
        this.prizeNameTF.y = this.prizeBg.y + 322 + 150 - 120 - 130;
        this.prizeNameTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.prizeNameTF);
        this.prizeDescTF = new ETextField;
        this.prizeDescTF.size = 24;
        this.prizeDescTF.width = 400;
        this.prizeDescTF.setText("");
        this.prizeDescTF.x = this.w / 2 - this.prizeDescTF.width / 2;
        this.prizeDescTF.y = this.prizeBg.y + 400 + 120 - 120 - 130;
        this.prizeDescTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.prizeDescTF);
        this.initData()
    }
    ;
    c.prototype.initData = function() {
        var b = this
          , a = PlatformData.prizesArr[this.data - 1];
        "" != a.lot_url && null  != a.lot_url && (b.prizeTitleTF.setText(a.lot_desc),
        b.prizeNameTF.setText(a.lot_name),
        b.prizeDescTF.setText(a.lot_winning_tips),
        RES.getResByUrl(a.lot_url, function(a) {
            "" != a && null  != a && (b.prizeImg.texture = a,
            b.prizeImg.width = 130,
            b.prizeImg.height = 130,
            b.prizeImg.x = b.w / 2 - b.prizeImg.width / 2,
            b.prizeImg.y = b.prizeBg.y + 
            58 + 147 - 165)
        }
        , b))
    }
    ;
    c.prototype.onDuiBtnTouchTap = function(b) {
        Global.dispatchEvent(PlatformNotify.openSubmitInfoPanelNotify, null , !1);
        Global.dispatchEvent(PlatformNotify.closePrizePanelNotify, null , !1)
    }
    ;
    return c
}
(BasePanel);
PrizePanel.prototype.__class__ = "PrizePanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , SubmitInfoPanel = function(b) {
    function c() {
        b.call(this, "reward")
    }
    __extends(c, b);
    c.prototype.initPanel = function() {
        this.bgImg = new egret.Bitmap;
        this.bgImg.texture = this.assets.getTexture("bgImg");
        this.addChild(this.bgImg);
        this.bgImg.touchEnabled = !0;
        this.centerBgImg = new egret.Bitmap;
        this.centerBgImg.texture = this.assets.getTexture("centerBgImg");
        this.centerBgImg.x = this.w / 2 - this.centerBgImg.width / 2;
        this.centerBgImg.y = 150;
        this.addChild(this.centerBgImg);
        this.arrowImg = new egret.Bitmap;
        this.arrowImg.texture = this.assets.getTexture("arrowImg");
        this.arrowImg.x = this.w / 2 - this.arrowImg.width / 2;
        this.arrowImg.y = this.centerBgImg.y + this.centerBgImg.height - 1;
        this.addChild(this.arrowImg);
        this.arrowImg.visible = !1;
        this.descTF = new ETextField;
        this.descTF.size = 26;
        this.descTF.width = 350;
        this.descTF.multiline = !0;
        this.descTF.lineSpacing = 10;
        this.descTF.setText(PlatformData.formruledesc);
        this.descTF.x = this.w / 2 - this.descTF.width / 2;
        this.descTF.y = 16;
        this.addChild(this.descTF);
        this.renderArr = [];
        var b = new egret.Sprite;
        b.x = 0;
        b.y = 150;
        this.addChild(b);
        this.sp2 = new egret.Sprite;
        b.addChild(this.sp2);
        for (var a = 0; a < PlatformData.formitems.length; a++) {
            var c = PlatformData.formitems[a].name
              , k = PlatformData.formitems[a].label
              , k = "ite" == c.substr(0, 3) ? "input" == PlatformData.formitems[a].type ? new NormalRender(99,k) : new NormalRender(0,k) : "sex" == c ? new SexRender : "birthday" == c ? new AgeRender : new NormalRender(PlatformData.formHash[c]);
            k.y = this.sp2.height;
            this.sp2.addChild(k);
            this.renderArr.push(k);
            k.keyValue = c
        }
        a = new egret.Rectangle(0,0,480,418);
        b.mask = a;
        400 < this.sp2.height ? (this.arrowImg.visible = !0,
        EffectUtils.blinkEffect(this.arrowImg, 1E3)) : this.arrowImg.visible = !1;
        this.sp2.touchEnabled = !0;
        this.sp2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onSp2TouchBegin, this);
        this.sp2.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onSp2TouchMove, this);
        this.sp2.addEventListener(egret.TouchEvent.TOUCH_END, this.onSp2TouchEnd, this);
        this.sp2.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onSp2TouchEnd, this);
        this.submitBtn = new EButton(this,"submitBtn",null ,"",30,1,"reward");
        this.submitBtn.x = this.w / 2 - this.submitBtn.width / 2;
        this.submitBtn.y = this.h - this.submitBtn.height - 50;
        this.addChild(this.submitBtn);
        this.submitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSubmitBtnTouchTap, this)
    }
    ;
    c.prototype.onSp2TouchBegin = function(b) {
        this.beginY = b.stageY;
        this.startY = this.sp2.y
    }
    ;
    c.prototype.onSp2TouchMove = function(b) {
        b = 
        b.stageY - this.beginY;
        var a = this.startY + b;
        a < -(this.sp2.height - 400) || (this.sp2.y = 0 < a ? 0 : this.startY + b)
    };
    c.prototype.onSp2TouchEnd = function(b) {};
    c.prototype.onSubmitBtnTouchTap = function(b) {};
    return c
}
(BasePanel);
SubmitInfoPanel.prototype.__class__ = "SubmitInfoPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , SubmitSuccessPanel = function(b) {
    function c() {
        b.call(this, "reward")
    }
    __extends(c, b);
    c.prototype.initPanel = function() {
        this.bg = new egret.Bitmap;
        this.bg.texture = this.assets.getTexture("successImg");
        this.addChild(this.bg);
        this.tipsTF = new ETextField;
        this.tipsTF.size = 30;
        this.tipsTF.width = 350;
        this.tipsTF.textAlign = egret.HorizontalAlign.CENTER;
        this.tipsTF.setText(PlatformUtils.getValue("successTips"));
        this.tipsTF.x = this.bg.width / 2 - this.tipsTF.width / 2;
        this.tipsTF.y = 48;
        this.tipsTF.strokeColor = 0;
        this.tipsTF.stroke = 1;
        this.tipsTF.lineSpacing = 10;
        this.addChild(this.tipsTF);
        this.sureBtn = new EButton(this,"sureBtn",null ,"",30,1,"reward");
        this.sureBtn.x = this.bg.width / 2 - this.sureBtn.width / 2;
        this.sureBtn.y = 138;
        this.addChild(this.sureBtn);
        this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSureBtnTouchTap, this)
    }
    ;
    c.prototype.initEffect = function() {}
    ;
    c.prototype.onSureBtnTouchTap = function(b) {
        Global.dispatchEvent(PlatformNotify.closeSubmitSuccessPanelNotify, null , !1);
        Global.dispatchEvent(PlatformNotify.closeSubmitInfoPanelNotify, null , !1);
        Global.dispatchEvent(MainNotify.openGameOverPanelNotify, null , !1)
    }
    ;
    return c
}
(BasePanel);
SubmitSuccessPanel.prototype.__class__ = "SubmitSuccessPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , FaQuanFialedPanel = function(b) {
    function c() {
        b.call(this, "faquan")
    }
    __extends(c, b);
    c.prototype.initPanel = function() {
        this.bg2 = new egret.Bitmap;
        this.bg2.texture = this.assets.getTexture("bg2");
        this.addChild(this.bg2);
        this.failTipsImg = new egret.Bitmap;
        this.failTipsImg.texture = this.assets.getTexture("failTipsImg");
        this.failTipsImg.x = this.w / 2 - 
        this.failTipsImg.width / 2;
        this.failTipsImg.y = 65;
        this.addChild(this.failTipsImg);
        this.descBg = new egret.Bitmap;
        this.descBg.texture = this.assets.getTexture("descBg");
        this.descBg.x = this.w / 2 - this.descBg.width / 2;
        this.descBg.y = this.failTipsImg.y + this.failTipsImg.height + 30;
        this.addChild(this.descBg);
        this.tipsTF = new ETextField;
        this.tipsTF.size = 30;
        this.tipsTF.width = 350;
        this.tipsTF.textAlign = egret.HorizontalAlign.CENTER;
        this.tipsTF.setText(PlatformData.notGetGiftTips);
        this.tipsTF.x = this.bg2.width / 2 - this.tipsTF.width / 
        2;
        this.tipsTF.y = this.descBg.y + 65;
        this.tipsTF.textColor = 16777215;
        this.tipsTF.lineSpacing = 10;
        this.addChild(this.tipsTF);
        this.backBtn = new EButton(this,"backBtn",this.onbackBtnTouchTap,"",30,1,"faquan");
        this.backBtn.x = this.bg2.width / 2 - this.backBtn.width / 2;
        this.backBtn.y = this.descBg.y + this.descBg.height + 120;
        this.addChild(this.backBtn)
    }
    ;
    c.prototype.initEffect = function() {}
    ;
    c.prototype.onbackBtnTouchTap = function(b) {
        Global.dispatchEvent(PlatformNotify.closeFaQuanFialedPanelNotify, null , !1)
    }
    ;
    return c
}
(BasePanel);
FaQuanFialedPanel.prototype.__class__ = "FaQuanFialedPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , FaQuanPrizePanel = function(b) {
    function c(d) {
        b.call(this, "faquan", d);
        this.data = 0;
        this.bg = new egret.Sprite
    }
    __extends(c, b);
    c.prototype.initPanel = function(b) {
        this.data = b;
        this.bg2 = new egret.Bitmap;
        this.bg2.texture = this.assets.getTexture("bg2");
        this.addChild(this.bg2);
        this.failTipsImg = new egret.Bitmap;
        this.failTipsImg.texture = this.assets.getTexture("successImg");
        this.failTipsImg.x = this.w / 2 - this.failTipsImg.width / 2;
        this.failTipsImg.y = 65;
        this.addChild(this.failTipsImg);
        this.descBg = new egret.Bitmap;
        this.descBg.texture = this.assets.getTexture("descBg");
        this.descBg.x = this.w / 2 - this.descBg.width / 2;
        this.descBg.y = this.failTipsImg.y + this.failTipsImg.height + 30;
        this.addChild(this.descBg);
        this.codeBg = new egret.Bitmap;
        this.codeBg.texture = this.assets.getTexture("codeBg");
        this.codeBg.x = this.w / 2 - this.codeBg.width / 2;
        this.codeBg.y = this.descBg.y + 116;
        this.addChild(this.codeBg);
        this.prizeNameTF = new ETextField;
        this.prizeNameTF.textColor = 16777215;
        this.prizeNameTF.size = 25;
        this.prizeNameTF.width = 350;
        this.prizeNameTF.bold = !0;
        this.prizeNameTF.setText("");
        this.prizeNameTF.x = this.bg2.width / 2 - this.prizeNameTF.width / 2;
        this.prizeNameTF.y = this.descBg.y + 38;
        this.prizeNameTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.prizeNameTF);
        this.prizeCodeTF = new ETextField;
        this.prizeCodeTF.textColor = 634098;
        this.prizeCodeTF.size = 25;
        this.prizeCodeTF.width = 320;
        this.prizeCodeTF.bold = !0;
        this.prizeCodeTF.setText("");
        this.prizeCodeTF.x = this.w / 2 - this.prizeCodeTF.width / 2;
        this.prizeCodeTF.y = this.descBg.y + 128;
        this.prizeCodeTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.prizeCodeTF);
        this.prizeDescTF = new ETextField;
        this.prizeDescTF.textColor = 16777215;
        this.prizeDescTF.size = 25;
        this.prizeDescTF.width = 320;
        this.prizeDescTF.setText("");
        this.prizeDescTF.x = this.w / 2 - this.prizeDescTF.width / 2;
        this.prizeDescTF.y = this.descBg.y + this.descBg.height + 28;
        this.prizeDescTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.prizeDescTF);
        this.backBtn = new EButton(this,"backBtn",this.onbackBtnTouchTap,"",30,1,"faquan");
        this.backBtn.x = this.bg2.width / 2 - this.backBtn.width / 2;
        this.backBtn.y = this.prizeDescTF.y + 80;
        this.addChild(this.backBtn);
        this.initData()
    }
    ;
    c.prototype.initData = function() {
        var b = this.data.game_code
          , a = PlatformData.prizesArr[this.data.lot_id - 1];
        this.prizeNameTF.setText(a.lot_name);
        this.prizeCodeTF.setText("" + b);
        this.prizeDescTF.setText(a.lot_winning_tips)
    }
    ;
    c.prototype.onbackBtnTouchTap = function(b) {
        Global.dispatchEvent(PlatformNotify.closeFaQuanPrizePanelNotify, 
        null , !1)
    }
    ;
    return c
}
(BasePanel);
FaQuanPrizePanel.prototype.__class__ = "FaQuanPrizePanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , QuanListPanel = function(b) {
    function c(d) {
        b.call(this, "faquan", d);
        this.data = 0;
        this.bg = new egret.Sprite;
        this.beginY = 0
    }
    __extends(c, b);
    c.prototype.initPanel = function(b) {
        this.data = b;
        this.bg1 = new egret.Bitmap;
        this.bg1.texture = this.assets.getTexture("bg1");
        this.addChild(this.bg1);
        this.closeBtn = new EButton(this,"closeBtn",this.onCloseBtnTouchTap,
        "",30,1,"faquan");
        this.closeBtn.x = this.bg1.width - this.closeBtn.width + 15;
        this.closeBtn.y = 26;
        this.addChild(this.closeBtn);
        b = new egret.Sprite;
        this.addChild(b);
        this.prizeDescTF = new ETextField;
        this.prizeDescTF.size = 18;
        this.prizeDescTF.textColor = 5974289;
        this.prizeDescTF.width = 190;
        this.prizeDescTF.lineSpacing = 10;
        this.prizeDescTF.setText("");
        this.prizeDescTF.textAlign = egret.HorizontalAlign.CENTER;
        b.addChild(this.prizeDescTF);
        this.prizeDescTF2 = new ETextField;
        this.prizeDescTF2.size = 18;
        this.prizeDescTF2.textColor = 
        5974289;
        this.prizeDescTF2.width = 190;
        this.prizeDescTF2.lineSpacing = 10;
        this.prizeDescTF2.setText("");
        this.prizeDescTF2.x = 190;
        this.prizeDescTF2.textAlign = egret.HorizontalAlign.CENTER;
        b.addChild(this.prizeDescTF2);
        this.prizeDescTF3 = new ETextField;
        this.prizeDescTF3.size = 18;
        this.prizeDescTF3.textColor = 5974289;
        this.prizeDescTF3.width = 380;
        this.prizeDescTF3.lineSpacing = 10;
        this.prizeDescTF3.setText("\u60a8\u5f53\u524d\u8fd8\u6ca1\u6709\u4e2d\u5956\u54e6\uff01");
        this.prizeDescTF3.textAlign = egret.HorizontalAlign.CENTER;
        b.addChild(this.prizeDescTF3);
        b.x = this.bg1.width / 2 - 190;
        b.y = 125;
        var a = new egret.Rectangle(0,0,380,360);
        b.mask = a;
        b.touchEnabled = !0;
        b.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onDescTouchBegin, this);
        b.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onDescTouchMove, this);
        b.addEventListener(egret.TouchEvent.TOUCH_END, this.onDescTouchEnd, this);
        this.initData()
    }
    ;
    c.prototype.onDescTouchBegin = function(b) {
        this.beginY = b.stageY
    }
    ;
    c.prototype.onDescTouchMove = function(b) {
        b = b.stageY - this.beginY;
        var a = this.prizeDescTF.y + 
        b;
        a < -(this.prizeDescTF.height - 115) || 0 < a || (this.prizeDescTF.y += b);
        this.prizeDescTF2.y = this.prizeDescTF.y
    }
    ;
    c.prototype.onDescTouchEnd = function(b) {}
    ;
    c.prototype.initData = function() {
        for (var b = PlatformData.myPrizesArr, a = "", c = "", k = 0; k < b.length; k++)
            "1" == b[k].gamecode_status ? k == b.length - 1 ? (a += "<font color=0x8f8f8f>" + b[k].gamecode + "</font>",
            c += "       <font color=0x8f8f8f>" + b[k].lot_name + "</font>") : (a += "<font color=0x8f8f8f>" + b[k].gamecode + "</font>\n",
            c += "       <font color=0x8f8f8f>" + b[k].lot_name + "</font>\n") : 
            k == b.length - 1 ? (a += b[k].gamecode,
            c += "       " + b[k].lot_name) : (a += b[k].gamecode + "\n",
            c += "       " + b[k].lot_name + "\n");
        this.prizeDescTF3.visible = "" == a && "" == c;
        this.prizeDescTF.setText(a);
        this.prizeDescTF2.setText(c)
    }
    ;
    c.prototype.onCloseBtnTouchTap = function(b) {
        Global.dispatchEvent(PlatformNotify.closeQuanListPanelNotify, null , !1)
    }
    ;
    return c
}
(BasePanel);
QuanListPanel.prototype.__class__ = "QuanListPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , FormAlertPanel = function(b) {
    function c(c) {
        void 0 === c && (c = "");
        b.call(this, "form", c)
    }
    __extends(c, b);
    c.prototype.initPanel = function(b) {
        this._str = b;
        this.bg = new egret.Sprite;
        this.bg.graphics.beginFill(0, 0);
        this.bg.graphics.drawRect(0, 0, 298, 200);
        this.bg.graphics.endFill();
        this.bg.width = 298;
        this.bg.height = 200;
        this.addChild(this.bg);
        this.touchEnabled = 
        !0;
        this.alertBgImg = new egret.Bitmap;
        this.alertBgImg.texture = this.assets.getTexture("alertBgImg");
        this.alertBgImg.x = this.bg.width / 2 - this.alertBgImg.width / 2;
        this.alertBgImg.y = 33;
        this.addChild(this.alertBgImg);
        this.alertTitleImg = new egret.Bitmap;
        this.alertTitleImg.texture = this.assets.getTexture("alertTitleImg");
        this.alertTitleImg.x = this.bg.width / 2 - this.alertTitleImg.width / 2;
        this.alertTitleImg.y = 0;
        this.addChild(this.alertTitleImg);
        this.descTF = new ETextField;
        this.descTF.size = 22;
        this.descTF.textAlign = egret.HorizontalAlign.CENTER;
        this.descTF.width = 290;
        this.descTF.setText("" + b);
        this.descTF.x = this.bg.width / 2 - this.descTF.width / 2;
        this.descTF.y = 90;
        this.addChild(this.descTF);
        this.sureBtn = new EButton(this,"sureBtn",null ,"",30,1,"form");
        this.sureBtn.x = this.bg.width / 2 - this.sureBtn.width / 2;
        this.sureBtn.y = 150;
        this.addChild(this.sureBtn);
        this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSureBtnTouchTap, this)
    }
    ;
    c.prototype.onSureBtnTouchTap = function(b) {
        Global.dispatchEvent(PlatformNotify.closeFormAlertPanelNotify, this._str, 
        !1)
    }
    ;
    return c
}
(BasePanel);
FormAlertPanel.prototype.__class__ = "FormAlertPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , FormPanel = function(b) {
    function c() {
        b.call(this, "form")
    }
    __extends(c, b);
    c.prototype.initPanel = function() {
        this.bgImg = new egret.Bitmap;
        this.bgImg.texture = this.assets.getTexture("bgImg");
        this.addChild(this.bgImg);
        this.bgImg.touchEnabled = !0;
        this.centerBgImg = new egret.Bitmap;
        this.centerBgImg.texture = this.assets.getTexture("centerBgImg");
        this.centerBgImg.x = 
        this.w / 2 - this.centerBgImg.width / 2;
        this.centerBgImg.y = 150;
        this.addChild(this.centerBgImg);
        this.arrowImg = new egret.Bitmap;
        this.arrowImg.texture = this.assets.getTexture("arrowImg");
        this.arrowImg.x = this.w / 2 - this.arrowImg.width / 2;
        this.arrowImg.y = this.centerBgImg.y + this.centerBgImg.height - 1;
        this.addChild(this.arrowImg);
        this.arrowImg.visible = !1;
        this.descTF = new ETextField;
        this.descTF.size = 26;
        this.descTF.width = 350;
        this.descTF.multiline = !0;
        this.descTF.lineSpacing = 10;
        this.descTF.setText(PlatformData.formruledesc);
        this.descTF.x = this.w / 2 - this.descTF.width / 2;
        this.descTF.y = 16;
        this.addChild(this.descTF);
        this.renderArr = [];
        var b = new egret.Sprite;
        b.x = 0;
        b.y = 150;
        this.addChild(b);
        this.sp2 = new egret.Sprite;
        b.addChild(this.sp2);
        for (var a = 0; a < PlatformData.formitems.length; a++) {
            var c = PlatformData.formitems[a].name
              , k = PlatformData.formitems[a].label
              , k = "ite" == c.substr(0, 3) ? "input" == PlatformData.formitems[a].type ? new NormalRender(99,k) : new NormalRender(0,k) : "sex" == c ? new SexRender : "birthday" == c ? new AgeRender : new NormalRender(PlatformData.formHash[c]);
            k.y = this.sp2.height;
            this.sp2.addChild(k);
            this.renderArr.push(k);
            k.keyValue = c
        }
        a = new egret.Rectangle(0,0,480,418);
        b.mask = a;
        400 < this.sp2.height ? (this.arrowImg.visible = !0,
        EffectUtils.blinkEffect(this.arrowImg, 1E3)) : this.arrowImg.visible = !1;
        this.sp2.touchEnabled = !0;
        this.sp2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onSp2TouchBegin, this);
        this.sp2.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onSp2TouchMove, this);
        this.sp2.addEventListener(egret.TouchEvent.TOUCH_END, this.onSp2TouchEnd, this);
        this.sp2.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onSp2TouchEnd, this);
        this.submitBtn = new EButton(this,"submitBtn",null ,"",30,1,"form");
        this.submitBtn.x = this.w / 2 - this.submitBtn.width / 2;
        this.submitBtn.y = this.h - this.submitBtn.height - 50;
        this.addChild(this.submitBtn);
        this.submitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSubmitBtnTouchTap, this)
    }
    ;
    c.prototype.onSp2TouchBegin = function(b) {
        this.beginY = b.stageY;
        this.startY = this.sp2.y
    }
    ;
    c.prototype.onSp2TouchMove = function(b) {
        b = b.stageY - 
        this.beginY;
        var a = this.startY + b;
        a < -(this.sp2.height - 400) || (this.sp2.y = 0 < a ? 0 : this.startY + b)
    }
    ;
    c.prototype.onSp2TouchEnd = function(b) {}
    ;
    c.prototype.onSubmitBtnTouchTap = function(b) {
        var a = {};
        b = !0;
        for (var c = 0; c < this.renderArr.length; c++) {
            var k = this.renderArr[c];
            if ("sex" == k.keyValue || "birthday" == k.keyValue)
                a[k.keyValue] = k.getValue();
            else if (k.chargeFun())
                a[k.keyValue] = k.getValue();
            else {
                b = !1;
                break
            }
        }
        var m = this, g = function(b) {};
        b && (Global.addEventListener(PlatformNotify.closeFormAlertPanelNotify, g, this),
        Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, "\u63d0\u4ea4\u6210\u529f\uff01", !1))
    }
    ;
    return c
}
(BasePanel);
FormPanel.prototype.__class__ = "FormPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , SelectAgePanel = function(b) {
    function c() {
        b.call(this, "form")
    }
    __extends(c, b);
    c.prototype.initPanel = function() {
        this.bg = new egret.Sprite;
        this.bg.graphics.beginFill(0, 0);
        this.bg.graphics.drawRect(0, 0, 409, 495);
        this.bg.graphics.endFill();
        this.bg.width = 409;
        this.bg.height = 495;
        this.addChild(this.bg);
        this.touchEnabled = !0;
        this.ageBgImg = new egret.Bitmap;
        this.ageBgImg.texture = this.assets.getTexture("ageBgImg");
        this.ageBgImg.x = this.bg.width / 2 - this.ageBgImg.width / 2;
        this.ageBgImg.y = 0;
        this.addChild(this.ageBgImg);
        var b = new egret.Sprite;
        b.x = 16;
        b.y = 20;
        this.addChild(b);
        var a = new egret.Sprite;
        a.x = 182;
        a.y = 20;
        this.addChild(a);
        var c = new egret.Sprite;
        c.x = 290;
        c.y = 20;
        this.addChild(c);
        for (var k = "", m = 0; 66 > m; m++)
            k = 65 != m ? k + ("" + (1950 + m) + "\n") : k + ("" + (1950 + m));
        for (var g = "", m = 0; 12 > m; m++)
            g = 12 != m ? g + ("" + (1 + m) + "\n") : g + ("" + (1 + m));
        for (var f = "", m = 0; 31 > m; m++)
            f = 30 != m ? f + ("" + (1 + 
            m) + "\n") : f + ("" + (1 + m));
        this.timeTF1 = new ETextField;
        this.timeTF1.size = 28;
        this.timeTF1.textColor = 3261687;
        this.timeTF1.width = 119;
        this.timeTF1.multiline = !0;
        this.timeTF1.lineSpacing = 17;
        this.timeTF1.setText(k);
        this.timeTF1.textAlign = egret.HorizontalAlign.CENTER;
        b.addChild(this.timeTF1);
        this.year = 1991;
        this.timeTF1.y = this.getTime1Y(this.year);
        this.timeTF2 = new ETextField;
        this.timeTF2.size = 28;
        this.timeTF2.textColor = 3261687;
        this.timeTF2.width = 68;
        this.timeTF2.multiline = !0;
        this.timeTF2.lineSpacing = 17;
        this.timeTF2.setText(g);
        this.timeTF2.textAlign = egret.HorizontalAlign.CENTER;
        a.addChild(this.timeTF2);
        this.month = 8;
        this.timeTF2.y = this.getTime2Y(this.month);
        this.timeTF3 = new ETextField;
        this.timeTF3.size = 28;
        this.timeTF3.textColor = 3261687;
        this.timeTF3.width = 68;
        this.timeTF3.multiline = !0;
        this.timeTF3.lineSpacing = 17;
        this.timeTF3.setText(f);
        this.timeTF3.textAlign = egret.HorizontalAlign.CENTER;
        c.addChild(this.timeTF3);
        this.day = 30;
        this.timeTF3.y = this.getTime3Y(this.day);
        this.sureBtn = new EButton(this,"sureBtn",null ,"",30,1,"form");
        this.sureBtn.x = this.bg.width / 2 - this.sureBtn.width / 2;
        this.sureBtn.y = 430;
        this.addChild(this.sureBtn);
        this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSureBtnTouchTap, this);
        k = new egret.Rectangle(0,0,480,395);
        b.mask = k;
        a.mask = k;
        c.mask = k;
        b.touchEnabled = !0;
        a.touchEnabled = !0;
        c.touchEnabled = !0;
        b.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onSp1TouchBegin, this);
        b.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onSp1TouchMove, this);
        b.addEventListener(egret.TouchEvent.TOUCH_END, this.onSp1TouchEnd, 
        this);
        b.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onSp1TouchEnd, this);
        a.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onSp2TouchBegin, this);
        a.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onSp2TouchMove, this);
        a.addEventListener(egret.TouchEvent.TOUCH_END, this.onSp2TouchEnd, this);
        a.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onSp2TouchEnd, this);
        c.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onSp3TouchBegin, this);
        c.addEventListener(egret.TouchEvent.TOUCH_MOVE, 
        this.onSp3TouchMove, this);
        c.addEventListener(egret.TouchEvent.TOUCH_END, this.onSp3TouchEnd, this);
        c.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onSp3TouchEnd, this)
    }
    ;
    c.prototype.onSp1TouchBegin = function(b) {
        this.beginY1 = b.stageY;
        this.startY1 = this.timeTF1.y
    }
    ;
    c.prototype.onSp1TouchMove = function(b) {
        b = b.stageY - this.beginY1;
        var a = this.startY1 + b;
        a < this.getTime1Y(2015) ? this.timeTF1.y = this.getTime1Y(2015) : a > this.getTime1Y(1950) ? this.timeTF1.y = this.getTime1Y(1950) : this.timeTF1.y = this.startY1 + 
        b
    }
    ;
    c.prototype.onSp1TouchEnd = function(b) {
        this.year = 1950;
        for (b = 0; 66 > b; b++) {
            var a = 1950 + b, c, k;
            c = Math.abs(this.getTime1Y(a) - this.timeTF1.y);
            k = Math.abs(this.getTime1Y(this.year) - this.timeTF1.y);
            c <= k && (this.year = a)
        }
        egret.Tween.get(this.timeTF1).to({
            y: this.getTime1Y(this.year)
        }, 300)
    }
    ;
    c.prototype.getTime1Y = function(b) {
        void 0 === b && (b = 1950);
        return 180 - 45 * (b - 1950)
    }
    ;
    c.prototype.onSp2TouchBegin = function(b) {
        this.beginY2 = b.stageY;
        this.startY2 = this.timeTF2.y
    }
    ;
    c.prototype.onSp2TouchMove = function(b) {
        b = b.stageY - this.beginY2;
        var a = this.startY2 + b;
        a < this.getTime2Y(12) ? this.timeTF2.y = this.getTime2Y(12) : a > this.getTime2Y(1) ? this.timeTF2.y = this.getTime2Y(1) : this.timeTF2.y = this.startY2 + b
    }
    ;
    c.prototype.onSp2TouchEnd = function(b) {
        this.month = 1;
        for (b = 0; 12 > b; b++) {
            var a = 1 + b, c, k;
            c = Math.abs(this.getTime2Y(a) - this.timeTF2.y);
            k = Math.abs(this.getTime2Y(this.month) - this.timeTF2.y);
            c <= k && (this.month = a)
        }
        egret.Tween.get(this.timeTF2).to({
            y: this.getTime2Y(this.month)
        }, 300)
    }
    ;
    c.prototype.getTime2Y = function(b) {
        void 0 === b && (b = 1);
        return 180 - 45 * (b - 
        1)
    }
    ;
    c.prototype.onSp3TouchBegin = function(b) {
        this.beginY3 = b.stageY;
        this.startY3 = this.timeTF3.y
    }
    ;
    c.prototype.onSp3TouchMove = function(b) {
        b = b.stageY - this.beginY3;
        var a = this.startY3 + b;
        a < this.getTime3Y(31) ? this.timeTF3.y = this.getTime3Y(31) : a > this.getTime3Y(1) ? this.timeTF3.y = this.getTime3Y(1) : this.timeTF3.y = this.startY3 + b
    }
    ;
    c.prototype.onSp3TouchEnd = function(b) {
        this.day = 1;
        for (b = 0; 31 > b; b++) {
            var a = 1 + b, c, k;
            c = Math.abs(this.getTime3Y(a) - this.timeTF3.y);
            k = Math.abs(this.getTime3Y(this.day) - this.timeTF3.y);
            c <= k && 
            (this.day = a)
        }
        egret.Tween.get(this.timeTF3).to({
            y: this.getTime3Y(this.day)
        }, 300)
    }
    ;
    c.prototype.getTime3Y = function(b) {
        void 0 === b && (b = 1);
        return 180 - 45 * (b - 1)
    }
    ;
    c.prototype.onSureBtnTouchTap = function(b) {
        b = this.year + "\u5e74" + this.month + "\u6708" + this.day + "\u65e5";
        Global.dispatchEvent(PlatformNotify.closeSelectAgePanelNotify, null , !1);
        Global.dispatchEvent("updateFormAge", b, !1)
    }
    ;
    return c
}
(BasePanel);
SelectAgePanel.prototype.__class__ = "SelectAgePanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , NoticePanel = function(b) {
    function c() {
        b.call(this, "rank");
        this.data = 0
    }
    __extends(c, b);
    c.prototype.initPanel = function() {
        this.noticeBg = new egret.Bitmap;
        this.noticeBg.texture = this.assets.getTexture("noticeBg");
        this.addChild(this.noticeBg);
        this.noticeBg.touchEnabled = !0;
        this.noticeTF = new ETextField;
        this.noticeTF.size = 20;
        this.noticeTF.width = 
        300;
        this.noticeTF.textColor = 12013838;
        this.noticeTF.lineSpacing = 10;
        this.noticeTF.setText("\u5bf9\u4e0d\u8d77\uff0c\u672c\u6b21\u6d3b\u52a8\u5df2\u7ed3\u675f\uff01\n\u60a8\u7684\u672c\u6b21\u6210\u7ee9\u5c06\u4e0d\u4f1a\u8ba1\u5165\u6392\u884c\u699c");
        this.noticeTF.x = this.noticeBg.width / 2 - this.noticeTF.width / 2;
        this.noticeTF.y = 40;
        this.noticeTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.noticeTF);
        this.okBtn = new EButton(this,"okBtn",this.onOkBtnTouchTap,"",30,1,"rank");
        this.okBtn.x = this.noticeBg.width / 
        2 - this.okBtn.width / 2;
        this.okBtn.y = 134;
        this.addChild(this.okBtn)
    }
    ;
    c.prototype.onOkBtnTouchTap = function(b) {
        Global.dispatchEvent(PlatformNotify.closeNoticePanelNotify, null , !1)
    }
    ;
    return c
}
(BasePanel);
NoticePanel.prototype.__class__ = "NoticePanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , RankPanel = function(b) {
    function c() {
        b.call(this, "rank");
        this.data = 0
    }
    __extends(c, b);
    c.prototype.initPanel = function() {
        this.rankBg = new egret.Bitmap;
        this.rankBg.texture = this.assets.getTexture("rankBg");
        this.addChild(this.rankBg);
        this.rankBg.touchEnabled = !0;
        this.titleImg = new egret.Bitmap;
        this.titleImg.texture = this.assets.getTexture("titleImg");
        this.titleImg.x = this.w / 2 - this.titleImg.width / 2;
        this.titleImg.y = 36;
        this.addChild(this.titleImg);
        this.backBtn = new EButton(this,"backBtn2",this.onbackBtnTouchTap,"",30,1,"rank");
        this.backBtn.x = 54;
        this.backBtn.y = 620;
        this.addChild(this.backBtn);
        /*
        this.ruleBtn = new EButton(this,"ruleBtn",this.onruleBtnTouchTap,"",30,1,"rank");
        this.ruleBtn.x = this.w - this.ruleBtn.width - 54;
        this.ruleBtn.y = 620;
        this.addChild(this.ruleBtn);
        */
        for (var b = PlatformData.rankArr.my_rank, a = PlatformData.rankArr.total_rank, c = 0; c < a.length + 1; c++) {
            var k = 
            0 == c ? "-1" == "" + b.lot_count ? new RankRenderPanel("\u65e0","" + b.nickname,"\u65e0",!0) : new RankRenderPanel("" + b.ranking,"" + b.nickname,"" + b.lot_count,!0) : new RankRenderPanel("","" + a[c - 1].nickname,"" + a[c - 1].lot_count,!1);
            this.addChild(k);
            k.x = 0;
            k.y = 42 * c + 153
        }
        this.initData()
    }
    ;
    c.prototype.initData = function() {}
    ;
    c.prototype.onbackBtnTouchTap = function(b) {
        Global.dispatchEvent(PlatformNotify.closeRankPanelNotify, null , !1)
    }
    ;
    c.prototype.onruleBtnTouchTap = function(b) {
        Global.dispatchEvent(PlatformNotify.openRankRulePanelNotify, 
        null , !1);
        Global.dispatchEvent(PlatformNotify.closeRankPanelNotify, null , !1)
    }
    ;
    return c
}
(BasePanel);
RankPanel.prototype.__class__ = "RankPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , RankRulePanel = function(b) {
    function c() {
        b.call(this, "rank")
    }
    __extends(c, b);
    c.prototype.initPanel = function() {
        this.ruleBg = new egret.Bitmap;
        this.ruleBg.texture = this.assets.getTexture("ruleBg");
        this.addChild(this.ruleBg);
        this.ruleBg.touchEnabled = !0;
        this.ruleTitle = new egret.Bitmap;
        this.ruleTitle.texture = this.assets.getTexture("ruleTitle");
        this.ruleTitle.x = this.w / 2 - this.ruleTitle.width / 2;
        this.ruleTitle.y = 36;
        this.addChild(this.ruleTitle);
        this.closeBtn = new EButton(this,"closeBtn",this.onCloseBtnTouchTap,"",30,1,"rank");
        this.closeBtn.x = this.ruleBg.width - this.closeBtn.width - 10;
        this.closeBtn.y = 10;
        this.addChild(this.closeBtn);
        this.activityTimeTF = new ETextField;
        this.activityTimeTF.size = 22;
        this.activityTimeTF.width = 480;
        this.activityTimeTF.textColor = 8994305;
        this.activityTimeTF.setText("\u5f00\u59cb\u65f6\u95f4\uff1a" + PlatformData.starttime + 
        "\n\u7ed3\u675f\u65f6\u95f4\uff1a" + PlatformData.endtime);
        this.activityTimeTF.y = 177;
        this.activityTimeTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.activityTimeTF);
        this.activityRuleTF = new ETextField;
        this.activityRuleTF.size = 18;
        this.activityRuleTF.textColor = 3753105;
        this.activityRuleTF.width = 390;
        this.activityRuleTF.lineSpacing = 10;
        this.activityRuleTF.setText(PlatformData.prizeruledesc);
        this.activityRuleTF.x = this.w / 2 - this.activityRuleTF.width / 2;
        this.activityRuleTF.y = 315;
        this.activityRuleTF.textAlign = 
        egret.HorizontalAlign.CENTER;
        this.addChild(this.activityRuleTF);
        this.sp = new egret.Sprite;
        this.sp.y = 420;
        this.addChild(this.sp);
        this.sp2 = new egret.Sprite;
        this.sp2.y = 0;
        this.sp.addChild(this.sp2);
        for (var b = 0; b < PlatformData.prizesArr.length; b++) {
            var a = ""
              , a = PlatformData.prizesArr[b].firstnum == PlatformData.prizesArr[b].lastnum ? "\u83b7\u5956\u540d\u6b21\uff1a\u7b2c" + PlatformData.prizesArr[b].firstnum + "\u540d" : "\u83b7\u5956\u540d\u6b21\uff1a\u7b2c" + PlatformData.prizesArr[b].firstnum + "~" + PlatformData.prizesArr[b].lastnum + 
            "\u540d"
              , a = new GiftRenderPanel(PlatformData.prizesArr[b].lot_url,PlatformData.prizesArr[b].lot_desc,a,PlatformData.prizesArr[b].lot_name);
            this.sp2.addChild(a);
            a.touchEnabled = !0;
            a.y = a.height * b
        }
        this.spHeight = 0;
        b = new egret.Rectangle(0,-10,480,this.h - this.sp.y);
        this.sp.mask = b;
        this.sp.touchEnabled = !0;
        this.sp2.touchEnabled = !0;
        this.sp2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onDescTouchBegin, this);
        this.sp2.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onDescTouchMove, this);
        this.sp2.addEventListener(egret.TouchEvent.TOUCH_END, 
        this.onDescTouchEnd, this)
    }
    ;
    c.prototype.onDescTouchBegin = function(b) {
        this.beginY = b.stageY;
        this.spHeight = 285 * PlatformData.prizesArr.length
    }
    ;
    c.prototype.onDescTouchMove = function(b) {
        console.log("move");
        b = (b.stageY - this.beginY) / 5;
        var a = this.sp2.y + b;
        a < -(this.spHeight - (this.h - this.sp.y)) || 0 < a || (this.sp2.y += b);
        console.log("height===" + this.sp2.height + "this.spHeight===" + this.spHeight);
        console.log("y===" + this.sp2.y)
    }
    ;
    c.prototype.onDescTouchEnd = function(b) {
        console.log("end")
    }
    ;
    c.prototype.onCloseBtnTouchTap = function(b) {
        Global.dispatchEvent(PlatformNotify.closeRankRulePanelNotify, 
        null , !1)
    }
    ;
    return c
}
(BasePanel);
RankRulePanel.prototype.__class__ = "RankRulePanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , RulePanel = function(b) {
    function c() {
        b.call(this, "rule")
    }
    __extends(c, b);
    c.prototype.initPanel = function() {
        this.bg = new egret.Sprite;
        this.bg.graphics.beginFill(0, 0);
        this.bg.graphics.drawRect(0, 0, 450, 720);
        this.bg.graphics.endFill();
        this.bg.width = 450;
        this.bg.height = 720;
        this.addChild(this.bg);
        this.touchEnabled = !0;
        this.bgImg = new egret.Bitmap;
        this.bgImg.texture = this.assets.getTexture("bgImg");
        this.bgImg.x = this.bg.width / 2 - this.bgImg.width / 2;
        this.bgImg.y = 60;
        this.addChild(this.bgImg);
        this.titleImg = new egret.Bitmap;
        this.titleImg.texture = this.assets.getTexture("titleImg");
        this.titleImg.x = this.bg.width / 2 - this.titleImg.width / 2;
        this.titleImg.y = 20;
        this.addChild(this.titleImg);
        var b = new egret.Sprite;
        this.addChild(b);
        b.x = 30;
        b.y = 140;
        this.descTF = new ETextField;
        this.descTF.size = 18;
        this.descTF.width = 400;
        this.descTF.multiline = !0;
        this.descTF.lineSpacing = 
        10;
        this.descTF.textColor = 0;
        this.descTF.setText(PlatformUtils.getValue("ruleDesc"));
        b.addChild(this.descTF);
        this._height = this.descTF.height + 10 * (this.descTF.numLines - 1);
        console.log("this._height:" + this._height);
        var a = new egret.Rectangle(0,0,480,540);
        b.mask = a;
        b.touchEnabled = !0;
        this.descTF.touchEnabled = !0;
        b.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onSpTouchBegin, this);
        b.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onSpTouchMove, this);
        b.addEventListener(egret.TouchEvent.TOUCH_END, this.onSpTouchEnd, 
        this);
        b.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onSpTouchEnd, this);
        this.sureBtn = new EButton(this,"sureBtn",null ,"",30,1,"rule");
        this.sureBtn.x = 450 - this.sureBtn.width;
        this.sureBtn.y = 0;
        this.addChild(this.sureBtn);
        this.sureBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSureBtnTouchTap, this)
    }
    ;
    c.prototype.onSpTouchBegin = function(b) {
        this.beginY = b.stageY;
        this.startY = this.descTF.y
    }
    ;
    c.prototype.onSpTouchMove = function(b) {
        if (!(540 > this._height)) {
            var a = b.stageY - this.beginY
              , c = this.startY + 
            a;
            c <= -(this._height - 540) ? (console.log("1"),
            this.descTF.y = -(this._height - 540)) : (0 < c ? (console.log("2"),
            this.descTF.y = 0) : (console.log("3:_num=" + c + ";-(this._height - 540)=" + -(this._height - 540) + ";e.stageY:" + b.stageY),
            this.descTF.y = this.startY + a),
            this.beginY = b.stageY,
            this.startY = this.descTF.y)
        }
    }
    ;
    c.prototype.onSpTouchEnd = function(b) {}
    ;
    c.prototype.onSureBtnTouchTap = function(b) {
        Global.dispatchEvent(PlatformNotify.closeRulePanelNotify, null , !1)
    }
    ;
    return c
}
(BasePanel);
RulePanel.prototype.__class__ = "RulePanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , GameOverPanel = function(b) {
    function c() {
        b.call(this);
        this.line = new egret.Shape;
        this.linkTF = new ETextField
    }
    __extends(c, b);
    c.prototype.initPanel = function() {
        this.bg = new egret.Bitmap;
        this.bg.texture = RES.getRes("gameOver");
        this.addChild(this.bg);
        this.bg.touchEnabled = !0;
        /*
        this.shareImg = new egret.Bitmap;
        this.shareImg.texture = this.assets.getTexture("gameOverShareArrow");
        this.addChild(this.shareImg);
        this.shareImg.x = this.w - this.shareImg.width;
        this.shareImg.y = 0;
        EffectUtils.flyTo(this.shareImg, this.shareImg.x + 20, this.shareImg.y - 20, 1E3, !0);
        */
        this.descritbg = new egret.Bitmap;
        this.descritbg.texture = RES.getRes("gameOverDecBg");//this.assets.getTexture("gameOverDecBg");
        this.addChild(this.descritbg);
        this.descritbg.x = this.w - this.descritbg.width >> 1;
        GameConfig.isBigScreen() ? this.descritbg.y = 180 * GameConfig.getScale() : this.descritbg.y = 70 * GameConfig.getScale();
        this.player = new egret.Bitmap;
        this.player.texture = RES.getRes("role_stand");//this.assets.getTexture("role_stand");
        this.addChild(this.player);

        var resCfg = userConfig.role_stand;
        if( resCfg.size && !resCfg.size.readonly ) {
            this.player.width = resCfg.size.width;
            this.player.height = resCfg.size.height;
        }

        this.player.x = this.w - this.player.width >> 1;
        this.player.y = this.descritbg.y - 80;

        this.resultImg = new egret.Bitmap;
        this.resultImg.texture = RES.getRes("passStageImg");//this.assets.getTexture("passStageImg");
        this.addChild(this.resultImg);
        this.resultImg.x = this.w - this.resultImg.width >> 1;
        this.resultImg.y = this.descritbg.y + 220;
        this.stageText = new ETextField;
        this.addChild(this.stageText);
        this.stageText.width = 126;
        this.stageText.size = 50;
        this.stageText.bold = !0;
        this.stageText.italic = !0;
        this.stageText.height = 36;
        this.stageText.textAlign = "center";
        this.stageText.setText(GlobalData.currentScore.toString());
        this.stageText.x = 240;
        this.stageText.y = this.descritbg.y + 222;
        if (PlatformData.isset) {
            var b = this
              , a = new egret.Bitmap;
            this.addChild(a);
            1 == PlatformData.type ? (this.linkTF = new ETextField,
            this.linkTF.size = 24,
            this.linkTF.textColor = 16777215,
            this.linkTF.setText(PlatformData.linkname),
            this.linkTF.x = this.w / 2 - this.linkTF.width / 2,
            this.linkTF.y = this.h - this.linkTF.height - 10,
            this.addChild(this.linkTF),
            this.linkTF.touchEnabled = !0,
            this.linkTF.addEventListener(egret.TouchEvent.TOUCH_TAP, 
            this.onLinkTFTouchTap, this),
            this.line = new egret.Shape,
            this.line.x = this.w / 2 - this.linkTF.width / 2,
            this.line.y = this.linkTF.y + this.linkTF.height,
            this.line.graphics.lineStyle(2, 16777215),
            this.line.graphics.moveTo(0, 0),
            this.line.graphics.lineTo(this.linkTF.width, 0),
            this.line.graphics.endFill(),
            this.addChild(this.line)) : 2 == PlatformData.type ? RES.getResByUrl(PlatformData.imageurl, function(c) {
                "" != c && null  != c && (a.texture = c,
                a.touchEnabled = !0,
                a.width = 480,
                a.height = 55,
                a.x = 0,
                a.y = b.h - 55,
                a.addEventListener(egret.TouchEvent.TOUCH_TAP, 
                this.onAdImgTouchTap, this))
            }
            , b) : 3 == PlatformData.type && RES.getResByUrl(PlatformData.qrcodeurl, function(c) {
                "" != c && null  != c && (a.texture = c,
                a.touchEnabled = !0,
                a.width = 480,
                a.height = 55,
                a.x = 0,
                a.y = b.h - 55,
                a.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQRcodeTouchTap, this))
            }
            , b)
        }
        /*
        this.choujiang = new EButton(this,"choujiangButton",this.onChouJiangBtnTouchTap,"",30,2);
        this.choujiang.x = this.w - this.choujiang.width >> 1;
        this.choujiang.y = PlatformData.isset ? this.h - this.choujiang.height - 55 - 20 : this.h - this.choujiang.height - 14;
        this.choujiang.visible = false;
        
        this.playAgain = new egret.Bitmap;
        this.playAgain.texture = RES.getRes("playAgain");
        this.playAgain.x = this.w - this.playAgain.width >> 1;
        //this.playAgain.y = this.choujiang.y - this.playAgain.height - 20;
        this.playAgain.y = this.h - 104 - this.playAgain.height - 20;
        this.addChild(this.playAgain);
        this.playAgain.touchEnabled = !0;
        this.playAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayAgainBtnTouchTap, this);
        
        this.playAgain = new EButton(this,"playAgain",this.onPlayAgainBtnTouchTap,"",30,2);
        this.playAgain.x = this.w - this.playAgain.width >> 1;
        this.playAgain.y = this.choujiang.y - this.playAgain.height - 20;
        this.addChild(this.playAgain);
        */
        /*
        0 == PlatformData.lot_type ? this.addChild(this.choujiang) : 1 == PlatformData.lot_type ? (this.checkBtn = new EButton(this,"checkBtn",this.onCheckBtnTouchTap,"",30,1,"faquan"),
        this.addChild(this.checkBtn),
        this.checkBtn.x = 0,
        this.checkBtn.y = 40,
        this.addChild(this.choujiang)) : 2 == PlatformData.lot_type ? 
        (this.rankBtn = new EButton(this,"rankBtn",this.openRank,"",30,1),
        this.rankBtn.x = this.w / 2 - this.rankBtn.width / 2,
        this.rankBtn.y = this.choujiang.y,
        this.addChild(this.rankBtn)) : 3 != PlatformData.lot_type && 4 == PlatformData.lot_type && (this.applyBtn = new EButton(this,"applyBtn",this.openApply,"",30,1),
        this.applyBtn.x = this.w / 2 - this.applyBtn.width / 2,
        this.applyBtn.y = this.choujiang.y,
        this.addChild(this.applyBtn));
        */
        /*
        this.ruleBtn = new EButton(this,"ruleBtn",this.onRuleBtnTouchTap,"",30,1,"rule");
        this.addChild(this.ruleBtn);
        this.ruleBtn.x = 0;
        this.ruleBtn.y = null  == this.checkBtn ? 40 : this.checkBtn.y + this.checkBtn.height + 2;
        */
        /*
        window.shareData.desc = window.TemplateUtils.getVariable("shareAfter", {
            "{\u79ef\u5206}": GlobalData.currentScore
        });
        */
        this.darkSprite = new egret.Sprite;
        this.darkSprite.graphics.clear();
        this.darkSprite.graphics.beginFill(0, 0.3);
        this.darkSprite.graphics.drawRect(0, 0, this.w, this.h);
        this.darkSprite.graphics.endFill();
        this.darkSprite.width = this.w;
        this.darkSprite.height = this.h;
        this.darkSprite.touchEnabled = !0;
        this.addChild(this.darkSprite);
        this.darkSprite.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHideTouchTap, this);
        this.darkSprite.visible = !1
    };
    c.prototype.onChouJiangBtnTouchTap = function(b) {

    };
    c.prototype.onPlayAgainBtnTouchTap = function(b) {
        PlatformData.getReward = !0;
        Global.dispatchEvent(MainNotify.openGamePanelNotify, null , !1);
        Global.dispatchEvent(MainNotify.closeGameOverPanelNotify, null , !1);
    };
    c.prototype.onDaLiBtnTouchTap = function(b) {
        PopUpManager.addPopUp(new SharePanel)
    };
    c.prototype.onLinkTFTouchTap = function(b) {
        window.open(PlatformData.linkpath, "_self")
    };
    c.prototype.onAdImgTouchTap = function(b) {
        window.open(PlatformData.imagepath, "_self")
    };
    c.prototype.onQRcodeTouchTap = function(b) {
        window.bottombanner.show();
        egret.Tween.get(this.darkSprite).to({
            alpha: 1
        }, 150);
        this.darkSprite.visible = !0
    };
    c.prototype.onHideTouchTap = function(b) {
        window.bottombanner.hide();
        this.darkSprite.visible = !0;
        egret.setTimeout(function() {
            this.darkSprite.visible = !1
        }
        , this, 150);
        egret.Tween.get(this.darkSprite).to({
            alpha: 0
        }, 150)
    }
    ;
    c.prototype.onCheckBtnTouchTap = function() {
        Global.waitPanel = new WaitPanel(1);
        GameConfig.gameScene().maskLayer.removeChildren();
        GameConfig.gameScene().maskLayer.addChild(Global.waitPanel);
        window.tuyoumiCfg.getMyPrizes(function(b) {
            GameConfig.gameScene().maskLayer.removeChild(Global.waitPanel);
            Global.waitPanel = null ;
            PlatformData.myPrizesArr = b;
            Global.dispatchEvent(PlatformNotify.openQuanListPanelNotify, null , !1)
        }
        )
    }
    ;
    c.prototype.openRank = function(b) {
        Global.waitPanel = new WaitPanel(1);
        GameConfig.gameScene().maskLayer.removeChildren();
        GameConfig.gameScene().maskLayer.addChild(Global.waitPanel);
        window.tuyoumiCfg.getMyRank({
            lot_id: "0",
            pagesize: 10,
            order: "desc"
        }, function(a) {
            GameConfig.gameScene().maskLayer.removeChild(Global.waitPanel);
            Global.waitPanel = null ;
            PlatformData.rankArr = a;
            Global.dispatchEvent(PlatformNotify.openRankPanelNotify, null , !1);
            a = (new Date).getTime();
            (a < 1E3 * PlatformData.starttime0 || a > 1E3 * PlatformData.endtime0) && Global.dispatchEvent(PlatformNotify.openNoticePanelNotify, null , !1)
        }
        )
    }
    ;
    c.prototype.openApply = function(b) {
        Global.dispatchEvent(PlatformNotify.openFormPanelNotify, null , !1)
    }
    ;
    c.prototype.onRuleBtnTouchTap = function() {
        Global.dispatchEvent(PlatformNotify.openRulePanelNotify, null , !1)
    }
    ;
    return c
}
(BasePanel);
GameOverPanel.prototype.__class__ = "GameOverPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , GamePanel = function(b) {
    function c() {
        b.call(this);
        this.tempDis = 50;
        this.timeStep = 0
    }
    __extends(c, b);
    c.prototype.initPanel = function() {
        tymGameStartHandler();

        c.selftemp = this;
        this.currentNode = GlobalData.currentScore = 0;
        this.bg = new egret.Bitmap;
        this.bg.texture = RES.getRes("gameBg");
        this.bg.touchEnabled = !0;
        this.addChild(this.bg);
        this.bgList = [];
        this.bgList.push(this.bg);
        this.bg1 = new egret.Bitmap;
        this.bg1.texture = RES.getRes("gameBg");
        this.addChild(this.bg1);
        this.bg1.touchEnabled = !0;
        this.bgList.push(this.bg1);

        resCfg = userConfig.gameBg
        if( resCfg.size ) {
            this.bg.width = this.bg1.width = resCfg.size.width;
            this.bg.height = this.bg1.height = resCfg.size.height;
        }

        this.bg1.x = this.bg1.width;

        this.tipsText = new ETextField;
        this.tipsText.multiline = !0;
        this.tipsText.width = 480;
        //this.tipsText.setText(PlatformUtils.getValue("gameRule"));
        var gr = userConfig.gameRule;
        this.tipsText.setText( gr.value );
        this.addChild(this.tipsText);
        if( gr.position && !gr.position.readonly ) {
            this.tipsText.x = gr.position.x;
            this.tipsText.y = gr.position.y;
        }
        else {
            this.tipsText.x = this.w - this.tipsText.width >> 1;
            this.tipsText.y = 0.5 * (this.h - this.tipsText.height) - 100;
        }
        if( gr.font && !gr.font.readonly ) {
            this.tipsText.textColor = parseInt(gr.font.fontColor,10);
            this.tipsText.size = gr.font.fontSize;
            //console.log('this.tipsText.size: '+this.tipsText.size);
            this.tipsText.stroke = gr.font.stroke;
            this.tipsText.strokeColor = gr.font.strokeColor;
        }
        else{

        }
        this.tipsText.textAlign = egret.HorizontalAlign.CENTER;
        //this.tipsText.textColor = 0;
        //LogUtil.log("this.tipsText.text" + this.tipsText.text);
        this.tweenText();
        this.container = new egret.Sprite;
        this.addChild(this.container);
        this.blockImg1 = new egret.Bitmap;
        this.container.addChild(this.blockImg1);
        this.blockImg2 = new egret.Bitmap;
        this.container.addChild(this.blockImg2);
        this.scoreTF = new ETextField;
        this.scoreTF.textAlign = "center";
        this.scoreTF.setText(PlatformUtils.getValue("gameScroeTitle"));
        this.addChild(this.scoreTF);
        this.scoreTF.x = 147;
        this.scoreTF.y = 28;
        this.scoreTF2 = new ETextField;
        this.scoreTF2.y = 28;
        this.scoreTF2.width = 260;
        this.scoreTF2.setText(PlatformUtils.getValue("gameScroeTitle2"));
        this.addChild(this.scoreTF2);
        this.scoreTF2.x = this.scoreTF.x + this.scoreTF.width;
        this.showScore();
        this.role = new egret.Bitmap;
        this.role.texture = RES.getRes("role_stand");//this.assets.getTexture("role_stand");

        resCfg = userConfig.role_stand
        if( resCfg.size ) {
            this.role.width = resCfg.size.width;
            this.role.height = resCfg.size.height;
        }

        //this.role.scaleX = this.role.scaleY = 0.3;
        this.addChild(this.role);

        this.gun = new egret.Bitmap;
        this.gun.scale9Grid = new egret.Rectangle(5,3,247,5);
        this.gun.texture = RES.getRes("gun");//this.assets.getTexture("gun");
        this.gun.anchorX = 0;
        this.gun.anchorY = 0.5;
        this.container.addChild(this.gun);
        this.gun.x = 100;
        this.gun.y = 100;
        this.addListener();
        this.resetGame();
    }
    ;
    c.prototype.tweenText = function() {
        this.tipsText.alpha = 0;
        egret.Tween.get(this.tipsText).to({
            alpha: 1
        }, 3E3);
        egret.Tween.get(this.tipsText).to({
            alpha: 0
        }, 7E3).wait(12E3)
    }
    ;
    c.prototype.run = function() {
        c.selftemp.gun.width += c.selftemp.gunStep
    }
    ;
    c.prototype.setGunPositon = function() {}
    ;
    c.prototype.addListener = function() {
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this)
    }
    ;
    c.prototype.removeListener = function() {
        this.removeEventListener(egret.TouchEvent.TOUCH_END, 
        this.touchEnd, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this)
    }
    ;
    c.prototype.resetData = function(b) {
        void 0 === b && (b = 3);
        b *= Math.random();
        var a = 1
          , a = 1 > b ? 1 : 2 > b ? 2 : 3;
        LogUtil.log("ranindex" + a);
        return a
    };
    c.prototype.setBlockSize = function( name, res ){
        // 限定柱子宽高
        var resCfg = userConfig[name];
        if( resCfg.size && resCfg.size.width ) {
            res.width = resCfg.size.width;
            res.height = resCfg.size.height;
        }
    }
    c.prototype.resetGame = function() {
        LogUtil.log("resetGame");
        var b;
        this.container.x = 0;
        LogUtil.log("this.currentNode" + this.currentNode);
        b = 0 >= this.currentNode ? this.resetData() : this.currentNode;
        this.role.x = 0;

        this.blockImg1.texture = RES.getRes("block"+b);//this.assets.getTexture("block" + b);
        this.setBlockSize( "block"+b, this.blockImg1 );
        this.blockImg1.x = 0;
        this.blockImg1.y = this.h - this.blockImg1.height;
        this.role.x = 0;
        this.role.y = this.h - this.blockImg1.height - this.role.height;
        this.gun.rotation = -90;
        this.gun.y = this.blockImg1.y;
        this.gun.x = this.blockImg1.x + this.blockImg1.width - 10;
        this.gun.width = 1;
        this.tempDis = 50;
        this.gun.visible = !0;
        0 < this.block3Id ? (this.blockImg2.texture = RES.getRes("block"+this.block3Id),//this.assets.getTexture("block" + this.block3Id),
        this.setBlockSize( "block"+this.block3Id, this.blockImg2 ),
        this.blockImg3.visible = !1,
        b = this.blockImg3.x - this.blockImg2.x,
        //LogUtil.log("this.blockImg2.x if" + this.blockImg2.x),
        //LogUtil.log("this.blockImg3.x if" + this.blockImg3.x),
        this.blockImg2.x = b,
        this.blockImg2.x > this.w - this.blockImg2.width && (this.blockImg2.x = this.w - this.blockImg2.width - 20),
        //LogUtil.log("this.temp3.x if" + b),
        this.currentNode = this.block3Id) : (this.currentNode = this.resetData(),
        this.blockImg2.texture = RES.getRes("block"+this.currentNode),//this.assets.getTexture("block" + this.currentNode),
        this.setBlockSize( "block"+this.currentNode, this.blockImg2 ),
        b = (this.w - this.blockImg1.width - this.blockImg2.width) * Math.random() + this.tempDis,
        this.blockImg2.x = this.blockImg1.x + this.blockImg1.width + b);
        //LogUtil.log("this.blockImg2.x else" + this.blockImg2.x);
        this.blockImg2.y = this.h - this.blockImg1.height;
        this.dis = this.blockImg2.x - this.blockImg1.x - this.blockImg1.width
    }
    ;
    c.prototype.touchBegin = function() {
        this.lock = !0;
        this.gunStep = 10;
        this.lastTime = egret.getTimer();
        this.intervalId = setInterval(this.run, 16, this)
    }
    ;
    c.prototype.touchEnd = function() {
        if (!1 != this.lock) {
            this.lock = !1;
            this.judge();
            var b = function() {
                LogUtil.log("\u79fb\u52a8\u7ed3\u675f\uff01");
                c.selftemp.moveOverHandle()
            }
            ;
            clearInterval(this.intervalId);
            this.removeListener();
            this.currentTime = egret.getTimer();
            this.totalCost = this.currentTime - this.lastTime;
            egret.Tween.get(this.gun).to({
                rotation: 0
            }, 300).call(function() {
                LogUtil.log("this.resulte" + this.resulte);
                this.resulte ? c.selftemp.moveBlack() : egret.Tween.get(c.selftemp.role).to({
                    x: c.selftemp.gun.x + c.selftemp.gun.width
                }, 1E3).call(b, c.selftemp)
            }
            , c.selftemp)
        }
    }
    ;
    c.prototype.setThreeBlock = function() {
        var b;
        this.block3Id = this.resetData();
        null  == this.blockImg3 && (this.blockImg3 = new egret.Bitmap, this.container.addChild(this.blockImg3));
        this.blockImg3.texture = RES.getRes("block"+this.block3Id);//this.assets.getTexture("block" + this.block3Id);
        this.setBlockSize( "block"+this.block3Id, this.blockImg3 );
        this.blockImg3.visible = !0;
        b = (this.w - this.blockImg2.width - this.blockImg3.width) * Math.random() + this.tempDis;
        this.blockImg3.x = this.blockImg3.x + this.blockImg2.width + b;
        this.blockImg3.y = this.h - this.blockImg3.height;
        this.blockImg3.x < this.w && (this.blockImg3.x = this.w + this.blockImg2.width + 20);
        this.blockImg3.x - this.blockImg2.x > this.w && (this.blockImg3.x = this.w + this.blockImg2.width + 20);
        this.blockImg3.x - this.blockImg2.x <= this.blockImg2.width + 50 && (this.blockImg3.x = this.w + this.blockImg2.width + 20);
        this.blockImg3.y = this.h - this.blockImg1.height;
        this.dis = this.blockImg2.x - this.blockImg1.x - this.blockImg1.width
    }
    ;
    c.prototype.moveBlack = function() {
        c.selftemp.setThreeBlock();
        var b;
        b = c.selftemp.blockImg2.x;
        var a, e = 0, k = 0, m = 0, g = 0, f = 0, m = b;
        LogUtil.log("tonum" + b);
        a = setInterval(function() {
            e += 0.1;
            g += 0.05;
            k = 4.9 * Math.pow(e, 2);
            f = 4.9 * Math.pow(g, 2);
            //LogUtil.log("s---" + k);
            0 < b ? (c.selftemp.container.x -= k,
            c.selftemp.container.x < -m && (c.selftemp.container.x = -m),
            b -= k,
            c.selftemp.movebg(f)) : (clearInterval(a),
            c.selftemp.gun.visible = !1,
            LogUtil.log("----------====" + b),
            setTimeout(function() {
                c.selftemp.moveOverHandle()
            }
            , 100, this))
        }
        , 20, this)
    }
    ;
    c.prototype.movebg = function(b) {
        var a = -1;
        //LogUtil.log("value" + b);
        for (var c = 0; c < this.bgList.length; c++)
            this.bgList[c].x -= b,
            this.bgList[c].x < -this.bgList[c].width && (a = c);
        0 <= a && (LogUtil.log("temptemptemptemp" + a),
        0 == a ? this.bgList[0].x = this.bgList[1].x + this.bgList[1].width : this.bgList[1].x = this.bgList[0].x + this.bgList[0].width)
    }
    ;
    c.prototype.moveOverHandle = function() {
        !1 == this.resulte ? this.roleDrap() : 
        (this.resetGame(),
        this.addListener(),
        this.role.x = 0,
        GlobalData.currentScore += 1,
        this.showScore())
    }
    ;
    c.prototype.showScore = function() {
        this.scoreTF.setText(PlatformUtils.getValue("gameScroeTitle") + GlobalData.currentScore);
        this.scoreTF2.x = this.scoreTF.x + this.scoreTF.width
    }
    ;
    c.prototype.judge = function() {
        var b, a;
        b = this.gun.x + this.gun.width;
        LogUtil.log("temp" + b);
        a = this.blockImg2.x;
        b < a ? (LogUtil.log("\u5931\u8d25\uff01" + a), tymGameOverHandler(GlobalData.currentScore), this.resulte = !1) : 
        (a = this.blockImg2.x + this.blockImg2.width,
        b > a ? (LogUtil.log("\u5931\u8d25\uff01" + a), tymGameOverHandler(GlobalData.currentScore), this.resulte = !1) : 
        (LogUtil.log("\u6210\u529f\uff01" + a), this.resulte = !0));
    };
    c.prototype.roleDrap = function() {
        egret.Tween.get(this.role).to({
            y: this.h
        }, 500).call(function() {
            EffectUtils.shakeScreen(3);
            // 上传数据
            tymGamePostData();
            /*
            setTimeout(function() {
                Global.dispatchEvent(MainNotify.openGameOverPanelNotify, null , !1);
                Global.dispatchEvent(MainNotify.closeGamePanelNotify, null , !1)
            }
            , 500, this);
            */
            var b = !1
              , a = (new Date).getTime()
              , b = a < 1E3 * PlatformData.starttime0 || a > 1E3 * PlatformData.endtime0 ? !1 : !0;
            Global.waitPanel = new WaitPanel(1);
            GameConfig.gameScene().maskLayer.removeChildren();
            GameConfig.gameScene().maskLayer.addChild(Global.waitPanel);
        }, this);
        egret.Tween.get(this.gun).to({
            y: this.h
        }, 450)
    }
    ;
    c.prototype.playTimer = function() {
        this.isPlay || (this.isPlay = !0,
        this.timeNum = 10,
        this.timeTF.setText("10s"),
        this.timer = new egret.Timer(1E3,0),
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this),
        this.timer.start())
    }
    ;
    c.prototype.timerFunc = function() {
        this.timeNum--;
        this.timeTF.setText(this.timeNum + "s");
        0 >= this.timeNum && (this.timeTF.setText("0s"),
        GlobalData.currentScore = this.num,
        this.stopTimer())
        //Global.dispatchEvent(MainNotify.openGameOverPanelNotify, null , !1),
        //Global.dispatchEvent(MainNotify.closeGamePanelNotify, null , !1))
    }
    ;
    c.prototype.stopTimer = function() {
        this.timer.stop();
        this.isPlay = !1
    }
    ;
    return c
}
(BasePanel);
GamePanel.prototype.__class__ = "GamePanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , SharePanel = function(b) {
    function c() {
        b.call(this)
    }
    __extends(c, b);
    c.prototype.initPanel = function() {
        this.bg = new egret.Sprite;
        this.bg.graphics.beginFill(0, 0.5);
        this.bg.graphics.drawRect(0, 0, this.w, this.h);
        this.bg.graphics.endFill();
        this.bg.width = this.w;
        this.bg.height = this.h;
        this.bg.touchEnabled = !0;
        this.bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHide, this);
        this.addChild(this.bg);
        this.arrow = new egret.Bitmap;
        this.arrow.texture = RES.getRes("shareImg");
        this.arrow.scaleX = this.arrow.scaleY = 0.8;
        this.arrow.x = this.w - 0.8 * this.arrow.width;
        this.arrow.y = 0;
        this.addChild(this.arrow)
    };
    c.prototype.onHide = function(b) {
        this.bg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onHide, this);
        PopUpManager.removePopUp(this)
    };
    return c
}
(BasePanel);
SharePanel.prototype.__class__ = "SharePanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , StartPanel = function(b) {
    function c() {
        b.call(this)
    }
    __extends(c, b);
    c.prototype.initPanel = function() {
        this.sScale = GameConfig.getScale();
        this.bg = new egret.Bitmap;
        this.bg.texture = RES.getRes("gameStartBg");
        this.bg.width = this.w;
        this.bg.height = this.h;

        this.addChild(this.bg);
        var titleObj = userConfig.titleImg;
        this.titleImg = new egret.Bitmap;
        this.titleImg.texture = RES.getRes("titleImg");
        if( titleObj.size && !titleObj.size.readonly ) {
            this.titleImg.width = titleObj.size.width;
            this.titleImg.height = titleObj.size.height;
        }
        if( titleObj.position && !titleObj.position.readonly ) {
            this.titleImg.x = titleObj.position.x;
            this.titleImg.y = titleObj.position.y;
        }
        else {
            this.titleImg.x = this.w / 2 - this.titleImg.width / 2;
            this.titleImg.y = 0;
        }
        this.addChild(this.titleImg);
        /*
        this.logo = new egret.Bitmap;
        this.logo.texture = RES.getRes("logo");
        this.logo.x = this.w - this.logo.width - 20;
        this.logo.y = 5;
        this.addChild(this.logo);
        */
        this.startButton = new egret.Bitmap;
        this.startButton.texture = RES.getRes("startButton");
        var startObj = userConfig.startButton;
        if( startObj.size && !startObj.size.readonly ) {
            this.startButton.width = startObj.size.width;
            this.startButton.height = startObj.size.height;
        }
        if( startObj.position && !startObj.position.readonly ) {
            this.startButton.x = startObj.position.x;
            this.startButton.y = startObj.position.y;
        }
        else {
            this.startButton.x = this.w / 2 - this.startButton.width / 2;
            this.startButton.y = this.h - this.startButton.height >> 1 + 50;
        }
        this.startButton.touchEnabled = !0;
        this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartBtnTouchTap, this);

        // 柱子高度
        var resCfg = userConfig.block1;
        var blockHeight = 0;
        if( resCfg.size && resCfg.size.height ) {
            blockHeight = resCfg.size.height;
        }

        this.tubeImg3 = new egret.Bitmap;
        //this.tubeImg3.texture = this.assets.getTexture("block3");
        this.tubeImg3.texture = RES.getRes("block3");
        this.tubeImg3.width = 191;
        if( blockHeight ) {
            this.tubeImg3.height = blockHeight;
        }
        this.tubeImg3.x = 0;
        this.tubeImg3.y = this.h - this.tubeImg3.height + 10;

        this.tubeImg2 = new egret.Bitmap;
        this.tubeImg2.width = 142;
        if( blockHeight ) {
            this.tubeImg2.height = blockHeight;
        }
        //this.tubeImg2.texture = this.assets.getTexture("block2");
        this.tubeImg2.texture = RES.getRes("block2");
        this.tubeImg2.x = this.tubeImg3.x + this.tubeImg3.width + 10;
        this.tubeImg2.y = this.h - this.tubeImg2.height + 10;

        this.tubeImg1 = new egret.Bitmap;
        this.tubeImg1.width = 82;
        if( blockHeight ) {
            this.tubeImg1.height = blockHeight;
        }
        //this.tubeImg1.texture = this.assets.getTexture("block1");
        this.tubeImg1.texture = RES.getRes("block1");
        this.tubeImg1.x = this.tubeImg2.x + this.tubeImg2.width + 10;
        this.tubeImg1.y = this.h - this.tubeImg1.height + 10;
        this.role = new Role;
        this.role.scaleX = this.role.scaleY = 0.5;
        this.role.x = 20;
        this.role.y = this.tubeImg3.y - 0.5 * this.role.height;
        //console.log("this.role.y" + this.role.y);
        this.addChild(this.tubeImg1);
        this.addChild(this.tubeImg2);
        this.addChild(this.tubeImg3);
        this.gun = new egret.Bitmap;
        this.gun.texture = RES.getRes("gun");//this.assets.getTexture("gun");
        this.gun.scale9Grid = new egret.Rectangle(5,3,247,5);
        this.gun.width = 0.5 * this.w;
        this.gun.x = 0.5 * (this.w - this.gun.width) + 30;
        this.gun.y = this.tubeImg3.y - this.gun.height;
        this.addChild(this.gun);
        0 != PlatformData.lot_type && 1 == PlatformData.lot_type && (this.checkBtn = new EButton(this,"checkBtn",this.onCheckBtnTouchTap,"",30,1,"faquan"),
        this.addChild(this.checkBtn),
        this.checkBtn.x = 0,
        this.checkBtn.y = 40);

        this.addChild(this.role);
        this.addChild(this.startButton);
        /*
        this.ruleBtn = new EButton(this,"ruleBtn",this.onRuleBtnTouchTap,"",30,1,"rule");
        this.addChild(this.ruleBtn);
        this.ruleBtn.x = 0;
        this.ruleBtn.y = null  == this.checkBtn ? 40 : this.checkBtn.y + this.checkBtn.height + 2
        */
    };
    c.prototype.onStartBtnTouchTap = function(b) {
        "false" != PlatformUtils.getSoundSwitch() && (this._curSound = RES.getRes("sound"), this._curSound.play(!0));
        Global.dispatchEvent(MainNotify.openGamePanelNotify, null , !1);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null , !1);
    };
    c.prototype.onCheckBtnTouchTap = function() {
        Global.waitPanel = new WaitPanel(1);
        GameConfig.gameScene().maskLayer.removeChildren();
        GameConfig.gameScene().maskLayer.addChild(Global.waitPanel);
        window.tuyoumiCfg.getMyPrizes(function(b) {
            GameConfig.gameScene().maskLayer.removeChild(Global.waitPanel);
            Global.waitPanel = null ;
            PlatformData.myPrizesArr = b;
            Global.dispatchEvent(PlatformNotify.openQuanListPanelNotify, null , !1)
        }
        )
    };
    c.prototype.onRuleBtnTouchTap = function() {
        Global.dispatchEvent(PlatformNotify.openRulePanelNotify, null , !1)
    };
    return c
}
(BasePanel);
StartPanel.prototype.__class__ = "StartPanel";
var GameConfig;
(function(b) {
    b.isDebug = !1;
    b.isOnLine = navigator.onLine;
    b.TextColors = {
        white: 16777215,
        milkWhite: 16511407,
        grayWhite: 13547170,
        yellow: 16776960,
        lightYellow: 16765813,
        orangeYellow: 16750848,
        red: 15799040,
        green: 58624,
        blue: 1742039,
        grayBlue: 3101047,
        purple: 15284466,
        pink: 16724016,
        black: 3026221,
        golden: 16766720
    };
    b.LabelFontSize = {
        littleSize: 12,
        middleSize: 18,
        normalSize: 24,
        bigSize: 36
    };
    b.isWeiXin = function() {
        var b = "" + window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i);
        if ("null" == b) return !1;
        if ("micromessenger" == b) return !0
    };
    b.isBigScreen = function() {
        return 1.32 < document.body.clientHeight / document.body.clientWidth
    };
    b.systemType = function() {
        var b = window.navigator.userAgent.toLowerCase();
        b.match(/MicroMessenger/i);
        if ("windows nt" == "" + b.match(/windows nt/i))
            return "windows";
        if ("iphone" == "" + b.match(/iphone/i))
            return "ios";
        if ("android" == "" + b.match(/android/i))
            return "android";
        if ("ipad" == "" + b.match(/ipad/i))
            return "ipad";
        if ("linux" == "" + b.match(/linux/i))
            return "linux";
        if ("mac" == "" + b.match(/mac/i))
            return "mac";
        if ("ucbrower" == 
        "" + b.match(/ucbrower/i))
            return "ucbrower";
        console.log("\u672a\u77e5\u7cfb\u7edf\u7c7b\u578b")
    };
    b.platformType = function() {
        var b = window.navigator.userAgent.toLowerCase();
        return "micromessenger" == "" + b.match(/micromessenger/i) ? "micromessenger" : "qzone" == "" + b.match(/qzone/i) ? "qzone" : "weibo" == "" + b.match(/weibo/i) ? "weibo" : "qq" == "" + b.match(/qq/i) ? "qq" : "renren" == "" + b.match(/renren/i) ? "renren" : "txmicroblog" == "" + b.match(/txmicroblog/i) ? "txmicroblog" : "douban" == "" + b.match(/douban/i) ? "douban" : "other"
    };
    b.gameScene = 
    function() {
        null  == this.curScene && (this.curScene = new GameScene);
        return this.curScene
    }
    ;
    b.curStage = function() {
        return egret.MainContext.instance.stage
    }
    ;
    b.curPanel;
    b.curWidth = function() {
        return egret.MainContext.instance.stage.stageWidth
    }
    ;
    b.curHeight = function() {
        return egret.MainContext.instance.stage.stageHeight
    }
    ;
    b.isVertical = function() {
        return 90 == window.orientation ? !1 : !0
    }
    ;
    b.getScale = function(b) {
        void 0 === b && (b = 800);
        return egret.MainContext.instance.stage.stageHeight / (b + 150)
    }
}
)(GameConfig || (GameConfig = {}));
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
, lcp;
(function(b) {
    var c = function(b) {
        function a(a, c, m, g) {
            void 0 === c && (c = null );
            void 0 === m && (m = !1);
            void 0 === g && (g = !1);
            b.call(this, a, m, g);
            this.CLASS_NAME = "LEvent";
            c && (this._obj = c)
        }
        __extends(a, b);
        a.prototype.clone = function(b) {
            return new a(this.type,b ? b : this._obj,this.bubbles,this.cancelable)
        }
        ;
        a.prototype.toString = function() {
            console.log(this.CLASS_NAME, "type", "bubbles", "cancelable")
        }
        ;
        Object.defineProperty(a.prototype, "param", {
            get: function() {
                return this._obj
            },
            enumerable: !0,
            configurable: !0
        });
        return a
    }
    (egret.Event);
    b.LEvent = c;
    c.prototype.__class__ = "lcp.LEvent"
}
)(lcp || (lcp = {}));
var GlobalData;
(function(b) {
    b.currentScore = 0;
    b.bestScore = 0;
    b.rateNum = 0;
    b.useTime = 0;
    b.lastTime = 0;
    b.currentTime = 0;
    b.bestTime = 0;
    b.myCurHP = 0;
    b.myMaxHP = 0;
    b.myStrength = 0;
    b.aiCurHP = 0;
    b.aiMaxHP = 0;
    b.aiStrength = 0;
    b.rankArr = [];
    b.title = "";
    b.desc = "";
    b.link = "";
    b.imgUrl = "";
    b.myName = "";
    b.fightName = "";
    b.aiNum = 0;
    b.doubleNum = 0;
    b.isBoss = !1;
    b.bossName = "";
    b.myMaxHP = 5E3;
    b.myCurHP = 5E3;
    b.myStrength = 1E3;
    b.aiMaxHP = 4E3;
    b.aiCurHP = 4E3;
    b.aiStrength = 1500;
    b.myAttackNum = 0;
    b.aiAttackNum = 0;
    b.winerNum = 0;
    b.initIsVertical = !1;
    b.isVerticalGame = !1
}
)(GlobalData || 
(GlobalData = {}));
var MainNotify;
(function(b) {
    b.onOrientationChange = "onOrientationChange";
    b.onDeviceOrientation = "onDeviceOrientation";
    b.onDeviceMotion = "onDeviceMotion";
    b.closeAlertNotify = "closeAlertNotify";
    b.closeShareNotify = "closeAlertNotify";
    b.updateShareNotify = "updateShareNotify";
    b.openStartPanelNotify = "openStartPanelNotify";
    b.closeStartPanelNotify = "closeStartPanelNotify";
    b.openGamePanelNotify = "openGamePanelNotify";
    b.openGamePanelNotify0 = "openGamePanelNotify0";
    b.closeGamePanelNotify = "closeGamePanelNotify";
    b.stopGamePanelNotify = "stopGamePanelNotify";
    //b.openGameOverPanelNotify = "openGameOverPanelNotify";
    //b.closeGameOverPanelNotify = "closeGameOverPanelNotify";
    b.openSharePanelNotify = "openSharePanelNotify";
    b.closeSharePanelNotify = "closeSharePanelNotify";
    b.openGuidePanelNotify = "openGuidePanelNotify";
    b.closeGuidePanelNotify = "closeGuidePanelNotify";
    b.needItemRot0 = "needItemRot0";
    b.needItemRot180 = "needItemRot180";
    b.needItemRot270 = "needItemRot270";
    b.needItemRot90 = "needItemRot90";
    b.openSetPanelNotify = "openSetPanelNotify";
    b.closeSetPanelNotify = "closeSetPanelNotify";
    b.openAlertPanelNotify = "openAlertPanelNotify";
    b.closeAlertPanelNotify = "closeAlertPanelNotify"
}
)(MainNotify || (MainNotify = {}));
(function(b) {
    var c = function() {
        function b() {
            this.CLASS_NAME = "LListener";
            this.isInit = !1;
            null  == this._dispatcher && (this._dispatcher = new egret.EventDispatcher,
            this.isInit = !0)
        }
        b.getInstance = function() {
            null  == this._instance && (this._instance = new b);
            return this._instance
        }
        ;
        b.prototype.addEventListener = function(a, b, c, d, g) {
            void 0 === d && (d = !1);
            void 0 === g && (g = 0);
            this._dispatcher.addEventListener(a, b, c, d, g)
        }
        ;
        b.prototype.removeEventListener = function(a, b, c, d) {
            void 0 === d && (d = !1);
            this._dispatcher.removeEventListener(a, 
            b, c, d)
        }
        ;
        b.prototype.hasEventListener = function(a) {
            return this._dispatcher.hasEventListener(a)
        }
        ;
        b.prototype.willTrigger = function(a) {
            return this._dispatcher.willTrigger(a)
        }
        ;
        b.prototype.dispatchEvent = function(a) {
            return this._dispatcher.dispatchEvent(a)
        }
        ;
        b.prototype.toString = function() {
            return this._dispatcher.toString()
        }
        ;
        return b
    }
    ();
    b.LListener = c;
    c.prototype.__class__ = "lcp.LListener"
}
)(lcp || (lcp = {}));
var PopUpManager;
(function(b) {
    b.darkSprite;
    b.addPopUp = function(b, d, a, e, k, m) {
        void 0 === d && (d = !1);
        void 0 === a && (a = 0);
        void 0 === e && (e = 0);
        void 0 === k && (k = 0);
        void 0 === m && (m = !1);
        if (!GameConfig.gameScene().uiLayer.contains(b)) {
            d && (this.darkSprite = new egret.Sprite,
            this.darkSprite.graphics.clear(),
            this.darkSprite.graphics.beginFill(0, 0.3),
            this.darkSprite.graphics.drawRect(0, 0, GameConfig.curWidth(), GameConfig.curHeight()),
            this.darkSprite.graphics.endFill(),
            this.darkSprite.width = GameConfig.curWidth(),
            this.darkSprite.height = GameConfig.curHeight(),
            GameConfig.gameScene().uiLayer.contains(this.darkSprite) || GameConfig.gameScene().uiLayer.addChild(this.darkSprite),
            this.darkSprite.touchEnabled = !0,
            egret.Tween.get(this.darkSprite).to({
                alpha: 1
            }, 150),
            this.darkSprite.visible = !0);
            GameConfig.gameScene().uiLayer.addChild(b);
            GameConfig.curPanel = b;
            0 != a ? (b.x = GameConfig.curWidth() / 2 - a / 2,
            b.y = GameConfig.curHeight() / 2 - e / 2) : (a = b.width,
            e = b.height);
            d = GameConfig.curWidth() / 2 - a / 2;
            var g = GameConfig.curHeight() / 2 - e / 2;
            switch (k) {
            case 1:
                b.alpha = 0;
                b.scaleX = 0.5;
                b.scaleY = 0.5;
                b.x += a / 4;
                b.y += e / 4;
                egret.Tween.get(b).to({
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1,
                    x: b.x - a / 4,
                    y: b.y - e / 4
                }, 300, egret.Ease.backOut);
                break;
            case 2:
                b.alpha = 0;
                b.scaleX = 0.5;
                b.scaleY = 0.5;
                b.x += a / 4;
                b.y += e / 4;
                egret.Tween.get(b).to({
                    alpha: 1,
                    scaleX: 1,
                    scaleY: 1,
                    x: b.x - a / 4,
                    y: b.y - e / 4
                }, 600, egret.Ease.elasticOut);
                break;
            case 3:
                m ? (b.x = -a,
                egret.Tween.get(b).to({
                    x: d
                }, 500, egret.Ease.cubicOut)) : (b.x = -a,
                egret.Tween.get(b).to({
                    x: 0
                }, 500, egret.Ease.cubicOut));
                break;
            case 4:
                m ? (b.x = a,
                egret.Tween.get(b).to({
                    x: d
                }, 500, egret.Ease.cubicOut)) : (b.x = a,
                egret.Tween.get(b).to({
                    x: 0
                }, 
                500, egret.Ease.cubicOut));
                break;
            case 5:
                m ? (b.y = -e,
                egret.Tween.get(b).to({
                    y: g
                }, 500, egret.Ease.cubicOut)) : (b.y = -e,
                egret.Tween.get(b).to({
                    y: 0
                }, 500, egret.Ease.cubicOut));
                break;
            case 6:
                m ? (b.y = GameConfig.curHeight(),
                egret.Tween.get(b).to({
                    y: g
                }, 500, egret.Ease.cubicOut)) : (b.y = e,
                egret.Tween.get(b).to({
                    y: 0
                }, 500, egret.Ease.cubicOut))
            }
        }
    }
    ;
    b.removePopUp = function(b, d) {
        void 0 === d && (d = 0);
        var a = function() {
            GameConfig.gameScene().uiLayer.contains(this.darkSprite) && GameConfig.gameScene().uiLayer.removeChild(this.darkSprite)
        }
        ;
        this.darkSprite && egret.Tween.get(this.darkSprite).to({
            alpha: 0
        }, 100).call(a, this);
        switch (d) {
        case 1:
            egret.Tween.get(b).to({
                alpha: 0,
                scaleX: 0,
                scaleY: 0,
                x: b.x + b.getWidth() / 2,
                y: b.y + b.getHeight() / 2
            }, 300);
            break;
        case 3:
            egret.Tween.get(b).to({
                x: b.getWidth()
            }, 500, egret.Ease.cubicOut);
            break;
        case 4:
            egret.Tween.get(b).to({
                x: -b.getWidth()
            }, 500, egret.Ease.cubicOut);
            break;
        case 5:
            egret.Tween.get(b).to({
                y: b.getHeight()
            }, 500, egret.Ease.cubicOut);
            break;
        case 6:
            egret.Tween.get(b).to({
                y: -b.getHeight()
            }, 500, egret.Ease.cubicOut)
        }
        egret.setTimeout(function() {
            GameConfig.gameScene().uiLayer.contains(b) && 
            GameConfig.gameScene().uiLayer.removeChild(b)
        }
        , this, 500)
    }
}
)(PopUpManager || (PopUpManager = {}));
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , ETextField = function(b) {
    function c() {
        b.call(this)
    }
    __extends(c, b);
    c.prototype.setText = function(b) {
        void 0 === b && (b = "");
        this.textFlow = (new egret.HtmlTextParser).parser(b)
    }
    ;
    return c
}
(egret.TextField);
ETextField.prototype.__class__ = "ETextField";
var Global;
(function(b) {
    b.Event = function(b, d, a, e) {
        void 0 === d && (d = null );
        void 0 === a && (a = !1);
        void 0 === e && (e = !1);
        return new lcp.LEvent(b,d,a,e)
    }
    ;
    b.dispatchEvent = function(b, d, a, e) {
        void 0 === d && (d = null );
        void 0 === a && (a = !1);
        void 0 === e && (e = !1);
        b = new lcp.LEvent(b,d,a,e);
        lcp.LListener.getInstance().dispatchEvent(b)
    }
    ;
    b.addEventListener = function(b, d, a, e, k) {
        void 0 === e && (e = !1);
        void 0 === k && (k = 0);
        lcp.LListener.getInstance().addEventListener(b, d, a, e, k)
    }
    ;
    b.waitPanel;
    b.verticalTipsPanel;
    b.shareUtils = function(b) {
        var d = GlobalData.desc
          , 
        a = GlobalData.link
          , e = GlobalData.imgUrl;
        "weibo" == b ? window.open("http://v.t.sina.com.cn/share/share.php?title=" + d + "&url=" + a + "&content=utf-8&sourceUrl=" + a + "&pic=" + e) : "txmicroblog" == b ? window.open("http://v.t.qq.com/share/share.php?title=" + d + "&url=" + a + "&pic=" + e) : "qzone" == b ? window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=" + d + "&url=" + a + "&pics=" + e) : "qq" == b ? window.open("http://connect.qq.com/widget/shareqq/index.html?title=" + d + "&url=" + a + "&pic=" + e) : "renren" == b ? window.open("http://share.renren.com/share/buttonshare.do?link=" + 
        a + "&title=" + d) : "kaixin" == b ? window.open("http://www.kaixin001.com/repaste/share.php?rurl=" + a + "&rcontent=" + d) : "douban" == b ? window.open("http://www.douban.com/recommend/?url=" + a + "&title=" + d) : "tieba" == b && window.open("http://tieba.baidu.com/f/commit/share/openShareApi?url=" + a + "&title=" + d)
    }
    ;
    b.shareToWeiXin = function(b, d, a, e, k, m) {
        void 0 === k && (k = 0);
        void 0 === m && (m = null );
        GlobalData.title = b;
        GlobalData.desc = d;
        GlobalData.link = a;
        GlobalData.imgUrl = e;
        WeixinApi.ready(function(g) {
            var f = new WeixinShareInfo;
            f.title = b;
            f.desc = d;
            f.link = a;
            f.imgUrl = e;
            var h = new WeixinShareCallbackInfo;
            null  != m && (h.confirm = m);
            0 == k ? (g.shareToFriend(f, h),
            g.shareToTimeline(f, h)) : 1 == k ? g.shareToFriend(f, h) : 2 == k && g.shareToTimeline(f, h)
        }
        )
    }
    ;
    b.rotationResize = function(b) {
        void 0 === b && (b = !1);
        b ? (egret.StageDelegate.getInstance().setDesignSize(800, 480),
        window.rootContainer.rotation = 90,
        window.rootContainer.x = egret.MainContext.instance.stage.stageWidth) : (egret.StageDelegate.getInstance().setDesignSize(480, 800),
        window.rootContainer.rotation = 0,
        window.rootContainer.x = 
        0)
    }
    ;
    b.alert = function(c, d, a, e) {
        void 0 === c && (c = "");
        void 0 === d && (d = "");
        void 0 === a && (a = null );
        void 0 === e && (e = 1);
        null  == this._alert && (this._alert = new AlertPanel(c,d,null ,a),
        PopUpManager.addPopUp(this._alert, !0, this._alert.getWidth(), this._alert.getHeight(), e, !0),
        b.addEventListener(MainNotify.closeAlertNotify, this.closeAlertPanel, this))
    }
    ;
    b.confirm = function(c, d, a, e, k) {
        void 0 === c && (c = "");
        void 0 === d && (d = "");
        void 0 === a && (a = null );
        void 0 === e && (e = null );
        void 0 === k && (k = 1);
        null  == this._alert && (this._alert = new AlertPanel(c,
        d,a,e,2),
        PopUpManager.addPopUp(this._alert, !0, this._alert.getWidth(), this._alert.getHeight(), k, !0),
        b.addEventListener(MainNotify.closeAlertNotify, this.closeAlertPanel, this))
    }
    ;
    b.closeAlertPanel = function() {
        null  != this._alert && (PopUpManager.removePopUp(this._alert, 1),
        this._alert = null )
    }
    ;
    b.share = function() {
        null  == this._share && (this._share = new ShareIconPanel,
        PopUpManager.addPopUp(this._share, !1, GameConfig.curWidth(), GameConfig.curHeight()),
        b.addEventListener(MainNotify.closeShareNotify, this.closeSharePanel, 
        this))
    }
    ;
    b.closeSharePanel = function() {
        null  != this._share && (PopUpManager.removePopUp(this._share, 0),
        this._share = null )
    }
}
)(Global || (Global = {}));
var PlatformNotify;
(function(b) {
    b.openPrizePanelNotify = "openPrizePanelNotify";
    b.closePrizePanelNotify = "closePrizePanelNotify";
    b.openSubmitInfoPanelNotify = "openSubmitInfoPanelNotify";
    b.closeSubmitInfoPanelNotify = "closeSubmitInfoPanelNotify";
    b.openSubmitSuccessPanelNotify = "openSubmitSuccessPanelNotify";
    b.closeSubmitSuccessPanelNotify = "closeSubmitSuccessPanelNotify";
    b.openFialedPanelNotify = "openFialedPanelNotify";
    b.closeFialedPanelNotify = "closeFialedPanelNotify";
    /*
    b.openCFormAlertPanelNotify = "openCFormAlertPanelNotify";
    b.closeCFormAlertPanelNotify = "closeCFormAlertPanelNotify";
    b.openCSelectAgePanelNotify = "openCSelectAgePanelNotify";
    b.closeCSelectAgePanelNotify = "closeCSelectAgePanelNotify";
    b.openFaQuanPrizePanelNotify = "openFaQuanPrizePanelNotify";
    b.closeFaQuanPrizePanelNotify = "closeFaQuanPrizePanelNotify";
    b.openFaQuanFialedPanelNotify = "openFaQuanFialedPanelNotify";
    b.closeFaQuanFialedPanelNotify = "closeFaQuanFialedPanelNotify";
    b.openQuanListPanelNotify = "openQuanListPanelNotify";
    b.closeQuanListPanelNotify = "closeQuanListPanelNotify";
    b.openRankPanelNotify = "openRankPanelNotify";
    b.closeRankPanelNotify = "closeRankPanelNotify";
    b.openRankRulePanelNotify = "openRankRulePanelNotify";
    b.closeRankRulePanelNotify = "closeRankRulePanelNotify";
    */
    b.openNoticePanelNotify = "openNoticePanelNotify";
    b.closeNoticePanelNotify = "closeNoticePanelNotify";
    /*
    b.openFormPanelNotify = "openFormPanelNotify";
    b.closeFormPanelNotify = "closeFormPanelNotify";
    b.openFormAlertPanelNotify = "openFormAlertPanelNotify";
    b.closeFormAlertPanelNotify = "closeFormAlertPanelNotify";
    b.openSelectAgePanelNotify = "openSelectAgePanelNotify";
    b.closeSelectAgePanelNotify = "closeSelectAgePanelNotify";
    //b.openRulePanelNotify = "openRulePanelNotify";
    //b.closeRulePanelNotify = "closeRulePanelNotify";
    */
}
)(PlatformNotify || (PlatformNotify = {}));
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , LoadingPanel = function(b) {
    function c() {
        b.call(this);
        this.bg = new egret.Sprite;
        this.h = this.w = 0;
        this.mySheet = RES.getRes("load");
        this.createView()
    }
    __extends(c, b);
    c.prototype.createView = function() {
        this.w = egret.MainContext.instance.stage.stageWidth;
        this.h = egret.MainContext.instance.stage.stageHeight;
        this.bg.graphics.beginFill(3223857, 1);
        this.bg.graphics.drawRect(0, 
        0, this.w, this.h);
        this.bg.graphics.endFill();
        this.bg.width = this.w;
        this.bg.height = this.h;
        this.addChild(this.bg);
        this.touchEnabled = !0;
        this.pgBg = new egret.Bitmap;
        this.pgBg.texture = this.mySheet.getTexture("pgBg");
        this.pgBg.x = this.w / 2 - this.pgBg.width / 2;
        this.pgBg.y = this.h / 2;
        this.addChild(this.pgBg);
        this.pgBar = new egret.Bitmap;
        this.pgBar.texture = this.mySheet.getTexture("pgBar");
        this.pgBar.x = this.w / 2 - this.pgBar.width / 2 - 77;
        this.pgBar.y = this.h / 2 + 5;
        this.addChild(this.pgBar);
        this.pgBar.width = 0;
        this.pgGift = new egret.Bitmap;
        this.pgGift.anchorX = 0.8;
        this.pgGift.anchorY = 0.5;
        this.pgGift.texture = this.mySheet.getTexture("pgGift");
        this.pgGift.scaleX = this.pgGift.scaleY = 0.4;
        this.pgGift.x = this.pgBg.x - 0.5 * this.pgBg.width;
        this.pgGift.y = this.pgBg.y - 40;
        this.addChild(this.pgGift);
        this.textField = new egret.TextField;
        this.textField.size = 24;
        this.textField.textColor = 16777215;
        this.textField.bold = !0;
        this.textField.stroke = 1;
        this.textField.strokeColor = 0;
        this.addChild(this.textField);
        this.textField.width = 100;
        this.textField.x = this.w / 2 - this.textField.width / 
        2;
        this.textField.y = this.h / 2 - this.textField.height / 2 - 10;
        this.textField.textAlign = "center";
        this.textField.text = "0%"
    }
    ;
    c.prototype.setProgress = function(b, a) {
        global_loading.progress(b,a);
        var c = Math.round(b / a * 100);
        this.textField.text = c + "%";
        this.pgBar.width = b / a * 414;
        this.pgGift.x = this.pgBg.x - 0.5 * this.pgBg.width + b / a * this.pgBg.width + 200
    }
    ;
    return c
}
(egret.Sprite);
LoadingPanel.prototype.__class__ = "LoadingPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , EButton = function(b) {
    function c(c, a, e, k, m, g, f) {
        void 0 === e && (e = null );
        void 0 === k && (k = "");
        void 0 === m && (m = 30);
        void 0 === g && (g = 1);
        void 0 === f && (f = "assets");
        b.call(this);
        this.assets = RES.getRes("assets");
        this.isPlayCartoon = !1;
        this.cartoonType = 1;
        this.param = {
            context: null ,
            data: null 
        };
        this.param.context = c;
        this.init(a, e, k, m, g, f)
    }
    __extends(c, b);
    c.prototype.init = 
    function(b, a, c, k, m, g) {
        void 0 === a && (a = null );
        void 0 === c && (c = "");
        void 0 === k && (k = 30);
        void 0 === m && (m = 1);
        void 0 === g && (g = "assets");
        this.cartoonType = m;
        this.backFun = a;
        this.btnImg = new egret.Bitmap;
        "assets" != g && (this.assets = RES.getRes(g));
        this.btnImg.texture = this.assets.getTexture(b);
        this.addChild(this.btnImg);
        "" != c && (this.textField = new egret.TextField,
        this.addChild(this.textField),
        this.textField.size = k,
        this.textField.textAlign = "center",
        this.textField.stroke = 1,
        this.textField.strokeColor = 0,
        this.textField.text = c,
        this.textField.width = this.btnImg.width,
        this.textField.x = this.btnImg.width / 2 - this.textField.width / 2,
        this.textField.y = this.btnImg.height / 2 - this.textField.height / 2);
        this.touchEnabled = !0;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbuttonTouchTap, this)
    }
    ;
    c.prototype.onbuttonTouchTap = function(b) {
        if (!this.isPlayCartoon) {
            this.isPlayCartoon = !0;
            var a = function() {
                this.isPlayCartoon = !1
            };
            egret.Tween.get(this).to({
                scaleX: 0.5,
                scaleY: 0.5,
                x: this.x + this.btnImg.width / 4,
                y: this.y + this.btnImg.height / 4
            }, 100, 
            egret.Ease.sineIn).call(function() {
                1 == this.cartoonType ? egret.Tween.get(this).to({
                    scaleX: 1,
                    scaleY: 1,
                    x: this.x - this.btnImg.width / 4,
                    y: this.y - this.btnImg.height / 4
                }, 500, egret.Ease.elasticOut).call(a, this) : 2 == this.cartoonType ? egret.Tween.get(this).to({
                    scaleX: 1,
                    scaleY: 1,
                    x: this.x - this.btnImg.width / 4,
                    y: this.y - this.btnImg.height / 4
                }, 500, egret.Ease.backOut).call(a, this) : 3 == this.cartoonType ? egret.Tween.get(this).to({
                    scaleX: 1,
                    scaleY: 1,
                    x: this.x - this.btnImg.width / 4,
                    y: this.y - this.btnImg.height / 4
                }, 100).call(a, this) : 
                4 == this.cartoonType && egret.Tween.get(this).to({
                    scaleX: 1,
                    scaleY: 1,
                    x: this.x - this.btnImg.width / 4,
                    y: this.y - this.btnImg.height / 4
                }, 0).call(a, this)
            }
            , this);
            egret.setTimeout(function() {
                null  != this.backFun && this.backFun(this.param)
            }
            , this, 300)
        }
    }
    ;
    c.prototype.setBindData = function(b) {
        this.param.data = b
    }
    ;
    c.prototype.getBindData = function() {
        return this.param.data
    }
    ;
    c.prototype.getBitmap = function() {
        return this.btnImg
    }
    ;
    return c
}
(egret.DisplayObjectContainer);
EButton.prototype.__class__ = "EButton";
__extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
;
(function(b) {
    var c = function(c) {
        function a() {
            c.call(this);
            this._dataFormat = egret.URLLoaderDataFormat.TEXT
        }
        __extends(a, c);
        a.prototype.getRes = function(a) {
            a = b.AnalyzerBase.getStringTail(a);
            return this.fileDic[a]
        }
        ;
        a.prototype.analyzeData = function(a, b) {
            if (b)
                for (var c = b.split(RegExp("\r\n", "gi")), d = c.length, f = 0; f < d; f++) {
                    var h = c[f].indexOf("=");
                    1 < h && (this.fileDic[c[f].substring(0, h)] = c[f].substring(h + 1))
                }
        }
        ;
        a.TYPE = "prop";
        return a
    }
    (b.BinAnalyzer);
    b.PropertiesAnalyzer = c;
    c.prototype.__class__ = "RES.PropertiesAnalyzer"
}
)(RES || 
(RES = {}));
var RegUtils;
(function(b) {
    function c(b) {
        return "" == b ? !0 : /^[ ]+$/.test(b)
    }
    b.checkEmail = function(b) {
        if (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(b))
            return !0;
        alert("\u60a8\u8f93\u5165\u7684Email\u5730\u5740\u683c\u5f0f\u4e0d\u6b63\u786e\uff01");
        return !1
    }
    ;
    b.isIP = function(b) {
        return c(b) ? !1 : /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g.test(b) && 256 > Number(RegExp.$1) && 256 > Number(RegExp.$2) && 256 > Number(RegExp.$3) && 256 > Number(RegExp.$4) ? !0 : !1
    }
    ;
    b.checkMobile = function(b) {
        return /\/^[1][3][0-9]{9}$\//.test(b) ? !0 : !1
    }
    ;
    b.checkPhone = function(b) {
        var a = 
        /^[0][1-9]{2,3}-[0-9]{5,10}$/
          , c = /^[1-9]{1}[0-9]{5,8}$/;
        if (9 < b.length) {
            if (a.test(b))
                return !0
        } else if (c.test(b))
            return !0;
        alert("\u60a8\u8f93\u5165\u7684\u7535\u8bdd\u53f7\u7801\u4e0d\u6b63\u786e!");
        return !1
    }
    ;
    b.isNull = c;
    b.isInteger = function(b) {
        return /^[-]{0,1}[0-9]{1,}$/.test(b)
    }
    ;
    b.isNumber = function(b) {
        return -1 != b.search(/^[0-9]+$/) ? !0 : !1
    }
    ;
    b.isMoney = function(b) {
        return /^[0-9]+[.][0-9]{0,3}$/.test(b) ? !0 : !1
    }
    ;
    b.cTrim = function(b, a) {
        var c = " "
          , k = -1;
        if (0 == a || 1 == a) {
            for (; " " == c; )
                ++k,
                c = b.substr(k, 1);
            b = b.substring(k)
        }
        if (0 == 
        a || 2 == a) {
            c = " ";
            for (k = b.length; " " == c; )
                --k,
                c = b.substr(k, 1);
            b = b.substring(0, k + 1)
        }
        return b
    }
    ;
    b.printf = function(b) {
        for (var a = [], c = 1; c < arguments.length; c++)
            a[c - 1] = arguments[c];
        c = /\{[a-z0-9_]+\}/i;
        if (null  == b || "" == b)
            return "";
        var k = 0, m = 0, g;
        switch (typeof a[0]) {
        case "number":
        case "boolean":
        case "string":
            k = a.length;
            for (m = 0; m < k; m++)
                b = b.replace(c, a[m]);
            break;
        case "object":
            if (a[0] instanceof Array)
                for (a = a[0],
                k = a.length,
                m = 0; m < k; m++)
                    b = b.replace(c, a[m]);
            else
                for (g in a[0])
                    c = new RegExp("{" + g + "}","ig"),
                    b = b.replace(c, 
                    a[0][g])
        }
        return b
    }
}
)(RegUtils || (RegUtils = {}));
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , BitmapBlink = function(b) {
    function c(c, a, e) {
        void 0 === e && (e = !0);
        b.call(this);
        this._target = c;
        this._time = a;
        e && this.start()
    }
    __extends(c, b);
    c.prototype.start = function() {
        this._currTime = egret.getTimer();
        this._target.addEventListener(egret.Event.ENTER_FRAME, this.runDown, this)
    }
    ;
    c.prototype.runDown = function(b) {
        this._target.alpha -= 0.045;
        !this.checkOver() && 
        0.6 >= this._target.alpha && (this._target.removeEventListener(egret.Event.ENTER_FRAME, this.runDown, this),
        this._target.addEventListener(egret.Event.ENTER_FRAME, this.runUp, this))
    }
    ;
    c.prototype.runUp = function(b) {
        this._target.alpha += 0.045;
        !this.checkOver() && 1 <= this._target.alpha && (this._target.removeEventListener(egret.Event.ENTER_FRAME, this.runUp, this),
        this._target.addEventListener(egret.Event.ENTER_FRAME, this.runDown, this))
    }
    ;
    c.prototype.checkOver = function() {
        return egret.getTimer() - this._currTime >= this._time ? 
        (this.destroy(),
        !0) : !1
    }
    ;
    c.prototype.destroy = function() {
        this._target.alpha = 1;
        this._target.removeEventListener(egret.Event.ENTER_FRAME, this.runDown, this);
        this._target.removeEventListener(egret.Event.ENTER_FRAME, this.runUp, this);
        this.dispatchEventWith(egret.Event.COMPLETE, !1, this._target);
        this._target = null 
    }
    ;
    return c
}
(egret.EventDispatcher);
BitmapBlink.prototype.__class__ = "BitmapBlink";
var TipsUtils;
(function(b) {
    b.showTipsDownToUp = function(b, d) {
        void 0 === b && (b = "");
        void 0 === d && (d = !1);
        var a = new ETextField;
        a.size = 24;
        a.y = GameConfig.curHeight() / 2;
        a.textColor = d ? GameConfig.TextColors.red : GameConfig.TextColors.green;
        a.alpha = 0;
        a.setText(b);
        a.strokeColor = 0;
        a.x = GameConfig.curWidth() / 2 - a.width / 2;
        a.stroke = 2;
        a.bold = !0;
        a.textAlign = egret.HorizontalAlign.CENTER;
        GameConfig.gameScene().topLayer.contains(a) || GameConfig.gameScene().topLayer.addChild(a);
        var e = function() {
            GameConfig.gameScene().topLayer.contains(a) && 
            (GameConfig.gameScene().topLayer.removeChild(a),
            a = null )
        }
        ;
        a.visible = !0;
        egret.Tween.get(a).to({
            y: a.y - 120,
            alpha: 1
        }, 800, egret.Ease.backOut).call(function() {
            egret.Tween.get(a).to({
                alpha: 0
            }, 500).call(e, this)
        }
        , this)
    }
    ;
    b.showTipsLeftOrRight = function(b, d, a) {
        void 0 === b && (b = "");
        void 0 === d && (d = !1);
        void 0 === a && (a = !0);
        var e = new ETextField;
        e.size = 24;
        e.y = GameConfig.curHeight() / 2;
        e.textColor = d ? GameConfig.TextColors.red : GameConfig.TextColors.green;
        e.alpha = 0;
        e.setText(b);
        e.strokeColor = 0;
        e.x = a ? -e.width : GameConfig.curWidth();
        e.stroke = 2;
        e.bold = !0;
        e.textAlign = egret.HorizontalAlign.CENTER;
        GameConfig.gameScene().topLayer.contains(e) || GameConfig.gameScene().topLayer.addChild(e);
        a ? egret.Tween.get(e).to({
            x: GameConfig.curWidth() / 2 - e.width / 2 - 50,
            alpha: 1
        }, 300, egret.Ease.sineInOut) : egret.Tween.get(e).to({
            x: GameConfig.curWidth() / 2 - e.width / 2 + 50,
            alpha: 1
        }, 300, egret.Ease.sineInOut);
        egret.setTimeout(function() {
            a ? egret.Tween.get(e).to({
                x: e.x + 100
            }, 500) : egret.Tween.get(e).to({
                x: e.x - 100
            }, 500)
        }
        , this, 300);
        egret.setTimeout(function() {
            a ? egret.Tween.get(e).to({
                x: GameConfig.curWidth()
            }, 
            300, egret.Ease.sineIn) : egret.Tween.get(e).to({
                x: -e.width
            }, 300, egret.Ease.sineIn)
        }
        , this, 800);
        egret.setTimeout(function() {
            GameConfig.gameScene().topLayer.contains(e) && (GameConfig.gameScene().topLayer.removeChild(e),
            e = null )
        }
        , this, 1100)
    }
    ;
    b.showTipsFromCenter = function(b, d) {
        void 0 === b && (b = "");
        void 0 === d && (d = !1);
        var a = new ETextField;
        a.size = 24;
        a.y = GameConfig.curHeight() / 2;
        a.textColor = d ? GameConfig.TextColors.red : GameConfig.TextColors.green;
        a.alpha = 0;
        a.setText(b);
        a.strokeColor = 0;
        a.x = GameConfig.curWidth() / 2;
        a.stroke = 2;
        a.bold = !0;
        a.textAlign = egret.HorizontalAlign.CENTER;
        a.anchorX = 0.5;
        a.anchorY = 0.5;
        a.scaleX = 0;
        a.scaleY = 0;
        GameConfig.gameScene().topLayer.contains(a) || GameConfig.gameScene().topLayer.addChild(a);
        var e = function() {
            GameConfig.gameScene().topLayer.contains(a) && (GameConfig.gameScene().topLayer.removeChild(a),
            a = null )
        }
        ;
        egret.Tween.get(a).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 200);
        egret.setTimeout(function() {
            egret.Tween.get(a).to({
                alpha: 0
            }, 500).call(e, this)
        }
        , this, 1E3)
    }
    ;
    b.showTipsBigToSmall = function(b, d) {
        void 0 === 
        b && (b = "");
        void 0 === d && (d = !1);
        var a = new ETextField;
        a.size = 24;
        a.y = GameConfig.curHeight() / 2;
        a.textColor = d ? GameConfig.TextColors.red : GameConfig.TextColors.green;
        a.alpha = 0;
        a.setText(b);
        a.strokeColor = 0;
        a.x = GameConfig.curWidth() / 2;
        a.stroke = 2;
        a.bold = !0;
        a.textAlign = egret.HorizontalAlign.CENTER;
        a.anchorX = 0.5;
        a.anchorY = 0.5;
        a.scaleX = 4;
        a.scaleY = 4;
        GameConfig.gameScene().topLayer.contains(a) || GameConfig.gameScene().topLayer.addChild(a);
        var e = function() {
            GameConfig.gameScene().topLayer.contains(a) && (GameConfig.gameScene().topLayer.removeChild(a),
            a = null )
        }
        ;
        egret.Tween.get(a).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 200);
        egret.setTimeout(function() {
            egret.Tween.get(a).to({
                alpha: 0
            }, 500).call(e, this)
        }
        , this, 1E3)
    }
}
)(TipsUtils || (TipsUtils = {}));
var PanelManager;
(function(b) {
    b.initPanel = function() {
        GlobalData.initIsVertical = GameConfig.isVertical();
        Global.addEventListener(MainNotify.openStartPanelNotify, this.openStartPanel, this);
        Global.addEventListener(MainNotify.closeStartPanelNotify, this.closeStartPanel, this);
        Global.addEventListener(MainNotify.openGamePanelNotify, this.openGamePanel, this);
        Global.addEventListener(MainNotify.openGamePanelNotify0, this.openGamePanel0, this);
        Global.addEventListener(MainNotify.closeGamePanelNotify, this.closeGamePanel, this);
        Global.addEventListener(MainNotify.stopGamePanelNotify, this.stopGamePanel, this);
        /*
        Global.addEventListener(MainNotify.openGameOverPanelNotify, this.openGameOverPanel, this);
        Global.addEventListener(MainNotify.closeGameOverPanelNotify, this.closeGameOverPanel, this);
        Global.addEventListener(MainNotify.openSharePanelNotify, this.openSharePanel, this);
        Global.addEventListener(MainNotify.closeSharePanelNotify, this.closeSharePanel, this);
        Global.addEventListener(PlatformNotify.openPrizePanelNotify, this.openPrizePanel, this);
        Global.addEventListener(PlatformNotify.closePrizePanelNotify, this.closePrizePanel, this);
        
        Global.addEventListener(PlatformNotify.openSubmitInfoPanelNotify, this.openSubmitInfoPanel, this);
        Global.addEventListener(PlatformNotify.closeSubmitInfoPanelNotify, this.closeSubmitInfoPanel, this);
        Global.addEventListener(PlatformNotify.openSubmitSuccessPanelNotify, this.openSubmitSuccessPanel, this);
        Global.addEventListener(PlatformNotify.closeSubmitSuccessPanelNotify, this.closeSubmitSuccessPanel, this);
        */
        Global.addEventListener(PlatformNotify.openFialedPanelNotify, this.openFialedPanel, this);
        Global.addEventListener(PlatformNotify.closeFialedPanelNotify, this.closeFialedPanel, this);
        /*
        Global.addEventListener(PlatformNotify.openCFormAlertPanelNotify, this.openCFormAlertPanel, this);
        Global.addEventListener(PlatformNotify.closeCFormAlertPanelNotify, this.closeCFormAlertPanel, this);
        Global.addEventListener(PlatformNotify.openCSelectAgePanelNotify, this.openCSelectAgePanel, this);
        Global.addEventListener(PlatformNotify.closeCSelectAgePanelNotify, this.closeCSelectAgePanel, this);
        Global.addEventListener(PlatformNotify.openFaQuanPrizePanelNotify, this.openFaQuanPrizePanel, this);
        Global.addEventListener(PlatformNotify.closeFaQuanPrizePanelNotify, this.closeFaQuanPrizePanel, this);
        Global.addEventListener(PlatformNotify.openFaQuanFialedPanelNotify, this.openFaQuanFialedPanel, this);
        Global.addEventListener(PlatformNotify.closeFaQuanFialedPanelNotify, this.closeFaQuanFialedPanel, this);
        Global.addEventListener(PlatformNotify.openQuanListPanelNotify, this.openQuanListPanel, this);
        Global.addEventListener(PlatformNotify.closeQuanListPanelNotify, this.closeQuanListPanel, this);
        Global.addEventListener(PlatformNotify.openRankPanelNotify, this.openRankPanel, this);
        Global.addEventListener(PlatformNotify.closeRankPanelNotify, this.closeRankPanel, this);
        Global.addEventListener(PlatformNotify.openRankRulePanelNotify, this.openRankRulePanel, this);
        Global.addEventListener(PlatformNotify.closeRankRulePanelNotify, this.closeRankRulePanel, this);
        Global.addEventListener(PlatformNotify.openNoticePanelNotify, this.openNoticePanel, this);
        Global.addEventListener(PlatformNotify.closeNoticePanelNotify, this.closeNoticePanel, this);
        Global.addEventListener(PlatformNotify.openFormPanelNotify, this.openFormPanel, this);
        Global.addEventListener(PlatformNotify.closeFormPanelNotify, this.closeFormPanel, this);
        Global.addEventListener(PlatformNotify.openFormAlertPanelNotify, this.openFormAlertPanel, this);
        Global.addEventListener(PlatformNotify.closeFormAlertPanelNotify, this.closeFormAlertPanel, this);
        Global.addEventListener(PlatformNotify.openSelectAgePanelNotify, this.openSelectAgePanel, this);
        Global.addEventListener(PlatformNotify.closeSelectAgePanelNotify, this.closeSelectAgePanel, this);
        Global.addEventListener(PlatformNotify.openRulePanelNotify, this.openRulePanel, this);
        Global.addEventListener(PlatformNotify.closeRulePanelNotify, this.closeRulePanel, this);
        */
    }
    ;
    b.openStartPanel = function() {
        null  == this.startPanel && (this.startPanel = new StartPanel,
        PopUpManager.addPopUp(this.startPanel, !1, 0, 0, 0))
    }
    ;
    b.closeStartPanel = function() {
        null  != this.startPanel && (PopUpManager.removePopUp(this.startPanel, 4),
        this.startPanel = null )
    }
    ;
    b.openGamePanel = function() {
        null  == this.gamePanel && 
        (this.gamePanel = new GamePanel,
        PopUpManager.addPopUp(this.gamePanel, !1, 0, 0, 4))
    }
    ;
    b.openGamePanel0 = function() {
        null  == this.gamePanel && (this.gamePanel = new GamePanel,
        PopUpManager.addPopUp(this.gamePanel, !1, 0, 0, 4))
    }
    ;
    b.closeGamePanel = function() {
        null  != this.gamePanel && (PopUpManager.removePopUp(this.gamePanel, 4),
        this.gamePanel = null )
    }
    ;
    b.stopGamePanel = function() {
        if (null  != this.gamePanel)
            this.gamePanel.onExit()
    }
    ;
    b.openGameOverPanel = function() {
        null  == this.gameOverPanel && (this.gameOverPanel = new GameOverPanel,
        PopUpManager.addPopUp(this.gameOverPanel, 
        !1, 0, 0, 4))
    }
    ;
    b.closeGameOverPanel = function() {
        null  != this.gameOverPanel && (PopUpManager.removePopUp(this.gameOverPanel, 0),
        this.gameOverPanel = null )
    }
    ;
    b.openSharePanel = function() {
        null  == this.sharePanel && (this.sharePanel = new SharePanel,
        PopUpManager.addPopUp(this.sharePanel, !1, 0, 0, 3))
    }
    ;
    b.closeSharePanel = function() {
        null  != this.sharePanel && (PopUpManager.removePopUp(this.sharePanel, 3),
        this.sharePanel = null )
    }
    ;
    b.openPrizePanel = function(b) {
        null  == this.prizePanel && (this.prizePanel = new PrizePanel(b.param),
        PopUpManager.addPopUp(this.prizePanel, 
        !1, 0, 0, 3))
    }
    ;
    b.closePrizePanel = function() {
        null  != this.prizePanel && (PopUpManager.removePopUp(this.prizePanel, 3),
        this.prizePanel = null )
    }
    ;
    b.openSubmitInfoPanel = function() {
        null  == this.submitInfoPanel && (this.submitInfoPanel = new SubmitInfoPanel,
        PopUpManager.addPopUp(this.submitInfoPanel, !1, 0, 0, 3))
    }
    ;
    b.closeSubmitInfoPanel = function() {
        null  != this.submitInfoPanel && (PopUpManager.removePopUp(this.submitInfoPanel, 3),
        this.submitInfoPanel = null )
    }
    ;
    b.openSubmitSuccessPanel = function() {
        null  == this.submitSuccessPanel && (this.submitSuccessPanel = 
        new SubmitSuccessPanel,
        PopUpManager.addPopUp(this.submitSuccessPanel, !0, 378, 240, 1))
    }
    ;
    b.closeSubmitSuccessPanel = function() {
        null  != this.submitSuccessPanel && (PopUpManager.removePopUp(this.submitSuccessPanel, 1),
        this.submitSuccessPanel = null )
    }
    ;
    b.openFialedPanel = function() {
        null  == this.fialedPanel && (this.fialedPanel = new FialedPanel,
        PopUpManager.addPopUp(this.fialedPanel, !0, 378, 240, 1))
    }
    ;
    b.closeFialedPanel = function() {
        null  != this.fialedPanel && (PopUpManager.removePopUp(this.fialedPanel, 1),
        this.fialedPanel = null )
    }
    ;
    b.openCFormAlertPanel = function(b) {
        null  == this.cFormAlertPanel && (this.cFormAlertPanel = new CFormAlertPanel(b.param),
        PopUpManager.addPopUp(this.cFormAlertPanel, !0, 298, 200, 2))
    }
    ;
    b.closeCFormAlertPanel = function() {
        null  != this.cFormAlertPanel && (PopUpManager.removePopUp(this.cFormAlertPanel, 1),
        this.cFormAlertPanel = null )
    }
    ;
    b.openCSelectAgePanel = function() {
        null  == this.cSelectAgePanel && (this.cSelectAgePanel = new CSelectAgePanel,
        PopUpManager.addPopUp(this.cSelectAgePanel, !0, 409, 495, 5, !0))
    }
    ;
    b.closeCSelectAgePanel = function() {
        null  != 
        this.cSelectAgePanel && (PopUpManager.removePopUp(this.cSelectAgePanel, 6),
        this.cSelectAgePanel = null )
    }
    ;
    b.openFaQuanPrizePanel = function(b) {
        null  == this.faQuanPrizePanel && (this.faQuanPrizePanel = new FaQuanPrizePanel(b.param),
        PopUpManager.addPopUp(this.faQuanPrizePanel, !1, 0, 0, 3))
    }
    ;
    b.closeFaQuanPrizePanel = function() {
        null  != this.faQuanPrizePanel && (PopUpManager.removePopUp(this.faQuanPrizePanel, 3),
        this.faQuanPrizePanel = null )
    }
    ;
    b.openFaQuanFialedPanel = function() {
        null  == this.faQuanFialedPanel && (this.faQuanFialedPanel = 
        new FaQuanFialedPanel,
        PopUpManager.addPopUp(this.faQuanFialedPanel, !1, 0, 0, 3))
    }
    ;
    b.closeFaQuanFialedPanel = function() {
        null  != this.faQuanFialedPanel && (PopUpManager.removePopUp(this.faQuanFialedPanel, 3),
        this.faQuanFialedPanel = null )
    }
    ;
    b.openQuanListPanel = function(b) {
        null  == this.quanListPanel && (this.quanListPanel = new QuanListPanel(b.param),
        PopUpManager.addPopUp(this.quanListPanel, !0, 407, 506, 1))
    }
    ;
    b.closeQuanListPanel = function() {
        null  != this.quanListPanel && (PopUpManager.removePopUp(this.quanListPanel, 1),
        this.quanListPanel = 
        null )
    }
    ;
    b.openRankPanel = function() {
        null  == this.rankPanel && (this.rankPanel = new RankPanel,
        PopUpManager.addPopUp(this.rankPanel, !1, 0, 0, 3))
    }
    ;
    b.closeRankPanel = function() {
        null  != this.rankPanel && (PopUpManager.removePopUp(this.rankPanel, 3),
        this.rankPanel = null )
    }
    ;
    b.openRankRulePanel = function() {
        null  == this.rankRulePanel && (this.rankRulePanel = new RankRulePanel,
        PopUpManager.addPopUp(this.rankRulePanel, !1, 0, 0, 3))
    }
    ;
    b.closeRankRulePanel = function() {
        null  != this.rankRulePanel && (PopUpManager.removePopUp(this.rankRulePanel, 
        3),
        this.rankRulePanel = null )
    }
    ;
    b.openNoticePanel = function() {
        null  == this.noticePanel && (this.noticePanel = new NoticePanel,
        PopUpManager.addPopUp(this.noticePanel, !0, 353, 210, 2))
    }
    ;
    b.closeNoticePanel = function() {
        null  != this.noticePanel && (PopUpManager.removePopUp(this.noticePanel, 1),
        this.noticePanel = null )
    }
    ;
    b.openFormPanel = function() {
        null  == this.formPanel && (this.formPanel = new FormPanel,
        PopUpManager.addPopUp(this.formPanel, !1, 0, 0, 3))
    }
    ;
    b.closeFormPanel = function() {
        null  != this.formPanel && (PopUpManager.removePopUp(this.formPanel, 
        3),
        this.formPanel = null )
    }
    ;
    b.openFormAlertPanel = function(b) {
        null  == this.formAlertPanel && (this.formAlertPanel = new FormAlertPanel(b.param),
        PopUpManager.addPopUp(this.formAlertPanel, !0, 298, 200, 2))
    }
    ;
    b.closeFormAlertPanel = function() {
        null  != this.formAlertPanel && (PopUpManager.removePopUp(this.formAlertPanel, 1),
        this.formAlertPanel = null )
    }
    ;
    b.openSelectAgePanel = function() {
        null  == this.selectAgePanel && (this.selectAgePanel = new SelectAgePanel,
        PopUpManager.addPopUp(this.selectAgePanel, !0, 409, 495, 5, !0))
    }
    ;
    b.closeSelectAgePanel = 
    function() {
        null  != this.selectAgePanel && (PopUpManager.removePopUp(this.selectAgePanel, 6),
        this.selectAgePanel = null )
    }
    ;
    b.openRulePanel = function() {
        null  == this.rulePanel && (this.rulePanel = new RulePanel,
        PopUpManager.addPopUp(this.rulePanel, !0, 450, 720, 2))
    }
    ;
    b.closeRulePanel = function() {
        null  != this.rulePanel && (PopUpManager.removePopUp(this.rulePanel, 1),
        this.rulePanel = null )
    }
}
)(PanelManager || (PanelManager = {}));
var PlatformData;
(function(b) {
    b.lot_type = 0;
    b.notGetGiftTips = "";
    b.prizesArr = [];
    b.getReward = !0;
    b.myPrizesArr = [];
    b.starttime0 = 0;
    b.endtime0 = 0;
    b.rankArr = [];
    b.starttime = "";
    b.endtime = "";
    b.prizeruledesc = "";
    b.formHash = {
        item: 0,
        qq: 1,
        weixinnum: 2,
        age: 3,
        career: 4,
        company: 5,
        worktime: 6,
        email: 7,
        speciality: 8,
        location: 9,
        name: 10,
        tel: 11,
        address: 12
    };
    b.formitems = [];
    b.formruledesc = "";
    b.scorelimit = 0;
    b.setscorelimit = !1;
    b.unablerafflemsg = "";
    b.isset = !1;
    b.type = 1;
    b.linkname = "\u6211\u4e5f\u8981\u514d\u8d39\u5236\u4f5c";
    b.linkpath = "http://www.tuyoumi.com";
    b.imageurl = "";
    b.imagepath = "http://www.tuyoumi.com";
    b.qrcodeurl = "";
    b.qrcodepath = ""
}
)(PlatformData || (PlatformData = {}));
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , GameApp = function(b) {
    function c() {
        b.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    __extends(c, b);
    c.prototype.onAddToStage = function(b) {
        egret.Injector.mapClass(RES.AnalyzerBase, RES.PropertiesAnalyzer, RES.PropertiesAnalyzer.TYPE);
        this.addChild(GameConfig.gameScene());
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        //RES.loadConfig("resource.json", "");
        RES.loadConfig("", "/");
        RES.loadGroup("soundload");
    };
    c.prototype.onConfigComplete = function(b) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        //RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        //RES.loadGroup("loading");
        RES.loadGroup("preload");
    };
    c.prototype.onResourceLoadComplete = function(b) {
        "preload" == b.groupName &&
        (RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this),
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this),
        this.createGameScene());
        //this.loadingPanel = new LoadingPanel, PopUpManager.addPopUp(this.loadingPanel), RES.loadGroup("preload")
    };
    c.onResourceLoadError = function(b) {
        console.warn("Group:" + b.groupName + " has failed to load");
        this.onResourceLoadComplete(b);
    };
    c.prototype.onResourceProgress = function(b) {
        "preload" == b.groupName && global_loading.progress(b.itemsLoaded, b.itemsTotal);
        //"preload" == b.groupName && this.loadingPanel.setProgress(b.itemsLoaded, b.itemsTotal)
    };
    c.prototype.createGameScene = function() {
        var b = this;
        GameConfig.gameScene().maskLayer.removeChildren();
        //PopUpManager.removePopUp(b.loadingPanel);
        PanelManager.initPanel();
        Global.dispatchEvent(MainNotify.openStartPanelNotify, null , !1)
        /*
        window.tuyoumiCfg.getSetting(function(a) {
            GameConfig.gameScene().maskLayer.removeChild(Global.waitPanel);
            Global.waitPanel = null ;
            PlatformData.notGetGiftTips = a.nowinmsg;
            PlatformData.prizesArr = a.prizes;
            PlatformData.lot_type = a.lot_type;
            PlatformData.starttime0 = Number(a.starttime);
            PlatformData.endtime0 = Number(a.endtime);
            PlatformData.starttime = b.getDate(Number(a.starttime));
            PlatformData.endtime = b.getDate(Number(a.endtime));
            PlatformData.prizeruledesc = a.prizeruledesc;
            PlatformData.formruledesc = a.formruledesc;
            PlatformData.formitems = a.formitems;
            PlatformData.scorelimit = Number(a.scorelimit);
            PlatformData.setscorelimit = "1" == a.setscorelimit;
            PlatformData.unablerafflemsg = a.unablerafflemsg;
            a = a.marketinginfo;
            PlatformData.isset = "1" == a.isset;
            PlatformData.type = Number(a.type);
            PlatformData.linkname = a.linkname;
            PlatformData.linkpath = a.linkpath;
            PlatformData.imageurl = window.location.origin + a.imageurl;
            PlatformData.imagepath = a.imagepath;
            PlatformData.qrcodeurl = window.location.origin + a.qrcodeurl;
            PlatformData.qrcodepath = window.location.origin + a.qrcodepath;
            window.bottombanner.load(PlatformData.qrcodepath);
            PopUpManager.removePopUp(b.loadingPanel);
            PanelManager.initPanel();
            Global.dispatchEvent(MainNotify.openStartPanelNotify, null , !1)
        }
        )
        */
    };
    c.prototype.getDate = function(b) {
        var a = new Date(1E3 * b);
        b = a.getFullYear() + "\u5e74";
        var c = a.getMonth() + 1 + "\u6708"
          , k = a.getDate() + "\u65e5"
          , a = a.toTimeString().substring(0, 8);
        return [b, c, k, a].join("");
    };
    return c
}
(egret.DisplayObjectContainer);
GameApp.prototype.__class__ = "GameApp";

var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , ShareIconRender = function(b) {
    function c() {
        b.call(this);
        this.titleTF = new egret.TextField;
        this.weixinTF = new egret.TextField;
        this.qqzoneTF = new egret.TextField;
        this.sinaweiboTF = new egret.TextField;
        this.qqTF = new egret.TextField;
        this.renrenTF = new egret.TextField;
        this.qqweiboTF = new egret.TextField;
        this.doubanTF = new egret.TextField;
        this.assets = 
        RES.getRes("socialIcon");
        this.bg = new egret.Sprite;
        this.h = this.w = 0;
        this.w = GameConfig.curWidth();
        this.h = GameConfig.curHeight();
        this.init()
    }
    __extends(c, b);
    c.prototype.init = function() {
        this.bg.graphics.beginFill(16777215, 0.9);
        this.bg.graphics.drawRect(0, 0, this.w, 300);
        this.bg.graphics.endFill();
        this.bg.width = this.w;
        this.bg.height = 300;
        this.addChild(this.bg);
        this.bg.alpha = 1;
        this.bg.touchEnabled = !0;
        this.titleTF.size = 24;
        this.titleTF.textColor = 0;
        this.titleTF.text = "\u5206\u4eab\u5230";
        this.titleTF.x = this.w / 2 - 
        this.titleTF.width / 2;
        this.titleTF.y = 10;
        this.titleTF.bold = !0;
        this.titleTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.titleTF);
        this.weixinBtn = new EButton(this,"weixin",null ,"",30,1,"socialIcon");
        this.weixinBtn.x = 20;
        this.weixinBtn.y = 40;
        this.addChild(this.weixinBtn);
        this.weixinBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onWeixinBtnTouchTap, this);
        this.qqzoneBtn = new EButton(this,"qqzone",null ,"",30,1,"socialIcon");
        this.qqzoneBtn.x = this.weixinBtn.x + this.qqzoneBtn.width + 20;
        this.qqzoneBtn.y = 
        40;
        this.addChild(this.qqzoneBtn);
        this.qqzoneBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQQzoneBtnTouchTap, this);
        this.sinaweiboBtn = new EButton(this,"sinaweibo",null ,"",30,1,"socialIcon");
        this.sinaweiboBtn.x = this.qqzoneBtn.x + this.sinaweiboBtn.width + 20;
        this.sinaweiboBtn.y = 40;
        this.addChild(this.sinaweiboBtn);
        this.sinaweiboBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSinaweiboBtnTouchTap, this);
        this.qqBtn = new EButton(this,"qq",null ,"",30,1,"socialIcon");
        this.qqBtn.x = this.sinaweiboBtn.x + 
        this.qqBtn.width + 20;
        this.qqBtn.y = 40;
        this.addChild(this.qqBtn);
        this.qqBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQQBtnTouchTap, this);
        this.renrenBtn = new EButton(this,"renren",null ,"",30,1,"socialIcon");
        this.renrenBtn.x = this.qqBtn.x + this.renrenBtn.width + 20;
        this.renrenBtn.y = 40;
        this.addChild(this.renrenBtn);
        this.renrenBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRenrenBtnTouchTap, this);
        this.qqweiboBtn = new EButton(this,"qqweibo",null ,"",30,1,"socialIcon");
        this.qqweiboBtn.x = 20;
        this.qqweiboBtn.y = 
        130;
        this.addChild(this.qqweiboBtn);
        this.qqweiboBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQQweiboBtnTouchTap, this);
        this.doubanBtn = new EButton(this,"douban",null ,"",30,1,"socialIcon");
        this.doubanBtn.x = this.qqweiboBtn.x + this.doubanBtn.width + 20;
        this.doubanBtn.y = 130;
        this.addChild(this.doubanBtn);
        this.doubanBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDoubanBtnTouchTap, this);
        this.weixinTF.size = 16;
        this.weixinTF.textColor = 0;
        this.weixinTF.text = "\u5fae\u4fe1";
        this.weixinTF.x = this.weixinBtn.x + 
        this.weixinBtn.width / 2 - this.weixinTF.width / 2;
        this.weixinTF.y = 40 + this.weixinBtn.height;
        this.weixinTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.weixinTF);
        this.qqzoneTF.size = 16;
        this.qqzoneTF.textColor = 0;
        this.qqzoneTF.text = "QQ\u7a7a\u95f4";
        this.qqzoneTF.x = this.qqzoneBtn.x + this.qqzoneBtn.width / 2 - this.qqzoneTF.width / 2;
        this.qqzoneTF.y = 40 + this.qqzoneBtn.height;
        this.qqzoneTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.qqzoneTF);
        this.sinaweiboTF.size = 16;
        this.sinaweiboTF.textColor = 
        0;
        this.sinaweiboTF.text = "\u65b0\u6d6a\u5fae\u535a";
        this.sinaweiboTF.x = this.sinaweiboBtn.x + this.sinaweiboBtn.width / 2 - this.sinaweiboTF.width / 2;
        this.sinaweiboTF.y = 40 + this.sinaweiboBtn.height;
        this.sinaweiboTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.sinaweiboTF);
        this.qqTF.size = 16;
        this.qqTF.textColor = 0;
        this.qqTF.text = "QQ\u597d\u53cb";
        this.qqTF.x = this.qqBtn.x + this.qqBtn.width / 2 - this.qqTF.width / 2;
        this.qqTF.y = 40 + this.qqBtn.height;
        this.qqTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.qqTF);
        this.renrenTF.size = 16;
        this.renrenTF.textColor = 0;
        this.renrenTF.text = "\u4eba\u4eba\u7f51";
        this.renrenTF.x = this.renrenBtn.x + this.renrenBtn.width / 2 - this.renrenTF.width / 2;
        this.renrenTF.y = 40 + this.renrenBtn.height;
        this.renrenTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.renrenTF);
        this.qqweiboTF.size = 16;
        this.qqweiboTF.textColor = 0;
        this.qqweiboTF.text = "QQ\u5fae\u535a";
        this.qqweiboTF.x = this.qqweiboBtn.x + this.qqweiboBtn.width / 2 - this.qqweiboTF.width / 2;
        this.qqweiboTF.y = 130 + this.qqweiboBtn.height;
        this.qqweiboTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.qqweiboTF);
        this.doubanTF.size = 16;
        this.doubanTF.textColor = 0;
        this.doubanTF.text = "\u8c46\u74e3\u5e7f\u64ad";
        this.doubanTF.x = this.doubanBtn.x + this.doubanBtn.width / 2 - this.doubanTF.width / 2;
        this.doubanTF.y = 130 + this.doubanBtn.height;
        this.doubanTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.doubanTF)
    }
    ;
    c.prototype.onWeixinBtnTouchTap = function() {
        Global.dispatchEvent(MainNotify.updateShareNotify, "micromessenger")
    }
    ;
    c.prototype.onQQzoneBtnTouchTap = 
    function() {
        Global.dispatchEvent(MainNotify.updateShareNotify, "qzone")
    }
    ;
    c.prototype.onSinaweiboBtnTouchTap = function() {
        Global.dispatchEvent(MainNotify.updateShareNotify, "weibo")
    }
    ;
    c.prototype.onQQBtnTouchTap = function() {
        Global.dispatchEvent(MainNotify.updateShareNotify, "qq")
    }
    ;
    c.prototype.onRenrenBtnTouchTap = function() {
        Global.dispatchEvent(MainNotify.updateShareNotify, "renren")
    }
    ;
    c.prototype.onQQweiboBtnTouchTap = function() {
        Global.dispatchEvent(MainNotify.updateShareNotify, "txmicroblog")
    }
    ;
    c.prototype.onDoubanBtnTouchTap = 
    function() {
        Global.dispatchEvent(MainNotify.updateShareNotify, "douban")
    }
    ;
    return c
}
(egret.DisplayObjectContainer);
ShareIconRender.prototype.__class__ = "ShareIconRender";
var EffectUtils;
(function(b) {
    b.rotationEffect = function(b, d) {
        void 0 === d && (d = 1E3);
        null  == this.rotationArr && (this.rotationArr = []);
        if (!this.rotationArr[b.hashCode]) {
            null  != this.rotationArr[b.hashCode] && this.rotationArr[b.hashCode] || (this.rotationArr[b.hashCode] = !0);
            var a = function() {
                this.rotationArr[b.hashCode] && null  != b && (b.rotation = 0,
                egret.Tween.get(b).to({
                    rotation: 360
                }, d).call(a, this))
            }
            ;
            b.rotation = 0;
            egret.Tween.get(b).to({
                rotation: 360
            }, d).call(a, this)
        }
    }
    ;
    b.removeRotationEffect = function(b) {
        null  == this.rotationArr && (this.rotationArr = 
        []);
        this.rotationArr[b.hashCode] = !1
    }
    ;
    b.blinkEffect = function(b, d) {
        void 0 === d && (d = 1E3);
        new BitmapBlink(b,d)
    }
    ;
    b.shakeObj = function(b) {
        var d = b.x;
        egret.Tween.get(b).to({
            x: b.x - 10
        }, 80);
        egret.setTimeout(function() {
            egret.Tween.get(b).to({
                x: b.x + 20
            }, 80)
        }
        , this, 160);
        egret.setTimeout(function() {
            egret.Tween.get(b).to({
                x: b.x - 20
            }, 80)
        }
        , this, 240);
        egret.setTimeout(function() {
            egret.Tween.get(b).to({
                x: b.x + 20
            }, 80)
        }
        , this, 320);
        egret.setTimeout(function() {
            egret.Tween.get(b).to({
                x: d
            }, 80)
        }
        , this, 400)
    }
    ;
    b.shakeScreen = function(b) {
        void 0 === 
        b && (b = 1);
        var d = GameConfig.curPanel
          , a = d.x
          , e = d.y;
        1 == b ? (egret.Tween.get(d).to({
            x: d.x - 10
        }, 40),
        egret.setTimeout(function() {
            egret.Tween.get(d).to({
                x: d.x + 20
            }, 40)
        }
        , this, 80),
        egret.setTimeout(function() {
            egret.Tween.get(d).to({
                x: d.x - 20
            }, 40)
        }
        , this, 120),
        egret.setTimeout(function() {
            egret.Tween.get(d).to({
                x: d.x + 20
            }, 40)
        }
        , this, 160),
        egret.setTimeout(function() {
            egret.Tween.get(d).to({
                x: a
            }, 40)
        }
        , this, 200)) : 2 == b && (egret.Tween.get(d).to({
            x: d.x - 10,
            y: d.y
        }, 40),
        egret.setTimeout(function() {
            egret.Tween.get(d).to({
                x: d.x + 20,
                y: d.y
            }, 
            40)
        }
        , this, 80),
        egret.setTimeout(function() {
            egret.Tween.get(d).to({
                x: d.x,
                y: d.y + 15
            }, 40)
        }
        , this, 120),
        egret.setTimeout(function() {
            egret.Tween.get(d).to({
                x: d.x,
                y: d.y - 20
            }, 40)
        }
        , this, 160),
        egret.setTimeout(function() {
            egret.Tween.get(d).to({
                x: d.x,
                y: d.y + 10
            }, 40)
        }
        , this, 200),
        egret.setTimeout(function() {
            egret.Tween.get(d).to({
                x: a,
                y: e
            }, 40)
        }
        , this, 240));
        3 == b && (console.log("\u9707\u52a8"),
        egret.Tween.get(d).to({
            y: d.y - 10
        }, 40),
        egret.setTimeout(function() {
            egret.Tween.get(d).to({
                y: d.y + 20
            }, 40)
        }
        , this, 80),
        egret.setTimeout(function() {
            egret.Tween.get(d).to({
                y: d.y - 
                20
            }, 40)
        }
        , this, 120),
        egret.setTimeout(function() {
            egret.Tween.get(d).to({
                y: d.y + 20
            }, 40)
        }
        , this, 160),
        egret.setTimeout(function() {
            egret.Tween.get(d).to({
                y: e
            }, 40)
        }
        , this, 200))
    }
    ;
    b.showTips = function(b, d, a) {
        void 0 === b && (b = "");
        void 0 === d && (d = 1);
        void 0 === a && (a = !1);
        switch (d) {
        case 1:
            TipsUtils.showTipsDownToUp(b, a);
            break;
        case 2:
            TipsUtils.showTipsLeftOrRight(b, a, !0);
            break;
        case 3:
            TipsUtils.showTipsLeftOrRight(b, a, !1);
            break;
        case 4:
            TipsUtils.showTipsFromCenter(b, a);
            break;
        case 5:
            TipsUtils.showTipsBigToSmall(b, a)
        }
    }
    ;
    b.playEffect = 
    function(b, d) {
        void 0 === d && (d = 1);
        if (!this.isPlayEffectPlay) {
            this.isPlayEffectPlay = !0;
            var a = function() {
                this.isPlayEffectPlay = !1
            }
            ;
            egret.Tween.get(b).to({
                scaleX: 0.5,
                scaleY: 0.5,
                x: b.x + b.width / 4,
                y: b.y + b.height / 4
            }, 100, egret.Ease.sineIn).call(function() {
                1 == d ? egret.Tween.get(b).to({
                    scaleX: 1,
                    scaleY: 1,
                    x: b.x - b.width / 4,
                    y: b.y - b.height / 4
                }, 500, egret.Ease.elasticOut).call(a, this) : 2 == d ? egret.Tween.get(b).to({
                    scaleX: 1,
                    scaleY: 1,
                    x: b.x - b.width / 4,
                    y: b.y - b.height / 4
                }, 500, egret.Ease.backOut).call(a, this) : 3 == d && egret.Tween.get(b).to({
                    scaleX: 1,
                    scaleY: 1,
                    x: b.x - b.width / 4,
                    y: b.y - b.height / 4
                }, 100).call(a, this)
            }
            , this)
        }
    }
    ;
    b.playEffect2 = function(b, d) {
        void 0 === d && (d = 1);
        var a = function() {}
        ;
        egret.Tween.get(b).to({
            scaleX: 1.2,
            scaleY: 1.2
        }, 50, egret.Ease.sineIn).call(function() {
            1 == d ? egret.Tween.get(b).to({
                scaleX: 1,
                scaleY: 1
            }, 500, egret.Ease.elasticOut).call(a, this) : 2 == d ? egret.Tween.get(b).to({
                scaleX: 1,
                scaleY: 1
            }, 50, egret.Ease.backOut).call(a, this) : 3 == d && egret.Tween.get(b).to({
                scaleX: 1,
                scaleY: 1
            }, 100).call(a, this)
        }
        , this)
    }
    ;
    b.playNumEffect = function(b, d) {
        void 0 === 
        d && (d = 1);
        var a = Number(b.text)
          , e = 0
          , k = function() {
            egret.setTimeout(function() {
                b.text = "" + e;
                a <= e + d ? b.text = "" + a : (e += d,
                b.text = "" + e,
                k())
            }
            , this, 30)
        }
        ;
        b.text = "" + e;
        k()
    }
    ;
    b.playScaleEffect = function(b) {
        var d = function() {
            null  != b && (b.alpha = 1,
            egret.Tween.get(b).to({
                scaleX: 1.5,
                scaleY: 1.5,
                alpha: 0
            }, 1E3).call(function() {
                b.scaleX = 1;
                b.scaleY = 1;
                egret.Tween.get(b).to({
                    alpha: 1
                }, 1E3).call(d, self)
            }
            , self))
        }
        ;
        d()
    }
    ;
    b.flyObj = function(b, d, a) {
        void 0 === a && (a = 50);
        var e = function() {
            null  != b && egret.Tween.get(b).to({
                y: b.y + a
            }, d).call(function() {
                egret.Tween.get(b).to({
                    y: b.y - 
                    a
                }, d).call(e, this)
            }
            , this)
        }
        ;
        e()
    }
    ;
    b.rockObj = function(b, d, a) {
        void 0 === a && (a = 20);
        var e = function() {
            null  != b && egret.Tween.get(b).to({
                rotation: a
            }, d).call(function() {
                egret.Tween.get(b).to({
                    rotation: -a
                }, d).call(e, this)
            }
            , this)
        }
        ;
        e()
    }
    ;
    b.flyTo = function(b, d, a, e, k) {
        void 0 === k && (k = !1);
        var m, g;
        null  != b && (m = b.x,
        g = b.y);
        var f = function() {
            if (null  != b) {
                var h = function() {
                    egret.Tween.get(b).to({
                        x: m,
                        y: g
                    }, e).call(f, this)
                }
                ;
                k ? egret.Tween.get(b).to({
                    x: d,
                    y: a
                }, e).call(h, this) : egret.Tween.get(b).to({
                    x: d,
                    y: a
                }, e)
            }
        }
        ;
        f()
    }
}
)(EffectUtils || 
(EffectUtils = {}));
var LogUtil;
(function(b) {
    b.isdebug = !0;
    b.log = function(c) {
        for (var d = [], a = 1; a < arguments.length; a++)
            d[a - 1] = arguments[a];
        var a = c, e;
        if (b.isdebug) {
            if (0 < d.length)
                for (e in d)
                    a += d[e];
            console.log(a)
        }
    }
}
)(LogUtil || (LogUtil = {}));
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , AgeRender = function(b) {
    function c() {
        b.call(this);
        this.h = this.w = 0;
        this.keyValue = "";
        this.mySheet = RES.getRes("form");
        this.createView()
    }
    __extends(c, b);
    c.prototype.createView = function() {
        this.w = egret.MainContext.instance.stage.stageWidth;
        this.h = egret.MainContext.instance.stage.stageHeight;
        this.bg = new egret.Sprite;
        this.bg.graphics.beginFill(0, 
        0);
        this.bg.graphics.drawRect(0, 0, this.w, 70);
        this.bg.graphics.endFill();
        this.bg.width = this.w;
        this.bg.height = 70;
        this.addChild(this.bg);
        this.touchEnabled = !0;
        this.descTF = new ETextField;
        this.descTF.size = 24;
        this.descTF.textAlign = egret.HorizontalAlign.RIGHT;
        this.descTF.width = 120;
        this.descTF.setText("\u751f\u65e5\uff1a");
        this.descTF.x = 10;
        this.descTF.y = this.bg.height / 2 - this.descTF.height / 2;
        this.addChild(this.descTF);
        this.bgImg = new egret.Bitmap;
        this.bgImg.texture = this.mySheet.getTexture("renderBgImg");
        var b = 
        new egret.Rectangle(8,2,5,5);
        this.bgImg.scale9Grid = b;
        this.bgImg.width = 325;
        this.bgImg.height = 35;
        this.bgImg.x = 130;
        this.bgImg.y = this.bg.height / 2 - this.bgImg.height / 2;
        this.addChild(this.bgImg);
        this.ageNumTF = new ETextField;
        this.ageNumTF.textColor = 0;
        this.ageNumTF.size = 24;
        this.ageNumTF.width = 325;
        this.ageNumTF.textAlign = egret.HorizontalAlign.CENTER;
        this.ageNumTF.setText("1991\u5e748\u670830\u65e5");
        this.ageNumTF.x = 130;
        this.ageNumTF.y = this.bg.height / 2 - this.bgImg.height / 2 + 6;
        this.addChild(this.ageNumTF);
        this.ageNumTF.touchEnabled = 
        !0;
        this.ageNumTF.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAgeTap, this);
        Global.addEventListener("updateFormAge", this.updateFormAge, this)
    }
    ;
    c.prototype.onAgeTap = function() {
        Global.dispatchEvent(PlatformNotify.openSelectAgePanelNotify, null , !1)
    }
    ;
    c.prototype.updateFormAge = function(b) {
        this.ageNumTF.setText(b.param)
    }
    ;
    c.prototype.getValue = function() {
        return this.ageNumTF.text
    }
    ;
    return c
}
(egret.Sprite);
AgeRender.prototype.__class__ = "AgeRender";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , NormalRender = function(b) {
    function c(c, a) {
        void 0 === c && (c = 1);
        void 0 === a && (a = "");
        b.call(this);
        this.bg = new egret.Sprite;
        this.h = this.w = 0;
        this.keyValue = "";
        this.renderType = c;
        switch (this.renderType) {
        case 99:
            this.descNameStr = a + "\uff1a";
            break;
        case 0:
            this.descNameStr = a + "\uff1a";
            break;
        case 1:
            this.descNameStr = "QQ\u53f7\uff1a";
            break;
        case 2:
            this.descNameStr = 
            "\u5fae\u4fe1\u53f7\uff1a";
            break;
        case 3:
            this.descNameStr = "\u5e74\u9f84\uff1a";
            break;
        case 4:
            this.descNameStr = "\u804c\u4e1a\uff1a";
            break;
        case 5:
            this.descNameStr = "\u516c\u53f8\uff1a";
            break;
        case 6:
            this.descNameStr = "\u5de5\u4f5c\u65f6\u95f4\uff1a";
            break;
        case 7:
            this.descNameStr = "\u90ae\u7bb1\uff1a";
            break;
        case 8:
            this.descNameStr = "\u7231\u597d\uff1a";
            break;
        case 9:
            this.descNameStr = "\u6240\u5728\u5730\uff1a";
            break;
        case 10:
            this.descNameStr = "\u59d3\u540d\uff1a";
            break;
        case 11:
            this.descNameStr = "\u624b\u673a\uff1a";
            break;
        case 12:
            this.descNameStr = "\u901a\u4fe1\u5730\u5740\uff1a";
            break;
        default:
            console.log("default case")
        }
        this.mySheet = RES.getRes("form");
        this.createView()
    }
    __extends(c, b);
    c.prototype.createView = function() {
        this.w = egret.MainContext.instance.stage.stageWidth;
        this.h = egret.MainContext.instance.stage.stageHeight;
        if (0 == this.renderType || 12 == this.renderType) {
            this.bg.graphics.beginFill(0, 0);
            this.bg.graphics.drawRect(0, 0, this.w, 140);
            this.bg.graphics.endFill();
            this.bg.width = this.w;
            this.bg.height = 140;
            this.addChild(this.bg);
            this.touchEnabled = !0;
            this.descTF = new ETextField;
            this.descTF.size = 24;
            this.descTF.textAlign = egret.HorizontalAlign.RIGHT;
            this.descTF.setText(this.descNameStr);
            this.descTF.x = 12;
            this.descTF.width = 120;
            this.descTF.multiline = !0;
            this.descTF.lineSpacing = 10;
            this.descTF.y = 6;
            this.addChild(this.descTF);
            this.bgImg = new egret.Bitmap;
            this.bgImg.texture = this.mySheet.getTexture("renderBgImg");
            var b = new egret.Rectangle(8,2,5,5);
            this.bgImg.scale9Grid = b;
            this.bgImg.width = 325;
            this.bgImg.height = 140;
            this.bgImg.x = 130;
            this.bgImg.y = 
            this.bg.height / 2 - this.bgImg.height / 2;
            this.addChild(this.bgImg);
            this.inputNumTF = new ETextField;
            this.inputNumTF.textColor = 0;
            this.inputNumTF.size = 24;
            this.inputNumTF.type = "input";
            this.inputNumTF.width = 325;
            this.inputNumTF.height = 140;
            this.inputNumTF.maxChars = 50;
            this.inputNumTF.multiline = !0;
            this.inputNumTF.lineSpacing = 10
        } else
            this.bg.graphics.beginFill(0, 0),
            this.bg.graphics.drawRect(0, 0, this.w, 70),
            this.bg.graphics.endFill(),
            this.bg.width = this.w,
            this.bg.height = 70,
            this.addChild(this.bg),
            this.touchEnabled = 
            !0,
            this.descTF = new ETextField,
            this.descTF.size = 24,
            this.descTF.textAlign = egret.HorizontalAlign.RIGHT,
            this.descTF.setText(this.descNameStr),
            this.descTF.x = 12,
            this.descTF.width = 120,
            this.descTF.y = this.bg.height / 2 - this.descTF.height / 2,
            this.addChild(this.descTF),
            this.bgImg = new egret.Bitmap,
            this.bgImg.texture = this.mySheet.getTexture("renderBgImg"),
            b = new egret.Rectangle(8,2,5,5),
            this.bgImg.scale9Grid = b,
            this.bgImg.width = 325,
            this.bgImg.height = 35,
            this.bgImg.x = 130,
            this.bgImg.y = this.bg.height / 2 - this.bgImg.height / 
            2,
            this.addChild(this.bgImg),
            this.inputNumTF = new ETextField,
            this.inputNumTF.textColor = 0,
            this.inputNumTF.size = 24,
            this.inputNumTF.type = "input",
            this.inputNumTF.width = 325,
            this.inputNumTF.maxChars = 50;
        this.inputNumTF.setText("");
        this.inputNumTF.x = 130;
        this.inputNumTF.y = this.bg.height / 2 - this.bgImg.height / 2 + 6;
        this.addChild(this.inputNumTF)
    }
    ;
    c.prototype.chargeFun = function() {
        var b = RegUtils.cTrim(this.inputNumTF.text, 0)
          , a = this.descNameStr.substr(0, this.descNameStr.length - 1);
        switch (this.renderType) {
        case 99:
            return 0 == 
            b.length ? (Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a!", !1),
            !1) : 45 < b.length ? (Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u4fe1\u606f\u8fc7\u591a\uff01", !1),
            !1) : !0;
        case 0:
            return 0 == b.length ? (Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a!", !1),
            !1) : 45 < b.length ? (Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u4fe1\u606f\u8fc7\u591a\uff01", !1),
            !1) : !0;
        case 1:
            if (0 == 
            b.length)
                return Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a!", !1),
                !1;
            if (RegUtils.isNumber(b))
                return !0;
            Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u683c\u5f0f\u4e0d\u6b63\u786e", !1);
            return !1;
        case 2:
            return 0 == b.length ? (Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a!", !1),
            !1) : b.length != b.replace(/[\W]/g, "").length ? (Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, 
            a + "\u683c\u5f0f\u4e0d\u6b63\u786e!", !1),
            !1) : !0;
        case 3:
            if (0 == b.length)
                return Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a!", !1),
                !1;
            if (RegUtils.isNumber(b))
                return !0;
            Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u683c\u5f0f\u4e0d\u6b63\u786e!", !1);
            return !1;
        case 4:
            return 0 == b.length ? (Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a!", !1),
            !1) : !0;
        case 5:
            return 0 == b.length ? (Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, 
            a + "\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a!", !1),
            !1) : !0;
        case 6:
            return 0 == b.length ? (Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a!", !1),
            !1) : !0;
        case 7:
            if (0 == b.length)
                return Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a!", !1),
                !1;
            if (RegUtils.checkEmail(b))
                return !0;
            Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u683c\u5f0f\u4e0d\u6b63\u786e!", !1);
            return !1;
        case 8:
            return 0 == b.length ? 
            (Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a!", !1),
            !1) : !0;
        case 9:
            return 0 == b.length ? (Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a!", !1),
            !1) : !0;
        case 10:
            return 0 == b.length ? (Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a!", !1),
            !1) : !0;
        case 11:
            if (0 == b.length)
                return Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a!", 
                !1),
                !1;
            if (RegUtils.isNumber(b))
                return 11 != b.length ? (Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u683c\u5f0f\u4e0d\u6b63\u786e!", !1),
                !1) : !0;
            Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u683c\u5f0f\u4e0d\u6b63\u786e!", !1);
            return !1;
        case 12:
            return 0 == b.length ? (Global.dispatchEvent(PlatformNotify.openFormAlertPanelNotify, a + "\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a!", !1),
            !1) : !0;
        default:
            console.log("default case")
        }
    }
    ;
    c.prototype.getValue = function() {
        return this.inputNumTF.text
    }
    ;
    return c
}
(egret.Sprite);
NormalRender.prototype.__class__ = "NormalRender";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , SexRender = function(b) {
    function c() {
        b.call(this);
        this.bg = new egret.Sprite;
        this.h = this.w = 0;
        this.maleSP = new egret.Sprite;
        this.famelSP = new egret.Sprite;
        this.keyValue = "";
        this.mySheet = RES.getRes("form");
        this.createView()
    }
    __extends(c, b);
    c.prototype.createView = function() {
        this.w = egret.MainContext.instance.stage.stageWidth;
        this.h = egret.MainContext.instance.stage.stageHeight;
        this.isMale = !0;
        this.bg.graphics.beginFill(0, 0);
        this.bg.graphics.drawRect(0, 0, this.w, 70);
        this.bg.graphics.endFill();
        this.bg.width = this.w;
        this.bg.height = 70;
        this.addChild(this.bg);
        this.touchEnabled = !0;
        this.descTF = new ETextField;
        this.descTF.size = 24;
        this.descTF.textAlign = egret.HorizontalAlign.RIGHT;
        this.descTF.width = 120;
        this.descTF.setText("\u6027\u522b\uff1a");
        this.descTF.x = 10;
        this.descTF.y = this.bg.height / 2 - this.descTF.height / 2;
        this.addChild(this.descTF);
        this.maleNormal = new egret.Bitmap;
        this.maleNormal.texture = 
        this.mySheet.getTexture("radioImg");
        this.maleNormal.x = 170;
        this.maleNormal.y = this.bg.height / 2 - this.maleNormal.height / 2;
        this.addChild(this.maleNormal);
        this.maleSelected = new egret.Bitmap;
        this.maleSelected.texture = this.mySheet.getTexture("selectImg");
        this.maleSelected.x = 165;
        this.maleSelected.y = this.bg.height / 2 - this.maleSelected.height / 2 - 10;
        this.addChild(this.maleSelected);
        this.maleSelected.visible = !0;
        this.maleTF = new ETextField;
        this.maleTF.size = 24;
        this.maleTF.setText("\u7537");
        this.maleTF.x = 210;
        this.maleTF.y = 
        this.bg.height / 2 - this.maleTF.height / 2;
        this.addChild(this.maleTF);
        this.fameleNormal = new egret.Bitmap;
        this.fameleNormal.texture = this.mySheet.getTexture("radioImg");
        this.fameleNormal.x = 310;
        this.fameleNormal.y = this.bg.height / 2 - this.fameleNormal.height / 2;
        this.addChild(this.fameleNormal);
        this.fameleSelected = new egret.Bitmap;
        this.fameleSelected.texture = this.mySheet.getTexture("selectImg");
        this.fameleSelected.x = 305;
        this.fameleSelected.y = this.bg.height / 2 - this.fameleSelected.height / 2 - 10;
        this.addChild(this.fameleSelected);
        this.fameleSelected.visible = !1;
        this.fameleTF = new ETextField;
        this.fameleTF.size = 24;
        this.fameleTF.setText("\u5973");
        this.fameleTF.x = 350;
        this.fameleTF.y = this.bg.height / 2 - this.fameleTF.height / 2;
        this.addChild(this.fameleTF);
        this.maleSP.graphics.beginFill(0, 0);
        this.maleSP.graphics.drawRect(0, 0, 100, 50);
        this.maleSP.graphics.endFill();
        this.maleSP.width = 100;
        this.maleSP.height = 50;
        this.addChild(this.maleSP);
        this.maleSP.touchEnabled = !0;
        this.maleSP.x = 170;
        this.famelSP.graphics.beginFill(0, 0);
        this.famelSP.graphics.drawRect(0, 
        0, 100, 50);
        this.famelSP.graphics.endFill();
        this.famelSP.width = 100;
        this.famelSP.height = 50;
        this.addChild(this.famelSP);
        this.famelSP.touchEnabled = !0;
        this.famelSP.x = 310;
        this.maleNormal.touchEnabled = !0;
        this.maleTF.touchEnabled = !0;
        this.fameleNormal.touchEnabled = !0;
        this.fameleTF.touchEnabled = !0;
        this.maleNormal.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMaleTap, this);
        this.maleTF.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMaleTap, this);
        this.fameleNormal.addEventListener(egret.TouchEvent.TOUCH_TAP, 
        this.onFameleTap, this);
        this.fameleTF.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFameleTap, this);
        this.maleSP.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMaleTap, this);
        this.famelSP.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFameleTap, this)
    }
    ;
    c.prototype.onMaleTap = function() {
        this.isMale = !0;
        this.maleSelected.visible = !0;
        this.fameleSelected.visible = !1
    }
    ;
    c.prototype.onFameleTap = function() {
        this.isMale = !1;
        this.maleSelected.visible = !1;
        this.fameleSelected.visible = !0
    }
    ;
    c.prototype.getIsMale = 
    function() {
        return this.isMale
    }
    ;
    c.prototype.getValue = function() {
        return this.isMale ? "\u7537" : "\u5973"
    }
    ;
    return c
}
(egret.Sprite);
SexRender.prototype.__class__ = "SexRender";
var PlatformUtils;
(function(b) {
    b.getValue = function(b) {
        void 0 === b && (b = "");
        return null  == window.TemplateUtils.getVariable(b) ? window.TemplateUtils.getTemplateVars()[b] : window.TemplateUtils.getVariable(b)
    }
    ;
    b.getSoundSwitch = function() {
        return window.TemplateUtils.getShare().setting["switch"]
    }
    ;
    b.getValueByNum = function(b, d) {
        void 0 === b && (b = "");
        void 0 === d && (d = 0);
        return window.TemplateUtils.getVariable(b, {
            number: d
        })
    }
    ;
    b.getTitle = function() {
        return window.TemplateUtils.getShare().wechat.title
    }
}
)(PlatformUtils || (PlatformUtils = {}));
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , GiftRenderPanel = function(b) {
    function c(c, a, e, k) {
        b.call(this);
        this.h = this.w = 0;
        this.bg2 = new egret.Sprite;
        this.createView(c, a, e, k)
    }
    __extends(c, b);
    c.prototype.createView = function(b, a, c, k) {
        this.w = egret.MainContext.instance.stage.stageWidth;
        this.h = egret.MainContext.instance.stage.stageHeight;
        this.assets = RES.getRes("rank");
        this.bg2.graphics.beginFill(0, 
        0);
        this.bg2.graphics.drawRect(0, 0, this.w, 285);
        this.bg2.graphics.endFill();
        this.bg2.width = this.w;
        this.bg2.height = 285;
        this.addChild(this.bg2);
        this.giftLevelNameTF = new ETextField;
        this.giftLevelNameTF.size = 18;
        this.giftLevelNameTF.textColor = 16777215;
        this.giftLevelNameTF.width = 214;
        this.giftLevelNameTF.setText("" + a);
        this.giftLevelNameTF.x = this.w / 2 - this.giftLevelNameTF.width / 2;
        this.giftLevelNameTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.giftLevelNameTF);
        this.giftLevelNumTF = new ETextField;
        this.giftLevelNumTF.size = 18;
        this.giftLevelNumTF.textColor = 16777215;
        this.giftLevelNumTF.width = 260;
        this.giftLevelNumTF.setText("" + c);
        this.giftLevelNumTF.x = this.w / 2 - this.giftLevelNumTF.width / 2;
        this.giftLevelNumTF.y = this.giftLevelNameTF.height + 5;
        this.giftLevelNumTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.giftLevelNumTF);
        this.giftBg = new egret.Bitmap;
        this.giftBg.texture = this.assets.getTexture("giftBg");
        this.giftBg.x = this.w / 2 - this.giftBg.width / 2;
        this.giftBg.y = 50;
        this.addChild(this.giftBg);
        this.prizeImg = new egret.Bitmap;
        this.addChild(this.prizeImg);
        var m = this;
        RES.getResByUrl(b, function(a) {
            "" != a && null  != a && (m.prizeImg.texture = a,
            m.prizeImg.width = 150,
            m.prizeImg.height = 150,
            m.prizeImg.x = m.w / 2 - m.prizeImg.width / 2,
            m.prizeImg.y = m.giftBg.y + 2)
        }
        , m);
        this.giftNameTF = new ETextField;
        this.giftNameTF.size = 18;
        this.giftNameTF.textColor = 16777215;
        this.giftNameTF.width = 150;
        this.giftNameTF.setText("" + k);
        this.giftNameTF.x = this.w / 2 - this.giftNameTF.width / 2;
        this.giftNameTF.y = this.giftBg.y + 160;
        this.giftNameTF.textAlign = 
        egret.HorizontalAlign.CENTER;
        this.addChild(this.giftNameTF)
    }
    ;
    return c
}
(egret.Sprite);
GiftRenderPanel.prototype.__class__ = "GiftRenderPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , RankRenderPanel = function(b) {
    function c(c, a, e, k) {
        b.call(this);
        this.h = this.w = 0;
        this.createView(c, a, e, k)
    }
    __extends(c, b);
    c.prototype.createView = function(b, a, c, k) {
        this.w = egret.MainContext.instance.stage.stageWidth;
        this.h = egret.MainContext.instance.stage.stageHeight;
        this.rankIdTF = new ETextField;
        this.rankIdTF.size = 22;
        this.rankIdTF.textColor = 
        k ? 16777215 : 10642206;
        this.rankIdTF.width = 75;
        this.rankIdTF.setText("" + b);
        this.rankIdTF.x = 0;
        this.rankIdTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.rankIdTF);
        this.nameTF = new ETextField;
        this.nameTF.size = 22;
        this.nameTF.textColor = k ? 16777215 : 10642206;
        this.nameTF.width = 260;
        this.nameTF.setText("" + a);
        this.nameTF.x = 75;
        this.nameTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.nameTF);
        this.scoreTF = new ETextField;
        this.scoreTF.size = 22;
        this.scoreTF.textColor = k ? 16777215 : 10642206;
        this.scoreTF.width = 
        145;
        this.scoreTF.setText("" + c);
        this.scoreTF.x = 335;
        this.scoreTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.scoreTF)
    }
    ;
    return c
}
(egret.Sprite);
RankRenderPanel.prototype.__class__ = "RankRenderPanel";
var __extends = this.__extends || function(b, c) {
    function d() {
        this.constructor = b
    }
    for (var a in c)
        c.hasOwnProperty(a) && (b[a] = c[a]);
    d.prototype = c.prototype;
    b.prototype = new d
}
  , Role = function(b) {
    function c(c) {
        b.call(this);
        this.bg = new egret.Sprite;
        this.h = this.w = 0;
        this.mySheet = RES.getRes("assets");
        this.createView()
    }
    __extends(c, b);
    c.prototype.createView = function() {
        this.w = egret.MainContext.instance.stage.stageWidth;
        this.h = egret.MainContext.instance.stage.stageHeight;
        this.bg.graphics.beginFill(0, 0);
        this.bg.graphics.drawRect(0, 
        0, 100, 124);
        this.bg.graphics.endFill();
        this.bg.width = 100;
        this.bg.height = 124;
        this.addChild(this.bg);
        this.role_stand = new egret.Bitmap;
        this.role_stand.texture = RES.getRes("role_stand");//this.mySheet.getTexture("role_stand");
        this.role_stand.x = this.bg.width / 2 - this.role_stand.width / 2;
        this.role_stand.y = 1;

        var resCfg = userConfig.role_stand;
        if( resCfg.size && !resCfg.size.readonly ) {
            this.role_stand.width = resCfg.size.width;
            this.role_stand.height = resCfg.size.height;
            this.role_stand.scaleX = this.role_stand.scaleY = 3.333333;
        }

        this.addChild(this.role_stand);
        /*
        this.role_jump = new egret.Bitmap;
        this.role_jump.texture = this.mySheet.getTexture("role_jump");
        this.role_jump.x = this.bg.width / 2 - this.role_jump.width / 2;
        this.role_jump.y = 0;
        this.addChild(this.role_jump);
        this.role_stand.visible = !0;
        this.role_jump.visible = !1;
        */
    }
    ;
    c.prototype.jump = function() {
        this.role_stand.visible = !1;
        this.role_jump.visible = !0;
        var b = this
          , a = function() {
            this.role_stand.visible = !0;
            this.role_jump.visible = !1
        };
        egret.Tween.get(this.role_jump).to({
            y: -70
        }, 50).call(function() {
            egret.Tween.get(b.role_jump).to({
                y: 0
            }, 50).call(a, this)
        }
        , this);
    };
    return c
}
(egret.Sprite);
Role.prototype.__class__ = "Role";
