package util

import (
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql"
	//"github.com/go-xorm/xorm"
	"github.com/xormplus/xorm"
)

var (
	Db *xorm.Engine
)

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
