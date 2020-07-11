package ctrls

import (
	"strconv"
	"strings"

	"gitee.com/xjieinfo/xjnac/models"
	"gitee.com/xjieinfo/xjnac/util"
	"github.com/gin-gonic/gin"
)

//服务列表
func ServicesList(ctx *gin.Context) {
	spage := ctx.DefaultQuery("current", "1")
	ssize := ctx.DefaultQuery("size", "20")
	page, _ := strconv.Atoi(spage)
	size, _ := strconv.Atoi(ssize)
	//where := ctx.DefaultQuery("where", "")
	endpoints := util.Conf.App.Etcdurl //[]string{"127.0.0.1:2379"}
	list := util.EtcdGet(endpoints, "services/")
	var srvs []models.Srv
	for key, value := range list {
		strs := strings.Split(key, "/")
		s1 := new(models.Srv)
		s1.Name = strs[1]
		s1.Url = strs[2]
		s1.StartTime = value
		srvs = append(srvs, *s1)
	}
	models.SortSrv(srvs, func(p, q *models.Srv) bool {
		return p.Name < q.Name // Name 递增排序
	})
	Page := new(models.Page)
	Page.Records = srvs
	Page.Size = size
	Page.Total = len(srvs)
	Page.Current = page
	if Page.Total%size == 0 {
		Page.Pages = Page.Total / size
	} else {
		Page.Pages = Page.Total/size + 1
	}
	ctx.JSON(200, new(models.R).Success(Page))
}

//检查服务健康情况
func ServiceHealth(ctx *gin.Context) {
	url := ctx.DefaultQuery("url", "")
	url = "http://" + url + "/health"
	str, err := util.HttpGetStr(url)
	if err != nil {
		ctx.JSON(200, new(models.R).Fail(err.Error()))
		return
	}
	ctx.JSON(200, new(models.R).Success(str))
}

//删除服务
func ServiceDel(ctx *gin.Context) {
	name := ctx.DefaultQuery("name", "")
	url := ctx.DefaultQuery("url", "")

	key := "services/" + name + "/" + url
	endpoints := util.Conf.App.Etcdurl
	ok, err := util.EtcdDel(endpoints, key)
	if err != nil {
		ctx.JSON(200, new(models.R).Fail(err.Error()))
		return
	}
	if !ok {
		ctx.JSON(200, new(models.R).Fail("fail"))
		return
	}
	ctx.JSON(200, new(models.R).Success("ok"))
}
