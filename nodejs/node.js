function onRequest(request, response, modules) {
    var result;
    //从数据获取数据，把数据返回给前端
    response.setHeader("Access-Control-Allow-Origin", "*");
    var httptype = request.method;　//获取调用云端逻辑的是post或者get方式

    if ("GET" == httptype) {
        //采用get方式调用云端逻辑

    }else{
        //采用post方式调用云端逻辑
    }
    var db = modules.oData;
    db.findOne({
        "table":"TextObject",
        "objectId":"3a553d83fc"
    },function(err,data){

        var dataObject= JSON.parse(data);

        result=dataObject.textvalue;

    });

    response.send(result)

}