package ctrls

import (
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/dchest/captcha"
	. "github.com/gin-gonic/gin"
	"net/http"
	"time"
)

func GetCheckCode(c *Context){
	length := 4
	captchaId := captcha.NewLen(length)
	c.Request.URL.Path = "/captcha/" + captchaId + ".png"
	//fmt.Println("GetCaptchaPng : " + captchaId)
	w:=c.Writer
	r:=c.Request
	file:=captchaId + ".png"
	fmt.Println("captchaId : " + captchaId)
	fmt.Println("captchaFile : " + file)
	w.Header().Set("captchaId", captchaId)
	w.Header().Set("Cache-Control", "no-cache, no-store, must-revalidate")
	w.Header().Set("Pragma", "no-cache")
	w.Header().Set("Expires", "0")
	var content bytes.Buffer
	w.Header().Set("Content-Type", "image/png")
	captcha.WriteImage(&content, captchaId, 100, 40)
	//download := true
	//if download {
	//	w.Header().Set("Content-Type", "application/octet-stream")
	//}
	http.ServeContent(w, r, file, time.Time{}, bytes.NewReader(content.Bytes()))
}

func ProxyError(ctx *Context){
	//sid := ctx.Param("sid")
	//data := models.GetProduct(sid)
	ctx.JSON(404, "proxy error.")
}

func GetProduct(ctx *Context){
	//sid := ctx.Param("sid")
	//data := models.GetProduct(sid)
	//ctx.JSON(200, data)
}

func HotWordList(ctx *Context){
	data:=`
{
    "code": 0,
    "timestamp": 1570720843451,
    "msg": "success",
    "data": {
        "records": [],
        "current": null,
        "size": null,
        "total": null,
        "pages": null
    }
}
`
	var dat map[string]interface{}
	json.Unmarshal([]byte(data), &dat)
	ctx.JSON(200, dat)
}

func IndustryClassList(ctx *Context){
	data:=`
{
    "code": 0,
    "timestamp": 1570721131541,
    "msg": "success",
    "data": {
        "records": [
            {
                "sid": 5,
                "className": "中药",
                "showScene": "0",
                "parentSid": 0,
                "parentName": null,
                "showIndex": 10,
                "fullPath": "",
                "remove": false,
                "createTime": "2019-10-10 23:25:31",
                "updateTime": "2019-10-10 23:25:31",
                "clubRefList": null,
                "club": 1,
                "returnClubs": [],
                "productAttrRefList": [],
                "childrenList": null,
                "current": 1,
                "size": 10
            },
            {
                "sid": 1,
                "className": "中西成药口服",
                "showScene": "0",
                "parentSid": 0,
                "parentName": null,
                "showIndex": 9,
                "fullPath": "",
                "remove": false,
                "createTime": "2019-10-10 23:25:31",
                "updateTime": "2019-10-10 23:25:31",
                "clubRefList": null,
                "club": 1,
                "returnClubs": [],
                "productAttrRefList": [],
                "childrenList": null,
                "current": 1,
                "size": 10
            },
            {
                "sid": 8,
                "className": "中西成药外用",
                "showScene": "0",
                "parentSid": 0,
                "parentName": null,
                "showIndex": 8,
                "fullPath": "",
                "remove": false,
                "createTime": "2019-10-10 23:25:31",
                "updateTime": "2019-10-10 23:25:31",
                "clubRefList": null,
                "club": 1,
                "returnClubs": [],
                "productAttrRefList": [],
                "childrenList": null,
                "current": 1,
                "size": 10
            },
            {
                "sid": 4,
                "className": "营养保健",
                "showScene": "0",
                "parentSid": 0,
                "parentName": null,
                "showIndex": 6,
                "fullPath": "",
                "remove": false,
                "createTime": "2019-10-10 23:25:31",
                "updateTime": "2019-10-10 23:25:31",
                "clubRefList": null,
                "club": 1,
                "returnClubs": [],
                "productAttrRefList": [],
                "childrenList": null,
                "current": 1,
                "size": 10
            },
            {
                "sid": 9,
                "className": "医疗器械",
                "showScene": "0",
                "parentSid": 0,
                "parentName": null,
                "showIndex": 5,
                "fullPath": "",
                "remove": false,
                "createTime": "2019-10-10 23:25:31",
                "updateTime": "2019-10-10 23:25:31",
                "clubRefList": null,
                "club": 1,
                "returnClubs": [],
                "productAttrRefList": [],
                "childrenList": null,
                "current": 1,
                "size": 10
            },
            {
                "sid": 10,
                "className": "消毒用品",
                "showScene": "0",
                "parentSid": 0,
                "parentName": null,
                "showIndex": 4,
                "fullPath": "",
                "remove": false,
                "createTime": "2019-10-10 23:25:31",
                "updateTime": "2019-10-10 23:25:31",
                "clubRefList": null,
                "club": 1,
                "returnClubs": [],
                "productAttrRefList": [],
                "childrenList": null,
                "current": 1,
                "size": 10
            },
            {
                "sid": 7,
                "className": "个人护理",
                "showScene": "0",
                "parentSid": 0,
                "parentName": null,
                "showIndex": 3,
                "fullPath": "",
                "remove": false,
                "createTime": "2019-10-10 23:25:31",
                "updateTime": "2019-10-10 23:25:31",
                "clubRefList": null,
                "club": 1,
                "returnClubs": [],
                "productAttrRefList": [],
                "childrenList": null,
                "current": 1,
                "size": 10
            },
            {
                "sid": 2,
                "className": "生活用品",
                "showScene": "0",
                "parentSid": 0,
                "parentName": null,
                "showIndex": 2,
                "fullPath": "",
                "remove": false,
                "createTime": "2019-10-10 23:25:31",
                "updateTime": "2019-10-10 23:25:31",
                "clubRefList": null,
                "club": 1,
                "returnClubs": [],
                "productAttrRefList": [],
                "childrenList": null,
                "current": 1,
                "size": 10
            }
        ],
        "current": 0,
        "size": 0,
        "total": 0
    }
}
`
	var dat map[string]interface{}
	json.Unmarshal([]byte(data), &dat)
	ctx.JSON(200, dat)
}

