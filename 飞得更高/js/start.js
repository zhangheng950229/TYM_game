
//var cdnRoot = '../';
var document_class = "Main";
var global_loading;
//console.log = function(){};

tymsdk.loadConfig( startMyGame );

function startMyGame( cfg ){
    window.userConfig = cfg;

    // 启动loading界面
    global_loading = GameLoading();
    global_loading.start();

    // 初始化游戏资源、配置
    initGameConfig( cfg );

    // 启动游戏
    if( [].map && document.createElement("canvas").getContext ) {
        fiboSDK.init({
            pfid: 'be_6eM2baqqd',
            appid: 'uuid24154482776847'});
        egret_h5.startGame();
    }
    else {
        alert("不支持您当前的浏览器");
    }
}
