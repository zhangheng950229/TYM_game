# 游戏源码管理补充说明

## 1. resources文件夹内文件说明
```
resources
    |   //基于fis3的通用游戏调试，打包配置
    | - fis-conf.js 
    |
    |   //游戏通用加载UI插件，本插件已经集成到sdk内，因此以后的游戏开发中不再需要引用引此JS
    | - game-loading.js 
    |
    |   //简单的图片加载插件，用于开发游戏时，没有可用的图片加载器时使用
    | - loader.js
    |
    |   //游戏配置文件的详细说明
    | - mainfest.example.json 
    |
    |   //开发游戏时，引进的基础mainfest文件，包含最基本的必需的配置信息
    | - mainfest.template.json
    |
    |   //启动基于fis3的调试服务
    | - server.bat 
    |
    |   /* 如果启用了调试或已经执行了release，则可以调用此批处理来打包游戏
    |    * 代码是否压缩取决于之前的release操作
    |    */
    | - package-after-release.bat 
    |
    |   //release后再打包游戏（此时会主动压缩代码）
    | - package-before-release.bat
```