func IndustryClassAll(ctx *Context){
	data:=`
{
    "code":0,
    "timestamp":1570965898952,
    "msg":"success",
    "data":{
        "records":[
            {
                "sid":5,
                "className":"中药",
                "showScene":"0",
                "parentSid":0,
                "parentName":null,
                "showIndex":10,
                "fullPath":"",
                "remove":false,
                "createTime":"2019-10-13 19:24:58",
                "updateTime":"2019-10-13 19:24:58",
                "clubRefList":null,
                "club":1,
                "returnClubs":[

                ],
                "productAttrRefList":[

                ],
                "childrenList":[
                    {
                        "sid":47,
                        "className":"中药饮片",
                        "showScene":"0",
                        "parentSid":5,
                        "parentName":null,
                        "showIndex":5,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":48,
                        "className":"参茸贵细",
                        "showScene":"0",
                        "parentSid":5,
                        "parentName":null,
                        "showIndex":4,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    }
                ],
                "current":1,
                "size":10
            },
            {
                "sid":1,
                "className":"中西成药口服",
                "showScene":"0",
                "parentSid":0,
                "parentName":null,
                "showIndex":9,
                "fullPath":"",
                "remove":false,
                "createTime":"2019-10-13 19:24:58",
                "updateTime":"2019-10-13 19:24:58",
                "clubRefList":null,
                "club":1,
                "returnClubs":[

                ],
                "productAttrRefList":[

                ],
                "childrenList":[
                    {
                        "sid":65,
                        "className":"抗感染类",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":21,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":67,
                        "className":"感冒用药",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":20,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":60,
                        "className":"呼吸系统",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":19,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":58,
                        "className":"清热解毒",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":18,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":61,
                        "className":"五官用药",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":17,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":57,
                        "className":"泌尿系统",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":16,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":69,
                        "className":"儿科用药",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":15,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":53,
                        "className":"消化系统",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":14,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":63,
                        "className":"肝胆用药",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":13,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":59,
                        "className":"心脑血管",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":12,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":62,
                        "className":"糖尿病类",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":11,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":56,
                        "className":"风湿骨病",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":10,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":51,
                        "className":"补益用药",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":9,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":54,
                        "className":"维矿补充",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":8,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":66,
                        "className":"妇科用药",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":7,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":64,
                        "className":"皮肤用药",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":6,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":52,
                        "className":"神经系统",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":5,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":55,
                        "className":"抗过敏类",
                        "showScene":"0",
                        "parentSid":1,
                        "parentName":null,
                        "showIndex":3,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    }
                ],
                "current":1,
                "size":10
            },
            {
                "sid":8,
                "className":"中西成药外用",
                "showScene":"0",
                "parentSid":0,
                "parentName":null,
                "showIndex":8,
                "fullPath":"",
                "remove":false,
                "createTime":"2019-10-13 19:24:58",
                "updateTime":"2019-10-13 19:24:58",
                "clubRefList":null,
                "club":1,
                "returnClubs":[

                ],
                "productAttrRefList":[

                ],
                "childrenList":[
                    {
                        "sid":39,
                        "className":"妇科外用",
                        "showScene":"0",
                        "parentSid":8,
                        "parentName":null,
                        "showIndex":8,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":35,
                        "className":"风湿外用",
                        "showScene":"0",
                        "parentSid":8,
                        "parentName":null,
                        "showIndex":6,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":40,
                        "className":"五官外用",
                        "showScene":"0",
                        "parentSid":8,
                        "parentName":null,
                        "showIndex":5,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":38,
                        "className":"胃肠外用",
                        "showScene":"0",
                        "parentSid":8,
                        "parentName":null,
                        "showIndex":3,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":37,
                        "className":"皮肤外用",
                        "showScene":"0",
                        "parentSid":8,
                        "parentName":null,
                        "showIndex":2,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    }
                ],
                "current":1,
                "size":10
            },
            {
                "sid":4,
                "className":"营养保健",
                "showScene":"0",
                "parentSid":0,
                "parentName":null,
                "showIndex":6,
                "fullPath":"",
                "remove":false,
                "createTime":"2019-10-13 19:24:58",
                "updateTime":"2019-10-13 19:24:58",
                "clubRefList":null,
                "club":1,
                "returnClubs":[

                ],
                "productAttrRefList":[

                ],
                "childrenList":[
                    {
                        "sid":13,
                        "className":"保健食品",
                        "showScene":"0",
                        "parentSid":4,
                        "parentName":null,
                        "showIndex":2,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    },
                    {
                        "sid":14,
                        "className":"功能食品",
                        "showScene":"0",
                        "parentSid":4,
                        "parentName":null,
                        "showIndex":1,
                        "fullPath":"/4",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    }
                ],
                "current":1,
                "size":10
            },
            {
                "sid":9,
                "className":"医疗器械",
                "showScene":"0",
                "parentSid":0,
                "parentName":null,
                "showIndex":5,
                "fullPath":"",
                "remove":false,
                "createTime":"2019-10-13 19:24:58",
                "updateTime":"2019-10-13 19:24:58",
                "clubRefList":null,
                "club":1,
                "returnClubs":[

                ],
                "productAttrRefList":[

                ],
                "childrenList":[
                    {
                        "sid":118,
                        "className":"医疗器械",
                        "showScene":"0",
                        "parentSid":9,
                        "parentName":null,
                        "showIndex":1,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    }
                ],
                "current":1,
                "size":10
            },
            {
                "sid":10,
                "className":"消毒用品",
                "showScene":"0",
                "parentSid":0,
                "parentName":null,
                "showIndex":4,
                "fullPath":"",
                "remove":false,
                "createTime":"2019-10-13 19:24:58",
                "updateTime":"2019-10-13 19:24:58",
                "clubRefList":null,
                "club":1,
                "returnClubs":[

                ],
                "productAttrRefList":[

                ],
                "childrenList":[
                    {
                        "sid":103,
                        "className":"消毒用品",
                        "showScene":"0",
                        "parentSid":10,
                        "parentName":null,
                        "showIndex":1,
                        "fullPath":"/10",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    }
                ],
                "current":1,
                "size":10
            },
            {
                "sid":7,
                "className":"个人护理",
                "showScene":"0",
                "parentSid":0,
                "parentName":null,
                "showIndex":3,
                "fullPath":"",
                "remove":false,
                "createTime":"2019-10-13 19:24:58",
                "updateTime":"2019-10-13 19:24:58",
                "clubRefList":null,
                "club":1,
                "returnClubs":[

                ],
                "productAttrRefList":[

                ],
                "childrenList":[
                    {
                        "sid":116,
                        "className":"个人护理",
                        "showScene":"0",
                        "parentSid":7,
                        "parentName":null,
                        "showIndex":1,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    }
                ],
                "current":1,
                "size":10
            },
            {
                "sid":2,
                "className":"生活用品",
                "showScene":"0",
                "parentSid":0,
                "parentName":null,
                "showIndex":2,
                "fullPath":"",
                "remove":false,
                "createTime":"2019-10-13 19:24:58",
                "updateTime":"2019-10-13 19:24:58",
                "clubRefList":null,
                "club":1,
                "returnClubs":[

                ],
                "productAttrRefList":[

                ],
                "childrenList":[
                    {
                        "sid":119,
                        "className":"生活用品",
                        "showScene":"0",
                        "parentSid":2,
                        "parentName":null,
                        "showIndex":1,
                        "fullPath":"",
                        "remove":false,
                        "createTime":"2019-10-13 19:24:58",
                        "updateTime":"2019-10-13 19:24:58",
                        "clubRefList":null,
                        "club":1,
                        "returnClubs":[

                        ],
                        "productAttrRefList":[

                        ],
                        "childrenList":null,
                        "current":1,
                        "size":10
                    }
                ],
                "current":1,
                "size":10
            }
        ],
        "current":0,
        "size":0,
        "total":0
    }
}
`
	var dat map[string]interface{}
	json.Unmarshal([]byte(data), &dat)
	ctx.JSON(200, dat)
}
func Search(ctx *Context){
	data:=`
{
    "code": 0,
    "timestamp": 1570765570837,
    "msg": "success",
    "data": {
        "current": 1,
        "size": 10,
        "total": 775,
        "pages": 78,
        "records": [
            {
                "sid": 5985,
                "productCode": "SPH00002913",
                "commodityName": "感冒清热颗粒(科大利民)",
                "approvalNumber": "国药准字Z36021225",
                "brand": "科大利民",
                "spec": "12g×9袋×120盒/件",
                "barCode": "6940773301895",
                "manufacturer": "江西京通美联药业有限公司",
                "price": 4.59,
                "retailPrice": 15.8,
                "medicalInsuranceSid": 0,
                "minNum": 10,
                "maxNum": 3000,
                "step": 10,
                "packageNum": 120,
                "unit": "盒",
                "mainImg": "/img/SPH00002913/0.png",
                "firstSellPoint": "",
                "secondSellPoint": "",
                "batchCode": "190402",
                "expireDate": "2021-03-31 00:00:00",
                "manufactureDate": "2019-04-01 00:00:00",
                "stock": 18381.00,
                "status": null,
                "newStartTime": "0001-01-01 08:00:00",
                "newEndTime": "0001-01-01 08:00:00",
                "activityList": null,
                "labelList": [
                    {
                        "sid": 3.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "showIndex": 0.0
                    }
                ],
                "huddle": 1,
                "valuation": false,
                "fixed": 0,
                "drugs": 1,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "",
                "criteria": "中国药典2015年版一部",
                "containedQuantity": "",
                "ppln": " ",
                "riseContent": null,
                "taxRate": 13.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000001",
                "isNew": false,
                "expireDateStr": "2021-03-31",
                "isCmedicine": false
            },
            {
                "sid": 6218,
                "productCode": "SPH00003190",
                "commodityName": "川贝雪梨膏(善举)",
                "approvalNumber": "国药准字Z42020054",
                "brand": "善举",
                "spec": "182g×48瓶/件",
                "barCode": "6911782875097",
                "manufacturer": "湖北老中醫制药有限责任公司",
                "price": 8.99,
                "retailPrice": 29.8,
                "medicalInsuranceSid": 0,
                "minNum": 12,
                "maxNum": 3000,
                "step": 12,
                "packageNum": 48,
                "unit": "瓶",
                "mainImg": "/img/SPH00003190/0.png",
                "firstSellPoint": "",
                "secondSellPoint": "",
                "batchCode": "190411",
                "expireDate": "2022-03-31 00:00:00",
                "manufactureDate": "2019-04-29 00:00:00",
                "stock": 41864.00,
                "status": null,
                "newStartTime": "2019-04-16 10:00:00",
                "newEndTime": "2019-04-26 10:00:00",
                "activityList": null,
                "labelList": [
                    {
                        "sid": 4.0,
                        "labelVal": "公益宝贝",
                        "iconUrl": "2019/09/24/1176433939250675712.png",
                        "showIndex": 0.0
                    },
                    {
                        "sid": 3.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "showIndex": 0.0
                    }
                ],
                "huddle": 1,
                "valuation": false,
                "fixed": 0,
                "drugs": 1,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "",
                "criteria": "《中国药典》2010年版一部国家食品药品监督管理局标准YBZ03682009",
                "containedQuantity": "",
                "ppln": " ",
                "riseContent": null,
                "taxRate": 13.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000001",
                "isNew": false,
                "expireDateStr": "2022-03-31",
                "isCmedicine": false
            },
            {
                "sid": 6210,
                "productCode": "SPH00003182",
                "commodityName": "姜枣祛寒颗粒(善举)",
                "approvalNumber": "国药准字Z43021041",
                "brand": "善举",
                "spec": "15g×9袋×100盒/件",
                "barCode": "6957471601202",
                "manufacturer": "湖南康尔佳制药股份有限公司",
                "price": 5.99,
                "retailPrice": 19.9,
                "medicalInsuranceSid": 0,
                "minNum": 10,
                "maxNum": 3000,
                "step": 10,
                "packageNum": 100,
                "unit": "盒",
                "mainImg": "/img/SPH00003182/0.png",
                "firstSellPoint": "",
                "secondSellPoint": "",
                "batchCode": "JH190602",
                "expireDate": "2021-11-30 00:00:00",
                "manufactureDate": "2019-06-21 00:00:00",
                "stock": 22836.00,
                "status": null,
                "newStartTime": "2019-04-16 10:00:00",
                "newEndTime": "2019-04-26 10:00:00",
                "activityList": null,
                "labelList": [
                    {
                        "sid": 4.0,
                        "labelVal": "公益宝贝",
                        "iconUrl": "2019/09/24/1176433939250675712.png",
                        "showIndex": 0.0
                    },
                    {
                        "sid": 3.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "showIndex": 0.0
                    }
                ],
                "huddle": 1,
                "valuation": false,
                "fixed": 0,
                "drugs": 1,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "",
                "criteria": "部颁标准中药成方制剂第二册WS3-B-0361-90",
                "containedQuantity": "",
                "ppln": " ",
                "riseContent": null,
                "taxRate": 13.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000001",
                "isNew": false,
                "expireDateStr": "2021-11-30",
                "isCmedicine": false
            },
            {
                "sid": 4833,
                "productCode": "SPH00001598",
                "commodityName": "感冒清热胶囊",
                "approvalNumber": "国药准字Z20054346",
                "brand": "",
                "spec": "0.45g×27粒×300盒/件",
                "barCode": "6920594301915",
                "manufacturer": "广东一力罗定制药有限公司",
                "price": 4.99,
                "retailPrice": 22.8,
                "medicalInsuranceSid": 0,
                "minNum": 10,
                "maxNum": 3000,
                "step": 10,
                "packageNum": 300,
                "unit": "盒",
                "mainImg": "/img/SPH00001598/0.png",
                "firstSellPoint": "",
                "secondSellPoint": "",
                "batchCode": "190304",
                "expireDate": "2021-02-28 00:00:00",
                "manufactureDate": "2019-03-02 00:00:00",
                "stock": 56671.00,
                "status": null,
                "newStartTime": "2019-04-17 10:00:00",
                "newEndTime": "2019-04-27 10:00:00",
                "activityList": [
                    {
                        "activityId": "243",
                        "activityContent": "感冒清热胶囊一次性购满20盒送本品2盒，以此类推。",
                        "type": "1"
                    }
                ],
                "labelList": [
                    {
                        "sid": 3.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "showIndex": 0.0
                    }
                ],
                "huddle": 1,
                "valuation": false,
                "fixed": 0,
                "drugs": 1,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "",
                "criteria": "中国药典2015年版一部",
                "containedQuantity": "",
                "ppln": " ",
                "riseContent": null,
                "taxRate": 13.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000001",
                "isNew": false,
                "expireDateStr": "2021-02-28",
                "isCmedicine": false
            },
            {
                "sid": 6068,
                "productCode": "SPH00003005",
                "commodityName": "感冒清热颗粒（无糖型）(善举)",
                "approvalNumber": "国药准字Z45020547",
                "brand": "善举",
                "spec": "6g×11袋×120盒/件",
                "barCode": "6927949960711",
                "manufacturer": "三金集团湖南三金制药有限责任公司",
                "price": 7.8,
                "retailPrice": 22.8,
                "medicalInsuranceSid": 0,
                "minNum": 10,
                "maxNum": 3000,
                "step": 10,
                "packageNum": 120,
                "unit": "盒",
                "mainImg": "/img/SPH00003005/0.png",
                "firstSellPoint": "",
                "secondSellPoint": "",
                "batchCode": "181204",
                "expireDate": "2020-11-30 00:00:00",
                "manufactureDate": "2018-12-04 00:00:00",
                "stock": 3099.00,
                "status": null,
                "newStartTime": "0001-01-01 08:00:00",
                "newEndTime": "0001-01-01 08:00:00",
                "activityList": [
                    {
                        "activityId": "321",
                        "activityContent": "感冒清热颗粒（无糖型）（善举）一次性购满10盒送3盒本品，以此类推",
                        "type": "1"
                    }
                ],
                "labelList": [
                    {
                        "sid": 3.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "showIndex": 0.0
                    },
                    {
                        "sid": 4.0,
                        "labelVal": "公益宝贝",
                        "iconUrl": "2019/09/24/1176433939250675712.png",
                        "showIndex": 0.0
                    }
                ],
                "huddle": 1,
                "valuation": false,
                "fixed": 0,
                "drugs": 1,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "",
                "criteria": "《中国药典》2010年版一部",
                "containedQuantity": "",
                "ppln": " ",
                "riseContent": null,
                "taxRate": 13.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000001",
                "isNew": false,
                "expireDateStr": "2020-11-30",
                "isCmedicine": false
            },
            {
                "sid": 5798,
                "productCode": "SPH00002695",
                "commodityName": "胃康灵胶囊(善举)",
                "approvalNumber": "国药准字Z20054680",
                "brand": "善举",
                "spec": "0.4g×12粒×3板×150盒/件",
                "barCode": "6926057923403",
                "manufacturer": "黑龙江天宏药业股份有限公司",
                "price": 6.8,
                "retailPrice": 24.0,
                "medicalInsuranceSid": 0,
                "minNum": 10,
                "maxNum": 3000,
                "step": 10,
                "packageNum": 150,
                "unit": "盒",
                "mainImg": "/img/SPH00002695/0.png",
                "firstSellPoint": null,
                "secondSellPoint": null,
                "batchCode": "20190202",
                "expireDate": "2021-02-16 00:00:00",
                "manufactureDate": "2019-02-17 00:00:00",
                "stock": 57800.00,
                "status": null,
                "newStartTime": "0001-01-01 08:00:00",
                "newEndTime": "0001-01-01 08:00:00",
                "activityList": null,
                "labelList": [
                    {
                        "sid": 4.0,
                        "labelVal": "公益宝贝",
                        "iconUrl": "2019/09/24/1176433939250675712.png",
                        "showIndex": 0.0
                    },
                    {
                        "sid": 3.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "showIndex": 0.0
                    }
                ],
                "huddle": 1,
                "valuation": false,
                "fixed": 0,
                "drugs": 1,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "",
                "criteria": "中国药典2015年版一部",
                "containedQuantity": "",
                "ppln": " ",
                "riseContent": null,
                "taxRate": 13.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000001",
                "isNew": false,
                "expireDateStr": "2021-02-16",
                "isCmedicine": false
            },
            {
                "sid": 5087,
                "productCode": "SPH00001890",
                "commodityName": "盐酸氨溴索口服溶液（乐赛仙）",
                "approvalNumber": "国药准字H20093261",
                "brand": "乐赛仙",
                "spec": "10ml:60mg×8瓶×80盒/件",
                "barCode": "6916119072002",
                "manufacturer": "石药集团欧意药业有限公司",
                "price": 7.9,
                "retailPrice": 28.0,
                "medicalInsuranceSid": 0,
                "minNum": 10,
                "maxNum": 3000,
                "step": 10,
                "packageNum": 80,
                "unit": "盒",
                "mainImg": "/img/SPH00001890/0.png",
                "firstSellPoint": "",
                "secondSellPoint": "",
                "batchCode": "539190571",
                "expireDate": "2021-05-22 00:00:00",
                "manufactureDate": "2019-05-23 00:00:00",
                "stock": 25188.00,
                "status": null,
                "newStartTime": "0001-01-01 08:00:00",
                "newEndTime": "0001-01-01 08:00:00",
                "activityList": null,
                "labelList": [
                    {
                        "sid": 3.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "showIndex": 0.0
                    }
                ],
                "huddle": 1,
                "valuation": false,
                "fixed": 0,
                "drugs": 1,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "",
                "criteria": "YBH02662009",
                "containedQuantity": "",
                "ppln": " ",
                "riseContent": null,
                "taxRate": 13.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000001",
                "isNew": false,
                "expireDateStr": "2021-05-22",
                "isCmedicine": false
            },
            {
                "sid": 5217,
                "productCode": "SPH00002029",
                "commodityName": "风寒感冒颗粒（乐赛仙）",
                "approvalNumber": "国药准字Z36021484",
                "brand": "乐赛仙",
                "spec": "8g×8袋×120盒/件",
                "barCode": "6911672042585",
                "manufacturer": "江西南昌桑海制药有限责任公司",
                "price": 4.29,
                "retailPrice": 15.8,
                "medicalInsuranceSid": 0,
                "minNum": 10,
                "maxNum": 3000,
                "step": 10,
                "packageNum": 120,
                "unit": "盒",
                "mainImg": "/img/SPH00002029/0.png",
                "firstSellPoint": "",
                "secondSellPoint": "",
                "batchCode": "190383",
                "expireDate": "2021-02-28 00:00:00",
                "manufactureDate": "2019-03-26 00:00:00",
                "stock": 1597.00,
                "status": null,
                "newStartTime": "2000-12-30 08:00:00",
                "newEndTime": "2000-12-30 08:00:00",
                "activityList": null,
                "labelList": [
                    {
                        "sid": 3.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "showIndex": 0.0
                    }
                ],
                "huddle": 1,
                "valuation": false,
                "fixed": 0,
                "drugs": 1,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "",
                "criteria": "WS3-B-0045-89",
                "containedQuantity": "",
                "ppln": " ",
                "riseContent": null,
                "taxRate": 13.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000001",
                "isNew": false,
                "expireDateStr": "2021-02-28",
                "isCmedicine": false
            },
            {
                "sid": 4895,
                "productCode": "SPH00001672",
                "commodityName": "复方氨酚烷胺片（乐赛仙）",
                "approvalNumber": "国药准字H21023345",
                "brand": "乐赛仙",
                "spec": "12片×360盒/件",
                "barCode": "6930186215308",
                "manufacturer": "辽宁华瑞联合制药有限公司",
                "price": 1.98,
                "retailPrice": 12.0,
                "medicalInsuranceSid": 0,
                "minNum": 10,
                "maxNum": 3000,
                "step": 10,
                "packageNum": 360,
                "unit": "盒",
                "mainImg": "/img/SPH00001672/0.png",
                "firstSellPoint": "",
                "secondSellPoint": "",
                "batchCode": "1190607",
                "expireDate": "2021-05-31 00:00:00",
                "manufactureDate": "2019-06-10 00:00:00",
                "stock": 81494.00,
                "status": null,
                "newStartTime": "2000-12-30 08:00:00",
                "newEndTime": "2000-12-30 08:00:00",
                "activityList": null,
                "labelList": [
                    {
                        "sid": 3.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "showIndex": 0.0
                    }
                ],
                "huddle": 1,
                "valuation": false,
                "fixed": 0,
                "drugs": 1,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "",
                "criteria": "WS1-XG-015-2002",
                "containedQuantity": "",
                "ppln": " ",
                "riseContent": null,
                "taxRate": 13.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000001",
                "isNew": false,
                "expireDateStr": "2021-05-31",
                "isCmedicine": false
            },
            {
                "sid": 3277,
                "productCode": "SPH00000008",
                "commodityName": "金婴爽美宝维肤膏(乐赛仙)",
                "approvalNumber": "闽卫消证字（2004）第0050号",
                "brand": "乐赛仙",
                "spec": "20g×400支/件",
                "barCode": "69356390105549",
                "manufacturer": "漳州市健源堂生物工程有限公司",
                "price": 4.9,
                "retailPrice": 18.0,
                "medicalInsuranceSid": 0,
                "minNum": 20,
                "maxNum": 3000,
                "step": 20,
                "packageNum": 400,
                "unit": "支",
                "mainImg": "2019/09/10/1171263463817740288.png",
                "firstSellPoint": "",
                "secondSellPoint": "",
                "batchCode": "190708",
                "expireDate": "2021-07-07 00:00:00",
                "manufactureDate": "2019-07-08 00:00:00",
                "stock": 16623.00,
                "status": null,
                "newStartTime": "2019-06-06 08:00:00",
                "newEndTime": "2019-06-16 08:00:00",
                "activityList": null,
                "labelList": [
                    {
                        "sid": 3.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "showIndex": 0.0
                    }
                ],
                "huddle": 1,
                "valuation": true,
                "fixed": 0,
                "drugs": 1,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "",
                "criteria": "化妆品卫生规范2007年",
                "containedQuantity": "",
                "ppln": "",
                "riseContent": null,
                "taxRate": 13.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000001",
                "isNew": false,
                "expireDateStr": "2021-07-07",
                "isCmedicine": false
            }
        ],
        "facetResultMap": {
            "brandFacet": [
                {
                    "num": 208,
                    "name": "乐赛仙"
                },
                {
                    "num": 186,
                    "name": "善举"
                },
                {
                    "num": 27,
                    "name": "芽培"
                },
                {
                    "num": 20,
                    "name": "状元娃"
                },
                {
                    "num": 7,
                    "name": "草本至尊"
                },
                {
                    "num": 6,
                    "name": "花城"
                },
                {
                    "num": 3,
                    "name": "科大利民"
                }
            ],
            "manufacturerFacet": [
                {
                    "num": 76,
                    "name": "长沙尚佳包装印刷有限公司"
                },
                {
                    "num": 27,
                    "name": "广西宝正药业有限公司"
                },
                {
                    "num": 23,
                    "name": "湖北时安饮片药业有限公司"
                },
                {
                    "num": 13,
                    "name": "石药集团欧意药业有限公司"
                },
                {
                    "num": 12,
                    "name": "武汉太福制药有限公司"
                },
                {
                    "num": 12,
                    "name": "江西致和堂中药饮片有限公司"
                },
                {
                    "num": 10,
                    "name": "华北制药股份有限公司"
                },
                {
                    "num": 10,
                    "name": "四川天植中药股份有限公司"
                },
                {
                    "num": 10,
                    "name": "黑龙江天龙药业有限公司"
                },
                {
                    "num": 9,
                    "name": "民生药业集团珍医堂制药有限公司"
                },
                {
                    "num": 9,
                    "name": "湖北金龙药业有限公司"
                },
                {
                    "num": 8,
                    "name": "四川新荷花中药饮片股份有限公司"
                },
                {
                    "num": 8,
                    "name": "山东鲁抗医药集团赛特有限责任公司"
                },
                {
                    "num": 8,
                    "name": "山西同达药业有限公司"
                },
                {
                    "num": 8,
                    "name": "景忠山国药（唐山）有限公司"
                },
                {
                    "num": 8,
                    "name": "陕西天洋制药有限责任公司"
                },
                {
                    "num": 7,
                    "name": "天津和治药业集团有限公司"
                },
                {
                    "num": 7,
                    "name": "山西新宝源制药有限公司"
                },
                {
                    "num": 7,
                    "name": "江西南昌桑海制药有限责任公司"
                },
                {
                    "num": 6,
                    "name": "临沂九州天润中药饮片产业有限公司"
                },
                {
                    "num": 6,
                    "name": "南通市潘妍化妆品厂"
                },
                {
                    "num": 6,
                    "name": "太极集团浙江东方制药有限公司"
                },
                {
                    "num": 6,
                    "name": "山西津华晖星制药有限公司"
                },
                {
                    "num": 6,
                    "name": "广东一力罗定制药有限公司"
                },
                {
                    "num": 6,
                    "name": "广州花城药业有限公司"
                },
                {
                    "num": 6,
                    "name": "武汉诺安药业有限公司"
                },
                {
                    "num": 6,
                    "name": "湖南善源生物科技有限公司"
                },
                {
                    "num": 6,
                    "name": "福建太平洋制药有限公司"
                },
                {
                    "num": 5,
                    "name": "同药集团大同制药有限公司"
                },
                {
                    "num": 5,
                    "name": "国药集团武汉中联四药药业有限公司"
                },
                {
                    "num": 5,
                    "name": "山东鲁抗医药股份有限公司"
                },
                {
                    "num": 5,
                    "name": "惠州兆婷化妆品有限公司（原惠州兆骐礼品有限公司）"
                },
                {
                    "num": 5,
                    "name": "惠州大亚制药股份有限公司"
                },
                {
                    "num": 5,
                    "name": "成都兴沣瑞中药饮片有限责任公司"
                },
                {
                    "num": 5,
                    "name": "江苏聚荣制药集团有限公司"
                },
                {
                    "num": 5,
                    "name": "湖南康尔佳制药股份有限公司"
                },
                {
                    "num": 5,
                    "name": "石药控股集团河北唐威药业有限公司"
                },
                {
                    "num": 5,
                    "name": "长春普华制药股份有限公司"
                },
                {
                    "num": 5,
                    "name": "马应龙药业集团股份有限公司"
                },
                {
                    "num": 4,
                    "name": "上海现代哈森（商丘）药业有限公司"
                },
                {
                    "num": 4,
                    "name": "上海金香乳胶制品有限公司"
                },
                {
                    "num": 4,
                    "name": "临汾宝珠制药有限公司"
                },
                {
                    "num": 4,
                    "name": "云南云龙制药股份有限公司"
                },
                {
                    "num": 4,
                    "name": "云南铭鼎药业有限公司"
                },
                {
                    "num": 4,
                    "name": "保定中药制药股份有限公司"
                },
                {
                    "num": 4,
                    "name": "北京优胜然生物技术有限公司"
                },
                {
                    "num": 4,
                    "name": "北京御生堂集团石家庄制药有限公司"
                },
                {
                    "num": 4,
                    "name": "四川子仁制药有限公司"
                },
                {
                    "num": 4,
                    "name": "国药集团威奇达药业有限公司"
                },
                {
                    "num": 4,
                    "name": "大连汉方药业有限公司"
                },
                {
                    "num": 4,
                    "name": "宁波市鄞州华鑫仪器有限公司"
                },
                {
                    "num": 4,
                    "name": "广东新峰药业股份有限公司"
                },
                {
                    "num": 4,
                    "name": "广西一力桂西制药有限公司"
                },
                {
                    "num": 4,
                    "name": "广西禅方药业股份有限公司"
                },
                {
                    "num": 4,
                    "name": "新疆华世丹药业股份有限公司"
                },
                {
                    "num": 4,
                    "name": "江苏普华克胜药业有限公司"
                },
                {
                    "num": 4,
                    "name": "湖北惠真源药械有限公司"
                },
                {
                    "num": 4,
                    "name": "湖北正牛贴膏股份有限公司"
                },
                {
                    "num": 4,
                    "name": "湖南九典制药股份有限公司"
                },
                {
                    "num": 4,
                    "name": "湖南杏林春药业有限公司"
                },
                {
                    "num": 4,
                    "name": "珠海同源药业有限公司"
                },
                {
                    "num": 4,
                    "name": "西安方兴制药有限公司"
                },
                {
                    "num": 4,
                    "name": "贵州天安药业股份有限公司"
                },
                {
                    "num": 4,
                    "name": "黑龙江乌苏里江制药有限公司哈尔滨分公司"
                },
                {
                    "num": 4,
                    "name": "黑龙江鼎恒升药业有限公司"
                },
                {
                    "num": 3,
                    "name": "三金集团湖南三金制药有限责任公司"
                },
                {
                    "num": 3,
                    "name": "上海中华药业南通有限公司"
                },
                {
                    "num": 3,
                    "name": "伊春金北药制药有限公司"
                },
                {
                    "num": 3,
                    "name": "南京三盾药业有限公司"
                },
                {
                    "num": 3,
                    "name": "哈尔滨三三药业有限公司"
                },
                {
                    "num": 3,
                    "name": "安徽圣鹰药业有限公司"
                },
                {
                    "num": 3,
                    "name": "山西华元医药生物技术有限公司"
                },
                {
                    "num": 3,
                    "name": "广东长兴生物科技股份有限公司"
                },
                {
                    "num": 3,
                    "name": "广州一塑实业有限公司"
                },
                {
                    "num": 3,
                    "name": "广州市名俐日用化工有限公司"
                },
                {
                    "num": 3,
                    "name": "广西万寿堂药业有限公司"
                },
                {
                    "num": 3,
                    "name": "江苏万高药业股份有限公司"
                },
                {
                    "num": 3,
                    "name": "江西京通美联药业有限公司"
                },
                {
                    "num": 3,
                    "name": "江西南昌济生制药有限责任公司"
                },
                {
                    "num": 3,
                    "name": "江西庐山制药有限公司"
                },
                {
                    "num": 3,
                    "name": "河北康正药业有限公司"
                },
                {
                    "num": 3,
                    "name": "河南华峰制药有限公司"
                },
                {
                    "num": 3,
                    "name": "浙江巨泰药业有限公司"
                },
                {
                    "num": 3,
                    "name": "湖北四环制药有限公司"
                },
                {
                    "num": 3,
                    "name": "湖北老中醫制药有限责任公司"
                },
                {
                    "num": 3,
                    "name": "湖南众益泰制药有限公司"
                },
                {
                    "num": 3,
                    "name": "湖南德康制药股份有限公司"
                },
                {
                    "num": 3,
                    "name": "湖南欣宏包装有限公司"
                },
                {
                    "num": 3,
                    "name": "甘肃岷归中药材科技有限公司"
                },
                {
                    "num": 3,
                    "name": "石家庄四药有限公司"
                },
                {
                    "num": 3,
                    "name": "石药集团中诺药业（石家庄）有限公司"
                },
                {
                    "num": 3,
                    "name": "辽宁华瑞联合制药有限公司"
                },
                {
                    "num": 3,
                    "name": "邯郸康业制药有限公司"
                },
                {
                    "num": 3,
                    "name": "重庆科瑞制药（集团）有限公司"
                },
                {
                    "num": 3,
                    "name": "重庆莱美金鼠中药饮片有限公司"
                },
                {
                    "num": 3,
                    "name": "金日制药（中国）有限公司"
                },
                {
                    "num": 3,
                    "name": "陕西华西制药股份有限公司"
                },
                {
                    "num": 2,
                    "name": "万特制药（海南）有限公司"
                },
                {
                    "num": 2,
                    "name": "乐普药业股份有限公司"
                },
                {
                    "num": 2,
                    "name": "北京京丰制药集团有限公司"
                },
                {
                    "num": 2,
                    "name": "北京麦迪海药业有限责任公司"
                },
                {
                    "num": 2,
                    "name": "哈尔滨市龙生北药生物工程股份有限公司"
                },
                {
                    "num": 2,
                    "name": "四川德仁堂中药科技股份有限公司"
                },
                {
                    "num": 2,
                    "name": "四川本色工坊纸业有限责任公司"
                },
                {
                    "num": 2,
                    "name": "四川省旺林堂药业有限公司"
                },
                {
                    "num": 2,
                    "name": "威特（湖南）药业有限公司"
                },
                {
                    "num": 2,
                    "name": "山东东信阿胶有限公司"
                },
                {
                    "num": 2,
                    "name": "山东中泰药业有限公司"
                },
                {
                    "num": 2,
                    "name": "山东益健药业有限公司"
                },
                {
                    "num": 2,
                    "name": "广东一力集团制药股份有限公司"
                },
                {
                    "num": 2,
                    "name": "广东罗特制药有限公司"
                },
                {
                    "num": 2,
                    "name": "广州白云山医药集团股份有限公司白云山何济公制药厂"
                },
                {
                    "num": 2,
                    "name": "广州诺金制药有限公司"
                },
                {
                    "num": 2,
                    "name": "杭州胡庆余堂药业有限公司"
                },
                {
                    "num": 2,
                    "name": "江苏晨牌药业集团股份有限公司"
                },
                {
                    "num": 2,
                    "name": "江西绿源堂药业有限公司"
                },
                {
                    "num": 2,
                    "name": "河北国金药业有限责任公司"
                },
                {
                    "num": 2,
                    "name": "河南蓝图制药有限公司"
                },
                {
                    "num": 2,
                    "name": "海南海神同洲制药有限公司"
                },
                {
                    "num": 2,
                    "name": "海口市制药厂有限公司"
                },
                {
                    "num": 2,
                    "name": "湖南中和制药有限公司"
                },
                {
                    "num": 2,
                    "name": "湖南华纳大药厂股份有限公司"
                },
                {
                    "num": 2,
                    "name": "湖南天济草堂制药股份有限公司（原湖南天济草堂制药有限公司）"
                },
                {
                    "num": 2,
                    "name": "烟台元生药业有限公司"
                },
                {
                    "num": 2,
                    "name": "福寿堂制药有限公司"
                },
                {
                    "num": 2,
                    "name": "绍兴震元中药饮片有限公司"
                },
                {
                    "num": 2,
                    "name": "辽宁富东制药有限公司"
                },
                {
                    "num": 2,
                    "name": "遂成药业股份有限公司"
                },
                {
                    "num": 2,
                    "name": "青海鲁抗大地药业有限公司"
                },
                {
                    "num": 2,
                    "name": "颈复康药业集团有限公司"
                },
                {
                    "num": 2,
                    "name": "颈复康药业集团赤峰丹龙药业有限公司"
                },
                {
                    "num": 1,
                    "name": "上海信谊天平药业有限公司"
                },
                {
                    "num": 1,
                    "name": "上海和黄白猫有限公司"
                },
                {
                    "num": 1,
                    "name": "上海爱的发制药有限公司"
                },
                {
                    "num": 1,
                    "name": "上海衡山药业有限公司"
                },
                {
                    "num": 1,
                    "name": "中孚药业股份有限公司"
                },
                {
                    "num": 1,
                    "name": "云南万裕药业有限公司"
                },
                {
                    "num": 1,
                    "name": "云南优克制药公司"
                },
                {
                    "num": 1,
                    "name": "云南昊邦制药有限公司"
                },
                {
                    "num": 1,
                    "name": "亚宝药业集团股份有限公司"
                },
                {
                    "num": 1,
                    "name": "佛山益宝生制药有限公司"
                },
                {
                    "num": 1,
                    "name": "健民集团叶开泰国药（随州）有限公司"
                },
                {
                    "num": 1,
                    "name": "兰州佛慈制药股份有限公司"
                },
                {
                    "num": 1,
                    "name": "北京东方名盛商贸有限公司"
                },
                {
                    "num": 1,
                    "name": "北京乐普医疗科技有限责任公司"
                },
                {
                    "num": 1,
                    "name": "北京利龄恒泰药业有限公司"
                },
                {
                    "num": 1,
                    "name": "北京同仁堂股份有限公司同仁堂制药厂"
                },
                {
                    "num": 1,
                    "name": "北京宝树堂科技药业有限公司"
                },
                {
                    "num": 1,
                    "name": "北京长城制药有限公司（原北京长城制药厂）"
                },
                {
                    "num": 1,
                    "name": "南阳市新生制药有限公司"
                },
                {
                    "num": 1,
                    "name": "吉林九鑫制药股份有限公司"
                },
                {
                    "num": 1,
                    "name": "吉林敖东药业集团延吉股份有限公司"
                },
                {
                    "num": 1,
                    "name": "吉林益民堂制药有限公司"
                },
                {
                    "num": 1,
                    "name": "吉林省华威药业有限公司"
                },
                {
                    "num": 1,
                    "name": "吉林省天泰药业股份有限公司"
                },
                {
                    "num": 1,
                    "name": "吉林真元制药有限公司"
                },
                {
                    "num": 1,
                    "name": "吉林金恒制药股份有限公司"
                },
                {
                    "num": 1,
                    "name": "哈尔滨一洲制药有限公司"
                },
                {
                    "num": 1,
                    "name": "哈尔滨快好药业有限公司（原哈尔滨乐泰药业有限公司）"
                },
                {
                    "num": 1,
                    "name": "哈药集团三精千鹤制药有限公司"
                },
                {
                    "num": 1,
                    "name": "唐山红星药业有限责任公司"
                },
                {
                    "num": 1,
                    "name": "四川古蔺肝苏药业有限公司"
                },
                {
                    "num": 1,
                    "name": "四川向阳药业有限公司"
                },
                {
                    "num": 1,
                    "name": "四川国康药业有限公司(受托方 四川利君精华制药股份有限公司)"
                },
                {
                    "num": 1,
                    "name": "四川泰乐制药有限公司"
                },
                {
                    "num": 1,
                    "name": "国药集团同济堂（贵州）制药有限公司"
                },
                {
                    "num": 1,
                    "name": "国药集团广东环球制药有限公司"
                },
                {
                    "num": 1,
                    "name": "大同大源药业有限责任公司"
                },
                {
                    "num": 1,
                    "name": "天津中威和治药业有限公司"
                },
                {
                    "num": 1,
                    "name": "天津梅花生物医药科技有限公司"
                },
                {
                    "num": 1,
                    "name": "安丘市鲁安药业有限责任公司"
                },
                {
                    "num": 1,
                    "name": "安徽省双科药业有限公司"
                },
                {
                    "num": 1,
                    "name": "山东广育堂国药有限公司(原山东方健制药有限公司)"
                },
                {
                    "num": 1,
                    "name": "山东明仁福瑞达制药股份有限公司"
                },
                {
                    "num": 1,
                    "name": "山东济水阿胶有限公司"
                },
                {
                    "num": 1,
                    "name": "山东百维药业有限公司"
                },
                {
                    "num": 1,
                    "name": "山西仁源堂药业有限公司"
                },
                {
                    "num": 1,
                    "name": "山西国润制药有限公司"
                },
                {
                    "num": 1,
                    "name": "山西广誉远国药有限公司"
                },
                {
                    "num": 1,
                    "name": "常州康普药业有限公司"
                },
                {
                    "num": 1,
                    "name": "广东九明制药有限公司"
                },
                {
                    "num": 1,
                    "name": "广东人人康药业有限公司"
                },
                {
                    "num": 1,
                    "name": "广东同德药业有限公司"
                },
                {
                    "num": 1,
                    "name": "广东欧格斯科技有限公司"
                },
                {
                    "num": 1,
                    "name": "广州市花城制药厂"
                },
                {
                    "num": 1,
                    "name": "广州白云山医药集团股份有限公司白云山制药总厂"
                },
                {
                    "num": 1,
                    "name": "广州白云山星群（药业）股份有限公司"
                },
                {
                    "num": 1,
                    "name": "广州罗特制药有限公司"
                },
                {
                    "num": 1,
                    "name": "广西南珠制药有限公司"
                },
                {
                    "num": 1,
                    "name": "广西慧宝源医药科技有限公司"
                },
                {
                    "num": 1,
                    "name": "广西日田药业集团有限责任公司"
                },
                {
                    "num": 1,
                    "name": "广西昌弘制药有限公司"
                },
                {
                    "num": 1,
                    "name": "广西白云山盈康药业有限公司（原广西盈康药业有限责任公司）"
                },
                {
                    "num": 1,
                    "name": "开封明仁药业有限公司（原开封白云制药有限公司）"
                },
                {
                    "num": 1,
                    "name": "成都国嘉联合制药有限公司"
                },
                {
                    "num": 1,
                    "name": "成都青山利康药业有限公司"
                },
                {
                    "num": 1,
                    "name": "新奇康药业股份有限公司"
                },
                {
                    "num": 1,
                    "name": "新奇康药业股份有限公司（原新疆奇康哈博维药股份有限公司）"
                },
                {
                    "num": 1,
                    "name": "景忠山国药（唐山)有限公司"
                },
                {
                    "num": 1,
                    "name": "武汉双龙药业有限公司"
                },
                {
                    "num": 1,
                    "name": "江苏海智生物医药有限公司"
                },
                {
                    "num": 1,
                    "name": "江苏润邦药业有限公司"
                },
                {
                    "num": 1,
                    "name": "江苏知原药业有限公司"
                },
                {
                    "num": 1,
                    "name": "江苏远恒药业有限公司"
                },
                {
                    "num": 1,
                    "name": "江西半边天药业有限公司"
                },
                {
                    "num": 1,
                    "name": "江西天之海药业股份有限公司"
                },
                {
                    "num": 1,
                    "name": "江西天施康中药股份有限公司"
                },
                {
                    "num": 1,
                    "name": "江西广信药业有限公司"
                },
                {
                    "num": 1,
                    "name": "江西津大制药有限公司"
                },
                {
                    "num": 1,
                    "name": "江西济民可信药业有限公司"
                },
                {
                    "num": 1,
                    "name": "江西济民可信金水宝制药有限公司"
                },
                {
                    "num": 1,
                    "name": "江西珍视明药业有限公司"
                },
                {
                    "num": 1,
                    "name": "江西金世康药业有限公司"
                },
                {
                    "num": 1,
                    "name": "江西青春康源制药有限公司"
                },
                {
                    "num": 1,
                    "name": "河北奥星集团药业有限公司"
                },
                {
                    "num": 1,
                    "name": "河北巨龙药业有限责任公司"
                },
                {
                    "num": 1,
                    "name": "河北武罗药业有限公司"
                },
                {
                    "num": 1,
                    "name": "河南中杰药业有限公司"
                },
                {
                    "num": 1,
                    "name": "河南省新四方制药有限公司"
                },
                {
                    "num": 1,
                    "name": "浙江仙琚制药股份有限公司"
                },
                {
                    "num": 1,
                    "name": "浙江前进药业有限公司"
                },
                {
                    "num": 1,
                    "name": "浙江诚意药业股份有限公司"
                },
                {
                    "num": 1,
                    "name": "浙江迪耳药业有限公司"
                },
                {
                    "num": 1,
                    "name": "海南中盛合美生物制药有限公司"
                },
                {
                    "num": 1,
                    "name": "海南通用三洋药业有限公司"
                },
                {
                    "num": 1,
                    "name": "湖南尔康制药股份有限公司"
                },
                {
                    "num": 1,
                    "name": "湖南方盛制药股份有限公司"
                },
                {
                    "num": 1,
                    "name": "湖南爱敬堂制药有限公司"
                },
                {
                    "num": 1,
                    "name": "湖南营养树生物科技有限公司"
                },
                {
                    "num": 1,
                    "name": "漳州市健源堂生物工程有限公司"
                },
                {
                    "num": 1,
                    "name": "漳州无极药业有限公司"
                },
                {
                    "num": 1,
                    "name": "石药集团江西金芙蓉药业股份有限公司"
                },
                {
                    "num": 1,
                    "name": "福安药业集团宁波天衡制药有限公司"
                },
                {
                    "num": 1,
                    "name": "福建省泉州罗裳山制药厂"
                },
                {
                    "num": 1,
                    "name": "绍兴上虞子昂伞业有限公司"
                },
                {
                    "num": 1,
                    "name": "苏州太湖美药业有限公司"
                },
                {
                    "num": 1,
                    "name": "西安康华药业有限公司"
                },
                {
                    "num": 1,
                    "name": "西安远大德天药业股份有限公司"
                },
                {
                    "num": 1,
                    "name": "贵州云峰药业有限公司"
                },
                {
                    "num": 1,
                    "name": "贵州缔谊健康制药有限公司"
                },
                {
                    "num": 1,
                    "name": "郑州瑞康制药有限公司"
                },
                {
                    "num": 1,
                    "name": "重庆科瑞制药(集团)有限公司"
                },
                {
                    "num": 1,
                    "name": "重庆科瑞制药集团有限公司"
                },
                {
                    "num": 1,
                    "name": "重庆科瑞南海制药有限责任公司"
                },
                {
                    "num": 1,
                    "name": "长兴制药股份有限公司"
                },
                {
                    "num": 1,
                    "name": "长春长庆药业集团有限公司"
                },
                {
                    "num": 1,
                    "name": "长沙市开福区跃华印刷厂"
                },
                {
                    "num": 1,
                    "name": "陇西奇正药材有限责任公司"
                },
                {
                    "num": 1,
                    "name": "陕西君碧莎制药有限公司"
                },
                {
                    "num": 1,
                    "name": "陕西省科学院制药厂"
                },
                {
                    "num": 1,
                    "name": "青海省格拉丹东药业有限公司"
                },
                {
                    "num": 1,
                    "name": "青海省格拉丹药业有限公司"
                },
                {
                    "num": 1,
                    "name": "青海省通天河藏药制药有限责任公司"
                },
                {
                    "num": 1,
                    "name": "黄石燕舞药业有限公司"
                },
                {
                    "num": 1,
                    "name": "黑龙江天宏药业股份有限公司"
                },
                {
                    "num": 1,
                    "name": "黑龙江天辰药业有限公司"
                },
                {
                    "num": 1,
                    "name": "黑龙江康麦斯药业有限公司"
                }
            ]
        },
        "cond": null,
        "aggrResult": null,
        "rowNumMin": 0,
        "rowNumMax": 10
    }
}
`
	var dat map[string]interface{}
	json.Unmarshal([]byte(data), &dat)
	ctx.JSON(200, dat)
}

