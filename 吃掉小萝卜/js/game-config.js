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
