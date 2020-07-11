package ctrls

import (
	"gitee.com/xjieinfo/xjnac/models"
	"gitee.com/xjieinfo/xjnac/util"
	"github.com/gin-gonic/gin"
	"strconv"
)

//rpcx服务列表
func RpcxList(ctx *gin.Context) {
	spage := ctx.DefaultQuery("current", "1")
	ssize := ctx.DefaultQuery("size", "20")
	page, _ := strconv.Atoi(spage)
	size, _ := strconv.Atoi(ssize)

	m := util.EtcdV2Get(util.Conf.App.Etcdurl, "/rpcx")
	//log.Println(m)
	rpcxList := make([]models.Rpcx, 0)
	for k, v := range m {
		if v != "" {
			rpcx := models.Rpcx{
				Key:   k,
				Value: v,
			}
			rpcxList = append(rpcxList, rpcx)
		}
	}
	models.SortRpcx(rpcxList, func(p, q *models.Rpcx) bool {
		return p.Key < q.Key // Key 递增排序
	})
	Page := new(models.Page)
	Page.Records = rpcxList
	Page.Size = size
	Page.Total = len(rpcxList)
	Page.Current = page
	if Page.Total%size == 0 {
		Page.Pages = Page.Total / size
	} else {
		Page.Pages = Page.Total/size + 1
	}
	ctx.JSON(200, new(models.R).Success(Page))
}
