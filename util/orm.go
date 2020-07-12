package util

import (
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/go-xorm/xorm"
	//"github.com/xormplus/xorm"
	"github.com/jinzhu/gorm"
)

var (
	Db   *xorm.Engine
	Gorm *gorm.DB
)

func GormInit() *gorm.DB {
	dataSourceName := Conf.Datasource.Username + ":" + Conf.Datasource.Password + "@tcp(" + Conf.Datasource.Url + ":" + Conf.Datasource.Port + ")/" + Conf.Datasource.Database + "?charset=utf8&parseTime=True&loc=Asia%2fShanghai"
	log.Println("开始连接数据库...")
	Gorm, err := gorm.Open(Conf.Datasource.Drivername, dataSourceName)
	if err != nil {
		log.Println("数据库连接失败")
		log.Println(err)
		os.Exit(1)
	}
	Gorm.SingularTable(true)
	Gorm.LogMode(true)
	log.Println("连接数据库...OK")
	return Gorm
}

func OrmInit() {
	var err error
	dataSourceName := Conf.Datasource.Username + ":" + Conf.Datasource.Password + "@tcp(" + Conf.Datasource.Url + ":" + Conf.Datasource.Port + ")/" + Conf.Datasource.Database + "?charset=utf8&parseTime=True&loc=Asia%2fShanghai"
	Db, err = xorm.NewEngine(Conf.Datasource.Drivername, dataSourceName)
	if err = Db.Ping(); err != nil {
		fmt.Println("数据库连接失败")
		os.Exit(1)
	}
	Db.ShowSQL(true)
}

type Srv struct {
	Name      string
	Url       string
	StartTime string
}
