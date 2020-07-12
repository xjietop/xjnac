package ctrls

import (
	"gitee.com/xjieinfo/xjnac/mapper"
	"gitee.com/xjieinfo/xjnac/models"
	"gitee.com/xjieinfo/xjnac/util"
	"gitee.com/xjieinfo/xjnac/util/entity"
	e_pub "gitee.com/xjieinfo/xjnac/util/entity"
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"strconv"
	"time"
)

func ConfigList(ctx *gin.Context) {
	scurrent := ctx.DefaultQuery("current", "1")
	ssize := ctx.DefaultQuery("size", "20")
	current, _ := strconv.Atoi(scurrent)
	size, _ := strconv.Atoi(ssize)
	where := ctx.DefaultQuery("where", "")

	var wrapper e_pub.QueryWrapper
	wrapper.Current = current
	wrapper.Size = size
	wrapper.Where = "data_id like concat('%',?,'%')"
	wrapper.Args = []interface{}{where}
	wrapper.Orderby = "data_id"
	Page, err := mapper.TxjconfigMapper{}.SelectPage(wrapper)
	if err != nil {
		ctx.JSON(200, new(entity.R).Fail(err.Error()))
		return
	}
	ctx.JSON(200, new(e_pub.R).Success(Page))
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
		ctx.JSON(200, new(entity.R).Fail(err.Error()))
	} else if n > 0 {
		ctx.JSON(200, new(entity.R).Success("ok"))
	} else {
		ctx.JSON(200, new(entity.R).Fail("fail"))
	}
}

func ConfigView(ctx *gin.Context) {
	config := new(models.Txjconfig)
	sId := ctx.DefaultQuery("Id", "0")
	Id, _ := strconv.Atoi(sId)
	has, err := util.Db.ID(Id).Get(config)
	if err != nil {
		//fmt.Println(err)
		ctx.JSON(200, new(entity.R).Fail(err.Error()))
	} else if has {
		ctx.JSON(200, new(entity.R).Success(config))
	} else {
		ctx.JSON(200, new(entity.R).Fail("fail"))
	}
}

func GetConfig(ctx *gin.Context) {
	config := new(models.Txjconfig)
	config.DataId = ctx.DefaultQuery("DataId", "0")
	has, err := util.Db.Get(config)
	if err != nil {
		//fmt.Println(err)
		ctx.JSON(200, new(entity.R).Fail(err.Error()))
	} else if has {
		ctx.JSON(200, new(entity.R).Success(config.Content))
	} else {
		ctx.JSON(200, new(entity.R).Fail("fail"))
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
		ctx.JSON(200, new(entity.R).Fail(err.Error()))
	} else if n > 0 {
		ctx.JSON(200, new(entity.R).Success("ok"))
	} else {
		ctx.JSON(200, new(entity.R).Fail("fail"))
	}
}

func ConfigDelete(ctx *gin.Context) {
	config := new(models.Txjconfig)
	sId := ctx.DefaultQuery("Id", "0")
	Id, _ := strconv.Atoi(sId)
	has, err := util.Db.ID(Id).Get(config)
	if err != nil {
		ctx.JSON(200, new(entity.R).Fail(err.Error()))
		return
	} else if !has {
		ctx.JSON(200, new(entity.R).Fail("fail"))
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
		ctx.JSON(200, new(entity.R).Fail(err.Error()))
	} else {
		_, err = util.Db.ID(config.Id).Delete(config)
		if err != nil {
			ctx.JSON(200, new(entity.R).Fail(err.Error()))
		} else {
			ctx.JSON(200, new(entity.R).Success("ok"))
		}
	}
}
