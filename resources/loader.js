(function() {
	function loader(options) {
		this.options = {
			"start": options && typeof options.start == 'function' && options.start || function(){},
			"progress": options && typeof options.progress == 'function' && options.progress || function(c, t){},
			"complete": options && typeof options.complete == 'function' && options.complete || function(){}
		};
		this.isloading = false;
		this.files = new queue();
		this.loadeds = new queue();
		this.total = 0;
		this.loaded = 0;
	}
	loader.prototype = {
		"add": function(item) {
			if(!this.isloading) {
				this.files.add(item);
			}
		},
		"start": function() {
			var len;
			if(!this.isloading) {
				len = this.files.length;
				this.isloading = true;
				if(len) {
					this.total = len;
					this.files.each((function(o) {
						return function() {
							o.loadeds.add(loadImage(this, function(success) {
								o.loaded++;
								o.options.progress.call(this, o.loaded, o.total);
								if(o.total <= o.loaded) {
									o.complete();
								}
							}));
						}
					})(this));
					this.options.start.call(this);
				} else {
					this.options.start.call(this);
					this.complete();
				}
			}
		},
		"complete": function() {
			this.isloading = false;
			this.files.empty();
			this.options.complete.call(this);
		}
	};

	function loadImage(url, callback) {
		var img = new Image();
		img.crossorigin = "anonymous";
		img.onload = function() {
			this.onload = this.onerror = null;
			callback.call(this, true);
		};
		img.onerror = function() {
			this.onload = this.onerror = null;
			callback.call(this, false);
		}
		img.src = url;
		return img;
	}

	function queue(compare) {
		this.q = [];
		this.length = 0;
		this.compare = typeof compare == 'function' && compare || function(item) {
			return this == item;
		};
	}
	queue.prototype = {
		"add": function(item) {
			if(this.index(item) < 0) {
				this.q.push(item);
				this.length = this.q.length;
			}
		},
		"remove": function(item) {
			var index = this.index(item);
			if(index >= 0) {
				this.q.splice(index, 1);
				this.length = this.q.length;
			}
		},
		"empty": function() {
			this.q.length = 0;
		},
		"index": function(item, cond) {
			var index = -1;
			var type = typeof item;
			var con, temp;
			con = typeof cond == 'function' && cond || this.compare;
			this.each(function(f, s) {
				f.call(this, s);
			}, con, item);
			return index;
		},
		"get": function(index) {
			return 0 <= index && index < this.q.length? this.q[index] : null;
		},
		"each": function(fn) {
			var result;
			var arg = Array.prototype.slice.call(arguments);
			arg.shift();
			for(var i = 0, j = this.q.length; i < j; i++) {
				result = fn.apply(this.q[i], arg);
				if(result === false) {
					break;
				}
			}
		}
	};

	if(typeof window.ImageLoader == 'undefined') {
		window.ImageLoader = function(options) {
			return new loader(options);
		}
	}
})();