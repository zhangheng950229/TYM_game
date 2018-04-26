
;TemplateUtils = (function() {
    var _inited = false
      , _templateId = null 
      , _templateVars = null 
      , _share = null ;
    var _formatStr = function() {
        var args = arguments;
        var len = args.length;
        if (len < 1) {
            return "";
        }
        var str = args[0];
        var needToFormat = true;
        if (typeof str == "object") {
            str = JSON.stringify(str);
            needToFormat = false;
        }
        for (var i = 1; i < len; ++i) {
            var arg = args[i];
            arg = typeof arg == "object" ? JSON.stringify(arg) : arg;
            console.log(arg);
            if (needToFormat) {
                while (true) {
                    var result = null ;
                    if (typeof arg == "number") {
                        result = str.match(/(%d)|(%s)/);
                        if (result) {
                            str = str.replace(/(%d)|(%s)/, arg);
                            break;
                        }
                    }
                    result = str.match(/%s/);
                    if (result) {
                        str = str.replace(/%s/, arg);
                    } else {
                        str += "    " + arg;
                    }
                    break;
                }
            } else {
                str += "    " + arg;
            }
        }
        return str;
    }
    ;
    var _htmlDecode = function(str) {
        var s = "";
        if (str.length == 0)
            return "";
        s = str.replace(/&amp;/g, "&");
        s = s.replace(/&lt;/g, "<");
        s = s.replace(/&gt;/g, ">");
        s = s.replace(/&nbsp;/g, " ");
        s = s.replace(/&#39;/g, "\'");
        s = s.replace(/&quot;/g, "\"");
        s = s.replace(/<br>/g, "\n");
        return s;
    }
    ;
    var _unfilterRichTextName = ['ruleDesc'];
    var _parser = {
        "DIRECTDATA": function(def) {
            return def["value"];
        },
        "STRING": function(def, config) {
            var fmt = def["value"];
            var name = def["name"];
            var key, value;
            for (key in config) {
                value = config[key];
                fmt = fmt.replace(key, value);
            }
            fmt = _htmlDecode(fmt);
            if ($.inArray(name, _unfilterRichTextName) == -1) {
                fmt = fmt.replace(/color="#\w+"/g, function(oldstr) {
                    return oldstr.replace('#', '0x').replace(new RegExp('"',"g"), "'");
                }
                );
                fmt = fmt.replace(/size="[0-9]+"/g, function(oldstr) {
                    var number = oldstr.match(/[0-9]+(?=")/);
                    return oldstr.replace(number, number * 10).replace(new RegExp('"',"g"), "'");
                }
                );
                fmt = fmt.replace(/(<div>)+/g, function(match) {
                    return '<div>\n';
                }
                );
            }
            return fmt;
        },
        "IMAGE": function(def, config) {
            return null ;
        },
        "ANIMATION": function(def, config) {
            return null ;
        },
        "LABEL": function(def, config) {
            var args = [def["string"]], key, string;
            for (var i = 0, l = def["variables"] ? def["variables"].length : 0; i < l; ++i) {
                key = def["variables"][i];
                if (config && config[key] !== undefined)
                    args.push(config[key]);
                else
                    args.push(null );
            }
            string = _formatStr.apply(null , args);
            return string;
        },
        "SOUND": function(def) {
            return null ;
        }
    };
    return {
        init: function(jsonObj) {
            _templateId = jsonObj["templateId"];
            _templateVars = jsonObj["templateVars"];
            _share = jsonObj.share;
            _inited = true;
        },
        getTemplateVars: function() {
            return _templateVars;
        },
        getShare: function() {
            return _share;
        },
        getResourcesList: function() {
            var def, i, res = [];
            for (i in _templateVars) {
                def = _templateVars[i];
                if (def["texUrl"]) {
                    res.push(def["texUrl"]);
                } 
                else if (def["texs"]) {
                    res = res.concat(def["texs"]);
                }
            }
            return res;
        },
        getVariable: function(name, config) {
            if (!_inited)
                return null ;
            if (name == "shareAfter") {
                if (_share[name] == undefined) {
                    return null ;
                }
                var def = _share[name];
                var href = window.location.href
                  , base = href
                  , last = href.lastIndexOf("/");
                if (last != -1)
                    base = base.substr(0, last);
                var path = def["imgUrl"];
                if (path[0] != "/")
                    path = "/" + path;
                //window["shareData"]["imgUrl"] = base + path + '?v=' + (new Date()).getTime();
                var fmt = def["desc"];
                var key, value;
                for (key in config) {
                    value = config[key];
                    fmt = fmt.replace(new RegExp(key,"g"), value);
                }
                return fmt;
            } else {
                if (_templateVars[name] == undefined) {
                    return;
                }
                var def = _templateVars[name];
                var parser, result = null ;
                parser = _parser[def["type"]];
                if (parser) {
                    result = parser(def, config);
                }
                return result;
            }
        },
        format: function(fmt) {
            var args = Array.prototype.slice.call(arguments, 1);
            return fmt.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] != 'undefined' ? args[number] : match;
            }
            );
        }
    };
}
)();