func SearchPage(ctx *Context){
	data:=`
{
    "code": 0,
    "timestamp": 1570801203925,
    "msg": "success",
    "data": {
        "current": 1,
        "size": 10,
        "total": 3,
        "pages": 1,
        "records": [
            {
                "sid": 7398,
                "productCode": "SPH100000402",
                "commodityName": "玄参(善举)",
                "approvalNumber": "",
                "brand": null,
                "spec": "统片×60袋/件   250g",
                "barCode": "6971216173298",
                "manufacturer": "湖北时安饮片药业有限公司",
                "price": 5.99,
                "retailPrice": 11.99,
                "medicalInsuranceSid": 0,
                "minNum": 1,
                "maxNum": 9999,
                "step": 1,
                "packageNum": 60,
                "unit": "袋",
                "mainImg": "2019/09/30/1178582631898415104.png",
                "firstSellPoint": "湖北道地玄参，无硫熏，手工切片，片型均匀。",
                "secondSellPoint": "",
                "batchCode": "19080100",
                "expireDate": "2024-08-19 00:00:00",
                "manufactureDate": "2019-08-20 00:00:00",
                "stock": 154.00,
                "status": null,
                "newStartTime": "2019-10-08 00:00:00",
                "newEndTime": "2019-10-18 00:00:00",
                "activityList": null,
                "labelList": [],
                "huddle": 1,
                "valuation": false,
                "fixed": 0,
                "drugs": 0,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": null,
                "producingArea": "湖北",
                "criteria": "《中国药典》2015年版一部及四部",
                "containedQuantity": "250g",
                "ppln": "",
                "riseContent": null,
                "taxRate": 9.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000004",
                "isNew": true,
                "expireDateStr": "2024-08-19",
                "isCmedicine": true
            },
            {
                "sid": 7301,
                "productCode": "SPH100000227",
                "commodityName": "阿托伐他汀钙分散片（科大利民）",
                "approvalNumber": "国药准字H20163163",
                "brand": null,
                "spec": "20mg×14片/盒×300盒/件",
                "barCode": "6972150830070",
                "manufacturer": "国药集团广东环球制药有限公司",
                "price": 38.8,
                "retailPrice": 78.0,
                "medicalInsuranceSid": 0,
                "minNum": 10,
                "maxNum": 10000,
                "step": 10,
                "packageNum": 300,
                "unit": "盒",
                "mainImg": "2019/10/09/1181769933546061824.png",
                "firstSellPoint": "全国独家剂型；强效他汀。",
                "secondSellPoint": "",
                "batchCode": "190901",
                "expireDate": "2021-09-05 00:00:00",
                "manufactureDate": "2019-09-06 00:00:00",
                "stock": 34625.00,
                "status": null,
                "newStartTime": "2019-10-09 12:00:00",
                "newEndTime": "2019-10-19 12:00:00",
                "activityList": [
                    {
                        "activityId": "356",
                        "activityContent": "一次性购满20盒送2盒本品，以此类推。",
                        "type": "1"
                    }
                ],
                "labelList": [
                    {
                        "sid": 3.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "showIndex": 0.0
                    }
                ],
                "huddle": 1,
                "valuation": false,
                "fixed": 0,
                "drugs": 1,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "",
                "criteria": "YBH00892016",
                "containedQuantity": "",
                "ppln": "粤20160211",
                "riseContent": null,
                "taxRate": 13.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000001",
                "isNew": true,
                "expireDateStr": "2021-09-05",
                "isCmedicine": false
            },
            {
                "sid": 7337,
                "productCode": "SPH100000298",
                "commodityName": "止咳橘红口服液（善举）",
                "approvalNumber": "国药准字Z20054427",
                "brand": null,
                "spec": "10毫升×9支/盒×60盒/件",
                "barCode": "6921987199416",
                "manufacturer": "哈尔滨一洲制药有限公司",
                "price": 9.99,
                "retailPrice": 29.8,
                "medicalInsuranceSid": 0,
                "minNum": 10,
                "maxNum": 10000,
                "step": 5,
                "packageNum": 60,
                "unit": "盒",
                "mainImg": "2019/10/09/1181737742673903616.png",
                "firstSellPoint": "",
                "secondSellPoint": "",
                "batchCode": "190901",
                "expireDate": "2021-08-31 00:00:00",
                "manufactureDate": "2019-09-03 00:00:00",
                "stock": 24537.00,
                "status": null,
                "newStartTime": "2019-10-10 09:00:00",
                "newEndTime": "2019-10-20 09:00:00",
                "activityList": [
                    {
                        "activityId": "361",
                        "activityContent": "止咳橘红口服液（善举）一次性购满30盒送2盒硫酸庆大霉素颗粒（芽培），以此类推。",
                        "type": "1"
                    }
                ],
                "labelList": [
                    {
                        "sid": 4.0,
                        "labelVal": "公益宝贝",
                        "iconUrl": "2019/09/24/1176433939250675712.png",
                        "showIndex": 0.0
                    },
                    {
                        "sid": 3.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "showIndex": 0.0
                    }
                ],
                "huddle": 1,
                "valuation": true,
                "fixed": 0,
                "drugs": 0,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "",
                "criteria": "《中国药典》2015年版一部",
                "containedQuantity": "",
                "ppln": "黑20160061",
                "riseContent": null,
                "taxRate": 13.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000001",
                "isNew": true,
                "expireDateStr": "2021-08-31",
                "isCmedicine": false
            }
        ],
        "facetResultMap": null,
        "cond": null,
        "aggrResult": null,
        "rowNumMin": 0,
        "rowNumMax": 10
    }
}
`
	var dat map[string]interface{}
	json.Unmarshal([]byte(data), &dat)
	ctx.JSON(200, dat)
}
//商品详情
func ProductInfo(ctx *Context){
	sid:=ctx.Param("sid")
	fmt.Println(sid)
	data:=`
{
    "code": 0,
    "timestamp": 1570789904238,
    "msg": "success",
    "data": {
        "sid": 6218,
        "productCode": "SPH00003190",
        "commodityName": "川贝雪梨膏(善举)",
        "firstClassSid": 1,
        "secondClassSid": 60,
        "thirdClassSid": null,
        "approvalNumber": "国药准字Z42020054",
        "barCode": "6911782875097",
        "brand": "善举",
        "spec": "182g×48瓶/件",
        "manufacturer": "湖北老中醫制药有限责任公司",
        "valuation": false,
        "price": 8.99,
        "retailPrice": 29.8,
        "medicalInsuranceSid": 0,
        "medicalInsuranceArea": "null",
        "minNum": 12,
        "maxNum": 3000,
        "step": 12,
        "mainImg": "/img/SPH00003190/0.png",
        "firstSellPoint": "",
        "secondSellPoint": "",
        "batchCode": "190411",
        "expireDate": "2022-03-31 00:00:00",
        "manufactureDate": "2019-04-29 00:00:00",
        "stock": 41384.00,
        "status": 2,
        "newStartTime": "2019-04-16 10:00:00",
        "newEndTime": "2019-04-26 10:00:00",
        "lvl": "",
        "producingArea": "",
        "criteria": "《中国药典》2010年版一部国家食品药品监督管理局标准YBZ03682009",
        "containedQuantity": "",
        "ppln": " ",
        "activityList": null,
        "imgList": [
            {
                "imgUrl": "/img/SPH00003190/0.png",
                "indexNum": 1
            },
            {
                "imgUrl": "/img/SPH00003190/1.jpg",
                "indexNum": 2
            },
            {
                "imgUrl": "/img/SPH00003190/2.jpg",
                "indexNum": 3
            },
            {
                "imgUrl": "/img/SPH00003190/3.jpg",
                "indexNum": 4
            },
            {
                "imgUrl": "/img/SPH00003190/4.jpg",
                "indexNum": 5
            },
            {
                "imgUrl": "/img/SPH00003190/5.jpg",
                "indexNum": 6
            }
        ],
        "labelList": [
            {
                "showIndex": 0,
                "labelVal": "公益宝贝",
                "iconUrl": "2019/09/24/1176433939250675712.png",
                "sid": 4
            },
            {
                "showIndex": 0,
                "labelVal": "岳麓",
                "iconUrl": "2019/09/24/1176434017310867456.png",
                "sid": 3
            }
        ],
        "huddle": 1,
        "fixed": 0,
        "drugs": 1,
        "searchAttrValueJson": null,
        "attrValueJson": null,
        "attrList": [
            {
                "name": "生产企业",
                "value": "湖北老中醫制药有限责任公司"
            },
            {
                "name": "规格",
                "value": "182g×48瓶/件"
            },
            {
                "name": "批准文号",
                "value": "国药准字Z42020054"
            },
            {
                "name": "医保类型",
                "value": "非医保"
            },
            {
                "name": "医保范围",
                "value": "null"
            },
            {
                "name": "批号优于",
                "value": "190411"
            },
            {
                "name": "条形码",
                "value": "6911782875097"
            },
            {
                "name": "效期优于",
                "value": "2022-03-31"
            },
            {
                "name": "库存",
                "value": ">1000"
            }
        ],
        "skuList": [
            {
                "supplierSid": 101,
                "batchCode": "190411",
                "manufactureDate": "2019-04-29 00:00:00",
                "expireDate": "2022-03-31 00:00:00",
                "attrValueJson": null,
                "sid": 1988
            }
        ],
        "relationList": [
            {
                "sid": 5915,
                "club": 1,
                "clubs": null,
                "clubsStr": "",
                "productSid": 6218,
                "productCode": null,
                "targetProductSid": 6169,
                "brand": "善举",
                "commodityName": "罗红霉素胶囊(善举)",
                "manufacturer": "上海现代哈森（商丘）药业有限公司",
                "price": 4.99,
                "retailPrice": 29.80,
                "minNum": 10,
                "maxNum": 3000,
                "step": 10,
                "mainImg": "/img/SPH00003136/0.png",
                "stock": 64427,
                "expireDate": "2021-01-31 00:00:00",
                "manufactureDate": "2019-02-25 00:00:00",
                "expireStatus": 0,
                "unit": "盒",
                "packageNum": 300,
                "relationType": 0,
                "remove": false,
                "createTime": "2019-10-11 18:31:44",
                "updateTime": "2019-10-11 18:31:44",
                "productInfo": {
                    "sid": 6169,
                    "productCode": "SPH00003136",
                    "commodityName": "罗红霉素胶囊(善举)",
                    "firstClassSid": 1,
                    "secondClassSid": 65,
                    "thirdClassSid": null,
                    "approvalNumber": "国药准字H20074013",
                    "barCode": "6932721203436",
                    "brand": "善举",
                    "spec": "0.15g×22粒×300盒/件",
                    "manufacturer": "上海现代哈森（商丘）药业有限公司",
                    "valuation": false,
                    "price": 4.99,
                    "retailPrice": 29.8,
                    "medicalInsuranceSid": 0,
                    "medicalInsuranceArea": "null",
                    "minNum": 10,
                    "maxNum": 3000,
                    "step": 10,
                    "mainImg": "/img/SPH00003136/0.png",
                    "firstSellPoint": "",
                    "secondSellPoint": "",
                    "batchCode": "19022532",
                    "expireDate": "2021-01-31 00:00:00",
                    "manufactureDate": "2019-02-25 00:00:00",
                    "stock": null,
                    "status": null,
                    "newStartTime": "2019-03-27 16:00:00",
                    "newEndTime": "2019-04-07 16:00:00",
                    "lvl": "",
                    "producingArea": "",
                    "criteria": "《中国药典》2015年版二部",
                    "containedQuantity": "",
                    "ppln": " ",
                    "activityList": null,
                    "imgList": [
                        {
                            "imgUrl": "/img/SPH00003136/0.png",
                            "indexNum": 1
                        },
                        {
                            "imgUrl": "/img/SPH00003136/1.jpg",
                            "indexNum": 2
                        },
                        {
                            "imgUrl": "/img/SPH00003136/2.jpg",
                            "indexNum": 3
                        },
                        {
                            "imgUrl": "/img/SPH00003136/3.jpg",
                            "indexNum": 4
                        },
                        {
                            "imgUrl": "/img/SPH00003136/4.jpg",
                            "indexNum": 5
                        },
                        {
                            "imgUrl": "/img/SPH00003136/5.jpg",
                            "indexNum": 6
                        },
                        {
                            "imgUrl": "/img/SPH00003136/6.jpg",
                            "indexNum": 7
                        }
                    ],
                    "labelList": [
                        {
                            "showIndex": 0,
                            "labelVal": "公益宝贝",
                            "iconUrl": "2019/09/24/1176433939250675712.png",
                            "sid": 4
                        },
                        {
                            "showIndex": 0,
                            "labelVal": "岳麓",
                            "iconUrl": "2019/09/24/1176434017310867456.png",
                            "sid": 3
                        }
                    ],
                    "huddle": 1,
                    "fixed": 0,
                    "drugs": 1,
                    "searchAttrValueJson": null,
                    "attrValueJson": null,
                    "attrList": null,
                    "skuList": [
                        {
                            "supplierSid": 101,
                            "batchCode": "19022532",
                            "manufactureDate": "2019-02-25 00:00:00",
                            "expireDate": "2021-01-31 00:00:00",
                            "attrValueJson": null,
                            "sid": 1940
                        }
                    ],
                    "relationList": null,
                    "grossProfit": null,
                    "profit": 0,
                    "taxRate": 13.0,
                    "expireStatus": 0,
                    "details": null,
                    "isActivity": null,
                    "shoppingNumber": null,
                    "riseContent": null,
                    "isNew": null,
                    "firstClass": null,
                    "secondClass": null,
                    "thirdClass": null,
                    "club": 1,
                    "risePrice": 0,
                    "businessScope": 1,
                    "businessScopeName": null,
                    "packageNum": 300,
                    "unit": "盒",
                    "dosageForm": "硬胶囊剂",
                    "prescriptionClass": "处方药",
                    "storageCondition": "常温",
                    "warehouseCode": "HWI00000001",
                    "expireDateStr": "2021-01-31",
                    "isCmedicine": false
                },
                "current": 1,
                "size": 10
            },
            {
                "sid": 5916,
                "club": 1,
                "clubs": null,
                "clubsStr": "",
                "productSid": 6218,
                "productCode": null,
                "targetProductSid": 5217,
                "brand": "乐赛仙",
                "commodityName": "风寒感冒颗粒（乐赛仙）",
                "manufacturer": "江西南昌桑海制药有限责任公司",
                "price": 4.29,
                "retailPrice": 15.80,
                "minNum": 10,
                "maxNum": 3000,
                "step": 10,
                "mainImg": "/img/SPH00002029/0.png",
                "stock": 306,
                "expireDate": "2021-02-28 00:00:00",
                "manufactureDate": "2019-03-26 00:00:00",
                "expireStatus": 0,
                "unit": "盒",
                "packageNum": 120,
                "relationType": 0,
                "remove": false,
                "createTime": "2019-10-11 18:31:44",
                "updateTime": "2019-10-11 18:31:44",
                "productInfo": {
                    "sid": 5217,
                    "productCode": "SPH00002029",
                    "commodityName": "风寒感冒颗粒（乐赛仙）",
                    "firstClassSid": 1,
                    "secondClassSid": 67,
                    "thirdClassSid": null,
                    "approvalNumber": "国药准字Z36021484",
                    "barCode": "6911672042585",
                    "brand": "乐赛仙",
                    "spec": "8g×8袋×120盒/件",
                    "manufacturer": "江西南昌桑海制药有限责任公司",
                    "valuation": false,
                    "price": 4.29,
                    "retailPrice": 15.8,
                    "medicalInsuranceSid": 0,
                    "medicalInsuranceArea": "null",
                    "minNum": 10,
                    "maxNum": 3000,
                    "step": 10,
                    "mainImg": "/img/SPH00002029/0.png",
                    "firstSellPoint": "",
                    "secondSellPoint": "",
                    "batchCode": "190383",
                    "expireDate": "2021-02-28 00:00:00",
                    "manufactureDate": "2019-03-26 00:00:00",
                    "stock": null,
                    "status": null,
                    "newStartTime": "2000-12-30 08:00:00",
                    "newEndTime": "2000-12-30 08:00:00",
                    "lvl": "",
                    "producingArea": "",
                    "criteria": "WS3-B-0045-89",
                    "containedQuantity": "",
                    "ppln": " ",
                    "activityList": null,
                    "imgList": [
                        {
                            "imgUrl": "/img/SPH00002029/0.png",
                            "indexNum": 1
                        },
                        {
                            "imgUrl": "/img/SPH00002029/1.jpg",
                            "indexNum": 2
                        },
                        {
                            "imgUrl": "/img/SPH00002029/2.jpg",
                            "indexNum": 3
                        },
                        {
                            "imgUrl": "/img/SPH00002029/3.jpg",
                            "indexNum": 4
                        },
                        {
                            "imgUrl": "/img/SPH00002029/4.jpg",
                            "indexNum": 5
                        },
                        {
                            "imgUrl": "/img/SPH00002029/5.jpg",
                            "indexNum": 6
                        }
                    ],
                    "labelList": [
                        {
                            "showIndex": 0,
                            "labelVal": "岳麓",
                            "iconUrl": "2019/09/24/1176434017310867456.png",
                            "sid": 3
                        }
                    ],
                    "huddle": 1,
                    "fixed": 0,
                    "drugs": 1,
                    "searchAttrValueJson": null,
                    "attrValueJson": null,
                    "attrList": null,
                    "skuList": [
                        {
                            "supplierSid": 101,
                            "batchCode": "190383",
                            "manufactureDate": "2019-03-26 00:00:00",
                            "expireDate": "2021-02-28 00:00:00",
                            "attrValueJson": null,
                            "sid": 1326
                        }
                    ],
                    "relationList": null,
                    "grossProfit": null,
                    "profit": 0,
                    "taxRate": 13.0,
                    "expireStatus": 0,
                    "details": null,
                    "isActivity": null,
                    "shoppingNumber": null,
                    "riseContent": null,
                    "isNew": null,
                    "firstClass": null,
                    "secondClass": null,
                    "thirdClass": null,
                    "club": 1,
                    "risePrice": 0,
                    "businessScope": 2,
                    "businessScopeName": null,
                    "packageNum": 120,
                    "unit": "盒",
                    "dosageForm": "颗粒剂",
                    "prescriptionClass": "非处方药",
                    "storageCondition": "常温",
                    "warehouseCode": "HWI00000001",
                    "expireDateStr": "2021-02-28",
                    "isCmedicine": false
                },
                "current": 1,
                "size": 10
            }
        ],
        "grossProfit": 0.6983,
        "profit": 20.81,
        "taxRate": 13.0,
        "expireStatus": 0,
        "details": "<p><span style=\"line-height: 2.5;\">【商品名称】 川贝雪梨膏(善举)</span><br /><span style=\"line-height: 2.5;\">【商品中类】 呼吸系统</span><br /><span style=\"line-height: 2.5;\">【服用天数】 6天</span><br /><span style=\"line-height: 2.5;\">【商品规格】 182g</span><br /><span style=\"line-height: 2.5;\">【生产企业】 湖北老中醫制药有限责任公司</span><br /><span style=\"line-height: 2.5;\">【销售话术】 在产企业少，精选原料，经典组方，疗效好。</span><br /><span style=\"line-height: 2.5;\">【关联商品】 罗红霉素胶囊</span><br /><span style=\"line-height: 2.5;\">【关联理由】 川贝雪梨膏联合罗红霉素胶囊抗菌消炎从而缩短病程。</span><br /><span style=\"line-height: 2.5;\">【功能主治】润肺止咳，生津利咽 。用于阴虚肺热，咳嗽，喘促，口燥咽干。</span><br /><span style=\"line-height: 2.5;\">【用法用量】 口服，一次15g，一日2次。</span><br /><span style=\"line-height: 2.5;\">【用药嘱咐】 忌烟、酒及辛辣、生冷、油腻食物。不宜在服药期间同时服用滋补性中药。</span></p>\n<p><span style=\"line-height: 2.5;\">【用药禁忌】 尚不明确。</span></p>\n<p><span style=\"line-height: 2.5;\"><img src=\"https://imga.hnhcyy.com/detail/201904161643209198885.jpg\" alt=\"\" /><br /></span></p>",
        "isActivity": false,
        "shoppingNumber": 0,
        "riseContent": null,
        "isNew": false,
        "firstClass": "中西成药口服",
        "secondClass": "呼吸系统",
        "thirdClass": null,
        "club": 1,
        "risePrice": 0,
        "businessScope": 2,
        "businessScopeName": "中成药",
        "packageNum": 48,
        "unit": "瓶",
        "dosageForm": "煎膏剂",
        "prescriptionClass": "非处方药",
        "storageCondition": "常温",
        "warehouseCode": "HWI00000001",
        "expireDateStr": "2022-03-31",
        "isCmedicine": false
    }
}
`
	var dat map[string]interface{}
	json.Unmarshal([]byte(data), &dat)
	//ctx.JSON(200, dat)
	//d := service.GetProductInfo(sid)
	//ctx.JSON(200, new(models.R).Success(d))
}

