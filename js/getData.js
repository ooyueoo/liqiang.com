function getXMLHttpRequest() {
    var xhr;
    if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = null;
    }
    return xhr;
}

function save() {
    var xhr = getXMLHttpRequest();
    xhr.open("get", "https://cloud.bmob.cn/15f9fe99ce4b96f0/GetData", true);
    var data = "{}";
    /*xhr.setRequestHeader("X-Bmob-Application-Id","6319ea50e6b7df4e809cb85ac1990660");
    xhr.setRequestHeader("X-Bmob-REST-API-Key","cdd152ebb3990c0e8d5d1719dae2dc08");
    xhr.setRequestHeader("Content-Type","application/json");*/
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            /*if(xhr.responseText!=null){
                setTimeout
                window.location.href='';
            }*/
            document.getElementById('text').innerHTML = xhr.responseText;
            clearInterval(interval);
        }
    };
}

var interval = setInterval(function () {
        save();
    },
    2000
    )
;
/*headers:{"X-Bmob-Application-Id":"6319ea50e6b7df4e809cb85ac1990660","X-Bmob-REST-API-Key":"cdd152ebb3990c0e8d5d1719dae2dc08","Content-Type":"application/json"},*/
/*$.ajax({
    type:"get",
    url:"http://cloud.bmob.cn/15f9fe99ce4b96f0/TEST",
    dataType:"jsonp",



    success:function(data){
    alert(1);
    }
});*/
