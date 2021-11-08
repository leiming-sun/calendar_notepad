// API 接口 - 风格类

layui.define(['jquery', 'layer'], function (exports) {
    var domain=""
    o={}
    o.getList=function(callbackList){
        
        app.ajaxGet(domain + "/calendar/styleapi/getStyleList",function(res){
            if (res.code==1){
                callbackList(res.data)
            }
        })
    }

    // 获取样式内容
    o.getStyleText = function (callbackList){
        app.ajaxGet(domain + "/calendar/styleapi/getStyleText", function (res) {
            callbackList(res)
        })
    }


    exports('apiStyle', o);
});