func QuickBuyPage(ctx *Context){
	sid:=ctx.Param(":sid")
	fmt.Println(sid)
	data:=`
{
    "code": 0,
    "timestamp": 1570801752135,
    "msg": "success",
    "data": {
        "current": 1,
        "size": 10,
        "total": 5,
        "pages": 1,
        "records": [
            {
                "sid": 4774,
                "productCode": "SPH00001508",
                "commodityName": "维生素C泡腾片（乐赛仙）",
                "approvalNumber": "国药准字H20063336",
                "brand": "乐赛仙",
                "spec": "15片×12支×10盒/件",
                "barCode": "6916107520171",
                "manufacturer": "亚宝药业集团股份有限公司",
                "price": 203.4,
                "retailPrice": 477.6,
                "medicalInsuranceSid": 0,
                "minNum": 1,
                "maxNum": 3000,
                "step": 1,
                "packageNum": 10,
                "unit": "盒",
                "mainImg": "/img/SPH00001508/0.png",
                "firstSellPoint": null,
                "secondSellPoint": null,
                "batchCode": "190608",
                "expireDate": "2021-05-31 00:00:00",
                "manufactureDate": "2019-06-10 00:00:00",
                "stock": 1206.00,
                "status": null,
                "newStartTime": "0001-01-01 08:00:00",
                "newEndTime": "0001-01-01 08:00:00",
                "activityList": [
                    {
                        "activityId": "333",
                        "activityContent": "一次性购2中盒送2盒叶酸片（乐赛仙）0.4mg×31片×板北京麦迪海药业有限责任公司，以此类推，多买多送。",
                        "type": "1"
                    }
                ],
                "labelList": [
                    {
                        "sid": 3.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "showIndex": 0.0
                    }
                ],
                "huddle": 1,
                "valuation": false,
                "fixed": 0,
                "drugs": 1,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "",
                "criteria": "中国药典2015年版二部",
                "containedQuantity": "",
                "ppln": " ",
                "riseContent": null,
                "taxRate": 13.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000001",
                "isNew": false,
                "expireDateStr": "2021-05-31",
                "isCmedicine": false
            },
            {
                "sid": 6408,
                "productCode": "SPH00003619",
                "commodityName": "西洋参（草本至尊）",
                "approvalNumber": "",
                "brand": "草本至尊",
                "spec": "极细粉×60瓶/件   55g",
                "barCode": "6952545400804",
                "manufacturer": "重庆莱美金鼠中药饮片有限公司",
                "price": 68.4,
                "retailPrice": 228.0,
                "medicalInsuranceSid": 0,
                "minNum": 1,
                "maxNum": 3000,
                "step": 1,
                "packageNum": 60,
                "unit": "瓶",
                "mainImg": "/img/SPH00003619/0.png",
                "firstSellPoint": "",
                "secondSellPoint": "",
                "batchCode": "19A190601",
                "expireDate": "2022-06-10 00:00:00",
                "manufactureDate": "2019-06-11 00:00:00",
                "stock": 1036.00,
                "status": null,
                "newStartTime": "2019-07-05 10:26:13",
                "newEndTime": "2019-07-15 10:26:13",
                "activityList": null,
                "labelList": [
                    {
                        "showIndex": 0.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "sid": 3.0
                    }
                ],
                "huddle": 1,
                "valuation": false,
                "fixed": 0,
                "drugs": 0,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "加拿大",
                "criteria": "渝药监药注【2019】6号",
                "containedQuantity": "55g",
                "ppln": "渝20150067",
                "riseContent": null,
                "taxRate": 9.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000004",
                "isNew": false,
                "expireDateStr": "2022-06-10",
                "isCmedicine": true
            },
            {
                "sid": 6406,
                "productCode": "SPH00003617",
                "commodityName": "西洋参（草本至尊）",
                "approvalNumber": "",
                "brand": "草本至尊",
                "spec": "片(圆片)×60瓶/件   55g",
                "barCode": "6952545400811",
                "manufacturer": "重庆莱美金鼠中药饮片有限公司",
                "price": 111.3,
                "retailPrice": 318.0,
                "medicalInsuranceSid": 0,
                "minNum": 1,
                "maxNum": 3000,
                "step": 1,
                "packageNum": 60,
                "unit": "瓶",
                "mainImg": "/img/SPH00003617/0.png",
                "firstSellPoint": "",
                "secondSellPoint": "",
                "batchCode": "19A1914",
                "expireDate": "2022-05-31 00:00:00",
                "manufactureDate": "2019-05-31 00:00:00",
                "stock": 1302.00,
                "status": null,
                "newStartTime": "2019-07-05 10:24:51",
                "newEndTime": "2019-07-15 10:24:51",
                "activityList": null,
                "labelList": [
                    {
                        "sid": 3.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "showIndex": 0.0
                    }
                ],
                "huddle": 1,
                "valuation": true,
                "fixed": 0,
                "drugs": 1,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "加拿大",
                "criteria": "《中华人民共和国药典》2015年版一部",
                "containedQuantity": "55g",
                "ppln": "渝20150067",
                "riseContent": null,
                "taxRate": 9.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000004",
                "isNew": false,
                "expireDateStr": "2022-05-31",
                "isCmedicine": true
            },
            {
                "sid": 6404,
                "productCode": "SPH00003615",
                "commodityName": "西洋参（草本至尊）",
                "approvalNumber": "",
                "brand": "草本至尊",
                "spec": "片(刨片)×60瓶/件   55g",
                "barCode": "6952545400774",
                "manufacturer": "重庆莱美金鼠中药饮片有限公司",
                "price": 79.8,
                "retailPrice": 228.0,
                "medicalInsuranceSid": 0,
                "minNum": 1,
                "maxNum": 3000,
                "step": 1,
                "packageNum": 60,
                "unit": "瓶",
                "mainImg": "/img/SPH00003615/0.png",
                "firstSellPoint": "",
                "secondSellPoint": "",
                "batchCode": "19A1913",
                "expireDate": "2022-09-03 00:00:00",
                "manufactureDate": "2019-09-04 00:00:00",
                "stock": 1746.00,
                "status": null,
                "newStartTime": "2019-07-05 10:22:43",
                "newEndTime": "2019-07-15 10:22:43",
                "activityList": null,
                "labelList": [
                    {
                        "sid": 3.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "showIndex": 0.0
                    }
                ],
                "huddle": 1,
                "valuation": true,
                "fixed": 0,
                "drugs": 1,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "加拿大",
                "criteria": "《中华人民共和国药典》2015年版一部",
                "containedQuantity": "55g",
                "ppln": "渝20150067",
                "riseContent": null,
                "taxRate": 9.0,
                "grossProfit": null,
                "warehouseCode": "HWI00000004",
                "isNew": false,
                "expireDateStr": "2022-09-03",
                "isCmedicine": true
            },
            {
                "sid": 6394,
                "productCode": "SPH00003581",
                "commodityName": "山楂(善举)",
                "approvalNumber": " ",
                "brand": "善举",
                "spec": "统片×40袋/件   500g",
                "barCode": "6972275490050",
                "manufacturer": "临沂九州天润中药饮片产业有限公司",
                "price": 9.9,
                "retailPrice": 29.9,
                "medicalInsuranceSid": 0,
                "minNum": 1,
                "maxNum": 3000,
                "step": 1,
                "packageNum": 40,
                "unit": "袋",
                "mainImg": "/img/SPH00003581/0.png",
                "firstSellPoint": "精心筛选，保留原味，片大肉厚。",
                "secondSellPoint": "",
                "batchCode": "L9062301",
                "expireDate": "2024-06-22 00:00:00",
                "manufactureDate": "2019-06-23 00:00:00",
                "stock": 2580.00,
                "status": null,
                "newStartTime": "2019-07-24 11:25:22",
                "newEndTime": "2019-08-03 11:25:22",
                "activityList": null,
                "labelList": [
                    {
                        "showIndex": 0.0,
                        "labelVal": "公益宝贝",
                        "iconUrl": "2019/09/24/1176433939250675712.png",
                        "sid": 4.0
                    },
                    {
                        "showIndex": 0.0,
                        "labelVal": "岳麓",
                        "iconUrl": "2019/09/24/1176434017310867456.png",
                        "sid": 3.0
                    }
                ],
                "huddle": 1,
                "valuation": false,
                "fixed": 0,
                "drugs": 0,
                "risePrice": 0,
                "expireStatus": 0,
                "lvl": "",
                "producingArea": "山东",
                "criteria": "《中国药典》2015年版",
                "containedQuantity": "500g",
                "ppln": "鲁20180375",
                "riseContent": null,
                "taxRate": 9.0,
                "grossProfit": null,
                "warehouseCode": "1010401",
                "isNew": false,
                "expireDateStr": "2024-06-22",
                "isCmedicine": false
            }
        ],
        "facetResultMap": {
            "brandFacet": [
                {
                    "num": 3,
                    "name": "草本至尊"
                },
                {
                    "num": 1,
                    "name": "乐赛仙"
                },
                {
                    "num": 1,
                    "name": "善举"
                }
            ],
            "manufacturerFacet": [
                {
                    "num": 3,
                    "name": "重庆莱美金鼠中药饮片有限公司"
                },
                {
                    "num": 1,
                    "name": "临沂九州天润中药饮片产业有限公司"
                },
                {
                    "num": 1,
                    "name": "亚宝药业集团股份有限公司"
                }
            ]
        },
        "cond": {
            "quick": true
        },
        "aggrResult": null,
        "rowNumMax": 10,
        "rowNumMin": 0
    }
}
`
	var dat map[string]interface{}
	json.Unmarshal([]byte(data), &dat)
	ctx.JSON(200, dat)
}