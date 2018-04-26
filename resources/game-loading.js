/**
* GameLoading 游戏加载页通用组件
*
* 组件本身的配置对象，可为空
* @param options = {
*	"init": - 如果 === false, 则需要调用组件的 start 方法来渲染加载界面
* 	"start": {Function} - 加载页面初始化完成后执行
* 	"progress": {Function(loadedItemsAmount, totalItemsAmount)} - 加载进行时执行
* 	"end": {Function} - 加载完成后执行，如果函数返回值===false, 则会立即关闭加载页面	
* }
*
* 加载界面的配置资源，
* 因为调用顺序的问题，如果加载此组件的时候还没有window.userConfig，
* 则需要在调用组件的时候手动传入window.userConfig，否则可为空
* @param config
*
* 组件方法，调用此方法来渲染加载界面，如果options.init !== false，则组件初始化时就会自动调用
* @Function start 
*
* 组件方法，加载进行时显示加载进度
* @param{number} current - 当前加载进度
* @param{number} total - 总的加载进度
* @Function progress(current, total)
*
* 组件方法，加载结束后用来关闭加载界面
* @param{boolean} global - 如果options.end的返回值 === false，那么此参数必需为 true
* @Function end(global)
*
* 例子:
* var htmlLoading = GameLoading({
* 	//设置返回值为false，则可以自行选择调用end方法来关闭加载界面的时间点
*	"end": function() {return false}
* });
* htmlLoading.progress(1, 10);
* htmlLoading.end(true);
**/

(function() {
	function loading(options) {
		this.status = false;
		this.options = typeof options == 'object' && options || {};
		extend(this.options, {
			"id": "GameLoadingContainer",
			"skin": typeof options.skin == "string"? "game-loading "+ options.skin : "game-loading",
			"start": typeof options.start == "function"? options.start : function(){},
			"progress": typeof options.progress == "function"? options.progress : function(current, total){},
			"end": typeof options.end == "function"? options.end : function(){},
			"error": typeof options.error == "function"? options.error : function(err){},
			"style": "",
			"template": ""
		});
		if(false !== options.init) {
			this.start();
		}	
	};

	loading.prototype = {
		create: function() {
			var contain, style;
			this.container = document.getElementById(this.options.id);
			if(!this.container) {
				style = document.createElement("style");
				style.setAttribute("type", "text/css");
				if(style.styleSheet) {
					style.styleSheet.cssText = this.options.style;	
				} else {
					style.appendChild(document.createTextNode(this.options.style));	
				}
				document.getElementsByTagName("head")[0].appendChild(style);

				contain = document.createElement("div");
				contain.setAttribute("id", this.options.id);
				contain.setAttribute("class", this.options.skin);
				contain.innerHTML = this.options.template;
				document.getElementsByTagName("body")[0].appendChild(contain);
				this.container = document.getElementById(this.options.id);
			}
		},
		start: function() {
			if(!this.container) {
				this.create();
			}
			this.status = true;
			addClass(document.getElementsByTagName("html")[0], "game-loading-html");
			this.options.start.call(this);	
		},
		progress: function(current, total) {
			if(this.container) {
				this.options.progress.call(this, current, total);
				if(current == total) {
					this.end();
				}	
			}
		},
		end: function(global) {
			var prevent;
			if(global || this.container && this.status) {
				prevent = this.options.end.call(this);
				if(global || prevent !== false) {
					removeClass(document.getElementsByTagName("html")[0], "game-loading-html");
				}
				this.status = false;
			}
		}
	};

	function extend(t, s) {
		for(var each in s) {
			if(!t[each]) {
				t[each] = s[each];
			}
		}
	}
	function addClass(node, className) {
		var oldStyle = node.getAttribute("class");
		var reg = RegExp("\(^\|\\s\+\)"+ className + "\(\\s\+\|\$\)", "gi");
		var newStyle;
		if(!oldStyle) {
			newStyle = className;
		} else if(!reg.test(oldStyle)) {
			newStyle = oldStyle +" "+ className; 
		}
		if(newStyle) {
			node.setAttribute("class", newStyle);
		}
	}
	function removeClass(node, className) {
		var oldStyle = node.getAttribute("class");
		var reg = RegExp("\(^\|\\s\+\)"+ className + "\(\\s\+\|\$\)", "gi");
		if(oldStyle && reg.test(oldStyle)) {
			node.setAttribute("class", oldStyle.replace(reg, function(a, b, c) {return b && c? " " : ""}))	
		}		
	}

	if(!("GameLoading" in window)) {
		window.GameLoading = function(options, config) {
			var doptions = options || {};
			var dconfig = config || window.userConfig;
			var loadimg = dconfig.loading.toString();
			var loadtext = dconfig.loadtext && dconfig.loadtext.toString() || "游戏加载中...";
			var logo = dconfig.logo.toString();
			if(!doptions.style) {
				doptions.style = 	".game-loading-html,.game-loading-html body{height:100%;overflow:hidden;}"+
									".game-loading{position:fixed;left:0;top:0;width:100%;height:100%;z-index:99999;background-color:#fff;display:none;}"+
									".game-loading-content{width:100%;height:100%;text-align:center;z-index:1;position:relative;margin-top:-39px;}"+
									".game-loading-content:after{content:\"\";display:inline-block;vertical-align:middle;height:100%;width:0;font-size:0;}"+
									".game-loading-main{display:inline-block;vertical-align:middle;margin:0;position:relative;}"+
									".game-loading-img{display:block;margin:0 auto;}"+
									".game-loading-progress{font-size:14px;color:#363636;white-space:nowrap;position:relative;}"+
									".game-loading-string{display:inline;position:relative;}"+
									".game-loading-percent{display:inline;position:relative;}"+
									".game-loading-logo{width:100%;position:absolute;left:0;bottom:24px;text-align:center;overflow:hidden;}"+
									".game-loading-logo img{max-width:100%;width:168px;display:block;margin:0 auto;}"+
									".game-loading-html .game-loading{display:block;}"+
									"@media screen and (max-width:640px) {"+    
									    ".game-loading-progress{font-size:12px;}"+
									    ".game-loading-img{width:76px;}"+ 
									    ".game-loading-logo{bottom:12px;}"+
									    ".game-loading-logo img{width:auto;height:40px;}"+ 
									    ".game-loading-content{margin-top:-20px;}"+
									"}"+
									"@media screen and (max-height: 480px) {"+
									    ".game-loading-progress{font-size:12px;}"+
									    ".game-loading-img{width:76px;}"+  
									    ".game-loading-logo{bottom:12px;}"+
									    ".game-loading-logo img{width:auto;height:40px;}"+ 
									    ".game-loading-content{margin-top:-20px;}"+ 
									"}";
			}
			if(!doptions.template) {
				doptions.template = '<div class="game-loading-content">'+
									'<div class="game-loading-main">'+
										'<img src="'+ loadimg +'" class="game-loading-img">'+
										'<div class="game-loading-progress">'+
											'<div class="game-loading-string">'+ loadtext +'</div>'+
											'<div class="game-loading-percent" id="game-loading-percent"></div>'+
										'</div>'+
									'</div>'+	
								'</div>'+
								'<div class="game-loading-logo"><img src="'+ logo +'"></div>';
			}
			if(!doptions.progress) {
				doptions.progress = function (current, total) {
					document.getElementById("game-loading-percent").innerHTML = current +"/"+ total;
				}
			}
			return new loading(doptions);
		}
	}
})();