package ctrls

import (
	"strconv"
	"time"
	"unsafe"

	"gitee.com/xjieinfo/xjnac/models"
	"gitee.com/xjieinfo/xjnac/util"
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

func ConfigList(ctx *gin.Context) {
	spage := ctx.DefaultQuery("current", "1")
	ssize := ctx.DefaultQuery("size", "20")
	page, _ := strconv.Atoi(spage)
	size, _ := strconv.Atoi(ssize)
	//where := ctx.DefaultQuery("where", "")
	configs := make([]models.Txjconfig, 0)
	start := (page - 1) * size
	err := util.Db.Limit(size, start).Find(&configs)
	if err != nil {
		ctx.JSON(200, new(models.R).Fail(err.Error()))
		return
	}

	config := new(models.Txjconfig)
	total, err := util.Db.Count(config)
	if err != nil {
		ctx.JSON(200, new(models.R).Fail(err.Error()))
		return
	}
	Page := new(models.Page)
	Page.Records = configs
	Page.Size = size
	Page.Total = *(*int)(unsafe.Pointer(&total))
	Page.Current = page
	if Page.Total%size == 0 {
		Page.Pages = Page.Total / size
	} else {
		Page.Pages = Page.Total/size + 1
	}
	ctx.JSON(200, new(models.R).Success(Page))
}

func ConfigAdd(ctx *gin.Context) {
	config := new(models.Txjconfig)
	config.DataId = ctx.DefaultQuery("DataId", "")   //"member-dev.yml"
	config.CDesc = ctx.DefaultQuery("CDesc", "")     //"会员管理"
	config.Content = ctx.DefaultQuery("Content", "") //
	config.Md5 = util.Md5V(config.DataId + config.Content)
	config.GmtCreate = time.Now()
	config.GmtModified = time.Now()
	session := sessions.Default(ctx)
	Username := session.Get("username").(string)
	config.UserCreate = Username
	config.UserModified = Username
	n, err := util.Db.Insert(config)
	if err != nil {
		//fmt.Println(err)
		ctx.JSON(200, new(models.R).Fail(err.Error()))
	} else if n > 0 {
		ctx.JSON(200, new(models.R).Success("ok"))
	} else {
		ctx.JSON(200, new(models.R).Fail("fail"))
	}
}

func ConfigView(ctx *gin.Context) {
	config := new(models.Txjconfig)
	sId := ctx.DefaultQuery("Id", "0")
	Id, _ := strconv.Atoi(sId)
	has, err := util.Db.ID(Id).Get(config)
	if err != nil {
		//fmt.Println(err)
		ctx.JSON(200, new(models.R).Fail(err.Error()))
	} else if has {
		ctx.JSON(200, new(models.R).Success(config))
	} else {
		ctx.JSON(200, new(models.R).Fail("fail"))
	}
}

func GetConfig(ctx *gin.Context) {
	config := new(models.Txjconfig)
	config.DataId = ctx.DefaultQuery("DataId", "0")
	has, err := util.Db.Get(config)
	if err != nil {
		//fmt.Println(err)
		ctx.JSON(200, new(models.R).Fail(err.Error()))
	} else if has {
		ctx.JSON(200, new(models.R).Success(config.Content))
	} else {
		ctx.JSON(200, new(models.R).Fail("fail"))
	}
}

func ConfigUpdate(ctx *gin.Context) {
	config := new(models.Txjconfig)
	Id, _ := strconv.Atoi(ctx.DefaultQuery("Id", "0"))
	config.Id = int64(Id)
	//config.DataId = ctx.DefaultQuery("DataId", "") //"member-dev.yml"
	config.CDesc = ctx.DefaultQuery("CDesc", "")     //"会员管理"
	config.Content = ctx.DefaultQuery("Content", "") //
	config.Md5 = util.Md5V(config.DataId + config.Content)
	config.GmtModified = time.Now()
	session := sessions.Default(ctx)
	Username := session.Get("username").(string)
	config.UserModified = Username
	n, err := util.Db.ID(config.Id).Update(config)
	if err != nil {
		//fmt.Println(err)
		ctx.JSON(200, new(models.R).Fail(err.Error()))
	} else if n > 0 {
		ctx.JSON(200, new(models.R).Success("ok"))
	} else {
		ctx.JSON(200, new(models.R).Fail("fail"))
	}
}

func ConfigDelete(ctx *gin.Context) {
	config := new(models.Txjconfig)
	sId := ctx.DefaultQuery("Id", "0")
	Id, _ := strconv.Atoi(sId)
	has, err := util.Db.ID(Id).Get(config)
	if err != nil {
		ctx.JSON(200, new(models.R).Fail(err.Error()))
		return
	} else if !has {
		ctx.JSON(200, new(models.R).Fail("fail"))
		return
	}
	configDel := new(models.TxjconfigDel)
	configDel.DataId = config.DataId
	configDel.CDesc = config.CDesc
	configDel.Content = config.Content
	configDel.Md5 = config.Md5
	configDel.UserCreate = config.UserCreate
	configDel.GmtCreate = config.GmtCreate
	configDel.UserModified = config.UserModified
	configDel.GmtModified = config.GmtModified
	session := sessions.Default(ctx)
	Username := session.Get("username").(string)
	configDel.UserDeleted = Username
	configDel.GmtDeleted = time.Now()
	_, err = util.Db.Insert(configDel)
	if err != nil {
		ctx.JSON(200, new(models.R).Fail(err.Error()))
	} else {
		_, err = util.Db.ID(config.Id).Delete(config)
		if err != nil {
			ctx.JSON(200, new(models.R).Fail(err.Error()))
		} else {
			ctx.JSON(200, new(models.R).Success("ok"))
		}
	}
}
