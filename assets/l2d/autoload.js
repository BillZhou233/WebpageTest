try {
    $("<link>").attr({href: "/assets/l2d/waifu.css?v=1.4.2", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({url: "/assets/l2d/waifu-tips.js?v=1.4.2", dataType:"script", cache: true, success: function() {
        $.ajax({url: "/assets/l2d/live2d.js?v=1.0.5", dataType:"script", cache: true, success: function() {
            /* 可直接修改部分参数 */
            
            // URL
            live2d_settings['hitokotoAPI'] = "lwl12.com";  // 一言 API
            live2d_settings['homePageUrl'] = 'https://billzhou233.github.io/';  // 主页地址，可选 'auto'(自动), '{URL 网址}'
            live2d_settings['screenshotCaptureName'] = 'ss_l2d.png';  // 看板娘截图文件名，例如 'live2d.png'
            
            // 外观
            live2d_settings['modelId'] = 5;  // 默认模型 ID
            live2d_settings['modelTexturesId'] = 0;  // 默认材质 ID
            live2d_settings['modelStorage'] = false;  // 不储存模型 ID
            live2d_settings['modelRandMode']  = 'switch';  // 模型切换，可选 'rand'(随机), 'switch'(顺序)
            live2d_settings['modelTexturesRandMode']= 'switch';  // 材质切换，可选 'rand'(随机), 'switch'(顺序)

            // 样式
            live2d_settings['waifuDraggable'] = 'unlimited';  // 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽), 'unlimited'(自由拖拽)
            live2d_settings['waifuDraggableRevert'] = false;  // 松开鼠标还原拖拽位置，可选 true(真), false(假)
            live2d_settings['waifuMinWidth'] = '960px';  // 面页小于 指定宽度 隐藏看板娘，例如 'disable'(禁用), '768px'
            live2d_settings['waifuEdgeSide']  = 'right:0';  // 看板娘贴边方向，例如 'left:0'(靠左 0px), 'right:30'(靠右 30px)
            /* 在 initModel 前添加 */
            initModel("/assets/l2d/waifu-tips.json");
        }});
    }});
} catch(err) { console.log("[Error] JQuery is not defined.") }
