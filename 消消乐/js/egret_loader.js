var rootContainer;
egret_h5.startGame = function() {
    var context = egret.MainContext.instance;
    context.touchContext = new egret.HTML5TouchContext();
    context.deviceContext = new egret.HTML5DeviceContext();
    context.netContext = new egret.HTML5NetContext();
    //原来的设计尺寸
    //egret.StageDelegate.getInstance().setDesignSize(480, 800);
    egret.StageDelegate.getInstance().setDesignSize(640, 1008);
    context.stage = new egret.Stage();
    //var scaleMode = egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ? egret.StageScaleMode.EXACT_FIT: egret.StageScaleMode.EXACT_FIT;
    //var scaleMode = egret.StageScaleMode.EXACT_FIT;
    var scaleMode = egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ? egret.StageScaleMode.SHOW_ALL : egret.StageScaleMode.SHOW_ALL;
    context.stage.scaleMode = scaleMode;
    var rendererType = 0;
    if (rendererType == 1) {
        context.rendererContext = new egret.WebGLRenderer()
    } else {
        context.rendererContext = new egret.HTML5CanvasRenderer()
    }
    egret.MainContext.instance.rendererContext.texture_scale_factor = 1;
    context.run();
    var rootClass;
    if (document_class) {
        rootClass = egret.getDefinitionByName(document_class)
    }
    if (rootClass) {
        rootContainer = new rootClass();
        if (rootContainer instanceof egret.DisplayObjectContainer) {
            context.stage.addChild(rootContainer)
        } else {
            throw new Error("文档类必须是egret.DisplayObjectContainer的子类!");
        }
    } else {
        throw new Error("找不到文档类！");
    }
};