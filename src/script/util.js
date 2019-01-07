'use strict';
var util={
    'ajaxPost':function(url,paramsdata,callback,dom){
        dom && $(dom).prop('disabled',true);
        const params=paramsdata||'';
        return $.ajax({
                url: url,
                type: "post",
                data:params,
                contentType:'application/json',
            }).done(function(data){
                if(typeof callback == 'function'){
                    callback(data);
                }
            }).fail(function(jqXHR, textStatus, errorThrown){
                console.log(jqXHR.responseText);
                console.log(jqXHR.status);
                console.log(jqXHR.readyState);
                console.log(jqXHR.statusText);
                console.log(textStatus);
            }).always(function(){
                dom && $(dom).prop('disabled',false);
            });
    },
    'ajaxGet':function(url,data,callback){
        const params=data||'';
        return $.ajax({
                url: url,
                type: "get",
                dataType: 'json',
                data:params
            }).done(function(data){
                if(typeof callback == 'function'){
                    callback(data);
                }
            }).fail(function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.responseText);
                    console.log(jqXHR.status);
                    console.log(jqXHR.readyState);
                    console.log(jqXHR.statusText);
                    console.log(textStatus);
            });
    },
    'ajaxDel':function(url,paramsdata,callback,dom){
        dom && $(dom).prop('disabled',true);
        const params=paramsdata||'';
        return $.ajax({
            url: url,
            type: "delete",
            data:params,
            contentType:'application/json',
        }).done(function(data){
            if(typeof callback == 'function'){
                callback(data);
            }
        }).fail(function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR.responseText);
            console.log(jqXHR.status);
            console.log(jqXHR.readyState);
            console.log(jqXHR.statusText);
            console.log(textStatus);
        }).always(function(){
            dom && $(dom).prop('disabled',false);
        });
    },
    'ajaxPut':function(url,paramsdata,callback,dom){
        dom && $(dom).prop('disabled',true);
        const params=paramsdata||'';
        return $.ajax({
            url: url,
            type: "PUT",
            data:params,
            contentType:'application/json',
        }).done(function(data){
            if(typeof callback == 'function'){
                callback(data);
            }
        }).fail(function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR.responseText);
            console.log(jqXHR.status);
            console.log(jqXHR.readyState);
            console.log(jqXHR.statusText);
            console.log(textStatus);
        }).always(function(){
            dom && $(dom).prop('disabled',false);
        });
    },
    DATATABLES_LANGUAGE: {
        "decimal":        ".",
        "emptyTable":     "暂无数据",
        "infoPostFix":    "",
        "thousands":      "",
        "loadingRecords": "数据加载中...",
        "processing":     "处理中...",
        "search":         "搜索:",
        "paginate": {
            "first":      "首页",
            "last":       "尾页",
            "next":       "下一页",
            "previous":   "上一页"
        },
        "aria": {
            "sortAscending":  ": 正在进行正序排序",
            "sortDescending": ": 正在进行倒序排序"
        },
        "lengthMenu": "每页 _MENU_ 条记录",
        "zeroRecords": "没有找到记录",
        "info": "第 _PAGE_ 页 ( 总共 _PAGES_ 页 )",
        "infoEmpty": "无记录",
        "infoFiltered": "(从 _MAX_ 条记录过滤)"
    },
    /*时间格式转时间字符串*/
    timeFormat:function(time, format) {
        var time = new Date(time);
        var o = {
            "M+": time.getMonth() + 1, //month
            "d+": time.getDate(), //day
            "h+": time.getHours(), //hour
            "m+": time.getMinutes(), //minute
            "s+": time.getSeconds(), //second
            "q+": Math.floor((time.getMonth() + 3) / 3), //quarter
            "S": time.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(format))
                format = format.replace(RegExp.$1,
                    RegExp.$1.length == 1 ? o[k] :
                        ("00" + o[k]).substr(("" + o[k]).length));
        return format;
    },
    //解析查询字符串，即‘?’后面参数
    getQueryStringArgs: function (){
        //取得查询字符串并去掉开头问号
        var qs = (location.search.length > 0 ? location.search.substring(1) : '');

        //保存数据的对象
        var args = {};

        //取得每一项
        var items = qs.length ? qs.split('&') : [],item = null,name = null,value = null;

        //逐一将每一项加入args对象中
        for(var i = 0;i<items.length;i++){
            item = items[i].split('=');
            name = decodeURIComponent(item[0]); //decodeURIComponent()解码被编码过的name、value
            value = decodeURIComponent(item[1]);

            if(name.length){
                args[name] = value;
            }
        }
        return args;
    },
    formatMoney:function(s, type) {
      if (/[^0-9\.]/.test(s))
        return "0";
      if (s == null || s == "")
        return "0";
      s = s.toString().replace(/^(\d*)$/, "$1.");
      s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
      s = s.replace(".", ",");
      var re = /(\d)(\d{3},)/;
      while (re.test(s))
        s = s.replace(re, "$1,$2");
      s = s.replace(/,(\d\d)$/, ".$1");
      if (type == 0) {// 不带小数位(默认是有小数位)
        var a = s.split(".");
        if (a[1] == "00") {
          s = a[0];
        }
      }
      return s;
    },
};
$.fn.select2.defaults.set("language", "zh-CN");
